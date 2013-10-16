
                var isNode =
                    typeof global !== "undefined" &&
                    {}.toString.call(global) == '[object global]';
                if (isNode) {
                    require("../../../live.js");
                }
        LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js0", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[0]: function()\"); try {\n                  throw new Error(\"unimplemented method\");\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[0]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[0]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js1", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[1]: function()\"); try {\n                  function getGlobal() {\n    \n                        var _colt27 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js2_\" + __coltScope)\n                        if (_colt27 == null) {\n                            try {\n                                _colt27 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js2\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[2]: function getGlobal() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js2_\" + __coltScope, _colt27)\n                        }\n                        return _colt27.apply(this, arguments)\n              }\n  return getGlobal();\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[1]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[1]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js2", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[2]: function getGlobal()\"); try {\n                  return this;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[2]: function getGlobal() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[2]: function getGlobal()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js6", "(function(base, name) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[6]: function(base, name)\"); try {\n                  var original = base[name];\n  if (original.apply) \n  {\n    return function() {\n  \n                        var _colt29 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js7_\" + __coltScope)\n                        if (_colt29 == null) {\n                            try {\n                                _colt29 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js7\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[7]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js7_\" + __coltScope, _colt29)\n                        }\n                        return _colt29.apply(this, arguments)\n            };\n  } else {\n    return jasmine.getGlobal()[name];\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[6]: function(base, name) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[6]: function(base, name)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js7", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[7]: function()\"); try {\n                  return original.apply(base, arguments);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[7]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[7]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js8", "(function(values) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[8]: function(values)\"); try {\n                  this.type = \'log\';\n  this.values = values;\n  this.trace = new Error();\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[8]: function(values) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[8]: function(values)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js9", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[9]: function()\"); try {\n                  var text = \"\";\n  \n                                    var _colt0 = \"_colt0_\" + Date.now();\n                                  for (var i = 0; i < this.values.length; i++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt0);\n                                      if (i > 0) \n      text += \" \";\n      if (jasmine.isString_(this.values[i])) \n      {\n        text += this.values[i];\n      } else {\n        text += jasmine.pp(this.values[i]);\n      }\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  return text;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[9]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[9]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js10", "(function(params) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[10]: function(params)\"); try {\n                  this.type = \'expect\';\n  this.matcherName = params.matcherName;\n  this.passed_ = params.passed;\n  this.expected = params.expected;\n  this.actual = params.actual;\n  this.message = this.passed_ ? \'Passed.\' : params.message;\n  var trace = (params.trace || new Error(this.message));\n  this.trace = this.passed_ ? \'\' : trace;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[10]: function(params) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[10]: function(params)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js11", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[11]: function()\"); try {\n                  return this.message;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[11]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[11]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js12", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[12]: function()\"); try {\n                  return this.passed_;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[12]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[12]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js13", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[13]: function()\"); try {\n                  var env = jasmine.currentEnv_ = jasmine.currentEnv_ || new jasmine.Env();\n  return env;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[13]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[13]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js14", "(function(value) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[14]: function(value)\"); try {\n                  return jasmine.isA_(\"Array\", value);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[14]: function(value) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[14]: function(value)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js15", "(function(value) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[15]: function(value)\"); try {\n                  return jasmine.isA_(\"String\", value);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[15]: function(value) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[15]: function(value)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js16", "(function(value) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[16]: function(value)\"); try {\n                  return jasmine.isA_(\"Number\", value);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[16]: function(value) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[16]: function(value)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js17", "(function(typeName, value) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[17]: function(typeName, value)\"); try {\n                  return Object.prototype.toString.apply(value) === \'[object \' + typeName + \']\';\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[17]: function(typeName, value) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[17]: function(typeName, value)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js18", "(function(value) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[18]: function(value)\"); try {\n                  var stringPrettyPrinter = new jasmine.StringPrettyPrinter();\n  stringPrettyPrinter.format(value);\n  return stringPrettyPrinter.string;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[18]: function(value) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[18]: function(value)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js19", "(function(obj) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[19]: function(obj)\"); try {\n                  return obj.nodeType > 0;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[19]: function(obj) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[19]: function(obj)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js22", "(function(clazz) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[22]: function(clazz)\"); try {\n                  return new jasmine.Matchers.Any(clazz);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[22]: function(clazz) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[22]: function(clazz)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js23", "(function(sample) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[23]: function(sample)\"); try {\n                  return new jasmine.Matchers.ObjectContaining(sample);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[23]: function(sample) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[23]: function(sample)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js27", "(function(name) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[27]: function(name)\"); try {\n                  this.identity = name || \'unknown\';\n  this.isSpy = true;\n  this.plan = function() {\n  \n                        var _colt39 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js29_\" + __coltScope)\n                        if (_colt39 == null) {\n                            try {\n                                _colt39 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js29\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[29]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js29_\" + __coltScope, _colt39)\n                        }\n                        return _colt39.apply(this, arguments)\n            };\n  this.mostRecentCall = {};\n  this.argsForCall = [];\n  this.calls = [];\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[27]: function(name) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[27]: function(name)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js29", "(function() {\n})")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js31", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[31]: function()\"); try {\n                  this.plan = this.originalValue;\n  return this;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[31]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[31]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js32", "(function(value) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[32]: function(value)\"); try {\n                  this.plan = function() {\n  \n                        var _colt3c = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js33_\" + __coltScope)\n                        if (_colt3c == null) {\n                            try {\n                                _colt3c = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js33\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[33]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js33_\" + __coltScope, _colt3c)\n                        }\n                        return _colt3c.apply(this, arguments)\n            };\n  return this;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[32]: function(value) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[32]: function(value)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js33", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[33]: function()\"); try {\n                  return value;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[33]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[33]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js34", "(function(exceptionMsg) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[34]: function(exceptionMsg)\"); try {\n                  this.plan = function() {\n  \n                        var _colt3e = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js35_\" + __coltScope)\n                        if (_colt3e == null) {\n                            try {\n                                _colt3e = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js35\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[35]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js35_\" + __coltScope, _colt3e)\n                        }\n                        return _colt3e.apply(this, arguments)\n            };\n  return this;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[34]: function(exceptionMsg) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[34]: function(exceptionMsg)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js35", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[35]: function()\"); try {\n                  throw exceptionMsg;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[35]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[35]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js40", "(function(fakeFunc) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[40]: function(fakeFunc)\"); try {\n                  this.plan = fakeFunc;\n  return this;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[40]: function(fakeFunc) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[40]: function(fakeFunc)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js41", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[41]: function()\"); try {\n                  this.wasCalled = false;\n  this.callCount = 0;\n  this.argsForCall = [];\n  this.calls = [];\n  this.mostRecentCall = {};\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[41]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[41]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js42", "(function(name) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[42]: function(name)\"); try {\n                  var spyObj = function() {\n  \n                        var _colt42 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js43_\" + __coltScope)\n                        if (_colt42 == null) {\n                            try {\n                                _colt42 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js43\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[43]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js43_\" + __coltScope, _colt42)\n                        }\n                        return _colt42.apply(this, arguments)\n            };\n  var spy = new jasmine.Spy(name);\n  \n                                    var _colt1 = \"_colt1_\" + Date.now();\n                                  for (var prop in spy) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt1);\n                                      spyObj[prop] = spy[prop];\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  spyObj.reset();\n  return spyObj;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[42]: function(name) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[42]: function(name)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js43", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[43]: function()\"); try {\n                  spyObj.wasCalled = true;\n  spyObj.callCount++;\n  var args = jasmine.util.argsToArray(arguments);\n  spyObj.mostRecentCall.object = this;\n  spyObj.mostRecentCall.args = args;\n  spyObj.argsForCall.push(args);\n  spyObj.calls.push({object: this, args: args});\n  return spyObj.plan.apply(this, arguments);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[43]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[43]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js44", "(function(putativeSpy) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[44]: function(putativeSpy)\"); try {\n                  return putativeSpy && putativeSpy.isSpy;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[44]: function(putativeSpy) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[44]: function(putativeSpy)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js46", "(function(baseName, methodNames) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[46]: function(baseName, methodNames)\"); try {\n                  if (!jasmine.isArray_(methodNames) || methodNames.length === 0) \n  {\n    throw new Error(\'createSpyObj requires a non-empty array of method names to create spies for\');\n  }\n  var obj = {};\n  \n                                    var _colt2 = \"_colt2_\" + Date.now();\n                                  for (var i = 0; i < methodNames.length; i++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt2);\n                                      obj[methodNames[i]] = jasmine.createSpy(baseName + \'.\' + methodNames[i]);\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  return obj;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[46]: function(baseName, methodNames) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[46]: function(baseName, methodNames)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js47", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[47]: function()\"); try {\n                  var spec = jasmine.getEnv().currentSpec;\n  spec.log.apply(spec, arguments);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[47]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[47]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js49", "(function(obj, methodName) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[49]: function(obj, methodName)\"); try {\n                  return jasmine.getEnv().currentSpec.spyOn(obj, methodName);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[49]: function(obj, methodName) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[49]: function(obj, methodName)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js51", "(function(desc, func) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[51]: function(desc, func)\"); try {\n                  return jasmine.getEnv().it(desc, func);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[51]: function(desc, func) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[51]: function(desc, func)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js52", "(function(desc, func) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[52]: function(desc, func)\"); try {\n                  return jasmine.getEnv().xit(desc, func);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[52]: function(desc, func) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[52]: function(desc, func)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js54", "(function(actual) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[54]: function(actual)\"); try {\n                  return jasmine.getEnv().currentSpec.expect(actual);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[54]: function(actual) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[54]: function(actual)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js55", "(function(func) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[55]: function(func)\"); try {\n                  jasmine.getEnv().currentSpec.runs(func);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[55]: function(func) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[55]: function(func)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js56", "(function(timeout) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[56]: function(timeout)\"); try {\n                  jasmine.getEnv().currentSpec.waits(timeout);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[56]: function(timeout) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[56]: function(timeout)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js57", "(function(latchFunction, optional_timeoutMessage, optional_timeout) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[57]: function(latchFunction, optional_timeoutMessage, optional_timeout)\"); try {\n                  jasmine.getEnv().currentSpec.waitsFor.apply(jasmine.getEnv().currentSpec, arguments);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[57]: function(latchFunction, optional_timeoutMessage, optional_timeout) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[57]: function(latchFunction, optional_timeoutMessage, optional_timeout)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js59", "(function(beforeEachFunction) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[59]: function(beforeEachFunction)\"); try {\n                  jasmine.getEnv().beforeEach(beforeEachFunction);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[59]: function(beforeEachFunction) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[59]: function(beforeEachFunction)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js61", "(function(afterEachFunction) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[61]: function(afterEachFunction)\"); try {\n                  jasmine.getEnv().afterEach(afterEachFunction);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[61]: function(afterEachFunction) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[61]: function(afterEachFunction)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js63", "(function(description, specDefinitions) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[63]: function(description, specDefinitions)\"); try {\n                  return jasmine.getEnv().describe(description, specDefinitions);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[63]: function(description, specDefinitions) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[63]: function(description, specDefinitions)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js65", "(function(description, specDefinitions) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[65]: function(description, specDefinitions)\"); try {\n                  return jasmine.getEnv().xdescribe(description, specDefinitions);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[65]: function(description, specDefinitions) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[65]: function(description, specDefinitions)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js66", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[66]: function()\"); try {\n                  function tryIt(f) {\n    \n                        var _colt52 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js67_\" + __coltScope)\n                        if (_colt52 == null) {\n                            try {\n                                _colt52 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js67\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[67]: function tryIt(f) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js67_\" + __coltScope, _colt52)\n                        }\n                        return _colt52.apply(this, arguments)\n              }\n  var xhr = tryIt(function() {\n  \n                        var _colt53 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js68_\" + __coltScope)\n                        if (_colt53 == null) {\n                            try {\n                                _colt53 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js68\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[68]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js68_\" + __coltScope, _colt53)\n                        }\n                        return _colt53.apply(this, arguments)\n            }) || tryIt(function() {\n  \n                        var _colt54 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js69_\" + __coltScope)\n                        if (_colt54 == null) {\n                            try {\n                                _colt54 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js69\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[69]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js69_\" + __coltScope, _colt54)\n                        }\n                        return _colt54.apply(this, arguments)\n            }) || tryIt(function() {\n  \n                        var _colt55 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js70_\" + __coltScope)\n                        if (_colt55 == null) {\n                            try {\n                                _colt55 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js70\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[70]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js70_\" + __coltScope, _colt55)\n                        }\n                        return _colt55.apply(this, arguments)\n            }) || tryIt(function() {\n  \n                        var _colt56 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js71_\" + __coltScope)\n                        if (_colt56 == null) {\n                            try {\n                                _colt56 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js71\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[71]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js71_\" + __coltScope, _colt56)\n                        }\n                        return _colt56.apply(this, arguments)\n            });\n  if (!xhr) \n  throw new Error(\"This browser does not support XMLHttpRequest.\");\n  return xhr;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[66]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[66]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js67", "(function(f) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[67]: function tryIt(f)\"); try {\n                  try {\n    return f();\n  }  catch (e) {\n}\n  return null;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[67]: function tryIt(f) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[67]: function tryIt(f)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js68", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[68]: function()\"); try {\n                  return new ActiveXObject(\"Msxml2.XMLHTTP.6.0\");\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[68]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[68]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js69", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[69]: function()\"); try {\n                  return new ActiveXObject(\"Msxml2.XMLHTTP.3.0\");\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[69]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[69]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js70", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[70]: function()\"); try {\n                  return new ActiveXObject(\"Msxml2.XMLHTTP\");\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[70]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[70]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js71", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[71]: function()\"); try {\n                  return new ActiveXObject(\"Microsoft.XMLHTTP\");\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[71]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[71]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js72", "(function(childClass, parentClass) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[72]: function(childClass, parentClass)\"); try {\n                  var subclass = function() {\n  \n                        var _colt58 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js73_\" + __coltScope)\n                        if (_colt58 == null) {\n                            try {\n                                _colt58 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js73\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[73]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js73_\" + __coltScope, _colt58)\n                        }\n                        return _colt58.apply(this, arguments)\n            };\n  subclass.prototype = parentClass.prototype;\n  childClass.prototype = new subclass();\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[72]: function(childClass, parentClass) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[72]: function(childClass, parentClass)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js73", "(function() {\n})")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js74", "(function(e) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[74]: function(e)\"); try {\n                  var lineNumber;\n  if (e.line) \n  {\n    lineNumber = e.line;\n  } else if (e.lineNumber) \n  {\n    lineNumber = e.lineNumber;\n  }\n  var file;\n  if (e.sourceURL) \n  {\n    file = e.sourceURL;\n  } else if (e.fileName) \n  {\n    file = e.fileName;\n  }\n  var message = (e.name && e.message) ? (e.name + \': \' + e.message) : e.toString();\n  if (file && lineNumber) \n  {\n    message += \' in \' + file + \' (line \' + lineNumber + \')\';\n  }\n  return message;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[74]: function(e) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[74]: function(e)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js75", "(function(str) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[75]: function(str)\"); try {\n                  if (!str) \n  return str;\n  return str.replace(\/&\/g, \'&amp;\').replace(\/<\/g, \'&lt;\').replace(\/>\/g, \'&gt;\');\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[75]: function(str) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[75]: function(str)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js76", "(function(args) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[76]: function(args)\"); try {\n                  var arrayOfArgs = [];\n  \n                                    var _colt3 = \"_colt3_\" + Date.now();\n                                  for (var i = 0; i < args.length; i++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt3);\n                                      arrayOfArgs.push(args[i]);\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  return arrayOfArgs;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[76]: function(args) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[76]: function(args)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js77", "(function(destination, source) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[77]: function(destination, source)\"); try {\n                  \n                                    var _colt4 = \"_colt4_\" + Date.now();\n                                  for (var property in source) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt4);\n                                      destination[property] = source[property];\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  return destination;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[77]: function(destination, source) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[77]: function(destination, source)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js78", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[78]: function()\"); try {\n                  this.currentSpec = null;\n  this.currentSuite = null;\n  this.currentRunner_ = new jasmine.Runner(this);\n  this.reporter = new jasmine.MultiReporter();\n  this.updateInterval = jasmine.DEFAULT_UPDATE_INTERVAL;\n  this.defaultTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL;\n  this.lastUpdate = 0;\n  this.specFilter = function() {\n  \n                        var _colt5e = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js79_\" + __coltScope)\n                        if (_colt5e == null) {\n                            try {\n                                _colt5e = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js79\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[79]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js79_\" + __coltScope, _colt5e)\n                        }\n                        return _colt5e.apply(this, arguments)\n            };\n  this.nextSpecId_ = 0;\n  this.nextSuiteId_ = 0;\n  this.equalityTesters_ = [];\n  this.matchersClass = function() {\n  \n                        var _colt5f = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js80_\" + __coltScope)\n                        if (_colt5f == null) {\n                            try {\n                                _colt5f = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js80\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[80]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js80_\" + __coltScope, _colt5f)\n                        }\n                        return _colt5f.apply(this, arguments)\n            };\n  jasmine.util.inherit(this.matchersClass, jasmine.Matchers);\n  jasmine.Matchers.wrapInto_(jasmine.Matchers.prototype, this.matchersClass);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[78]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[78]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js79", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[79]: function()\"); try {\n                  return true;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[79]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[79]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js80", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[80]: function()\"); try {\n                  jasmine.Matchers.apply(this, arguments);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[80]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[80]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js81", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[81]: function()\"); try {\n                  if (jasmine.version_) \n  {\n    return jasmine.version_;\n  } else {\n    throw new Error(\'Version not set\');\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[81]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[81]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js82", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[82]: function()\"); try {\n                  if (!jasmine.version_) \n  {\n    return \"version unknown\";\n  }\n  var version = this.version();\n  var versionString = version.major + \".\" + version.minor + \".\" + version.build;\n  if (version.release_candidate) \n  {\n    versionString += \".rc\" + version.release_candidate;\n  }\n  versionString += \" revision \" + version.revision;\n  return versionString;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[82]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[82]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js83", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[83]: function()\"); try {\n                  return this.nextSpecId_++;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[83]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[83]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js84", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[84]: function()\"); try {\n                  return this.nextSuiteId_++;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[84]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[84]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js85", "(function(reporter) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[85]: function(reporter)\"); try {\n                  this.reporter.addReporter(reporter);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[85]: function(reporter) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[85]: function(reporter)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js86", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[86]: function()\"); try {\n                  this.currentRunner_.execute();\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[86]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[86]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js87", "(function(description, specDefinitions) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[87]: function(description, specDefinitions)\"); try {\n                  var suite = new jasmine.Suite(this, description, specDefinitions, this.currentSuite);\n  var parentSuite = this.currentSuite;\n  if (parentSuite) \n  {\n    parentSuite.add(suite);\n  } else {\n    this.currentRunner_.add(suite);\n  }\n  this.currentSuite = suite;\n  var declarationError = null;\n  try {\n    specDefinitions.call(suite);\n  }  catch (e) {\n  declarationError = e;\n}\n  if (declarationError) \n  {\n    this.it(\"encountered a declaration exception\", function() {\n  \n                        var _colt67 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js88_\" + __coltScope)\n                        if (_colt67 == null) {\n                            try {\n                                _colt67 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js88\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[88]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js88_\" + __coltScope, _colt67)\n                        }\n                        return _colt67.apply(this, arguments)\n            });\n  }\n  this.currentSuite = parentSuite;\n  return suite;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[87]: function(description, specDefinitions) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[87]: function(description, specDefinitions)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js88", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[88]: function()\"); try {\n                  throw declarationError;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[88]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[88]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js89", "(function(beforeEachFunction) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[89]: function(beforeEachFunction)\"); try {\n                  if (this.currentSuite) \n  {\n    this.currentSuite.beforeEach(beforeEachFunction);\n  } else {\n    this.currentRunner_.beforeEach(beforeEachFunction);\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[89]: function(beforeEachFunction) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[89]: function(beforeEachFunction)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js90", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[90]: function()\"); try {\n                  return this.currentRunner_;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[90]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[90]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js91", "(function(afterEachFunction) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[91]: function(afterEachFunction)\"); try {\n                  if (this.currentSuite) \n  {\n    this.currentSuite.afterEach(afterEachFunction);\n  } else {\n    this.currentRunner_.afterEach(afterEachFunction);\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[91]: function(afterEachFunction) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[91]: function(afterEachFunction)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js92", "(function(desc, specDefinitions) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[92]: function(desc, specDefinitions)\"); try {\n                  return {execute: function() {\n  \n                        var _colt6c = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js93_\" + __coltScope)\n                        if (_colt6c == null) {\n                            try {\n                                _colt6c = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js93\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[93]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js93_\" + __coltScope, _colt6c)\n                        }\n                        return _colt6c.apply(this, arguments)\n            }};\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[92]: function(desc, specDefinitions) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[92]: function(desc, specDefinitions)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js93", "(function() {\n})")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js94", "(function(description, func) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[94]: function(description, func)\"); try {\n                  var spec = new jasmine.Spec(this, this.currentSuite, description);\n  this.currentSuite.add(spec);\n  this.currentSpec = spec;\n  if (func) \n  {\n    spec.runs(func);\n  }\n  return spec;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[94]: function(description, func) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[94]: function(description, func)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js95", "(function(desc, func) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[95]: function(desc, func)\"); try {\n                  return {id: this.nextSpecId(), runs: function() {\n  \n                        var _colt6f = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js96_\" + __coltScope)\n                        if (_colt6f == null) {\n                            try {\n                                _colt6f = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js96\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[96]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js96_\" + __coltScope, _colt6f)\n                        }\n                        return _colt6f.apply(this, arguments)\n            }};\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[95]: function(desc, func) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[95]: function(desc, func)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js96", "(function() {\n})")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js97", "(function(a, b, mismatchKeys, mismatchValues) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[97]: function(a, b, mismatchKeys, mismatchValues)\"); try {\n                  if (a.__Jasmine_been_here_before__ === b && b.__Jasmine_been_here_before__ === a) \n  {\n    return true;\n  }\n  a.__Jasmine_been_here_before__ = b;\n  b.__Jasmine_been_here_before__ = a;\n  var hasKey = function(obj, keyName) {\n  \n                        var _colt71 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js98_\" + __coltScope)\n                        if (_colt71 == null) {\n                            try {\n                                _colt71 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js98\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[98]: function(obj, keyName) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js98_\" + __coltScope, _colt71)\n                        }\n                        return _colt71.apply(this, arguments)\n            };\n  \n                                    var _colt5 = \"_colt5_\" + Date.now();\n                                  for (var property in b) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt5);\n                                      if (!hasKey(a, property) && hasKey(b, property)) \n      {\n        mismatchKeys.push(\"expected has key \'\" + property + \"\', but missing from actual.\");\n      }\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  \n                                    var _colt6 = \"_colt6_\" + Date.now();\n                                  for (property in a) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt6);\n                                      if (!hasKey(b, property) && hasKey(a, property)) \n      {\n        mismatchKeys.push(\"expected missing key \'\" + property + \"\', but present in actual.\");\n      }\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  \n                                    var _colt7 = \"_colt7_\" + Date.now();\n                                  for (property in b) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt7);\n                                      if (property == \'__Jasmine_been_here_before__\') \n      continue;\n      if (!this.equals_(a[property], b[property], mismatchKeys, mismatchValues)) \n      {\n        mismatchValues.push(\"\'\" + property + \"\' was \'\" + (b[property] ? jasmine.util.htmlEscape(b[property].toString()) : b[property]) + \"\' in expected, but was \'\" + (a[property] ? jasmine.util.htmlEscape(a[property].toString()) : a[property]) + \"\' in actual.\");\n      }\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  if (jasmine.isArray_(a) && jasmine.isArray_(b) && a.length != b.length) \n  {\n    mismatchValues.push(\"arrays were not the same length\");\n  }\n  delete a.__Jasmine_been_here_before__;\n  delete b.__Jasmine_been_here_before__;\n  return (mismatchKeys.length === 0 && mismatchValues.length === 0);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[97]: function(a, b, mismatchKeys, mismatchValues) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[97]: function(a, b, mismatchKeys, mismatchValues)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js98", "(function(obj, keyName) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[98]: function(obj, keyName)\"); try {\n                  return obj !== null && obj[keyName] !== jasmine.undefined;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[98]: function(obj, keyName) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[98]: function(obj, keyName)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js99", "(function(a, b, mismatchKeys, mismatchValues) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[99]: function(a, b, mismatchKeys, mismatchValues)\"); try {\n                  mismatchKeys = mismatchKeys || [];\n  mismatchValues = mismatchValues || [];\n  \n                                    var _colt8 = \"_colt8_\" + Date.now();\n                                  for (var i = 0; i < this.equalityTesters_.length; i++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt8);\n                                      var equalityTester = this.equalityTesters_[i];\n      var result = equalityTester(a, b, this, mismatchKeys, mismatchValues);\n      if (result !== jasmine.undefined) \n      return result;\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  if (a === b) \n  return true;\n  if (a === jasmine.undefined || a === null || b === jasmine.undefined || b === null) \n  {\n    return (a == jasmine.undefined && b == jasmine.undefined);\n  }\n  if (jasmine.isDomNode(a) && jasmine.isDomNode(b)) \n  {\n    return a === b;\n  }\n  if (a instanceof Date && b instanceof Date) \n  {\n    return a.getTime() == b.getTime();\n  }\n  if (a.jasmineMatches) \n  {\n    return a.jasmineMatches(b);\n  }\n  if (b.jasmineMatches) \n  {\n    return b.jasmineMatches(a);\n  }\n  if (a instanceof jasmine.Matchers.ObjectContaining) \n  {\n    return a.matches(b);\n  }\n  if (b instanceof jasmine.Matchers.ObjectContaining) \n  {\n    return b.matches(a);\n  }\n  if (jasmine.isString_(a) && jasmine.isString_(b)) \n  {\n    return (a == b);\n  }\n  if (jasmine.isNumber_(a) && jasmine.isNumber_(b)) \n  {\n    return (a == b);\n  }\n  if (typeof a === \"object\" && typeof b === \"object\") \n  {\n    return this.compareObjects_(a, b, mismatchKeys, mismatchValues);\n  }\n  return (a === b);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[99]: function(a, b, mismatchKeys, mismatchValues) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[99]: function(a, b, mismatchKeys, mismatchValues)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js100", "(function(haystack, needle) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[100]: function(haystack, needle)\"); try {\n                  if (jasmine.isArray_(haystack)) \n  {\n    \n                                    var _colt9 = \"_colt9_\" + Date.now();\n                                    for (var i = 0; i < haystack.length; i++) \n      {\n        \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt9);\n                                        if (this.equals_(haystack[i], needle)) \n        return true;\n      }\n    \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                    return false;\n  }\n  return haystack.indexOf(needle) >= 0;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[100]: function(haystack, needle) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[100]: function(haystack, needle)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js101", "(function(equalityTester) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[101]: function(equalityTester)\"); try {\n                  this.equalityTesters_.push(equalityTester);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[101]: function(equalityTester) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[101]: function(equalityTester)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js102", "(function() {\n})")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js103", "(function(runner) {\n})")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js104", "(function(runner) {\n})")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js105", "(function(suite) {\n})")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js106", "(function(spec) {\n})")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js107", "(function(spec) {\n})")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js108", "(function(str) {\n})")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js110", "(function(env, func, spec) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[110]: function(env, func, spec)\"); try {\n                  this.env = env;\n  this.func = func;\n  this.spec = spec;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[110]: function(env, func, spec) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[110]: function(env, func, spec)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js111", "(function(onComplete) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[111]: function(onComplete)\"); try {\n                  try {\n    this.func.apply(this.spec);\n  }  catch (e) {\n  this.spec.fail(e);\n}\n  onComplete();\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[111]: function(onComplete) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[111]: function(onComplete)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js112", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[112]: function()\"); try {\n                  this.started = false;\n  this.finished = false;\n  this.suites_ = [];\n  this.results_ = {};\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[112]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[112]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js113", "(function(runner) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[113]: function(runner)\"); try {\n                  this.started = true;\n  var suites = runner.topLevelSuites();\n  \n                                    var _colta = \"_colta_\" + Date.now();\n                                  for (var i = 0; i < suites.length; i++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colta);\n                                      var suite = suites[i];\n      this.suites_.push(this.summarize_(suite));\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[113]: function(runner) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[113]: function(runner)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js114", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[114]: function()\"); try {\n                  return this.suites_;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[114]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[114]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js115", "(function(suiteOrSpec) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[115]: function(suiteOrSpec)\"); try {\n                  var isSuite = suiteOrSpec instanceof jasmine.Suite;\n  var summary = {id: suiteOrSpec.id, name: suiteOrSpec.description, type: isSuite ? \'suite\' : \'spec\', children: []};\n  if (isSuite) \n  {\n    var children = suiteOrSpec.children();\n    \n                                    var _coltb = \"_coltb_\" + Date.now();\n                                    for (var i = 0; i < children.length; i++) \n      {\n        \n                                    LiveCodingCodeFlowUtil.checkLoop(_coltb);\n                                        summary.children.push(this.summarize_(children[i]));\n      }\n    \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  }\n  return summary;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[115]: function(suiteOrSpec) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[115]: function(suiteOrSpec)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js116", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[116]: function()\"); try {\n                  return this.results_;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[116]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[116]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js117", "(function(specId) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[117]: function(specId)\"); try {\n                  return this.results_[specId];\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[117]: function(specId) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[117]: function(specId)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js118", "(function(runner) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[118]: function(runner)\"); try {\n                  this.finished = true;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[118]: function(runner) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[118]: function(runner)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js119", "(function(suite) {\n})")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js120", "(function(spec) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[120]: function(spec)\"); try {\n                  this.results_[spec.id] = {messages: spec.results().getItems(), result: spec.results().failedCount > 0 ? \"failed\" : \"passed\"};\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[120]: function(spec) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[120]: function(spec)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js121", "(function(str) {\n})")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js122", "(function(specIds) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[122]: function(specIds)\"); try {\n                  var results = {};\n  \n                                    var _coltc = \"_coltc_\" + Date.now();\n                                  for (var i = 0; i < specIds.length; i++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_coltc);\n                                      var specId = specIds[i];\n      results[specId] = this.summarizeResult_(this.results_[specId]);\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  return results;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[122]: function(specIds) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[122]: function(specIds)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js123", "(function(result) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[123]: function(result)\"); try {\n                  var summaryMessages = [];\n  var messagesLength = result.messages.length;\n  \n                                    var _coltd = \"_coltd_\" + Date.now();\n                                  for (var messageIndex = 0; messageIndex < messagesLength; messageIndex++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_coltd);\n                                      var resultMessage = result.messages[messageIndex];\n      summaryMessages.push({text: resultMessage.type == \'log\' ? resultMessage.toString() : jasmine.undefined, passed: resultMessage.passed ? resultMessage.passed() : true, type: resultMessage.type, message: resultMessage.message, trace: {stack: resultMessage.passed && !resultMessage.passed() ? resultMessage.trace.stack : jasmine.undefined}});\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  return {result: result.result, messages: summaryMessages};\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[123]: function(result) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[123]: function(result)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js124", "(function(env, actual, spec, opt_isNot) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[124]: function(env, actual, spec, opt_isNot)\"); try {\n                  this.env = env;\n  this.actual = actual;\n  this.spec = spec;\n  this.isNot = opt_isNot || false;\n  this.reportWasCalled_ = false;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[124]: function(env, actual, spec, opt_isNot) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[124]: function(env, actual, spec, opt_isNot)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js125", "(function(str) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[125]: function(str)\"); try {\n                  throw new Error(\"jasmine.Matchers.pp() is no longer supported, please use jasmine.pp() instead!\");\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[125]: function(str) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[125]: function(str)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js126", "(function(result, failing_message, details) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[126]: function(result, failing_message, details)\"); try {\n                  throw new Error(\"As of jasmine 0.11, custom matchers must be implemented differently -- please see jasmine docs\");\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[126]: function(result, failing_message, details) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[126]: function(result, failing_message, details)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js127", "(function(prototype, matchersClass) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[127]: function(prototype, matchersClass)\"); try {\n                  \n                                    var _colte = \"_colte_\" + Date.now();\n                                  for (var methodName in prototype) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colte);\n                                      if (methodName == \'report\') \n      continue;\n      var orig = prototype[methodName];\n      matchersClass.prototype[methodName] = jasmine.Matchers.matcherFn_(methodName, orig);\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[127]: function(prototype, matchersClass) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[127]: function(prototype, matchersClass)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js128", "(function(matcherName, matcherFunction) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[128]: function(matcherName, matcherFunction)\"); try {\n                  return function() {\n  \n                        var _colt8f = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js129_\" + __coltScope)\n                        if (_colt8f == null) {\n                            try {\n                                _colt8f = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js129\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[129]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js129_\" + __coltScope, _colt8f)\n                        }\n                        return _colt8f.apply(this, arguments)\n            };\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[128]: function(matcherName, matcherFunction) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[128]: function(matcherName, matcherFunction)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js129", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[129]: function()\"); try {\n                  var matcherArgs = jasmine.util.argsToArray(arguments);\n  var result = matcherFunction.apply(this, arguments);\n  if (this.isNot) \n  {\n    result = !result;\n  }\n  if (this.reportWasCalled_) \n  return result;\n  var message;\n  if (!result) \n  {\n    if (this.message) \n    {\n      message = this.message.apply(this, arguments);\n      if (jasmine.isArray_(message)) \n      {\n        message = message[this.isNot ? 1 : 0];\n      }\n    } else {\n      var englishyPredicate = matcherName.replace(\/[A-Z]\/g, function(s) {\n  \n                        var _colt90 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js130_\" + __coltScope)\n                        if (_colt90 == null) {\n                            try {\n                                _colt90 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js130\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[130]: function(s) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js130_\" + __coltScope, _colt90)\n                        }\n                        return _colt90.apply(this, arguments)\n            });\n      message = \"Expected \" + jasmine.pp(this.actual) + (this.isNot ? \" not \" : \" \") + englishyPredicate;\n      if (matcherArgs.length > 0) \n      {\n        \n                                    var _coltf = \"_coltf_\" + Date.now();\n                                        for (var i = 0; i < matcherArgs.length; i++) \n          {\n            \n                                    LiveCodingCodeFlowUtil.checkLoop(_coltf);\n                                            if (i > 0) \n            message += \",\";\n            message += \" \" + jasmine.pp(matcherArgs[i]);\n          }\n        \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                      }\n      message += \".\";\n    }\n  }\n  var expectationResult = new jasmine.ExpectationResult({matcherName: matcherName, passed: result, expected: matcherArgs.length > 1 ? matcherArgs : matcherArgs[0], actual: this.actual, message: message});\n  this.spec.addMatcherResult(expectationResult);\n  return jasmine.undefined;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[129]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[129]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js130", "(function(s) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[130]: function(s)\"); try {\n                  return \' \' + s.toLowerCase();\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[130]: function(s) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[130]: function(s)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js131", "(function(expected) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[131]: function(expected)\"); try {\n                  return this.actual === expected;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[131]: function(expected) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[131]: function(expected)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js132", "(function(expected) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[132]: function(expected)\"); try {\n                  return this.actual !== expected;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[132]: function(expected) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[132]: function(expected)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js133", "(function(expected) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[133]: function(expected)\"); try {\n                  return this.env.equals_(this.actual, expected);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[133]: function(expected) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[133]: function(expected)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js134", "(function(expected) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[134]: function(expected)\"); try {\n                  return !this.env.equals_(this.actual, expected);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[134]: function(expected) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[134]: function(expected)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js135", "(function(expected) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[135]: function(expected)\"); try {\n                  return new RegExp(expected).test(this.actual);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[135]: function(expected) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[135]: function(expected)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js136", "(function(expected) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[136]: function(expected)\"); try {\n                  return !(new RegExp(expected).test(this.actual));\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[136]: function(expected) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[136]: function(expected)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js137", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[137]: function()\"); try {\n                  return (this.actual !== jasmine.undefined);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[137]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[137]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js138", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[138]: function()\"); try {\n                  return (this.actual === jasmine.undefined);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[138]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[138]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js139", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[139]: function()\"); try {\n                  return (this.actual === null);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[139]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[139]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js140", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[140]: function()\"); try {\n                  return !!this.actual;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[140]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[140]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js141", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[141]: function()\"); try {\n                  return !this.actual;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[141]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[141]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js142", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[142]: function()\"); try {\n                  if (arguments.length > 0) \n  {\n    throw new Error(\'toHaveBeenCalled does not take arguments, use toHaveBeenCalledWith\');\n  }\n  if (!jasmine.isSpy(this.actual)) \n  {\n    throw new Error(\'Expected a spy, but got \' + jasmine.pp(this.actual) + \'.\');\n  }\n  this.message = function() {\n  \n                        var _colt9d = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js143_\" + __coltScope)\n                        if (_colt9d == null) {\n                            try {\n                                _colt9d = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js143\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[143]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js143_\" + __coltScope, _colt9d)\n                        }\n                        return _colt9d.apply(this, arguments)\n            };\n  return this.actual.wasCalled;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[142]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[142]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js143", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[143]: function()\"); try {\n                  return [\"Expected spy \" + this.actual.identity + \" to have been called.\", \"Expected spy \" + this.actual.identity + \" not to have been called.\"];\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[143]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[143]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js144", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[144]: function()\"); try {\n                  if (arguments.length > 0) \n  {\n    throw new Error(\'wasNotCalled does not take arguments\');\n  }\n  if (!jasmine.isSpy(this.actual)) \n  {\n    throw new Error(\'Expected a spy, but got \' + jasmine.pp(this.actual) + \'.\');\n  }\n  this.message = function() {\n  \n                        var _colt9f = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js145_\" + __coltScope)\n                        if (_colt9f == null) {\n                            try {\n                                _colt9f = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js145\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[145]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js145_\" + __coltScope, _colt9f)\n                        }\n                        return _colt9f.apply(this, arguments)\n            };\n  return !this.actual.wasCalled;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[144]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[144]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js145", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[145]: function()\"); try {\n                  return [\"Expected spy \" + this.actual.identity + \" to not have been called.\", \"Expected spy \" + this.actual.identity + \" to have been called.\"];\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[145]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[145]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js146", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[146]: function()\"); try {\n                  var expectedArgs = jasmine.util.argsToArray(arguments);\n  if (!jasmine.isSpy(this.actual)) \n  {\n    throw new Error(\'Expected a spy, but got \' + jasmine.pp(this.actual) + \'.\');\n  }\n  this.message = function() {\n  \n                        var _colta1 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js147_\" + __coltScope)\n                        if (_colta1 == null) {\n                            try {\n                                _colta1 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js147\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[147]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js147_\" + __coltScope, _colta1)\n                        }\n                        return _colta1.apply(this, arguments)\n            };\n  return this.env.contains_(this.actual.argsForCall, expectedArgs);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[146]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[146]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js147", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[147]: function()\"); try {\n                  if (this.actual.callCount === 0) \n  {\n    return [\"Expected spy \" + this.actual.identity + \" to have been called with \" + jasmine.pp(expectedArgs) + \" but it was never called.\", \"Expected spy \" + this.actual.identity + \" not to have been called with \" + jasmine.pp(expectedArgs) + \" but it was.\"];\n  } else {\n    return [\"Expected spy \" + this.actual.identity + \" to have been called with \" + jasmine.pp(expectedArgs) + \" but was called with \" + jasmine.pp(this.actual.argsForCall), \"Expected spy \" + this.actual.identity + \" not to have been called with \" + jasmine.pp(expectedArgs) + \" but was called with \" + jasmine.pp(this.actual.argsForCall)];\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[147]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[147]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js148", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[148]: function()\"); try {\n                  var expectedArgs = jasmine.util.argsToArray(arguments);\n  if (!jasmine.isSpy(this.actual)) \n  {\n    throw new Error(\'Expected a spy, but got \' + jasmine.pp(this.actual) + \'.\');\n  }\n  this.message = function() {\n  \n                        var _colta3 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js149_\" + __coltScope)\n                        if (_colta3 == null) {\n                            try {\n                                _colta3 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js149\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[149]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js149_\" + __coltScope, _colta3)\n                        }\n                        return _colta3.apply(this, arguments)\n            };\n  return !this.env.contains_(this.actual.argsForCall, expectedArgs);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[148]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[148]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js149", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[149]: function()\"); try {\n                  return [\"Expected spy not to have been called with \" + jasmine.pp(expectedArgs) + \" but it was\", \"Expected spy to have been called with \" + jasmine.pp(expectedArgs) + \" but it was\"];\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[149]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[149]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js150", "(function(expected) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[150]: function(expected)\"); try {\n                  return this.env.contains_(this.actual, expected);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[150]: function(expected) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[150]: function(expected)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js151", "(function(expected) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[151]: function(expected)\"); try {\n                  return !this.env.contains_(this.actual, expected);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[151]: function(expected) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[151]: function(expected)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js152", "(function(expected) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[152]: function(expected)\"); try {\n                  return this.actual < expected;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[152]: function(expected) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[152]: function(expected)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js153", "(function(expected) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[153]: function(expected)\"); try {\n                  return this.actual > expected;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[153]: function(expected) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[153]: function(expected)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js154", "(function(expected, precision) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[154]: function(expected, precision)\"); try {\n                  if (!(precision === 0)) \n  {\n    precision = precision || 2;\n  }\n  var multiplier = Math.pow(10, precision);\n  var actual = Math.round(this.actual * multiplier);\n  expected = Math.round(expected * multiplier);\n  return expected == actual;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[154]: function(expected, precision) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[154]: function(expected, precision)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js155", "(function(expected) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[155]: function(expected)\"); try {\n                  var result = false;\n  var exception;\n  if (typeof this.actual != \'function\') \n  {\n    throw new Error(\'Actual is not a function\');\n  }\n  try {\n    this.actual();\n  }  catch (e) {\n  exception = e;\n}\n  if (exception) \n  {\n    result = (expected === jasmine.undefined || this.env.equals_(exception.message || exception, expected.message || expected));\n  }\n  var not = this.isNot ? \"not \" : \"\";\n  this.message = function() {\n  \n                        var _coltaa = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js158_\" + __coltScope)\n                        if (_coltaa == null) {\n                            try {\n                                _coltaa = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js158\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[158]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js158_\" + __coltScope, _coltaa)\n                        }\n                        return _coltaa.apply(this, arguments)\n            };\n  return result;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[155]: function(expected) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[155]: function(expected)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js158", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[158]: function()\"); try {\n                  if (exception && (expected === jasmine.undefined || !this.env.equals_(exception.message || exception, expected.message || expected))) \n  {\n    return [\"Expected function \" + not + \"to throw\", expected ? expected.message || expected : \"an exception\", \", but it threw\", exception.message || exception].join(\' \');\n  } else {\n    return \"Expected function to throw an exception.\";\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[158]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[158]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js161", "(function(expectedClass) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[161]: function(expectedClass)\"); try {\n                  this.expectedClass = expectedClass;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[161]: function(expectedClass) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[161]: function(expectedClass)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js162", "(function(other) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[162]: function(other)\"); try {\n                  if (this.expectedClass == String) \n  {\n    return typeof other == \'string\' || other instanceof String;\n  }\n  if (this.expectedClass == Number) \n  {\n    return typeof other == \'number\' || other instanceof Number;\n  }\n  if (this.expectedClass == Function) \n  {\n    return typeof other == \'function\' || other instanceof Function;\n  }\n  if (this.expectedClass == Object) \n  {\n    return typeof other == \'object\';\n  }\n  return other instanceof this.expectedClass;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[162]: function(other) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[162]: function(other)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js164", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[164]: function()\"); try {\n                  return \'<jasmine.any(\' + this.expectedClass + \')>\';\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[164]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[164]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js165", "(function(sample) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[165]: function(sample)\"); try {\n                  this.sample = sample;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[165]: function(sample) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[165]: function(sample)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js166", "(function(other, mismatchKeys, mismatchValues) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[166]: function(other, mismatchKeys, mismatchValues)\"); try {\n                  mismatchKeys = mismatchKeys || [];\n  mismatchValues = mismatchValues || [];\n  var env = jasmine.getEnv();\n  var hasKey = function(obj, keyName) {\n  \n                        var _coltb0 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js167_\" + __coltScope)\n                        if (_coltb0 == null) {\n                            try {\n                                _coltb0 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js167\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[167]: function(obj, keyName) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js167_\" + __coltScope, _coltb0)\n                        }\n                        return _coltb0.apply(this, arguments)\n            };\n  \n                                    var _colt10 = \"_colt10_\" + Date.now();\n                                  for (var property in this.sample) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt10);\n                                      if (!hasKey(other, property) && hasKey(this.sample, property)) \n      {\n        mismatchKeys.push(\"expected has key \'\" + property + \"\', but missing from actual.\");\n      } else if (!env.equals_(this.sample[property], other[property], mismatchKeys, mismatchValues)) \n      {\n        mismatchValues.push(\"\'\" + property + \"\' was \'\" + (other[property] ? jasmine.util.htmlEscape(other[property].toString()) : other[property]) + \"\' in expected, but was \'\" + (this.sample[property] ? jasmine.util.htmlEscape(this.sample[property].toString()) : this.sample[property]) + \"\' in actual.\");\n      }\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  return (mismatchKeys.length === 0 && mismatchValues.length === 0);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[166]: function(other, mismatchKeys, mismatchValues) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[166]: function(other, mismatchKeys, mismatchValues)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js167", "(function(obj, keyName) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[167]: function(obj, keyName)\"); try {\n                  return obj != null && obj[keyName] !== jasmine.undefined;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[167]: function(obj, keyName) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[167]: function(obj, keyName)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js168", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[168]: function()\"); try {\n                  return \"<jasmine.objectContaining(\" + jasmine.pp(this.sample) + \")>\";\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[168]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[168]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js169", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[169]: function()\"); try {\n                  this.reset();\n  var self = this;\n  self.setTimeout = function(funcToCall, millis) {\n  \n                        var _coltb3 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js170_\" + __coltScope)\n                        if (_coltb3 == null) {\n                            try {\n                                _coltb3 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js170\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[170]: function(funcToCall, millis) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js170_\" + __coltScope, _coltb3)\n                        }\n                        return _coltb3.apply(this, arguments)\n            };\n  self.setInterval = function(funcToCall, millis) {\n  \n                        var _coltb4 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js171_\" + __coltScope)\n                        if (_coltb4 == null) {\n                            try {\n                                _coltb4 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js171\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[171]: function(funcToCall, millis) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js171_\" + __coltScope, _coltb4)\n                        }\n                        return _coltb4.apply(this, arguments)\n            };\n  self.clearTimeout = function(timeoutKey) {\n  \n                        var _coltb5 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js172_\" + __coltScope)\n                        if (_coltb5 == null) {\n                            try {\n                                _coltb5 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js172\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[172]: function(timeoutKey) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js172_\" + __coltScope, _coltb5)\n                        }\n                        return _coltb5.apply(this, arguments)\n            };\n  self.clearInterval = function(timeoutKey) {\n  \n                        var _coltb6 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js173_\" + __coltScope)\n                        if (_coltb6 == null) {\n                            try {\n                                _coltb6 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js173\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[173]: function(timeoutKey) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js173_\" + __coltScope, _coltb6)\n                        }\n                        return _coltb6.apply(this, arguments)\n            };\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[169]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[169]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js170", "(function(funcToCall, millis) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[170]: function(funcToCall, millis)\"); try {\n                  self.timeoutsMade++;\n  self.scheduleFunction(self.timeoutsMade, funcToCall, millis, false);\n  return self.timeoutsMade;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[170]: function(funcToCall, millis) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[170]: function(funcToCall, millis)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js171", "(function(funcToCall, millis) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[171]: function(funcToCall, millis)\"); try {\n                  self.timeoutsMade++;\n  self.scheduleFunction(self.timeoutsMade, funcToCall, millis, true);\n  return self.timeoutsMade;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[171]: function(funcToCall, millis) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[171]: function(funcToCall, millis)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js172", "(function(timeoutKey) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[172]: function(timeoutKey)\"); try {\n                  self.scheduledFunctions[timeoutKey] = jasmine.undefined;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[172]: function(timeoutKey) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[172]: function(timeoutKey)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js173", "(function(timeoutKey) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[173]: function(timeoutKey)\"); try {\n                  self.scheduledFunctions[timeoutKey] = jasmine.undefined;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[173]: function(timeoutKey) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[173]: function(timeoutKey)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js174", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[174]: function()\"); try {\n                  this.timeoutsMade = 0;\n  this.scheduledFunctions = {};\n  this.nowMillis = 0;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[174]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[174]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js175", "(function(millis) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[175]: function(millis)\"); try {\n                  var oldMillis = this.nowMillis;\n  var newMillis = oldMillis + millis;\n  this.runFunctionsWithinRange(oldMillis, newMillis);\n  this.nowMillis = newMillis;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[175]: function(millis) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[175]: function(millis)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js176", "(function(oldMillis, nowMillis) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[176]: function(oldMillis, nowMillis)\"); try {\n                  var scheduledFunc;\n  var funcsToRun = [];\n  \n                                    var _colt11 = \"_colt11_\" + Date.now();\n                                  for (var timeoutKey in this.scheduledFunctions) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt11);\n                                      scheduledFunc = this.scheduledFunctions[timeoutKey];\n      if (scheduledFunc != jasmine.undefined && scheduledFunc.runAtMillis >= oldMillis && scheduledFunc.runAtMillis <= nowMillis) \n      {\n        funcsToRun.push(scheduledFunc);\n        this.scheduledFunctions[timeoutKey] = jasmine.undefined;\n      }\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  if (funcsToRun.length > 0) \n  {\n    funcsToRun.sort(function(a, b) {\n  \n                        var _coltba = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js177_\" + __coltScope)\n                        if (_coltba == null) {\n                            try {\n                                _coltba = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js177\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[177]: function(a, b) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js177_\" + __coltScope, _coltba)\n                        }\n                        return _coltba.apply(this, arguments)\n            });\n    \n                                    var _colt12 = \"_colt12_\" + Date.now();\n                                    for (var i = 0; i < funcsToRun.length; ++i) \n      {\n        \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt12);\n                                        try {\n          var funcToRun = funcsToRun[i];\n          this.nowMillis = funcToRun.runAtMillis;\n          funcToRun.funcToCall();\n          if (funcToRun.recurring) \n          {\n            this.scheduleFunction(funcToRun.timeoutKey, funcToRun.funcToCall, funcToRun.millis, true);\n          }\n        }        catch (e) {\n}\n      }\n    \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                    this.runFunctionsWithinRange(oldMillis, nowMillis);\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[176]: function(oldMillis, nowMillis) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[176]: function(oldMillis, nowMillis)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js177", "(function(a, b) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[177]: function(a, b)\"); try {\n                  return a.runAtMillis - b.runAtMillis;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[177]: function(a, b) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[177]: function(a, b)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js178", "(function(timeoutKey, funcToCall, millis, recurring) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[178]: function(timeoutKey, funcToCall, millis, recurring)\"); try {\n                  this.scheduledFunctions[timeoutKey] = {runAtMillis: this.nowMillis + millis, funcToCall: funcToCall, recurring: recurring, timeoutKey: timeoutKey, millis: millis};\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[178]: function(timeoutKey, funcToCall, millis, recurring) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[178]: function(timeoutKey, funcToCall, millis, recurring)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js179", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[179]: function()\"); try {\n                  jasmine.Clock.assertInstalled();\n  jasmine.Clock.defaultFakeTimer.reset();\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[179]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[179]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js180", "(function(millis) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[180]: function(millis)\"); try {\n                  jasmine.Clock.assertInstalled();\n  jasmine.Clock.defaultFakeTimer.tick(millis);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[180]: function(millis) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[180]: function(millis)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js181", "(function(oldMillis, nowMillis) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[181]: function(oldMillis, nowMillis)\"); try {\n                  jasmine.Clock.defaultFakeTimer.runFunctionsWithinRange(oldMillis, nowMillis);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[181]: function(oldMillis, nowMillis) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[181]: function(oldMillis, nowMillis)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js182", "(function(timeoutKey, funcToCall, millis, recurring) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[182]: function(timeoutKey, funcToCall, millis, recurring)\"); try {\n                  jasmine.Clock.defaultFakeTimer.scheduleFunction(timeoutKey, funcToCall, millis, recurring);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[182]: function(timeoutKey, funcToCall, millis, recurring) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[182]: function(timeoutKey, funcToCall, millis, recurring)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js183", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[183]: function()\"); try {\n                  if (!jasmine.Clock.isInstalled()) \n  {\n    var spec = jasmine.getEnv().currentSpec;\n    spec.after(jasmine.Clock.uninstallMock);\n    jasmine.Clock.installMock();\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[183]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[183]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js184", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[184]: function()\"); try {\n                  jasmine.Clock.installed = jasmine.Clock.defaultFakeTimer;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[184]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[184]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js185", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[185]: function()\"); try {\n                  jasmine.Clock.assertInstalled();\n  jasmine.Clock.installed = jasmine.Clock.real;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[185]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[185]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js186", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[186]: function()\"); try {\n                  if (!jasmine.Clock.isInstalled()) \n  {\n    throw new Error(\"Mock clock is not installed, use jasmine.Clock.useMock()\");\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[186]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[186]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js187", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[187]: function()\"); try {\n                  return jasmine.Clock.installed == jasmine.Clock.defaultFakeTimer;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[187]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[187]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js188", "(function(funcToCall, millis) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[188]: function(funcToCall, millis)\"); try {\n                  if (jasmine.Clock.installed.setTimeout.apply) \n  {\n    return jasmine.Clock.installed.setTimeout.apply(this, arguments);\n  } else {\n    return jasmine.Clock.installed.setTimeout(funcToCall, millis);\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[188]: function(funcToCall, millis) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[188]: function(funcToCall, millis)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js189", "(function(funcToCall, millis) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[189]: function(funcToCall, millis)\"); try {\n                  if (jasmine.Clock.installed.setInterval.apply) \n  {\n    return jasmine.Clock.installed.setInterval.apply(this, arguments);\n  } else {\n    return jasmine.Clock.installed.setInterval(funcToCall, millis);\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[189]: function(funcToCall, millis) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[189]: function(funcToCall, millis)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js190", "(function(timeoutKey) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[190]: function(timeoutKey)\"); try {\n                  if (jasmine.Clock.installed.clearTimeout.apply) \n  {\n    return jasmine.Clock.installed.clearTimeout.apply(this, arguments);\n  } else {\n    return jasmine.Clock.installed.clearTimeout(timeoutKey);\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[190]: function(timeoutKey) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[190]: function(timeoutKey)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js191", "(function(timeoutKey) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[191]: function(timeoutKey)\"); try {\n                  if (jasmine.Clock.installed.clearTimeout.apply) \n  {\n    return jasmine.Clock.installed.clearInterval.apply(this, arguments);\n  } else {\n    return jasmine.Clock.installed.clearInterval(timeoutKey);\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[191]: function(timeoutKey) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[191]: function(timeoutKey)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js192", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[192]: function()\"); try {\n                  this.subReporters_ = [];\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[192]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[192]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js193", "(function(reporter) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[193]: function(reporter)\"); try {\n                  this.subReporters_.push(reporter);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[193]: function(reporter) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[193]: function(reporter)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js194", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[194]: function()\"); try {\n                  var functionNames = [\"reportRunnerStarting\", \"reportRunnerResults\", \"reportSuiteResults\", \"reportSpecStarting\", \"reportSpecResults\", \"log\"];\n  \n                                    var _colt13 = \"_colt13_\" + Date.now();\n                                  for (var i = 0; i < functionNames.length; i++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt13);\n                                      var functionName = functionNames[i];\n      jasmine.MultiReporter.prototype[functionName] = (function(functionName) {\n  \n                        var _coltcc = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js200_\" + __coltScope)\n                        if (_coltcc == null) {\n                            try {\n                                _coltcc = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js200\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[200]: function(functionName) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js200_\" + __coltScope, _coltcc)\n                        }\n                        return _coltcc.apply(this, arguments)\n            })(functionName);\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[194]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[194]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js200", "(function(functionName) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[200]: function(functionName)\"); try {\n                  return function() {\n  \n                        var _coltcd = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js202_\" + __coltScope)\n                        if (_coltcd == null) {\n                            try {\n                                _coltcd = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js202\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[202]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js202_\" + __coltScope, _coltcd)\n                        }\n                        return _coltcd.apply(this, arguments)\n            };\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[200]: function(functionName) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[200]: function(functionName)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js202", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[202]: function()\"); try {\n                  \n                                    var _colt14 = \"_colt14_\" + Date.now();\n                                  for (var j = 0; j < this.subReporters_.length; j++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt14);\n                                      var subReporter = this.subReporters_[j];\n      if (subReporter[functionName]) \n      {\n        subReporter[functionName].apply(subReporter, arguments);\n      }\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[202]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[202]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js206", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[206]: function()\"); try {\n                  this.totalCount = 0;\n  this.passedCount = 0;\n  this.failedCount = 0;\n  this.skipped = false;\n  this.items_ = [];\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[206]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[206]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js207", "(function(result) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[207]: function(result)\"); try {\n                  this.totalCount += result.totalCount;\n  this.passedCount += result.passedCount;\n  this.failedCount += result.failedCount;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[207]: function(result) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[207]: function(result)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js208", "(function(values) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[208]: function(values)\"); try {\n                  this.items_.push(new jasmine.MessageResult(values));\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[208]: function(values) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[208]: function(values)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js209", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[209]: function()\"); try {\n                  return this.items_;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[209]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[209]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js210", "(function(result) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[210]: function(result)\"); try {\n                  if (result.type != \'log\') \n  {\n    if (result.items_) \n    {\n      this.rollupCounts(result);\n    } else {\n      this.totalCount++;\n      if (result.passed()) \n      {\n        this.passedCount++;\n      } else {\n        this.failedCount++;\n      }\n    }\n  }\n  this.items_.push(result);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[210]: function(result) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[210]: function(result)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js211", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[211]: function()\"); try {\n                  return this.passedCount === this.totalCount;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[211]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[211]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js212", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[212]: function()\"); try {\n                  this.ppNestLevel_ = 0;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[212]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[212]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js213", "(function(value) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[213]: function(value)\"); try {\n                  if (this.ppNestLevel_ > 40) \n  {\n    throw new Error(\'jasmine.PrettyPrinter: format() nested too deeply!\');\n  }\n  this.ppNestLevel_++;\n  try {\n    if (value === jasmine.undefined) \n    {\n      this.emitScalar(\'undefined\');\n    } else if (value === null) \n    {\n      this.emitScalar(\'null\');\n    } else if (value === jasmine.getGlobal()) \n    {\n      this.emitScalar(\'<global>\');\n    } else if (value.jasmineToString) \n    {\n      this.emitScalar(value.jasmineToString());\n    } else if (typeof value === \'string\') \n    {\n      this.emitString(value);\n    } else if (jasmine.isSpy(value)) \n    {\n      this.emitScalar(\"spy on \" + value.identity);\n    } else if (value instanceof RegExp) \n    {\n      this.emitScalar(value.toString());\n    } else if (typeof value === \'function\') \n    {\n      this.emitScalar(\'Function\');\n    } else if (typeof value.nodeType === \'number\') \n    {\n      this.emitScalar(\'HTMLNode\');\n    } else if (value instanceof Date) \n    {\n      this.emitScalar(\'Date(\' + value + \')\');\n    } else if (value.__Jasmine_been_here_before__) \n    {\n      this.emitScalar(\'<circular reference: \' + (jasmine.isArray_(value) ? \'Array\' : \'Object\') + \'>\');\n    } else if (jasmine.isArray_(value) || typeof value == \'object\') \n    {\n      value.__Jasmine_been_here_before__ = true;\n      if (jasmine.isArray_(value)) \n      {\n        this.emitArray(value);\n      } else {\n        this.emitObject(value);\n      }\n      delete value.__Jasmine_been_here_before__;\n    } else {\n      this.emitScalar(value.toString());\n    }\n  } finally   {\n    this.ppNestLevel_--;\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[213]: function(value) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[213]: function(value)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js215", "(function(obj, fn) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[215]: function(obj, fn)\"); try {\n                  \n                                    var _colt15 = \"_colt15_\" + Date.now();\n                                  for (var property in obj) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt15);\n                                      if (property == \'__Jasmine_been_here_before__\') \n      continue;\n      fn(property, obj.__lookupGetter__ ? (obj.__lookupGetter__(property) !== jasmine.undefined && obj.__lookupGetter__(property) !== null) : false);\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[215]: function(obj, fn) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[215]: function(obj, fn)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js216", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[216]: function()\"); try {\n                  jasmine.PrettyPrinter.call(this);\n  this.string = \'\';\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[216]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[216]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js217", "(function(value) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[217]: function(value)\"); try {\n                  this.append(value);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[217]: function(value) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[217]: function(value)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js218", "(function(value) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[218]: function(value)\"); try {\n                  this.append(\"\'\" + value + \"\'\");\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[218]: function(value) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[218]: function(value)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js219", "(function(array) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[219]: function(array)\"); try {\n                  this.append(\'[ \');\n  \n                                    var _colt16 = \"_colt16_\" + Date.now();\n                                  for (var i = 0; i < array.length; i++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt16);\n                                      if (i > 0) \n      {\n        this.append(\', \');\n      }\n      this.format(array[i]);\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  this.append(\' ]\');\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[219]: function(array) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[219]: function(array)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js220", "(function(obj) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[220]: function(obj)\"); try {\n                  var self = this;\n  this.append(\'{ \');\n  var first = true;\n  this.iterateObject(obj, function(property, isGetter) {\n  \n                        var _coltdc = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js221_\" + __coltScope)\n                        if (_coltdc == null) {\n                            try {\n                                _coltdc = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js221\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[221]: function(property, isGetter) execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js221_\" + __coltScope, _coltdc)\n                        }\n                        return _coltdc.apply(this, arguments)\n            });\n  this.append(\' }\');\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[220]: function(obj) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[220]: function(obj)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js221", "(function(property, isGetter) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[221]: function(property, isGetter)\"); try {\n                  if (first) \n  {\n    first = false;\n  } else {\n    self.append(\', \');\n  }\n  self.append(property);\n  self.append(\' : \');\n  if (isGetter) \n  {\n    self.append(\'<getter>\');\n  } else {\n    self.format(obj[property]);\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[221]: function(property, isGetter) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[221]: function(property, isGetter)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js222", "(function(value) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[222]: function(value)\"); try {\n                  this.string += value;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[222]: function(value) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[222]: function(value)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js223", "(function(env) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[223]: function(env)\"); try {\n                  this.env = env;\n  this.blocks = [];\n  this.running = false;\n  this.index = 0;\n  this.offset = 0;\n  this.abort = false;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[223]: function(env) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[223]: function(env)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js224", "(function(block) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[224]: function(block)\"); try {\n                  this.blocks.unshift(block);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[224]: function(block) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[224]: function(block)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js225", "(function(block) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[225]: function(block)\"); try {\n                  this.blocks.push(block);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[225]: function(block) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[225]: function(block)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js226", "(function(block) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[226]: function(block)\"); try {\n                  this.blocks.splice((this.index + this.offset + 1), 0, block);\n  this.offset++;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[226]: function(block) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[226]: function(block)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js227", "(function(onComplete) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[227]: function(onComplete)\"); try {\n                  this.running = true;\n  this.onComplete = onComplete;\n  this.next_();\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[227]: function(onComplete) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[227]: function(onComplete)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js228", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[228]: function()\"); try {\n                  return this.running;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[228]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[228]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js229", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[229]: function()\"); try {\n                  var self = this;\n  var goAgain = true;\n  \n                                    var _colt17 = \"_colt17_\" + Date.now();\n                                  while (goAgain) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt17);\n                                      goAgain = false;\n      if (self.index < self.blocks.length && !this.abort) \n      {\n        var calledSynchronously = true;\n        var completedSynchronously = false;\n        var onComplete = function() {\n  \n                        var _colte5 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js230_\" + __coltScope)\n                        if (_colte5 == null) {\n                            try {\n                                _colte5 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js230\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[230]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js230_\" + __coltScope, _colte5)\n                        }\n                        return _colte5.apply(this, arguments)\n            };\n        self.blocks[self.index].execute(onComplete);\n        calledSynchronously = false;\n        if (completedSynchronously) \n        {\n          onComplete();\n        }\n      } else {\n        self.running = false;\n        if (self.onComplete) \n        {\n          self.onComplete();\n        }\n      }\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[229]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[229]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js230", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[230]: function()\"); try {\n                  if (jasmine.Queue.LOOP_DONT_RECURSE && calledSynchronously) \n  {\n    completedSynchronously = true;\n    return;\n  }\n  if (self.blocks[self.index].abort) \n  {\n    self.abort = true;\n  }\n  self.offset = 0;\n  self.index++;\n  var now = new Date().getTime();\n  if (self.env.updateInterval && now - self.env.lastUpdate > self.env.updateInterval) \n  {\n    self.env.lastUpdate = now;\n    self.env.setTimeout(function() {\n  \n                        var _colte6 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js231_\" + __coltScope)\n                        if (_colte6 == null) {\n                            try {\n                                _colte6 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js231\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[231]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js231_\" + __coltScope, _colte6)\n                        }\n                        return _colte6.apply(this, arguments)\n            }, 0);\n  } else {\n    if (jasmine.Queue.LOOP_DONT_RECURSE && completedSynchronously) \n    {\n      goAgain = true;\n    } else {\n      self.next_();\n    }\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[230]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[230]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js231", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[231]: function()\"); try {\n                  self.next_();\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[231]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[231]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js232", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[232]: function()\"); try {\n                  var results = new jasmine.NestedResults();\n  \n                                    var _colt18 = \"_colt18_\" + Date.now();\n                                  for (var i = 0; i < this.blocks.length; i++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt18);\n                                      if (this.blocks[i].results) \n      {\n        results.addResult(this.blocks[i].results());\n      }\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  return results;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[232]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[232]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js233", "(function(env) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[233]: function(env)\"); try {\n                  var self = this;\n  self.env = env;\n  self.queue = new jasmine.Queue(env);\n  self.before_ = [];\n  self.after_ = [];\n  self.suites_ = [];\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[233]: function(env) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[233]: function(env)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js234", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[234]: function()\"); try {\n                  var self = this;\n  if (self.env.reporter.reportRunnerStarting) \n  {\n    self.env.reporter.reportRunnerStarting(this);\n  }\n  self.queue.start(function() {\n  \n                        var _coltea = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js235_\" + __coltScope)\n                        if (_coltea == null) {\n                            try {\n                                _coltea = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js235\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[235]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js235_\" + __coltScope, _coltea)\n                        }\n                        return _coltea.apply(this, arguments)\n            });\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[234]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[234]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js235", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[235]: function()\"); try {\n                  self.finishCallback();\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[235]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[235]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js236", "(function(beforeEachFunction) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[236]: function(beforeEachFunction)\"); try {\n                  beforeEachFunction.typeName = \'beforeEach\';\n  this.before_.splice(0, 0, beforeEachFunction);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[236]: function(beforeEachFunction) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[236]: function(beforeEachFunction)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js237", "(function(afterEachFunction) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[237]: function(afterEachFunction)\"); try {\n                  afterEachFunction.typeName = \'afterEach\';\n  this.after_.splice(0, 0, afterEachFunction);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[237]: function(afterEachFunction) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[237]: function(afterEachFunction)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js238", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[238]: function()\"); try {\n                  this.env.reporter.reportRunnerResults(this);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[238]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[238]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js239", "(function(suite) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[239]: function(suite)\"); try {\n                  this.suites_.push(suite);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[239]: function(suite) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[239]: function(suite)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js240", "(function(block) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[240]: function(block)\"); try {\n                  if (block instanceof jasmine.Suite) \n  {\n    this.addSuite(block);\n  }\n  this.queue.add(block);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[240]: function(block) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[240]: function(block)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js241", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[241]: function()\"); try {\n                  var suites = this.suites();\n  var specs = [];\n  \n                                    var _colt19 = \"_colt19_\" + Date.now();\n                                  for (var i = 0; i < suites.length; i++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt19);\n                                      specs = specs.concat(suites[i].specs());\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  return specs;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[241]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[241]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js242", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[242]: function()\"); try {\n                  return this.suites_;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[242]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[242]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js243", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[243]: function()\"); try {\n                  var topLevelSuites = [];\n  \n                                    var _colt1a = \"_colt1a_\" + Date.now();\n                                  for (var i = 0; i < this.suites_.length; i++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt1a);\n                                      if (!this.suites_[i].parentSuite) \n      {\n        topLevelSuites.push(this.suites_[i]);\n      }\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  return topLevelSuites;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[243]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[243]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js244", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[244]: function()\"); try {\n                  return this.queue.results();\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[244]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[244]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js245", "(function(env, suite, description) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[245]: function(env, suite, description)\"); try {\n                  if (!env) \n  {\n    throw new Error(\'jasmine.Env() required\');\n  }\n  if (!suite) \n  {\n    throw new Error(\'jasmine.Suite() required\');\n  }\n  var spec = this;\n  spec.id = env.nextSpecId ? env.nextSpecId() : null;\n  spec.env = env;\n  spec.suite = suite;\n  spec.description = description;\n  spec.queue = new jasmine.Queue(env);\n  spec.afterCallbacks = [];\n  spec.spies_ = [];\n  spec.results_ = new jasmine.NestedResults();\n  spec.results_.description = description;\n  spec.matchersClass = null;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[245]: function(env, suite, description) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[245]: function(env, suite, description)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js246", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[246]: function()\"); try {\n                  return this.suite.getFullName() + \' \' + this.description + \'.\';\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[246]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[246]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js247", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[247]: function()\"); try {\n                  return this.results_;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[247]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[247]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js248", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[248]: function()\"); try {\n                  return this.results_.log(arguments);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[248]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[248]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js249", "(function(func) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[249]: function(func)\"); try {\n                  var block = new jasmine.Block(this.env, func, this);\n  this.addToQueue(block);\n  return this;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[249]: function(func) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[249]: function(func)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js250", "(function(block) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[250]: function(block)\"); try {\n                  if (this.queue.isRunning()) \n  {\n    this.queue.insertNext(block);\n  } else {\n    this.queue.add(block);\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[250]: function(block) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[250]: function(block)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js251", "(function(result) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[251]: function(result)\"); try {\n                  this.results_.addResult(result);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[251]: function(result) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[251]: function(result)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js252", "(function(actual) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[252]: function(actual)\"); try {\n                  var positive = new (this.getMatchersClass_())(this.env, actual, this);\n  positive.not = new (this.getMatchersClass_())(this.env, actual, this, true);\n  return positive;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[252]: function(actual) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[252]: function(actual)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js253", "(function(timeout) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[253]: function(timeout)\"); try {\n                  var waitsFunc = new jasmine.WaitsBlock(this.env, timeout, this);\n  this.addToQueue(waitsFunc);\n  return this;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[253]: function(timeout) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[253]: function(timeout)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js254", "(function(latchFunction, optional_timeoutMessage, optional_timeout) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[254]: function(latchFunction, optional_timeoutMessage, optional_timeout)\"); try {\n                  var latchFunction_ = null;\n  var optional_timeoutMessage_ = null;\n  var optional_timeout_ = null;\n  \n                                    var _colt1b = \"_colt1b_\" + Date.now();\n                                  for (var i = 0; i < arguments.length; i++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt1b);\n                                      var arg = arguments[i];\n      switch (typeof arg) {\n        case \'function\':\n          latchFunction_ = arg;\n          break;\n        case \'string\':\n          optional_timeoutMessage_ = arg;\n          break;\n        case \'number\':\n          optional_timeout_ = arg;\n          break;\n      }\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  var waitsForFunc = new jasmine.WaitsForBlock(this.env, optional_timeout_, latchFunction_, optional_timeoutMessage_, this);\n  this.addToQueue(waitsForFunc);\n  return this;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[254]: function(latchFunction, optional_timeoutMessage, optional_timeout) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[254]: function(latchFunction, optional_timeoutMessage, optional_timeout)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js256", "(function(e) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[256]: function(e)\"); try {\n                  var expectationResult = new jasmine.ExpectationResult({passed: false, message: e ? jasmine.util.formatException(e) : \'Exception\', trace: {stack: e.stack}});\n  this.results_.addResult(expectationResult);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[256]: function(e) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[256]: function(e)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js257", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[257]: function()\"); try {\n                  return this.matchersClass || this.env.matchersClass;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[257]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[257]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js258", "(function(matchersPrototype) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[258]: function(matchersPrototype)\"); try {\n                  var parent = this.getMatchersClass_();\n  var newMatchersClass = function() {\n  \n                        var _colt101 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js259_\" + __coltScope)\n                        if (_colt101 == null) {\n                            try {\n                                _colt101 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js259\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[259]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js259_\" + __coltScope, _colt101)\n                        }\n                        return _colt101.apply(this, arguments)\n            };\n  jasmine.util.inherit(newMatchersClass, parent);\n  jasmine.Matchers.wrapInto_(matchersPrototype, newMatchersClass);\n  this.matchersClass = newMatchersClass;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[258]: function(matchersPrototype) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[258]: function(matchersPrototype)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js259", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[259]: function()\"); try {\n                  parent.apply(this, arguments);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[259]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[259]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js260", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[260]: function()\"); try {\n                  this.env.reporter.reportSpecResults(this);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[260]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[260]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js261", "(function(onComplete) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[261]: function(onComplete)\"); try {\n                  this.removeAllSpies();\n  this.finishCallback();\n  if (onComplete) \n  {\n    onComplete();\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[261]: function(onComplete) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[261]: function(onComplete)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js262", "(function(doAfter) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[262]: function(doAfter)\"); try {\n                  if (this.queue.isRunning()) \n  {\n    this.queue.add(new jasmine.Block(this.env, doAfter, this));\n  } else {\n    this.afterCallbacks.unshift(doAfter);\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[262]: function(doAfter) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[262]: function(doAfter)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js263", "(function(onComplete) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[263]: function(onComplete)\"); try {\n                  var spec = this;\n  if (!spec.env.specFilter(spec)) \n  {\n    spec.results_.skipped = true;\n    spec.finish(onComplete);\n    return;\n  }\n  this.env.reporter.reportSpecStarting(this);\n  spec.env.currentSpec = spec;\n  spec.addBeforesAndAftersToQueue();\n  spec.queue.start(function() {\n  \n                        var _colt106 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js264_\" + __coltScope)\n                        if (_colt106 == null) {\n                            try {\n                                _colt106 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js264\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[264]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js264_\" + __coltScope, _colt106)\n                        }\n                        return _colt106.apply(this, arguments)\n            });\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[263]: function(onComplete) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[263]: function(onComplete)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js264", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[264]: function()\"); try {\n                  spec.finish(onComplete);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[264]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[264]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js265", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[265]: function()\"); try {\n                  var runner = this.env.currentRunner();\n  var i;\n  \n                                    var _colt1c = \"_colt1c_\" + Date.now();\n                                  for (var suite = this.suite; suite; suite = suite.parentSuite) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt1c);\n                                      \n                                    var _colt1d = \"_colt1d_\" + Date.now();\n                                      for (i = 0; i < suite.before_.length; i++) \n        {\n          \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt1d);\n                                          this.queue.addBefore(new jasmine.Block(this.env, suite.before_[i], this));\n        }\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  \n                                    var _colt1e = \"_colt1e_\" + Date.now();\n                                  for (i = 0; i < runner.before_.length; i++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt1e);\n                                      this.queue.addBefore(new jasmine.Block(this.env, runner.before_[i], this));\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  \n                                    var _colt1f = \"_colt1f_\" + Date.now();\n                                  for (i = 0; i < this.afterCallbacks.length; i++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt1f);\n                                      this.queue.add(new jasmine.Block(this.env, this.afterCallbacks[i], this));\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  \n                                    var _colt20 = \"_colt20_\" + Date.now();\n                                  for (suite = this.suite; suite; suite = suite.parentSuite) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt20);\n                                      \n                                    var _colt21 = \"_colt21_\" + Date.now();\n                                      for (i = 0; i < suite.after_.length; i++) \n        {\n          \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt21);\n                                          this.queue.add(new jasmine.Block(this.env, suite.after_[i], this));\n        }\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  \n                                    var _colt22 = \"_colt22_\" + Date.now();\n                                  for (i = 0; i < runner.after_.length; i++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt22);\n                                      this.queue.add(new jasmine.Block(this.env, runner.after_[i], this));\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[265]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[265]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js266", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[266]: function()\"); try {\n                  throw \'explodes function should not have been called\';\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[266]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[266]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js268", "(function(obj, methodName, ignoreMethodDoesntExist) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[268]: function(obj, methodName, ignoreMethodDoesntExist)\"); try {\n                  if (obj == jasmine.undefined) \n  {\n    throw \"spyOn could not find an object to spy upon for \" + methodName + \"()\";\n  }\n  if (!ignoreMethodDoesntExist && obj[methodName] === jasmine.undefined) \n  {\n    throw methodName + \'() method does not exist\';\n  }\n  if (!ignoreMethodDoesntExist && obj[methodName] && obj[methodName].isSpy) \n  {\n    throw new Error(methodName + \' has already been spied upon\');\n  }\n  var spyObj = jasmine.createSpy(methodName);\n  this.spies_.push(spyObj);\n  spyObj.baseObj = obj;\n  spyObj.methodName = methodName;\n  spyObj.originalValue = obj[methodName];\n  obj[methodName] = spyObj;\n  return spyObj;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[268]: function(obj, methodName, ignoreMethodDoesntExist) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[268]: function(obj, methodName, ignoreMethodDoesntExist)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js269", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[269]: function()\"); try {\n                  \n                                    var _colt23 = \"_colt23_\" + Date.now();\n                                  for (var i = 0; i < this.spies_.length; i++) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt23);\n                                      var spy = this.spies_[i];\n      spy.baseObj[spy.methodName] = spy.originalValue;\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  this.spies_ = [];\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[269]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[269]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js270", "(function(env, description, specDefinitions, parentSuite) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[270]: function(env, description, specDefinitions, parentSuite)\"); try {\n                  var self = this;\n  self.id = env.nextSuiteId ? env.nextSuiteId() : null;\n  self.description = description;\n  self.queue = new jasmine.Queue(env);\n  self.parentSuite = parentSuite;\n  self.env = env;\n  self.before_ = [];\n  self.after_ = [];\n  self.children_ = [];\n  self.suites_ = [];\n  self.specs_ = [];\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[270]: function(env, description, specDefinitions, parentSuite) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[270]: function(env, description, specDefinitions, parentSuite)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js271", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[271]: function()\"); try {\n                  var fullName = this.description;\n  \n                                    var _colt24 = \"_colt24_\" + Date.now();\n                                  for (var parentSuite = this.parentSuite; parentSuite; parentSuite = parentSuite.parentSuite) \n    {\n      \n                                    LiveCodingCodeFlowUtil.checkLoop(_colt24);\n                                      fullName = parentSuite.description + \' \' + fullName;\n    }\n  \n                                    LiveCodingCodeFlowUtil.checkLoop(\"\");\n                                  return fullName;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[271]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[271]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js272", "(function(onComplete) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[272]: function(onComplete)\"); try {\n                  this.env.reporter.reportSuiteResults(this);\n  this.finished = true;\n  if (typeof (onComplete) == \'function\') \n  {\n    onComplete();\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[272]: function(onComplete) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[272]: function(onComplete)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js274", "(function(beforeEachFunction) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[274]: function(beforeEachFunction)\"); try {\n                  beforeEachFunction.typeName = \'beforeEach\';\n  this.before_.unshift(beforeEachFunction);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[274]: function(beforeEachFunction) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[274]: function(beforeEachFunction)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js275", "(function(afterEachFunction) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[275]: function(afterEachFunction)\"); try {\n                  afterEachFunction.typeName = \'afterEach\';\n  this.after_.unshift(afterEachFunction);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[275]: function(afterEachFunction) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[275]: function(afterEachFunction)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js276", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[276]: function()\"); try {\n                  return this.queue.results();\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[276]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[276]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js277", "(function(suiteOrSpec) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[277]: function(suiteOrSpec)\"); try {\n                  this.children_.push(suiteOrSpec);\n  if (suiteOrSpec instanceof jasmine.Suite) \n  {\n    this.suites_.push(suiteOrSpec);\n    this.env.currentRunner().addSuite(suiteOrSpec);\n  } else {\n    this.specs_.push(suiteOrSpec);\n  }\n  this.queue.add(suiteOrSpec);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[277]: function(suiteOrSpec) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[277]: function(suiteOrSpec)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js278", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[278]: function()\"); try {\n                  return this.specs_;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[278]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[278]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js279", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[279]: function()\"); try {\n                  return this.suites_;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[279]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[279]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js280", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[280]: function()\"); try {\n                  return this.children_;\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[280]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[280]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js281", "(function(onComplete) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[281]: function(onComplete)\"); try {\n                  var self = this;\n  this.queue.start(function() {\n  \n                        var _colt116 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js282_\" + __coltScope)\n                        if (_colt116 == null) {\n                            try {\n                                _colt116 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js282\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[282]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js282_\" + __coltScope, _colt116)\n                        }\n                        return _colt116.apply(this, arguments)\n            });\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[281]: function(onComplete) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[281]: function(onComplete)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js282", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[282]: function()\"); try {\n                  self.finish(onComplete);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[282]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[282]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js283", "(function(env, timeout, spec) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[283]: function(env, timeout, spec)\"); try {\n                  this.timeout = timeout;\n  jasmine.Block.call(this, env, null, spec);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[283]: function(env, timeout, spec) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[283]: function(env, timeout, spec)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js284", "(function(onComplete) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[284]: function(onComplete)\"); try {\n                  if (jasmine.VERBOSE) \n  {\n    this.env.reporter.log(\'>> Jasmine waiting for \' + this.timeout + \' ms...\');\n  }\n  this.env.setTimeout(function() {\n  \n                        var _colt119 = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js285_\" + __coltScope)\n                        if (_colt119 == null) {\n                            try {\n                                _colt119 = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js285\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[285]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js285_\" + __coltScope, _colt119)\n                        }\n                        return _colt119.apply(this, arguments)\n            }, this.timeout);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[284]: function(onComplete) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[284]: function(onComplete)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js285", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[285]: function()\"); try {\n                  onComplete();\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[285]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[285]: function()\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js287", "(function(env, timeout, latchFunction, message, spec) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[287]: function(env, timeout, latchFunction, message, spec)\"); try {\n                  this.timeout = timeout || env.defaultTimeoutInterval;\n  this.latchFunction = latchFunction;\n  this.message = message;\n  this.totalTimeSpentWaitingForLatch = 0;\n  jasmine.Block.call(this, env, null, spec);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[287]: function(env, timeout, latchFunction, message, spec) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[287]: function(env, timeout, latchFunction, message, spec)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js288", "(function(onComplete) {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[288]: function(onComplete)\"); try {\n                  if (jasmine.VERBOSE) \n  {\n    this.env.reporter.log(\'>> Jasmine waiting for \' + (this.message || \'something to happen\'));\n  }\n  var latchFunctionResult;\n  try {\n    latchFunctionResult = this.latchFunction.apply(this.spec);\n  }  catch (e) {\n  this.spec.fail(e);\n  onComplete();\n  return;\n}\n  if (latchFunctionResult) \n  {\n    onComplete();\n  } else if (this.totalTimeSpentWaitingForLatch >= this.timeout) \n  {\n    var message = \'timed out after \' + this.timeout + \' msec waiting for \' + (this.message || \'something to happen\');\n    this.spec.fail({name: \'timeout\', message: message});\n    this.abort = true;\n    onComplete();\n  } else {\n    this.totalTimeSpentWaitingForLatch += jasmine.WaitsForBlock.TIMEOUT_INCREMENT;\n    var self = this;\n    this.env.setTimeout(function() {\n  \n                        var _colt11c = LiveCodeRegistry.getInstance().getCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js289_\" + __coltScope)\n                        if (_colt11c == null) {\n                            try {\n                                _colt11c = eval(LiveCodeRegistry.getInstance().getMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js289\"));\n                            } catch (e) {\n                                LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[289]: function() execute error: \" + e.message, e);\n                                return;\n                            }\n                            LiveCodeRegistry.getInstance().putCachedMethod(\"spec\/lib\/jasmine-1.2.0\/jasmine.js289_\" + __coltScope, _colt11c)\n                        }\n                        return _colt11c.apply(this, arguments)\n            }, jasmine.WaitsForBlock.TIMEOUT_INCREMENT);\n  }\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[288]: function(onComplete) execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[288]: function(onComplete)\");\n                    }\n                })")
