(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_configuration_configuration_module_ts"],{

/***/ 16351:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/awesome-cordova-plugin.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* binding */ AwesomeCordovaNativePlugin)
/* harmony export */ });
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/common */ 9343);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 91674);


var AwesomeCordovaNativePlugin = /** @class */ (function () {
    function AwesomeCordovaNativePlugin() {
    }
    /**
     * Returns a boolean that indicates whether the plugin is installed
     *
     * @returns {boolean}
     */
    AwesomeCordovaNativePlugin.installed = function () {
        var isAvailable = (0,_decorators_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(this.pluginRef) === true;
        return isAvailable;
    };
    /**
     * Returns the original plugin object
     */
    AwesomeCordovaNativePlugin.getPlugin = function () {
        if (typeof window !== 'undefined') {
            return (0,_util__WEBPACK_IMPORTED_MODULE_1__.get)(window, this.pluginRef);
        }
        return null;
    };
    /**
     * Returns the plugin's name
     */
    AwesomeCordovaNativePlugin.getPluginName = function () {
        var pluginName = this.pluginName;
        return pluginName;
    };
    /**
     * Returns the plugin's reference
     */
    AwesomeCordovaNativePlugin.getPluginRef = function () {
        var pluginRef = this.pluginRef;
        return pluginRef;
    };
    /**
     * Returns the plugin's install name
     */
    AwesomeCordovaNativePlugin.getPluginInstallName = function () {
        var plugin = this.plugin;
        return plugin;
    };
    /**
     * Returns the plugin's supported platforms
     */
    AwesomeCordovaNativePlugin.getSupportedPlatforms = function () {
        var platform = this.platforms;
        return platform;
    };
    AwesomeCordovaNativePlugin.pluginName = '';
    AwesomeCordovaNativePlugin.pluginRef = '';
    AwesomeCordovaNativePlugin.plugin = '';
    AwesomeCordovaNativePlugin.repo = '';
    AwesomeCordovaNativePlugin.platforms = [];
    AwesomeCordovaNativePlugin.install = '';
    return AwesomeCordovaNativePlugin;
}());

//# sourceMappingURL=awesome-cordova-plugin.js.map

/***/ }),

/***/ 46367:
/*!******************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/bootstrap.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkReady": () => (/* binding */ checkReady)
/* harmony export */ });
/**
 *
 */
function checkReady() {
    if (typeof process === 'undefined') {
        var win_1 = typeof window !== 'undefined' ? window : {};
        var DEVICE_READY_TIMEOUT_1 = 5000;
        // To help developers using cordova, we listen for the device ready event and
        // log an error if it didn't fire in a reasonable amount of time. Generally,
        // when this happens, developers should remove and reinstall plugins, since
        // an inconsistent plugin is often the culprit.
        var before_1 = Date.now();
        var didFireReady_1 = false;
        win_1.document.addEventListener('deviceready', function () {
            console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
            didFireReady_1 = true;
        });
        setTimeout(function () {
            if (!didFireReady_1 && win_1.cordova) {
                console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
            }
        }, DEVICE_READY_TIMEOUT_1);
    }
}
//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ 9343:
/*!**************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/common.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERR_CORDOVA_NOT_AVAILABLE": () => (/* binding */ ERR_CORDOVA_NOT_AVAILABLE),
/* harmony export */   "ERR_PLUGIN_NOT_INSTALLED": () => (/* binding */ ERR_PLUGIN_NOT_INSTALLED),
/* harmony export */   "getPromise": () => (/* binding */ getPromise),
/* harmony export */   "wrapPromise": () => (/* binding */ wrapPromise),
/* harmony export */   "checkAvailability": () => (/* binding */ checkAvailability),
/* harmony export */   "instanceAvailability": () => (/* binding */ instanceAvailability),
/* harmony export */   "setIndex": () => (/* binding */ setIndex),
/* harmony export */   "callCordovaPlugin": () => (/* binding */ callCordovaPlugin),
/* harmony export */   "callInstance": () => (/* binding */ callInstance),
/* harmony export */   "getPlugin": () => (/* binding */ getPlugin),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "pluginWarn": () => (/* binding */ pluginWarn),
/* harmony export */   "cordovaWarn": () => (/* binding */ cordovaWarn),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapInstance": () => (/* binding */ wrapInstance)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 22759);

var ERR_CORDOVA_NOT_AVAILABLE = { error: 'cordova_not_available' };
var ERR_PLUGIN_NOT_INSTALLED = { error: 'plugin_not_installed' };
/**
 * @param callback
 */
function getPromise(callback) {
    var tryNativePromise = function () {
        if (Promise) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    if (typeof window !== 'undefined' && window.angular) {
        var doc = window.document;
        var injector = window.angular.element(doc.querySelector('[ng-app]') || doc.body).injector();
        if (injector) {
            var $q = injector.get('$q');
            return $q(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
    }
    return tryNativePromise();
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    var pluginResult, rej;
    var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return resolve(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return reject(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
        }
        rej = reject;
    });
    // Angular throws an error on unhandled rejection, but in this case we have already printed
    // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
    // to error
    if (pluginResult && pluginResult.error) {
        p.catch(function () { });
        typeof rej === 'function' && rej(pluginResult.error);
    }
    return p;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapOtherPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return getPromise(function (resolve, reject) {
        var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
        if (pluginResult) {
            if (pluginResult.error) {
                reject(pluginResult.error);
            }
            else if (pluginResult.then) {
                pluginResult.then(resolve).catch(reject);
            }
        }
        else {
            reject({ error: 'unexpected_error' });
        }
    });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapObservable(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var pluginResult;
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.next(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.error(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }
        if (pluginResult && pluginResult.error) {
            observer.error(pluginResult.error);
            observer.complete();
        }
        return function () {
            try {
                if (opts.clearFunction) {
                    if (opts.clearWithArgs) {
                        return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                    }
                    return callCordovaPlugin(pluginObj, opts.clearFunction, []);
                }
            }
            catch (e) {
                console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                console.warn(e);
            }
        };
    });
}
/**
 * Wrap the event with an observable
 *
 * @private
 * @param event event name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */
function wrapEventObservable(event, element) {
    element =
        typeof window !== 'undefined' && element
            ? get(window, element)
            : element || (typeof window !== 'undefined' ? window : {});
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(element, event);
}
/**
 * @param plugin
 * @param methodName
 * @param pluginName
 */
function checkAvailability(plugin, methodName, pluginName) {
    var pluginRef, pluginPackage;
    if (typeof plugin === 'string') {
        pluginRef = plugin;
    }
    else {
        pluginRef = plugin.constructor.getPluginRef();
        pluginName = plugin.constructor.getPluginName();
        pluginPackage = plugin.constructor.getPluginInstallName();
    }
    var pluginInstance = getPlugin(pluginRef);
    if (!pluginInstance || (!!methodName && typeof pluginInstance[methodName] === 'undefined')) {
        if (typeof window === 'undefined' || !window.cordova) {
            cordovaWarn(pluginName, methodName);
            return ERR_CORDOVA_NOT_AVAILABLE;
        }
        pluginWarn(pluginName, pluginPackage, methodName);
        return ERR_PLUGIN_NOT_INSTALLED;
    }
    return true;
}
/**
 * Checks if _objectInstance exists and has the method/property
 *
 * @param pluginObj
 * @param methodName
 * @private
 */
function instanceAvailability(pluginObj, methodName) {
    return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
}
/**
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function setIndex(args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // ignore resolve and reject in case sync
    if (opts.sync) {
        return args;
    }
    // If the plugin method expects myMethod(success, err, options)
    if (opts.callbackOrder === 'reverse') {
        // Get those arguments in the order [resolve, reject, ...restOfArgs]
        args.unshift(reject);
        args.unshift(resolve);
    }
    else if (opts.callbackStyle === 'node') {
        args.push(function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    }
    else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
        var obj = {};
        obj[opts.successName] = resolve;
        obj[opts.errorName] = reject;
        args.push(obj);
    }
    else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
        var setSuccessIndex = function () {
            // If we've specified a success/error index
            if (opts.successIndex > args.length) {
                args[opts.successIndex] = resolve;
            }
            else {
                args.splice(opts.successIndex, 0, resolve);
            }
        };
        var setErrorIndex = function () {
            // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
            // defined and thus causing non expected behavior.
            if (opts.errorIndex > args.length) {
                args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
            }
            else {
                args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
            }
        };
        if (opts.successIndex > opts.errorIndex) {
            setErrorIndex();
            setSuccessIndex();
        }
        else {
            setSuccessIndex();
            setErrorIndex();
        }
    }
    else {
        // Otherwise, let's tack them on to the end of the argument list
        // which is 90% of cases
        args.push(resolve);
        args.push(reject);
    }
    return args;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // Try to figure out where the success/error callbacks need to be bound
    // to our promise resolve/reject handlers.
    args = setIndex(args, opts, resolve, reject);
    var availabilityCheck = checkAvailability(pluginObj, methodName);
    if (availabilityCheck === true) {
        var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
        // eslint-disable-next-line prefer-spread
        return pluginInstance[methodName].apply(pluginInstance, args);
    }
    else {
        return availabilityCheck;
    }
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    args = setIndex(args, opts, resolve, reject);
    if (instanceAvailability(pluginObj, methodName)) {
        // eslint-disable-next-line prefer-spread
        return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
    }
}
/**
 * @param pluginRef
 */
function getPlugin(pluginRef) {
    if (typeof window !== 'undefined') {
        return get(window, pluginRef);
    }
    return null;
}
/**
 * @param element
 * @param path
 */
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
/**
 * @param pluginName
 * @param plugin
 * @param method
 */
function pluginWarn(pluginName, plugin, method) {
    if (method) {
        console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
    }
    else {
        console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
    }
    if (plugin) {
        console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
    }
}
/**
 * @private
 * @param pluginName
 * @param method
 */
function cordovaWarn(pluginName, method) {
    if (typeof process === 'undefined') {
        if (method) {
            console.warn('Native: tried calling ' +
                pluginName +
                '.' +
                method +
                ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
        else {
            console.warn('Native: tried accessing the ' +
                pluginName +
                ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
    }
}
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */
var wrap = function (pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
            return callCordovaPlugin(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return wrapObservable(pluginObj, methodName, args, opts);
        }
        else if (opts.eventObservable && opts.event) {
            return wrapEventObservable(opts.event, opts.element);
        }
        else if (opts.otherPromise) {
            return wrapOtherPromise(pluginObj, methodName, args, opts);
        }
        else {
            return wrapPromise(pluginObj, methodName, args, opts);
        }
    };
};
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */
function wrapInstance(pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            return callInstance(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
                var pluginResult;
                if (opts.destruct) {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.next(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.error(args);
                    });
                }
                else {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                }
                if (pluginResult && pluginResult.error) {
                    observer.error(pluginResult.error);
                }
                return function () {
                    try {
                        if (opts.clearWithArgs) {
                            return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                        }
                        return callInstance(pluginObj, opts.clearFunction, []);
                    }
                    catch (e) {
                        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                        console.warn(e);
                    }
                };
            });
        }
        else if (opts.otherPromise) {
            return getPromise(function (resolve, reject) {
                var result;
                if (opts.destruct) {
                    result = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                if (result && result.then) {
                    result.then(resolve, reject);
                }
                else {
                    reject();
                }
            });
        }
        else {
            var pluginResult_1, rej_1;
            var p = getPromise(function (resolve, reject) {
                if (opts.destruct) {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                rej_1 = reject;
            });
            // Angular throws an error on unhandled rejection, but in this case we have already printed
            // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
            // to error
            if (pluginResult_1 && pluginResult_1.error) {
                p.catch(function () { });
                typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
            }
            return p;
        }
    };
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ 531:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-function-override.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaFunctionOverride": () => (/* binding */ cordovaFunctionOverride)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9343);


/**
 * @param pluginObj
 * @param methodName
 */
function overrideFunction(pluginObj, methodName) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
        var availabilityCheck = (0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, methodName);
        if (availabilityCheck === true) {
            var pluginInstance_1 = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef());
            pluginInstance_1[methodName] = observer.next.bind(observer);
            return function () { return (pluginInstance_1[methodName] = function () { }); };
        }
        else {
            observer.error(availabilityCheck);
            observer.complete();
        }
    });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 */
function cordovaFunctionOverride(pluginObj, methodName, args) {
    if (args === void 0) { args = []; }
    return overrideFunction(pluginObj, methodName);
}
//# sourceMappingURL=cordova-function-override.js.map

/***/ }),

