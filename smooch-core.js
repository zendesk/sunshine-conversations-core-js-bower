(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SmoochCore = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppUsersAPI=void 0;var _classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=require("babel-runtime/helpers/inherits"),_inherits3=_interopRequireDefault(_inherits2),_base=require("./base"),_http=require("../utils/http"),AppUsersAPI=exports.AppUsersAPI=function(e){function t(){return(0,_classCallCheck3["default"])(this,t),(0,_possibleConstructorReturn3["default"])(this,Object.getPrototypeOf(t).apply(this,arguments))}return(0,_inherits3["default"])(t,e),(0,_createClass3["default"])(t,[{key:"init",value:function(e,t){var r=this.getFullURL("init");return this.getAuthenticationHeaders(t).then(function(t){return(0,_http.http)("POST",r,e,t)})}},{key:"get",value:function(e,t){var r=this.getFullURL("appusers",e);return this.getAuthenticationHeaders(t).then(function(e){return(0,_http.http)("GET",r,{},e)})}},{key:"update",value:function(e,t,r){var s=this.getFullURL("appusers",e);return this.getAuthenticationHeaders(r).then(function(e){return(0,_http.http)("PUT",s,t,e)})}},{key:"trackEvent",value:function(e,t,r){var s=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],u=this.getFullURL("appusers",e,"events");return this.getAuthenticationHeaders(r).then(function(e){return(0,_http.http)("POST",u,{name:t,appUser:s},e)})}}]),t}(_base.BaseAPI);

},{"../utils/http":5,"./base":2,"babel-runtime/helpers/classCallCheck":13,"babel-runtime/helpers/createClass":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],2:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.BaseAPI=void 0;var _toConsumableArray2=require("babel-runtime/helpers/toConsumableArray"),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_from=require("babel-runtime/core-js/array/from"),_from2=_interopRequireDefault(_from),_promise=require("babel-runtime/core-js/promise"),_promise2=_interopRequireDefault(_promise),_classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),_urljoin=require("urljoin"),_urljoin2=_interopRequireDefault(_urljoin),BaseAPI=exports.BaseAPI=function(){function e(){var r=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];(0,_classCallCheck3["default"])(this,e),this.root=r.root}return(0,_createClass3["default"])(e,[{key:"getAuthenticationHeaders",value:function(e){return e?e.jwt?_promise2["default"].resolve({Authorization:"Bearer "+e.jwt}):e.appToken?_promise2["default"].resolve({"app-token":e.appToken}):_promise2["default"].reject(new Error("Must provide a JWT or a app token")):_promise2["default"].reject(new Error("Must provide authentication information."))}},{key:"getFullURL",value:function(){var e=(0,_from2["default"])(arguments).map(function(e){return encodeURIComponent(e)});return _urljoin2["default"].apply(void 0,[this.root.serverURL].concat((0,_toConsumableArray3["default"])(e)))}}]),e}();

},{"babel-runtime/core-js/array/from":6,"babel-runtime/core-js/promise":12,"babel-runtime/helpers/classCallCheck":13,"babel-runtime/helpers/createClass":14,"babel-runtime/helpers/toConsumableArray":17,"urljoin":95}],3:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ConversationsAPI=void 0;var _classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=require("babel-runtime/helpers/inherits"),_inherits3=_interopRequireDefault(_inherits2),_base=require("./base"),_http=require("../utils/http"),ConversationsAPI=exports.ConversationsAPI=function(e){function t(){return(0,_classCallCheck3["default"])(this,t),(0,_possibleConstructorReturn3["default"])(this,Object.getPrototypeOf(t).apply(this,arguments))}return(0,_inherits3["default"])(t,e),(0,_createClass3["default"])(t,[{key:"get",value:function(e,t){var r=this.getFullURL("appUsers",e,"conversation");return this.getAuthenticationHeaders(t).then(function(e){return(0,_http.http)("GET",r,{},e)})}},{key:"sendMessage",value:function(e,t,r){var s=this.getFullURL("appUsers",e,"conversation","messages");return this.getAuthenticationHeaders(r).then(function(e){return(0,_http.http)("POST",s,t,e)})}}]),t}(_base.BaseAPI);

},{"../utils/http":5,"./base":2,"babel-runtime/helpers/classCallCheck":13,"babel-runtime/helpers/createClass":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],4:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Smooch=void 0;var _classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_appUsers=require("./api/appUsers"),_conversations=require("./api/conversations"),_package=require("../package.json"),_package2=_interopRequireDefault(_package),SERVER_URL="https://api.smooch.io/v1",Smooch=exports.Smooch=function e(){var s=arguments.length<=0||void 0===arguments[0]?SERVER_URL:arguments[0];(0,_classCallCheck3["default"])(this,e),this.VERSION=_package2["default"].version,this.serverURL=s,this.appUsers=new _appUsers.AppUsersAPI({root:this}),this.conversations=new _conversations.ConversationsAPI({root:this}),this.utils={}};
},{"../package.json":97,"./api/appUsers":1,"./api/conversations":3,"babel-runtime/helpers/classCallCheck":13}],5:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function stringifyGETParams(e,t){var n="";for(var s in(0,_keys2["default"])(t))null!==t[s]&&(n+="&"+encodeURIComponent(s)+"="+encodeURIComponent(t[s]));return n&&(e+=(~e.indexOf("?")?"&":"?")+n.substring(1)),e}function handleStatus(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function handleBody(e){return 202!==e.status&&204!==e.status?e.json():void 0}function http(e,t,n){var s=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];e=e.toUpperCase();var r={method:e,headers:(0,_assign2["default"])({Accept:"application/json","Content-Type":"application/json"},s)};return n&&(n=(0,_assign2["default"])({},n),"GET"===e?t=stringifyGETParams(t,n):("POST"===e||"PUT"===e)&&(r.body=JSON.stringify(n))),fetch(t,r).then(handleStatus).then(handleBody)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.stringifyGETParams=stringifyGETParams,exports.handleStatus=handleStatus,exports.handleBody=handleBody,exports.http=http;var _assign=require("babel-runtime/core-js/object/assign"),_assign2=_interopRequireDefault(_assign),_keys=require("babel-runtime/core-js/object/keys"),_keys2=_interopRequireDefault(_keys);require("isomorphic-fetch");

},{"babel-runtime/core-js/object/assign":7,"babel-runtime/core-js/object/keys":10,"isomorphic-fetch":86}],6:[function(require,module,exports){
module.exports={"default":require("core-js/library/fn/array/from"),__esModule:!0};

},{"core-js/library/fn/array/from":18}],7:[function(require,module,exports){
module.exports={"default":require("core-js/library/fn/object/assign"),__esModule:!0};

},{"core-js/library/fn/object/assign":19}],8:[function(require,module,exports){
module.exports={"default":require("core-js/library/fn/object/create"),__esModule:!0};

},{"core-js/library/fn/object/create":20}],9:[function(require,module,exports){
module.exports={"default":require("core-js/library/fn/object/define-property"),__esModule:!0};

},{"core-js/library/fn/object/define-property":21}],10:[function(require,module,exports){
module.exports={"default":require("core-js/library/fn/object/keys"),__esModule:!0};

},{"core-js/library/fn/object/keys":22}],11:[function(require,module,exports){
module.exports={"default":require("core-js/library/fn/object/set-prototype-of"),__esModule:!0};

},{"core-js/library/fn/object/set-prototype-of":23}],12:[function(require,module,exports){
module.exports={"default":require("core-js/library/fn/promise"),__esModule:!0};

},{"core-js/library/fn/promise":24}],13:[function(require,module,exports){
"use strict";function _instanceof(n,t){return null!=t&&t[Symbol.hasInstance]?t[Symbol.hasInstance](n):n instanceof t}exports["default"]=function(n,t){if(!_instanceof(n,t))throw new TypeError("Cannot call a class as a function")},exports.__esModule=!0;

},{}],14:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _defineProperty=require("babel-runtime/core-js/object/define-property"),_defineProperty2=_interopRequireDefault(_defineProperty);exports["default"]=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,_defineProperty2["default"])(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),exports.__esModule=!0;

},{"babel-runtime/core-js/object/define-property":9}],15:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _typeof(e){return e&&e.constructor===Symbol?"symbol":typeof e}var _setPrototypeOf=require("babel-runtime/core-js/object/set-prototype-of"),_setPrototypeOf2=_interopRequireDefault(_setPrototypeOf),_create=require("babel-runtime/core-js/object/create"),_create2=_interopRequireDefault(_create);exports["default"]=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":_typeof(t)));e.prototype=(0,_create2["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_setPrototypeOf2["default"]?(0,_setPrototypeOf2["default"])(e,t):e.__proto__=t)},exports.__esModule=!0;

},{"babel-runtime/core-js/object/create":8,"babel-runtime/core-js/object/set-prototype-of":11}],16:[function(require,module,exports){
"use strict";function _typeof(e){return e&&e.constructor===Symbol?"symbol":typeof e}exports["default"]=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":_typeof(t))&&"function"!=typeof t?e:t},exports.__esModule=!0;

},{}],17:[function(require,module,exports){
"use strict";function _interopRequireDefault(r){return r&&r.__esModule?r:{"default":r}}var _from=require("babel-runtime/core-js/array/from"),_from2=_interopRequireDefault(_from);exports["default"]=function(r){if(Array.isArray(r)){for(var e=0,t=Array(r.length);e<r.length;e++)t[e]=r[e];return t}return(0,_from2["default"])(r)},exports.__esModule=!0;

},{"babel-runtime/core-js/array/from":6}],18:[function(require,module,exports){
require("../../modules/es6.string.iterator"),require("../../modules/es6.array.from"),module.exports=require("../../modules/$.core").Array.from;

},{"../../modules/$.core":30,"../../modules/es6.array.from":76,"../../modules/es6.string.iterator":83}],19:[function(require,module,exports){
require("../../modules/es6.object.assign"),module.exports=require("../../modules/$.core").Object.assign;

},{"../../modules/$.core":30,"../../modules/es6.object.assign":78}],20:[function(require,module,exports){
var $=require("../../modules/$");module.exports=function(e,r){return $.create(e,r)};

},{"../../modules/$":52}],21:[function(require,module,exports){
var $=require("../../modules/$");module.exports=function(e,r,u){return $.setDesc(e,r,u)};

},{"../../modules/$":52}],22:[function(require,module,exports){
require("../../modules/es6.object.keys"),module.exports=require("../../modules/$.core").Object.keys;

},{"../../modules/$.core":30,"../../modules/es6.object.keys":79}],23:[function(require,module,exports){
require("../../modules/es6.object.set-prototype-of"),module.exports=require("../../modules/$.core").Object.setPrototypeOf;

},{"../../modules/$.core":30,"../../modules/es6.object.set-prototype-of":80}],24:[function(require,module,exports){
require("../modules/es6.object.to-string"),require("../modules/es6.string.iterator"),require("../modules/web.dom.iterable"),require("../modules/es6.promise"),module.exports=require("../modules/$.core").Promise;

},{"../modules/$.core":30,"../modules/es6.object.to-string":81,"../modules/es6.promise":82,"../modules/es6.string.iterator":83,"../modules/web.dom.iterable":84}],25:[function(require,module,exports){
module.exports=function(o){if("function"!=typeof o)throw TypeError(o+" is not a function!");return o};

},{}],26:[function(require,module,exports){
module.exports=function(){};

},{}],27:[function(require,module,exports){
var isObject=require("./$.is-object");module.exports=function(e){if(!isObject(e))throw TypeError(e+" is not an object!");return e};

},{"./$.is-object":45}],28:[function(require,module,exports){
var cof=require("./$.cof"),TAG=require("./$.wks")("toStringTag"),ARG="Arguments"==cof(function(){return arguments}());module.exports=function(e){var n,r,t;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=(n=Object(e))[TAG])?r:ARG?cof(n):"Object"==(t=cof(n))&&"function"==typeof n.callee?"Arguments":t};

},{"./$.cof":29,"./$.wks":74}],29:[function(require,module,exports){
var toString={}.toString;module.exports=function(t){return toString.call(t).slice(8,-1)};

},{}],30:[function(require,module,exports){
var core=module.exports={version:"1.2.5"};"number"==typeof __e&&(__e=core);

},{}],31:[function(require,module,exports){
var aFunction=require("./$.a-function");module.exports=function(n,r,t){if(aFunction(n),void 0===r)return n;switch(t){case 1:return function(t){return n.call(r,t)};case 2:return function(t,u){return n.call(r,t,u)};case 3:return function(t,u,e){return n.call(r,t,u,e)}}return function(){return n.apply(r,arguments)}};

},{"./$.a-function":25}],32:[function(require,module,exports){
var global=require("./$.global"),core=require("./$.core"),PROTOTYPE="prototype",ctx=function(e,o){return function(){return e.apply(o,arguments)}},$def=function(e,o,n){var f,t,r,c,l=e&$def.G,$=e&$def.P,d=l?global:e&$def.S?global[o]:(global[o]||{})[PROTOTYPE],i=l?core:core[o]||(core[o]={});l&&(n=o);for(f in n)t=!(e&$def.F)&&d&&f in d,t&&f in i||(r=t?d[f]:n[f],l&&"function"!=typeof d[f]?c=n[f]:e&$def.B&&t?c=ctx(r,global):e&$def.W&&d[f]==r?!function(e){c=function(o){return this instanceof e?new e(o):e(o)},c[PROTOTYPE]=e[PROTOTYPE]}(r):c=$&&"function"==typeof r?ctx(Function.call,r):r,i[f]=c,$&&((i[PROTOTYPE]||(i[PROTOTYPE]={}))[f]=r))};$def.F=1,$def.G=2,$def.S=4,$def.P=8,$def.B=16,$def.W=32,module.exports=$def;

},{"./$.core":30,"./$.global":38}],33:[function(require,module,exports){
module.exports=function(o){if(void 0==o)throw TypeError("Can't call method on  "+o);return o};

},{}],34:[function(require,module,exports){
module.exports=!require("./$.fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});

},{"./$.fails":36}],35:[function(require,module,exports){
var isObject=require("./$.is-object"),document=require("./$.global").document,is=isObject(document)&&isObject(document.createElement);module.exports=function(e){return is?document.createElement(e):{}};

},{"./$.global":38,"./$.is-object":45}],36:[function(require,module,exports){
module.exports=function(r){try{return!!r()}catch(t){return!0}};

},{}],37:[function(require,module,exports){
var ctx=require("./$.ctx"),call=require("./$.iter-call"),isArrayIter=require("./$.is-array-iter"),anObject=require("./$.an-object"),toLength=require("./$.to-length"),getIterFn=require("./core.get-iterator-method");module.exports=function(e,r,t,i){var o,a,n,l=getIterFn(e),c=ctx(t,i,r?2:1),u=0;if("function"!=typeof l)throw TypeError(e+" is not iterable!");if(isArrayIter(l))for(o=toLength(e.length);o>u;u++)r?c(anObject(a=e[u])[0],a[1]):c(e[u]);else for(n=l.call(e);!(a=n.next()).done;)call(n,c,a.value,r)};

},{"./$.an-object":27,"./$.ctx":31,"./$.is-array-iter":44,"./$.iter-call":46,"./$.to-length":71,"./core.get-iterator-method":75}],38:[function(require,module,exports){
var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global);

},{}],39:[function(require,module,exports){
var hasOwnProperty={}.hasOwnProperty;module.exports=function(r,e){return hasOwnProperty.call(r,e)};

},{}],40:[function(require,module,exports){
var $=require("./$"),createDesc=require("./$.property-desc");module.exports=require("./$.descriptors")?function(e,r,t){return $.setDesc(e,r,createDesc(1,t))}:function(e,r,t){return e[r]=t,e};

},{"./$":52,"./$.descriptors":34,"./$.property-desc":58}],41:[function(require,module,exports){
module.exports=require("./$.global").document&&document.documentElement;

},{"./$.global":38}],42:[function(require,module,exports){
module.exports=function(e,r,l){var a=void 0===l;switch(r.length){case 0:return a?e():e.call(l);case 1:return a?e(r[0]):e.call(l,r[0]);case 2:return a?e(r[0],r[1]):e.call(l,r[0],r[1]);case 3:return a?e(r[0],r[1],r[2]):e.call(l,r[0],r[1],r[2]);case 4:return a?e(r[0],r[1],r[2],r[3]):e.call(l,r[0],r[1],r[2],r[3])}return e.apply(l,r)};

},{}],43:[function(require,module,exports){
var cof=require("./$.cof");module.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==cof(e)?e.split(""):Object(e)};

},{"./$.cof":29}],44:[function(require,module,exports){
var Iterators=require("./$.iterators"),ITERATOR=require("./$.wks")("iterator"),ArrayProto=Array.prototype;module.exports=function(r){return(Iterators.Array||ArrayProto[ITERATOR])===r};

},{"./$.iterators":51,"./$.wks":74}],45:[function(require,module,exports){
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};

},{}],46:[function(require,module,exports){
var anObject=require("./$.an-object");module.exports=function(r,t,e,a){try{return a?t(anObject(e)[0],e[1]):t(e)}catch(c){var n=r["return"];throw void 0!==n&&anObject(n.call(r)),c}};

},{"./$.an-object":27}],47:[function(require,module,exports){
"use strict";var $=require("./$"),descriptor=require("./$.property-desc"),setToStringTag=require("./$.set-to-string-tag"),IteratorPrototype={};require("./$.hide")(IteratorPrototype,require("./$.wks")("iterator"),function(){return this}),module.exports=function(r,t,e){r.prototype=$.create(IteratorPrototype,{next:descriptor(1,e)}),setToStringTag(r,t+" Iterator")};

},{"./$":52,"./$.hide":40,"./$.property-desc":58,"./$.set-to-string-tag":63,"./$.wks":74}],48:[function(require,module,exports){
"use strict";var LIBRARY=require("./$.library"),$def=require("./$.def"),$redef=require("./$.redef"),hide=require("./$.hide"),has=require("./$.has"),SYMBOL_ITERATOR=require("./$.wks")("iterator"),Iterators=require("./$.iterators"),$iterCreate=require("./$.iter-create"),setToStringTag=require("./$.set-to-string-tag"),getProto=require("./$").getProto,BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this};module.exports=function(e,r,t,i,n,s,u){$iterCreate(t,r,i);var o,a,T=function(e){if(!BUGGY&&e in f)return f[e];switch(e){case KEYS:return function(){return new t(this,e)};case VALUES:return function(){return new t(this,e)}}return function(){return new t(this,e)}},R=r+" Iterator",f=e.prototype,$=f[SYMBOL_ITERATOR]||f[FF_ITERATOR]||n&&f[n],A=$||T(n);if($){var E=getProto(A.call(new e));setToStringTag(E,R,!0),!LIBRARY&&has(f,FF_ITERATOR)&&hide(E,SYMBOL_ITERATOR,returnThis)}if(LIBRARY&&!u||!BUGGY&&SYMBOL_ITERATOR in f||hide(f,SYMBOL_ITERATOR,A),Iterators[r]=A,Iterators[R]=returnThis,n)if(o={values:n==VALUES?A:T(VALUES),keys:s?A:T(KEYS),entries:n!=VALUES?A:T("entries")},u)for(a in o)a in f||$redef(f,a,o[a]);else $def($def.P+$def.F*BUGGY,r,o);return o};

},{"./$":52,"./$.def":32,"./$.has":39,"./$.hide":40,"./$.iter-create":47,"./$.iterators":51,"./$.library":53,"./$.redef":59,"./$.set-to-string-tag":63,"./$.wks":74}],49:[function(require,module,exports){
var ITERATOR=require("./$.wks")("iterator"),SAFE_CLOSING=!1;try{var riter=[7][ITERATOR]();riter["return"]=function(){SAFE_CLOSING=!0},Array.from(riter,function(){throw 2})}catch(e){}module.exports=function(r,t){if(!t&&!SAFE_CLOSING)return!1;var n=!1;try{var e=[7],i=e[ITERATOR]();i.next=function(){n=!0},e[ITERATOR]=function(){return i},r(e)}catch(u){}return n};

},{"./$.wks":74}],50:[function(require,module,exports){
module.exports=function(e,n){return{value:n,done:!!e}};

},{}],51:[function(require,module,exports){
module.exports={};

},{}],52:[function(require,module,exports){
var $Object=Object;module.exports={create:$Object.create,getProto:$Object.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:$Object.getOwnPropertyDescriptor,setDesc:$Object.defineProperty,setDescs:$Object.defineProperties,getKeys:$Object.keys,getNames:$Object.getOwnPropertyNames,getSymbols:$Object.getOwnPropertySymbols,each:[].forEach};

},{}],53:[function(require,module,exports){
module.exports=!0;

},{}],54:[function(require,module,exports){
var global=require("./$.global"),macrotask=require("./$.task").set,Observer=global.MutationObserver||global.WebKitMutationObserver,process=global.process,isNode="process"==require("./$.cof")(process),head,last,notify,flush=function(){var e,o;for(isNode&&(e=process.domain)&&(process.domain=null,e.exit());head;)o=head.domain,o&&o.enter(),head.fn.call(),o&&o.exit(),head=head.next;last=void 0,e&&e.enter()};if(isNode)notify=function(){process.nextTick(flush)};else if(Observer){var toggle=1,node=document.createTextNode("");new Observer(flush).observe(node,{characterData:!0}),notify=function(){node.data=toggle=-toggle}}else notify=function(){macrotask.call(global,flush)};module.exports=function(e){var o={fn:e,next:void 0,domain:isNode&&process.domain};last&&(last.next=o),head||(head=o,notify()),last=o};

},{"./$.cof":29,"./$.global":38,"./$.task":68}],55:[function(require,module,exports){
var $redef=require("./$.redef");module.exports=function(e,r){for(var f in r)$redef(e,f,r[f]);return e};

},{"./$.redef":59}],56:[function(require,module,exports){
var $=require("./$"),toObject=require("./$.to-object"),IObject=require("./$.iobject");module.exports=require("./$.fails")(function(){var e=Object.assign,t={},r={},o=Symbol(),c="abcdefghijklmnopqrst";return t[o]=7,c.split("").forEach(function(e){r[e]=e}),7!=e({},t)[o]||Object.keys(e({},r)).join("")!=c})?function(e,t){for(var r=toObject(e),o=arguments,c=o.length,n=1,i=$.getKeys,s=$.getSymbols,a=$.isEnum;c>n;)for(var b,u=IObject(o[n++]),j=s?i(u).concat(s(u)):i(u),l=j.length,f=0;l>f;)a.call(u,b=j[f++])&&(r[b]=u[b]);return r}:Object.assign;

},{"./$":52,"./$.fails":36,"./$.iobject":43,"./$.to-object":72}],57:[function(require,module,exports){
var $def=require("./$.def"),core=require("./$.core"),fails=require("./$.fails");module.exports=function(e,r){var i=require("./$.def"),c=(core.Object||{})[e]||Object[e],f={};f[e]=r(c),i(i.S+i.F*fails(function(){c(1)}),"Object",f)};

},{"./$.core":30,"./$.def":32,"./$.fails":36}],58:[function(require,module,exports){
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};

},{}],59:[function(require,module,exports){
module.exports=require("./$.hide");

},{"./$.hide":40}],60:[function(require,module,exports){
module.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t};

},{}],61:[function(require,module,exports){
var getDesc=require("./$").getDesc,isObject=require("./$.is-object"),anObject=require("./$.an-object"),check=function(e,t){if(anObject(e),!isObject(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};module.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,c){try{c=require("./$.ctx")(Function.call,getDesc(Object.prototype,"__proto__").set,2),c(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,r){return check(e,r),t?e.__proto__=r:c(e,r),e}}({},!1):void 0),check:check};

},{"./$":52,"./$.an-object":27,"./$.ctx":31,"./$.is-object":45}],62:[function(require,module,exports){
"use strict";var core=require("./$.core"),$=require("./$"),DESCRIPTORS=require("./$.descriptors"),SPECIES=require("./$.wks")("species");module.exports=function(e){var r=core[e];DESCRIPTORS&&r&&!r[SPECIES]&&$.setDesc(r,SPECIES,{configurable:!0,get:function(){return this}})};

},{"./$":52,"./$.core":30,"./$.descriptors":34,"./$.wks":74}],63:[function(require,module,exports){
var def=require("./$").setDesc,has=require("./$.has"),TAG=require("./$.wks")("toStringTag");module.exports=function(e,r,a){e&&!has(e=a?e:e.prototype,TAG)&&def(e,TAG,{configurable:!0,value:r})};

},{"./$":52,"./$.has":39,"./$.wks":74}],64:[function(require,module,exports){
var global=require("./$.global"),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});module.exports=function(o){return store[o]||(store[o]={})};

},{"./$.global":38}],65:[function(require,module,exports){
var anObject=require("./$.an-object"),aFunction=require("./$.a-function"),SPECIES=require("./$.wks")("species");module.exports=function(e,n){var r,t=anObject(e).constructor;return void 0===t||void 0==(r=anObject(t)[SPECIES])?n:aFunction(r)};

},{"./$.a-function":25,"./$.an-object":27,"./$.wks":74}],66:[function(require,module,exports){
module.exports=function(e,r,o){if(!(e instanceof r))throw TypeError(o+": use the 'new' operator!");return e};

},{}],67:[function(require,module,exports){
var toInteger=require("./$.to-integer"),defined=require("./$.defined");module.exports=function(e){return function(r,t){var n,i,d=String(defined(r)),o=toInteger(t),u=d.length;return 0>o||o>=u?e?"":void 0:(n=d.charCodeAt(o),55296>n||n>56319||o+1===u||(i=d.charCodeAt(o+1))<56320||i>57343?e?d.charAt(o):n:e?d.slice(o,o+2):(n-55296<<10)+(i-56320)+65536)}};

},{"./$.defined":33,"./$.to-integer":69}],68:[function(require,module,exports){
"use strict";var ctx=require("./$.ctx"),invoke=require("./$.invoke"),html=require("./$.html"),cel=require("./$.dom-create"),global=require("./$.global"),process=global.process,setTask=global.setImmediate,clearTask=global.clearImmediate,MessageChannel=global.MessageChannel,counter=0,queue={},ONREADYSTATECHANGE="onreadystatechange",defer,channel,port,run=function(){var e=+this;if(queue.hasOwnProperty(e)){var t=queue[e];delete queue[e],t()}},listner=function(e){run.call(e.data)};setTask&&clearTask||(setTask=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return queue[++counter]=function(){invoke("function"==typeof e?e:Function(e),t)},defer(counter),counter},clearTask=function(e){delete queue[e]},"process"==require("./$.cof")(process)?defer=function(e){process.nextTick(ctx(run,e,1))}:MessageChannel?(channel=new MessageChannel,port=channel.port2,channel.port1.onmessage=listner,defer=ctx(port.postMessage,port,1)):global.addEventListener&&"function"==typeof postMessage&&!global.importScripts?(defer=function(e){global.postMessage(e+"","*")},global.addEventListener("message",listner,!1)):defer=ONREADYSTATECHANGE in cel("script")?function(e){html.appendChild(cel("script"))[ONREADYSTATECHANGE]=function(){html.removeChild(this),run.call(e)}}:function(e){setTimeout(ctx(run,e,1),0)}),module.exports={set:setTask,clear:clearTask};

},{"./$.cof":29,"./$.ctx":31,"./$.dom-create":35,"./$.global":38,"./$.html":41,"./$.invoke":42}],69:[function(require,module,exports){
var ceil=Math.ceil,floor=Math.floor;module.exports=function(o){return isNaN(o=+o)?0:(o>0?floor:ceil)(o)};

},{}],70:[function(require,module,exports){
var IObject=require("./$.iobject"),defined=require("./$.defined");module.exports=function(e){return IObject(defined(e))};

},{"./$.defined":33,"./$.iobject":43}],71:[function(require,module,exports){
var toInteger=require("./$.to-integer"),min=Math.min;module.exports=function(e){return e>0?min(toInteger(e),9007199254740991):0};

},{"./$.to-integer":69}],72:[function(require,module,exports){
var defined=require("./$.defined");module.exports=function(e){return Object(defined(e))};

},{"./$.defined":33}],73:[function(require,module,exports){
var id=0,px=Math.random();module.exports=function(o){return"Symbol(".concat(void 0===o?"":o,")_",(++id+px).toString(36))};

},{}],74:[function(require,module,exports){
var store=require("./$.shared")("wks"),uid=require("./$.uid"),Symbol=require("./$.global").Symbol;module.exports=function(r){return store[r]||(store[r]=Symbol&&Symbol[r]||(Symbol||uid)("Symbol."+r))};

},{"./$.global":38,"./$.shared":64,"./$.uid":73}],75:[function(require,module,exports){
var classof=require("./$.classof"),ITERATOR=require("./$.wks")("iterator"),Iterators=require("./$.iterators");module.exports=require("./$.core").getIteratorMethod=function(r){return void 0!=r?r[ITERATOR]||r["@@iterator"]||Iterators[classof(r)]:void 0};

},{"./$.classof":28,"./$.core":30,"./$.iterators":51,"./$.wks":74}],76:[function(require,module,exports){
"use strict";var ctx=require("./$.ctx"),$def=require("./$.def"),toObject=require("./$.to-object"),call=require("./$.iter-call"),isArrayIter=require("./$.is-array-iter"),toLength=require("./$.to-length"),getIterFn=require("./core.get-iterator-method");$def($def.S+$def.F*!require("./$.iter-detect")(function(e){Array.from(e)}),"Array",{from:function(e){var r,t,i,o,n=toObject(e),a="function"==typeof this?this:Array,c=arguments,u=c.length,l=u>1?c[1]:void 0,f=void 0!==l,d=0,$=getIterFn(n);if(f&&(l=ctx(l,u>2?c[2]:void 0,2)),void 0==$||a==Array&&isArrayIter($))for(r=toLength(n.length),t=new a(r);r>d;d++)t[d]=f?l(n[d],d):n[d];else for(o=$.call(n),t=new a;!(i=o.next()).done;d++)t[d]=f?call(o,l,[i.value,d],!0):i.value;return t.length=d,t}});

},{"./$.ctx":31,"./$.def":32,"./$.is-array-iter":44,"./$.iter-call":46,"./$.iter-detect":49,"./$.to-length":71,"./$.to-object":72,"./core.get-iterator-method":75}],77:[function(require,module,exports){
"use strict";var addToUnscopables=require("./$.add-to-unscopables"),step=require("./$.iter-step"),Iterators=require("./$.iterators"),toIObject=require("./$.to-iobject");module.exports=require("./$.iter-define")(Array,"Array",function(e,t){this._t=toIObject(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,s=this._i++;return!e||s>=e.length?(this._t=void 0,step(1)):"keys"==t?step(0,s):"values"==t?step(0,e[s]):step(0,[s,e[s]])},"values"),Iterators.Arguments=Iterators.Array,addToUnscopables("keys"),addToUnscopables("values"),addToUnscopables("entries");

},{"./$.add-to-unscopables":26,"./$.iter-define":48,"./$.iter-step":50,"./$.iterators":51,"./$.to-iobject":70}],78:[function(require,module,exports){
var $def=require("./$.def");$def($def.S+$def.F,"Object",{assign:require("./$.object-assign")});

},{"./$.def":32,"./$.object-assign":56}],79:[function(require,module,exports){
var toObject=require("./$.to-object");require("./$.object-sap")("keys",function(e){return function(t){return e(toObject(t))}});

},{"./$.object-sap":57,"./$.to-object":72}],80:[function(require,module,exports){
var $def=require("./$.def");$def($def.S,"Object",{setPrototypeOf:require("./$.set-proto").set});

},{"./$.def":32,"./$.set-proto":61}],81:[function(require,module,exports){

},{}],82:[function(require,module,exports){
"use strict";var $=require("./$"),LIBRARY=require("./$.library"),global=require("./$.global"),ctx=require("./$.ctx"),classof=require("./$.classof"),$def=require("./$.def"),isObject=require("./$.is-object"),anObject=require("./$.an-object"),aFunction=require("./$.a-function"),strictNew=require("./$.strict-new"),forOf=require("./$.for-of"),setProto=require("./$.set-proto").set,same=require("./$.same-value"),SPECIES=require("./$.wks")("species"),speciesConstructor=require("./$.species-constructor"),RECORD=require("./$.uid")("record"),asap=require("./$.microtask"),PROMISE="Promise",process=global.process,isNode="process"==classof(process),P=global[PROMISE],Wrapper,testResolve=function(e){var r=new P(function(){});return e&&(r.constructor=Object),P.resolve(r)===r},useNative=function(){function e(r){var t=new P(r);return setProto(t,e.prototype),t}var r=!1;try{if(r=P&&P.resolve&&testResolve(),setProto(e,P),e.prototype=$.create(P.prototype,{constructor:{value:e}}),e.resolve(5).then(function(){})instanceof e||(r=!1),r&&require("./$.descriptors")){var t=!1;P.resolve($.setDesc({},"then",{get:function(){t=!0}})),r=t}}catch(n){r=!1}return r}(),isPromise=function(e){return isObject(e)&&(useNative?"Promise"==classof(e):RECORD in e)},sameConstructor=function(e,r){return LIBRARY&&e===P&&r===Wrapper?!0:same(e,r)},getConstructor=function(e){var r=anObject(e)[SPECIES];return void 0!=r?r:e},isThenable=function(e){var r;return isObject(e)&&"function"==typeof(r=e.then)?r:!1},notify=function(e,r){if(!e.n){e.n=!0;var t=e.c;asap(function(){for(var n=e.v,o=1==e.s,i=0,c=function(r){var t,i,c=o?r.ok:r.fail;try{c?(o||(e.h=!0),t=c===!0?n:c(n),t===r.P?r.rej(TypeError("Promise-chain cycle")):(i=isThenable(t))?i.call(t,r.res,r.rej):r.res(t)):r.rej(n)}catch(s){r.rej(s)}};t.length>i;)c(t[i++]);t.length=0,e.n=!1,r&&setTimeout(function(){var r,t,o=e.p;isUnhandled(o)&&(isNode?process.emit("unhandledRejection",n,o):(r=global.onunhandledrejection)?r({promise:o,reason:n}):(t=global.console)&&t.error&&t.error("Unhandled promise rejection",n)),e.a=void 0},1)})}},isUnhandled=function(e){var r,t=e[RECORD],n=t.a||t.c,o=0;if(t.h)return!1;for(;n.length>o;)if(r=n[o++],r.fail||!isUnhandled(r.P))return!1;return!0},$reject=function(e){var r=this;r.d||(r.d=!0,r=r.r||r,r.v=e,r.s=2,r.a=r.c.slice(),notify(r,!0))},$resolve=function(e){var r,t=this;if(!t.d){t.d=!0,t=t.r||t;try{(r=isThenable(e))?asap(function(){var n={r:t,d:!1};try{r.call(e,ctx($resolve,n,1),ctx($reject,n,1))}catch(o){$reject.call(n,o)}}):(t.v=e,t.s=1,notify(t,!1))}catch(n){$reject.call({r:t,d:!1},n)}}};useNative||(P=function(e){aFunction(e);var r={p:strictNew(this,P,PROMISE),c:[],a:void 0,s:0,d:!1,v:void 0,h:!1,n:!1};this[RECORD]=r;try{e(ctx($resolve,r,1),ctx($reject,r,1))}catch(t){$reject.call(r,t)}},require("./$.mix")(P.prototype,{then:function(e,r){var t={ok:"function"==typeof e?e:!0,fail:"function"==typeof r?r:!1},n=t.P=new(speciesConstructor(this,P))(function(e,r){t.res=e,t.rej=r});aFunction(t.res),aFunction(t.rej);var o=this[RECORD];return o.c.push(t),o.a&&o.a.push(t),o.s&&notify(o,!1),n},"catch":function(e){return this.then(void 0,e)}})),$def($def.G+$def.W+$def.F*!useNative,{Promise:P}),require("./$.set-to-string-tag")(P,PROMISE),require("./$.set-species")(PROMISE),Wrapper=require("./$.core")[PROMISE],$def($def.S+$def.F*!useNative,PROMISE,{reject:function(e){return new this(function(r,t){t(e)})}}),$def($def.S+$def.F*(!useNative||testResolve(!0)),PROMISE,{resolve:function(e){return isPromise(e)&&sameConstructor(e.constructor,this)?e:new this(function(r){r(e)})}}),$def($def.S+$def.F*!(useNative&&require("./$.iter-detect")(function(e){P.all(e)["catch"](function(){})})),PROMISE,{all:function(e){var r=getConstructor(this),t=[];return new r(function(n,o){forOf(e,!1,t.push,t);var i=t.length,c=Array(i);i?$.each.call(t,function(e,t){r.resolve(e).then(function(e){c[t]=e,--i||n(c)},o)}):n(c)})},race:function(e){var r=getConstructor(this);return new r(function(t,n){forOf(e,!1,function(e){r.resolve(e).then(t,n)})})}});

},{"./$":52,"./$.a-function":25,"./$.an-object":27,"./$.classof":28,"./$.core":30,"./$.ctx":31,"./$.def":32,"./$.descriptors":34,"./$.for-of":37,"./$.global":38,"./$.is-object":45,"./$.iter-detect":49,"./$.library":53,"./$.microtask":54,"./$.mix":55,"./$.same-value":60,"./$.set-proto":61,"./$.set-species":62,"./$.set-to-string-tag":63,"./$.species-constructor":65,"./$.strict-new":66,"./$.uid":73,"./$.wks":74}],83:[function(require,module,exports){
"use strict";var $at=require("./$.string-at")(!0);require("./$.iter-define")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,i=this._t,e=this._i;return e>=i.length?{value:void 0,done:!0}:(t=$at(i,e),this._i+=t.length,{value:t,done:!1})});

},{"./$.iter-define":48,"./$.string-at":67}],84:[function(require,module,exports){
require("./es6.array.iterator");var Iterators=require("./$.iterators");Iterators.NodeList=Iterators.HTMLCollection=Iterators.Array;

},{"./$.iterators":51,"./es6.array.iterator":77}],85:[function(require,module,exports){
var hasOwn=Object.prototype.hasOwnProperty,toStr=Object.prototype.toString,undefined,isArray=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===toStr.call(t)},isPlainObject=function(t){"use strict";if(!t||"[object Object]"!==toStr.call(t))return!1;var r=hasOwn.call(t,"constructor"),n=t.constructor&&t.constructor.prototype&&hasOwn.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!r&&!n)return!1;var o;for(o in t);return o===undefined||hasOwn.call(t,o)};module.exports=function t(){"use strict";var r,n,o,e,c,a,i=arguments[0],s=1,u=arguments.length,l=!1;for("boolean"==typeof i?(l=i,i=arguments[1]||{},s=2):("object"!=typeof i&&"function"!=typeof i||null==i)&&(i={});u>s;++s)if(r=arguments[s],null!=r)for(n in r)o=i[n],e=r[n],i!==e&&(l&&e&&(isPlainObject(e)||(c=isArray(e)))?(c?(c=!1,a=o&&isArray(o)?o:[]):a=o&&isPlainObject(o)?o:{},i[n]=t(l,a,e)):e!==undefined&&(i[n]=e));return i};

},{}],86:[function(require,module,exports){
require("whatwg-fetch"),module.exports=self.fetch.bind(self);

},{"whatwg-fetch":96}],87:[function(require,module,exports){
(function (process){
function normalizeArray(r,t){for(var e=0,n=r.length-1;n>=0;n--){var s=r[n];"."===s?r.splice(n,1):".."===s?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}function filter(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,splitPath=function(r){return splitPathRe.exec(r).slice(1)};exports.resolve=function(){for(var r="",t=!1,e=arguments.length-1;e>=-1&&!t;e--){var n=e>=0?arguments[e]:process.cwd();if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,t="/"===n.charAt(0))}return r=normalizeArray(filter(r.split("/"),function(r){return!!r}),!t).join("/"),(t?"/":"")+r||"."},exports.normalize=function(r){var t=exports.isAbsolute(r),e="/"===substr(r,-1);return r=normalizeArray(filter(r.split("/"),function(r){return!!r}),!t).join("/"),r||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r},exports.isAbsolute=function(r){return"/"===r.charAt(0)},exports.join=function(){var r=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(r,function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r}).join("/"))},exports.relative=function(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=exports.resolve(r).substr(1),t=exports.resolve(t).substr(1);for(var n=e(r.split("/")),s=e(t.split("/")),i=Math.min(n.length,s.length),o=i,u=0;i>u;u++)if(n[u]!==s[u]){o=u;break}for(var l=[],u=o;u<n.length;u++)l.push("..");return l=l.concat(s.slice(o)),l.join("/")},exports.sep="/",exports.delimiter=":",exports.dirname=function(r){var t=splitPath(r),e=t[0],n=t[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."},exports.basename=function(r,t){var e=splitPath(r)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e},exports.extname=function(r){return splitPath(r)[3]};var substr="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return 0>t&&(t=r.length+t),r.substr(t,e)};

}).call(this,require('_process'))
},{"_process":88}],88:[function(require,module,exports){
function cleanUpNextTick(){draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue()}function drainQueue(){if(!draining){var e=setTimeout(cleanUpNextTick);draining=!0;for(var n=queue.length;n;){for(currentQueue=queue,queue=[];++queueIndex<n;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,n=queue.length}currentQueue=null,draining=!1,clearTimeout(e)}}function Item(e,n){this.fun=e,this.array=n}function noop(){}var process=module.exports={},queue=[],draining=!1,currentQueue,queueIndex=-1;process.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)n[r-1]=arguments[r];queue.push(new Item(e,n)),1!==queue.length||draining||setTimeout(drainQueue,0)},Item.prototype.run=function(){this.fun.apply(null,this.array)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.binding=function(e){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(e){throw new Error("process.chdir is not supported")},process.umask=function(){return 0};

},{}],89:[function(require,module,exports){
(function (global){
!function(e){function o(e){throw RangeError(T[e])}function n(e,o){for(var n=e.length,r=[];n--;)r[n]=o(e[n]);return r}function r(e,o){var r=e.split("@"),t="";r.length>1&&(t=r[0]+"@",e=r[1]),e=e.replace(S,".");var u=e.split("."),i=n(u,o).join(".");return t+i}function t(e){for(var o,n,r=[],t=0,u=e.length;u>t;)o=e.charCodeAt(t++),o>=55296&&56319>=o&&u>t?(n=e.charCodeAt(t++),56320==(64512&n)?r.push(((1023&o)<<10)+(1023&n)+65536):(r.push(o),t--)):r.push(o);return r}function u(e){return n(e,function(e){var o="";return e>65535&&(e-=65536,o+=P(e>>>10&1023|55296),e=56320|1023&e),o+=P(e)}).join("")}function i(e){return 10>e-48?e-22:26>e-65?e-65:26>e-97?e-97:b}function f(e,o){return e+22+75*(26>e)-((0!=o)<<5)}function c(e,o,n){var r=0;for(e=n?M(e/j):e>>1,e+=M(e/o);e>L*C>>1;r+=b)e=M(e/L);return M(r+(L+1)*e/(e+m))}function l(e){var n,r,t,f,l,s,d,a,p,h,v=[],g=e.length,w=0,m=I,j=A;for(r=e.lastIndexOf(E),0>r&&(r=0),t=0;r>t;++t)e.charCodeAt(t)>=128&&o("not-basic"),v.push(e.charCodeAt(t));for(f=r>0?r+1:0;g>f;){for(l=w,s=1,d=b;f>=g&&o("invalid-input"),a=i(e.charCodeAt(f++)),(a>=b||a>M((x-w)/s))&&o("overflow"),w+=a*s,p=j>=d?y:d>=j+C?C:d-j,!(p>a);d+=b)h=b-p,s>M(x/h)&&o("overflow"),s*=h;n=v.length+1,j=c(w-l,n,0==l),M(w/n)>x-m&&o("overflow"),m+=M(w/n),w%=n,v.splice(w++,0,m)}return u(v)}function s(e){var n,r,u,i,l,s,d,a,p,h,v,g,w,m,j,F=[];for(e=t(e),g=e.length,n=I,r=0,l=A,s=0;g>s;++s)v=e[s],128>v&&F.push(P(v));for(u=i=F.length,i&&F.push(E);g>u;){for(d=x,s=0;g>s;++s)v=e[s],v>=n&&d>v&&(d=v);for(w=u+1,d-n>M((x-r)/w)&&o("overflow"),r+=(d-n)*w,n=d,s=0;g>s;++s)if(v=e[s],n>v&&++r>x&&o("overflow"),v==n){for(a=r,p=b;h=l>=p?y:p>=l+C?C:p-l,!(h>a);p+=b)j=a-h,m=b-h,F.push(P(f(h+j%m,0))),a=M(j/m);F.push(P(f(a,0))),l=c(r,w,u==i),r=0,++u}++r,++n}return F.join("")}function d(e){return r(e,function(e){return F.test(e)?l(e.slice(4).toLowerCase()):e})}function a(e){return r(e,function(e){return O.test(e)?"xn--"+s(e):e})}var p="object"==typeof exports&&exports&&!exports.nodeType&&exports,h="object"==typeof module&&module&&!module.nodeType&&module,v="object"==typeof global&&global;(v.global===v||v.window===v||v.self===v)&&(e=v);var g,w,x=2147483647,b=36,y=1,C=26,m=38,j=700,A=72,I=128,E="-",F=/^xn--/,O=/[^\x20-\x7E]/,S=/[\x2E\u3002\uFF0E\uFF61]/g,T={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},L=b-y,M=Math.floor,P=String.fromCharCode;if(g={version:"1.3.2",ucs2:{decode:t,encode:u},decode:l,encode:s,toASCII:a,toUnicode:d},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return g});else if(p&&h)if(module.exports==p)h.exports=g;else for(w in g)g.hasOwnProperty(w)&&(p[w]=g[w]);else e.punycode=g}(this);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],90:[function(require,module,exports){
"use strict";function hasOwnProperty(r,e){return Object.prototype.hasOwnProperty.call(r,e)}module.exports=function(r,e,t,n){e=e||"&",t=t||"=";var o={};if("string"!=typeof r||0===r.length)return o;var a=/\+/g;r=r.split(e);var s=1e3;n&&"number"==typeof n.maxKeys&&(s=n.maxKeys);var p=r.length;s>0&&p>s&&(p=s);for(var y=0;p>y;++y){var u,c,i,l,f=r[y].replace(a,"%20"),v=f.indexOf(t);v>=0?(u=f.substr(0,v),c=f.substr(v+1)):(u=f,c=""),i=decodeURIComponent(u),l=decodeURIComponent(c),hasOwnProperty(o,i)?isArray(o[i])?o[i].push(l):o[i]=[o[i],l]:o[i]=l}return o};var isArray=Array.isArray||function(r){return"[object Array]"===Object.prototype.toString.call(r)};

},{}],91:[function(require,module,exports){
"use strict";function map(r,e){if(r.map)return r.map(e);for(var t=[],n=0;n<r.length;n++)t.push(e(r[n],n));return t}var stringifyPrimitive=function(r){switch(typeof r){case"string":return r;case"boolean":return r?"true":"false";case"number":return isFinite(r)?r:"";default:return""}};module.exports=function(r,e,t,n){return e=e||"&",t=t||"=",null===r&&(r=void 0),"object"==typeof r?map(objectKeys(r),function(n){var i=encodeURIComponent(stringifyPrimitive(n))+t;return isArray(r[n])?map(r[n],function(r){return i+encodeURIComponent(stringifyPrimitive(r))}).join(e):i+encodeURIComponent(stringifyPrimitive(r[n]))}).join(e):n?encodeURIComponent(stringifyPrimitive(n))+t+encodeURIComponent(stringifyPrimitive(r)):""};var isArray=Array.isArray||function(r){return"[object Array]"===Object.prototype.toString.call(r)},objectKeys=Object.keys||function(r){var e=[];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.push(t);return e};

},{}],92:[function(require,module,exports){
"use strict";exports.decode=exports.parse=require("./decode"),exports.encode=exports.stringify=require("./encode");

},{"./decode":90,"./encode":91}],93:[function(require,module,exports){
"use strict";function Url(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function urlParse(t,s,e){if(t&&util.isObject(t)&&t instanceof Url)return t;var h=new Url;return h.parse(t,s,e),h}function urlFormat(t){return util.isString(t)&&(t=urlParse(t)),t instanceof Url?t.format():Url.prototype.format.call(t)}function urlResolve(t,s){return urlParse(t,!1,!0).resolve(s)}function urlResolveObject(t,s){return t?urlParse(t,!1,!0).resolveObject(s):s}var punycode=require("punycode"),util=require("./util");exports.parse=urlParse,exports.resolve=urlResolve,exports.resolveObject=urlResolveObject,exports.format=urlFormat,exports.Url=Url;var protocolPattern=/^([a-z0-9.+-]+:)/i,portPattern=/:[0-9]*$/,simplePathPattern=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,delims=["<",">",'"',"`"," ","\r","\n","	"],unwise=["{","}","|","\\","^","`"].concat(delims),autoEscape=["'"].concat(unwise),nonHostChars=["%","/","?",";","#"].concat(autoEscape),hostEndingChars=["/","?","#"],hostnameMaxLen=255,hostnamePartPattern=/^[+a-z0-9A-Z_-]{0,63}$/,hostnamePartStart=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,unsafeProtocol={javascript:!0,"javascript:":!0},hostlessProtocol={javascript:!0,"javascript:":!0},slashedProtocol={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},querystring=require("querystring");Url.prototype.parse=function(t,s,e){if(!util.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var h=t.indexOf("?"),r=-1!==h&&h<t.indexOf("#")?"?":"#",a=t.split(r),o=/\\/g;a[0]=a[0].replace(o,"/"),t=a.join(r);var n=t;if(n=n.trim(),!e&&1===t.split("#").length){var i=simplePathPattern.exec(n);if(i)return this.path=n,this.href=n,this.pathname=i[1],i[2]?(this.search=i[2],s?this.query=querystring.parse(this.search.substr(1)):this.query=this.search.substr(1)):s&&(this.search="",this.query={}),this}var l=protocolPattern.exec(n);if(l){l=l[0];var u=l.toLowerCase();this.protocol=u,n=n.substr(l.length)}if(e||l||n.match(/^\/\/[^@\/]+@[^@\/]+/)){var p="//"===n.substr(0,2);!p||l&&hostlessProtocol[l]||(n=n.substr(2),this.slashes=!0)}if(!hostlessProtocol[l]&&(p||l&&!slashedProtocol[l])){for(var c=-1,f=0;f<hostEndingChars.length;f++){var m=n.indexOf(hostEndingChars[f]);-1!==m&&(-1===c||c>m)&&(c=m)}var v,g;g=-1===c?n.lastIndexOf("@"):n.lastIndexOf("@",c),-1!==g&&(v=n.slice(0,g),n=n.slice(g+1),this.auth=decodeURIComponent(v)),c=-1;for(var f=0;f<nonHostChars.length;f++){var m=n.indexOf(nonHostChars[f]);-1!==m&&(-1===c||c>m)&&(c=m)}-1===c&&(c=n.length),this.host=n.slice(0,c),n=n.slice(c),this.parseHost(),this.hostname=this.hostname||"";var y="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!y)for(var P=this.hostname.split(/\./),f=0,d=P.length;d>f;f++){var q=P[f];if(q&&!q.match(hostnamePartPattern)){for(var b="",O=0,j=q.length;j>O;O++)b+=q.charCodeAt(O)>127?"x":q[O];if(!b.match(hostnamePartPattern)){var x=P.slice(0,f),U=P.slice(f+1),C=q.match(hostnamePartStart);C&&(x.push(C[1]),U.unshift(C[2])),U.length&&(n="/"+U.join(".")+n),this.hostname=x.join(".");break}}}this.hostname.length>hostnameMaxLen?this.hostname="":this.hostname=this.hostname.toLowerCase(),y||(this.hostname=punycode.toASCII(this.hostname));var A=this.port?":"+this.port:"",w=this.hostname||"";this.host=w+A,this.href+=this.host,y&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==n[0]&&(n="/"+n))}if(!unsafeProtocol[u])for(var f=0,d=autoEscape.length;d>f;f++){var E=autoEscape[f];if(-1!==n.indexOf(E)){var I=encodeURIComponent(E);I===E&&(I=escape(E)),n=n.split(E).join(I)}}var R=n.indexOf("#");-1!==R&&(this.hash=n.substr(R),n=n.slice(0,R));var S=n.indexOf("?");if(-1!==S?(this.search=n.substr(S),this.query=n.substr(S+1),s&&(this.query=querystring.parse(this.query)),n=n.slice(0,S)):s&&(this.search="",this.query={}),n&&(this.pathname=n),slashedProtocol[u]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var A=this.pathname||"",k=this.search||"";this.path=A+k}return this.href=this.format(),this},Url.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var s=this.protocol||"",e=this.pathname||"",h=this.hash||"",r=!1,a="";this.host?r=t+this.host:this.hostname&&(r=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(r+=":"+this.port)),this.query&&util.isObject(this.query)&&Object.keys(this.query).length&&(a=querystring.stringify(this.query));var o=this.search||a&&"?"+a||"";return s&&":"!==s.substr(-1)&&(s+=":"),this.slashes||(!s||slashedProtocol[s])&&r!==!1?(r="//"+(r||""),e&&"/"!==e.charAt(0)&&(e="/"+e)):r||(r=""),h&&"#"!==h.charAt(0)&&(h="#"+h),o&&"?"!==o.charAt(0)&&(o="?"+o),e=e.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),o=o.replace("#","%23"),s+r+e+o+h},Url.prototype.resolve=function(t){return this.resolveObject(urlParse(t,!1,!0)).format()},Url.prototype.resolveObject=function(t){if(util.isString(t)){var s=new Url;s.parse(t,!1,!0),t=s}for(var e=new Url,h=Object.keys(this),r=0;r<h.length;r++){var a=h[r];e[a]=this[a]}if(e.hash=t.hash,""===t.href)return e.href=e.format(),e;if(t.slashes&&!t.protocol){for(var o=Object.keys(t),n=0;n<o.length;n++){var i=o[n];"protocol"!==i&&(e[i]=t[i])}return slashedProtocol[e.protocol]&&e.hostname&&!e.pathname&&(e.path=e.pathname="/"),e.href=e.format(),e}if(t.protocol&&t.protocol!==e.protocol){if(!slashedProtocol[t.protocol]){for(var l=Object.keys(t),u=0;u<l.length;u++){var p=l[u];e[p]=t[p]}return e.href=e.format(),e}if(e.protocol=t.protocol,t.host||hostlessProtocol[t.protocol])e.pathname=t.pathname;else{for(var c=(t.pathname||"").split("/");c.length&&!(t.host=c.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==c[0]&&c.unshift(""),c.length<2&&c.unshift(""),e.pathname=c.join("/")}if(e.search=t.search,e.query=t.query,e.host=t.host||"",e.auth=t.auth,e.hostname=t.hostname||t.host,e.port=t.port,e.pathname||e.search){var f=e.pathname||"",m=e.search||"";e.path=f+m}return e.slashes=e.slashes||t.slashes,e.href=e.format(),e}var v=e.pathname&&"/"===e.pathname.charAt(0),g=t.host||t.pathname&&"/"===t.pathname.charAt(0),y=g||v||e.host&&t.pathname,P=y,d=e.pathname&&e.pathname.split("/")||[],c=t.pathname&&t.pathname.split("/")||[],q=e.protocol&&!slashedProtocol[e.protocol];if(q&&(e.hostname="",e.port=null,e.host&&(""===d[0]?d[0]=e.host:d.unshift(e.host)),e.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===c[0]?c[0]=t.host:c.unshift(t.host)),t.host=null),y=y&&(""===c[0]||""===d[0])),g)e.host=t.host||""===t.host?t.host:e.host,e.hostname=t.hostname||""===t.hostname?t.hostname:e.hostname,e.search=t.search,e.query=t.query,d=c;else if(c.length)d||(d=[]),d.pop(),d=d.concat(c),e.search=t.search,e.query=t.query;else if(!util.isNullOrUndefined(t.search)){if(q){e.hostname=e.host=d.shift();var b=e.host&&e.host.indexOf("@")>0?e.host.split("@"):!1;b&&(e.auth=b.shift(),e.host=e.hostname=b.shift())}return e.search=t.search,e.query=t.query,util.isNull(e.pathname)&&util.isNull(e.search)||(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.href=e.format(),e}if(!d.length)return e.pathname=null,e.search?e.path="/"+e.search:e.path=null,e.href=e.format(),e;for(var O=d.slice(-1)[0],j=(e.host||t.host||d.length>1)&&("."===O||".."===O)||""===O,x=0,U=d.length;U>=0;U--)O=d[U],"."===O?d.splice(U,1):".."===O?(d.splice(U,1),x++):x&&(d.splice(U,1),x--);if(!y&&!P)for(;x--;x)d.unshift("..");!y||""===d[0]||d[0]&&"/"===d[0].charAt(0)||d.unshift(""),j&&"/"!==d.join("/").substr(-1)&&d.push("");var C=""===d[0]||d[0]&&"/"===d[0].charAt(0);if(q){e.hostname=e.host=C?"":d.length?d.shift():"";var b=e.host&&e.host.indexOf("@")>0?e.host.split("@"):!1;b&&(e.auth=b.shift(),e.host=e.hostname=b.shift())}return y=y||e.host&&d.length,y&&!C&&d.unshift(""),d.length?e.pathname=d.join("/"):(e.pathname=null,e.path=null),util.isNull(e.pathname)&&util.isNull(e.search)||(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.auth=t.auth||e.auth,e.slashes=e.slashes||t.slashes,e.href=e.format(),e},Url.prototype.parseHost=function(){var t=this.host,s=portPattern.exec(t);s&&(s=s[0],":"!==s&&(this.port=s.substr(1)),t=t.substr(0,t.length-s.length)),t&&(this.hostname=t)};

},{"./util":94,"punycode":89,"querystring":92}],94:[function(require,module,exports){
"use strict";module.exports={isString:function(n){return"string"==typeof n},isObject:function(n){return"object"==typeof n&&null!==n},isNull:function(n){return null===n},isNullOrUndefined:function(n){return null==n}};

},{}],95:[function(require,module,exports){
"use strict";var extend=require("extend"),url=require("url"),path=require("path");module.exports=function(){var e,r,t=Array.prototype.slice.call(arguments),n={};return t.length?1===t.length?t[0]:(r=t.map(function(r){var t="function"==typeof r?r():String(r||"");if(!t)return"";var a=url.parse(t,!0);return!e&&a&&(e=a),extend(n,a.query),a.pathname}).filter(function(e){return!!e}),delete e.search,e.query=n,e.pathname=path.join.apply(path,r).replace(new RegExp("\\"+path.sep,"g"),"/"),url.format(e)):""};

},{"extend":85,"path":87,"url":93}],96:[function(require,module,exports){
!function(){"use strict";function t(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function e(t){return"string"!=typeof t&&(t=String(t)),t}function r(t){this.map={},t instanceof r?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function o(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function n(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function s(t){var e=new FileReader;return e.readAsArrayBuffer(t),n(e)}function i(t){var e=new FileReader;return e.readAsText(t),n(e)}function a(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,"string"==typeof t)this._bodyText=t;else if(p.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(p.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(t){if(!p.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t))throw new Error("unsupported BodyInit type")}else this._bodyText=""},p.blob?(this.blob=function(){var t=o(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(s)},this.text=function(){var t=o(this);if(t)return t;if(this._bodyBlob)return i(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var t=o(this);return t?t:Promise.resolve(this._bodyText)},p.formData&&(this.formData=function(){return this.text().then(f)}),this.json=function(){return this.text().then(JSON.parse)},this}function u(t){var e=t.toUpperCase();return c.indexOf(e)>-1?e:t}function h(t,e){e=e||{};var o=e.body;if(h.prototype.isPrototypeOf(t)){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new r(t.headers)),this.method=t.method,this.mode=t.mode,o||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=t;if(this.credentials=e.credentials||this.credentials||"omit",(e.headers||!this.headers)&&(this.headers=new r(e.headers)),this.method=u(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function f(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function d(t){var e=new r,o=t.getAllResponseHeaders().trim().split("\n");return o.forEach(function(t){var r=t.trim().split(":"),o=r.shift().trim(),n=r.join(":").trim();e.append(o,n)}),e}function l(t,e){e||(e={}),this._initBody(t),this.type="default",this.status=e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText,this.headers=e.headers instanceof r?e.headers:new r(e.headers),this.url=e.url||""}if(!self.fetch){r.prototype.append=function(r,o){r=t(r),o=e(o);var n=this.map[r];n||(n=[],this.map[r]=n),n.push(o)},r.prototype["delete"]=function(e){delete this.map[t(e)]},r.prototype.get=function(e){var r=this.map[t(e)];return r?r[0]:null},r.prototype.getAll=function(e){return this.map[t(e)]||[]},r.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},r.prototype.set=function(r,o){this.map[t(r)]=[e(o)]},r.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(r){this.map[r].forEach(function(o){t.call(e,o,r,this)},this)},this)};var p={blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self},c=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this)},a.call(h.prototype),a.call(l.prototype),l.prototype.clone=function(){return new l(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new r(this.headers),url:this.url})},l.error=function(){var t=new l(null,{status:0,statusText:""});return t.type="error",t};var y=[301,302,303,307,308];l.redirect=function(t,e){if(-1===y.indexOf(e))throw new RangeError("Invalid status code");return new l(null,{status:e,headers:{location:t}})},self.Headers=r,self.Request=h,self.Response=l,self.fetch=function(t,e){return new Promise(function(r,o){function n(){return"responseURL"in i?i.responseURL:/^X-Request-URL:/m.test(i.getAllResponseHeaders())?i.getResponseHeader("X-Request-URL"):void 0}var s;s=h.prototype.isPrototypeOf(t)&&!e?t:new h(t,e);var i=new XMLHttpRequest;i.onload=function(){var t=1223===i.status?204:i.status;if(100>t||t>599)return void o(new TypeError("Network request failed"));var e={status:t,statusText:i.statusText,headers:d(i),url:n()},s="response"in i?i.response:i.responseText;r(new l(s,e))},i.onerror=function(){o(new TypeError("Network request failed"))},i.open(s.method,s.url,!0),"include"===s.credentials&&(i.withCredentials=!0),"responseType"in i&&p.blob&&(i.responseType="blob"),s.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send("undefined"==typeof s._bodyInit?null:s._bodyInit)})},self.fetch.polyfill=!0}}();

},{}],97:[function(require,module,exports){
module.exports={
  "name": "smooch-core",
  "version": "0.0.5",
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
    "release": "release"
  },
  "author": "Marc-Antoine Lemieux",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git@github.com:lemieux/smooch-core-js.git"
  },
  "devDependencies": {
    "babel": "^6.0.15",
    "babel-cli": "^6.0.15",
    "babel-core": "^6.0.20",
    "babel-plugin-transform-runtime": "^6.0.14",
    "babel-preset-es2015": "^6.0.14",
    "babel-preset-stage-2": "^6.0.15",
    "babel-runtime": "^6.0.14",
    "browserify": "^12.0.1",
    "chai": "^3.4.0",
    "mocha": "^2.3.3",
    "mocha-babel": "^3.0.0",
    "mocha-junit-reporter": "^1.9.0",
    "release-script": "^0.5.4",
    "should": "^7.1.1",
    "sinon": "^1.17.2",
    "sinon-chai": "^2.8.0",
    "uglifyify": "^3.0.1"
  },
  "dependencies": {
    "babel-runtime": "^6.0.14",
    "isomorphic-fetch": "^2.2.0",
    "jsonwebtoken": "^5.4.1",
    "urljoin": "^0.1.5"
  },
  "release-script": {
    "bowerRepo": "git@github.com:lemieux/smooch-core-js-bower.git"
  }
}

},{}]},{},[4])(4)
});