LiveCodeRegistry.getInstance().putMethod("spec/lib/jasmine-1.2.0/jasmine.js289", "(function() {\n  \n                    var __coltScope = LiveCodeRegistry.getInstance().getScope();\n                    LiveCodingCodeFlowUtil.checkRecursion(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[289]: function()\"); try {\n                  self.execute(onComplete);\n  \n                    } catch (e) {\n                        LogUtil.log(\"error\", \"\", \"\", \"spec\/lib\/jasmine-1.2.0\/jasmine.js\", \"live method spec\/lib\/jasmine-1.2.0\/jasmine.js[289]: function() execute error: \" + e.message, e);\n                    } finally {\n                        LiveCodingCodeFlowUtil.checkRecursion2(\"spec\/lib\/jasmine-1.2.0\/jasmine.js[289]: function()\");\n                    }\n                })")

LiveCodeRegistry.getInstance().setInspectables([],"spec/lib/jasmine-1.2.0/jasmine.js");
LiveCodeRegistry.getInstance().setLastLoadedPackage(0,"spec/lib/jasmine-1.2.0/jasmine.js");
var isCommonJS = typeof window == "undefined";
var jasmine = {};
if (isCommonJS) 
exports.jasmine = jasmine;
jasmine.unimplementedMethod_ = function() {
  
                        var _colt25 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js0_" + __coltScope)
                        if (_colt25 == null) {
                            try {
                                _colt25 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js0"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[0]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js0_" + __coltScope, _colt25)
                        }
                        return _colt25.apply(this, arguments)
            };
