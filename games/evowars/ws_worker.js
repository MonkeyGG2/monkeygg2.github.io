if( 'function' === typeof importScripts)
{
    importScripts('msgpack.min.js');

    if (typeof msgpack !== 'undefined')
    {
        var msgPack = msgpack;
    }

    var SEND_BINARY = false;

    var requestData = {};
    var ws = null;
    var ping = {
        timerObject: null,
        pingTime: -1,
        pongTime: -1,
        pingPong: -1000,
        frequency: 1
    };

    var pingTesterData = [];

    onmessage = function(e)
    {
        requestData = e.data;

        switch (e.data.action)
        {
            case "connect": connectWS(); break;
            case "close": closeWS(); break;
            case "send": sendMsg(); break;
            case "sendRaw": sendRawMsg(); break;
            case "sendPing": pingToServerInstant(); break;
            case "setPing": ping.frequency = e.data.data; break;
            case "startPingTester": startPingTester(); break;
        }
    };

    startPingTester = function()
    {
        console.log("StartPing Tester WS", requestData)
        if (typeof requestData.data.urls === "undefined" || requestData.data.urls.length === 0)
        {
            console.warn("[NSG_PowerWS : ws_worker] StartPingTester: URLs array empty. Nothing to test.")
            return;
        }

        var i, len = requestData.data.urls.length;

        for (i = 0; i < len; ++i)
        {
            pingTesterData[i] = {
                ws: null,
                url: requestData.data.urls[i],
                minResultedPing: 999999999999,
                lastPingTime: -1,
                testsLeft: requestData.data.maximumAttempts,
                testsInterval: requestData.data.testsInterval,
                pingRequired: requestData.data.pingRequired,
                testTimeoutObj: null
            };
            pingTesterSetupConnection(pingTesterData[i]);
        }
    }

    pingTesterSetupConnection = function(testData_)
    {
        try {
            console.log("[startPingTester] connecting: ", testData_.url);
            testData_.ws = new WebSocket(testData_.url);
        }
        catch (e) {
            testData_.ws = null;

            console.log("[startPingTester] Unable to create a WebSocket with the given address and protocol. >> ", testData_.url);
            //continue;
        }

        testData_.ws.onopen = function(){
            pingTesterRunPing(testData_);
        }

        testData_.ws.onerror = function (err_)
        {
            testData_.testsLeft = 0;
            testData_.minResultedPing = -1;
            pingTestEndTest();

        };
        testData_.ws.onclose = function (e)
        {
            var rejectCodes = [
                1013 // invalid instance id
            ]

            if (rejectCodes.indexOf(e.code) !== -1)
            {
                testData_.testsLeft = 0;
                testData_.minResultedPing = -1;
            }

            console.log("PingTester CLOSED: ", testData_.url, e);
        };

        testData_.ws.onmessage = function (msg_)
        {
            decodeFromBlob(msg_.data).then(function (value)
                {
                    var pongTime = Date.now();
                    var pingPong = pongTime - testData_.lastPingTime;

                    if (pingPong < testData_.minResultedPing)
                    {
                        testData_.minResultedPing = pingPong;

                        /*if (testData_.minResultedPing <= testData_.pingRequired)
                        {
                            testData_.testsLeft = 0;
                        }*/
                    }

                    testData_.testsLeft--;

                    if (testData_.testsLeft > 0)
                    {
                        pingTesterRunPing(testData_);
                    }
                    else
                    {
                        pingTestEndTest();
                    }
                },
                function (error)
                {
                    console.warn("[NSG_PowerWS : ws_worker] pingTesterData[i].ws.onmessage: ",  error);
                });
        }
    }


    pingTesterRunPing = function (testData_)
    {
        console.log("[startPingTester] staring inner ", testData_.url);

        if (testData_.ws.readyState !== WebSocket.OPEN) return;

        testData_.testTimeoutObj = setTimeout(function ()
        {
            console.log("PINGING: ", testData_.url, testData_.ws.readyState);
            if (testData_.ws.readyState !== WebSocket.OPEN) return;

            testData_.lastPingTime = Date.now();
            testData_.ws.send(MessagePack.encode(""));
            testData_.testTimeoutObj = null;

        }, testData_.testsInterval * 1000);
    };

    pingTestEndTest = function ()
    {
        var i, len = pingTesterData.length;

        for (i = 0; i < len; ++i)
        {
            if (pingTesterData[i].testsLeft > 0) return;
        }


        var returnData = {
            action: "pingTester"
        }

        var pingTesterResults = [];

        for (i = 0; i < len; ++i)
        {
            pingTesterResults[i] = {
                minPing: pingTesterData[i].minResultedPing
            };

            if(pingTesterData[i].ws.readyState !== WebSocket.CLOSED)
            {
                pingTesterData[i].ws.close();
            }
        }


        returnData.data = pingTesterResults;
        postToPowerWS(returnData);
        pingTesterData = [];
    }

    pingToServerInstant = function ()
    {
        ping.pingTime = Date.now();
        ws.send(MessagePack.encode(""));
    };



    pingToServer = function ()
    {
        if (ws.readyState !== WebSocket.OPEN) return;

        if (ping.timerObject !== null)
        {
            clearTimeout(ping.timerObject);
            ping.timerObject = null;
        }

        ping.timerObject = setTimeout(function ()
        {
            if (ws.readyState !== WebSocket.OPEN) return;

            ping.pingTime = Date.now();
            ws.send(MessagePack.encode(""));
            ping.timerObject = null;

        }, ping.frequency * 1000);
    };

    postToPowerWS = function (data)
    {
        data.timestamp = Date.now();
        postMessage(data);
    }

    connectWS = function()
    {
        var returnData = {
            action: "connect"
        }

        if (ws)
            ws.close();

        var self = this;
        var url_ = requestData.url;
        var requireProtocol_ = requestData.requireProtocol;

        //last_url = url_;

        try {
            if (requireProtocol_ === "")
                ws = new WebSocket(url_);
            else
                ws = new WebSocket(url_, requireProtocol_);
        }
        catch (e) {
            ws = null;

            returnData.errorMsg = "Unable to create a WebSocket with the given address and protocol.";
            postToPowerWS(returnData);
            return;
        }

        //ws.binaryType = "arraybuffer";
        ws.onopen = function()
        {
            var returnData = {
                action: "connect"
            }
            // Check required protocol is supported if any
            if (requireProtocol_.length && self.ws.protocol.indexOf(requireProtocol_) === -1)
            {
                returnData.errorMsg = "WebSocket required protocol '" + requireProtocol_ + "' not supported by server";
                postToPowerWS(returnData);
            }
            else
            {
                pingToServerInstant();
                postToPowerWS(returnData);

            }

        };
        ws.onerror = function (err_)
        {
            var returnData = {
                action: "connect"
            }
            if (typeof err_ === "string")
                returnData.errorMsg = err_;
            else
                returnData.errorMsg = (err_ && (typeof err_.data === "string") ? err_.data : "");

            postToPowerWS(returnData);
        };
        ws.onclose = function (e)
        {
            var returnData = {
                action: "close"
            }
            if (ping.handler) clearTimeout(ping.handler);

            returnData.closeCode = e["code"] || 0;
            returnData.closeReason = e["reason"] || "";
            postToPowerWS(returnData);
        };

        /*async function decodeFromBlob(blob)
        {
            if (blob.stream)
            {
                // Blob#stream(): ReadableStream<Uint8Array> (recommended)
                return await MessagePack.decodeAsync(blob.stream()); // TODO mozna zoptymalizowac uzywajac obiektu Decoder
            } else
            {
                // Blob#arrayBuffer(): Promise<ArrayBuffer> (if stream() is not available)
                return MessagePack.decode(await blob.arrayBuffer());
            }
        }*/

        ws.onmessage = function (msg_)
        {
            var returnData = {
                action: "message"
            }

            if (typeof msg_.data === "string")
            {
                msg_ = JSON.parse(msg_.data);

                returnData.data = msg_;
                postToPowerWS(returnData);


            } else // if non binary data
            {
                decodeFromBlob(msg_.data).then(
                    function (value)
                    {
                        if (typeof value === "string" && value === "")
                        {
                            ping.pongTime = Date.now();
                            ping.pingPong = ping.pongTime - ping.pingTime;
                            pingToServer();
                            returnData.action = "ping";
                            returnData.data = ping.pingPong;
                        }
                        else
                        {
                            returnData.data = value;
                        }
                        postToPowerWS(returnData);
                    },
                    function (error)
                    {
                        console.warn(error);
                    }
                );
            }
        }
    };

    closeWS = function ()
    {
        if (ws) ws.close(3500, "Closed by the client.");
    }

    sendMsg = function ()
    {
        if (!ws || ws.readyState !== 1 /** OPEN **/) return;

        if (SEND_BINARY === true)
        {
            ws.send(MessagePack.encode(requestData.data));
        }
        else
        {
            ws.send(JSON.stringify(requestData.data));
        }
    }

    sendRawMsg = function ()
    {
        if (!ws || ws.readyState !== 1 /** OPEN **/) return;

        if (SEND_BINARY === true)
        {
            ws.send(MessagePack.encode(requestData.data));
        }
        else
        {
            ws.send(requestData.data);
        }

    }

    async function decodeFromBlob(blob)
    {
        if (blob.stream)
        {
            // Blob#stream(): ReadableStream<Uint8Array> (recommended)
            return await MessagePack.decodeAsync(blob.stream()); // TODO mozna zoptymalizowac uzywajac obiektu Decoder
        } else
        {
            // Blob#arrayBuffer(): Promise<ArrayBuffer> (if stream() is not available)
            return MessagePack.decode(await blob.arrayBuffer());
        }
    }

}


