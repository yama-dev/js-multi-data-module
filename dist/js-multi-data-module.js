/*!
 * JS MULTI_DATA_MODULE (JavaScript Library)
 *   js-multi-data-module
 * Version 0.1.0
 * Repository https://github.com/yama-dev/js-multi-data-module
 * Copyright yama-dev
 * Licensed MIT
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.MULTI_DATA_MODULE=e():t.MULTI_DATA_MODULE=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){(function(e,n){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */var r;r=function(){"use strict";function t(t){return"function"==typeof t}var r=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=0,i=void 0,a=void 0,u=function(t,e){p[o]=t,p[o+1]=e,2===(o+=2)&&(a?a(d):w())},c="undefined"!=typeof window?window:void 0,s=c||{},l=s.MutationObserver||s.WebKitMutationObserver,f="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),_="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var t=setTimeout;return function(){return t(d,1)}}var p=new Array(1e3);function d(){for(var t=0;t<o;t+=2){(0,p[t])(p[t+1]),p[t]=void 0,p[t+1]=void 0}o=0}var v,y,m,b,w=void 0;function g(t,e){var n=this,r=new this.constructor(D);void 0===r[T]&&K(r);var o=n._state;if(o){var i=arguments[o-1];u(function(){return I(o,r,i,n._result)})}else F(n,r,t,e);return r}function A(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(D);return k(e,t),e}f?w=function(){return e.nextTick(d)}:l?(y=0,m=new l(d),b=document.createTextNode(""),m.observe(b,{characterData:!0}),w=function(){b.data=y=++y%2}):_?((v=new MessageChannel).port1.onmessage=d,w=function(){return v.port2.postMessage(0)}):w=void 0===c?function(){try{var t=Function("return this")().require("vertx");return void 0!==(i=t.runOnLoop||t.runOnContext)?function(){i(d)}:h()}catch(t){return h()}}():h();var T=Math.random().toString(36).substring(2);function D(){}var C=void 0,M=1,E=2,O={error:null};function x(t){try{return t.then}catch(t){return O.error=t,O}}function j(e,n,r){n.constructor===e.constructor&&r===g&&n.constructor.resolve===A?function(t,e){e._state===M?P(t,e._result):e._state===E?U(t,e._result):F(e,void 0,function(e){return k(t,e)},function(e){return U(t,e)})}(e,n):r===O?(U(e,O.error),O.error=null):void 0===r?P(e,n):t(r)?function(t,e,n){u(function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,function(n){r||(r=!0,e!==n?k(t,n):P(t,n))},function(e){r||(r=!0,U(t,e))},t._label);!r&&o&&(r=!0,U(t,o))},t)}(e,n,r):P(e,n)}function k(t,e){var n,r;t===e?U(t,new TypeError("You cannot resolve a promise with itself")):(r=typeof(n=e),null===n||"object"!==r&&"function"!==r?P(t,e):j(t,e,x(e)))}function L(t){t._onerror&&t._onerror(t._result),S(t)}function P(t,e){t._state===C&&(t._result=e,t._state=M,0!==t._subscribers.length&&u(S,t))}function U(t,e){t._state===C&&(t._state=E,t._result=e,u(L,t))}function F(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+M]=n,o[i+E]=r,0===i&&t._state&&u(S,t)}function S(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,a=0;a<e.length;a+=3)r=e[a],o=e[a+n],r?I(n,r,o,i):o(i);t._subscribers.length=0}}function I(e,n,r,o){var i=t(r),a=void 0,u=void 0,c=void 0,s=void 0;if(i){if((a=function(t,e){try{return t(e)}catch(t){return O.error=t,O}}(r,o))===O?(s=!0,u=a.error,a.error=null):c=!0,n===a)return void U(n,new TypeError("A promises callback cannot return that same promise."))}else a=o,c=!0;n._state!==C||(i&&c?k(n,a):s?U(n,u):e===M?P(n,a):e===E&&U(n,a))}var q=0;function K(t){t[T]=q++,t._state=void 0,t._result=void 0,t._subscribers=[]}var W=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(D),this.promise[T]||K(this.promise),r(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?P(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&P(this.promise,this._result))):U(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===C&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===A){var o=x(t);if(o===g&&t._state!==C)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===B){var i=new n(D);j(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===C&&(this._remaining--,t===E?U(r,n):this._result[e]=n),0===this._remaining&&P(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;F(t,void 0,function(t){return n._settledAt(M,e,t)},function(t){return n._settledAt(E,e,t)})},t}(),B=function(){function e(t){this[T]=q++,this._result=this._state=void 0,this._subscribers=[],D!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e(function(e){k(t,e)},function(e){U(t,e)})}catch(e){U(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this.constructor;return t(e)?this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})}):this.then(e,e)},e}();return B.prototype.then=g,B.all=function(t){return new W(this,t).promise},B.race=function(t){var e=this;return r(t)?new e(function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})},B.resolve=A,B.reject=function(t){var e=new this(D);return U(e,t),e},B._setScheduler=function(t){a=t},B._setAsap=function(t){u=t},B._asap=u,B.polyfill=function(){var t=void 0;if(void 0!==n)t=n;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=B},B.Promise=B,B},t.exports=r()}).call(this,n(2),n(3))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return MULTI_DATA_MODULE});var es6_promise__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),es6_promise__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_0__);function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}var MULTI_DATA_MODULE=function(){function MULTI_DATA_MODULE(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,MULTI_DATA_MODULE),this.Version="0.1.0",this.Config={elem:t.elem||null,data_type:t.data_type||null,data_list:t.data_list||null,order:t.order||"up",jsonpCallback:t.jsonpCallback||"callback",fetch_timeout:1e4},this.DataFix=[],t.on||(t.on={}),this.on={Complete:t.on.Complete||""},"jsonp"===this.Config.data_type&&this.GetDataJsonp(this.Config.data_list)}return _createClass(MULTI_DATA_MODULE,[{key:"GetDataJsonp",value:function GetDataJsonp(dataAry){var _this=this,count=0,countMax=dataAry.length,param_ramd=(new Date).getTime(),getDataFunc=function getDataFunc(){var promise=new es6_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function(t,e){var n=document.createElement("script");dataAry[count].url.match(/\?.*$/)?n.src="".concat(dataAry[count].url,"&callback=").concat(_this.Config.jsonpCallback,"&_=").concat(param_ramd):n.src="".concat(dataAry[count].url,"?callback=").concat(_this.Config.jsonpCallback,"&_=").concat(param_ramd),document.body.appendChild(n),window.callback=function(e){t(e)},setTimeout(function(){e("error")},_this.Config.fetch_timeout)});promise.then(function(data){var _data=eval("data."+dataAry[count].hierarchy),_func=null;dataAry[count].customFunction&&(_func=dataAry[count].customFunction);var _data_array=_data;_func&&(_data_array=_this.CreateData(_data,_func)),_data_array&&(_this.DataFix=_this.DataFix.concat(_data_array)),count++,count<countMax?getDataFunc():_this.OnComplete()}).catch(function(t){console.log(t)})};getDataFunc()}},{key:"CreateData",value:function(t,e){return e(t)}},{key:"OnComplete",value:function(){"up"===this.Config.order&&this.DataFix.sort(function(t,e){return t.date&&e.date?(t=new Date(t.date.replace(/\./g,"/")))<(e=new Date(e.date.replace(/\./g,"/")))?-1:t>e?1:0:0}),"down"===this.Config.order&&this.DataFix.sort(function(t,e){return t.date&&e.date?(t=new Date(t.date.replace(/\./g,"/")))<(e=new Date(e.date.replace(/\./g,"/")))?1:t>e?-1:0:0}),this.on.Complete&&"function"==typeof this.on.Complete&&this.on.Complete(this.DataFix)}}]),MULTI_DATA_MODULE}()},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var c,s=[],l=!1,f=-1;function _(){l&&c&&(l=!1,c.length?s=c.concat(s):f=-1,s.length&&h())}function h(){if(!l){var t=u(_);l=!0;for(var e=s.length;e;){for(c=s,s=[];++f<e;)c&&c[f].run();f=-1,e=s.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function d(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new p(t,e)),1!==s.length||l||u(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}]).default});