jasmine.undefined = jasmine.___undefined___;
jasmine.VERBOSE = false;
jasmine.DEFAULT_UPDATE_INTERVAL = 250;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
jasmine.getGlobal = function() {
  
                        var _colt26 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js1_" + __coltScope)
                        if (_colt26 == null) {
                            try {
                                _colt26 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js1"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[1]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js1_" + __coltScope, _colt26)
                        }
                        return _colt26.apply(this, arguments)
            };
jasmine.bindOriginal_ = function(base, name) {
  
                        var _colt28 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js6_" + __coltScope)
                        if (_colt28 == null) {
                            try {
                                _colt28 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js6"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[6]: function(base, name) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js6_" + __coltScope, _colt28)
                        }
                        return _colt28.apply(this, arguments)
            };
jasmine.setTimeout = jasmine.bindOriginal_(jasmine.getGlobal(), 'setTimeout');
jasmine.clearTimeout = jasmine.bindOriginal_(jasmine.getGlobal(), 'clearTimeout');
jasmine.setInterval = jasmine.bindOriginal_(jasmine.getGlobal(), 'setInterval');
jasmine.clearInterval = jasmine.bindOriginal_(jasmine.getGlobal(), 'clearInterval');
jasmine.MessageResult = function(values) {
  
                        var _colt2a = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js8_" + __coltScope)
                        if (_colt2a == null) {
                            try {
                                _colt2a = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js8"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[8]: function(values) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js8_" + __coltScope, _colt2a)
                        }
                        return _colt2a.apply(this, arguments)
            };