/***/ 90808:
/*!************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-instance.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaInstance": () => (/* binding */ cordovaInstance)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9343);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
function cordovaInstance(pluginObj, methodName, config, args) {
    args = Array.from(args);
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrapInstance)(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova-instance.js.map

/***/ }),

/***/ 34070:
/*!************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-property.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaPropertyGet": () => (/* binding */ cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* binding */ cordovaPropertySet)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9343);

/**
 * @param pluginObj
 * @param key
 */
function cordovaPropertyGet(pluginObj, key) {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
        return (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key];
    }
    return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */
function cordovaPropertySet(pluginObj, key, value) {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
        (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key] = value;
    }
}
//# sourceMappingURL=cordova-property.js.map

/***/ }),

/***/ 43364:
/*!***************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordova": () => (/* binding */ cordova)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9343);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
function cordova(pluginObj, methodName, config, args) {
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrap)(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova.js.map

/***/ }),

/***/ 70422:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/instance-property.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instancePropertyGet": () => (/* binding */ instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* binding */ instancePropertySet)
/* harmony export */ });
/**
 * @param pluginObj
 * @param key
 */
function instancePropertyGet(pluginObj, key) {
    if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
        return pluginObj._objectInstance[key];
    }
    return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */
function instancePropertySet(pluginObj, key, value) {
    if (pluginObj._objectInstance) {
        pluginObj._objectInstance[key] = value;
    }
}
//# sourceMappingURL=instance-property.js.map

/***/ }),

/***/ 60303:
/*!******************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/interfaces.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ 16887:
/*!**************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* reexport safe */ _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__.AwesomeCordovaNativePlugin),
/* harmony export */   "checkAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.checkAvailability),
/* harmony export */   "instanceAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.instanceAvailability),
/* harmony export */   "wrap": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.wrap),
/* harmony export */   "getPromise": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.getPromise),
/* harmony export */   "cordova": () => (/* reexport safe */ _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__.cordova),
/* harmony export */   "cordovaFunctionOverride": () => (/* reexport safe */ _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__.cordovaFunctionOverride),
/* harmony export */   "cordovaInstance": () => (/* reexport safe */ _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__.cordovaInstance),
/* harmony export */   "cordovaPropertyGet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertySet),
/* harmony export */   "instancePropertyGet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertySet)
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ 46367);
/* harmony import */ var _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awesome-cordova-plugin */ 16351);
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/common */ 9343);
/* harmony import */ var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/cordova */ 43364);
/* harmony import */ var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/cordova-function-override */ 531);
/* harmony import */ var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/cordova-instance */ 90808);
/* harmony import */ var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/cordova-property */ 34070);
/* harmony import */ var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/instance-property */ 70422);
/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/interfaces */ 60303);


// Decorators







(0,_bootstrap__WEBPACK_IMPORTED_MODULE_0__.checkReady)();

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 91674:
/*!*************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/util.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPromise": () => (/* binding */ getPromise)
/* harmony export */ });
/**
 * @param element
 * @param path
 * @private
 */
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
/**
 * @param callback
 * @private
 */
