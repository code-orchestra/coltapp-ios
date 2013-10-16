
                var isNode =
                    typeof global !== "undefined" &&
                    {}.toString.call(global) == '[object global]';
                if (isNode) {
                    require("./live.js");
                }
        LiveCodeRegistry.getInstance().putMethod("cordova_plugins.js0", "(function(require, exports, module) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"cordova_plugins.js[0]: function(require, exports, module)\"); try {\n                  module.exports = [{\"file\": \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"id\": \"org.apache.cordova.console.console\", \"clobbers\": [\"console\"]}, {\"file\": \"plugins\/org.apache.cordova.console\/www\/logger.js\", \"id\": \"org.apache.cordova.console.logger\", \"clobbers\": [\"cordova.logger\"]}];\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"cordova_plugins.js\", \"live method cordova_plugins.js[0]: function(require, exports, module) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"cordova_plugins.js[0]: function(require, exports, module)\");\n                    }\n                })")

LiveCodeRegistry.getInstance().setInspectables([],"cordova_plugins.js");
LiveCodeRegistry.getInstance().setLastLoadedPackage(0,"cordova_plugins.js");
cordova.define('cordova/plugin_list', function(require, exports, module) {
  
                        var _colt0 = LiveCodeRegistry.getInstance().getCachedMethod("cordova_plugins.js0_" + __coltScope)
                        if (_colt0 == null) {
                            try {
                                _colt0 = eval(LiveCodeRegistry.getInstance().getMethod("cordova_plugins.js0"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "cordova_plugins.js", "live method cordova_plugins.js[0]: function(require, exports, module) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("cordova_plugins.js0_" + __coltScope, _colt0)
                        }
                        return _colt0.apply(this, arguments)
            });