jasmine.MessageResult.prototype.toString = function() {
  
                        var _colt2b = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js9_" + __coltScope)
                        if (_colt2b == null) {
                            try {
                                _colt2b = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js9"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[9]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js9_" + __coltScope, _colt2b)
                        }
                        return _colt2b.apply(this, arguments)
            };
jasmine.ExpectationResult = function(params) {
  
                        var _colt2c = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js10_" + __coltScope)
                        if (_colt2c == null) {
                            try {
                                _colt2c = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js10"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[10]: function(params) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js10_" + __coltScope, _colt2c)
                        }
                        return _colt2c.apply(this, arguments)
            };
jasmine.ExpectationResult.prototype.toString = function() {
  
                        var _colt2d = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js11_" + __coltScope)
                        if (_colt2d == null) {
                            try {
                                _colt2d = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js11"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[11]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js11_" + __coltScope, _colt2d)
                        }
                        return _colt2d.apply(this, arguments)
            };
jasmine.ExpectationResult.prototype.passed = function() {
  
                        var _colt2e = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js12_" + __coltScope)
                        if (_colt2e == null) {
                            try {
                                _colt2e = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js12"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[12]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js12_" + __coltScope, _colt2e)
                        }
                        return _colt2e.apply(this, arguments)
            };
jasmine.getEnv = function() {
  
                        var _colt2f = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js13_" + __coltScope)
                        if (_colt2f == null) {
                            try {
                                _colt2f = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js13"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[13]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js13_" + __coltScope, _colt2f)
                        }
                        return _colt2f.apply(this, arguments)
            };
