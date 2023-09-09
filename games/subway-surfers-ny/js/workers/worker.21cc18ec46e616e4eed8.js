/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function(exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function(value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() {
                return module['default'];
            } :
            /******/
            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);

        // CONCATENATED MODULE: ./src/scripts/lib/pixi-3d/fbx/three/LoaderUtils.js
        function decodeText(array) {
            if (typeof TextDecoder !== 'undefined') {
                return new TextDecoder().decode(array);
            } // Avoid the String.fromCharCode.apply(null, array) shortcut, which
            // throws a "maximum call stack size exceeded" error for large arrays.


            var s = '';

            for (var i = 0, il = array.length; i < il; i++) {
                // Implicitly assumes little-endian.
                s += String.fromCharCode(array[i]);
            } // Merges multi-byte utf-8 characters.


            return decodeURIComponent(escape(s));
        }

        function extractUrlBase(url) {
            var index = url.lastIndexOf('/');
            if (index === -1) return './';
            return url.substr(0, index + 1);
        }
        // CONCATENATED MODULE: ./src/scripts/lib/pixi-3d/fbx/BinaryReader.js


        var BinaryReader_BinaryReader =
            /*#__PURE__*/
            function() {
                function BinaryReader(buffer, littleEndian) {
                    this.dv = new DataView(buffer);
                    this.offset = 0;
                    this.littleEndian = littleEndian !== undefined ? littleEndian : true;
                }

                var _proto = BinaryReader.prototype;

                _proto.getOffset = function getOffset() {
                    return this.offset;
                };

                _proto.size = function size() {
                    return this.dv.buffer.byteLength;
                };

                _proto.skip = function skip(length) {
                    this.offset += length;
                } // seems like true/false representation depends on exporter.
                // true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
                // then sees LSB.
                ;

                _proto.getBoolean = function getBoolean() {
                    return (this.getUint8() & 1) === 1;
                };

                _proto.getBooleanArray = function getBooleanArray(size) {
                    var a = [];

                    for (var i = 0; i < size; i++) {
                        a.push(this.getBoolean());
                    }

                    return a;
                };

                _proto.getUint8 = function getUint8() {
                    var value = this.dv.getUint8(this.offset);
                    this.offset += 1;
                    return value;
                };

                _proto.getInt16 = function getInt16() {
                    var value = this.dv.getInt16(this.offset, this.littleEndian);
                    this.offset += 2;
                    return value;
                };

                _proto.getInt32 = function getInt32() {
                    var value = this.dv.getInt32(this.offset, this.littleEndian);
                    this.offset += 4;
                    return value;
                };

                _proto.getInt32Array = function getInt32Array(size) {
                    var a = [];

                    for (var i = 0; i < size; i++) {
                        a.push(this.getInt32());
                    }

                    return a;
                };

                _proto.getUint32 = function getUint32() {
                    var value = this.dv.getUint32(this.offset, this.littleEndian);
                    this.offset += 4;
                    return value;
                } // JavaScript doesn't support 64-bit integer so calculate this here
                // 1 << 32 will return 1 so using multiply operation instead here.
                // There's a possibility that this method returns wrong value if the value
                // is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
                // TODO: safely handle 64-bit integer
                ;

                _proto.getInt64 = function getInt64() {
                    var low, high;

                    if (this.littleEndian) {
                        low = this.getUint32();
                        high = this.getUint32();
                    } else {
                        high = this.getUint32();
                        low = this.getUint32();
                    } // calculate negative value


                    if (high & 0x80000000) {
                        high = ~high & 0xFFFFFFFF;
                        low = ~low & 0xFFFFFFFF;
                        if (low === 0xFFFFFFFF) high = high + 1 & 0xFFFFFFFF;
                        low = low + 1 & 0xFFFFFFFF;
                        return -(high * 0x100000000 + low);
                    }

                    return high * 0x100000000 + low;
                };

                _proto.getInt64Array = function getInt64Array(size) {
                    var a = [];

                    for (var i = 0; i < size; i++) {
                        a.push(this.getInt64());
                    }

                    return a;
                } // Note: see getInt64() comment
                ;

                _proto.getUint64 = function getUint64() {
                    var low, high;

                    if (this.littleEndian) {
                        low = this.getUint32();
                        high = this.getUint32();
                    } else {
                        high = this.getUint32();
                        low = this.getUint32();
                    }

                    var res = high * 0x100000000 + low;

                    if (Math.abs(res) > Number.MAX_SAFE_INTEGER) {
                        console.log("Not safe");
                    }

                    return high * 0x100000000 + low;
                };

                _proto.getFloat32 = function getFloat32() {
                    var value = this.dv.getFloat32(this.offset, this.littleEndian);
                    this.offset += 4;
                    return value;
                };

                _proto.getFloat32Array = function getFloat32Array(size) {
                    var a = [];

                    for (var i = 0; i < size; i++) {
                        a.push(this.getFloat32());
                    }

                    return a;
                };

                _proto.getFloat64 = function getFloat64() {
                    var value = this.dv.getFloat64(this.offset, this.littleEndian);
                    this.offset += 8;
                    return value;
                };

                _proto.getFloat64Array = function getFloat64Array(size) {
                    var a = [];

                    for (var i = 0; i < size; i++) {
                        a.push(this.getFloat64());
                    }

                    return a;
                };

                _proto.getArrayBuffer = function getArrayBuffer(size) {
                    var value = this.dv.buffer.slice(this.offset, this.offset + size);
                    this.offset += size;
                    return value;
                };

                _proto.getString = function getString(size) {
                    // note: safari 9 doesn't support Uint8Array.indexOf; create intermediate array instead
                    var a = [];

                    for (var i = 0; i < size; i++) {
                        a[i] = this.getUint8();
                    }

                    var nullByte = a.indexOf(0);
                    if (nullByte >= 0) a = a.slice(0, nullByte);
                    return decodeText(new Uint8Array(a));
                };

                return BinaryReader;
            }();


        // CONCATENATED MODULE: ./src/scripts/lib/pixi-3d/fbx/FBXTree.js
        var FBXTree =
            /*#__PURE__*/
            function() {
                function FBXTree() {}

                var _proto = FBXTree.prototype;

                _proto.add = function add(key, val) {
                    this[key] = val;
                };

                return FBXTree;
            }();
        // CONCATENATED MODULE: ./src/scripts/lib/pixi-3d/fbx/BinaryParser.js



        var BinaryParser_BinaryParser =
            /*#__PURE__*/
            function() {
                function BinaryParser(context) {
                    this.context = context;
                }

                var _proto = BinaryParser.prototype;

                _proto.parse = function parse(buffer) {
                    var reader = new BinaryReader_BinaryReader(buffer);
                    reader.skip(23); // skip magic 23 bytes

                    var version = reader.getUint32(); // console.log('THREE.FBXLoader: FBX binary version: ' + version);

                    var allNodes = new FBXTree();

                    while (!this.endOfContent(reader)) {
                        var node = this.parseNode(reader, version);
                        if (node !== null) allNodes.add(node.name, node);
                    }

                    return allNodes;
                } // Check if reader has reached the end of content.
                ;

                _proto.endOfContent = function endOfContent(reader) {
                    // footer size: 160bytes + 16-byte alignment padding
                    // - 16bytes: magic
                    // - padding til 16-byte alignment (at least 1byte?)
                    //	(seems like some exporters embed fixed 15 or 16bytes?)
                    // - 4bytes: magic
                    // - 4bytes: version
                    // - 120bytes: zero
                    // - 16bytes: magic
                    if (reader.size() % 16 === 0) {
                        return (reader.getOffset() + 160 + 16 & ~0xf) >= reader.size();
                    } else {
                        return reader.getOffset() + 160 + 16 >= reader.size();
                    }
                } // recursively parse nodes until the end of the file is reached
                ;

                _proto.parseNode = function parseNode(reader, version) {
                    var node = {}; // The first three data sizes depends on version.

                    var endOffset = version >= 7500 ? reader.getUint64() : reader.getUint32();
                    var numProperties = version >= 7500 ? reader.getUint64() : reader.getUint32(); // note: do not remove this even if you get a linter warning as it moves the buffer forward

                    var propertyListLen = version >= 7500 ? reader.getUint64() : reader.getUint32();
                    var nameLen = reader.getUint8();
                    var name = reader.getString(nameLen); // Regards this node as NULL-record if endOffset is zero

                    if (endOffset === 0) return null;
                    var propertyList = [];

                    for (var i = 0; i < numProperties; i++) {
                        propertyList.push(this.parseProperty(reader));
                    } // Regards the first three elements in propertyList as id, attrName, and attrType


                    var id = propertyList.length > 0 ? propertyList[0] : '';
                    var attrName = propertyList.length > 1 ? propertyList[1] : '';
                    var attrType = propertyList.length > 2 ? propertyList[2] : ''; // check if this node represents just a single property
                    // like (name, 0) set or (name2, [0, 1, 2]) set of {name: 0, name2: [0, 1, 2]}

                    node.singleProperty = numProperties === 1 && reader.getOffset() === endOffset ? true : false;

                    while (endOffset > reader.getOffset()) {
                        var subNode = this.parseNode(reader, version);
                        if (subNode !== null) this.parseSubNode(name, node, subNode);
                    }

                    node.propertyList = propertyList; // raw property list used by parent

                    if (typeof id === 'number') node.id = id;
                    if (attrName !== '') node.attrName = attrName;
                    if (attrType !== '') node.attrType = attrType;
                    if (name !== '') node.name = name;
                    return node;
                };

                _proto.parseSubNode = function parseSubNode(name, node, subNode) {
                    // special case: child node is single property
                    if (subNode.singleProperty === true) {
                        var value = subNode.propertyList[0];

                        if (Array.isArray(value)) {
                            node[subNode.name] = subNode;
                            subNode.a = value;
                        } else {
                            node[subNode.name] = value;
                        }
                    } else if (name === 'Connections' && subNode.name === 'C') {
                        var array = [];
                        subNode.propertyList.forEach(function(property, i) {
                            // first Connection is FBX type (OO, OP, etc.). We'll discard these
                            if (i !== 0) array.push(property);
                        });

                        if (node.connections === undefined) {
                            node.connections = [];
                        }

                        node.connections.push(array);
                    } else if (subNode.name === 'Properties70') {
                        var keys = Object.keys(subNode);
                        keys.forEach(function(key) {
                            node[key] = subNode[key];
                        });
                    } else if (name === 'Properties70' && subNode.name === 'P') {
                        var innerPropName = subNode.propertyList[0];
                        var innerPropType1 = subNode.propertyList[1];
                        var innerPropType2 = subNode.propertyList[2];
                        var innerPropFlag = subNode.propertyList[3];
                        var innerPropValue;
                        if (innerPropName.indexOf('Lcl ') === 0) innerPropName = innerPropName.replace('Lcl ', 'Lcl_');
                        if (innerPropType1.indexOf('Lcl ') === 0) innerPropType1 = innerPropType1.replace('Lcl ', 'Lcl_');

                        if (innerPropType1 === 'Color' || innerPropType1 === 'ColorRGB' || innerPropType1 === 'Vector' || innerPropType1 === 'Vector3D' || innerPropType1.indexOf('Lcl_') === 0) {
                            innerPropValue = [subNode.propertyList[4], subNode.propertyList[5], subNode.propertyList[6]];
                        } else {
                            innerPropValue = subNode.propertyList[4];
                        } // this will be copied to parent, see above


                        node[innerPropName] = {
                            'type': innerPropType1,
                            'type2': innerPropType2,
                            'flag': innerPropFlag,
                            'value': innerPropValue
                        };
                    } else if (node[subNode.name] === undefined) {
                        if (typeof subNode.id === 'number') {
                            node[subNode.name] = {};
                            node[subNode.name][subNode.id] = subNode;
                        } else {
                            node[subNode.name] = subNode;
                        }
                    } else {
                        if (subNode.name === 'PoseNode') {
                            if (!Array.isArray(node[subNode.name])) {
                                node[subNode.name] = [node[subNode.name]];
                            }

                            node[subNode.name].push(subNode);
                        } else if (node[subNode.name][subNode.id] === undefined) {
                            node[subNode.name][subNode.id] = subNode;
                        }
                    }
                };

                _proto.parseProperty = function parseProperty(reader) {
                    var type = reader.getString(1);
                    var length = 0;

                    switch (type) {
                        case 'C':
                            return reader.getBoolean();

                        case 'D':
                            return reader.getFloat64();

                        case 'F':
                            return reader.getFloat32();

                        case 'I':
                            return reader.getInt32();

                        case 'L':
                            return reader.getInt64();

                        case 'R':
                            length = reader.getUint32();
                            return reader.getArrayBuffer(length);

                        case 'S':
                            length = reader.getUint32();
                            return reader.getString(length);

                        case 'Y':
                            return reader.getInt16();

                        case 'b':
                        case 'c':
                        case 'd':
                        case 'f':
                        case 'i':
                        case 'l':
                            var arrayLength = reader.getUint32();
                            var encoding = reader.getUint32(); // 0: non-compressed, 1: compressed

                            var compressedLength = reader.getUint32();

                            if (encoding === 0) {
                                switch (type) {
                                    case 'b':
                                    case 'c':
                                        return reader.getBooleanArray(arrayLength);

                                    case 'd':
                                        return reader.getFloat64Array(arrayLength);

                                    case 'f':
                                        return reader.getFloat32Array(arrayLength);

                                    case 'i':
                                        return reader.getInt32Array(arrayLength);

                                    case 'l':
                                        return reader.getInt64Array(arrayLength);
                                }
                            }

                            if (typeof Zlib === 'undefined') {
                                console.error('THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js');
                            }

                            var inflate = new Zlib.Inflate(new Uint8Array(reader.getArrayBuffer(compressedLength))); // eslint-disable-line no-undef

                            var reader2 = new BinaryReader_BinaryReader(inflate.decompress().buffer);

                            switch (type) {
                                case 'b':
                                case 'c':
                                    return reader2.getBooleanArray(arrayLength);

                                case 'd':
                                    return reader2.getFloat64Array(arrayLength);

                                case 'f':
                                    return reader2.getFloat32Array(arrayLength);

                                case 'i':
                                    return reader2.getInt32Array(arrayLength);

                                case 'l':
                                    return reader2.getInt64Array(arrayLength);
                            }

                        default:
                            throw new Error('THREE.FBXLoader: Unknown property type ' + type);
                    }
                };

                return BinaryParser;
            }();


        // CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--10!./src/scripts/lib/pixi-3d/fbx/fbx.worker.js
        importScripts('../inflate.min.js');


        function fbx_worker_parse(buffer, id) {
            var fbxTree = new BinaryParser_BinaryParser({}).parse(buffer);
            return {
                id: id,
                fbxTree: fbxTree
            };
        }

        onmessage = function onmessage(e) {
            if (e.data['parse']) {
                // console.log('[FBXWORKER] Parse start:', e.data.id);
                var res = fbx_worker_parse(e.data['parse'], e.data.id); // console.log('[FBXWORKER] Parse complete:', e.data.id);

                postMessage(res);
            }
        };

        /***/
    })
    /******/
]);
//# sourceMappingURL=worker.21cc18ec46e616e4eed8.js.map