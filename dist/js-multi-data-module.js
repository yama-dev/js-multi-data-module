/*!
 * JS MULTI_DATA_MODULE (JavaScript Library)
 *   js-multi-data-module
 * Version 0.4.2
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
 */var r;r=function(){"use strict";function t(t){return"function"==typeof t}var r=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=0,i=void 0,a=void 0,s=function(t,e){d[o]=t,d[o+1]=e,2===(o+=2)&&(a?a(v):b())},u="undefined"!=typeof window?window:void 0,c=u||{},l=c.MutationObserver||c.WebKitMutationObserver,f="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){var t=setTimeout;return function(){return t(v,1)}}var d=new Array(1e3);function v(){for(var t=0;t<o;t+=2){(0,d[t])(d[t+1]),d[t]=void 0,d[t+1]=void 0}o=0}var y,m,_,g,b=void 0;function w(t,e){var n=this,r=new this.constructor(T);void 0===r[C]&&J(r);var o=n._state;if(o){var i=arguments[o-1];s(function(){return X(o,r,i,n._result)})}else S(n,r,t,e);return r}function D(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(T);return M(e,t),e}f?b=function(){return e.nextTick(v)}:l?(m=0,_=new l(v),g=document.createTextNode(""),_.observe(g,{characterData:!0}),b=function(){g.data=m=++m%2}):h?((y=new MessageChannel).port1.onmessage=v,b=function(){return y.port2.postMessage(0)}):b=void 0===u?function(){try{var t=Function("return this")().require("vertx");return void 0!==(i=t.runOnLoop||t.runOnContext)?function(){i(v)}:p()}catch(t){return p()}}():p();var C=Math.random().toString(36).substring(2);function T(){}var x=void 0,O=1,F=2,L={error:null};function j(t){try{return t.then}catch(t){return L.error=t,L}}function A(e,n,r){n.constructor===e.constructor&&r===w&&n.constructor.resolve===D?function(t,e){e._state===O?E(t,e._result):e._state===F?k(t,e._result):S(e,void 0,function(e){return M(t,e)},function(e){return k(t,e)})}(e,n):r===L?(k(e,L.error),L.error=null):void 0===r?E(e,n):t(r)?function(t,e,n){s(function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,function(n){r||(r=!0,e!==n?M(t,n):E(t,n))},function(e){r||(r=!0,k(t,e))},t._label);!r&&o&&(r=!0,k(t,o))},t)}(e,n,r):E(e,n)}function M(t,e){var n,r;t===e?k(t,new TypeError("You cannot resolve a promise with itself")):(r=typeof(n=e),null===n||"object"!==r&&"function"!==r?E(t,e):A(t,e,j(e)))}function P(t){t._onerror&&t._onerror(t._result),U(t)}function E(t,e){t._state===x&&(t._result=e,t._state=O,0!==t._subscribers.length&&s(U,t))}function k(t,e){t._state===x&&(t._state=F,t._result=e,s(P,t))}function S(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+O]=n,o[i+F]=r,0===i&&t._state&&s(U,t)}function U(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,a=0;a<e.length;a+=3)r=e[a],o=e[a+n],r?X(n,r,o,i):o(i);t._subscribers.length=0}}function X(e,n,r,o){var i=t(r),a=void 0,s=void 0,u=void 0,c=void 0;if(i){if((a=function(t,e){try{return t(e)}catch(t){return L.error=t,L}}(r,o))===L?(c=!0,s=a.error,a.error=null):u=!0,n===a)return void k(n,new TypeError("A promises callback cannot return that same promise."))}else a=o,u=!0;n._state!==x||(i&&u?M(n,a):c?k(n,s):e===O?E(n,a):e===F&&k(n,a))}var G=0;function J(t){t[C]=G++,t._state=void 0,t._result=void 0,t._subscribers=[]}var q=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(T),this.promise[C]||J(this.promise),r(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?E(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&E(this.promise,this._result))):k(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===x&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===D){var o=j(t);if(o===w&&t._state!==x)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===H){var i=new n(T);A(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===x&&(this._remaining--,t===F?k(r,n):this._result[e]=n),0===this._remaining&&E(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;S(t,void 0,function(t){return n._settledAt(O,e,t)},function(t){return n._settledAt(F,e,t)})},t}(),H=function(){function e(t){this[C]=G++,this._result=this._state=void 0,this._subscribers=[],T!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e(function(e){M(t,e)},function(e){k(t,e)})}catch(e){k(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this.constructor;return t(e)?this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})}):this.then(e,e)},e}();return H.prototype.then=w,H.all=function(t){return new q(this,t).promise},H.race=function(t){var e=this;return r(t)?new e(function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})},H.resolve=D,H.reject=function(t){var e=new this(T);return k(e,t),e},H._setScheduler=function(t){a=t},H._setAsap=function(t){s=t},H._asap=s,H.polyfill=function(){var t=void 0;if(void 0!==n)t=n;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=H},H.Promise=H,H},t.exports=r()}).call(this,n(2),n(3))},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return s});var r=n(0),o=n.n(r);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);if(!e.data_list||!Array.isArray(e.data_list)){try{throw new Error('Not config "data_list"')}catch(t){console.log(t.name+": "+t.message)}return!1}this.Config=i({data_type:"jsonp",data_list:null,order:"up",orderProperty:"date",filter:!1,jsonpCallback:"callback",fetch_timeout:1e4},e),this.Version="0.4.2",this.DataFix=[],this.DataList={},e.on||(e.on={}),this.On={Update:e.on.Update||"",Complete:e.on.Complete||""},"jsonp"===this.Config.data_type&&this.GetDataJsonp(this.Config.data_list),"json"===this.Config.data_type&&this.GetDataJson(this.Config.data_list),"html"!==this.Config.data_type&&"xml"!==this.Config.data_type||this.GetDataDocument(this.Config.data_list)}var e,n,r;return e=t,(n=[{key:"GetDataJsonp",value:function(t){var e=this,n=0,r=t.length,i=(new Date).getTime();!function a(){new o.a(function(r,o){var a=document.createElement("script");t[n].url.match(/\?.*$/)?a.src="".concat(t[n].url,"&callback=").concat(e.Config.jsonpCallback,"&_=").concat(i+n):a.src="".concat(t[n].url,"?callback=").concat(e.Config.jsonpCallback,"&_=").concat(i+n),document.body.appendChild(a),window.callback=function(t){r(t)},setTimeout(function(){o("error")},e.Config.fetch_timeout)}).then(function(o){var i=o;t[n].hierarchy.split(".").map(function(t){i=i[t]}),t[n].customFunction&&(i=e.CreateData(i,null,t[n].customFunction)),i&&(e.DataFix=e.DataFix.concat(i),e.DataList[n]=i),e.OnUpdate(e.DataList[n]),++n<r?a():e.FormatData()}).catch(function(t){console.log(t),e.DataFix=e.DataFix.concat([]),e.DataList[n]=[],e.OnUpdate(e.DataList[n]),++n<r?a():e.FormatData()})}()}},{key:"GetDataJson",value:function(t){var e=this,n=0,r=t.length,i=(new Date).getTime();!function a(){new o.a(function(r,o){var a=new XMLHttpRequest;a.onreadystatechange=function(){4===a.readyState&&200==a.status&&r(JSON.parse(a.responseText))};var s="";s=t[n].url.match(/\?.*$/)?"".concat(t[n].url,"&_=").concat(i+n):"".concat(t[n].url,"?_=").concat(i+n),a.onload=function(){},a.open("GET",s,!0),a.send(null),setTimeout(function(){o("error")},e.Config.fetch_timeout)}).then(function(o){var i=o;t[n].hierarchy.split(".").map(function(t){i=i[t]}),t[n].customFunction&&(i=e.CreateData(i,null,t[n].customFunction)),i&&(e.DataFix=e.DataFix.concat(i),e.DataList[n]=i),e.OnUpdate(e.DataList[n]),++n<r?a():e.FormatData()}).catch(function(t){console.log(t),e.DataFix=e.DataFix.concat([]),e.DataList[n]=[],e.OnUpdate(e.DataList[n]),++n<r?a():e.FormatData()})}()}},{key:"GetDataDocument",value:function(t){var e=this,n=this,r=0,i=t.length,a=(new Date).getTime();!function s(){new o.a(function(o,i){var s=new XMLHttpRequest;s.onreadystatechange=function(){var t,e;4===s.readyState&&200==s.status&&("html"===n.Config.data_type&&(t={html:s.responseXML.body.innerHTML,title:s.responseXML.title,head:s.responseXML.head,body:s.responseXML.body},e=s.responseXML.body),"xml"===n.Config.data_type&&(t={html:s.responseXML,title:null,head:null,body:s.responseXML},e=s.responseXML),o([e,t]))};var u="";u=t[r].url.match(/\?.*$/)?"".concat(t[r].url,"&_=").concat(a+r):"".concat(t[r].url,"?_=").concat(a+r),s.onload=function(){},s.open("GET",u,!0),s.responseType="document",s.send(null),setTimeout(function(){i("error")},e.Config.fetch_timeout)}).then(function(n){var o=n[0],a=n[1];t[r].customFunction&&(o=e.CreateData(o,a,t[r].customFunction)),o&&(e.DataFix=e.DataFix.concat(o),e.DataList[r]=o),e.OnUpdate(e.DataList[r]),++r<i?s():e.FormatData()}).catch(function(t){console.log(t),e.DataFix=e.DataFix.concat([]),e.DataList[r]=[],e.OnUpdate(e.DataList[r]),++r<i?s():e.FormatData()})}()}},{key:"CreateData",value:function(t,e,n){return void 0!==e?n(t,e):n(t)}},{key:"FormatData",value:function(){var t=this;if(!Array.isArray(this.DataFix))return this.OnComplete(),!1;if(this.Config.filter){var e=[];this.DataFix.map(function(n){n[t.Config.orderProperty]&&e.push(n)}),this.DataFix=e}"up"===this.Config.order&&this.DataFix.sort(function(e,n){return e[t.Config.orderProperty]?n[t.Config.orderProperty]?(e=new Date(e[t.Config.orderProperty].replace(/\./g,"/")))<(n=new Date(n[t.Config.orderProperty].replace(/\./g,"/")))?-1:e>n?1:0:-1:1}),"down"===this.Config.order&&this.DataFix.sort(function(e,n){return e[t.Config.orderProperty]?n[t.Config.orderProperty]?(e=new Date(e[t.Config.orderProperty].replace(/\./g,"/")))<(n=new Date(n[t.Config.orderProperty].replace(/\./g,"/")))?1:e>n?-1:0:-1:1}),this.OnComplete()}},{key:"OnUpdate",value:function(t){this.On.Update&&"function"==typeof this.On.Update&&this.On.Update(t)}},{key:"OnComplete",value:function(){this.On.Complete&&"function"==typeof this.On.Complete&&this.On.Complete(this.DataFix,this.DataList)}}])&&a(e.prototype,n),r&&a(e,r),t}()},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var u,c=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!l){var t=s(h);l=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||l||s(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}]).default});