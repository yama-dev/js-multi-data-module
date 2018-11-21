!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){(function(e,n){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */
!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){return"function"==typeof t}var r=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=0,i=void 0,a=void 0,u=function(t,e){p[o]=t,p[o+1]=e,2===(o+=2)&&(a?a(d):v())};var s="undefined"!=typeof window?window:void 0,c=s||{},l=c.MutationObserver||c.WebKitMutationObserver,f="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),_="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var t=setTimeout;return function(){return t(d,1)}}var p=new Array(1e3);function d(){for(var t=0;t<o;t+=2){(0,p[t])(p[t+1]),p[t]=void 0,p[t+1]=void 0}o=0}var v=void 0;function y(t,e){var n=this,r=new this.constructor(w);void 0===r[b]&&F(r);var o=n._state;if(o){var i=arguments[o-1];u(function(){return U(o,r,i,n._result)})}else k(n,r,t,e);return r}function m(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(w);return E(e,t),e}v=f?function(){return e.nextTick(d)}:l?function(){var t=0,e=new l(d),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():_?function(){var t=new MessageChannel;return t.port1.onmessage=d,function(){return t.port2.postMessage(0)}}():void 0===s?function(){try{var t=Function("return this")().require("vertx");return void 0!==(i=t.runOnLoop||t.runOnContext)?function(){i(d)}:h()}catch(t){return h()}}():h();var b=Math.random().toString(36).substring(2);function w(){}var g=void 0,T=1,A=2,D={error:null};function C(t){try{return t.then}catch(t){return D.error=t,D}}function M(e,n,r){n.constructor===e.constructor&&r===y&&n.constructor.resolve===m?function(t,e){e._state===T?x(t,e._result):e._state===A?j(t,e._result):k(e,void 0,function(e){return E(t,e)},function(e){return j(t,e)})}(e,n):r===D?(j(e,D.error),D.error=null):void 0===r?x(e,n):t(r)?function(t,e,n){u(function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,function(n){r||(r=!0,e!==n?E(t,n):x(t,n))},function(e){r||(r=!0,j(t,e))},t._label);!r&&o&&(r=!0,j(t,o))},t)}(e,n,r):x(e,n)}function E(t,e){t===e?j(t,new TypeError("You cannot resolve a promise with itself")):!function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}(e)?x(t,e):M(t,e,C(e))}function O(t){t._onerror&&t._onerror(t._result),L(t)}function x(t,e){t._state===g&&(t._result=e,t._state=T,0!==t._subscribers.length&&u(L,t))}function j(t,e){t._state===g&&(t._state=A,t._result=e,u(O,t))}function k(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+T]=n,o[i+A]=r,0===i&&t._state&&u(L,t)}function L(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,a=0;a<e.length;a+=3)r=e[a],o=e[a+n],r?U(n,r,o,i):o(i);t._subscribers.length=0}}function U(e,n,r,o){var i=t(r),a=void 0,u=void 0,s=void 0,c=void 0;if(i){if((a=function(t,e){try{return t(e)}catch(t){return D.error=t,D}}(r,o))===D?(c=!0,u=a.error,a.error=null):s=!0,n===a)return void j(n,new TypeError("A promises callback cannot return that same promise."))}else a=o,s=!0;n._state!==g||(i&&s?E(n,a):c?j(n,u):e===T?x(n,a):e===A&&j(n,a))}var P=0;function F(t){t[b]=P++,t._state=void 0,t._result=void 0,t._subscribers=[]}var S=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(w),this.promise[b]||F(this.promise),r(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?x(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&x(this.promise,this._result))):j(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===g&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===m){var o=C(t);if(o===y&&t._state!==g)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===I){var i=new n(w);M(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===g&&(this._remaining--,t===A?j(r,n):this._result[e]=n),0===this._remaining&&x(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;k(t,void 0,function(t){return n._settledAt(T,e,t)},function(t){return n._settledAt(A,e,t)})},t}();var I=function(){function t(e){this[b]=P++,this._result=this._state=void 0,this._subscribers=[],w!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(t,e){try{e(function(e){E(t,e)},function(e){j(t,e)})}catch(e){j(t,e)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})},t}();return I.prototype.then=y,I.all=function(t){return new S(this,t).promise},I.race=function(t){var e=this;return r(t)?new e(function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})},I.resolve=m,I.reject=function(t){var e=new this(w);return j(e,t),e},I._setScheduler=function(t){a=t},I._setAsap=function(t){u=t},I._asap=u,I.polyfill=function(){var t=void 0;if(void 0!==n)t=n;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=I},I.Promise=I,I})}).call(this,n(2),n(3))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"MULTI_DATA_MODULE",function(){return MULTI_DATA_MODULE});var es6_promise__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),es6_promise__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_0__),_createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
/*!
 * JS MULTI_DATA_MODULE (JavaScript Library)
 *   js-multi-data-module.js
 * Version 0.0.5
 * Repository https://github.com/yama-dev/js-multi-data-module
 * Author yama-dev
 * Licensed under the MIT license.
 */var MULTI_DATA_MODULE=function(){function MULTI_DATA_MODULE(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,MULTI_DATA_MODULE),this.Version="0.0.5",this.CurrentUrl=location.href,this.Config={elem:t.elem||null,data_type:t.data_type||null,data_list:t.data_list||null,order:t.order||"up",jsonpCallback:t.jsonpCallback||"callback",fetch_timeout:1e4},this.DataFix=[],t.on||(t.on={}),this.on={Complete:t.on.Complete||""},-1===this.CurrentUrl.search(/localhost/)&&-1===this.CurrentUrl.search(/192.168/)||this.DebugMode(),"jsonp"===this.Config.data_type&&this.GetDataJsonp(this.Config.data_list)}return _createClass(MULTI_DATA_MODULE,[{key:"DebugMode",value:function(){console.log(this)}},{key:"GetDataJsonp",value:function GetDataJsonp(dataAry){var _this=this,count=0,countMax=dataAry.length,param_ramd=(new Date).getTime(),getDataFunc=function getDataFunc(){var promise=new es6_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function(t,e){var n=document.createElement("script");dataAry[count].url.match(/\?.*$/)?n.src=dataAry[count].url+"&callback="+_this.Config.jsonpCallback+"&_="+param_ramd:n.src=dataAry[count].url+"?callback="+_this.Config.jsonpCallback+"&_="+param_ramd,document.body.appendChild(n),window.callback=function(e){t(e)},setTimeout(function(){e("error")},_this.Config.fetch_timeout)});promise.then(function(data){var _data=eval("data."+dataAry[count].hierarchy),_func=dataAry[count].customFunction,_data_array=_this.CreateData(_data,_func);_data_array&&(_this.DataFix=_this.DataFix.concat(_data_array)),count++,count<countMax?getDataFunc():_this.OnComplete()}).catch(function(t){console.log(t)})};getDataFunc()}},{key:"CreateData",value:function(t,e){return e(t)}},{key:"OnComplete",value:function(){"up"===this.Config.order&&this.DataFix.sort(function(t,e){return(t=new Date(t.date.replace(/\./g,"/")))<(e=new Date(e.date.replace(/\./g,"/")))?-1:t>e?1:0}),"down"===this.Config.order&&this.DataFix.sort(function(t,e){return(t=new Date(t.date.replace(/\./g,"/")))<(e=new Date(e.date.replace(/\./g,"/")))?1:t>e?-1:0}),this.on.Complete&&"function"==typeof this.on.Complete&&this.on.Complete(this.DataFix)}}]),MULTI_DATA_MODULE}()},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var s,c=[],l=!1,f=-1;function _(){l&&s&&(l=!1,s.length?c=s.concat(c):f=-1,c.length&&h())}function h(){if(!l){var t=u(_);l=!0;for(var e=c.length;e;){for(s=c,c=[];++f<e;)s&&s[f].run();f=-1,e=c.length}s=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function d(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new p(t,e)),1!==c.length||l||u(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}])});