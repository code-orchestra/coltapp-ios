
                var isNode =
                    typeof global !== "undefined" &&
                    {}.toString.call(global) == '[object global]';
                if (isNode) {
                    require("../../../live.js");
                }
        LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.console/www/console-via-logger.js0", "(function(require, exports, module) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[0]: function(require, exports, module)\"); try {\n                  var logger = require(\".\/logger\");\n  var utils = require(\"cordova\/utils\");\n  var console = module.exports;\n  var WinConsole = window.console;\n  var UseLogger = false;\n  var Timers = {};\n  function noop() {\n    \n                        var _colt2 = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js1_\" + __coltScope)\n                        if (_colt2 == null) {\n                            try {\n                                _colt2 = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js1\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[1]: function noop() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js1_\" + __coltScope, _colt2)\n                        }\n                        return _colt2.apply(this, arguments)\n              }\n  console.useLogger = function(value) {\n  \n                        var _colt3 = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js2_\" + __coltScope)\n                        if (_colt3 == null) {\n                            try {\n                                _colt3 = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js2\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[2]: function(value) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js2_\" + __coltScope, _colt3)\n                        }\n                        return _colt3.apply(this, arguments)\n            };\n  console.log = function() {\n  \n                        var _colt4 = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js3_\" + __coltScope)\n                        if (_colt4 == null) {\n                            try {\n                                _colt4 = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js3\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[3]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js3_\" + __coltScope, _colt4)\n                        }\n                        return _colt4.apply(this, arguments)\n            };\n  console.error = function() {\n  \n                        var _colt5 = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js4_\" + __coltScope)\n                        if (_colt5 == null) {\n                            try {\n                                _colt5 = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js4\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[4]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js4_\" + __coltScope, _colt5)\n                        }\n                        return _colt5.apply(this, arguments)\n            };\n  console.warn = function() {\n  \n                        var _colt6 = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js5_\" + __coltScope)\n                        if (_colt6 == null) {\n                            try {\n                                _colt6 = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js5\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[5]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js5_\" + __coltScope, _colt6)\n                        }\n                        return _colt6.apply(this, arguments)\n            };\n  console.info = function() {\n  \n                        var _colt7 = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js6_\" + __coltScope)\n                        if (_colt7 == null) {\n                            try {\n                                _colt7 = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js6\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[6]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js6_\" + __coltScope, _colt7)\n                        }\n                        return _colt7.apply(this, arguments)\n            };\n  console.debug = function() {\n  \n                        var _colt8 = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js7_\" + __coltScope)\n                        if (_colt8 == null) {\n                            try {\n                                _colt8 = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js7\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[7]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js7_\" + __coltScope, _colt8)\n                        }\n                        return _colt8.apply(this, arguments)\n            };\n  console.assert = function(expression) {\n  \n                        var _colt9 = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js8_\" + __coltScope)\n                        if (_colt9 == null) {\n                            try {\n                                _colt9 = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js8\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[8]: function(expression) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js8_\" + __coltScope, _colt9)\n                        }\n                        return _colt9.apply(this, arguments)\n            };\n  console.clear = function() {\n  \n                        var _colta = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js9_\" + __coltScope)\n                        if (_colta == null) {\n                            try {\n                                _colta = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js9\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[9]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js9_\" + __coltScope, _colta)\n                        }\n                        return _colta.apply(this, arguments)\n            };\n  console.dir = function(object) {\n  \n                        var _coltb = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js10_\" + __coltScope)\n                        if (_coltb == null) {\n                            try {\n                                _coltb = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js10\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[10]: function(object) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js10_\" + __coltScope, _coltb)\n                        }\n                        return _coltb.apply(this, arguments)\n            };\n  console.dirxml = function(node) {\n  \n                        var _coltc = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js11_\" + __coltScope)\n                        if (_coltc == null) {\n                            try {\n                                _coltc = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js11\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[11]: function(node) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js11_\" + __coltScope, _coltc)\n                        }\n                        return _coltc.apply(this, arguments)\n            };\n  console.trace = noop;\n  console.group = console.log;\n  console.groupCollapsed = console.log;\n  console.groupEnd = noop;\n  console.time = function(name) {\n  \n                        var _coltd = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js12_\" + __coltScope)\n                        if (_coltd == null) {\n                            try {\n                                _coltd = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js12\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[12]: function(name) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js12_\" + __coltScope, _coltd)\n                        }\n                        return _coltd.apply(this, arguments)\n            };\n  console.timeEnd = function(name) {\n  \n                        var _colte = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js13_\" + __coltScope)\n                        if (_colte == null) {\n                            try {\n                                _colte = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js13\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[13]: function(name) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js13_\" + __coltScope, _colte)\n                        }\n                        return _colte.apply(this, arguments)\n            };\n  console.timeStamp = noop;\n  console.profile = noop;\n  console.profileEnd = noop;\n  console.count = noop;\n  console.exception = console.log;\n  console.table = function(data, columns) {\n  \n                        var _coltf = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js14_\" + __coltScope)\n                        if (_coltf == null) {\n                            try {\n                                _coltf = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js14\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[14]: function(data, columns) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js14_\" + __coltScope, _coltf)\n                        }\n                        return _coltf.apply(this, arguments)\n            };\n  function wrappedOrigCall(orgFunc, newFunc) {\n    \n                        var _colt10 = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js17_\" + __coltScope)\n                        if (_colt10 == null) {\n                            try {\n                                _colt10 = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js17\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[17]: function wrappedOrigCall(orgFunc, newFunc) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js17_\" + __coltScope, _colt10)\n                        }\n                        return _colt10.apply(this, arguments)\n              }\n  \n                                    var _colt0 = \"_colt0_\" + Date.now();\n                                  for (var key in console) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt0);\n                                      if (typeof WinConsole[key] == \"function\") \n      {\n        console[key] = wrappedOrigCall(WinConsole[key], console[key]);\n      }\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[0]: function(require, exports, module) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[0]: function(require, exports, module)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.console/www/console-via-logger.js1", "(function() {\n})")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.console/www/console-via-logger.js2", "(function(value) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[2]: function(value)\"); try {\n                  if (arguments.length) \n  UseLogger = !!value;\n  if (UseLogger) \n  {\n    if (logger.useConsole()) \n    {\n      throw new Error(\"console and logger are too intertwingly\");\n    }\n  }\n  return UseLogger;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[2]: function(value) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[2]: function(value)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.console/www/console-via-logger.js3", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[3]: function()\"); try {\n                  if (logger.useConsole()) \n  return;\n  logger.log.apply(logger, [].slice.call(arguments));\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[3]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[3]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.console/www/console-via-logger.js4", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[4]: function()\"); try {\n                  if (logger.useConsole()) \n  return;\n  logger.error.apply(logger, [].slice.call(arguments));\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[4]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[4]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.console/www/console-via-logger.js5", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[5]: function()\"); try {\n                  if (logger.useConsole()) \n  return;\n  logger.warn.apply(logger, [].slice.call(arguments));\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[5]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[5]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.console/www/console-via-logger.js6", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[6]: function()\"); try {\n                  if (logger.useConsole()) \n  return;\n  logger.info.apply(logger, [].slice.call(arguments));\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[6]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[6]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.console/www/console-via-logger.js7", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[7]: function()\"); try {\n                  if (logger.useConsole()) \n  return;\n  logger.debug.apply(logger, [].slice.call(arguments));\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[7]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[7]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.console/www/console-via-logger.js8", "(function(expression) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[8]: function(expression)\"); try {\n                  if (expression) \n  return;\n  var message = logger.format.apply(logger.format, [].slice.call(arguments, 1));\n  console.log(\"ASSERT: \" + message);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[8]: function(expression) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[8]: function(expression)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.console/www/console-via-logger.js9", "(function() {\n})")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.console/www/console-via-logger.js10", "(function(object) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[10]: function(object)\"); try {\n                  console.log(\"%o\", object);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[10]: function(object) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[10]: function(object)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.console/www/console-via-logger.js11", "(function(node) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[11]: function(node)\"); try {\n                  console.log(node.innerHTML);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[11]: function(node) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[11]: function(node)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.console/www/console-via-logger.js12", "(function(name) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[12]: function(name)\"); try {\n                  Timers[name] = new Date().valueOf();\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[12]: function(name) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[12]: function(name)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.console/www/console-via-logger.js13", "(function(name) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[13]: function(name)\"); try {\n                  var timeStart = Timers[name];\n  if (!timeStart) \n  {\n    console.warn(\"unknown timer: \" + name);\n    return;\n  }\n  var timeElapsed = new Date().valueOf() - timeStart;\n  console.log(name + \": \" + timeElapsed + \"ms\");\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[13]: function(name) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[13]: function(name)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.console/www/console-via-logger.js14", "(function(data, columns) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[14]: function(data, columns)\"); try {\n                  console.log(\"%o\", data);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[14]: function(data, columns) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[14]: function(data, columns)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.console/www/console-via-logger.js17", "(function(orgFunc, newFunc) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[17]: function wrappedOrigCall(orgFunc, newFunc)\"); try {\n                  return function() {\n  \n                        var _colt11 = LiveCodeRegistry.getInstance().getCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js18_\" + __coltScope)\n                        if (_colt11 == null) {\n                            try {\n                                _colt11 = eval(LiveCodeRegistry.getInstance().getMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js18\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[18]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js18_\" + __coltScope, _colt11)\n                        }\n                        return _colt11.apply(this, arguments)\n            };\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[17]: function wrappedOrigCall(orgFunc, newFunc) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[17]: function wrappedOrigCall(orgFunc, newFunc)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("plugins/org.apache.cordova.console/www/console-via-logger.js18", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[18]: function()\"); try {\n                  var args = [].slice.call(arguments);\n  try {\n    orgFunc.apply(WinConsole, args);\n  }  catch (e) {\n}\n  try {\n    newFunc.apply(console, args);\n  }  catch (e) {\n}\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"plugins\/org.apache.cordova.console\/www\/console-via-logger.js\", \"live method plugins\/org.apache.cordova.console\/www\/console-via-logger.js[18]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"plugins\/org.apache.cordova.console\/www\/console-via-logger.js[18]: function()\");\n                    }\n                })")

LiveCodeRegistry.getInstance().setInspectables([],"plugins/org.apache.cordova.console/www/console-via-logger.js");
LiveCodeRegistry.getInstance().setLastLoadedPackage(0,"plugins/org.apache.cordova.console/www/console-via-logger.js");
cordova.define("org.apache.cordova.console.console", function(require, exports, module) {
  
                        var _colt1 = LiveCodeRegistry.getInstance().getCachedMethod("plugins/org.apache.cordova.console/www/console-via-logger.js0_" + __coltScope)
                        if (_colt1 == null) {
                            try {
                                _colt1 = eval(LiveCodeRegistry.getInstance().getMethod("plugins/org.apache.cordova.console/www/console-via-logger.js0"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "plugins/org.apache.cordova.console/www/console-via-logger.js", "live method plugins/org.apache.cordova.console/www/console-via-logger.js[0]: function(require, exports, module) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("plugins/org.apache.cordova.console/www/console-via-logger.js0_" + __coltScope, _colt1)
                        }
                        return _colt1.apply(this, arguments)
            });
