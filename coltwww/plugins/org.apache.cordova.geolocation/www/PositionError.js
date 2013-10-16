
                var isNode =
                    typeof global !== "undefined" &&
                    {}.toString.call(global) == '[object global]';
                if (isNode) {
                    require("../../../live.js");
                }
        LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.geolocation/www/PositionError.js0", "(function(require, exports, module) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.geolocation\/www\/PositionError.js[0]: function(require, exports, module)\"); try {\n                  var PositionError = function(code, message) {\n  \n                        var _colt1 = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.geolocation\/www\/PositionError.js1_\" + __coltScope)\n                        if (_colt1 == null) {\n                            try {\n                                _colt1 = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.geolocation\/www\/PositionError.js1\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.geolocation\/www\/PositionError.js\", \"live method plugins\/org.apache.cordova.geolocation\/www\/PositionError.js[1]: function(code, message) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.geolocation\/www\/PositionError.js1_\" + __coltScope, _colt1)\n                        }\n                        return _colt1.apply(this, arguments)\n            };\n  PositionError.PERMISSION_DENIED = 1;\n  PositionError.POSITION_UNAVAILABLE = 2;\n  PositionError.TIMEOUT = 3;\n  module.exports = PositionError;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.geolocation\/www\/PositionError.js\", \"live method plugins\/org.apache.cordova.geolocation\/www\/PositionError.js[0]: function(require, exports, module) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.geolocation\/www\/PositionError.js[0]: function(require, exports, module)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.geolocation/www/PositionError.js1", "(function(code, message) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.geolocation\/www\/PositionError.js[1]: function(code, message)\"); try {\n                  this.code = code || null;\n  this.message = message || \'\';\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.geolocation\/www\/PositionError.js\", \"live method plugins\/org.apache.cordova.geolocation\/www\/PositionError.js[1]: function(code, message) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.geolocation\/www\/PositionError.js[1]: function(code, message)\");\n                    }\n                })")

LiveCodeRegistry.getInstance().setInspectables([],"plugins/org.apache.cordova.geolocation/www/PositionError.js");
LiveCodeRegistry.getInstance().setLastLoadedPackage(0,"plugins/org.apache.cordova.geolocation/www/PositionError.js");
cordova.define("org.apache.cordova.geolocation.PositionError", function(require, exports, module) {
  
                        var _colt0 = LiveCodeRegistry.getInstance().getCachedMethod("plugins/org.apache.cordova.geolocation/www/PositionError.js0_" + __coltScope)
                        if (_colt0 == null) {
                            try {
                                _colt0 = eval(LiveCodeRegistry.getInstance().getMethod("plugins/org.apache.cordova.geolocation/www/PositionError.js0"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "plugins/org.apache.cordova.geolocation/www/PositionError.js", "live method plugins/org.apache.cordova.geolocation/www/PositionError.js[0]: function(require, exports, module) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("plugins/org.apache.cordova.geolocation/www/PositionError.js0_" + __coltScope, _colt0)
                        }
                        return _colt0.apply(this, arguments)
            });