jasmine.isArray_ = function(value) {
  
                        var _colt30 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js14_" + __coltScope)
                        if (_colt30 == null) {
                            try {
                                _colt30 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js14"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[14]: function(value) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js14_" + __coltScope, _colt30)
                        }
                        return _colt30.apply(this, arguments)
            };
jasmine.isString_ = function(value) {
  
                        var _colt31 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js15_" + __coltScope)
                        if (_colt31 == null) {
                            try {
                                _colt31 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js15"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[15]: function(value) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js15_" + __coltScope, _colt31)
                        }
                        return _colt31.apply(this, arguments)
            };
jasmine.isNumber_ = function(value) {
  
                        var _colt32 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js16_" + __coltScope)
                        if (_colt32 == null) {
                            try {
                                _colt32 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js16"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[16]: function(value) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js16_" + __coltScope, _colt32)
                        }
                        return _colt32.apply(this, arguments)
            };
jasmine.isA_ = function(typeName, value) {
  
                        var _colt33 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js17_" + __coltScope)
                        if (_colt33 == null) {
                            try {
                                _colt33 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js17"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[17]: function(typeName, value) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js17_" + __coltScope, _colt33)
                        }
                        return _colt33.apply(this, arguments)
            };
jasmine.pp = function(value) {
  
                        var _colt34 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js18_" + __coltScope)
                        if (_colt34 == null) {
                            try {
                                _colt34 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js18"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[18]: function(value) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js18_" + __coltScope, _colt34)
                        }
                        return _colt34.apply(this, arguments)
            };
jasmine.isDomNode = function(obj) {
  
                        var _colt35 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js19_" + __coltScope)
                        if (_colt35 == null) {
                            try {
                                _colt35 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js19"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[19]: function(obj) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js19_" + __coltScope, _colt35)
                        }
                        return _colt35.apply(this, arguments)
            };
jasmine.any = function(clazz) {
  
                        var _colt36 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js22_" + __coltScope)
                        if (_colt36 == null) {
                            try {
                                _colt36 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js22"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[22]: function(clazz) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js22_" + __coltScope, _colt36)
                        }
                        return _colt36.apply(this, arguments)
            };
jasmine.objectContaining = function(sample) {
  
                        var _colt37 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js23_" + __coltScope)
                        if (_colt37 == null) {
                            try {
                                _colt37 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js23"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[23]: function(sample) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js23_" + __coltScope, _colt37)
                        }
                        return _colt37.apply(this, arguments)
            };
jasmine.Spy = function(name) {
  
                        var _colt38 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js27_" + __coltScope)
                        if (_colt38 == null) {
                            try {
                                _colt38 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js27"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[27]: function(name) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js27_" + __coltScope, _colt38)
                        }
                        return _colt38.apply(this, arguments)
            };
jasmine.Spy.prototype.andCallThrough = function() {
  
                        var _colt3a = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js31_" + __coltScope)
                        if (_colt3a == null) {
                            try {
                                _colt3a = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js31"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[31]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js31_" + __coltScope, _colt3a)
                        }
                        return _colt3a.apply(this, arguments)
            };
jasmine.Spy.prototype.andReturn = function(value) {
  
                        var _colt3b = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js32_" + __coltScope)
                        if (_colt3b == null) {
                            try {
                                _colt3b = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js32"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[32]: function(value) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js32_" + __coltScope, _colt3b)
                        }
                        return _colt3b.apply(this, arguments)
            };
jasmine.Spy.prototype.andThrow = function(exceptionMsg) {
  
                        var _colt3d = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js34_" + __coltScope)
                        if (_colt3d == null) {
                            try {
                                _colt3d = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js34"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[34]: function(exceptionMsg) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js34_" + __coltScope, _colt3d)
                        }
                        return _colt3d.apply(this, arguments)
            };
jasmine.Spy.prototype.andCallFake = function(fakeFunc) {
  
                        var _colt3f = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js40_" + __coltScope)
                        if (_colt3f == null) {
                            try {
                                _colt3f = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js40"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[40]: function(fakeFunc) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js40_" + __coltScope, _colt3f)
                        }
                        return _colt3f.apply(this, arguments)
            };
jasmine.Spy.prototype.reset = function() {
  
                        var _colt40 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js41_" + __coltScope)
                        if (_colt40 == null) {
                            try {
                                _colt40 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js41"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[41]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js41_" + __coltScope, _colt40)
                        }
                        return _colt40.apply(this, arguments)
            };
jasmine.createSpy = function(name) {
  
                        var _colt41 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js42_" + __coltScope)
                        if (_colt41 == null) {
                            try {
                                _colt41 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js42"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[42]: function(name) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js42_" + __coltScope, _colt41)
                        }
                        return _colt41.apply(this, arguments)
            };
jasmine.isSpy = function(putativeSpy) {
  
                        var _colt43 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js44_" + __coltScope)
                        if (_colt43 == null) {
                            try {
                                _colt43 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js44"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[44]: function(putativeSpy) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js44_" + __coltScope, _colt43)
                        }
                        return _colt43.apply(this, arguments)
            };
jasmine.createSpyObj = function(baseName, methodNames) {
  
                        var _colt44 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js46_" + __coltScope)
                        if (_colt44 == null) {
                            try {
                                _colt44 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js46"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[46]: function(baseName, methodNames) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js46_" + __coltScope, _colt44)
                        }
                        return _colt44.apply(this, arguments)
            };
jasmine.log = function() {
  
                        var _colt45 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js47_" + __coltScope)
                        if (_colt45 == null) {
                            try {
                                _colt45 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js47"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[47]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js47_" + __coltScope, _colt45)
                        }
                        return _colt45.apply(this, arguments)
            };
var spyOn = function(obj, methodName) {
  
                        var _colt46 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js49_" + __coltScope)
                        if (_colt46 == null) {
                            try {
                                _colt46 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js49"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[49]: function(obj, methodName) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js49_" + __coltScope, _colt46)
                        }
                        return _colt46.apply(this, arguments)
            };
if (isCommonJS) 
exports.spyOn = spyOn;
var it = function(desc, func) {
  
                        var _colt47 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js51_" + __coltScope)
                        if (_colt47 == null) {
                            try {
                                _colt47 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js51"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[51]: function(desc, func) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js51_" + __coltScope, _colt47)
                        }
                        return _colt47.apply(this, arguments)
            };
if (isCommonJS) 
exports.it = it;
var xit = function(desc, func) {
  
                        var _colt48 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js52_" + __coltScope)
                        if (_colt48 == null) {
                            try {
                                _colt48 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js52"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[52]: function(desc, func) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js52_" + __coltScope, _colt48)
                        }
                        return _colt48.apply(this, arguments)
            };
if (isCommonJS) 
exports.xit = xit;
var expect = function(actual) {
  
                        var _colt49 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js54_" + __coltScope)
                        if (_colt49 == null) {
                            try {
                                _colt49 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js54"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[54]: function(actual) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js54_" + __coltScope, _colt49)
                        }
                        return _colt49.apply(this, arguments)
            };
if (isCommonJS) 
exports.expect = expect;
var runs = function(func) {
  
                        var _colt4a = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js55_" + __coltScope)
                        if (_colt4a == null) {
                            try {
                                _colt4a = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js55"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[55]: function(func) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js55_" + __coltScope, _colt4a)
                        }
                        return _colt4a.apply(this, arguments)
            };
if (isCommonJS) 
exports.runs = runs;
var waits = function(timeout) {
  
                        var _colt4b = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js56_" + __coltScope)
                        if (_colt4b == null) {
                            try {
                                _colt4b = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js56"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[56]: function(timeout) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js56_" + __coltScope, _colt4b)
                        }
                        return _colt4b.apply(this, arguments)
            };
if (isCommonJS) 
exports.waits = waits;
var waitsFor = function(latchFunction, optional_timeoutMessage, optional_timeout) {
  
                        var _colt4c = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js57_" + __coltScope)
                        if (_colt4c == null) {
                            try {
                                _colt4c = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js57"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[57]: function(latchFunction, optional_timeoutMessage, optional_timeout) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js57_" + __coltScope, _colt4c)
                        }
                        return _colt4c.apply(this, arguments)
            };