function getPromise(callback) {
    if (callback === void 0) { callback = function () { }; }
    var tryNativePromise = function () {
        if (typeof Promise === 'function' || (typeof window !== 'undefined' && window.Promise)) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    return tryNativePromise();
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 17265:
/*!****************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/email-composer/__ivy_ngcc__/ngx/index.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailComposer": () => (/* binding */ EmailComposer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 16887);




var EmailComposer = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(EmailComposer, _super);
    function EmailComposer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailComposer.prototype.hasPermission = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hasPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposer.prototype.requestPermission = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "requestPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposer.prototype.hasAccount = function () {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve) {
                    EmailComposer.getPlugin().hasAccount(function (result) {
                        if (result) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.hasClient = function (app) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve) {
                    if (app) {
                        EmailComposer.getPlugin().hasClient(app, function (result) {
                            if (result) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        });
                    }
                    else {
                        EmailComposer.getPlugin().getClients(function (apps) {
                            resolve(apps && apps.length > 0);
                        });
                    }
                });
            }
        })();
    };
    EmailComposer.prototype.getClients = function () {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve) {
                    EmailComposer.getPlugin().getClients(function (apps) {
                        if (Object.prototype.toString.call(apps) === '[object String]') {
                            apps = [apps];
                        }
                        resolve(apps);
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.isAvailable = function (app) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve) {
                    Promise.all([_this.hasAccount, _this.hasClient(app)]).then(function (results) {
                        return resolve(results.length === 2 && results[0] && results[1]);
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.open = function (options, scope) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "open", { "successIndex": 1, "errorIndex": 3 }, arguments); };
    EmailComposer.prototype.addAlias = function (alias, packageName) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "addAlias", {}, arguments); };
    EmailComposer.pluginName = "EmailComposer";
    EmailComposer.plugin = "cordova-plugin-email-composer";
    EmailComposer.pluginRef = "cordova.plugins.email";
    EmailComposer.repo = "https://github.com/katzer/cordova-plugin-email-composer";
    EmailComposer.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows", "macOS"];
EmailComposer.ɵfac = /*@__PURE__*/ function () { var ɵEmailComposer_BaseFactory; return function EmailComposer_Factory(t) { return (ɵEmailComposer_BaseFactory || (ɵEmailComposer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](EmailComposer)))(t || EmailComposer); }; }();
EmailComposer.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EmailComposer, factory: function (t) { return EmailComposer.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EmailComposer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return EmailComposer;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcGx1Z2lucy9lbWFpbC1jb21wb3Nlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTywwREFBNkQsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBQ3RIO0lBZ0ltQyxpQ0FBMEI7Ozs7SUFVM0QscUNBQWE7SUFhYix5Q0FBaUI7SUFVakIsa0NBQVU7OzttREFBaUI7Z0JBQ3pCLE9BQU8sVUFBVSxDQUFVLFVBQUMsT0FBTztvQkFDakMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFDLE1BQWU7d0JBQ25ELElBQUksTUFBTSxFQUFFOzRCQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDZjs2QkFBTTs0QkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ2hCO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQVVELGlDQUFTLGFBQUMsR0FBWTs7O21EQUFnQjtnQkFDcEMsT0FBTyxVQUFVLENBQVUsVUFBQyxPQUFPO29CQUNqQyxJQUFJLEdBQUcsRUFBRTt3QkFDUCxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxVQUFDLE1BQWU7NEJBQ3ZELElBQUksTUFBTSxFQUFFO2dDQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDZjtpQ0FBTTtnQ0FDTCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7NkJBQ2hCO3dCQUNILENBQUMsQ0FBQyxDQUFDO3FCQUNKO3lCQUFNO3dCQUNMLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBQyxJQUFjOzRCQUNsRCxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ25DLENBQUMsQ0FBQyxDQUFDO3FCQUNKO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQVNELGtDQUFVOzs7bURBQXNCO2dCQUM5QixPQUFPLFVBQVUsQ0FBVyxVQUFDLE9BQU87b0JBQ2xDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBQyxJQUFTO3dCQUM3QyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxpQkFBaUIsRUFBRTs0QkFDOUQsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ2Y7d0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoQixDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFTRCxtQ0FBVyxhQUFDLEdBQVk7OzttREFBZ0I7Z0JBQ3RDLE9BQU8sVUFBVSxDQUFVLFVBQUMsT0FBTztvQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTzt3QkFDL0QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuRSxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFhRCw0QkFBSSxhQUFDLE9BQTZCLEVBQUUsS0FBVztJQVcvQyxnQ0FBUSxhQUFDLEtBQWEsRUFBRSxXQUFtQjs7Ozs7a0dBRXVWO2lEQWpJblksVUFBVTs7OzswQkFDTDt3QkFsSU47RUFrSW1DLDBCQUEwQjtTQUFoRCxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YUNoZWNrLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luLCBnZXRQcm9taXNlIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVtYWlsQ29tcG9zZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIEFwcCB0byBzZW5kIHRoZSBlbWFpbCB3aXRoXG4gICAqL1xuICBhcHA/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVtYWlsIGFkZHJlc3MoZXMpIGZvciBUbyBmaWVsZFxuICAgKi9cbiAgdG8/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICogRW1haWwgYWRkcmVzcyhlcykgZm9yIENDIGZpZWxkXG4gICAqL1xuICBjYz86IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBFbWFpbCBhZGRyZXNzKGVzKSBmb3IgQkNDIGZpZWxkXG4gICAqL1xuICBiY2M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICogRmlsZSBwYXRocyBvciBiYXNlNjQgZGF0YSBzdHJlYW1zXG4gICAqL1xuICBhdHRhY2htZW50cz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBTdWJqZWN0IG9mIHRoZSBlbWFpbFxuICAgKi9cbiAgc3ViamVjdD86IHN0cmluZztcblxuICAvKipcbiAgICogRW1haWwgYm9keSAoZm9yIEhUTUwsIHNldCBpc0h0bWwgdG8gdHJ1ZSlcbiAgICovXG4gIGJvZHk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGUgYm9keSBpcyBIVE1MIG9yIHBsYWluIHRleHRcbiAgICovXG4gIGlzSHRtbD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBDb250ZW50IHR5cGUgb2YgdGhlIGVtYWlsIChBbmRyb2lkIG9ubHkpXG4gICAqL1xuICB0eXBlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEVtYWlsIENvbXBvc2VyXG4gKiBAcHJlbWllciBlbWFpbC1jb21wb3NlclxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWVtYWlsLWNvbXBvc2VyLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbRW1haWwgQ29tcG9zZXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9oeXBlcnkyay9jb3Jkb3ZhLWVtYWlsLXBsdWdpbikuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEVtYWlsQ29tcG9zZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZW1haWwtY29tcG9zZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtYWlsQ29tcG9zZXI6IEVtYWlsQ29tcG9zZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmVtYWlsQ29tcG9zZXIuZ2V0Q2xpZW50cygpLnRoZW4oKGFwcHM6IFtdKSA9PiB7XG4gKiAgICAvLyBSZXR1cm5zIGFuIGFycmF5IG9mIGNvbmZpZ3VyZWQgZW1haWwgY2xpZW50cyBmb3IgdGhlIGRldmljZVxuICogfSk7XG4gKlxuICogdGhpcy5lbWFpbENvbXBvc2VyLmhhc0NsaWVudCgpLnRoZW4oYXBwLCAoaXNWYWxpZDogYm9vbGVhbikgPT4ge1xuICogIGlmIChpc1ZhbGlkKSB7XG4gKiAgICAvLyBOb3cgd2Uga25vdyB3ZSBoYXZlIGEgdmFsaWQgZW1haWwgY2xpZW50IGNvbmZpZ3VyZWRcbiAqICAgIC8vIE5vdCBzcGVjaWZ5aW5nIGFuIGFwcCB3aWxsIHJldHVybiB0cnVlIGlmIGF0IGxlYXN0IG9uZSBlbWFpbCBjbGllbnQgaXMgY29uZmlndXJlZFxuICogIH1cbiAqIH0pO1xuICpcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5oYXNBY2NvdW50KCkudGhlbigoaXNWYWxpZDogYm9vbGVhbikgPT4ge1xuICogIGlmIChpc1ZhbGlkKSB7XG4gKiAgICAvLyBOb3cgd2Uga25vdyB3ZSBoYXZlIGEgdmFsaWQgZW1haWwgYWNjb3VudCBjb25maWd1cmVkXG4gKiAgfVxuICogfSk7XG4gKlxuICogdGhpcy5lbWFpbENvbXBvc2VyLmlzQXZhaWxhYmxlKCkudGhlbihhcHAsIChhdmFpbGFibGU6IGJvb2xlYW4pID0+IHtcbiAqICBpZihhdmFpbGFibGUpIHtcbiAqICAgIC8vIE5vdyB3ZSBrbm93IHdlIGNhbiBzZW5kIGFuIGVtYWlsLCBjYWxscyBoYXNDbGllbnQgYW5kIGhhc0FjY291bnRcbiAqICAgIC8vIE5vdCBzcGVjaWZ5aW5nIGFuIGFwcCB3aWxsIHJldHVybiB0cnVlIGlmIGF0IGxlYXN0IG9uZSBlbWFpbCBjbGllbnQgaXMgY29uZmlndXJlZFxuICogIH1cbiAqIH0pO1xuICpcbiAqIGxldCBlbWFpbCA9IHtcbiAqICAgdG86ICdtYXhAbXVzdGVybWFubi5kZScsXG4gKiAgIGNjOiAnZXJpa2FAbXVzdGVybWFubi5kZScsXG4gKiAgIGJjYzogWydqb2huQGRvZS5jb20nLCAnamFuZUBkb2UuY29tJ10sXG4gKiAgIGF0dGFjaG1lbnRzOiBbXG4gKiAgICAgJ2ZpbGU6Ly9pbWcvbG9nby5wbmcnLFxuICogICAgICdyZXM6Ly9pY29uLnBuZycsXG4gKiAgICAgJ2Jhc2U2NDppY29uLnBuZy8vaVZCT1J3MEtHZ29BQUFBTlNVaEVVZy4uLicsXG4gKiAgICAgJ2ZpbGU6Ly9SRUFETUUucGRmJ1xuICogICBdLFxuICogICBzdWJqZWN0OiAnQ29yZG92YSBJY29ucycsXG4gKiAgIGJvZHk6ICdIb3cgYXJlIHlvdT8gTmljZSBncmVldGluZ3MgZnJvbSBMZWlwemlnJyxcbiAqICAgaXNIdG1sOiB0cnVlXG4gKiB9XG4gKlxuICogLy8gU2VuZCBhIHRleHQgbWVzc2FnZSB1c2luZyBkZWZhdWx0IG9wdGlvbnNcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5vcGVuKGVtYWlsKTtcbiAqIGBgYFxuICpcbiAqIFlvdSBjYW4gYWxzbyBhc3NpZ24gYWxpYXNlcyB0byBlbWFpbCBhcHBzXG4gKiBgYGB0c1xuICogLy8gYWRkIGFsaWFzXG4gKiB0aGlzLmVtYWlsLmFkZEFsaWFzKCdnbWFpbCcsICdjb20uZ29vZ2xlLmFuZHJvaWQuZ20nKTtcbiAqXG4gKiAvLyB0aGVuIHVzZSBhbGlhcyB3aGVuIHNlbmRpbmcgZW1haWxcbiAqIHRoaXMuZW1haWwub3Blbih7XG4gKiAgIGFwcDogJ2dtYWlsJyxcbiAqICAgLi4uXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEVtYWlsQ29tcG9zZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRW1haWxDb21wb3NlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWVtYWlsLWNvbXBvc2VyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmVtYWlsJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tZW1haWwtY29tcG9zZXInLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJywgJ21hY09TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVtYWlsQ29tcG9zZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGFwcCBoYXMgYSBwZXJtaXNzaW9uIHRvIGFjY2VzcyBlbWFpbCBhY2NvdW50cyBpbmZvcm1hdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgcGVybWlzc2lvbiB3YXMgZ3JhbnRlZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb24gdG8gYWNjZXNzIGVtYWlsIGFjY291bnRzIGluZm9ybWF0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBwZXJtaXNzaW9uIHdhcyBncmFudGVkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyBpZiBhbiBlbWFpbCBhY2NvdW50IGlzIGNvbmZpZ3VyZWQgb24gdGhlIGRldmljZS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgaWYgYXZhaWxhYmxlLCByZWplY3RzIGlmIG5vdCBhdmFpbGFibGVcbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBoYXNBY2NvdW50KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUpID0+IHtcbiAgICAgIEVtYWlsQ29tcG9zZXIuZ2V0UGx1Z2luKCkuaGFzQWNjb3VudCgocmVzdWx0OiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyBpZiBhIHNwZWNpZmljIGVtYWlsIGNsaWVudCBpcyBpbnN0YWxsZWQgb24gdGhlIGRldmljZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFthcHBdIEFwcCBpZCBvciB1cmkgc2NoZW1lLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBpZiBhdmFpbGFibGUsIHJlamVjdHMgaWYgbm90IGF2YWlsYWJsZVxuICAgKi9cblxuICBAQ29yZG92YUNoZWNrKClcbiAgaGFzQ2xpZW50KGFwcD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChhcHApIHtcbiAgICAgICAgRW1haWxDb21wb3Nlci5nZXRQbHVnaW4oKS5oYXNDbGllbnQoYXBwLCAocmVzdWx0OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEVtYWlsQ29tcG9zZXIuZ2V0UGx1Z2luKCkuZ2V0Q2xpZW50cygoYXBwczogc3RyaW5nW10pID0+IHtcbiAgICAgICAgICByZXNvbHZlKGFwcHMgJiYgYXBwcy5sZW5ndGggPiAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBlbWFpbCBjbGllbnRzIGluc3RhbGxlZCBvbiB0aGUgZGV2aWNlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmdbXT59IFJlc29sdmVzIGlmIGF2YWlsYWJsZSwgcmVqZWN0cyBpZiBub3QgYXZhaWxhYmxlXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXG4gIGdldENsaWVudHMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPHN0cmluZ1tdPigocmVzb2x2ZSkgPT4ge1xuICAgICAgRW1haWxDb21wb3Nlci5nZXRQbHVnaW4oKS5nZXRDbGllbnRzKChhcHBzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcHBzKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcbiAgICAgICAgICBhcHBzID0gW2FwcHNdO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUoYXBwcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyBpZiBzZW5kaW5nIGVtYWlscyBpcyBzdXBwb3J0ZWQgb24gdGhlIGRldmljZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFthcHBdIEFwcCBpZCBvciB1cmkgc2NoZW1lLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBpZiBhdmFpbGFibGUsIHJlamVjdHMgaWYgbm90IGF2YWlsYWJsZVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGlzQXZhaWxhYmxlKGFwcD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUpID0+IHtcbiAgICAgIFByb21pc2UuYWxsKFt0aGlzLmhhc0FjY291bnQsIHRoaXMuaGFzQ2xpZW50KGFwcCldKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdHMubGVuZ3RoID09PSAyICYmIHJlc3VsdHNbMF0gJiYgcmVzdWx0c1sxXSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aGUgZW1haWwgY29tcG9zZXIgcHJlLWZpbGxlZCB3aXRoIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7RW1haWxDb21wb3Nlck9wdGlvbnN9IG9wdGlvbnMgRW1haWxcbiAgICogQHBhcmFtIHthbnl9IFtzY29wZV0gU2NvcGUgZm9yIHRoZSBwcm9taXNlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIHByb21pc2Ugd2hlbiB0aGUgRW1haWxDb21wb3NlciBoYXMgYmVlbiBvcGVuZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMyxcbiAgfSlcbiAgb3BlbihvcHRpb25zOiBFbWFpbENvbXBvc2VyT3B0aW9ucywgc2NvcGU/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbmV3IG1haWwgYXBwIGFsaWFzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWxpYXMgVGhlIGFsaWFzIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhY2thZ2VOYW1lIFRoZSBwYWNrYWdlIG5hbWVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWRkQWxpYXMoYWxpYXM6IHN0cmluZywgcGFja2FnZU5hbWU6IHN0cmluZyk6IHZvaWQge31cbn1cbiJdfQ==

/***/ }),

