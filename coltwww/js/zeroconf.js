
                var isNode =
                    typeof global !== "undefined" &&
                    {}.toString.call(global) == '[object global]';
                if (isNode) {
                    require("../live.js");
                }
        LiveCodeRegistry.getInstance().putMethod("js/zeroconf.js0", "(function(type, callback) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"js\/zeroconf.js[0]: function(type, callback)\"); try {\n                  return cordova.exec(function(result) {\n  \n                        var _colt1 = LiveCodeRegistry.getInstance().getCachedMethod(\"js\/zeroconf.js1_\" + __coltScope)\n                        if (_colt1 == null) {\n                            try {\n                                _colt1 = eval(LiveCodeRegistry.getInstance().getMethod(\"js\/zeroconf.js1\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"js\/zeroconf.js\", \"live method js\/zeroconf.js[1]: function(result) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"js\/zeroconf.js1_\" + __coltScope, _colt1)\n                        }\n                        return _colt1.apply(this, arguments)\n            }, ZeroConf.fail, \"ZeroConf\", \"watch\", [type]);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"js\/zeroconf.js\", \"live method js\/zeroconf.js[0]: function(type, callback) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"js\/zeroconf.js[0]: function(type, callback)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("js/zeroconf.js1", "(function(result) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"js\/zeroconf.js[1]: function(result)\"); try {\n                  console.log(\"exec result\");\n  if (callback) \n  {\n    callback(result);\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"js\/zeroconf.js\", \"live method js\/zeroconf.js[1]: function(result) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"js\/zeroconf.js[1]: function(result)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("js/zeroconf.js2", "(function(type) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"js\/zeroconf.js[2]: function(type)\"); try {\n                  return cordova.exec(null, ZeroConf.fail, \"ZeroConf\", \"unwatch\", [type]);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"js\/zeroconf.js\", \"live method js\/zeroconf.js[2]: function(type) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"js\/zeroconf.js[2]: function(type)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("js/zeroconf.js3", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"js\/zeroconf.js[3]: function()\"); try {\n                  return cordova.exec(null, ZeroConf.fail, \"ZeroConf\", \"close\", []);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"js\/zeroconf.js\", \"live method js\/zeroconf.js[3]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"js\/zeroconf.js[3]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("js/zeroconf.js4", "(function(type, name, port, text) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"js\/zeroconf.js[4]: function(type, name, port, text)\"); try {\n                  if (!type) \n  {\n    console.error(\"\'type\' is a required field\");\n    return;\n  }\n  return cordova.exec(null, ZeroConf.fail, \"ZeroConf\", \"register\", [type, name, port, text]);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"js\/zeroconf.js\", \"live method js\/zeroconf.js[4]: function(type, name, port, text) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"js\/zeroconf.js[4]: function(type, name, port, text)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("js/zeroconf.js5", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"js\/zeroconf.js[5]: function()\"); try {\n                  return cordova.exec(null, ZeroConf.fail, \"ZeroConf\", \"unregister\", []);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"js\/zeroconf.js\", \"live method js\/zeroconf.js[5]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"js\/zeroconf.js[5]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("js/zeroconf.js6", "(function(o) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"js\/zeroconf.js[6]: function(o)\"); try {\n                  console.error(\"Error \" + JSON.stringify(o));\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"js\/zeroconf.js\", \"live method js\/zeroconf.js[6]: function(o) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"js\/zeroconf.js[6]: function(o)\");\n                    }\n                })")

LiveCodeRegistry.getInstance().setInspectables([],"js/zeroconf.js");
LiveCodeRegistry.getInstance().setLastLoadedPackage(0,"js/zeroconf.js");
var ZeroConf = {watch: function(type, callback) {
  
                        var _colt0 = LiveCodeRegistry.getInstance().getCachedMethod("js/zeroconf.js0_" + __coltScope)
                        if (_colt0 == null) {
                            try {
                                _colt0 = eval(LiveCodeRegistry.getInstance().getMethod("js/zeroconf.js0"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "js/zeroconf.js", "live method js/zeroconf.js[0]: function(type, callback) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("js/zeroconf.js0_" + __coltScope, _colt0)
                        }
                        return _colt0.apply(this, arguments)
            }, unwatch: function(type) {
  
                        var _colt2 = LiveCodeRegistry.getInstance().getCachedMethod("js/zeroconf.js2_" + __coltScope)
                        if (_colt2 == null) {
                            try {
                                _colt2 = eval(LiveCodeRegistry.getInstance().getMethod("js/zeroconf.js2"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "js/zeroconf.js", "live method js/zeroconf.js[2]: function(type) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("js/zeroconf.js2_" + __coltScope, _colt2)
                        }
                        return _colt2.apply(this, arguments)
            }, close: function() {
  
                        var _colt3 = LiveCodeRegistry.getInstance().getCachedMethod("js/zeroconf.js3_" + __coltScope)
                        if (_colt3 == null) {
                            try {
                                _colt3 = eval(LiveCodeRegistry.getInstance().getMethod("js/zeroconf.js3"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "js/zeroconf.js", "live method js/zeroconf.js[3]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("js/zeroconf.js3_" + __coltScope, _colt3)
                        }
                        return _colt3.apply(this, arguments)
            }, register: function(type, name, port, text) {
  
                        var _colt4 = LiveCodeRegistry.getInstance().getCachedMethod("js/zeroconf.js4_" + __coltScope)
                        if (_colt4 == null) {
                            try {
                                _colt4 = eval(LiveCodeRegistry.getInstance().getMethod("js/zeroconf.js4"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "js/zeroconf.js", "live method js/zeroconf.js[4]: function(type, name, port, text) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("js/zeroconf.js4_" + __coltScope, _colt4)
                        }
                        return _colt4.apply(this, arguments)
            }, unregister: function() {
  
                        var _colt5 = LiveCodeRegistry.getInstance().getCachedMethod("js/zeroconf.js5_" + __coltScope)
                        if (_colt5 == null) {
                            try {
                                _colt5 = eval(LiveCodeRegistry.getInstance().getMethod("js/zeroconf.js5"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "js/zeroconf.js", "live method js/zeroconf.js[5]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("js/zeroconf.js5_" + __coltScope, _colt5)
                        }
                        return _colt5.apply(this, arguments)
            }, fail: function(o) {
  
                        var _colt6 = LiveCodeRegistry.getInstance().getCachedMethod("js/zeroconf.js6_" + __coltScope)
                        if (_colt6 == null) {
                            try {
                                _colt6 = eval(LiveCodeRegistry.getInstance().getMethod("js/zeroconf.js6"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "js/zeroconf.js", "live method js/zeroconf.js[6]: function(o) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("js/zeroconf.js6_" + __coltScope, _colt6)
                        }
                        return _colt6.apply(this, arguments)
            }};