if (isCommonJS) 
exports.waitsFor = waitsFor;
var beforeEach = function(beforeEachFunction) {
  
                        var _colt4d = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js59_" + __coltScope)
                        if (_colt4d == null) {
                            try {
                                _colt4d = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js59"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[59]: function(beforeEachFunction) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js59_" + __coltScope, _colt4d)
                        }
                        return _colt4d.apply(this, arguments)
            };
if (isCommonJS) 
exports.beforeEach = beforeEach;
var afterEach = function(afterEachFunction) {
  
                        var _colt4e = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js61_" + __coltScope)
                        if (_colt4e == null) {
                            try {
                                _colt4e = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js61"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[61]: function(afterEachFunction) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js61_" + __coltScope, _colt4e)
                        }
                        return _colt4e.apply(this, arguments)
            };
if (isCommonJS) 
exports.afterEach = afterEach;
var describe = function(description, specDefinitions) {
  
                        var _colt4f = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js63_" + __coltScope)
                        if (_colt4f == null) {
                            try {
                                _colt4f = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js63"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[63]: function(description, specDefinitions) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js63_" + __coltScope, _colt4f)
                        }
                        return _colt4f.apply(this, arguments)
            };
if (isCommonJS) 
exports.describe = describe;
var xdescribe = function(description, specDefinitions) {
  
                        var _colt50 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js65_" + __coltScope)
                        if (_colt50 == null) {
                            try {
                                _colt50 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js65"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[65]: function(description, specDefinitions) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js65_" + __coltScope, _colt50)
                        }
                        return _colt50.apply(this, arguments)
            };
if (isCommonJS) 
exports.xdescribe = xdescribe;
jasmine.XmlHttpRequest = (typeof XMLHttpRequest == "undefined") ? function() {
  
                        var _colt51 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js66_" + __coltScope)
                        if (_colt51 == null) {
                            try {
                                _colt51 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js66"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[66]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js66_" + __coltScope, _colt51)
                        }
                        return _colt51.apply(this, arguments)
            } : XMLHttpRequest;
jasmine.util = {};
jasmine.util.inherit = function(childClass, parentClass) {
  
                        var _colt57 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js72_" + __coltScope)
                        if (_colt57 == null) {
                            try {
                                _colt57 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js72"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[72]: function(childClass, parentClass) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js72_" + __coltScope, _colt57)
                        }
                        return _colt57.apply(this, arguments)
            };
jasmine.util.formatException = function(e) {
  
                        var _colt59 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js74_" + __coltScope)
                        if (_colt59 == null) {
                            try {
                                _colt59 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js74"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[74]: function(e) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js74_" + __coltScope, _colt59)
                        }
                        return _colt59.apply(this, arguments)
            };
jasmine.util.htmlEscape = function(str) {
  
                        var _colt5a = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js75_" + __coltScope)
                        if (_colt5a == null) {
                            try {
                                _colt5a = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js75"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[75]: function(str) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js75_" + __coltScope, _colt5a)
                        }
                        return _colt5a.apply(this, arguments)
            };
jasmine.util.argsToArray = function(args) {
  
                        var _colt5b = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js76_" + __coltScope)
                        if (_colt5b == null) {
                            try {
                                _colt5b = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js76"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[76]: function(args) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js76_" + __coltScope, _colt5b)
                        }
                        return _colt5b.apply(this, arguments)
            };
jasmine.util.extend = function(destination, source) {
  
                        var _colt5c = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js77_" + __coltScope)
                        if (_colt5c == null) {
                            try {
                                _colt5c = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js77"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[77]: function(destination, source) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js77_" + __coltScope, _colt5c)
                        }
                        return _colt5c.apply(this, arguments)
            };
jasmine.Env = function() {
  
                        var _colt5d = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js78_" + __coltScope)
                        if (_colt5d == null) {
                            try {
                                _colt5d = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js78"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[78]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js78_" + __coltScope, _colt5d)
                        }
                        return _colt5d.apply(this, arguments)
            };
jasmine.Env.prototype.setTimeout = jasmine.setTimeout;
jasmine.Env.prototype.clearTimeout = jasmine.clearTimeout;
jasmine.Env.prototype.setInterval = jasmine.setInterval;
jasmine.Env.prototype.clearInterval = jasmine.clearInterval;
jasmine.Env.prototype.version = function() {
  
                        var _colt60 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js81_" + __coltScope)
                        if (_colt60 == null) {
                            try {
                                _colt60 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js81"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[81]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js81_" + __coltScope, _colt60)
                        }
                        return _colt60.apply(this, arguments)
            };
jasmine.Env.prototype.versionString = function() {
  
                        var _colt61 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js82_" + __coltScope)
                        if (_colt61 == null) {
                            try {
                                _colt61 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js82"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[82]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js82_" + __coltScope, _colt61)
                        }
                        return _colt61.apply(this, arguments)
            };
jasmine.Env.prototype.nextSpecId = function() {
  
                        var _colt62 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js83_" + __coltScope)
                        if (_colt62 == null) {
                            try {
                                _colt62 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js83"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[83]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js83_" + __coltScope, _colt62)
                        }
                        return _colt62.apply(this, arguments)
            };
jasmine.Env.prototype.nextSuiteId = function() {
  
                        var _colt63 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js84_" + __coltScope)
                        if (_colt63 == null) {
                            try {
                                _colt63 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js84"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[84]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js84_" + __coltScope, _colt63)
                        }
                        return _colt63.apply(this, arguments)
            };
jasmine.Env.prototype.addReporter = function(reporter) {
  
                        var _colt64 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js85_" + __coltScope)
                        if (_colt64 == null) {
                            try {
                                _colt64 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js85"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[85]: function(reporter) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js85_" + __coltScope, _colt64)
                        }
                        return _colt64.apply(this, arguments)
            };
jasmine.Env.prototype.execute = function() {
  
                        var _colt65 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js86_" + __coltScope)
                        if (_colt65 == null) {
                            try {
                                _colt65 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js86"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[86]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js86_" + __coltScope, _colt65)
                        }
                        return _colt65.apply(this, arguments)
            };
jasmine.Env.prototype.describe = function(description, specDefinitions) {
  
                        var _colt66 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js87_" + __coltScope)
                        if (_colt66 == null) {
                            try {
                                _colt66 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js87"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[87]: function(description, specDefinitions) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js87_" + __coltScope, _colt66)
                        }
                        return _colt66.apply(this, arguments)
            };
jasmine.Env.prototype.beforeEach = function(beforeEachFunction) {
  
                        var _colt68 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js89_" + __coltScope)
                        if (_colt68 == null) {
                            try {
                                _colt68 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js89"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[89]: function(beforeEachFunction) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js89_" + __coltScope, _colt68)
                        }
                        return _colt68.apply(this, arguments)
            };
jasmine.Env.prototype.currentRunner = function() {
  
                        var _colt69 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js90_" + __coltScope)
                        if (_colt69 == null) {
                            try {
                                _colt69 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js90"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[90]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js90_" + __coltScope, _colt69)
                        }
                        return _colt69.apply(this, arguments)
            };
jasmine.Env.prototype.afterEach = function(afterEachFunction) {
  
                        var _colt6a = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js91_" + __coltScope)
                        if (_colt6a == null) {
                            try {
                                _colt6a = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js91"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[91]: function(afterEachFunction) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js91_" + __coltScope, _colt6a)
                        }
                        return _colt6a.apply(this, arguments)
            };
jasmine.Env.prototype.xdescribe = function(desc, specDefinitions) {
  
                        var _colt6b = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js92_" + __coltScope)
                        if (_colt6b == null) {
                            try {
                                _colt6b = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js92"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[92]: function(desc, specDefinitions) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js92_" + __coltScope, _colt6b)
                        }
                        return _colt6b.apply(this, arguments)
            };
jasmine.Env.prototype.it = function(description, func) {
  
                        var _colt6d = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js94_" + __coltScope)
                        if (_colt6d == null) {
                            try {
                                _colt6d = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js94"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[94]: function(description, func) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js94_" + __coltScope, _colt6d)
                        }
                        return _colt6d.apply(this, arguments)
            };
jasmine.Env.prototype.xit = function(desc, func) {
  
                        var _colt6e = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js95_" + __coltScope)
                        if (_colt6e == null) {
                            try {
                                _colt6e = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js95"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[95]: function(desc, func) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js95_" + __coltScope, _colt6e)
                        }
                        return _colt6e.apply(this, arguments)
            };
jasmine.Env.prototype.compareObjects_ = function(a, b, mismatchKeys, mismatchValues) {
  
                        var _colt70 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js97_" + __coltScope)
                        if (_colt70 == null) {
                            try {
                                _colt70 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js97"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[97]: function(a, b, mismatchKeys, mismatchValues) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js97_" + __coltScope, _colt70)
                        }
                        return _colt70.apply(this, arguments)
            };
jasmine.Env.prototype.equals_ = function(a, b, mismatchKeys, mismatchValues) {
  
                        var _colt72 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js99_" + __coltScope)
                        if (_colt72 == null) {
                            try {
                                _colt72 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js99"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[99]: function(a, b, mismatchKeys, mismatchValues) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js99_" + __coltScope, _colt72)
                        }
                        return _colt72.apply(this, arguments)
            };
jasmine.Env.prototype.contains_ = function(haystack, needle) {
  
                        var _colt73 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js100_" + __coltScope)
                        if (_colt73 == null) {
                            try {
                                _colt73 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js100"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[100]: function(haystack, needle) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js100_" + __coltScope, _colt73)
                        }
                        return _colt73.apply(this, arguments)
            };
jasmine.Env.prototype.addEqualityTester = function(equalityTester) {
  
                        var _colt74 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js101_" + __coltScope)
                        if (_colt74 == null) {
                            try {
                                _colt74 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js101"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[101]: function(equalityTester) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js101_" + __coltScope, _colt74)
                        }
                        return _colt74.apply(this, arguments)
            };
jasmine.Reporter = function() {
  
                        var _colt75 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js102_" + __coltScope)
                        if (_colt75 == null) {
                            try {
                                _colt75 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js102"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[102]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js102_" + __coltScope, _colt75)
                        }
                        return _colt75.apply(this, arguments)
            };
jasmine.Reporter.prototype.reportRunnerStarting = function(runner) {
  
                        var _colt76 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js103_" + __coltScope)
                        if (_colt76 == null) {
                            try {
                                _colt76 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js103"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[103]: function(runner) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js103_" + __coltScope, _colt76)
                        }
                        return _colt76.apply(this, arguments)
            };
jasmine.Reporter.prototype.reportRunnerResults = function(runner) {
  
                        var _colt77 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js104_" + __coltScope)
                        if (_colt77 == null) {
                            try {
                                _colt77 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js104"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[104]: function(runner) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js104_" + __coltScope, _colt77)
                        }
                        return _colt77.apply(this, arguments)
            };
jasmine.Reporter.prototype.reportSuiteResults = function(suite) {
  
                        var _colt78 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js105_" + __coltScope)
                        if (_colt78 == null) {
                            try {
                                _colt78 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js105"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[105]: function(suite) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js105_" + __coltScope, _colt78)
                        }
                        return _colt78.apply(this, arguments)
            };
jasmine.Reporter.prototype.reportSpecStarting = function(spec) {
  
                        var _colt79 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js106_" + __coltScope)
                        if (_colt79 == null) {
                            try {
                                _colt79 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js106"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[106]: function(spec) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js106_" + __coltScope, _colt79)
                        }
                        return _colt79.apply(this, arguments)
            };
jasmine.Reporter.prototype.reportSpecResults = function(spec) {
  
                        var _colt7a = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js107_" + __coltScope)
                        if (_colt7a == null) {
                            try {
                                _colt7a = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js107"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[107]: function(spec) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js107_" + __coltScope, _colt7a)
                        }
                        return _colt7a.apply(this, arguments)
            };
jasmine.Reporter.prototype.log = function(str) {
  
                        var _colt7b = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js108_" + __coltScope)
                        if (_colt7b == null) {
                            try {
                                _colt7b = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js108"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[108]: function(str) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js108_" + __coltScope, _colt7b)
                        }
                        return _colt7b.apply(this, arguments)
            };
jasmine.Block = function(env, func, spec) {
  
                        var _colt7c = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js110_" + __coltScope)
                        if (_colt7c == null) {
                            try {
                                _colt7c = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js110"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[110]: function(env, func, spec) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js110_" + __coltScope, _colt7c)
                        }
                        return _colt7c.apply(this, arguments)
            };
jasmine.Block.prototype.execute = function(onComplete) {
  
                        var _colt7d = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js111_" + __coltScope)
                        if (_colt7d == null) {
                            try {
                                _colt7d = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js111"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[111]: function(onComplete) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js111_" + __coltScope, _colt7d)
                        }
                        return _colt7d.apply(this, arguments)
            };
jasmine.JsApiReporter = function() {
  
                        var _colt7e = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js112_" + __coltScope)
                        if (_colt7e == null) {
                            try {
                                _colt7e = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js112"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[112]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js112_" + __coltScope, _colt7e)
                        }
                        return _colt7e.apply(this, arguments)
            };
jasmine.JsApiReporter.prototype.reportRunnerStarting = function(runner) {
  
                        var _colt7f = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js113_" + __coltScope)
                        if (_colt7f == null) {
                            try {
                                _colt7f = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js113"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[113]: function(runner) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js113_" + __coltScope, _colt7f)
                        }
                        return _colt7f.apply(this, arguments)
            };
jasmine.JsApiReporter.prototype.suites = function() {
  
                        var _colt80 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js114_" + __coltScope)
                        if (_colt80 == null) {
                            try {
                                _colt80 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js114"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[114]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js114_" + __coltScope, _colt80)
                        }
                        return _colt80.apply(this, arguments)
            };
jasmine.JsApiReporter.prototype.summarize_ = function(suiteOrSpec) {
  
                        var _colt81 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js115_" + __coltScope)
                        if (_colt81 == null) {
                            try {
                                _colt81 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js115"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[115]: function(suiteOrSpec) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js115_" + __coltScope, _colt81)
                        }
                        return _colt81.apply(this, arguments)
            };
jasmine.JsApiReporter.prototype.results = function() {
  
                        var _colt82 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js116_" + __coltScope)
                        if (_colt82 == null) {
                            try {
                                _colt82 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js116"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[116]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js116_" + __coltScope, _colt82)
                        }
                        return _colt82.apply(this, arguments)
            };
jasmine.JsApiReporter.prototype.resultsForSpec = function(specId) {
  
                        var _colt83 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js117_" + __coltScope)
                        if (_colt83 == null) {
                            try {
                                _colt83 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js117"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[117]: function(specId) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js117_" + __coltScope, _colt83)
                        }
                        return _colt83.apply(this, arguments)
            };
jasmine.JsApiReporter.prototype.reportRunnerResults = function(runner) {
  
                        var _colt84 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js118_" + __coltScope)
                        if (_colt84 == null) {
                            try {
                                _colt84 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js118"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[118]: function(runner) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js118_" + __coltScope, _colt84)
                        }
                        return _colt84.apply(this, arguments)
            };
jasmine.JsApiReporter.prototype.reportSuiteResults = function(suite) {
  
                        var _colt85 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js119_" + __coltScope)
                        if (_colt85 == null) {
                            try {
                                _colt85 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js119"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[119]: function(suite) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js119_" + __coltScope, _colt85)
                        }
                        return _colt85.apply(this, arguments)
            };
jasmine.JsApiReporter.prototype.reportSpecResults = function(spec) {
  
                        var _colt86 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js120_" + __coltScope)
                        if (_colt86 == null) {
                            try {
                                _colt86 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js120"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[120]: function(spec) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js120_" + __coltScope, _colt86)
                        }
                        return _colt86.apply(this, arguments)
            };
jasmine.JsApiReporter.prototype.log = function(str) {
  
                        var _colt87 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js121_" + __coltScope)
                        if (_colt87 == null) {
                            try {
                                _colt87 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js121"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[121]: function(str) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js121_" + __coltScope, _colt87)
                        }
                        return _colt87.apply(this, arguments)
            };
jasmine.JsApiReporter.prototype.resultsForSpecs = function(specIds) {
  
                        var _colt88 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js122_" + __coltScope)
                        if (_colt88 == null) {
                            try {
                                _colt88 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js122"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[122]: function(specIds) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js122_" + __coltScope, _colt88)
                        }
                        return _colt88.apply(this, arguments)
            };
jasmine.JsApiReporter.prototype.summarizeResult_ = function(result) {
  
                        var _colt89 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js123_" + __coltScope)
                        if (_colt89 == null) {
                            try {
                                _colt89 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js123"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[123]: function(result) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js123_" + __coltScope, _colt89)
                        }
                        return _colt89.apply(this, arguments)
            };
jasmine.Matchers = function(env, actual, spec, opt_isNot) {
  
                        var _colt8a = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js124_" + __coltScope)
                        if (_colt8a == null) {
                            try {
                                _colt8a = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js124"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[124]: function(env, actual, spec, opt_isNot) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js124_" + __coltScope, _colt8a)
                        }
                        return _colt8a.apply(this, arguments)
            };
jasmine.Matchers.pp = function(str) {
  
                        var _colt8b = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js125_" + __coltScope)
                        if (_colt8b == null) {
                            try {
                                _colt8b = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js125"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[125]: function(str) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js125_" + __coltScope, _colt8b)
                        }
                        return _colt8b.apply(this, arguments)
            };
jasmine.Matchers.prototype.report = function(result, failing_message, details) {
  
                        var _colt8c = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js126_" + __coltScope)
                        if (_colt8c == null) {
                            try {
                                _colt8c = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js126"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[126]: function(result, failing_message, details) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js126_" + __coltScope, _colt8c)
                        }
                        return _colt8c.apply(this, arguments)
            };
jasmine.Matchers.wrapInto_ = function(prototype, matchersClass) {
  
                        var _colt8d = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js127_" + __coltScope)
                        if (_colt8d == null) {
                            try {
                                _colt8d = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js127"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[127]: function(prototype, matchersClass) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js127_" + __coltScope, _colt8d)
                        }
                        return _colt8d.apply(this, arguments)
            };
jasmine.Matchers.matcherFn_ = function(matcherName, matcherFunction) {
  
                        var _colt8e = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js128_" + __coltScope)
                        if (_colt8e == null) {
                            try {
                                _colt8e = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js128"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[128]: function(matcherName, matcherFunction) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js128_" + __coltScope, _colt8e)
                        }
                        return _colt8e.apply(this, arguments)
            };
jasmine.Matchers.prototype.toBe = function(expected) {
  
                        var _colt91 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js131_" + __coltScope)
                        if (_colt91 == null) {
                            try {
                                _colt91 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js131"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[131]: function(expected) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js131_" + __coltScope, _colt91)
                        }
                        return _colt91.apply(this, arguments)
            };
jasmine.Matchers.prototype.toNotBe = function(expected) {
  
                        var _colt92 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js132_" + __coltScope)
                        if (_colt92 == null) {
                            try {
                                _colt92 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js132"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[132]: function(expected) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js132_" + __coltScope, _colt92)
                        }
                        return _colt92.apply(this, arguments)
            };
jasmine.Matchers.prototype.toEqual = function(expected) {
  
                        var _colt93 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js133_" + __coltScope)
                        if (_colt93 == null) {
                            try {
                                _colt93 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js133"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[133]: function(expected) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js133_" + __coltScope, _colt93)
                        }
                        return _colt93.apply(this, arguments)
            };
jasmine.Matchers.prototype.toNotEqual = function(expected) {
  
                        var _colt94 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js134_" + __coltScope)
                        if (_colt94 == null) {
                            try {
                                _colt94 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js134"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[134]: function(expected) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js134_" + __coltScope, _colt94)
                        }
                        return _colt94.apply(this, arguments)
            };
