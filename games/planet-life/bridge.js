(function () {
	if (typeof webkit !== "undefined") {
		var channel = webkit.messageHandlers["__SWIFT_BRIDGE_COMMANDER"];
	} else if (typeof __SWIFT_BRIDGE_COMMANDER !== "undefined") {
		var channel = __SWIFT_BRIDGE_COMMANDER;
	} else {
		return;
	}

    var bridge = {};
    var stack = [];

    var uuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    var find = function (id) {
        var result;
        for (var i = 0; i <= stack.length; i++) {
            if (stack[i].id === id) {
                result = stack[i];
                stack.splice(i, 1);
                break;
            }
        }
        return result;
    };

    Object.defineProperty(bridge, "call", {
        "value": function (command, args, onSuccess, onError) {
            var message = {
                id: uuid(),
                command: command,
                args: args || "",
                response: onSuccess,
                error: onError,
                promise: promise
            };
            var promise = new Promise(function (resolve, reject) {
                message.response = onSuccess || resolve;
                message.error = onError || reject;
            });

            stack.push(message);
            channel.postMessage(JSON.stringify(message));

            return promise;
        }, "configurable": false
    });

    Object.defineProperty(bridge, "response", {
        "value": function (data) {
            var item = find(data.id);
            if (item)
                item.response(data.payload);
        }, "configurable": false
    });

    Object.defineProperty(bridge, "error", {
        "value": function (data) {
            var item = find(data.id);
            if (item)
                item.error(data.payload);
        }, "configurable": false
    });

    Object.defineProperty(window, "BridgeCommander", { "value": bridge, "configurable": false });
} ());