/***/ 50806:
/*!***************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/file-transfer/__ivy_ngcc__/ngx/index.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileTransfer": () => (/* binding */ FileTransfer),
/* harmony export */   "FileTransferObject": () => (/* binding */ FileTransferObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 16887);




var FileTransfer = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(FileTransfer, _super);
    function FileTransfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Error code rejected from upload with FileTransferError
         * Defined in FileTransferError.
         *      FILE_NOT_FOUND_ERR: 1   Return when file was not found
         *      INVALID_URL_ERR: 2,     Return when url was invalid
         *      CONNECTION_ERR: 3,      Return on connection error
         *      ABORT_ERR: 4,           Return on aborting
         *      NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response
         *
         * @enum {number}
         */
        _this.FileTransferErrorCode = {
            FILE_NOT_FOUND_ERR: 1,
            INVALID_URL_ERR: 2,
            CONNECTION_ERR: 3,
            ABORT_ERR: 4,
            NOT_MODIFIED_ERR: 5,
        };
        return _this;
    }
    /**
     * Creates a new FileTransfer object
     *
     * @returns {FileTransferObject}
     */
    FileTransfer.prototype.create = function () {
        return new FileTransferObject();
    };
    FileTransfer.pluginName = "FileTransfer";
    FileTransfer.plugin = "cordova-plugin-file-transfer";
    FileTransfer.pluginRef = "FileTransfer";
    FileTransfer.repo = "https://github.com/apache/cordova-plugin-file-transfer";
    FileTransfer.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Ubuntu", "Windows", "Windows Phone"];
FileTransfer.ɵfac = /*@__PURE__*/ function () { var ɵFileTransfer_BaseFactory; return function FileTransfer_Factory(t) { return (ɵFileTransfer_BaseFactory || (ɵFileTransfer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](FileTransfer)))(t || FileTransfer); }; }();
FileTransfer.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FileTransfer, factory: function (t) { return FileTransfer.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FileTransfer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return FileTransfer;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin));