jasmine.Matchers.prototype.toMatch = function(expected) {
  
                        var _colt95 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js135_" + __coltScope)
                        if (_colt95 == null) {
                            try {
                                _colt95 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js135"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[135]: function(expected) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js135_" + __coltScope, _colt95)
                        }
                        return _colt95.apply(this, arguments)
            };
jasmine.Matchers.prototype.toNotMatch = function(expected) {
  
                        var _colt96 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js136_" + __coltScope)
                        if (_colt96 == null) {
                            try {
                                _colt96 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js136"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[136]: function(expected) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js136_" + __coltScope, _colt96)
                        }
                        return _colt96.apply(this, arguments)
            };
jasmine.Matchers.prototype.toBeDefined = function() {
  
                        var _colt97 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js137_" + __coltScope)
                        if (_colt97 == null) {
                            try {
                                _colt97 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js137"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[137]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js137_" + __coltScope, _colt97)
                        }
                        return _colt97.apply(this, arguments)
            };
jasmine.Matchers.prototype.toBeUndefined = function() {
  
                        var _colt98 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js138_" + __coltScope)
                        if (_colt98 == null) {
                            try {
                                _colt98 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js138"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[138]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js138_" + __coltScope, _colt98)
                        }
                        return _colt98.apply(this, arguments)
            };
jasmine.Matchers.prototype.toBeNull = function() {
  
                        var _colt99 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js139_" + __coltScope)
                        if (_colt99 == null) {
                            try {
                                _colt99 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js139"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[139]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js139_" + __coltScope, _colt99)
                        }
                        return _colt99.apply(this, arguments)
            };
jasmine.Matchers.prototype.toBeTruthy = function() {
  
                        var _colt9a = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js140_" + __coltScope)
                        if (_colt9a == null) {
                            try {
                                _colt9a = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js140"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[140]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js140_" + __coltScope, _colt9a)
                        }
                        return _colt9a.apply(this, arguments)
            };
jasmine.Matchers.prototype.toBeFalsy = function() {
  
                        var _colt9b = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js141_" + __coltScope)
                        if (_colt9b == null) {
                            try {
                                _colt9b = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js141"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[141]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js141_" + __coltScope, _colt9b)
                        }
                        return _colt9b.apply(this, arguments)
            };
jasmine.Matchers.prototype.toHaveBeenCalled = function() {
  
                        var _colt9c = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js142_" + __coltScope)
                        if (_colt9c == null) {
                            try {
                                _colt9c = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js142"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[142]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js142_" + __coltScope, _colt9c)
                        }
                        return _colt9c.apply(this, arguments)
            };
jasmine.Matchers.prototype.wasCalled = jasmine.Matchers.prototype.toHaveBeenCalled;
jasmine.Matchers.prototype.wasNotCalled = function() {
  
                        var _colt9e = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js144_" + __coltScope)
                        if (_colt9e == null) {
                            try {
                                _colt9e = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js144"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[144]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js144_" + __coltScope, _colt9e)
                        }
                        return _colt9e.apply(this, arguments)
            };
jasmine.Matchers.prototype.toHaveBeenCalledWith = function() {
  
                        var _colta0 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js146_" + __coltScope)
                        if (_colta0 == null) {
                            try {
                                _colta0 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js146"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[146]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js146_" + __coltScope, _colta0)
                        }
                        return _colta0.apply(this, arguments)
            };
jasmine.Matchers.prototype.wasCalledWith = jasmine.Matchers.prototype.toHaveBeenCalledWith;
jasmine.Matchers.prototype.wasNotCalledWith = function() {
  
                        var _colta2 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js148_" + __coltScope)
                        if (_colta2 == null) {
                            try {
                                _colta2 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js148"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[148]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js148_" + __coltScope, _colta2)
                        }
                        return _colta2.apply(this, arguments)
            };
jasmine.Matchers.prototype.toContain = function(expected) {
  
                        var _colta4 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js150_" + __coltScope)
                        if (_colta4 == null) {
                            try {
                                _colta4 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js150"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[150]: function(expected) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js150_" + __coltScope, _colta4)
                        }
                        return _colta4.apply(this, arguments)
            };
jasmine.Matchers.prototype.toNotContain = function(expected) {
  
                        var _colta5 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js151_" + __coltScope)
                        if (_colta5 == null) {
                            try {
                                _colta5 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js151"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[151]: function(expected) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js151_" + __coltScope, _colta5)
                        }
                        return _colta5.apply(this, arguments)
            };
jasmine.Matchers.prototype.toBeLessThan = function(expected) {
  
                        var _colta6 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js152_" + __coltScope)
                        if (_colta6 == null) {
                            try {
                                _colta6 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js152"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[152]: function(expected) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js152_" + __coltScope, _colta6)
                        }
                        return _colta6.apply(this, arguments)
            };
jasmine.Matchers.prototype.toBeGreaterThan = function(expected) {
  
                        var _colta7 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js153_" + __coltScope)
                        if (_colta7 == null) {
                            try {
                                _colta7 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js153"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[153]: function(expected) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js153_" + __coltScope, _colta7)
                        }
                        return _colta7.apply(this, arguments)
            };
jasmine.Matchers.prototype.toBeCloseTo = function(expected, precision) {
  
                        var _colta8 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js154_" + __coltScope)
                        if (_colta8 == null) {
                            try {
                                _colta8 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js154"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[154]: function(expected, precision) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js154_" + __coltScope, _colta8)
                        }
                        return _colta8.apply(this, arguments)
            };
jasmine.Matchers.prototype.toThrow = function(expected) {
  
                        var _colta9 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js155_" + __coltScope)
                        if (_colta9 == null) {
                            try {
                                _colta9 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js155"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[155]: function(expected) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js155_" + __coltScope, _colta9)
                        }
                        return _colta9.apply(this, arguments)
            };
jasmine.Matchers.Any = function(expectedClass) {
  
                        var _coltab = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js161_" + __coltScope)
                        if (_coltab == null) {
                            try {
                                _coltab = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js161"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[161]: function(expectedClass) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js161_" + __coltScope, _coltab)
                        }
                        return _coltab.apply(this, arguments)
            };
jasmine.Matchers.Any.prototype.jasmineMatches = function(other) {
  
                        var _coltac = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js162_" + __coltScope)
                        if (_coltac == null) {
                            try {
                                _coltac = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js162"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[162]: function(other) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js162_" + __coltScope, _coltac)
                        }
                        return _coltac.apply(this, arguments)
            };
jasmine.Matchers.Any.prototype.jasmineToString = function() {
  
                        var _coltad = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js164_" + __coltScope)
                        if (_coltad == null) {
                            try {
                                _coltad = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js164"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[164]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js164_" + __coltScope, _coltad)
                        }
                        return _coltad.apply(this, arguments)
            };
jasmine.Matchers.ObjectContaining = function(sample) {
  
                        var _coltae = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js165_" + __coltScope)
                        if (_coltae == null) {
                            try {
                                _coltae = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js165"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[165]: function(sample) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js165_" + __coltScope, _coltae)
                        }
                        return _coltae.apply(this, arguments)
            };
jasmine.Matchers.ObjectContaining.prototype.jasmineMatches = function(other, mismatchKeys, mismatchValues) {
  
                        var _coltaf = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js166_" + __coltScope)
                        if (_coltaf == null) {
                            try {
                                _coltaf = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js166"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[166]: function(other, mismatchKeys, mismatchValues) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js166_" + __coltScope, _coltaf)
                        }
                        return _coltaf.apply(this, arguments)
            };
jasmine.Matchers.ObjectContaining.prototype.jasmineToString = function() {
  
                        var _coltb1 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js168_" + __coltScope)
                        if (_coltb1 == null) {
                            try {
                                _coltb1 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js168"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[168]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js168_" + __coltScope, _coltb1)
                        }
                        return _coltb1.apply(this, arguments)
            };
jasmine.FakeTimer = function() {
  
                        var _coltb2 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js169_" + __coltScope)
                        if (_coltb2 == null) {
                            try {
                                _coltb2 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js169"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[169]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js169_" + __coltScope, _coltb2)
                        }
                        return _coltb2.apply(this, arguments)
            };
jasmine.FakeTimer.prototype.reset = function() {
  
                        var _coltb7 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js174_" + __coltScope)
                        if (_coltb7 == null) {
                            try {
                                _coltb7 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js174"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[174]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js174_" + __coltScope, _coltb7)
                        }
                        return _coltb7.apply(this, arguments)
            };
jasmine.FakeTimer.prototype.tick = function(millis) {
  
                        var _coltb8 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js175_" + __coltScope)
                        if (_coltb8 == null) {
                            try {
                                _coltb8 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js175"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[175]: function(millis) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js175_" + __coltScope, _coltb8)
                        }
                        return _coltb8.apply(this, arguments)
            };
jasmine.FakeTimer.prototype.runFunctionsWithinRange = function(oldMillis, nowMillis) {
  
                        var _coltb9 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js176_" + __coltScope)
                        if (_coltb9 == null) {
                            try {
                                _coltb9 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js176"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[176]: function(oldMillis, nowMillis) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js176_" + __coltScope, _coltb9)
                        }
                        return _coltb9.apply(this, arguments)
            };
jasmine.FakeTimer.prototype.scheduleFunction = function(timeoutKey, funcToCall, millis, recurring) {
  
                        var _coltbb = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js178_" + __coltScope)
                        if (_coltbb == null) {
                            try {
                                _coltbb = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js178"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[178]: function(timeoutKey, funcToCall, millis, recurring) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js178_" + __coltScope, _coltbb)
                        }
                        return _coltbb.apply(this, arguments)
            };
jasmine.Clock = {defaultFakeTimer: new jasmine.FakeTimer(), reset: function() {
  
                        var _coltbc = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js179_" + __coltScope)
                        if (_coltbc == null) {
                            try {
                                _coltbc = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js179"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[179]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js179_" + __coltScope, _coltbc)
                        }
                        return _coltbc.apply(this, arguments)
            }, tick: function(millis) {
  
                        var _coltbd = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js180_" + __coltScope)
                        if (_coltbd == null) {
                            try {
                                _coltbd = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js180"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[180]: function(millis) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js180_" + __coltScope, _coltbd)
                        }
                        return _coltbd.apply(this, arguments)
            }, runFunctionsWithinRange: function(oldMillis, nowMillis) {
  
                        var _coltbe = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js181_" + __coltScope)
                        if (_coltbe == null) {
                            try {
                                _coltbe = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js181"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[181]: function(oldMillis, nowMillis) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js181_" + __coltScope, _coltbe)
                        }
                        return _coltbe.apply(this, arguments)
            }, scheduleFunction: function(timeoutKey, funcToCall, millis, recurring) {
  
                        var _coltbf = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js182_" + __coltScope)
                        if (_coltbf == null) {
                            try {
                                _coltbf = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js182"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[182]: function(timeoutKey, funcToCall, millis, recurring) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js182_" + __coltScope, _coltbf)
                        }
                        return _coltbf.apply(this, arguments)
            }, useMock: function() {
  
                        var _coltc0 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js183_" + __coltScope)
                        if (_coltc0 == null) {
                            try {
                                _coltc0 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js183"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[183]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js183_" + __coltScope, _coltc0)
                        }
                        return _coltc0.apply(this, arguments)
            }, installMock: function() {
  
                        var _coltc1 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js184_" + __coltScope)
                        if (_coltc1 == null) {
                            try {
                                _coltc1 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js184"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[184]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js184_" + __coltScope, _coltc1)
                        }
                        return _coltc1.apply(this, arguments)
            }, uninstallMock: function() {
  
                        var _coltc2 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js185_" + __coltScope)
                        if (_coltc2 == null) {
                            try {
                                _coltc2 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js185"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[185]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js185_" + __coltScope, _coltc2)
                        }
                        return _coltc2.apply(this, arguments)
            }, real: {setTimeout: jasmine.getGlobal().setTimeout, clearTimeout: jasmine.getGlobal().clearTimeout, setInterval: jasmine.getGlobal().setInterval, clearInterval: jasmine.getGlobal().clearInterval}, assertInstalled: function() {
  
                        var _coltc3 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js186_" + __coltScope)
                        if (_coltc3 == null) {
                            try {
                                _coltc3 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js186"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[186]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js186_" + __coltScope, _coltc3)
                        }
                        return _coltc3.apply(this, arguments)
            }, isInstalled: function() {
  
                        var _coltc4 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js187_" + __coltScope)
                        if (_coltc4 == null) {
                            try {
                                _coltc4 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js187"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[187]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js187_" + __coltScope, _coltc4)
                        }
                        return _coltc4.apply(this, arguments)
            }, installed: null};
jasmine.Clock.installed = jasmine.Clock.real;
jasmine.getGlobal().setTimeout = function(funcToCall, millis) {
  
                        var _coltc5 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js188_" + __coltScope)
                        if (_coltc5 == null) {
                            try {
                                _coltc5 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js188"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[188]: function(funcToCall, millis) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js188_" + __coltScope, _coltc5)
                        }
                        return _coltc5.apply(this, arguments)
            };
jasmine.getGlobal().setInterval = function(funcToCall, millis) {
  
                        var _coltc6 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js189_" + __coltScope)
                        if (_coltc6 == null) {
                            try {
                                _coltc6 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js189"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[189]: function(funcToCall, millis) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js189_" + __coltScope, _coltc6)
                        }
                        return _coltc6.apply(this, arguments)
            };
jasmine.getGlobal().clearTimeout = function(timeoutKey) {
  
                        var _coltc7 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js190_" + __coltScope)
                        if (_coltc7 == null) {
                            try {
                                _coltc7 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js190"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[190]: function(timeoutKey) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js190_" + __coltScope, _coltc7)
                        }
                        return _coltc7.apply(this, arguments)
            };
jasmine.getGlobal().clearInterval = function(timeoutKey) {
  
                        var _coltc8 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js191_" + __coltScope)
                        if (_coltc8 == null) {
                            try {
                                _coltc8 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js191"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[191]: function(timeoutKey) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js191_" + __coltScope, _coltc8)
                        }
                        return _coltc8.apply(this, arguments)
            };
jasmine.MultiReporter = function() {
  
                        var _coltc9 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js192_" + __coltScope)
                        if (_coltc9 == null) {
                            try {
                                _coltc9 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js192"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[192]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js192_" + __coltScope, _coltc9)
                        }
                        return _coltc9.apply(this, arguments)
            };
jasmine.util.inherit(jasmine.MultiReporter, jasmine.Reporter);
jasmine.MultiReporter.prototype.addReporter = function(reporter) {
  
                        var _coltca = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js193_" + __coltScope)
                        if (_coltca == null) {
                            try {
                                _coltca = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js193"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[193]: function(reporter) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js193_" + __coltScope, _coltca)
                        }
                        return _coltca.apply(this, arguments)
            };
(function() {
  
                        var _coltcb = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js194_" + __coltScope)
                        if (_coltcb == null) {
                            try {
                                _coltcb = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js194"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[194]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js194_" + __coltScope, _coltcb)
                        }
                        return _coltcb.apply(this, arguments)
            })();
jasmine.NestedResults = function() {
  
                        var _coltce = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js206_" + __coltScope)
                        if (_coltce == null) {
                            try {
                                _coltce = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js206"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[206]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js206_" + __coltScope, _coltce)
                        }
                        return _coltce.apply(this, arguments)
            };
jasmine.NestedResults.prototype.rollupCounts = function(result) {
  
                        var _coltcf = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js207_" + __coltScope)
                        if (_coltcf == null) {
                            try {
                                _coltcf = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js207"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[207]: function(result) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js207_" + __coltScope, _coltcf)
                        }
                        return _coltcf.apply(this, arguments)
            };
jasmine.NestedResults.prototype.log = function(values) {
  
                        var _coltd0 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js208_" + __coltScope)
                        if (_coltd0 == null) {
                            try {
                                _coltd0 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js208"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[208]: function(values) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js208_" + __coltScope, _coltd0)
                        }
                        return _coltd0.apply(this, arguments)
            };
jasmine.NestedResults.prototype.getItems = function() {
  
                        var _coltd1 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js209_" + __coltScope)
                        if (_coltd1 == null) {
                            try {
                                _coltd1 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js209"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[209]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js209_" + __coltScope, _coltd1)
                        }
                        return _coltd1.apply(this, arguments)
            };
jasmine.NestedResults.prototype.addResult = function(result) {
  
                        var _coltd2 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js210_" + __coltScope)
                        if (_coltd2 == null) {
                            try {
                                _coltd2 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js210"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[210]: function(result) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js210_" + __coltScope, _coltd2)
                        }
                        return _coltd2.apply(this, arguments)
            };
jasmine.NestedResults.prototype.passed = function() {
  
                        var _coltd3 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js211_" + __coltScope)
                        if (_coltd3 == null) {
                            try {
                                _coltd3 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js211"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[211]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js211_" + __coltScope, _coltd3)
                        }
                        return _coltd3.apply(this, arguments)
            };
jasmine.PrettyPrinter = function() {
  
                        var _coltd4 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js212_" + __coltScope)
                        if (_coltd4 == null) {
                            try {
                                _coltd4 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js212"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[212]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js212_" + __coltScope, _coltd4)
                        }
                        return _coltd4.apply(this, arguments)
            };
jasmine.PrettyPrinter.prototype.format = function(value) {
  
                        var _coltd5 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js213_" + __coltScope)
                        if (_coltd5 == null) {
                            try {
                                _coltd5 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js213"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[213]: function(value) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js213_" + __coltScope, _coltd5)
                        }
                        return _coltd5.apply(this, arguments)
            };
jasmine.PrettyPrinter.prototype.iterateObject = function(obj, fn) {
  
                        var _coltd6 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js215_" + __coltScope)
                        if (_coltd6 == null) {
                            try {
                                _coltd6 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js215"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[215]: function(obj, fn) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js215_" + __coltScope, _coltd6)
                        }
                        return _coltd6.apply(this, arguments)
            };
jasmine.PrettyPrinter.prototype.emitArray = jasmine.unimplementedMethod_;
jasmine.PrettyPrinter.prototype.emitObject = jasmine.unimplementedMethod_;
jasmine.PrettyPrinter.prototype.emitScalar = jasmine.unimplementedMethod_;
jasmine.PrettyPrinter.prototype.emitString = jasmine.unimplementedMethod_;
jasmine.StringPrettyPrinter = function() {
  
                        var _coltd7 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js216_" + __coltScope)
                        if (_coltd7 == null) {
                            try {
                                _coltd7 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js216"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[216]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js216_" + __coltScope, _coltd7)
                        }
                        return _coltd7.apply(this, arguments)
            };
jasmine.util.inherit(jasmine.StringPrettyPrinter, jasmine.PrettyPrinter);
jasmine.StringPrettyPrinter.prototype.emitScalar = function(value) {
  
                        var _coltd8 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js217_" + __coltScope)
                        if (_coltd8 == null) {
                            try {
                                _coltd8 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js217"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[217]: function(value) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js217_" + __coltScope, _coltd8)
                        }
                        return _coltd8.apply(this, arguments)
            };
jasmine.StringPrettyPrinter.prototype.emitString = function(value) {
  
                        var _coltd9 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js218_" + __coltScope)
                        if (_coltd9 == null) {
                            try {
                                _coltd9 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js218"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[218]: function(value) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js218_" + __coltScope, _coltd9)
                        }
                        return _coltd9.apply(this, arguments)
            };
