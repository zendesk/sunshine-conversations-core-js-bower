(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SmoochCore = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}exports.__esModule=!0,exports.AppUsersApi=void 0;var _base=require("./base"),_appUsersStripe=require("./appUsersStripe"),AppUsersApi=exports.AppUsersApi=function(e){function t(){_classCallCheck(this,t);for(var r=arguments.length,s=Array(r),n=0;r>n;n++)s[n]=arguments[n];var i=_possibleConstructorReturn(this,e.call.apply(e,[this].concat(s)));return i.stripe=new(Function.prototype.bind.apply(_appUsersStripe.AppUsersStripeApi,[null].concat(s))),i}return _inherits(t,e),t.prototype.init=function(e){var t=this.getFullURL("init");return this.request("POST",t,e)},t.prototype.create=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if(!e||!e.trim())return Promise.reject(new Error("Must provide a userId."));var r=Object.assign({userId:e},t);if(t.signedUpAt&&!(t.signedUpAt instanceof Date))return Promise.reject(new Error("signedUpAt must be a date."));var s=this.getFullURL("appusers");return this.request("POST",s,r,{allowedAuth:["jwt"]})},t.prototype.get=function(e){var t=this.getFullURL("appusers",e);return this.request("GET",t)},t.prototype.update=function(e,t){var r=this.getFullURL("appusers",e);return this.request("PUT",r,t)},t.prototype.trackEvent=function(e,t){var r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],s=this.getFullURL("appusers",e,"events");return this.request("POST",s,{name:t,appUser:r})},t.prototype.updatePushToken=function(e,t,r){var s=this.getFullURL("appusers",e,"pushToken");return this.request("POST",s,{deviceId:t,token:r})},t.prototype.updateDevice=function(e,t,r){var s=this.getFullURL("appusers",e,"devices",t);return this.request("PUT",s,r)},t}(_base.BaseApi);

},{"./appUsersStripe":2,"./base":3}],2:[function(require,module,exports){
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}exports.__esModule=!0,exports.AppUsersStripeApi=void 0;var _base=require("./base"),AppUsersStripeApi=exports.AppUsersStripeApi=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,e.apply(this,arguments))}return _inherits(t,e),t.prototype.updateCustomer=function(e,t){if(!t)return Promise.reject(new Error("Must provide a Stripe token."));var r=this.getFullURL("appUsers",e,"stripe","customer");return this.request("POST",r,{token:t},{allowedAuth:["jwt"]})},t.prototype.createTransaction=function(e,t,r){if(!t)return Promise.reject(new Error("Must provide an action id."));var o=this.getFullURL("appUsers",e,"stripe","transaction"),n={actionId:t};return r&&Object.assign(n,{token:r}),this.request("POST",o,n)},t}(_base.BaseApi);

},{"./base":3}],3:[function(require,module,exports){
"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}exports.__esModule=!0,exports.BaseApi=void 0;var _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},_http=require("../utils/http"),BaseApi=exports.BaseApi=function(){function t(e,r,n){_classCallCheck(this,t),this.serviceUrl=e,this.authHeaders=r,this.headers=n,this.allowedAuth=["jwt","appToken"]}return t.prototype.getFullURL=function(){for(var t=arguments.length,e=Array(t),r=0;t>r;r++)e[r]=arguments[r];var n=e.map(function(t){return encodeURIComponent(t)});return _http.urljoin.apply(void 0,[this.serviceUrl].concat(n))},t.prototype.validateAuthHeaders=function(){var t=arguments.length<=0||void 0===arguments[0]?this.allowedAuth:arguments[0];if(!t||0===t.length)return Promise.reject(new Error("Must at least provide one authentication method."));if(!this.authHeaders)return Promise.reject(new Error("Must provide headers."));var e=t.indexOf("jwt")>=0,r=t.indexOf("appToken")>=0,n=!!this.authHeaders.Authorization,o=!!this.authHeaders["app-token"];return!e&&n?Promise.reject(new Error("Must not use JWT for authentication.")):!r&&o?Promise.reject(new Error("Must not use an app token for authentication.")):Promise.resolve()},t.prototype.request=function(t,e,r){var n=this,o=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],a=o.allowedAuth,s=void 0===a?this.allowedAuth:a;return this.validateAuthHeaders(s).then(function(){return(0,_http.http)(t,e,r,n.getHeaders())})},t.prototype.getHeaders=function(){return _extends({},this.headers,this.authHeaders)},t}();
},{"../utils/http":8}],4:[function(require,module,exports){
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}exports.__esModule=!0,exports.ConversationsApi=void 0;var _base=require("./base"),ConversationsApi=exports.ConversationsApi=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,e.apply(this,arguments))}return _inherits(t,e),t.prototype.get=function(e){var t=this.getFullURL("appUsers",e,"conversation");return this.request("GET",t)},t.prototype.postPostback=function(e,t){if(!t)return Promise.reject(new Error("Must provide an action id."));var r=this.getFullURL("appUsers",e,"conversation","postback"),o={actionId:t};return this.request("POST",r,o)},t.prototype.sendMessage=function(e,t){var r=this.getFullURL("appUsers",e,"conversation","messages");return this.request("POST",r,t)},t.prototype.uploadImage=function(e,t){var r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],o=this.getFullURL("appUsers",e,"conversation","images"),n=new FormData;return n.append("source",t),Object.keys(r).forEach(function(e){n.append(e,r[e])}),this.request("POST",o,n)},t.prototype.resetUnreadCount=function(e){var t=this.getFullURL("appUsers",e,"conversation","read");return this.request("POST",t)},t}(_base.BaseApi);

},{"./base":3}],5:[function(require,module,exports){
"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}exports.__esModule=!0,exports.StripeApi=void 0;var _base=require("./base"),_http=require("../utils/http"),StripeApi=exports.StripeApi=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,t.apply(this,arguments))}return _inherits(e,t),e.prototype.getAccount=function(){var t=this.getFullURL("stripe","account");return this.request("GET",t)},e}(_base.BaseApi);

},{"../utils/http":8,"./base":3}],6:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}exports.__esModule=!0,exports.Smooch=exports.SERVICE_URL=void 0;var _auth=require("./utils/auth"),_appUsers=require("./api/appUsers"),_conversations=require("./api/conversations"),_stripe=require("./api/stripe"),_package=require("../package.json"),_package2=_interopRequireDefault(_package),SERVICE_URL=exports.SERVICE_URL="https://api.smooch.io/v1",Smooch=exports.Smooch=function e(){var s=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];_classCallCheck(this,e);var t=r.serviceUrl,i=void 0===t?SERVICE_URL:t,a=r.headers,o=void 0===a?{}:a;if(this.VERSION=_package2["default"].version,this.serviceUrl=i,s.keyId||s.secret)throw new Error("Key Id or Secret should not be used on the browser side. You must generate a JWT beforehand.");this.headers=o,this.authHeaders=(0,_auth.getAuthenticationHeaders)(s),this.appUsers=new _appUsers.AppUsersApi(this.serviceUrl,this.authHeaders,this.headers),this.conversations=new _conversations.ConversationsApi(this.serviceUrl,this.authHeaders,this.headers),this.stripe=new _stripe.StripeApi(this.serviceUrl,this.authHeaders,this.headers),this.utils={}};
},{"../package.json":12,"./api/appUsers":1,"./api/conversations":4,"./api/stripe":5,"./utils/auth":7}],7:[function(require,module,exports){
"use strict";function getAuthenticationHeaders(t){if(!t)throw new Error("Must provide authentication information.");if(t.jwt)return{Authorization:"Bearer "+t.jwt};if(t.appToken)return{"app-token":t.appToken};throw new Error("Must provide a JWT or a app token")}exports.__esModule=!0,exports.getAuthenticationHeaders=getAuthenticationHeaders;

},{}],8:[function(require,module,exports){
(function (process){
"use strict";function stringifyGETParams(e,t){var n="";for(var r in Object.keys(t))null!==t[r]&&(n+="&"+encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return n&&(e+=(~e.indexOf("?")?"&":"?")+n.substring(1)),e}function handleStatus(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function handleBody(e){if(202===e.status||204===e.status)return Promise.resolve();var t=e.headers.get("Content-Type")||"",n=t.indexOf("application/json")>-1;return n?e.json():Promise.resolve()}function http(e,t,n){var r=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];e=e.toUpperCase();var o={method:e,headers:Object.assign({Accept:"application/json","Content-Type":"application/json"},r)};return n&&(n instanceof FormData?(o.body=n,delete o.headers["Content-Type"]):(n=Object.assign({},n),"GET"===e?t=stringifyGETParams(t,n):"POST"!==e&&"PUT"!==e||(o.body=JSON.stringify(n)))),fetch(t,o).then(handleStatus).then(handleBody)}function urljoin(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return t.map(function(e){return e.replace(/\/$/,"")}).join("/")}exports.__esModule=!0,exports.stringifyGETParams=stringifyGETParams,exports.handleStatus=handleStatus,exports.handleBody=handleBody,exports.http=http,exports.urljoin=urljoin,"undefined"!=typeof process&&require("isomorphic-fetch");

}).call(this,require('_process'))
},{"_process":10,"isomorphic-fetch":9}],9:[function(require,module,exports){
require("whatwg-fetch"),module.exports=self.fetch.bind(self);
},{"whatwg-fetch":11}],10:[function(require,module,exports){
function cleanUpNextTick(){draining&&currentQueue&&(draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue())}function drainQueue(){if(!draining){var e=setTimeout(cleanUpNextTick);draining=!0;for(var n=queue.length;n;){for(currentQueue=queue,queue=[];++queueIndex<n;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,n=queue.length}currentQueue=null,draining=!1,clearTimeout(e)}}function Item(e,n){this.fun=e,this.array=n}function noop(){}var process=module.exports={},queue=[],draining=!1,currentQueue,queueIndex=-1;process.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)n[r-1]=arguments[r];queue.push(new Item(e,n)),1!==queue.length||draining||setTimeout(drainQueue,0)},Item.prototype.run=function(){this.fun.apply(null,this.array)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.binding=function(e){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(e){throw new Error("process.chdir is not supported")},process.umask=function(){return 0};
},{}],11:[function(require,module,exports){
!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function o(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return y.iterable&&(e[Symbol.iterator]=function(){return e}),e}function n(t){this.map={},t instanceof n?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function s(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function i(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function a(t){var e=new FileReader;return e.readAsArrayBuffer(t),i(e)}function h(t){var e=new FileReader;return e.readAsText(t),i(e)}function u(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,"string"==typeof t)this._bodyText=t;else if(y.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(y.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(y.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(t){if(!y.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):y.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},y.blob?(this.blob=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(a)},this.text=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return h(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var t=s(this);return t?t:Promise.resolve(this._bodyText)},y.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function f(t){var e=t.toUpperCase();return b.indexOf(e)>-1?e:t}function d(t,e){e=e||{};var r=e.body;if(d.prototype.isPrototypeOf(t)){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new n(t.headers)),this.method=t.method,this.mode=t.mode,r||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=t;if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new n(e.headers)),this.method=f(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function p(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function c(t){var e=new n,r=(t.getAllResponseHeaders()||"").trim().split("\n");return r.forEach(function(t){var r=t.trim().split(":"),o=r.shift().trim(),n=r.join(":").trim();e.append(o,n)}),e}function l(t,e){e||(e={}),this.type="default",this.status=e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText,this.headers=e.headers instanceof n?e.headers:new n(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var y={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};n.prototype.append=function(t,o){t=e(t),o=r(o);var n=this.map[t];n||(n=[],this.map[t]=n),n.push(o)},n.prototype["delete"]=function(t){delete this.map[e(t)]},n.prototype.get=function(t){var r=this.map[e(t)];return r?r[0]:null},n.prototype.getAll=function(t){return this.map[e(t)]||[]},n.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},n.prototype.set=function(t,o){this.map[e(t)]=[r(o)]},n.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(r){this.map[r].forEach(function(o){t.call(e,o,r,this)},this)},this)},n.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),o(t)},n.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),o(t)},n.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),o(t)},y.iterable&&(n.prototype[Symbol.iterator]=n.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this)},u.call(d.prototype),u.call(l.prototype),l.prototype.clone=function(){return new l(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new n(this.headers),url:this.url})},l.error=function(){var t=new l(null,{status:0,statusText:""});return t.type="error",t};var m=[301,302,303,307,308];l.redirect=function(t,e){if(-1===m.indexOf(e))throw new RangeError("Invalid status code");return new l(null,{status:e,headers:{location:t}})},t.Headers=n,t.Request=d,t.Response=l,t.fetch=function(t,e){return new Promise(function(r,o){function n(){return"responseURL"in i?i.responseURL:/^X-Request-URL:/m.test(i.getAllResponseHeaders())?i.getResponseHeader("X-Request-URL"):void 0}var s;s=d.prototype.isPrototypeOf(t)&&!e?t:new d(t,e);var i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:c(i),url:n()},e="response"in i?i.response:i.responseText;r(new l(e,t))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.open(s.method,s.url,!0),"include"===s.credentials&&(i.withCredentials=!0),"responseType"in i&&y.blob&&(i.responseType="blob"),s.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send("undefined"==typeof s._bodyInit?null:s._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this);
},{}],12:[function(require,module,exports){
module.exports={
  "name": "smooch-core",
  "version": "1.3.0",
  "description": "Javascript wrapper for Smooch API",
  "homepage": "https://smooch.io",
  "main": "lib/wrappers/node.js",
  "browser": "lib/wrappers/browser.js",
  "scripts": {
    "test": "mocha --compilers js:babel-core/register --require ./test-setup.js ./tests/**/*.spec.js",
    "test-ci": "MOCHA_FILE=$CIRCLE_TEST_REPORTS/test-results.xml mocha --compilers js:babel-core/register -R mocha-junit-reporter --require ./test-setup.js ./tests/**/*.spec.js",
    "build": "mkdir -p lib && rm -rf lib/* && babel -d lib/ src/ && npm run browserify:dist",
    "browserify:dev": "mkdir -p amd && browserify -g uglifyify -e lib/smooch.js -s SmoochCore -o amd/smooch-core.js",
    "browserify:dist": "npm run browserify:dev && uglifyjs amd/smooch-core.js -c -o amd/smooch-core.min.js --screw-ie8",
    "release": "release",
    "lint": "eslint . --ext=js --ext=jsx"
  },
  "author": "Marc-Antoine Lemieux",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git@github.com:smooch/smooch-core-js.git"
  },
  "devDependencies": {
    "babel": "6.5.2",
    "babel-cli": "6.9.0",
    "babel-core": "6.9.0",
    "babel-eslint": "6.0.4",
    "babel-preset-es2015": "6.9.0",
    "babel-preset-es2015-loose": "7.0.0",
    "babel-preset-stage-2": "6.5.0",
    "browserify": "12.0.1",
    "chai": "3.4.1",
    "esformatter": "0.9.2",
    "esformatter-braces": "1.2.1",
    "esformatter-dot-notation": "1.3.1",
    "esformatter-quotes": "1.0.3",
    "eslint": "2.3.0",
    "estraverse-fb": "1.3.1",
    "mocha": "2.3.3",
    "mocha-junit-reporter": "1.9.0",
    "release-script": "0.5.4",
    "should": "7.1.1",
    "sinon": "1.17.2",
    "sinon-chai": "2.8.0",
    "streamifier": "0.1.1",
    "uglifyify": "3.0.1",
    "uglifyjs": "2.4.10"
  },
  "dependencies": {
    "form-data": "0.2.0",
    "isomorphic-fetch": "2.2.0",
    "jsonwebtoken": "5.4.1"
  },
  "release-script": {
    "bowerRepo": "git@github.com:smooch/smooch-core-js-bower.git"
  }
}

},{}]},{},[6])(6)
});