var FileTransferObject = /** @class */ (function () {
    function FileTransferObject() {
        if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(FileTransfer.getPluginRef(), null, FileTransfer.getPluginName()) === true) {
            this._objectInstance = new (FileTransfer.getPlugin())();
        }
    }
    FileTransferObject.prototype.upload = function (fileUrl, url, options, trustAllHosts) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "upload", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.download = function (source, target, trustAllHosts, options) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "download", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.onProgress = function (listener) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
                _this._objectInstance.onprogress = listener;
            }
        })();
    };
    FileTransferObject.prototype.abort = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "abort", { "sync": true }, arguments); };
    FileTransferObject.plugin = "cordova-plugin-file-transfer";
    FileTransferObject.pluginName = "FileTransfer";
    return FileTransferObject;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcGx1Z2lucy9maWxlLXRyYW5zZmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHFFQUtMLGlCQUFpQixFQUNsQixNQUFNLCtCQUErQixDQUFDOztBQUN2QztJQXlLa0MsZ0NBQTBCOzs7UUFDMUQ7Ozs7Ozs7Ozs7V0FVRztRQUNILDJCQUFxQixHQUFHO1lBQ3RCLGtCQUFrQixFQUFFLENBQUM7WUFDckIsZUFBZSxFQUFFLENBQUM7WUFDbEIsY0FBYyxFQUFFLENBQUM7WUFDakIsU0FBUyxFQUFFLENBQUM7WUFDWixnQkFBZ0IsRUFBRSxDQUFDO1NBQ3BCLENBQUM7OztJQUVGOzs7O09BSUc7SUFDSCw2QkFBTSxHQUFOO1FBQ0UsT0FBTyxJQUFJLGtCQUFrQixFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7bUhBZWlEO2dEQTNDbkQsVUFBVTs7OzswQkFDTDt1QkFqTE47RUFpTGtDLDBCQUEwQjtTQUEvQyxZQUFZOztJQXdDdkI7UUFDRSxJQUFJLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQy9GLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDekQ7SUFDSCxDQUFDO0lBZUQsbUNBQU0sYUFDSixPQUFlLEVBQ2YsR0FBVyxFQUNYLE9BQTJCLEVBQzNCLGFBQXVCO0lBa0J6QixxQ0FBUSxhQUFDLE1BQWMsRUFBRSxNQUFjLEVBQUUsYUFBdUIsRUFBRSxPQUE4QjtJQVVoRyx1Q0FBVSxhQUFDLFFBQXVDOzs7c0RBQVE7Z0JBQ3hELEtBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQzthQUM1Qzs7O0lBU0Qsa0NBQUs7Ozs2QkF2UlA7O1NBc05hLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VDaGVjayxcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXG4gIFBsdWdpbixcbiAgY2hlY2tBdmFpbGFiaWxpdHksXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBGaWxlVXBsb2FkT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZm9ybSBlbGVtZW50LlxuICAgKiBEZWZhdWx0cyB0byAnZmlsZScuXG4gICAqL1xuICBmaWxlS2V5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZmlsZSBuYW1lIHRvIHVzZSB3aGVuIHNhdmluZyB0aGUgZmlsZSBvbiB0aGUgc2VydmVyLlxuICAgKiBEZWZhdWx0cyB0byAnaW1hZ2UuanBnJy5cbiAgICovXG4gIGZpbGVOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRUUCBtZXRob2QgdG8gdXNlIC0gZWl0aGVyIFBVVCBvciBQT1NULlxuICAgKiBEZWZhdWx0cyB0byBQT1NULlxuICAgKi9cbiAgaHR0cE1ldGhvZD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG1pbWUgdHlwZSBvZiB0aGUgZGF0YSB0byB1cGxvYWQuXG4gICAqIERlZmF1bHRzIHRvIGltYWdlL2pwZWcuXG4gICAqL1xuICBtaW1lVHlwZT86IHN0cmluZztcblxuICAvKipcbiAgICogQSBzZXQgb2Ygb3B0aW9uYWwga2V5L3ZhbHVlIHBhaXJzIHRvIHBhc3MgaW4gdGhlIEhUVFAgcmVxdWVzdC5cbiAgICovXG4gIHBhcmFtcz86IHsgW3M6IHN0cmluZ106IGFueSB9O1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHVwbG9hZCB0aGUgZGF0YSBpbiBjaHVua2VkIHN0cmVhbWluZyBtb2RlLlxuICAgKiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgY2h1bmtlZE1vZGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIG1hcCBvZiBoZWFkZXIgbmFtZS9oZWFkZXIgdmFsdWVzLiBVc2UgYW4gYXJyYXkgdG8gc3BlY2lmeSBtb3JlXG4gICAqIHRoYW4gb25lIHZhbHVlLiBPbiBpT1MsIEZpcmVPUywgYW5kIEFuZHJvaWQsIGlmIGEgaGVhZGVyIG5hbWVkXG4gICAqIENvbnRlbnQtVHlwZSBpcyBwcmVzZW50LCBtdWx0aXBhcnQgZm9ybSBkYXRhIHdpbGwgTk9UIGJlIHVzZWQuXG4gICAqL1xuICBoZWFkZXJzPzogeyBbczogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVVwbG9hZFJlc3VsdCB7XG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGJ5dGVzIHNlbnQgdG8gdGhlIHNlcnZlciBhcyBwYXJ0IG9mIHRoZSB1cGxvYWQuXG4gICAqL1xuICBieXRlc1NlbnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIEhUVFAgcmVzcG9uc2UgY29kZSByZXR1cm5lZCBieSB0aGUgc2VydmVyLlxuICAgKi9cbiAgcmVzcG9uc2VDb2RlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBIVFRQIHJlc3BvbnNlIHJldHVybmVkIGJ5IHRoZSBzZXJ2ZXIuXG4gICAqL1xuICByZXNwb25zZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRUUCByZXNwb25zZSBoZWFkZXJzIGJ5IHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBoZWFkZXJzOiB7IFtzOiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWxlVHJhbnNmZXJFcnJvciB7XG4gIC8qKlxuICAgKiBPbmUgb2YgdGhlIHByZWRlZmluZWQgZXJyb3IgY29kZXMgbGlzdGVkIGJlbG93LlxuICAgKi9cbiAgY29kZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gdGhlIHNvdXJjZS5cbiAgICovXG4gIHNvdXJjZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gdGhlIHRhcmdldC5cbiAgICovXG4gIHRhcmdldDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBIVFRQIHN0YXR1cyBjb2RlLiBUaGlzIGF0dHJpYnV0ZSBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIGEgcmVzcG9uc2VcbiAgICogY29kZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBIVFRQIGNvbm5lY3Rpb24uXG4gICAqL1xuICBodHRwX3N0YXR1czogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXNwb25zZSBib2R5LiBUaGlzIGF0dHJpYnV0ZSBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIGEgcmVzcG9uc2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgSFRUUCBjb25uZWN0aW9uLlxuICAgKi9cbiAgYm9keTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFaXRoZXIgZS5nZXRNZXNzYWdlIG9yIGUudG9TdHJpbmcuXG4gICAqL1xuICBleGNlcHRpb246IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBGaWxlIFRyYW5zZmVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gdXBsb2FkIGFuZCBkb3dubG9hZCBmaWxlcy5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlsZVRyYW5zZmVyLCBGaWxlVXBsb2FkT3B0aW9ucywgRmlsZVRyYW5zZmVyT2JqZWN0IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2ZpbGUtdHJhbnNmZXIvbmd4JztcbiAqIGltcG9ydCB7IEZpbGUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmlsZSc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlcjogRmlsZVRyYW5zZmVyLCBwcml2YXRlIGZpbGU6IEZpbGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0IGZpbGVUcmFuc2ZlcjogRmlsZVRyYW5zZmVyT2JqZWN0ID0gdGhpcy50cmFuc2Zlci5jcmVhdGUoKTtcbiAqXG4gKiAvLyBVcGxvYWQgYSBmaWxlOlxuICogZmlsZVRyYW5zZmVyLnVwbG9hZCguLikudGhlbiguLikuY2F0Y2goLi4pO1xuICpcbiAqIC8vIERvd25sb2FkIGEgZmlsZTpcbiAqIGZpbGVUcmFuc2Zlci5kb3dubG9hZCguLikudGhlbiguLikuY2F0Y2goLi4pO1xuICpcbiAqIC8vIEFib3J0IGFjdGl2ZSB0cmFuc2ZlcjpcbiAqIGZpbGVUcmFuc2Zlci5hYm9ydCgpO1xuICpcbiAqIC8vIGZ1bGwgZXhhbXBsZVxuICogdXBsb2FkKCkge1xuICogICBsZXQgb3B0aW9uczogRmlsZVVwbG9hZE9wdGlvbnMgPSB7XG4gKiAgICAgIGZpbGVLZXk6ICdmaWxlJyxcbiAqICAgICAgZmlsZU5hbWU6ICduYW1lLmpwZycsXG4gKiAgICAgIGhlYWRlcnM6IHt9XG4gKiAgICAgIC4uLi4uXG4gKiAgIH1cbiAqXG4gKiAgIGZpbGVUcmFuc2Zlci51cGxvYWQoJzxmaWxlIHBhdGg+JywgJzxhcGkgZW5kcG9pbnQ+Jywgb3B0aW9ucylcbiAqICAgIC50aGVuKChkYXRhKSA9PiB7XG4gKiAgICAgIC8vIHN1Y2Nlc3NcbiAqICAgIH0sIChlcnIpID0+IHtcbiAqICAgICAgLy8gZXJyb3JcbiAqICAgIH0pXG4gKiB9XG4gKlxuICogZG93bmxvYWQoKSB7XG4gKiAgIGNvbnN0IHVybCA9ICdodHRwOi8vd3d3LmV4YW1wbGUuY29tL2ZpbGUucGRmJztcbiAqICAgZmlsZVRyYW5zZmVyLmRvd25sb2FkKHVybCwgdGhpcy5maWxlLmRhdGFEaXJlY3RvcnkgKyAnZmlsZS5wZGYnKS50aGVuKChlbnRyeSkgPT4ge1xuICogICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZCBjb21wbGV0ZTogJyArIGVudHJ5LnRvVVJMKCkpO1xuICogICB9LCAoZXJyb3IpID0+IHtcbiAqICAgICAvLyBoYW5kbGUgZXJyb3JcbiAqICAgfSk7XG4gKiB9XG4gKlxuICogYGBgXG4gKlxuICogVG8gc3RvcmUgZmlsZXMgaW4gYSBkaWZmZXJlbnQvcHVibGljbHkgYWNjZXNzaWJsZSBkaXJlY3RvcnksIHBsZWFzZSByZWZlciB0byB0aGUgZm9sbG93aW5nIGxpbmtcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZmlsZSN3aGVyZS10by1zdG9yZS1maWxlc1xuICogQGludGVyZmFjZXNcbiAqIEZpbGVVcGxvYWRPcHRpb25zXG4gKiBGaWxlVXBsb2FkUmVzdWx0XG4gKiBGaWxlVHJhbnNmZXJFcnJvclxuICogQGNsYXNzZXNcbiAqIEZpbGVUcmFuc2Zlck9iamVjdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbGVUcmFuc2ZlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUtdHJhbnNmZXInLFxuICBwbHVnaW5SZWY6ICdGaWxlVHJhbnNmZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlLXRyYW5zZmVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnVWJ1bnR1JywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlVHJhbnNmZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBFcnJvciBjb2RlIHJlamVjdGVkIGZyb20gdXBsb2FkIHdpdGggRmlsZVRyYW5zZmVyRXJyb3JcbiAgICogRGVmaW5lZCBpbiBGaWxlVHJhbnNmZXJFcnJvci5cbiAgICogICAgICBGSUxFX05PVF9GT1VORF9FUlI6IDEgICBSZXR1cm4gd2hlbiBmaWxlIHdhcyBub3QgZm91bmRcbiAgICogICAgICBJTlZBTElEX1VSTF9FUlI6IDIsICAgICBSZXR1cm4gd2hlbiB1cmwgd2FzIGludmFsaWRcbiAgICogICAgICBDT05ORUNUSU9OX0VSUjogMywgICAgICBSZXR1cm4gb24gY29ubmVjdGlvbiBlcnJvclxuICAgKiAgICAgIEFCT1JUX0VSUjogNCwgICAgICAgICAgIFJldHVybiBvbiBhYm9ydGluZ1xuICAgKiAgICAgIE5PVF9NT0RJRklFRF9FUlI6IDUgICAgIFJldHVybiBvbiAnMzA0IE5vdCBNb2RpZmllZCcgSFRUUCByZXNwb25zZVxuICAgKlxuICAgKiBAZW51bSB7bnVtYmVyfVxuICAgKi9cbiAgRmlsZVRyYW5zZmVyRXJyb3JDb2RlID0ge1xuICAgIEZJTEVfTk9UX0ZPVU5EX0VSUjogMSxcbiAgICBJTlZBTElEX1VSTF9FUlI6IDIsXG4gICAgQ09OTkVDVElPTl9FUlI6IDMsXG4gICAgQUJPUlRfRVJSOiA0LFxuICAgIE5PVF9NT0RJRklFRF9FUlI6IDUsXG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgRmlsZVRyYW5zZmVyIG9iamVjdFxuICAgKlxuICAgKiBAcmV0dXJucyB7RmlsZVRyYW5zZmVyT2JqZWN0fVxuICAgKi9cbiAgY3JlYXRlKCk6IEZpbGVUcmFuc2Zlck9iamVjdCB7XG4gICAgcmV0dXJuIG5ldyBGaWxlVHJhbnNmZXJPYmplY3QoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUtdHJhbnNmZXInLFxuICBwbHVnaW5OYW1lOiAnRmlsZVRyYW5zZmVyJyxcbn0pXG5leHBvcnQgY2xhc3MgRmlsZVRyYW5zZmVyT2JqZWN0IHtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoRmlsZVRyYW5zZmVyLmdldFBsdWdpblJlZigpLCBudWxsLCBGaWxlVHJhbnNmZXIuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSBuZXcgKEZpbGVUcmFuc2Zlci5nZXRQbHVnaW4oKSkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBmaWxlIHRvIGEgc2VydmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVVybCAgRmlsZXN5c3RlbSBVUkwgcmVwcmVzZW50aW5nIHRoZSBmaWxlIG9uIHRoZSBkZXZpY2Ugb3IgYSBkYXRhIFVSSS4gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB0aGlzIGNhbiBhbHNvIGJlIHRoZSBmdWxsIHBhdGggb2YgdGhlIGZpbGUgb24gdGhlIGRldmljZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgVVJMIG9mIHRoZSBzZXJ2ZXIgdG8gcmVjZWl2ZSB0aGUgZmlsZSwgYXMgZW5jb2RlZCBieSBlbmNvZGVVUkkoKS5cbiAgICogQHBhcmFtIHtGaWxlVXBsb2FkT3B0aW9uc30gW29wdGlvbnNdICBPcHRpb25hbCBwYXJhbWV0ZXJzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt0cnVzdEFsbEhvc3RzXSAgT3B0aW9uYWwgcGFyYW1ldGVyLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgc2V0IHRvIHRydWUsIGl0IGFjY2VwdHMgYWxsIHNlY3VyaXR5IGNlcnRpZmljYXRlcy4gVGhpcyBpcyB1c2VmdWwgc2luY2UgQW5kcm9pZCByZWplY3RzIHNlbGYtc2lnbmVkIHNlY3VyaXR5IGNlcnRpZmljYXRlcy4gTm90IHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIHVzZS4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgYW5kIGlPUy5cbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZVVwbG9hZFJlc3VsdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBGaWxlVXBsb2FkUmVzdWx0IGFuZCByZWplY3RzIHdpdGggRmlsZVRyYW5zZmVyRXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gICAgZXJyb3JJbmRleDogMyxcbiAgfSlcbiAgdXBsb2FkKFxuICAgIGZpbGVVcmw6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zPzogRmlsZVVwbG9hZE9wdGlvbnMsXG4gICAgdHJ1c3RBbGxIb3N0cz86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxGaWxlVXBsb2FkUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERvd25sb2FkcyBhIGZpbGUgZnJvbSBzZXJ2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgIFVSTCBvZiB0aGUgc2VydmVyIHRvIGRvd25sb2FkIHRoZSBmaWxlLCBhcyBlbmNvZGVkIGJ5IGVuY29kZVVSSSgpLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0ICBGaWxlc3lzdGVtIHVybCByZXByZXNlbnRpbmcgdGhlIGZpbGUgb24gdGhlIGRldmljZS4gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB0aGlzIGNhbiBhbHNvIGJlIHRoZSBmdWxsIHBhdGggb2YgdGhlIGZpbGUgb24gdGhlIGRldmljZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBbdHJ1c3RBbGxIb3N0c10gIE9wdGlvbmFsIHBhcmFtZXRlciwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIHNldCB0byB0cnVlLCBpdCBhY2NlcHRzIGFsbCBzZWN1cml0eSBjZXJ0aWZpY2F0ZXMuIFRoaXMgaXMgdXNlZnVsIGJlY2F1c2UgQW5kcm9pZCByZWplY3RzIHNlbGYtc2lnbmVkIHNlY3VyaXR5IGNlcnRpZmljYXRlcy4gTm90IHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIHVzZS4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgYW5kIGlPUy5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtPcHRpb25hbF0gcGFyYW1ldGVycywgY3VycmVudGx5IG9ubHkgc3VwcG9ydHMgaGVhZGVycyAoc3VjaCBhcyBBdXRob3JpemF0aW9uIChCYXNpYyBBdXRoZW50aWNhdGlvbiksIGV0YykuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBGaWxlRW50cnkgb2JqZWN0LlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gIH0pXG4gIGRvd25sb2FkKHNvdXJjZTogc3RyaW5nLCB0YXJnZXQ6IHN0cmluZywgdHJ1c3RBbGxIb3N0cz86IGJvb2xlYW4sIG9wdGlvbnM/OiB7IFtzOiBzdHJpbmddOiBhbnkgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGxpc3RlbmVyIHRoYXQgZ2V0cyBjYWxsZWQgd2hlbmV2ZXIgYSBuZXcgY2h1bmsgb2YgZGF0YSBpcyB0cmFuc2ZlcnJlZC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgTGlzdGVuZXIgdGhhdCB0YWtlcyBhIHByb2dyZXNzIGV2ZW50LlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soeyBzeW5jOiB0cnVlIH0pXG4gIG9uUHJvZ3Jlc3MobGlzdGVuZXI6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gYW55KTogdm9pZCB7XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uub25wcm9ncmVzcyA9IGxpc3RlbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEFib3J0cyBhbiBpbi1wcm9ncmVzcyB0cmFuc2Zlci4gVGhlIG9uZXJyb3IgY2FsbGJhY2sgaXMgcGFzc2VkIGEgRmlsZVRyYW5zZmVyRXJyb3JcbiAgICogb2JqZWN0IHdoaWNoIGhhcyBhbiBlcnJvciBjb2RlIG9mIEZpbGVUcmFuc2ZlckVycm9yLkFCT1JUX0VSUi5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGFib3J0KCk6IHZvaWQge31cbn1cbiJdfQ==