jasmine.StringPrettyPrinter.prototype.emitArray = function(array) {
  
                        var _coltda = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js219_" + __coltScope)
                        if (_coltda == null) {
                            try {
                                _coltda = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js219"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[219]: function(array) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js219_" + __coltScope, _coltda)
                        }
                        return _coltda.apply(this, arguments)
            };
jasmine.StringPrettyPrinter.prototype.emitObject = function(obj) {
  
                        var _coltdb = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js220_" + __coltScope)
                        if (_coltdb == null) {
                            try {
                                _coltdb = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js220"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[220]: function(obj) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js220_" + __coltScope, _coltdb)
                        }
                        return _coltdb.apply(this, arguments)
            };
jasmine.StringPrettyPrinter.prototype.append = function(value) {
  
                        var _coltdd = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js222_" + __coltScope)
                        if (_coltdd == null) {
                            try {
                                _coltdd = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js222"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[222]: function(value) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js222_" + __coltScope, _coltdd)
                        }
                        return _coltdd.apply(this, arguments)
            };
jasmine.Queue = function(env) {
  
                        var _coltde = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js223_" + __coltScope)
                        if (_coltde == null) {
                            try {
                                _coltde = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js223"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[223]: function(env) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js223_" + __coltScope, _coltde)
                        }
                        return _coltde.apply(this, arguments)
            };
jasmine.Queue.prototype.addBefore = function(block) {
  
                        var _coltdf = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js224_" + __coltScope)
                        if (_coltdf == null) {
                            try {
                                _coltdf = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js224"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[224]: function(block) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js224_" + __coltScope, _coltdf)
                        }
                        return _coltdf.apply(this, arguments)
            };
jasmine.Queue.prototype.add = function(block) {
  
                        var _colte0 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js225_" + __coltScope)
                        if (_colte0 == null) {
                            try {
                                _colte0 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js225"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[225]: function(block) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js225_" + __coltScope, _colte0)
                        }
                        return _colte0.apply(this, arguments)
            };
jasmine.Queue.prototype.insertNext = function(block) {
  
                        var _colte1 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js226_" + __coltScope)
                        if (_colte1 == null) {
                            try {
                                _colte1 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js226"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[226]: function(block) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js226_" + __coltScope, _colte1)
                        }
                        return _colte1.apply(this, arguments)
            };
jasmine.Queue.prototype.start = function(onComplete) {
  
                        var _colte2 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js227_" + __coltScope)
                        if (_colte2 == null) {
                            try {
                                _colte2 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js227"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[227]: function(onComplete) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js227_" + __coltScope, _colte2)
                        }
                        return _colte2.apply(this, arguments)
            };
jasmine.Queue.prototype.isRunning = function() {
  
                        var _colte3 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js228_" + __coltScope)
                        if (_colte3 == null) {
                            try {
                                _colte3 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js228"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[228]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js228_" + __coltScope, _colte3)
                        }
                        return _colte3.apply(this, arguments)
            };
jasmine.Queue.LOOP_DONT_RECURSE = true;
jasmine.Queue.prototype.next_ = function() {
  
                        var _colte4 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js229_" + __coltScope)
                        if (_colte4 == null) {
                            try {
                                _colte4 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js229"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[229]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js229_" + __coltScope, _colte4)
                        }
                        return _colte4.apply(this, arguments)
            };
jasmine.Queue.prototype.results = function() {
  
                        var _colte7 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js232_" + __coltScope)
                        if (_colte7 == null) {
                            try {
                                _colte7 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js232"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[232]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js232_" + __coltScope, _colte7)
                        }
                        return _colte7.apply(this, arguments)
            };
jasmine.Runner = function(env) {
  
                        var _colte8 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js233_" + __coltScope)
                        if (_colte8 == null) {
                            try {
                                _colte8 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js233"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[233]: function(env) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js233_" + __coltScope, _colte8)
                        }
                        return _colte8.apply(this, arguments)
            };
jasmine.Runner.prototype.execute = function() {
  
                        var _colte9 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js234_" + __coltScope)
                        if (_colte9 == null) {
                            try {
                                _colte9 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js234"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[234]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js234_" + __coltScope, _colte9)
                        }
                        return _colte9.apply(this, arguments)
            };
jasmine.Runner.prototype.beforeEach = function(beforeEachFunction) {
  
                        var _colteb = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js236_" + __coltScope)
                        if (_colteb == null) {
                            try {
                                _colteb = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js236"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[236]: function(beforeEachFunction) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js236_" + __coltScope, _colteb)
                        }
                        return _colteb.apply(this, arguments)
            };
jasmine.Runner.prototype.afterEach = function(afterEachFunction) {
  
                        var _coltec = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js237_" + __coltScope)
                        if (_coltec == null) {
                            try {
                                _coltec = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js237"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[237]: function(afterEachFunction) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js237_" + __coltScope, _coltec)
                        }
                        return _coltec.apply(this, arguments)
            };
jasmine.Runner.prototype.finishCallback = function() {
  
                        var _colted = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js238_" + __coltScope)
                        if (_colted == null) {
                            try {
                                _colted = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js238"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[238]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js238_" + __coltScope, _colted)
                        }
                        return _colted.apply(this, arguments)
            };
jasmine.Runner.prototype.addSuite = function(suite) {
  
                        var _coltee = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js239_" + __coltScope)
                        if (_coltee == null) {
                            try {
                                _coltee = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js239"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[239]: function(suite) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js239_" + __coltScope, _coltee)
                        }
                        return _coltee.apply(this, arguments)
            };
jasmine.Runner.prototype.add = function(block) {
  
                        var _coltef = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js240_" + __coltScope)
                        if (_coltef == null) {
                            try {
                                _coltef = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js240"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[240]: function(block) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js240_" + __coltScope, _coltef)
                        }
                        return _coltef.apply(this, arguments)
            };
jasmine.Runner.prototype.specs = function() {
  
                        var _coltf0 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js241_" + __coltScope)
                        if (_coltf0 == null) {
                            try {
                                _coltf0 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js241"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[241]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js241_" + __coltScope, _coltf0)
                        }
                        return _coltf0.apply(this, arguments)
            };
jasmine.Runner.prototype.suites = function() {
  
                        var _coltf1 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js242_" + __coltScope)
                        if (_coltf1 == null) {
                            try {
                                _coltf1 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js242"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[242]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js242_" + __coltScope, _coltf1)
                        }
                        return _coltf1.apply(this, arguments)
            };
jasmine.Runner.prototype.topLevelSuites = function() {
  
                        var _coltf2 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js243_" + __coltScope)
                        if (_coltf2 == null) {
                            try {
                                _coltf2 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js243"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[243]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js243_" + __coltScope, _coltf2)
                        }
                        return _coltf2.apply(this, arguments)
            };
jasmine.Runner.prototype.results = function() {
  
                        var _coltf3 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js244_" + __coltScope)
                        if (_coltf3 == null) {
                            try {
                                _coltf3 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js244"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[244]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js244_" + __coltScope, _coltf3)
                        }
                        return _coltf3.apply(this, arguments)
            };
jasmine.Spec = function(env, suite, description) {
  
                        var _coltf4 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js245_" + __coltScope)
                        if (_coltf4 == null) {
                            try {
                                _coltf4 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js245"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[245]: function(env, suite, description) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js245_" + __coltScope, _coltf4)
                        }
                        return _coltf4.apply(this, arguments)
            };
jasmine.Spec.prototype.getFullName = function() {
  
                        var _coltf5 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js246_" + __coltScope)
                        if (_coltf5 == null) {
                            try {
                                _coltf5 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js246"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[246]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js246_" + __coltScope, _coltf5)
                        }
                        return _coltf5.apply(this, arguments)
            };
jasmine.Spec.prototype.results = function() {
  
                        var _coltf6 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js247_" + __coltScope)
                        if (_coltf6 == null) {
                            try {
                                _coltf6 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js247"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[247]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js247_" + __coltScope, _coltf6)
                        }
                        return _coltf6.apply(this, arguments)
            };
jasmine.Spec.prototype.log = function() {
  
                        var _coltf7 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js248_" + __coltScope)
                        if (_coltf7 == null) {
                            try {
                                _coltf7 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js248"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[248]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js248_" + __coltScope, _coltf7)
                        }
                        return _coltf7.apply(this, arguments)
            };
jasmine.Spec.prototype.runs = function(func) {
  
                        var _coltf8 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js249_" + __coltScope)
                        if (_coltf8 == null) {
                            try {
                                _coltf8 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js249"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[249]: function(func) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js249_" + __coltScope, _coltf8)
                        }
                        return _coltf8.apply(this, arguments)
            };
jasmine.Spec.prototype.addToQueue = function(block) {
  
                        var _coltf9 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js250_" + __coltScope)
                        if (_coltf9 == null) {
                            try {
                                _coltf9 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js250"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[250]: function(block) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js250_" + __coltScope, _coltf9)
                        }
                        return _coltf9.apply(this, arguments)
            };
jasmine.Spec.prototype.addMatcherResult = function(result) {
  
                        var _coltfa = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js251_" + __coltScope)
                        if (_coltfa == null) {
                            try {
                                _coltfa = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js251"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[251]: function(result) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js251_" + __coltScope, _coltfa)
                        }
                        return _coltfa.apply(this, arguments)
            };
jasmine.Spec.prototype.expect = function(actual) {
  
                        var _coltfb = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js252_" + __coltScope)
                        if (_coltfb == null) {
                            try {
                                _coltfb = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js252"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[252]: function(actual) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js252_" + __coltScope, _coltfb)
                        }
                        return _coltfb.apply(this, arguments)
            };
jasmine.Spec.prototype.waits = function(timeout) {
  
                        var _coltfc = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js253_" + __coltScope)
                        if (_coltfc == null) {
                            try {
                                _coltfc = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js253"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[253]: function(timeout) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js253_" + __coltScope, _coltfc)
                        }
                        return _coltfc.apply(this, arguments)
            };
jasmine.Spec.prototype.waitsFor = function(latchFunction, optional_timeoutMessage, optional_timeout) {
  
                        var _coltfd = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js254_" + __coltScope)
                        if (_coltfd == null) {
                            try {
                                _coltfd = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js254"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[254]: function(latchFunction, optional_timeoutMessage, optional_timeout) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js254_" + __coltScope, _coltfd)
                        }
                        return _coltfd.apply(this, arguments)
            };
jasmine.Spec.prototype.fail = function(e) {
  
                        var _coltfe = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js256_" + __coltScope)
                        if (_coltfe == null) {
                            try {
                                _coltfe = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js256"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[256]: function(e) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js256_" + __coltScope, _coltfe)
                        }
                        return _coltfe.apply(this, arguments)
            };
jasmine.Spec.prototype.getMatchersClass_ = function() {
  
                        var _coltff = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js257_" + __coltScope)
                        if (_coltff == null) {
                            try {
                                _coltff = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js257"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[257]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js257_" + __coltScope, _coltff)
                        }
                        return _coltff.apply(this, arguments)
            };
jasmine.Spec.prototype.addMatchers = function(matchersPrototype) {
  
                        var _colt100 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js258_" + __coltScope)
                        if (_colt100 == null) {
                            try {
                                _colt100 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js258"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[258]: function(matchersPrototype) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js258_" + __coltScope, _colt100)
                        }
                        return _colt100.apply(this, arguments)
            };
jasmine.Spec.prototype.finishCallback = function() {
  
                        var _colt102 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js260_" + __coltScope)
                        if (_colt102 == null) {
                            try {
                                _colt102 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js260"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[260]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js260_" + __coltScope, _colt102)
                        }
                        return _colt102.apply(this, arguments)
            };
jasmine.Spec.prototype.finish = function(onComplete) {
  
                        var _colt103 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js261_" + __coltScope)
                        if (_colt103 == null) {
                            try {
                                _colt103 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js261"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[261]: function(onComplete) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js261_" + __coltScope, _colt103)
                        }
                        return _colt103.apply(this, arguments)
            };
jasmine.Spec.prototype.after = function(doAfter) {
  
                        var _colt104 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js262_" + __coltScope)
                        if (_colt104 == null) {
                            try {
                                _colt104 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js262"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[262]: function(doAfter) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js262_" + __coltScope, _colt104)
                        }
                        return _colt104.apply(this, arguments)
            };
jasmine.Spec.prototype.execute = function(onComplete) {
  
                        var _colt105 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js263_" + __coltScope)
                        if (_colt105 == null) {
                            try {
                                _colt105 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js263"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[263]: function(onComplete) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js263_" + __coltScope, _colt105)
                        }
                        return _colt105.apply(this, arguments)
            };
jasmine.Spec.prototype.addBeforesAndAftersToQueue = function() {
  
                        var _colt107 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js265_" + __coltScope)
                        if (_colt107 == null) {
                            try {
                                _colt107 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js265"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[265]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js265_" + __coltScope, _colt107)
                        }
                        return _colt107.apply(this, arguments)
            };
jasmine.Spec.prototype.explodes = function() {
  
                        var _colt108 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js266_" + __coltScope)
                        if (_colt108 == null) {
                            try {
                                _colt108 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js266"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[266]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js266_" + __coltScope, _colt108)
                        }
                        return _colt108.apply(this, arguments)
            };
jasmine.Spec.prototype.spyOn = function(obj, methodName, ignoreMethodDoesntExist) {
  
                        var _colt109 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js268_" + __coltScope)
                        if (_colt109 == null) {
                            try {
                                _colt109 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js268"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[268]: function(obj, methodName, ignoreMethodDoesntExist) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js268_" + __coltScope, _colt109)
                        }
                        return _colt109.apply(this, arguments)
            };
jasmine.Spec.prototype.removeAllSpies = function() {
  
                        var _colt10a = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js269_" + __coltScope)
                        if (_colt10a == null) {
                            try {
                                _colt10a = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js269"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[269]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js269_" + __coltScope, _colt10a)
                        }
                        return _colt10a.apply(this, arguments)
            };
jasmine.Suite = function(env, description, specDefinitions, parentSuite) {
  
                        var _colt10b = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js270_" + __coltScope)
                        if (_colt10b == null) {
                            try {
                                _colt10b = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js270"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[270]: function(env, description, specDefinitions, parentSuite) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js270_" + __coltScope, _colt10b)
                        }
                        return _colt10b.apply(this, arguments)
            };
jasmine.Suite.prototype.getFullName = function() {
  
                        var _colt10c = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js271_" + __coltScope)
                        if (_colt10c == null) {
                            try {
                                _colt10c = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js271"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[271]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js271_" + __coltScope, _colt10c)
                        }
                        return _colt10c.apply(this, arguments)
            };
jasmine.Suite.prototype.finish = function(onComplete) {
  
                        var _colt10d = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js272_" + __coltScope)
                        if (_colt10d == null) {
                            try {
                                _colt10d = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js272"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[272]: function(onComplete) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js272_" + __coltScope, _colt10d)
                        }
                        return _colt10d.apply(this, arguments)
            };
jasmine.Suite.prototype.beforeEach = function(beforeEachFunction) {
  
                        var _colt10e = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js274_" + __coltScope)
                        if (_colt10e == null) {
                            try {
                                _colt10e = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js274"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[274]: function(beforeEachFunction) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js274_" + __coltScope, _colt10e)
                        }
                        return _colt10e.apply(this, arguments)
            };
jasmine.Suite.prototype.afterEach = function(afterEachFunction) {
  
                        var _colt10f = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js275_" + __coltScope)
                        if (_colt10f == null) {
                            try {
                                _colt10f = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js275"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[275]: function(afterEachFunction) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js275_" + __coltScope, _colt10f)
                        }
                        return _colt10f.apply(this, arguments)
            };
jasmine.Suite.prototype.results = function() {
  
                        var _colt110 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js276_" + __coltScope)
                        if (_colt110 == null) {
                            try {
                                _colt110 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js276"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[276]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js276_" + __coltScope, _colt110)
                        }
                        return _colt110.apply(this, arguments)
            };
jasmine.Suite.prototype.add = function(suiteOrSpec) {
  
                        var _colt111 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js277_" + __coltScope)
                        if (_colt111 == null) {
                            try {
                                _colt111 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js277"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[277]: function(suiteOrSpec) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js277_" + __coltScope, _colt111)
                        }
                        return _colt111.apply(this, arguments)
            };
jasmine.Suite.prototype.specs = function() {
  
                        var _colt112 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js278_" + __coltScope)
                        if (_colt112 == null) {
                            try {
                                _colt112 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js278"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[278]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js278_" + __coltScope, _colt112)
                        }
                        return _colt112.apply(this, arguments)
            };
jasmine.Suite.prototype.suites = function() {
  
                        var _colt113 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js279_" + __coltScope)
                        if (_colt113 == null) {
                            try {
                                _colt113 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js279"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[279]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js279_" + __coltScope, _colt113)
                        }
                        return _colt113.apply(this, arguments)
            };
jasmine.Suite.prototype.children = function() {
  
                        var _colt114 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js280_" + __coltScope)
                        if (_colt114 == null) {
                            try {
                                _colt114 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js280"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[280]: function() execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js280_" + __coltScope, _colt114)
                        }
                        return _colt114.apply(this, arguments)
            };
jasmine.Suite.prototype.execute = function(onComplete) {
  
                        var _colt115 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js281_" + __coltScope)
                        if (_colt115 == null) {
                            try {
                                _colt115 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js281"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[281]: function(onComplete) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js281_" + __coltScope, _colt115)
                        }
                        return _colt115.apply(this, arguments)
            };
jasmine.WaitsBlock = function(env, timeout, spec) {
  
                        var _colt117 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js283_" + __coltScope)
                        if (_colt117 == null) {
                            try {
                                _colt117 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js283"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[283]: function(env, timeout, spec) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js283_" + __coltScope, _colt117)
                        }
                        return _colt117.apply(this, arguments)
            };
jasmine.util.inherit(jasmine.WaitsBlock, jasmine.Block);
jasmine.WaitsBlock.prototype.execute = function(onComplete) {
  
                        var _colt118 = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js284_" + __coltScope)
                        if (_colt118 == null) {
                            try {
                                _colt118 = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js284"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[284]: function(onComplete) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js284_" + __coltScope, _colt118)
                        }
                        return _colt118.apply(this, arguments)
            };
jasmine.WaitsForBlock = function(env, timeout, latchFunction, message, spec) {
  
                        var _colt11a = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js287_" + __coltScope)
                        if (_colt11a == null) {
                            try {
                                _colt11a = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js287"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[287]: function(env, timeout, latchFunction, message, spec) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js287_" + __coltScope, _colt11a)
                        }
                        return _colt11a.apply(this, arguments)
            };
jasmine.util.inherit(jasmine.WaitsForBlock, jasmine.Block);
jasmine.WaitsForBlock.TIMEOUT_INCREMENT = 10;
jasmine.WaitsForBlock.prototype.execute = function(onComplete) {
  
                        var _colt11b = LiveCodeRegistry.getInstance().getCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js288_" + __coltScope)
                        if (_colt11b == null) {
                            try {
                                _colt11b = eval(LiveCodeRegistry.getInstance().getMethod("spec/lib/jasmine-1.2.0/jasmine.js288"));
                            } catch (e) {
                                LogUtil.log("error", "", "", "spec/lib/jasmine-1.2.0/jasmine.js", "live method spec/lib/jasmine-1.2.0/jasmine.js[288]: function(onComplete) execute error: " + e.message, e);
                                return;
                            }
                            LiveCodeRegistry.getInstance().putCachedMethod("spec/lib/jasmine-1.2.0/jasmine.js288_" + __coltScope, _colt11b)
                        }
                        return _colt11b.apply(this, arguments)
            };
jasmine.version_ = {"major": 1, "minor": 2, "build": 0, "revision": 1337005947};