/***/ }),

/***/ 65742:
/*!*********************************************************************!*\
  !*** ./src/app/pages/configuration/configuration-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationPageRoutingModule": () => (/* binding */ ConfigurationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _configuration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration.page */ 11531);




const routes = [
    {
        path: '',
        component: _configuration_page__WEBPACK_IMPORTED_MODULE_0__.ConfigurationPage
    }
];
let ConfigurationPageRoutingModule = class ConfigurationPageRoutingModule {
};
ConfigurationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfigurationPageRoutingModule);



/***/ }),

/***/ 28254:
/*!*************************************************************!*\
  !*** ./src/app/pages/configuration/configuration.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationPageModule": () => (/* binding */ ConfigurationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _configuration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration-routing.module */ 65742);
/* harmony import */ var _configuration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration.page */ 11531);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);









let ConfigurationPageModule = class ConfigurationPageModule {
};
ConfigurationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _configuration_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfigurationPageRoutingModule
        ],
        declarations: [_configuration_page__WEBPACK_IMPORTED_MODULE_1__.ConfigurationPage],
        providers: [
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_3__.Message,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL,
        ]
    })
], ConfigurationPageModule);



/***/ }),

/***/ 11531:
/*!***********************************************************!*\
  !*** ./src/app/pages/configuration/configuration.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationPage": () => (/* binding */ ConfigurationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_configuration_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./configuration.page.html */ 80739);
/* harmony import */ var _configuration_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration.page.scss */ 40621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/user-data */ 76401);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/file-transfer/ngx */ 50806);
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ 15855);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var _providers_report_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../providers/report.service */ 67119);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/email-composer/ngx */ 17265);
















let ConfigurationPage = class ConfigurationPage {
    constructor(navCtrl, commonSQL, menu, loadingCtrl, sqlitePorter, router, file, transfer, userData, message, http, androidPermissions, reportService, emailComposer, alertCtrl) {
        this.navCtrl = navCtrl;
        this.commonSQL = commonSQL;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.sqlitePorter = sqlitePorter;
        this.router = router;
        this.file = file;
        this.transfer = transfer;
        this.userData = userData;
        this.message = message;
        this.http = http;
        this.androidPermissions = androidPermissions;
        this.reportService = reportService;
        this.emailComposer = emailComposer;
        this.alertCtrl = alertCtrl;
        this.counter = 0;
        this.fileTransfer = this.transfer.create();
    }
    ngOnInit() {
        this.checkFilePermission();
    }
    checkFilePermission() {
        var me = this;
        me.androidPermissions.checkPermission(me.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(result => {
            if (!result.hasPermission) {
                // Asking permission to the user
                me.androidPermissions.requestPermissions([
                    me.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
                    me.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
                ]);
            }
        }, err => {
            alert(err);
        });
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(result => {
            if (!result.hasPermission) {
                // Asking permission to the user
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
                // this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
            }
        }, err => {
            alert(err);
        });
    }
    ionViewDidEnter() {
        console.log('configuration here');
        this.loadConfig();
    }
    loadConfig() {
        var me = this;
        me.commonSQL.getDataQuery("select * from tblMBILCompanyPreference").then(res => {
            if (res.length > 0) {
                me.data = JSON.parse(JSON.stringify(res[0]));
            }
        });
    }
    openPage(menu) {
        console.log(menu);
        this.navCtrl.navigateForward(menu);
    }
    refreshTable() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            me.counter = 0;
            const loading = yield this.loadingCtrl.create({
                message: 'Refreshing tables...',
                duration: 0,
                spinner: 'circles',
                backdropDismiss: true
            });
            const alert = yield this.alertCtrl.create({
                message: 'This will require the application to restart. Do you want to continue?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            loading.present();
                            me.backuptblMBILPDF(); //added 06.24.2021 (Kenneth)
                            me.commonSQL.wipeDB().then(() => {
                                me.commonSQL.DropAndCreate(null, true).then(res => {
                                    console.log(res);
                                    loading.dismiss();
                                    me.userData.clearStorage().then(() => {
                                        me.menu.enable(false);
                                        clearInterval(me.startDateInterval);
                                        return me.router.navigateByUrl('login');
                                    });
                                });
                            });
                        }
                    },
                    {
                        text: 'No',
                        handler: () => { }
                    }
                ]
            });
            yield alert.present();
        });
    }
    download() {
        var me = this;
        var _newPath = me.file.externalDataDirectory + "/download/test.json";
        // Download a file:
        me.fileTransfer.download(me.file.externalDataDirectory + "iRelyDB.json", _newPath).then((entry) => {
            console.log(entry);
        }, (error) => {
            console.log(error);
        });
    }
    backupTable() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            me.counter = 0;
            const loading = yield this.loadingCtrl.create({
                message: 'Processing...',
                duration: 0,
                spinner: 'circles',
                backdropDismiss: true
            });
            const alert_saved = yield this.alertCtrl.create({
                message: 'Back-up successfully saved.',
                buttons: [
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            const _alert = yield this.alertCtrl.create({
                message: 'Are you sure you want to back-up database?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            loading.present();
                            // var _newPath = me.file.externalDataDirectory +"iRelyDB.json";
                            // me.http.get(_newPath).subscribe(x=> {
                            //   console.log(x);
                            // },error=>{
                            //   console.log(error);
                            // });
                            // let email = {
                            //   to: 'max@mustermann.de',
                            //   cc: 'erika@mustermann.de',
                            //   bcc: ['john@doe.com', 'jane@doe.com'],
                            //   attachments: [
                            //     _newPath
                            //   ],
                            //   subject: 'Cordova Icons',
                            //   body: 'How are you? Nice greetings from Leipzig',
                            //   isHtml: true
                            // }
                            // // Send a text message using default options
                            // this.emailComposer.open(email);
                            // me.androidPermissions.checkPermission(me.androidPermissions.PERMISSION.MANAGE_EXTERNAL_STORAGE).then(result => {
                            //   if (!result.hasPermission) {
                            //     me.androidPermissions.requestPermission(me.androidPermissions.PERMISSION.MANAGE_EXTERNAL_STORAGE).then(result=>{
                            //       me.download();
                            //     });
                            //   }
                            //   else {
                            //     me.download();
                            //   }
                            // },
                            // err => {
                            //   alert(err);
                            // });
                            // me.file.copyFile(me.file.externalDataDirectory,"iRelyDB.json",_newPath,'iRelyDB.json').then((result)=>{
                            //   console.log(result);
                            //   loading.dismiss();
                            //   alert_saved.present();
                            // },(result)=>{
                            //   console.log(result);
                            //   loading.dismiss();
                            //   alert('failed');
                            // });
                            me.commonSQL.backupDB().then((data) => {
                                console.log(data);
                                var _DATA_FILE = data;
                                var _FINAL = new Blob([JSON.stringify(_DATA_FILE)], { type: 'application/json' });
                                me.file.createFile(me.file.externalDataDirectory, "iRelyDB.json", true).then(r => {
                                    console.log('iRelyDB.txt file created');
                                    me.file.writeFile(me.file.externalDataDirectory, "iRelyDB.json", _FINAL, { replace: true }).then(result => {
                                        console.log('Data successfully saved to iRelyDB.txt');
                                        loading.dismiss();
                                        alert_saved.present();
                                        // me.file.moveFile(me.file.externalDataDirectory,"iRelyDB.json",me.file.dataDirectory +"download/",'iRelyDB.json').then((result)=>{
                                        //   console.log(result);
                                        //   alert_saved.present();
                                        // },(result)=>{
                                        //   console.log(result);
                                        //   alert('failed');
                                        // });
                                        // // Download a file:
                                        // me.fileTransfer.download(me.file.externalDataDirectory+"iRelyDB.json",me.file.externalRootDirectory +"download/").then((entry) => {
                                        //   console.log('download complete: ' + entry.toURL());
                                        //   alert_saved.present();
                                        // }, (error) => {
                                        //   // handle error
                                        //   console.log(error);
                                        // });                  
                                    }, (result) => {
                                        console.log(result);
                                        loading.dismiss();
                                    });
                                }, (result) => {
                                    console.log(result);
                                    loading.dismiss();
                                });
                            });
                        }
                    },
                    {
                        text: 'No',
                        handler: () => { }
                    }
                ]
            });
            yield _alert.present();
        });
    }
    restoreTable() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            const loading = yield this.loadingCtrl.create({
                message: 'Restoring...',
                duration: 0,
                spinner: 'circles',
                backdropDismiss: true
            });
            const alert_restored = yield this.alertCtrl.create({
                message: 'Back-up successfully restored.',
                buttons: [
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            const _alert = yield this.alertCtrl.create({
                message: 'Are you sure you want to restore database?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            loading.present();
                            me.file.readAsBinaryString(me.file.externalDataDirectory, "iRelyDB.json").then(content => {
                                me.commonSQL.importDataFromServer(content).then(res => {
                                    loading.dismiss();
                                    alert_restored.present();
                                }).catch(err => {
                                    console.log('ERROR => ' + err);
                                    loading.dismiss();
                                });
                            })
                                .catch(err => {
                                console.log('ERROR => ' + err);
                                loading.dismiss();
                            });
                        }
                    },
                    {
                        text: 'No',
                        handler: () => { }
                    }
                ]
            });
            yield _alert.present();
        });
    }
    //added 06.24.2021 (Kenneth)
    backuptblMBILPDF() {
        console.log('Creating json file . . .');
        let me = this;
        me.commonSQL.getData("tblMBILPDF").then(data => {
            if (data.length > 0) {
                console.log('json data here . . .');
                console.log(JSON.stringify(data));
                console.log('path . . ');
                console.log(this.file.externalDataDirectory);
                me.file.checkFile(this.file.externalDataDirectory, "tblMBILPDF.json").then(result => {
                    console.log('File already exists! Trying to overwrite data.');
                    me.file.writeExistingFile(me.file.externalDataDirectory, "tblMBILPDF.json", data).then(result => {
                        console.log('Data successfully saved to tblMBILPDF.json!');
                        console.log(result);
                        console.log('Trying to read the data from json file. . .');
                        me.file.readAsText(me.file.externalDataDirectory, "tblMBILPDF.json").then(result => {
                            console.log(JSON.parse(result));
                            console.log('Successfully retrieve data from json file. . .');
                        });
                    });
                }).catch(err => {
                    console.log('file doesnt exists! Trying to create tblMBILPDF.json');
                    me.file.createFile(me.file.externalDataDirectory, "tblMBILPDF.json", false).then(r => {
                        console.log('tblMBILPDF.json file successfully created.');
                        console.log('Trying to save data to tblMBILPDF.json. . .');
                        me.file.writeExistingFile(me.file.externalDataDirectory, "tblMBILPDF.json", data).then(result => {
                            console.log('Data successfully saved to tblMBILPDF.json!');
                            console.log(result);
                            console.log('Trying to read the data from json file. . .');
                            me.file.readAsText(me.file.externalDataDirectory, "tblMBILPDF.json").then(result => {
                                console.log(JSON.parse(result));
                                console.log('Successfully retrieve data from json file. . .');
                            });
                        });
                    });
                });
            }
        });
        console.log('creating json file ended here. . .');
    }
};
ConfigurationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController },
    { type: _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_7__.SQLitePorter },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File },
    { type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__.FileTransfer },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__.UserData },
    { type: _framework_common_base_message__WEBPACK_IMPORTED_MODULE_4__.Message },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__.AndroidPermissions },
    { type: _providers_report_service__WEBPACK_IMPORTED_MODULE_9__.ReportService },
    { type: _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_10__.EmailComposer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController }
];
ConfigurationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-configuration',
        template: _raw_loader_configuration_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_configuration_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfigurationPage);



/***/ }),

/***/ 40621:
/*!*************************************************************!*\
  !*** ./src/app/pages/configuration/configuration.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWd1cmF0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 80739:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuration/configuration.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Configuration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-list>\n    <ion-list-header style=\"font-weight: bolder;\">\n      Defaults\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\"person\" item-start color=\"primary\"></ion-icon>\n      <ion-label style=\"padding-left: 10px;\">New Customer No</ion-label>\n      <ion-label style=\"text-align-last: end; font-weight: bolder;\">{{data.strDefaultCustomerNo}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"pin\" item-start color=\"primary\"></ion-icon>\n      <ion-label style=\"padding-left: 10px;\">New Site No</ion-label>  \n      <ion-label style=\"text-align-last: end; font-weight: bolder;\">{{data.strDefaultSiteNo}}</ion-label>\n    </ion-item>\n  </ion-list> -->\n  <ion-list>\n    <ion-list-header style=\"font-weight: bolder;\">\n      Settings\n    </ion-list-header>\n    <ion-item routerLink=\"/configuration-settings\">\n      <ion-icon name=\"build-outline\" item-start color=\"primary\"></ion-icon>\n      <ion-label style=\"padding-left: 10px;\">Device Setup</ion-label>\n      <ion-button ion-button size=\"large\"style=\"width: 300px !important\"item-end>Open</ion-button>\n    </ion-item>\n  </ion-list> \n  <ion-list>\n    <ion-list-header style=\"font-weight: bolder;\">\n      Data Tables\n    </ion-list-header>\n    <ion-item routerLink=\"/configuration-table-update\" >\n      <ion-icon name=\"cloud-download-outline\" item-start color=\"primary\"></ion-icon>\n      <ion-label style=\"padding-left: 10px;\">Update Tables</ion-label>\n      <ion-button ion-button size=\"large\"style=\"width: 300px !important\" item-end>Open</ion-button>\n    </ion-item>\n    <ion-item routerLink=\"/configuration-table-view\">\n      <ion-icon name=\"grid-outline\" item-start color=\"primary\"></ion-icon>\n      <ion-label style=\"padding-left: 10px;\">View Tables</ion-label>\n      <ion-button ion-button size=\"large\"style=\"width: 300px !important\" item-end>Open</ion-button>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"layers\" item-start color=\"primary\"></ion-icon>\n      <ion-label style=\"padding-left: 10px;\">Refresh Database</ion-label>\n      <ion-button ion-button size=\"large\"style=\"width: 300px !important\" (click)=\"refreshTable()\" item-end>Refresh</ion-button>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"archive-outline\" item-start color=\"primary\"></ion-icon>\n      <ion-label style=\"padding-left: 10px;\">Back-up Database</ion-label>\n      <ion-button ion-button size=\"large\"style=\"width: 300px !important\" (click)=\"backupTable()\" item-end>Back-up</ion-button>\n    </ion-item>\n    <!-- FOR DEBUGGING PURPOSES ONLY -->\n    <!-- <ion-item>\n      <ion-icon name=\"archive-outline\" item-start color=\"primary\"></ion-icon>\n      <ion-label style=\"padding-left: 10px;\">Restore Database</ion-label>\n      <ion-button ion-button size=\"large\"style=\"width: 300px !important\" (click)=\"restoreTable()\" item-end>Restore</ion-button>\n    </ion-item> -->\n  </ion-list> \n  <ion-list>\n    <ion-list-header style=\"font-weight: bolder;\">\n      LCR Connection\n    </ion-list-header>\n    <ion-item routerLink=\"/configuration-meter-device\">\n      <ion-icon name=\"speedometer-outline\" item-start color=\"primary\"></ion-icon>\n      <ion-label style=\"padding-left: 10px;\">Meter Devices</ion-label>\n      <ion-button ion-button size=\"large\"style=\"width: 300px !important\"item-end>Connect</ion-button>\n    </ion-item>\n  </ion-list> \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_configuration_configuration_module_ts.js.map