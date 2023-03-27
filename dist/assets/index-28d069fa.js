function uy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function cy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var js={},dy={get exports(){return js},set exports(e){js=e}},No={},I={},fy={get exports(){return I},set exports(e){I=e}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xi=Symbol.for("react.element"),hy=Symbol.for("react.portal"),py=Symbol.for("react.fragment"),gy=Symbol.for("react.strict_mode"),my=Symbol.for("react.profiler"),vy=Symbol.for("react.provider"),yy=Symbol.for("react.context"),wy=Symbol.for("react.forward_ref"),Ey=Symbol.for("react.suspense"),_y=Symbol.for("react.memo"),Sy=Symbol.for("react.lazy"),vd=Symbol.iterator;function Iy(e){return e===null||typeof e!="object"?null:(e=vd&&e[vd]||e["@@iterator"],typeof e=="function"?e:null)}var Nh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oh=Object.assign,xh={};function wr(e,t,n){this.props=e,this.context=t,this.refs=xh,this.updater=n||Nh}wr.prototype.isReactComponent={};wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Dh(){}Dh.prototype=wr.prototype;function Au(e,t,n){this.props=e,this.context=t,this.refs=xh,this.updater=n||Nh}var Pu=Au.prototype=new Dh;Pu.constructor=Au;Oh(Pu,wr.prototype);Pu.isPureReactComponent=!0;var yd=Array.isArray,Lh=Object.prototype.hasOwnProperty,Nu={current:null},Mh={key:!0,ref:!0,__self:!0,__source:!0};function $h(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Lh.call(t,r)&&!Mh.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:xi,type:e,key:s,ref:o,props:i,_owner:Nu.current}}function ky(e,t){return{$$typeof:xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ou(e){return typeof e=="object"&&e!==null&&e.$$typeof===xi}function Ty(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wd=/\/+/g;function yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ty(""+e.key):t.toString(36)}function Is(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case xi:case hy:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+yl(o,0):r,yd(i)?(n="",e!=null&&(n=e.replace(wd,"$&/")+"/"),Is(i,t,n,"",function(u){return u})):i!=null&&(Ou(i)&&(i=ky(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(wd,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",yd(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+yl(s,l);o+=Is(s,t,n,a,i)}else if(a=Iy(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+yl(s,l++),o+=Is(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ts(e,t,n){if(e==null)return e;var r=[],i=0;return Is(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Cy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},ks={transition:null},Ry={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:ks,ReactCurrentOwner:Nu};M.Children={map:ts,forEach:function(e,t,n){ts(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ts(e,function(){t++}),t},toArray:function(e){return ts(e,function(t){return t})||[]},only:function(e){if(!Ou(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=wr;M.Fragment=py;M.Profiler=my;M.PureComponent=Au;M.StrictMode=gy;M.Suspense=Ey;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ry;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Oh({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Nu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Lh.call(t,a)&&!Mh.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:xi,type:e.type,key:i,ref:s,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:yy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vy,_context:e},e.Consumer=e};M.createElement=$h;M.createFactory=function(e){var t=$h.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:wy,render:e}};M.isValidElement=Ou;M.lazy=function(e){return{$$typeof:Sy,_payload:{_status:-1,_result:e},_init:Cy}};M.memo=function(e,t){return{$$typeof:_y,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=ks.transition;ks.transition={};try{e()}finally{ks.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return ke.current.useCallback(e,t)};M.useContext=function(e){return ke.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};M.useEffect=function(e,t){return ke.current.useEffect(e,t)};M.useId=function(){return ke.current.useId()};M.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ke.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};M.useRef=function(e){return ke.current.useRef(e)};M.useState=function(e){return ke.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ke.current.useTransition()};M.version="18.2.0";(function(e){e.exports=M})(fy);const Uh=cy(I),ca=uy({__proto__:null,default:Uh},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay=I,Py=Symbol.for("react.element"),Ny=Symbol.for("react.fragment"),Oy=Object.prototype.hasOwnProperty,xy=Ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dy={key:!0,ref:!0,__self:!0,__source:!0};function Fh(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Oy.call(t,r)&&!Dy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Py,type:e,key:s,ref:o,props:i,_owner:xy.current}}No.Fragment=Ny;No.jsx=Fh;No.jsxs=Fh;(function(e){e.exports=No})(dy);const F=js.jsx,Bn=js.jsxs;var da={},fa={},Ly={get exports(){return fa},set exports(e){fa=e}},je={},ha={},My={get exports(){return ha},set exports(e){ha=e}},jh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,x){var D=k.length;k.push(x);e:for(;0<D;){var Y=D-1>>>1,ie=k[Y];if(0<i(ie,x))k[Y]=x,k[D]=ie,D=Y;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var x=k[0],D=k.pop();if(D!==x){k[0]=D;e:for(var Y=0,ie=k.length,Zi=ie>>>1;Y<Zi;){var dn=2*(Y+1)-1,vl=k[dn],fn=dn+1,es=k[fn];if(0>i(vl,D))fn<ie&&0>i(es,vl)?(k[Y]=es,k[fn]=D,Y=fn):(k[Y]=vl,k[dn]=D,Y=dn);else if(fn<ie&&0>i(es,D))k[Y]=es,k[fn]=D,Y=fn;else break e}}return x}function i(k,x){var D=k.sortIndex-x.sortIndex;return D!==0?D:k.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,p=null,g=3,m=!1,w=!1,v=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(k){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=k)r(u),x.sortIndex=x.expirationTime,t(a,x);else break;x=n(u)}}function y(k){if(v=!1,h(k),!w)if(n(a)!==null)w=!0,gl(_);else{var x=n(u);x!==null&&ml(y,x.startTime-k)}}function _(k,x){w=!1,v&&(v=!1,f(P),P=-1),m=!0;var D=g;try{for(h(x),p=n(a);p!==null&&(!(p.expirationTime>x)||k&&!Qe());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,g=p.priorityLevel;var ie=Y(p.expirationTime<=x);x=e.unstable_now(),typeof ie=="function"?p.callback=ie:p===n(a)&&r(a),h(x)}else r(a);p=n(a)}if(p!==null)var Zi=!0;else{var dn=n(u);dn!==null&&ml(y,dn.startTime-x),Zi=!1}return Zi}finally{p=null,g=D,m=!1}}var T=!1,C=null,P=-1,b=5,L=-1;function Qe(){return!(e.unstable_now()-L<b)}function Ar(){if(C!==null){var k=e.unstable_now();L=k;var x=!0;try{x=C(!0,k)}finally{x?Pr():(T=!1,C=null)}}else T=!1}var Pr;if(typeof c=="function")Pr=function(){c(Ar)};else if(typeof MessageChannel<"u"){var md=new MessageChannel,ay=md.port2;md.port1.onmessage=Ar,Pr=function(){ay.postMessage(null)}}else Pr=function(){A(Ar,0)};function gl(k){C=k,T||(T=!0,Pr())}function ml(k,x){P=A(function(){k(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){w||m||(w=!0,gl(_))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(k){switch(g){case 1:case 2:case 3:var x=3;break;default:x=g}var D=g;g=x;try{return k()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,x){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var D=g;g=k;try{return x()}finally{g=D}},e.unstable_scheduleCallback=function(k,x,D){var Y=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Y+D:Y):D=Y,k){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=D+ie,k={id:d++,callback:x,priorityLevel:k,startTime:D,expirationTime:ie,sortIndex:-1},D>Y?(k.sortIndex=D,t(u,k),n(a)===null&&k===n(u)&&(v?(f(P),P=-1):v=!0,ml(y,D-Y))):(k.sortIndex=ie,t(a,k),w||m||(w=!0,gl(_))),k},e.unstable_shouldYield=Qe,e.unstable_wrapCallback=function(k){var x=g;return function(){var D=g;g=x;try{return k.apply(this,arguments)}finally{g=D}}}})(jh);(function(e){e.exports=jh})(My);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh=I,Fe=ha;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bh=new Set,ii={};function $n(e,t){cr(e,t),cr(e+"Capture",t)}function cr(e,t){for(ii[e]=t,e=0;e<t.length;e++)Bh.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pa=Object.prototype.hasOwnProperty,$y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ed={},_d={};function Uy(e){return pa.call(_d,e)?!0:pa.call(Ed,e)?!1:$y.test(e)?_d[e]=!0:(Ed[e]=!0,!1)}function Fy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jy(e,t,n,r){if(t===null||typeof t>"u"||Fy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var xu=/[\-:]([a-z])/g;function Du(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xu,Du);de[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xu,Du);de[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xu,Du);de[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function Lu(e,t,n,r){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jy(t,n,i,r)&&(n=null),r||i===null?Uy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xt=zh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ns=Symbol.for("react.element"),bn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),Mu=Symbol.for("react.strict_mode"),ga=Symbol.for("react.profiler"),bh=Symbol.for("react.provider"),Hh=Symbol.for("react.context"),$u=Symbol.for("react.forward_ref"),ma=Symbol.for("react.suspense"),va=Symbol.for("react.suspense_list"),Uu=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),Vh=Symbol.for("react.offscreen"),Sd=Symbol.iterator;function Nr(e){return e===null||typeof e!="object"?null:(e=Sd&&e[Sd]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,wl;function jr(e){if(wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wl=t&&t[1]||""}return`
`+wl+e}var El=!1;function _l(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jr(e):""}function zy(e){switch(e.tag){case 5:return jr(e.type);case 16:return jr("Lazy");case 13:return jr("Suspense");case 19:return jr("SuspenseList");case 0:case 2:case 15:return e=_l(e.type,!1),e;case 11:return e=_l(e.type.render,!1),e;case 1:return e=_l(e.type,!0),e;default:return""}}function ya(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case bn:return"Portal";case ga:return"Profiler";case Mu:return"StrictMode";case ma:return"Suspense";case va:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hh:return(e.displayName||"Context")+".Consumer";case bh:return(e._context.displayName||"Context")+".Provider";case $u:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Uu:return t=e.displayName||null,t!==null?t:ya(e.type)||"Memo";case $t:t=e._payload,e=e._init;try{return ya(e(t))}catch{}}return null}function By(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ya(t);case 8:return t===Mu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function by(e){var t=Wh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rs(e){e._valueTracker||(e._valueTracker=by(e))}function Kh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wa(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Id(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gh(e,t){t=t.checked,t!=null&&Lu(e,"checked",t,!1)}function Ea(e,t){Gh(e,t);var n=rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_a(e,t.type,n):t.hasOwnProperty("defaultValue")&&_a(e,t.type,rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _a(e,t,n){(t!=="number"||zs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zr=Array.isArray;function tr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+rn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Sa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Td(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(zr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:rn(n)}}function qh(e,t){var n=rn(t.value),r=rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ia(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var is,Qh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(is=is||document.createElement("div"),is.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=is.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hy=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){Hy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function Yh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function Jh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Yh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Vy=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ka(e,t){if(t){if(Vy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Ta(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ca=null;function Fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ra=null,nr=null,rr=null;function Rd(e){if(e=Mi(e)){if(typeof Ra!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Mo(t),Ra(e.stateNode,e.type,t))}}function Zh(e){nr?rr?rr.push(e):rr=[e]:nr=e}function ep(){if(nr){var e=nr,t=rr;if(rr=nr=null,Rd(e),t)for(e=0;e<t.length;e++)Rd(t[e])}}function tp(e,t){return e(t)}function np(){}var Sl=!1;function rp(e,t,n){if(Sl)return e(t,n);Sl=!0;try{return tp(e,t,n)}finally{Sl=!1,(nr!==null||rr!==null)&&(np(),ep())}}function oi(e,t){var n=e.stateNode;if(n===null)return null;var r=Mo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Aa=!1;if(Ct)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Aa=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Aa=!1}function Wy(e,t,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Gr=!1,Bs=null,bs=!1,Pa=null,Ky={onError:function(e){Gr=!0,Bs=e}};function Gy(e,t,n,r,i,s,o,l,a){Gr=!1,Bs=null,Wy.apply(Ky,arguments)}function qy(e,t,n,r,i,s,o,l,a){if(Gy.apply(this,arguments),Gr){if(Gr){var u=Bs;Gr=!1,Bs=null}else throw Error(E(198));bs||(bs=!0,Pa=u)}}function Un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ip(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ad(e){if(Un(e)!==e)throw Error(E(188))}function Xy(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ad(i),e;if(s===r)return Ad(i),t;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function sp(e){return e=Xy(e),e!==null?op(e):null}function op(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=op(e);if(t!==null)return t;e=e.sibling}return null}var lp=Fe.unstable_scheduleCallback,Pd=Fe.unstable_cancelCallback,Qy=Fe.unstable_shouldYield,Yy=Fe.unstable_requestPaint,J=Fe.unstable_now,Jy=Fe.unstable_getCurrentPriorityLevel,ju=Fe.unstable_ImmediatePriority,ap=Fe.unstable_UserBlockingPriority,Hs=Fe.unstable_NormalPriority,Zy=Fe.unstable_LowPriority,up=Fe.unstable_IdlePriority,Oo=null,dt=null;function e0(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Oo,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:r0,t0=Math.log,n0=Math.LN2;function r0(e){return e>>>=0,e===0?32:31-(t0(e)/n0|0)|0}var ss=64,os=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Br(l):(s&=o,s!==0&&(r=Br(s)))}else o=n&~i,o!==0?r=Br(o):s!==0&&(r=Br(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),i=1<<n,r|=e[n],t&=~i;return r}function i0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-nt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=i0(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function Na(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cp(){var e=ss;return ss<<=1,!(ss&4194240)&&(ss=64),e}function Il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Di(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function o0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-nt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function zu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var z=0;function dp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fp,Bu,hp,pp,gp,Oa=!1,ls=[],Kt=null,Gt=null,qt=null,li=new Map,ai=new Map,Ft=[],l0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nd(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(t.pointerId)}}function xr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Mi(t),t!==null&&Bu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function a0(e,t,n,r,i){switch(t){case"focusin":return Kt=xr(Kt,e,t,n,r,i),!0;case"dragenter":return Gt=xr(Gt,e,t,n,r,i),!0;case"mouseover":return qt=xr(qt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return li.set(s,xr(li.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ai.set(s,xr(ai.get(s)||null,e,t,n,r,i)),!0}return!1}function mp(e){var t=mn(e.target);if(t!==null){var n=Un(t);if(n!==null){if(t=n.tag,t===13){if(t=ip(n),t!==null){e.blockedOn=t,gp(e.priority,function(){hp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ca=r,n.target.dispatchEvent(r),Ca=null}else return t=Mi(n),t!==null&&Bu(t),e.blockedOn=n,!1;t.shift()}return!0}function Od(e,t,n){Ts(e)&&n.delete(t)}function u0(){Oa=!1,Kt!==null&&Ts(Kt)&&(Kt=null),Gt!==null&&Ts(Gt)&&(Gt=null),qt!==null&&Ts(qt)&&(qt=null),li.forEach(Od),ai.forEach(Od)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,Oa||(Oa=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,u0)))}function ui(e){function t(i){return Dr(i,e)}if(0<ls.length){Dr(ls[0],e);for(var n=1;n<ls.length;n++){var r=ls[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kt!==null&&Dr(Kt,e),Gt!==null&&Dr(Gt,e),qt!==null&&Dr(qt,e),li.forEach(t),ai.forEach(t),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)mp(n),n.blockedOn===null&&Ft.shift()}var ir=xt.ReactCurrentBatchConfig,Ws=!0;function c0(e,t,n,r){var i=z,s=ir.transition;ir.transition=null;try{z=1,bu(e,t,n,r)}finally{z=i,ir.transition=s}}function d0(e,t,n,r){var i=z,s=ir.transition;ir.transition=null;try{z=4,bu(e,t,n,r)}finally{z=i,ir.transition=s}}function bu(e,t,n,r){if(Ws){var i=xa(e,t,n,r);if(i===null)Dl(e,t,r,Ks,n),Nd(e,r);else if(a0(i,e,t,n,r))r.stopPropagation();else if(Nd(e,r),t&4&&-1<l0.indexOf(e)){for(;i!==null;){var s=Mi(i);if(s!==null&&fp(s),s=xa(e,t,n,r),s===null&&Dl(e,t,r,Ks,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Dl(e,t,r,null,n)}}var Ks=null;function xa(e,t,n,r){if(Ks=null,e=Fu(r),e=mn(e),e!==null)if(t=Un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ip(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ks=e,null}function vp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jy()){case ju:return 1;case ap:return 4;case Hs:case Zy:return 16;case up:return 536870912;default:return 16}default:return 16}}var Ht=null,Hu=null,Cs=null;function yp(){if(Cs)return Cs;var e,t=Hu,n=t.length,r,i="value"in Ht?Ht.value:Ht.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Cs=i.slice(e,1<r?1-r:void 0)}function Rs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function as(){return!0}function xd(){return!1}function ze(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?as:xd,this.isPropagationStopped=xd,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=as)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=as)},persist:function(){},isPersistent:as}),t}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vu=ze(Er),Li=X({},Er,{view:0,detail:0}),f0=ze(Li),kl,Tl,Lr,xo=X({},Li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(kl=e.screenX-Lr.screenX,Tl=e.screenY-Lr.screenY):Tl=kl=0,Lr=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:Tl}}),Dd=ze(xo),h0=X({},xo,{dataTransfer:0}),p0=ze(h0),g0=X({},Li,{relatedTarget:0}),Cl=ze(g0),m0=X({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),v0=ze(m0),y0=X({},Er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),w0=ze(y0),E0=X({},Er,{data:0}),Ld=ze(E0),_0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=I0[e])?!!t[e]:!1}function Wu(){return k0}var T0=X({},Li,{key:function(e){if(e.key){var t=_0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?S0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(e){return e.type==="keypress"?Rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),C0=ze(T0),R0=X({},xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=ze(R0),A0=X({},Li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),P0=ze(A0),N0=X({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),O0=ze(N0),x0=X({},xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),D0=ze(x0),L0=[9,13,27,32],Ku=Ct&&"CompositionEvent"in window,qr=null;Ct&&"documentMode"in document&&(qr=document.documentMode);var M0=Ct&&"TextEvent"in window&&!qr,wp=Ct&&(!Ku||qr&&8<qr&&11>=qr),$d=String.fromCharCode(32),Ud=!1;function Ep(e,t){switch(e){case"keyup":return L0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function $0(e,t){switch(e){case"compositionend":return _p(t);case"keypress":return t.which!==32?null:(Ud=!0,$d);case"textInput":return e=t.data,e===$d&&Ud?null:e;default:return null}}function U0(e,t){if(Vn)return e==="compositionend"||!Ku&&Ep(e,t)?(e=yp(),Cs=Hu=Ht=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wp&&t.locale!=="ko"?null:t.data;default:return null}}var F0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!F0[e.type]:t==="textarea"}function Sp(e,t,n,r){Zh(r),t=Gs(t,"onChange"),0<t.length&&(n=new Vu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xr=null,ci=null;function j0(e){Dp(e,0)}function Do(e){var t=Gn(e);if(Kh(t))return e}function z0(e,t){if(e==="change")return t}var Ip=!1;if(Ct){var Rl;if(Ct){var Al="oninput"in document;if(!Al){var jd=document.createElement("div");jd.setAttribute("oninput","return;"),Al=typeof jd.oninput=="function"}Rl=Al}else Rl=!1;Ip=Rl&&(!document.documentMode||9<document.documentMode)}function zd(){Xr&&(Xr.detachEvent("onpropertychange",kp),ci=Xr=null)}function kp(e){if(e.propertyName==="value"&&Do(ci)){var t=[];Sp(t,ci,e,Fu(e)),rp(j0,t)}}function B0(e,t,n){e==="focusin"?(zd(),Xr=t,ci=n,Xr.attachEvent("onpropertychange",kp)):e==="focusout"&&zd()}function b0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Do(ci)}function H0(e,t){if(e==="click")return Do(t)}function V0(e,t){if(e==="input"||e==="change")return Do(t)}function W0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:W0;function di(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pa.call(t,i)||!it(e[i],t[i]))return!1}return!0}function Bd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bd(e,t){var n=Bd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bd(n)}}function Tp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cp(){for(var e=window,t=zs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zs(e.document)}return t}function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function K0(e){var t=Cp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tp(n.ownerDocument.documentElement,n)){if(r!==null&&Gu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=bd(n,s);var o=bd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var G0=Ct&&"documentMode"in document&&11>=document.documentMode,Wn=null,Da=null,Qr=null,La=!1;function Hd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;La||Wn==null||Wn!==zs(r)||(r=Wn,"selectionStart"in r&&Gu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&di(Qr,r)||(Qr=r,r=Gs(Da,"onSelect"),0<r.length&&(t=new Vu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wn)))}function us(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kn={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionend:us("Transition","TransitionEnd")},Pl={},Rp={};Ct&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function Lo(e){if(Pl[e])return Pl[e];if(!Kn[e])return e;var t=Kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rp)return Pl[e]=t[n];return e}var Ap=Lo("animationend"),Pp=Lo("animationiteration"),Np=Lo("animationstart"),Op=Lo("transitionend"),xp=new Map,Vd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function on(e,t){xp.set(e,t),$n(t,[e])}for(var Nl=0;Nl<Vd.length;Nl++){var Ol=Vd[Nl],q0=Ol.toLowerCase(),X0=Ol[0].toUpperCase()+Ol.slice(1);on(q0,"on"+X0)}on(Ap,"onAnimationEnd");on(Pp,"onAnimationIteration");on(Np,"onAnimationStart");on("dblclick","onDoubleClick");on("focusin","onFocus");on("focusout","onBlur");on(Op,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q0=new Set("cancel close invalid load scroll toggle".split(" ").concat(br));function Wd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qy(r,t,void 0,e),e.currentTarget=null}function Dp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Wd(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Wd(i,l,u),s=a}}}if(bs)throw e=Pa,bs=!1,Pa=null,e}function H(e,t){var n=t[ja];n===void 0&&(n=t[ja]=new Set);var r=e+"__bubble";n.has(r)||(Lp(t,e,2,!1),n.add(r))}function xl(e,t,n){var r=0;t&&(r|=4),Lp(n,e,r,t)}var cs="_reactListening"+Math.random().toString(36).slice(2);function fi(e){if(!e[cs]){e[cs]=!0,Bh.forEach(function(n){n!=="selectionchange"&&(Q0.has(n)||xl(n,!1,e),xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cs]||(t[cs]=!0,xl("selectionchange",!1,t))}}function Lp(e,t,n,r){switch(vp(t)){case 1:var i=c0;break;case 4:i=d0;break;default:i=bu}n=i.bind(null,t,n,e),i=void 0,!Aa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Dl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=mn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}rp(function(){var u=s,d=Fu(n),p=[];e:{var g=xp.get(e);if(g!==void 0){var m=Vu,w=e;switch(e){case"keypress":if(Rs(n)===0)break e;case"keydown":case"keyup":m=C0;break;case"focusin":w="focus",m=Cl;break;case"focusout":w="blur",m=Cl;break;case"beforeblur":case"afterblur":m=Cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=p0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=P0;break;case Ap:case Pp:case Np:m=v0;break;case Op:m=O0;break;case"scroll":m=f0;break;case"wheel":m=D0;break;case"copy":case"cut":case"paste":m=w0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Md}var v=(t&4)!==0,A=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var c=u,h;c!==null;){h=c;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,f!==null&&(y=oi(c,f),y!=null&&v.push(hi(c,y,h)))),A)break;c=c.return}0<v.length&&(g=new m(g,w,null,n,d),p.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",g&&n!==Ca&&(w=n.relatedTarget||n.fromElement)&&(mn(w)||w[Rt]))break e;if((m||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,m?(w=n.relatedTarget||n.toElement,m=u,w=w?mn(w):null,w!==null&&(A=Un(w),w!==A||w.tag!==5&&w.tag!==6)&&(w=null)):(m=null,w=u),m!==w)){if(v=Dd,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Md,y="onPointerLeave",f="onPointerEnter",c="pointer"),A=m==null?g:Gn(m),h=w==null?g:Gn(w),g=new v(y,c+"leave",m,n,d),g.target=A,g.relatedTarget=h,y=null,mn(d)===u&&(v=new v(f,c+"enter",w,n,d),v.target=h,v.relatedTarget=A,y=v),A=y,m&&w)t:{for(v=m,f=w,c=0,h=v;h;h=zn(h))c++;for(h=0,y=f;y;y=zn(y))h++;for(;0<c-h;)v=zn(v),c--;for(;0<h-c;)f=zn(f),h--;for(;c--;){if(v===f||f!==null&&v===f.alternate)break t;v=zn(v),f=zn(f)}v=null}else v=null;m!==null&&Kd(p,g,m,v,!1),w!==null&&A!==null&&Kd(p,A,w,v,!0)}}e:{if(g=u?Gn(u):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var _=z0;else if(Fd(g))if(Ip)_=V0;else{_=b0;var T=B0}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(_=H0);if(_&&(_=_(e,u))){Sp(p,_,n,d);break e}T&&T(e,g,u),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&_a(g,"number",g.value)}switch(T=u?Gn(u):window,e){case"focusin":(Fd(T)||T.contentEditable==="true")&&(Wn=T,Da=u,Qr=null);break;case"focusout":Qr=Da=Wn=null;break;case"mousedown":La=!0;break;case"contextmenu":case"mouseup":case"dragend":La=!1,Hd(p,n,d);break;case"selectionchange":if(G0)break;case"keydown":case"keyup":Hd(p,n,d)}var C;if(Ku)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Vn?Ep(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(wp&&n.locale!=="ko"&&(Vn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Vn&&(C=yp()):(Ht=d,Hu="value"in Ht?Ht.value:Ht.textContent,Vn=!0)),T=Gs(u,P),0<T.length&&(P=new Ld(P,e,null,n,d),p.push({event:P,listeners:T}),C?P.data=C:(C=_p(n),C!==null&&(P.data=C)))),(C=M0?$0(e,n):U0(e,n))&&(u=Gs(u,"onBeforeInput"),0<u.length&&(d=new Ld("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=C))}Dp(p,t)})}function hi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=oi(e,n),s!=null&&r.unshift(hi(e,s,i)),s=oi(e,t),s!=null&&r.push(hi(e,s,i))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kd(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=oi(n,s),a!=null&&o.unshift(hi(n,a,l))):i||(a=oi(n,s),a!=null&&o.push(hi(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Y0=/\r\n?/g,J0=/\u0000|\uFFFD/g;function Gd(e){return(typeof e=="string"?e:""+e).replace(Y0,`
`).replace(J0,"")}function ds(e,t,n){if(t=Gd(t),Gd(e)!==t&&n)throw Error(E(425))}function qs(){}var Ma=null,$a=null;function Ua(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fa=typeof setTimeout=="function"?setTimeout:void 0,Z0=typeof clearTimeout=="function"?clearTimeout:void 0,qd=typeof Promise=="function"?Promise:void 0,e1=typeof queueMicrotask=="function"?queueMicrotask:typeof qd<"u"?function(e){return qd.resolve(null).then(e).catch(t1)}:Fa;function t1(e){setTimeout(function(){throw e})}function Ll(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ui(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ui(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),ut="__reactFiber$"+_r,pi="__reactProps$"+_r,Rt="__reactContainer$"+_r,ja="__reactEvents$"+_r,n1="__reactListeners$"+_r,r1="__reactHandles$"+_r;function mn(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xd(e);e!==null;){if(n=e[ut])return n;e=Xd(e)}return t}e=n,n=e.parentNode}return null}function Mi(e){return e=e[ut]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Mo(e){return e[pi]||null}var za=[],qn=-1;function ln(e){return{current:e}}function V(e){0>qn||(e.current=za[qn],za[qn]=null,qn--)}function B(e,t){qn++,za[qn]=e.current,e.current=t}var sn={},we=ln(sn),Ae=ln(!1),Rn=sn;function dr(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pe(e){return e=e.childContextTypes,e!=null}function Xs(){V(Ae),V(we)}function Qd(e,t,n){if(we.current!==sn)throw Error(E(168));B(we,t),B(Ae,n)}function Mp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,By(e)||"Unknown",i));return X({},n,r)}function Qs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,Rn=we.current,B(we,e),B(Ae,Ae.current),!0}function Yd(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Mp(e,t,Rn),r.__reactInternalMemoizedMergedChildContext=e,V(Ae),V(we),B(we,e)):V(Ae),B(Ae,n)}var yt=null,$o=!1,Ml=!1;function $p(e){yt===null?yt=[e]:yt.push(e)}function i1(e){$o=!0,$p(e)}function an(){if(!Ml&&yt!==null){Ml=!0;var e=0,t=z;try{var n=yt;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yt=null,$o=!1}catch(i){throw yt!==null&&(yt=yt.slice(e+1)),lp(ju,an),i}finally{z=t,Ml=!1}}return null}var Xn=[],Qn=0,Ys=null,Js=0,Be=[],be=0,An=null,Et=1,_t="";function hn(e,t){Xn[Qn++]=Js,Xn[Qn++]=Ys,Ys=e,Js=t}function Up(e,t,n){Be[be++]=Et,Be[be++]=_t,Be[be++]=An,An=e;var r=Et;e=_t;var i=32-nt(r)-1;r&=~(1<<i),n+=1;var s=32-nt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Et=1<<32-nt(t)+i|n<<i|r,_t=s+e}else Et=1<<s|n<<i|r,_t=e}function qu(e){e.return!==null&&(hn(e,1),Up(e,1,0))}function Xu(e){for(;e===Ys;)Ys=Xn[--Qn],Xn[Qn]=null,Js=Xn[--Qn],Xn[Qn]=null;for(;e===An;)An=Be[--be],Be[be]=null,_t=Be[--be],Be[be]=null,Et=Be[--be],Be[be]=null}var Le=null,xe=null,W=!1,tt=null;function Fp(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Jd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,xe=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:Et,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,xe=null,!0):!1;default:return!1}}function Ba(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ba(e){if(W){var t=xe;if(t){var n=t;if(!Jd(e,t)){if(Ba(e))throw Error(E(418));t=Xt(n.nextSibling);var r=Le;t&&Jd(e,t)?Fp(r,n):(e.flags=e.flags&-4097|2,W=!1,Le=e)}}else{if(Ba(e))throw Error(E(418));e.flags=e.flags&-4097|2,W=!1,Le=e}}}function Zd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function fs(e){if(e!==Le)return!1;if(!W)return Zd(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ua(e.type,e.memoizedProps)),t&&(t=xe)){if(Ba(e))throw jp(),Error(E(418));for(;t;)Fp(e,t),t=Xt(t.nextSibling)}if(Zd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=Le?Xt(e.stateNode.nextSibling):null;return!0}function jp(){for(var e=xe;e;)e=Xt(e.nextSibling)}function fr(){xe=Le=null,W=!1}function Qu(e){tt===null?tt=[e]:tt.push(e)}var s1=xt.ReactCurrentBatchConfig;function Ze(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Zs=ln(null),eo=null,Yn=null,Yu=null;function Ju(){Yu=Yn=eo=null}function Zu(e){var t=Zs.current;V(Zs),e._currentValue=t}function Ha(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sr(e,t){eo=e,Yu=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(Yu!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(eo===null)throw Error(E(308));Yn=e,eo.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var vn=null;function ec(e){vn===null?vn=[e]:vn.push(e)}function zp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ec(t)):(n.next=i.next,i.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function tc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,At(e,n)}return i=r.interleaved,i===null?(t.next=t,ec(r)):(t.next=i.next,i.next=t),r.interleaved=t,At(e,n)}function As(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zu(e,n)}}function ef(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function to(e,t,n,r){var i=e.updateQueue;Ut=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var p=i.baseState;o=0,d=u=a=null,l=s;do{var g=l.lane,m=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,v=l;switch(g=t,m=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){p=w.call(m,p,g);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,g=typeof w=="function"?w.call(m,p,g):w,g==null)break e;p=X({},p,g);break e;case 2:Ut=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else m={eventTime:m,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,a=p):d=d.next=m,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(d===null&&(a=p),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Nn|=o,e.lanes=o,e.memoizedState=p}}function tf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var bp=new zh.Component().refs;function Va(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Uo={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=Jt(e),s=Tt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Qt(e,s,i),t!==null&&(rt(t,e,i,r),As(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=Jt(e),s=Tt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Qt(e,s,i),t!==null&&(rt(t,e,i,r),As(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=Jt(e),i=Tt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Qt(e,i,r),t!==null&&(rt(t,e,r,n),As(t,e,r))}};function nf(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!di(n,r)||!di(i,s):!0}function Hp(e,t,n){var r=!1,i=sn,s=t.contextType;return typeof s=="object"&&s!==null?s=Ge(s):(i=Pe(t)?Rn:we.current,r=t.contextTypes,s=(r=r!=null)?dr(e,i):sn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Uo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function rf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Uo.enqueueReplaceState(t,t.state,null)}function Wa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=bp,tc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ge(s):(s=Pe(t)?Rn:we.current,i.context=dr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Va(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Uo.enqueueReplaceState(i,i.state,null),to(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;l===bp&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function hs(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sf(e){var t=e._init;return t(e._payload)}function Vp(e){function t(f,c){if(e){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Zt(f,c),f.index=0,f.sibling=null,f}function s(f,c,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,c,h,y){return c===null||c.tag!==6?(c=bl(h,f.mode,y),c.return=f,c):(c=i(c,h),c.return=f,c)}function a(f,c,h,y){var _=h.type;return _===Hn?d(f,c,h.props.children,y,h.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===$t&&sf(_)===c.type)?(y=i(c,h.props),y.ref=Mr(f,c,h),y.return=f,y):(y=Ls(h.type,h.key,h.props,null,f.mode,y),y.ref=Mr(f,c,h),y.return=f,y)}function u(f,c,h,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=Hl(h,f.mode,y),c.return=f,c):(c=i(c,h.children||[]),c.return=f,c)}function d(f,c,h,y,_){return c===null||c.tag!==7?(c=kn(h,f.mode,y,_),c.return=f,c):(c=i(c,h),c.return=f,c)}function p(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=bl(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ns:return h=Ls(c.type,c.key,c.props,null,f.mode,h),h.ref=Mr(f,null,c),h.return=f,h;case bn:return c=Hl(c,f.mode,h),c.return=f,c;case $t:var y=c._init;return p(f,y(c._payload),h)}if(zr(c)||Nr(c))return c=kn(c,f.mode,h,null),c.return=f,c;hs(f,c)}return null}function g(f,c,h,y){var _=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return _!==null?null:l(f,c,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ns:return h.key===_?a(f,c,h,y):null;case bn:return h.key===_?u(f,c,h,y):null;case $t:return _=h._init,g(f,c,_(h._payload),y)}if(zr(h)||Nr(h))return _!==null?null:d(f,c,h,y,null);hs(f,h)}return null}function m(f,c,h,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(h)||null,l(c,f,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ns:return f=f.get(y.key===null?h:y.key)||null,a(c,f,y,_);case bn:return f=f.get(y.key===null?h:y.key)||null,u(c,f,y,_);case $t:var T=y._init;return m(f,c,h,T(y._payload),_)}if(zr(y)||Nr(y))return f=f.get(h)||null,d(c,f,y,_,null);hs(c,y)}return null}function w(f,c,h,y){for(var _=null,T=null,C=c,P=c=0,b=null;C!==null&&P<h.length;P++){C.index>P?(b=C,C=null):b=C.sibling;var L=g(f,C,h[P],y);if(L===null){C===null&&(C=b);break}e&&C&&L.alternate===null&&t(f,C),c=s(L,c,P),T===null?_=L:T.sibling=L,T=L,C=b}if(P===h.length)return n(f,C),W&&hn(f,P),_;if(C===null){for(;P<h.length;P++)C=p(f,h[P],y),C!==null&&(c=s(C,c,P),T===null?_=C:T.sibling=C,T=C);return W&&hn(f,P),_}for(C=r(f,C);P<h.length;P++)b=m(C,f,P,h[P],y),b!==null&&(e&&b.alternate!==null&&C.delete(b.key===null?P:b.key),c=s(b,c,P),T===null?_=b:T.sibling=b,T=b);return e&&C.forEach(function(Qe){return t(f,Qe)}),W&&hn(f,P),_}function v(f,c,h,y){var _=Nr(h);if(typeof _!="function")throw Error(E(150));if(h=_.call(h),h==null)throw Error(E(151));for(var T=_=null,C=c,P=c=0,b=null,L=h.next();C!==null&&!L.done;P++,L=h.next()){C.index>P?(b=C,C=null):b=C.sibling;var Qe=g(f,C,L.value,y);if(Qe===null){C===null&&(C=b);break}e&&C&&Qe.alternate===null&&t(f,C),c=s(Qe,c,P),T===null?_=Qe:T.sibling=Qe,T=Qe,C=b}if(L.done)return n(f,C),W&&hn(f,P),_;if(C===null){for(;!L.done;P++,L=h.next())L=p(f,L.value,y),L!==null&&(c=s(L,c,P),T===null?_=L:T.sibling=L,T=L);return W&&hn(f,P),_}for(C=r(f,C);!L.done;P++,L=h.next())L=m(C,f,P,L.value,y),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?P:L.key),c=s(L,c,P),T===null?_=L:T.sibling=L,T=L);return e&&C.forEach(function(Ar){return t(f,Ar)}),W&&hn(f,P),_}function A(f,c,h,y){if(typeof h=="object"&&h!==null&&h.type===Hn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ns:e:{for(var _=h.key,T=c;T!==null;){if(T.key===_){if(_=h.type,_===Hn){if(T.tag===7){n(f,T.sibling),c=i(T,h.props.children),c.return=f,f=c;break e}}else if(T.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===$t&&sf(_)===T.type){n(f,T.sibling),c=i(T,h.props),c.ref=Mr(f,T,h),c.return=f,f=c;break e}n(f,T);break}else t(f,T);T=T.sibling}h.type===Hn?(c=kn(h.props.children,f.mode,y,h.key),c.return=f,f=c):(y=Ls(h.type,h.key,h.props,null,f.mode,y),y.ref=Mr(f,c,h),y.return=f,f=y)}return o(f);case bn:e:{for(T=h.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=i(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Hl(h,f.mode,y),c.return=f,f=c}return o(f);case $t:return T=h._init,A(f,c,T(h._payload),y)}if(zr(h))return w(f,c,h,y);if(Nr(h))return v(f,c,h,y);hs(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,h),c.return=f,f=c):(n(f,c),c=bl(h,f.mode,y),c.return=f,f=c),o(f)):n(f,c)}return A}var hr=Vp(!0),Wp=Vp(!1),$i={},ft=ln($i),gi=ln($i),mi=ln($i);function yn(e){if(e===$i)throw Error(E(174));return e}function nc(e,t){switch(B(mi,t),B(gi,e),B(ft,$i),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ia(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ia(t,e)}V(ft),B(ft,t)}function pr(){V(ft),V(gi),V(mi)}function Kp(e){yn(mi.current);var t=yn(ft.current),n=Ia(t,e.type);t!==n&&(B(gi,e),B(ft,n))}function rc(e){gi.current===e&&(V(ft),V(gi))}var G=ln(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $l=[];function ic(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var Ps=xt.ReactCurrentDispatcher,Ul=xt.ReactCurrentBatchConfig,Pn=0,q=null,te=null,se=null,ro=!1,Yr=!1,vi=0,o1=0;function he(){throw Error(E(321))}function sc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function oc(e,t,n,r,i,s){if(Pn=s,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ps.current=e===null||e.memoizedState===null?c1:d1,e=n(r,i),Yr){s=0;do{if(Yr=!1,vi=0,25<=s)throw Error(E(301));s+=1,se=te=null,t.updateQueue=null,Ps.current=f1,e=n(r,i)}while(Yr)}if(Ps.current=io,t=te!==null&&te.next!==null,Pn=0,se=te=q=null,ro=!1,t)throw Error(E(300));return e}function lc(){var e=vi!==0;return vi=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?q.memoizedState=se=e:se=se.next=e,se}function qe(){if(te===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=se===null?q.memoizedState:se.next;if(t!==null)se=t,te=e;else{if(e===null)throw Error(E(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},se===null?q.memoizedState=se=e:se=se.next=e}return se}function yi(e,t){return typeof t=="function"?t(e):t}function Fl(e){var t=qe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Pn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=p,o=r):a=a.next=p,q.lanes|=d,Nn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,it(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,q.lanes|=s,Nn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function jl(e){var t=qe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);it(s,t.memoizedState)||(Re=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Gp(){}function qp(e,t){var n=q,r=qe(),i=t(),s=!it(r.memoizedState,i);if(s&&(r.memoizedState=i,Re=!0),r=r.queue,ac(Yp.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,wi(9,Qp.bind(null,n,r,i,t),void 0,null),oe===null)throw Error(E(349));Pn&30||Xp(n,t,i)}return i}function Xp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qp(e,t,n,r){t.value=n,t.getSnapshot=r,Jp(t)&&Zp(e)}function Yp(e,t,n){return n(function(){Jp(t)&&Zp(e)})}function Jp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function Zp(e){var t=At(e,1);t!==null&&rt(t,e,1,-1)}function of(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:e},t.queue=e,e=e.dispatch=u1.bind(null,q,e),[t.memoizedState,e]}function wi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function eg(){return qe().memoizedState}function Ns(e,t,n,r){var i=at();q.flags|=e,i.memoizedState=wi(1|t,n,void 0,r===void 0?null:r)}function Fo(e,t,n,r){var i=qe();r=r===void 0?null:r;var s=void 0;if(te!==null){var o=te.memoizedState;if(s=o.destroy,r!==null&&sc(r,o.deps)){i.memoizedState=wi(t,n,s,r);return}}q.flags|=e,i.memoizedState=wi(1|t,n,s,r)}function lf(e,t){return Ns(8390656,8,e,t)}function ac(e,t){return Fo(2048,8,e,t)}function tg(e,t){return Fo(4,2,e,t)}function ng(e,t){return Fo(4,4,e,t)}function rg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ig(e,t,n){return n=n!=null?n.concat([e]):null,Fo(4,4,rg.bind(null,t,e),n)}function uc(){}function sg(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function og(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lg(e,t,n){return Pn&21?(it(n,t)||(n=cp(),q.lanes|=n,Nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function l1(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{z=n,Ul.transition=r}}function ag(){return qe().memoizedState}function a1(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ug(e))cg(t,n);else if(n=zp(e,t,n,r),n!==null){var i=Ie();rt(n,e,r,i),dg(n,t,r)}}function u1(e,t,n){var r=Jt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ug(e))cg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,it(l,o)){var a=t.interleaved;a===null?(i.next=i,ec(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=zp(e,t,i,r),n!==null&&(i=Ie(),rt(n,e,r,i),dg(n,t,r))}}function ug(e){var t=e.alternate;return e===q||t!==null&&t===q}function cg(e,t){Yr=ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zu(e,n)}}var io={readContext:Ge,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},c1={readContext:Ge,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:lf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ns(4194308,4,rg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ns(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ns(4,2,e,t)},useMemo:function(e,t){var n=at();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=at();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=a1.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:of,useDebugValue:uc,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=of(!1),t=e[0];return e=l1.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,i=at();if(W){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),oe===null)throw Error(E(349));Pn&30||Xp(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,lf(Yp.bind(null,r,s,e),[e]),r.flags|=2048,wi(9,Qp.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=at(),t=oe.identifierPrefix;if(W){var n=_t,r=Et;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=o1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},d1={readContext:Ge,useCallback:sg,useContext:Ge,useEffect:ac,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:og,useReducer:Fl,useRef:eg,useState:function(){return Fl(yi)},useDebugValue:uc,useDeferredValue:function(e){var t=qe();return lg(t,te.memoizedState,e)},useTransition:function(){var e=Fl(yi)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Gp,useSyncExternalStore:qp,useId:ag,unstable_isNewReconciler:!1},f1={readContext:Ge,useCallback:sg,useContext:Ge,useEffect:ac,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:og,useReducer:jl,useRef:eg,useState:function(){return jl(yi)},useDebugValue:uc,useDeferredValue:function(e){var t=qe();return te===null?t.memoizedState=e:lg(t,te.memoizedState,e)},useTransition:function(){var e=jl(yi)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Gp,useSyncExternalStore:qp,useId:ag,unstable_isNewReconciler:!1};function gr(e,t){try{var n="",r=t;do n+=zy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function zl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ka(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var h1=typeof WeakMap=="function"?WeakMap:Map;function fg(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,nu=r),Ka(e,t)},n}function hg(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ka(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ka(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function af(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new h1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=R1.bind(null,e,t,n),t.then(e,e))}function uf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,Qt(n,t,1))),n.lanes|=1),e)}var p1=xt.ReactCurrentOwner,Re=!1;function _e(e,t,n,r){t.child=e===null?Wp(t,null,n,r):hr(t,e.child,n,r)}function df(e,t,n,r,i){n=n.render;var s=t.ref;return sr(t,i),r=oc(e,t,n,r,s,i),n=lc(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(W&&n&&qu(t),t.flags|=1,_e(e,t,r,i),t.child)}function ff(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!vc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,pg(e,t,s,r,i)):(e=Ls(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:di,n(o,r)&&e.ref===t.ref)return Pt(e,t,i)}return t.flags|=1,e=Zt(s,r),e.ref=t.ref,e.return=t,t.child=e}function pg(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(di(s,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Pt(e,t,i)}return Ga(e,t,n,r,i)}function gg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Zn,Oe),Oe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Zn,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,B(Zn,Oe),Oe|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,B(Zn,Oe),Oe|=r;return _e(e,t,i,n),t.child}function mg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ga(e,t,n,r,i){var s=Pe(n)?Rn:we.current;return s=dr(t,s),sr(t,i),n=oc(e,t,n,r,s,i),r=lc(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(W&&r&&qu(t),t.flags|=1,_e(e,t,n,i),t.child)}function hf(e,t,n,r,i){if(Pe(n)){var s=!0;Qs(t)}else s=!1;if(sr(t,i),t.stateNode===null)Os(e,t),Hp(t,n,r),Wa(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ge(u):(u=Pe(n)?Rn:we.current,u=dr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&rf(t,o,r,u),Ut=!1;var g=t.memoizedState;o.state=g,to(t,r,o,i),a=t.memoizedState,l!==r||g!==a||Ae.current||Ut?(typeof d=="function"&&(Va(t,n,d,r),a=t.memoizedState),(l=Ut||nf(t,n,l,r,g,a,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Bp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ze(t.type,l),o.props=u,p=t.pendingProps,g=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ge(a):(a=Pe(n)?Rn:we.current,a=dr(t,a));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==a)&&rf(t,o,r,a),Ut=!1,g=t.memoizedState,o.state=g,to(t,r,o,i);var w=t.memoizedState;l!==p||g!==w||Ae.current||Ut?(typeof m=="function"&&(Va(t,n,m,r),w=t.memoizedState),(u=Ut||nf(t,n,u,r,g,w,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return qa(e,t,n,r,s,i)}function qa(e,t,n,r,i,s){mg(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Yd(t,n,!1),Pt(e,t,s);r=t.stateNode,p1.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=hr(t,e.child,null,s),t.child=hr(t,null,l,s)):_e(e,t,l,s),t.memoizedState=r.state,i&&Yd(t,n,!0),t.child}function vg(e){var t=e.stateNode;t.pendingContext?Qd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qd(e,t.context,!1),nc(e,t.containerInfo)}function pf(e,t,n,r,i){return fr(),Qu(i),t.flags|=256,_e(e,t,n,r),t.child}var Xa={dehydrated:null,treeContext:null,retryLane:0};function Qa(e){return{baseLanes:e,cachePool:null,transitions:null}}function yg(e,t,n){var r=t.pendingProps,i=G.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(G,i&1),e===null)return ba(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bo(o,r,0,null),e=kn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Qa(n),t.memoizedState=Xa,e):cc(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return g1(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Zt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Zt(l,s):(s=kn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Qa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Xa,r}return s=e.child,e=s.sibling,r=Zt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cc(e,t){return t=Bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ps(e,t,n,r){return r!==null&&Qu(r),hr(t,e.child,null,n),e=cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function g1(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=zl(Error(E(422))),ps(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Bo({mode:"visible",children:r.children},i,0,null),s=kn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&hr(t,e.child,null,o),t.child.memoizedState=Qa(o),t.memoizedState=Xa,s);if(!(t.mode&1))return ps(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=zl(s,r,void 0),ps(e,t,o,r)}if(l=(o&e.childLanes)!==0,Re||l){if(r=oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,At(e,i),rt(r,e,i,-1))}return mc(),r=zl(Error(E(421))),ps(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=A1.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,xe=Xt(i.nextSibling),Le=t,W=!0,tt=null,e!==null&&(Be[be++]=Et,Be[be++]=_t,Be[be++]=An,Et=e.id,_t=e.overflow,An=t),t=cc(t,r.children),t.flags|=4096,t)}function gf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ha(e.return,t,n)}function Bl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function wg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(_e(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gf(e,n,t);else if(e.tag===19)gf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&no(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&no(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bl(t,!0,n,null,s);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Os(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function m1(e,t,n){switch(t.tag){case 3:vg(t),fr();break;case 5:Kp(t);break;case 1:Pe(t.type)&&Qs(t);break;case 4:nc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Zs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?yg(e,t,n):(B(G,G.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);B(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,gg(e,t,n)}return Pt(e,t,n)}var Eg,Ya,_g,Sg;Eg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ya=function(){};_g=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,yn(ft.current);var s=null;switch(n){case"input":i=wa(e,i),r=wa(e,r),s=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),s=[];break;case"textarea":i=Sa(e,i),r=Sa(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qs)}ka(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ii.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ii.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&H("scroll",e),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Sg=function(e,t,n,r){n!==r&&(t.flags|=4)};function $r(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function v1(e,t,n){var r=t.pendingProps;switch(Xu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Pe(t.type)&&Xs(),pe(t),null;case 3:return r=t.stateNode,pr(),V(Ae),V(we),ic(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tt!==null&&(su(tt),tt=null))),Ya(e,t),pe(t),null;case 5:rc(t);var i=yn(mi.current);if(n=t.type,e!==null&&t.stateNode!=null)_g(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return pe(t),null}if(e=yn(ft.current),fs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[ut]=t,r[pi]=s,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<br.length;i++)H(br[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Id(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":Td(r,s),H("invalid",r)}ka(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ds(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ds(r.textContent,l,e),i=["children",""+l]):ii.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":rs(r),kd(r,s,!0);break;case"textarea":rs(r),Cd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=qs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ut]=t,e[pi]=r,Eg(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ta(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<br.length;i++)H(br[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":Id(e,r),i=wa(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),H("invalid",e);break;case"textarea":Td(e,r),i=Sa(e,r),H("invalid",e);break;default:i=r}ka(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Jh(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Qh(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&si(e,a):typeof a=="number"&&si(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ii.hasOwnProperty(s)?a!=null&&s==="onScroll"&&H("scroll",e):a!=null&&Lu(e,s,a,o))}switch(n){case"input":rs(e),kd(e,r,!1);break;case"textarea":rs(e),Cd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+rn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?tr(e,!!r.multiple,s,!1):r.defaultValue!=null&&tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=qs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)Sg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=yn(mi.current),yn(ft.current),fs(t)){if(r=t.stateNode,n=t.memoizedProps,r[ut]=t,(s=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:ds(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ds(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ut]=t,t.stateNode=r}return pe(t),null;case 13:if(V(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&xe!==null&&t.mode&1&&!(t.flags&128))jp(),fr(),t.flags|=98560,s=!1;else if(s=fs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[ut]=t}else fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),s=!1}else tt!==null&&(su(tt),tt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ne===0&&(ne=3):mc())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return pr(),Ya(e,t),e===null&&fi(t.stateNode.containerInfo),pe(t),null;case 10:return Zu(t.type._context),pe(t),null;case 17:return Pe(t.type)&&Xs(),pe(t),null;case 19:if(V(G),s=t.memoizedState,s===null)return pe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)$r(s,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=no(e),o!==null){for(t.flags|=128,$r(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(G,G.current&1|2),t.child}e=e.sibling}s.tail!==null&&J()>mr&&(t.flags|=128,r=!0,$r(s,!1),t.lanes=4194304)}else{if(!r)if(e=no(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$r(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!W)return pe(t),null}else 2*J()-s.renderingStartTime>mr&&n!==1073741824&&(t.flags|=128,r=!0,$r(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=J(),t.sibling=null,n=G.current,B(G,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return gc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Oe&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function y1(e,t){switch(Xu(t),t.tag){case 1:return Pe(t.type)&&Xs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(),V(Ae),V(we),ic(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return rc(t),null;case 13:if(V(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(G),null;case 4:return pr(),null;case 10:return Zu(t.type._context),null;case 22:case 23:return gc(),null;case 24:return null;default:return null}}var gs=!1,me=!1,w1=typeof WeakSet=="function"?WeakSet:Set,S=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Ja(e,t,n){try{n()}catch(r){Q(e,t,r)}}var mf=!1;function E1(e,t){if(Ma=Ws,e=Cp(),Gu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,p=e,g=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(a=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(m=p.firstChild)!==null;)g=p,p=m;for(;;){if(p===e)break t;if(g===n&&++u===i&&(l=o),g===s&&++d===r&&(a=o),(m=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for($a={focusedElem:e,selectionRange:n},Ws=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,A=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ze(t.type,v),A);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){Q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return w=mf,mf=!1,w}function Jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ja(t,n,s)}i=i.next}while(i!==r)}}function jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Za(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ig(e){var t=e.alternate;t!==null&&(e.alternate=null,Ig(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ut],delete t[pi],delete t[ja],delete t[n1],delete t[r1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kg(e){return e.tag===5||e.tag===3||e.tag===4}function vf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qs));else if(r!==4&&(e=e.child,e!==null))for(eu(e,t,n),e=e.sibling;e!==null;)eu(e,t,n),e=e.sibling}function tu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(tu(e,t,n),e=e.sibling;e!==null;)tu(e,t,n),e=e.sibling}var ae=null,et=!1;function Lt(e,t,n){for(n=n.child;n!==null;)Tg(e,t,n),n=n.sibling}function Tg(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Oo,n)}catch{}switch(n.tag){case 5:me||Jn(n,t);case 6:var r=ae,i=et;ae=null,Lt(e,t,n),ae=r,et=i,ae!==null&&(et?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(et?(e=ae,n=n.stateNode,e.nodeType===8?Ll(e.parentNode,n):e.nodeType===1&&Ll(e,n),ui(e)):Ll(ae,n.stateNode));break;case 4:r=ae,i=et,ae=n.stateNode.containerInfo,et=!0,Lt(e,t,n),ae=r,et=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ja(n,t,o),i=i.next}while(i!==r)}Lt(e,t,n);break;case 1:if(!me&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Q(n,t,l)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,Lt(e,t,n),me=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function yf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new w1),t.forEach(function(r){var i=P1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ae=l.stateNode,et=!1;break e;case 3:ae=l.stateNode.containerInfo,et=!0;break e;case 4:ae=l.stateNode.containerInfo,et=!0;break e}l=l.return}if(ae===null)throw Error(E(160));Tg(s,o,i),ae=null,et=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cg(t,e),t=t.sibling}function Cg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),lt(e),r&4){try{Jr(3,e,e.return),jo(3,e)}catch(v){Q(e,e.return,v)}try{Jr(5,e,e.return)}catch(v){Q(e,e.return,v)}}break;case 1:Ye(t,e),lt(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(Ye(t,e),lt(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var i=e.stateNode;try{si(i,"")}catch(v){Q(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Gh(i,s),Ta(l,o);var u=Ta(l,s);for(o=0;o<a.length;o+=2){var d=a[o],p=a[o+1];d==="style"?Jh(i,p):d==="dangerouslySetInnerHTML"?Qh(i,p):d==="children"?si(i,p):Lu(i,d,p,u)}switch(l){case"input":Ea(i,s);break;case"textarea":qh(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?tr(i,!!s.multiple,m,!1):g!==!!s.multiple&&(s.defaultValue!=null?tr(i,!!s.multiple,s.defaultValue,!0):tr(i,!!s.multiple,s.multiple?[]:"",!1))}i[pi]=s}catch(v){Q(e,e.return,v)}}break;case 6:if(Ye(t,e),lt(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Q(e,e.return,v)}}break;case 3:if(Ye(t,e),lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ui(t.containerInfo)}catch(v){Q(e,e.return,v)}break;case 4:Ye(t,e),lt(e);break;case 13:Ye(t,e),lt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hc=J())),r&4&&yf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(me=(u=me)||d,Ye(t,e),me=u):Ye(t,e),lt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(S=e,d=e.child;d!==null;){for(p=S=d;S!==null;){switch(g=S,m=g.child,g.tag){case 0:case 11:case 14:case 15:Jr(4,g,g.return);break;case 1:Jn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){Q(r,n,v)}}break;case 5:Jn(g,g.return);break;case 22:if(g.memoizedState!==null){Ef(p);continue}}m!==null?(m.return=g,S=m):Ef(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,a=p.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Yh("display",o))}catch(v){Q(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){Q(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ye(t,e),lt(e),r&4&&yf(e);break;case 21:break;default:Ye(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kg(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(si(i,""),r.flags&=-33);var s=vf(e);tu(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=vf(e);eu(e,l,o);break;default:throw Error(E(161))}}catch(a){Q(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _1(e,t,n){S=e,Rg(e)}function Rg(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var i=S,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||me;l=gs;var u=me;if(gs=o,(me=a)&&!u)for(S=i;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?_f(i):a!==null?(a.return=o,S=a):_f(i);for(;s!==null;)S=s,Rg(s),s=s.sibling;S=i,gs=l,me=u}wf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,S=s):wf(e)}}function wf(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||jo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ze(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&tf(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tf(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ui(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}me||t.flags&512&&Za(t)}catch(g){Q(t,t.return,g)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Ef(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function _f(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jo(4,t)}catch(a){Q(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){Q(t,i,a)}}var s=t.return;try{Za(t)}catch(a){Q(t,s,a)}break;case 5:var o=t.return;try{Za(t)}catch(a){Q(t,o,a)}}}catch(a){Q(t,t.return,a)}if(t===e){S=null;break}var l=t.sibling;if(l!==null){l.return=t.return,S=l;break}S=t.return}}var S1=Math.ceil,so=xt.ReactCurrentDispatcher,dc=xt.ReactCurrentOwner,Ve=xt.ReactCurrentBatchConfig,U=0,oe=null,ee=null,ue=0,Oe=0,Zn=ln(0),ne=0,Ei=null,Nn=0,zo=0,fc=0,Zr=null,Ce=null,hc=0,mr=1/0,vt=null,oo=!1,nu=null,Yt=null,ms=!1,Vt=null,lo=0,ei=0,ru=null,xs=-1,Ds=0;function Ie(){return U&6?J():xs!==-1?xs:xs=J()}function Jt(e){return e.mode&1?U&2&&ue!==0?ue&-ue:s1.transition!==null?(Ds===0&&(Ds=cp()),Ds):(e=z,e!==0||(e=window.event,e=e===void 0?16:vp(e.type)),e):1}function rt(e,t,n,r){if(50<ei)throw ei=0,ru=null,Error(E(185));Di(e,n,r),(!(U&2)||e!==oe)&&(e===oe&&(!(U&2)&&(zo|=n),ne===4&&jt(e,ue)),Ne(e,r),n===1&&U===0&&!(t.mode&1)&&(mr=J()+500,$o&&an()))}function Ne(e,t){var n=e.callbackNode;s0(e,t);var r=Vs(e,e===oe?ue:0);if(r===0)n!==null&&Pd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Pd(n),t===1)e.tag===0?i1(Sf.bind(null,e)):$p(Sf.bind(null,e)),e1(function(){!(U&6)&&an()}),n=null;else{switch(dp(r)){case 1:n=ju;break;case 4:n=ap;break;case 16:n=Hs;break;case 536870912:n=up;break;default:n=Hs}n=Mg(n,Ag.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ag(e,t){if(xs=-1,Ds=0,U&6)throw Error(E(327));var n=e.callbackNode;if(or()&&e.callbackNode!==n)return null;var r=Vs(e,e===oe?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ao(e,r);else{t=r;var i=U;U|=2;var s=Ng();(oe!==e||ue!==t)&&(vt=null,mr=J()+500,In(e,t));do try{T1();break}catch(l){Pg(e,l)}while(1);Ju(),so.current=s,U=i,ee!==null?t=0:(oe=null,ue=0,t=ne)}if(t!==0){if(t===2&&(i=Na(e),i!==0&&(r=i,t=iu(e,i))),t===1)throw n=Ei,In(e,0),jt(e,r),Ne(e,J()),n;if(t===6)jt(e,r);else{if(i=e.current.alternate,!(r&30)&&!I1(i)&&(t=ao(e,r),t===2&&(s=Na(e),s!==0&&(r=s,t=iu(e,s))),t===1))throw n=Ei,In(e,0),jt(e,r),Ne(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:pn(e,Ce,vt);break;case 3:if(jt(e,r),(r&130023424)===r&&(t=hc+500-J(),10<t)){if(Vs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Fa(pn.bind(null,e,Ce,vt),t);break}pn(e,Ce,vt);break;case 4:if(jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-nt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*S1(r/1960))-r,10<r){e.timeoutHandle=Fa(pn.bind(null,e,Ce,vt),r);break}pn(e,Ce,vt);break;case 5:pn(e,Ce,vt);break;default:throw Error(E(329))}}}return Ne(e,J()),e.callbackNode===n?Ag.bind(null,e):null}function iu(e,t){var n=Zr;return e.current.memoizedState.isDehydrated&&(In(e,t).flags|=256),e=ao(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&su(t)),e}function su(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function I1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!it(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~fc,t&=~zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function Sf(e){if(U&6)throw Error(E(327));or();var t=Vs(e,0);if(!(t&1))return Ne(e,J()),null;var n=ao(e,t);if(e.tag!==0&&n===2){var r=Na(e);r!==0&&(t=r,n=iu(e,r))}if(n===1)throw n=Ei,In(e,0),jt(e,t),Ne(e,J()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,Ce,vt),Ne(e,J()),null}function pc(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(mr=J()+500,$o&&an())}}function On(e){Vt!==null&&Vt.tag===0&&!(U&6)&&or();var t=U;U|=1;var n=Ve.transition,r=z;try{if(Ve.transition=null,z=1,e)return e()}finally{z=r,Ve.transition=n,U=t,!(U&6)&&an()}}function gc(){Oe=Zn.current,V(Zn)}function In(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Z0(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Xu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xs();break;case 3:pr(),V(Ae),V(we),ic();break;case 5:rc(r);break;case 4:pr();break;case 13:V(G);break;case 19:V(G);break;case 10:Zu(r.type._context);break;case 22:case 23:gc()}n=n.return}if(oe=e,ee=e=Zt(e.current,null),ue=Oe=t,ne=0,Ei=null,fc=zo=Nn=0,Ce=Zr=null,vn!==null){for(t=0;t<vn.length;t++)if(n=vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}vn=null}return e}function Pg(e,t){do{var n=ee;try{if(Ju(),Ps.current=io,ro){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ro=!1}if(Pn=0,se=te=q=null,Yr=!1,vi=0,dc.current=null,n===null||n.return===null){ne=1,Ei=t,ee=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=ue,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=uf(o);if(m!==null){m.flags&=-257,cf(m,o,l,s,t),m.mode&1&&af(s,u,t),t=m,a=u;var w=t.updateQueue;if(w===null){var v=new Set;v.add(a),t.updateQueue=v}else w.add(a);break e}else{if(!(t&1)){af(s,u,t),mc();break e}a=Error(E(426))}}else if(W&&l.mode&1){var A=uf(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),cf(A,o,l,s,t),Qu(gr(a,l));break e}}s=a=gr(a,l),ne!==4&&(ne=2),Zr===null?Zr=[s]:Zr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var f=fg(s,a,t);ef(s,f);break e;case 1:l=a;var c=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Yt===null||!Yt.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var y=hg(s,l,t);ef(s,y);break e}}s=s.return}while(s!==null)}xg(n)}catch(_){t=_,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function Ng(){var e=so.current;return so.current=io,e===null?io:e}function mc(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||!(Nn&268435455)&&!(zo&268435455)||jt(oe,ue)}function ao(e,t){var n=U;U|=2;var r=Ng();(oe!==e||ue!==t)&&(vt=null,In(e,t));do try{k1();break}catch(i){Pg(e,i)}while(1);if(Ju(),U=n,so.current=r,ee!==null)throw Error(E(261));return oe=null,ue=0,ne}function k1(){for(;ee!==null;)Og(ee)}function T1(){for(;ee!==null&&!Qy();)Og(ee)}function Og(e){var t=Lg(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?xg(e):ee=t,dc.current=null}function xg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=y1(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=v1(n,t,Oe),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function pn(e,t,n){var r=z,i=Ve.transition;try{Ve.transition=null,z=1,C1(e,t,n,r)}finally{Ve.transition=i,z=r}return null}function C1(e,t,n,r){do or();while(Vt!==null);if(U&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(o0(e,s),e===oe&&(ee=oe=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ms||(ms=!0,Mg(Hs,function(){return or(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ve.transition,Ve.transition=null;var o=z;z=1;var l=U;U|=4,dc.current=null,E1(e,n),Cg(n,e),K0($a),Ws=!!Ma,$a=Ma=null,e.current=n,_1(n),Yy(),U=l,z=o,Ve.transition=s}else e.current=n;if(ms&&(ms=!1,Vt=e,lo=i),s=e.pendingLanes,s===0&&(Yt=null),e0(n.stateNode),Ne(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=nu,nu=null,e;return lo&1&&e.tag!==0&&or(),s=e.pendingLanes,s&1?e===ru?ei++:(ei=0,ru=e):ei=0,an(),null}function or(){if(Vt!==null){var e=dp(lo),t=Ve.transition,n=z;try{if(Ve.transition=null,z=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,lo=0,U&6)throw Error(E(331));var i=U;for(U|=4,S=e.current;S!==null;){var s=S,o=s.child;if(S.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(S=u;S!==null;){var d=S;switch(d.tag){case 0:case 11:case 15:Jr(8,d,s)}var p=d.child;if(p!==null)p.return=d,S=p;else for(;S!==null;){d=S;var g=d.sibling,m=d.return;if(Ig(d),d===u){S=null;break}if(g!==null){g.return=m,S=g;break}S=m}}}var w=s.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var A=v.sibling;v.sibling=null,v=A}while(v!==null)}}S=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,S=o;else e:for(;S!==null;){if(s=S,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Jr(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,S=f;break e}S=s.return}}var c=e.current;for(S=c;S!==null;){o=S;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,S=h;else e:for(o=c;S!==null;){if(l=S,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:jo(9,l)}}catch(_){Q(l,l.return,_)}if(l===o){S=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,S=y;break e}S=l.return}}if(U=i,an(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Oo,e)}catch{}r=!0}return r}finally{z=n,Ve.transition=t}}return!1}function If(e,t,n){t=gr(n,t),t=fg(e,t,1),e=Qt(e,t,1),t=Ie(),e!==null&&(Di(e,1,t),Ne(e,t))}function Q(e,t,n){if(e.tag===3)If(e,e,n);else for(;t!==null;){if(t.tag===3){If(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=gr(n,e),e=hg(t,e,1),t=Qt(t,e,1),e=Ie(),t!==null&&(Di(t,1,e),Ne(t,e));break}}t=t.return}}function R1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ue&n)===n&&(ne===4||ne===3&&(ue&130023424)===ue&&500>J()-hc?In(e,0):fc|=n),Ne(e,t)}function Dg(e,t){t===0&&(e.mode&1?(t=os,os<<=1,!(os&130023424)&&(os=4194304)):t=1);var n=Ie();e=At(e,t),e!==null&&(Di(e,t,n),Ne(e,n))}function A1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dg(e,n)}function P1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Dg(e,n)}var Lg;Lg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,m1(e,t,n);Re=!!(e.flags&131072)}else Re=!1,W&&t.flags&1048576&&Up(t,Js,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Os(e,t),e=t.pendingProps;var i=dr(t,we.current);sr(t,n),i=oc(null,t,r,e,i,n);var s=lc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(s=!0,Qs(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tc(t),i.updater=Uo,t.stateNode=i,i._reactInternals=t,Wa(t,r,e,n),t=qa(null,t,r,!0,s,n)):(t.tag=0,W&&s&&qu(t),_e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Os(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=O1(r),e=Ze(r,e),i){case 0:t=Ga(null,t,r,e,n);break e;case 1:t=hf(null,t,r,e,n);break e;case 11:t=df(null,t,r,e,n);break e;case 14:t=ff(null,t,r,Ze(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),Ga(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),hf(e,t,r,i,n);case 3:e:{if(vg(t),e===null)throw Error(E(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Bp(e,t),to(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=gr(Error(E(423)),t),t=pf(e,t,r,n,i);break e}else if(r!==i){i=gr(Error(E(424)),t),t=pf(e,t,r,n,i);break e}else for(xe=Xt(t.stateNode.containerInfo.firstChild),Le=t,W=!0,tt=null,n=Wp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===i){t=Pt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return Kp(t),e===null&&ba(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Ua(r,i)?o=null:s!==null&&Ua(r,s)&&(t.flags|=32),mg(e,t),_e(e,t,o,n),t.child;case 6:return e===null&&ba(t),null;case 13:return yg(e,t,n);case 4:return nc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hr(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),df(e,t,r,i,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,B(Zs,r._currentValue),r._currentValue=o,s!==null)if(it(s.value,o)){if(s.children===i.children&&!Ae.current){t=Pt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Tt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ha(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ha(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}_e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,sr(t,n),i=Ge(i),r=r(i),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,i=Ze(r,t.pendingProps),i=Ze(r.type,i),ff(e,t,r,i,n);case 15:return pg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),Os(e,t),t.tag=1,Pe(r)?(e=!0,Qs(t)):e=!1,sr(t,n),Hp(t,r,i),Wa(t,r,i,n),qa(null,t,r,!0,e,n);case 19:return wg(e,t,n);case 22:return gg(e,t,n)}throw Error(E(156,t.tag))};function Mg(e,t){return lp(e,t)}function N1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new N1(e,t,n,r)}function vc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function O1(e){if(typeof e=="function")return vc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$u)return 11;if(e===Uu)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ls(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")vc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Hn:return kn(n.children,i,s,t);case Mu:o=8,i|=8;break;case ga:return e=He(12,n,t,i|2),e.elementType=ga,e.lanes=s,e;case ma:return e=He(13,n,t,i),e.elementType=ma,e.lanes=s,e;case va:return e=He(19,n,t,i),e.elementType=va,e.lanes=s,e;case Vh:return Bo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bh:o=10;break e;case Hh:o=9;break e;case $u:o=11;break e;case Uu:o=14;break e;case $t:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=He(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function kn(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function Bo(e,t,n,r){return e=He(22,e,r,t),e.elementType=Vh,e.lanes=n,e.stateNode={isHidden:!1},e}function bl(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function Hl(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function x1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yc(e,t,n,r,i,s,o,l,a){return e=new x1(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=He(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tc(s),e}function D1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $g(e){if(!e)return sn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Pe(n))return Mp(e,n,t)}return t}function Ug(e,t,n,r,i,s,o,l,a){return e=yc(n,r,!0,e,i,s,o,l,a),e.context=$g(null),n=e.current,r=Ie(),i=Jt(n),s=Tt(r,i),s.callback=t??null,Qt(n,s,i),e.current.lanes=i,Di(e,i,r),Ne(e,r),e}function bo(e,t,n,r){var i=t.current,s=Ie(),o=Jt(i);return n=$g(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qt(i,t,o),e!==null&&(rt(e,i,o,s),As(e,i,o)),o}function uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wc(e,t){kf(e,t),(e=e.alternate)&&kf(e,t)}function L1(){return null}var Fg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ec(e){this._internalRoot=e}Ho.prototype.render=Ec.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));bo(e,t,null,null)};Ho.prototype.unmount=Ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){bo(null,e,null,null)}),t[Rt]=null}};function Ho(e){this._internalRoot=e}Ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=pp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ft.length&&t!==0&&t<Ft[n].priority;n++);Ft.splice(n,0,e),n===0&&mp(e)}};function _c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tf(){}function M1(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=uo(o);s.call(u)}}var o=Ug(t,r,e,0,null,!1,!1,"",Tf);return e._reactRootContainer=o,e[Rt]=o.current,fi(e.nodeType===8?e.parentNode:e),On(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=uo(a);l.call(u)}}var a=yc(e,0,!1,null,null,!1,!1,"",Tf);return e._reactRootContainer=a,e[Rt]=a.current,fi(e.nodeType===8?e.parentNode:e),On(function(){bo(t,a,n,r)}),a}function Wo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=uo(o);l.call(a)}}bo(t,o,e,i)}else o=M1(n,t,e,i,r);return uo(o)}fp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Br(t.pendingLanes);n!==0&&(zu(t,n|1),Ne(t,J()),!(U&6)&&(mr=J()+500,an()))}break;case 13:On(function(){var r=At(e,1);if(r!==null){var i=Ie();rt(r,e,1,i)}}),wc(e,1)}};Bu=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Ie();rt(t,e,134217728,n)}wc(e,134217728)}};hp=function(e){if(e.tag===13){var t=Jt(e),n=At(e,t);if(n!==null){var r=Ie();rt(n,e,t,r)}wc(e,t)}};pp=function(){return z};gp=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};Ra=function(e,t,n){switch(t){case"input":if(Ea(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Mo(r);if(!i)throw Error(E(90));Kh(r),Ea(r,i)}}}break;case"textarea":qh(e,n);break;case"select":t=n.value,t!=null&&tr(e,!!n.multiple,t,!1)}};tp=pc;np=On;var $1={usingClientEntryPoint:!1,Events:[Mi,Gn,Mo,Zh,ep,pc]},Ur={findFiberByHostInstance:mn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},U1={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sp(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||L1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vs.isDisabled&&vs.supportsFiber)try{Oo=vs.inject(U1),dt=vs}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$1;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_c(t))throw Error(E(200));return D1(e,t,null,n)};je.createRoot=function(e,t){if(!_c(e))throw Error(E(299));var n=!1,r="",i=Fg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=yc(e,1,!1,null,null,n,!1,r,i),e[Rt]=t.current,fi(e.nodeType===8?e.parentNode:e),new Ec(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=sp(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return On(e)};je.hydrate=function(e,t,n){if(!Vo(t))throw Error(E(200));return Wo(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!_c(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Fg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ug(t,null,e,1,n??null,i,!1,s,o),e[Rt]=t.current,fi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ho(t)};je.render=function(e,t,n){if(!Vo(t))throw Error(E(200));return Wo(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!Vo(e))throw Error(E(40));return e._reactRootContainer?(On(function(){Wo(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};je.unstable_batchedUpdates=pc;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vo(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Wo(e,t,n,!1,r)};je.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=je})(Ly);var Cf=fa;da.createRoot=Cf.createRoot,da.hydrateRoot=Cf.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _i(){return _i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_i.apply(this,arguments)}var Wt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Wt||(Wt={}));const Rf="popstate";function F1(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:l}=r.location;return ou("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:co(i)}return z1(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Sc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function j1(){return Math.random().toString(36).substr(2,8)}function Af(e,t){return{usr:e.state,key:e.key,idx:t}}function ou(e,t,n,r){return n===void 0&&(n=null),_i({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Sr(t):t,{state:n,key:t&&t.key||r||j1()})}function co(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Sr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function z1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Wt.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(_i({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=Wt.Pop;let A=d(),f=A==null?null:A-u;u=A,a&&a({action:l,location:v.location,delta:f})}function g(A,f){l=Wt.Push;let c=ou(v.location,A,f);n&&n(c,A),u=d()+1;let h=Af(c,u),y=v.createHref(c);try{o.pushState(h,"",y)}catch{i.location.assign(y)}s&&a&&a({action:l,location:v.location,delta:1})}function m(A,f){l=Wt.Replace;let c=ou(v.location,A,f);n&&n(c,A),u=d();let h=Af(c,u),y=v.createHref(c);o.replaceState(h,"",y),s&&a&&a({action:l,location:v.location,delta:0})}function w(A){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof A=="string"?A:co(A);return re(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let v={get action(){return l},get location(){return e(i,o)},listen(A){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Rf,p),a=A,()=>{i.removeEventListener(Rf,p),a=null}},createHref(A){return t(i,A)},createURL:w,encodeLocation(A){let f=w(A);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:m,go(A){return o.go(A)}};return v}var Pf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Pf||(Pf={}));function B1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Sr(t):t,i=Ic(r.pathname||"/",n);if(i==null)return null;let s=jg(e);b1(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=Y1(s[l],ew(i));return o}function jg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(re(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=en([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&(re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),jg(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:X1(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of zg(s.path))i(s,o,a)}),t}function zg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=zg(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function b1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Q1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const H1=/^:\w+$/,V1=3,W1=2,K1=1,G1=10,q1=-2,Nf=e=>e==="*";function X1(e,t){let n=e.split("/"),r=n.length;return n.some(Nf)&&(r+=q1),t&&(r+=W1),n.filter(i=>!Nf(i)).reduce((i,s)=>i+(H1.test(s)?V1:s===""?K1:G1),r)}function Q1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Y1(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=J1({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!d)return null;Object.assign(r,d.params);let p=l.route;s.push({params:r,pathname:en([i,d.pathname]),pathnameBase:iw(en([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=en([i,d.pathnameBase]))}return s}function J1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Z1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{if(d==="*"){let g=l[p]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}return u[d]=tw(l[p]||"",d),u},{}),pathname:s,pathnameBase:o,pattern:e}}function Z1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Sc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ew(e){try{return decodeURI(e)}catch(t){return Sc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function tw(e,t){try{return decodeURIComponent(e)}catch(n){return Sc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ic(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function nw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Sr(e):e;return{pathname:n?n.startsWith("/")?n:rw(n,t):t,search:sw(r),hash:ow(i)}}function rw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function bg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Sr(e):(i=_i({},e),re(!i.pathname||!i.pathname.includes("?"),Vl("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),Vl("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),Vl("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let p=t.length-1;if(o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?t[p]:"/"}let a=nw(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const en=e=>e.join("/").replace(/\/\/+/g,"/"),iw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),sw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ow=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function lw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const uw=typeof Object.is=="function"?Object.is:aw,{useState:cw,useEffect:dw,useLayoutEffect:fw,useDebugValue:hw}=ca;function pw(e,t,n){const r=t(),[{inst:i},s]=cw({inst:{value:r,getSnapshot:t}});return fw(()=>{i.value=r,i.getSnapshot=t,Wl(i)&&s({inst:i})},[e,r,t]),dw(()=>(Wl(i)&&s({inst:i}),e(()=>{Wl(i)&&s({inst:i})})),[e]),hw(r),r}function Wl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!uw(n,r)}catch{return!0}}function gw(e,t,n){return t()}const mw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vw=!mw,yw=vw?gw:pw;"useSyncExternalStore"in ca&&(e=>e.useSyncExternalStore)(ca);const Hg=I.createContext(null),kc=I.createContext(null),Ir=I.createContext(null),Ko=I.createContext(null),kr=I.createContext({outlet:null,matches:[]}),Vg=I.createContext(null);function lu(){return lu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lu.apply(this,arguments)}function ww(e,t){let{relative:n}=t===void 0?{}:t;Ui()||re(!1);let{basename:r,navigator:i}=I.useContext(Ir),{hash:s,pathname:o,search:l}=Cc(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:en([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Ui(){return I.useContext(Ko)!=null}function Fi(){return Ui()||re(!1),I.useContext(Ko).location}function Tc(){Ui()||re(!1);let{basename:e,navigator:t}=I.useContext(Ir),{matches:n}=I.useContext(kr),{pathname:r}=Fi(),i=JSON.stringify(Bg(n).map(l=>l.pathnameBase)),s=I.useRef(!1);return I.useEffect(()=>{s.current=!0}),I.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){t.go(l);return}let u=bg(l,JSON.parse(i),r,a.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:en([e,u.pathname])),(a.replace?t.replace:t.push)(u,a.state,a)},[e,t,i,r])}function Cc(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=I.useContext(kr),{pathname:i}=Fi(),s=JSON.stringify(Bg(r).map(o=>o.pathnameBase));return I.useMemo(()=>bg(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function Ew(e,t){Ui()||re(!1);let{navigator:n}=I.useContext(Ir),r=I.useContext(kc),{matches:i}=I.useContext(kr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=Fi(),u;if(t){var d;let v=typeof t=="string"?Sr(t):t;l==="/"||(d=v.pathname)!=null&&d.startsWith(l)||re(!1),u=v}else u=a;let p=u.pathname||"/",g=l==="/"?p:p.slice(l.length)||"/",m=B1(e,{pathname:g}),w=kw(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:en([l,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:en([l,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return t&&w?I.createElement(Ko.Provider,{value:{location:lu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Wt.Pop}},w):w}function _w(){let e=Aw(),t=lw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,s)}class Sw extends I.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?I.createElement(kr.Provider,{value:this.props.routeContext},I.createElement(Vg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Iw(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(Hg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(kr.Provider,{value:t},r)}function kw(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||re(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=I.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=I.createElement(_w,null));let d=t.concat(r.slice(0,l+1)),p=()=>{let g=s;return a?g=u:o.route.Component?g=I.createElement(o.route.Component,null):o.route.element&&(g=o.route.element),I.createElement(Iw,{match:o,routeContext:{outlet:s,matches:d},children:g})};return n&&(o.route.ErrorBoundary||o.route.errorElement||l===0)?I.createElement(Sw,{location:n.location,component:u,error:a,children:p(),routeContext:{outlet:null,matches:d}}):p()},null)}var Of;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Of||(Of={}));var fo;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(fo||(fo={}));function Tw(e){let t=I.useContext(kc);return t||re(!1),t}function Cw(e){let t=I.useContext(kr);return t||re(!1),t}function Rw(e){let t=Cw(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function Aw(){var e;let t=I.useContext(Vg),n=Tw(fo.UseRouteError),r=Rw(fo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Hr(e){re(!1)}function Pw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Wt.Pop,navigator:s,static:o=!1}=e;Ui()&&re(!1);let l=t.replace(/^\/*/,"/"),a=I.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Sr(r));let{pathname:u="/",search:d="",hash:p="",state:g=null,key:m="default"}=r,w=I.useMemo(()=>{let v=Ic(u,l);return v==null?null:{location:{pathname:v,search:d,hash:p,state:g,key:m},navigationType:i}},[l,u,d,p,g,m,i]);return w==null?null:I.createElement(Ir.Provider,{value:a},I.createElement(Ko.Provider,{children:n,value:w}))}function Nw(e){let{children:t,location:n}=e,r=I.useContext(Hg),i=r&&!t?r.router.routes:au(t);return Ew(i,n)}var xf;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(xf||(xf={}));new Promise(()=>{});function au(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,i)=>{if(!I.isValidElement(r))return;if(r.type===I.Fragment){n.push.apply(n,au(r.props.children,t));return}r.type!==Hr&&re(!1),!r.props.index||!r.props.children||re(!1);let s=[...t,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=au(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}function Wg(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ow(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xw(e,t){return e.button===0&&(!t||t==="_self")&&!Ow(e)}const Dw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Lw=["aria-current","caseSensitive","className","end","style","to","children"];function Mw(e){let{basename:t,children:n,window:r}=e,i=I.useRef();i.current==null&&(i.current=F1({window:r,v5Compat:!0}));let s=i.current,[o,l]=I.useState({action:s.action,location:s.location});return I.useLayoutEffect(()=>s.listen(l),[s]),I.createElement(Pw,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s})}const $w=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Uw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fw=I.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:d}=t,p=Wg(t,Dw),{basename:g}=I.useContext(Ir),m,w=!1;if(typeof u=="string"&&Uw.test(u)&&(m=u,$w)){let c=new URL(window.location.href),h=u.startsWith("//")?new URL(c.protocol+u):new URL(u),y=Ic(h.pathname,g);h.origin===c.origin&&y!=null?u=y+h.search+h.hash:w=!0}let v=ww(u,{relative:i}),A=jw(u,{replace:o,state:l,target:a,preventScrollReset:d,relative:i});function f(c){r&&r(c),c.defaultPrevented||A(c)}return I.createElement("a",ho({},p,{href:m||v,onClick:w||s?r:f,ref:n,target:a}))}),ys=I.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:a,children:u}=t,d=Wg(t,Lw),p=Cc(a,{relative:d.relative}),g=Fi(),m=I.useContext(kc),{navigator:w}=I.useContext(Ir),v=w.encodeLocation?w.encodeLocation(p).pathname:p.pathname,A=g.pathname,f=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(A=A.toLowerCase(),f=f?f.toLowerCase():null,v=v.toLowerCase());let c=A===v||!o&&A.startsWith(v)&&A.charAt(v.length)==="/",h=f!=null&&(f===v||!o&&f.startsWith(v)&&f.charAt(v.length)==="/"),y=c?r:void 0,_;typeof s=="function"?_=s({isActive:c,isPending:h}):_=[s,c?"active":null,h?"pending":null].filter(Boolean).join(" ");let T=typeof l=="function"?l({isActive:c,isPending:h}):l;return I.createElement(Fw,ho({},d,{"aria-current":y,className:_,ref:n,style:T,to:a}),typeof u=="function"?u({isActive:c,isPending:h}):u)});var Df;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Df||(Df={}));var Lf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Lf||(Lf={}));function jw(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,l=Tc(),a=Fi(),u=Cc(e,{relative:o});return I.useCallback(d=>{if(xw(d,n)){d.preventDefault();let p=r!==void 0?r:co(a)===co(u);l(e,{replace:p,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,e,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},zw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],l=e[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Gg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,l=o?e[i+1]:0,a=i+2<e.length,u=a?e[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(g=64)),r.push(n[d],n[p],n[g],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Kg(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):zw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||u==null||p==null)throw new Bw;const g=s<<2|l>>4;if(r.push(g),u!==64){const m=l<<4&240|u>>2;if(r.push(m),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Bw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bw=function(e){const t=Kg(e);return Gg.encodeByteArray(t,!0)},po=function(e){return bw(e).replace(/\./g,"")},qg=function(e){try{return Gg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=()=>Hw().__FIREBASE_DEFAULTS__,Ww=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Kw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&qg(e[1]);return t&&JSON.parse(t)},Rc=()=>{try{return Vw()||Ww()||Kw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Xg=e=>{var t,n;return(n=(t=Rc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Gw=e=>{const t=Xg(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},qw=()=>{var e;return(e=Rc())===null||e===void 0?void 0:e.config},Qg=e=>{var t;return(t=Rc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[po(JSON.stringify(n)),po(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Yg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Jw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zw(){const e=Ee();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Jg(){try{return typeof indexedDB=="object"}catch{return!1}}function Zg(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function eE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="FirebaseError";class ot extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=tE,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fn.prototype.create)}}class Fn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?nE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ot(i,l,r)}}function nE(e,t){return e.replace(rE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const rE=/\{\$([^}]+)}/g;function iE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Si(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Mf(s)&&Mf(o)){if(!Si(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Mf(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function sE(e,t){const n=new oE(e,t);return n.subscribe.bind(n)}class oE{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lE(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Kl),i.error===void 0&&(i.error=Kl),i.complete===void 0&&(i.complete=Kl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lE(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Kl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=1e3,uE=2,cE=4*60*60*1e3,dE=.5;function $f(e,t=aE,n=uE){const r=t*Math.pow(n,e),i=Math.round(dE*r*(Math.random()-.5)*2);return Math.min(cE,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(e){return e&&e._delegate?e._delegate:e}class st{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Xw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(pE(t))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=gn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=gn){return this.instances.has(t)}getOptions(t=gn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=gn){return this.component?this.component.multipleInstances?t:gn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hE(e){return e===gn?void 0:e}function pE(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new fE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(j||(j={}));const mE={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},vE=j.INFO,yE={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},wE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=yE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Go{constructor(t){this.name=t,this._logLevel=vE,this._logHandler=wE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?mE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const EE=(e,t)=>t.some(n=>e instanceof n);let Uf,Ff;function _E(){return Uf||(Uf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SE(){return Ff||(Ff=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const em=new WeakMap,uu=new WeakMap,tm=new WeakMap,Gl=new WeakMap,Ac=new WeakMap;function IE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(tn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&em.set(n,e)}).catch(()=>{}),Ac.set(t,e),t}function kE(e){if(uu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});uu.set(e,t)}let cu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return uu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||tm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function TE(e){cu=e(cu)}function CE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ql(this),t,...n);return tm.set(r,t.sort?t.sort():[t]),tn(r)}:SE().includes(e)?function(...t){return e.apply(ql(this),t),tn(em.get(this))}:function(...t){return tn(e.apply(ql(this),t))}}function RE(e){return typeof e=="function"?CE(e):(e instanceof IDBTransaction&&kE(e),EE(e,_E())?new Proxy(e,cu):e)}function tn(e){if(e instanceof IDBRequest)return IE(e);if(Gl.has(e))return Gl.get(e);const t=RE(e);return t!==e&&(Gl.set(e,t),Ac.set(t,e)),t}const ql=e=>Ac.get(e);function nm(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=tn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(tn(o.result),a.oldVersion,a.newVersion,tn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const AE=["get","getKey","getAll","getAllKeys","count"],PE=["put","add","delete","clear"],Xl=new Map;function jf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Xl.get(t))return Xl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=PE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||AE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Xl.set(t,s),s}TE(e=>({...e,get:(t,n,r)=>jf(t,n)||e.get(t,n,r),has:(t,n)=>!!jf(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function OE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const du="@firebase/app",zf="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Go("@firebase/app"),xE="@firebase/app-compat",DE="@firebase/analytics-compat",LE="@firebase/analytics",ME="@firebase/app-check-compat",$E="@firebase/app-check",UE="@firebase/auth",FE="@firebase/auth-compat",jE="@firebase/database",zE="@firebase/database-compat",BE="@firebase/functions",bE="@firebase/functions-compat",HE="@firebase/installations",VE="@firebase/installations-compat",WE="@firebase/messaging",KE="@firebase/messaging-compat",GE="@firebase/performance",qE="@firebase/performance-compat",XE="@firebase/remote-config",QE="@firebase/remote-config-compat",YE="@firebase/storage",JE="@firebase/storage-compat",ZE="@firebase/firestore",e_="@firebase/firestore-compat",t_="firebase",n_="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="[DEFAULT]",r_={[du]:"fire-core",[xE]:"fire-core-compat",[LE]:"fire-analytics",[DE]:"fire-analytics-compat",[$E]:"fire-app-check",[ME]:"fire-app-check-compat",[UE]:"fire-auth",[FE]:"fire-auth-compat",[jE]:"fire-rtdb",[zE]:"fire-rtdb-compat",[BE]:"fire-fn",[bE]:"fire-fn-compat",[HE]:"fire-iid",[VE]:"fire-iid-compat",[WE]:"fire-fcm",[KE]:"fire-fcm-compat",[GE]:"fire-perf",[qE]:"fire-perf-compat",[XE]:"fire-rc",[QE]:"fire-rc-compat",[YE]:"fire-gcs",[JE]:"fire-gcs-compat",[ZE]:"fire-fst",[e_]:"fire-fst-compat","fire-js":"fire-js",[t_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=new Map,hu=new Map;function i_(e,t){try{e.container.addComponent(t)}catch(n){xn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function gt(e){const t=e.name;if(hu.has(t))return xn.debug(`There were multiple attempts to register component ${t}.`),!1;hu.set(t,e);for(const n of go.values())i_(n,e);return!0}function jn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nn=new Fn("app","Firebase",s_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=n_;function rm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:fu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw nn.create("bad-app-name",{appName:String(i)});if(n||(n=qw()),!n)throw nn.create("no-options");const s=go.get(i);if(s){if(Si(n,s.options)&&Si(r,s.config))return s;throw nn.create("duplicate-app",{appName:i})}const o=new gE(i);for(const a of hu.values())o.addComponent(a);const l=new o_(n,r,o);return go.set(i,l),l}function Pc(e=fu){const t=go.get(e);if(!t&&e===fu)return rm();if(!t)throw nn.create("no-app",{appName:e});return t}function We(e,t,n){var r;let i=(r=r_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xn.warn(l.join(" "));return}gt(new st(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="firebase-heartbeat-database",a_=1,Ii="firebase-heartbeat-store";let Ql=null;function im(){return Ql||(Ql=nm(l_,a_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ii)}}}).catch(e=>{throw nn.create("idb-open",{originalErrorMessage:e.message})})),Ql}async function u_(e){try{return(await im()).transaction(Ii).objectStore(Ii).get(sm(e))}catch(t){if(t instanceof ot)xn.warn(t.message);else{const n=nn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xn.warn(n.message)}}}async function Bf(e,t){try{const r=(await im()).transaction(Ii,"readwrite");return await r.objectStore(Ii).put(t,sm(e)),r.done}catch(n){if(n instanceof ot)xn.warn(n.message);else{const r=nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function sm(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=1024,d_=30*24*60*60*1e3;class f_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new p_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=d_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bf(),{heartbeatsToSend:n,unsentEntries:r}=h_(this._heartbeatsCache.heartbeats),i=po(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function bf(){return new Date().toISOString().substring(0,10)}function h_(e,t=c_){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Hf(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class p_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jg()?Zg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await u_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Hf(e){return po(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(e){gt(new st("platform-logger",t=>new NE(t),"PRIVATE")),gt(new st("heartbeat",t=>new f_(t),"PRIVATE")),We(du,zf,e),We(du,zf,"esm2017"),We("fire-js","")}g_("");var m_="firebase",v_="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We(m_,v_,"app");const om="@firebase/installations",Nc="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=1e4,am=`w:${Nc}`,um="FIS_v2",y_="https://firebaseinstallations.googleapis.com/v1",w_=60*60*1e3,E_="installations",__="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Dn=new Fn(E_,__,S_);function cm(e){return e instanceof ot&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm({projectId:e}){return`${y_}/projects/${e}/installations`}function fm(e){return{token:e.token,requestStatus:2,expiresIn:k_(e.expiresIn),creationTime:Date.now()}}async function hm(e,t){const r=(await t.json()).error;return Dn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function pm({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function I_(e,{refreshToken:t}){const n=pm(e);return n.append("Authorization",T_(t)),n}async function gm(e){const t=await e();return t.status>=500&&t.status<600?e():t}function k_(e){return Number(e.replace("s","000"))}function T_(e){return`${um} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=dm(e),i=pm(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:um,appId:e.appId,sdkVersion:am},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await gm(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:fm(u.authToken)}}else throw await hm("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=/^[cdef][\w-]{21}$/,pu="";function P_(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=N_(e);return A_.test(n)?n:pu}catch{return pu}}function N_(e){return R_(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=new Map;function ym(e,t){const n=qo(e);wm(n,t),O_(n,t)}function wm(e,t){const n=vm.get(e);if(n)for(const r of n)r(t)}function O_(e,t){const n=x_();n&&n.postMessage({key:e,fid:t}),D_()}let wn=null;function x_(){return!wn&&"BroadcastChannel"in self&&(wn=new BroadcastChannel("[Firebase] FID Change"),wn.onmessage=e=>{wm(e.data.key,e.data.fid)}),wn}function D_(){vm.size===0&&wn&&(wn.close(),wn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="firebase-installations-database",M_=1,Ln="firebase-installations-store";let Yl=null;function Oc(){return Yl||(Yl=nm(L_,M_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ln)}}})),Yl}async function mo(e,t){const n=qo(e),i=(await Oc()).transaction(Ln,"readwrite"),s=i.objectStore(Ln),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&ym(e,t.fid),t}async function Em(e){const t=qo(e),r=(await Oc()).transaction(Ln,"readwrite");await r.objectStore(Ln).delete(t),await r.done}async function Xo(e,t){const n=qo(e),i=(await Oc()).transaction(Ln,"readwrite"),s=i.objectStore(Ln),o=await s.get(n),l=t(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&ym(e,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xc(e){let t;const n=await Xo(e.appConfig,r=>{const i=$_(r),s=U_(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===pu?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function $_(e){const t=e||{fid:P_(),registrationStatus:0};return _m(t)}function U_(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Dn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=F_(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:j_(e)}:{installationEntry:t}}async function F_(e,t){try{const n=await C_(e,t);return mo(e.appConfig,n)}catch(n){throw cm(n)&&n.customData.serverCode===409?await Em(e.appConfig):await mo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function j_(e){let t=await Vf(e.appConfig);for(;t.registrationStatus===1;)await mm(100),t=await Vf(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await xc(e);return r||n}return t}function Vf(e){return Xo(e,t=>{if(!t)throw Dn.create("installation-not-found");return _m(t)})}function _m(e){return z_(e)?{fid:e.fid,registrationStatus:0}:e}function z_(e){return e.registrationStatus===1&&e.registrationTime+lm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_({appConfig:e,heartbeatServiceProvider:t},n){const r=b_(e,n),i=I_(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:am,appId:e.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await gm(()=>fetch(r,l));if(a.ok){const u=await a.json();return fm(u)}else throw await hm("Generate Auth Token",a)}function b_(e,{fid:t}){return`${dm(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dc(e,t=!1){let n;const r=await Xo(e.appConfig,s=>{if(!Sm(s))throw Dn.create("not-registered");const o=s.authToken;if(!t&&W_(o))return s;if(o.requestStatus===1)return n=H_(e,t),s;{if(!navigator.onLine)throw Dn.create("app-offline");const l=G_(s);return n=V_(e,l),l}});return n?await n:r.authToken}async function H_(e,t){let n=await Wf(e.appConfig);for(;n.authToken.requestStatus===1;)await mm(100),n=await Wf(e.appConfig);const r=n.authToken;return r.requestStatus===0?Dc(e,t):r}function Wf(e){return Xo(e,t=>{if(!Sm(t))throw Dn.create("not-registered");const n=t.authToken;return q_(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function V_(e,t){try{const n=await B_(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await mo(e.appConfig,r),n}catch(n){if(cm(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Em(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await mo(e.appConfig,r)}throw n}}function Sm(e){return e!==void 0&&e.registrationStatus===2}function W_(e){return e.requestStatus===2&&!K_(e)}function K_(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+w_}function G_(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function q_(e){return e.requestStatus===1&&e.requestTime+lm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(e){const t=e,{installationEntry:n,registrationPromise:r}=await xc(t);return r?r.catch(console.error):Dc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q_(e,t=!1){const n=e;return await Y_(n),(await Dc(n,t)).token}async function Y_(e){const{registrationPromise:t}=await xc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(e){if(!e||!e.options)throw Jl("App Configuration");if(!e.name)throw Jl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Jl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Jl(e){return Dn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="installations",Z_="installations-internal",eS=e=>{const t=e.getProvider("app").getImmediate(),n=J_(t),r=jn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},tS=e=>{const t=e.getProvider("app").getImmediate(),n=jn(t,Im).getImmediate();return{getId:()=>X_(n),getToken:i=>Q_(n,i)}};function nS(){gt(new st(Im,eS,"PUBLIC")),gt(new st(Z_,tS,"PRIVATE"))}nS();We(om,Nc);We(om,Nc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="analytics",rS="firebase_id",iS="origin",sS=60*1e3,oS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",km="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=new Go("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function lS(e,t){const n=document.createElement("script");n.src=`${km}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function aS(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function uS(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const a=(await Tm(n)).find(u=>u.measurementId===i);a&&await t[a.appId]}}catch(l){Me.error(l)}e("config",i,s)}async function cS(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Tm(n);for(const a of o){const u=l.find(p=>p.measurementId===a),d=u&&t[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Me.error(s)}}function dS(e,t,n,r){async function i(s,o,l){try{s==="event"?await cS(e,t,n,o,l):s==="config"?await uS(e,t,n,r,o,l):s==="consent"?e("consent","update",l):e("set",o)}catch(a){Me.error(a)}}return i}function fS(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=dS(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function hS(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(km)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ke=new Fn("analytics","Analytics",pS);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=30,mS=1e3;class vS{constructor(t={},n=mS){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Cm=new vS;function yS(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function wS(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:yS(r)},s=oS.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((t=a.error)===null||t===void 0)&&t.message&&(l=a.error.message)}catch{}throw Ke.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function ES(e,t=Cm,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Ke.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ke.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new IS;return setTimeout(async()=>{l.abort()},n!==void 0?n:sS),Rm({appId:r,apiKey:i,measurementId:s},o,l,t)}async function Rm(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Cm){var s;const{appId:o,measurementId:l}=e;try{await _S(r,t)}catch(a){if(l)return Me.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await wS(e);return i.deleteThrottleMetadata(o),a}catch(a){const u=a;if(!SS(u)){if(i.deleteThrottleMetadata(o),l)return Me.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw a}const d=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?$f(n,i.intervalMillis,gS):$f(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),Me.debug(`Calling attemptFetch again in ${d} millis`),Rm(e,p,r,i)}}function _S(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Ke.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function SS(e){if(!(e instanceof ot)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class IS{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function kS(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(){if(Jg())try{await Zg()}catch(e){return Me.warn(Ke.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Me.warn(Ke.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function CS(e,t,n,r,i,s,o){var l;const a=ES(e);a.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&Me.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Me.error(m)),t.push(a);const u=TS().then(m=>{if(m)return r.getId()}),[d,p]=await Promise.all([a,u]);hS(s)||lS(s,d.measurementId),i("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[iS]="firebase",g.update=!0,p!=null&&(g[rS]=p),i("config",d.measurementId,g),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(t){this.app=t}_delete(){return delete ti[this.app.options.appId],Promise.resolve()}}let ti={},Kf=[];const Gf={};let Zl="dataLayer",AS="gtag",qf,Am,Xf=!1;function PS(){const e=[];if(Yg()&&e.push("This is a browser extension environment."),eE()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ke.create("invalid-analytics-context",{errorInfo:t});Me.warn(n.message)}}function NS(e,t,n){PS();const r=e.options.appId;if(!r)throw Ke.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Me.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ke.create("no-api-key");if(ti[r]!=null)throw Ke.create("already-exists",{id:r});if(!Xf){aS(Zl);const{wrappedGtag:s,gtagCore:o}=fS(ti,Kf,Gf,Zl,AS);Am=s,qf=o,Xf=!0}return ti[r]=CS(e,Kf,Gf,t,qf,Zl,n),new RS(e)}function OS(e=Pc()){e=Dt(e);const t=jn(e,vo);return t.isInitialized()?t.getImmediate():xS(e)}function xS(e,t={}){const n=jn(e,vo);if(n.isInitialized()){const i=n.getImmediate();if(Si(t,n.getOptions()))return i;throw Ke.create("already-initialized")}return n.initialize({options:t})}function DS(e,t,n,r){e=Dt(e),kS(Am,ti[e.app.options.appId],t,n,r).catch(i=>Me.error(i))}const Qf="@firebase/analytics",Yf="0.9.4";function LS(){gt(new st(vo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return NS(r,i,n)},"PUBLIC")),gt(new st("analytics-internal",e,"PRIVATE")),We(Qf,Yf),We(Qf,Yf,"esm2017");function e(t){try{const n=t.getProvider(vo).getImmediate();return{logEvent:(r,i,s)=>DS(n,r,i,s)}}catch(n){throw Ke.create("interop-component-reg-failed",{reason:n})}}}LS();function Lc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Pm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MS=Pm,Nm=new Fn("auth","Firebase",Pm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=new Go("@firebase/auth");function Ms(e,...t){Jf.logLevel<=j.ERROR&&Jf.error(`Auth (${zi}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e,...t){throw Mc(e,...t)}function ht(e,...t){return Mc(e,...t)}function Om(e,t,n){const r=Object.assign(Object.assign({},MS()),{[t]:n});return new Fn("auth","Firebase",r).create(t,{appName:e.name})}function $S(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&mt(e,"argument-error"),Om(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Mc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Nm.create(e,...t)}function N(e,t,...n){if(!e)throw Mc(t,...n)}function St(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ms(t),new Error(t)}function Nt(e,t){e||St(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=new Map;function It(e){Nt(e instanceof Function,"Expected a class definition");let t=Zf.get(e);return t?(Nt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Zf.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(e,t){const n=jn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Si(s,t??{}))return i;mt(i,"already-initialized")}return n.initialize({options:t})}function FS(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(It);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function jS(){return eh()==="http:"||eh()==="https:"}function eh(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jS()||Yg()||"connection"in navigator)?navigator.onLine:!0}function BS(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t,n){this.shortDelay=t,this.longDelay=n,Nt(n>t,"Short delay should be less than long delay!"),this.isMobile=Yw()||Jw()}get(){return zS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(e,t){Nt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;St("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;St("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;St("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=new Bi(3e4,6e4);function VS(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Qo(e,t,n,r,i={}){return Dm(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const l=ji(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),xm.fetch()(Lm(e,e.config.apiHost,n,l),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))})}async function Dm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},bS),t);try{const i=new KS(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ws(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ws(e,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ws(e,"email-already-in-use",o);if(a==="USER_DISABLED")throw ws(e,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Om(e,d,u);mt(e,d)}}catch(i){if(i instanceof ot)throw i;mt(e,"internal-error",{message:String(i)})}}async function WS(e,t,n,r,i={}){const s=await Qo(e,t,n,r,i);return"mfaPendingCredential"in s&&mt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Lm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?$c(e.config,i):`${e.config.apiScheme}://${i}`}class KS{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ht(this.auth,"network-request-failed")),HS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ws(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ht(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GS(e,t){return Qo(e,"POST","/v1/accounts:delete",t)}async function qS(e,t){return Qo(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function XS(e,t=!1){const n=Dt(e),r=await n.getIdToken(t),i=Uc(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ni(ea(i.auth_time)),issuedAtTime:ni(ea(i.iat)),expirationTime:ni(ea(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ea(e){return Number(e)*1e3}function Uc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ms("JWT malformed, contained fewer than 3 sections"),null;try{const i=qg(n);return i?JSON.parse(i):(Ms("Failed to decode base64 JWT payload"),null)}catch(i){return Ms("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function QS(e){const t=Uc(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ot&&YS(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function YS({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ki(e,qS(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?tI(s.providerUserInfo):[],l=eI(e.providerData,o),a=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Mm(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}async function ZS(e){const t=Dt(e);await yo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function eI(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function tI(e){return e.map(t=>{var{providerId:n}=t,r=Lc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(e,t){const n=await Dm(e,{},async()=>{const r=ji({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Lm(e,i,"/v1/token",`key=${s}`),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",xm.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):QS(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return N(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await nI(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ti;return r&&(N(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ti,this.toJSON())}_performRefresh(){return St("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Tn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Lc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await ki(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return XS(this,t)}reload(){return ZS(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Tn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await yo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ki(this,GS(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,l,a,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,A=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:h,emailVerified:y,isAnonymous:_,providerData:T,stsTokenManager:C}=n;N(h&&C,t,"internal-error");const P=Ti.fromJSON(this.name,C);N(typeof h=="string",t,"internal-error"),Mt(p,t.name),Mt(g,t.name),N(typeof y=="boolean",t,"internal-error"),N(typeof _=="boolean",t,"internal-error"),Mt(m,t.name),Mt(w,t.name),Mt(v,t.name),Mt(A,t.name),Mt(f,t.name),Mt(c,t.name);const b=new Tn({uid:h,auth:t,email:g,emailVerified:y,displayName:p,isAnonymous:_,photoURL:w,phoneNumber:m,tenantId:v,stsTokenManager:P,createdAt:f,lastLoginAt:c});return T&&Array.isArray(T)&&(b.providerData=T.map(L=>Object.assign({},L))),A&&(b._redirectEventId=A),b}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ti;i.updateFromServerResponse(n);const s=new Tn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await yo(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}$m.type="NONE";const th=$m;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(e,t,n){return`firebase:${e}:${t}:${n}`}class lr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=$s(this.userKey,i.apiKey,s),this.fullPersistenceKey=$s("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Tn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new lr(It(th),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||It(th);const o=$s(r,t.config.apiKey,t.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Tn._fromJSON(t,d);u!==s&&(l=p),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new lr(s,t,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new lr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(jm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Um(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Bm(t))return"Blackberry";if(bm(t))return"Webos";if(Fc(t))return"Safari";if((t.includes("chrome/")||Fm(t))&&!t.includes("edge/"))return"Chrome";if(zm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Um(e=Ee()){return/firefox\//i.test(e)}function Fc(e=Ee()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Fm(e=Ee()){return/crios\//i.test(e)}function jm(e=Ee()){return/iemobile/i.test(e)}function zm(e=Ee()){return/android/i.test(e)}function Bm(e=Ee()){return/blackberry/i.test(e)}function bm(e=Ee()){return/webos/i.test(e)}function Yo(e=Ee()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function rI(e=Ee()){var t;return Yo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function iI(){return Zw()&&document.documentMode===10}function Hm(e=Ee()){return Yo(e)||zm(e)||bm(e)||Bm(e)||/windows phone/i.test(e)||jm(e)}function sI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(e,t=[]){let n;switch(e){case"Browser":n=nh(Ee());break;case"Worker":n=`${nh(Ee())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${zi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,l)=>{try{const a=t(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rh(this),this.idTokenSubscription=new rh(this),this.beforeStateQueue=new oI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=It(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await lr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(t);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await yo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=BS()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Dt(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(It(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Fn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&It(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await lr.create(this,[It(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Vm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Jo(e){return Dt(e)}class rh{constructor(t){this.auth=t,this.observer=null,this.addObserver=sE(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function aI(e,t,n){const r=Jo(e);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Wm(t),{host:o,port:l}=uI(t),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||cI()}function Wm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function uI(e){const t=Wm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ih(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ih(o)}}}function ih(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function cI(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return St("not implemented")}_getIdTokenResponse(t){return St("not implemented")}_linkToIdToken(t,n){return St("not implemented")}_getReauthenticationResolver(t){return St("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(e,t){return WS(e,"POST","/v1/accounts:signInWithIdp",VS(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="http://localhost";class Mn extends Km{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Mn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Lc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Mn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return ar(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,ar(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ar(t,n)}buildRequest(){const t={requestUri:dI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ji(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends jc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends bi{constructor(){super("facebook.com")}static credential(t){return Mn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return zt.credentialFromTaggedObject(t)}static credentialFromError(t){return zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return zt.credential(t.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends bi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Mn._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return wt.credentialFromTaggedObject(t)}static credentialFromError(t){return wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends bi{constructor(){super("github.com")}static credential(t){return Mn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Bt.credential(t.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends bi{constructor(){super("twitter.com")}static credential(t,n){return Mn._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return bt.credentialFromTaggedObject(t)}static credentialFromError(t){return bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.TWITTER_SIGN_IN_METHOD="twitter.com";bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Tn._fromIdTokenResponse(t,r,i),o=sh(r);return new vr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=sh(r);return new vr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function sh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends ot{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wo.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new wo(t,n,r,i)}}function Gm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wo._fromErrorAndOperation(e,s,t,r):s})}async function fI(e,t,n=!1){const r=await ki(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return vr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hI(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ki(e,Gm(r,i,t,e),n);N(s.idToken,r,"internal-error");const o=Uc(s.idToken);N(o,r,"internal-error");const{sub:l}=o;return N(e.uid===l,r,"user-mismatch"),vr._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(e,t,n=!1){const r="signIn",i=await Gm(e,r,t),s=await vr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function gI(e,t,n,r){return Dt(e).onIdTokenChanged(t,n,r)}function mI(e,t,n){return Dt(e).beforeAuthStateChanged(t,n)}function vI(e){return Dt(e).signOut()}const Eo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Eo,"1"),this.storage.removeItem(Eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(){const e=Ee();return Fc(e)||Yo(e)}const wI=1e3,EI=10;class Xm extends qm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yI()&&sI(),this.fallbackToPolling=Hm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);iI()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,EI):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},wI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Xm.type="LOCAL";const _I=Xm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm extends qm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Qm.type="SESSION";const Ym=Qm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Zo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await SI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=zc("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return window}function kI(e){pt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function TI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CI(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function RI(){return Jm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="firebaseLocalStorageDb",AI=1,_o="firebaseLocalStorage",ev="fbase_key";class Hi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function el(e,t){return e.transaction([_o],t?"readwrite":"readonly").objectStore(_o)}function PI(){const e=indexedDB.deleteDatabase(Zm);return new Hi(e).toPromise()}function mu(){const e=indexedDB.open(Zm,AI);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(_o,{keyPath:ev})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(_o)?t(r):(r.close(),await PI(),t(await mu()))})})}async function oh(e,t,n){const r=el(e,!0).put({[ev]:t,value:n});return new Hi(r).toPromise()}async function NI(e,t){const n=el(e,!1).get(t),r=await new Hi(n).toPromise();return r===void 0?null:r.value}function lh(e,t){const n=el(e,!0).delete(t);return new Hi(n).toPromise()}const OI=800,xI=3;class tv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>xI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zo._getInstance(RI()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await TI(),!this.activeServiceWorker)return;this.sender=new II(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||CI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await mu();return await oh(t,Eo,"1"),await lh(t,Eo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>oh(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>NI(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>lh(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=el(i,!1).getAll();return new Hi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tv.type="LOCAL";const DI=tv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function MI(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",LI().appendChild(r)})}function $I(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Bi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(e,t){return t?It(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc extends Km{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ar(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ar(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ar(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function UI(e){return pI(e.auth,new Bc(e),e.bypassAuthState)}function FI(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),hI(n,new Bc(e),e.bypassAuthState)}async function jI(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),fI(n,new Bc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=t;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return UI;case"linkViaPopup":case"linkViaRedirect":return jI;case"reauthViaPopup":case"reauthViaRedirect":return FI;default:mt(this.auth,"internal-error")}}resolve(t){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=new Bi(2e3,1e4);async function BI(e,t,n){const r=Jo(e);$S(e,t,jc);const i=nv(r,n);return new En(r,"signInViaPopup",t,i).executeNotNull()}class En extends rv{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,En.currentPopupAction&&En.currentPopupAction.cancel(),En.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){Nt(this.filter.length===1,"Popup operations only handle one event");const t=zc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,En.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,zI.get())};t()}}En.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="pendingRedirect",Us=new Map;class HI extends rv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Us.get(this.auth._key());if(!t){try{const r=await VI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Us.set(this.auth._key(),t)}return this.bypassAuthState||Us.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VI(e,t){const n=GI(t),r=KI(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function WI(e,t){Us.set(e._key(),t)}function KI(e){return It(e._redirectPersistence)}function GI(e){return $s(bI,e.config.apiKey,e.name)}async function qI(e,t,n=!1){const r=Jo(e),i=nv(r,t),o=await new HI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=10*60*1e3;class QI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!YI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!iv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ht(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=XI&&this.cachedEventUids.clear(),this.cachedEventUids.has(ah(t))}saveEventToCache(t){this.cachedEventUids.add(ah(t)),this.lastProcessedEventTime=Date.now()}}function ah(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function iv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function YI(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(e,t={}){return Qo(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ek=/^https?/;async function tk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await JI(e);for(const n of t)try{if(nk(n))return}catch{}mt(e,"unauthorized-domain")}function nk(e){const t=gu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ek.test(n))return!1;if(ZI.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=new Bi(3e4,6e4);function uh(){const e=pt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function ik(e){return new Promise((t,n)=>{var r,i,s;function o(){uh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{uh(),n(ht(e,"network-request-failed"))},timeout:rk.get()})}if(!((i=(r=pt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=pt().gapi)===null||s===void 0)&&s.load)o();else{const l=$I("iframefcb");return pt()[l]=()=>{gapi.load?o():n(ht(e,"network-request-failed"))},MI(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(t=>{throw Fs=null,t})}let Fs=null;function sk(e){return Fs=Fs||ik(e),Fs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=new Bi(5e3,15e3),lk="__/auth/iframe",ak="emulator/auth/iframe",uk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ck=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dk(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?$c(t,ak):`https://${e.config.authDomain}/${lk}`,r={apiKey:t.apiKey,appName:e.name,v:zi},i=ck.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ji(r).slice(1)}`}async function fk(e){const t=await sk(e),n=pt().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:dk(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ht(e,"network-request-failed"),l=pt().setTimeout(()=>{s(o)},ok.get());function a(){pt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pk=500,gk=600,mk="_blank",vk="http://localhost";class ch{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yk(e,t,n,r=pk,i=gk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},hk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ee().toLowerCase();n&&(l=Fm(u)?mk:n),Um(u)&&(t=t||vk,a.scrollbars="yes");const d=Object.entries(a).reduce((g,[m,w])=>`${g}${m}=${w},`,"");if(rI(u)&&l!=="_self")return wk(t||"",l),new ch(null);const p=window.open(t||"",l,d);N(p,e,"popup-blocked");try{p.focus()}catch{}return new ch(p)}function wk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek="__/auth/handler",_k="emulator/auth/handler";function dh(e,t,n,r,i,s){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:zi,eventId:i};if(t instanceof jc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",iE(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(t instanceof bi){const a=t.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}e.tenantId&&(o.tid=e.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${Sk(e)}?${ji(l).slice(1)}`}function Sk({config:e}){return e.emulator?$c(e,_k):`https://${e.authDomain}/${Ek}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="webStorageSupport";class Ik{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ym,this._completeRedirectFn=qI,this._overrideRedirectResult=WI}async _openPopup(t,n,r,i){var s;Nt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=dh(t,n,r,gu(),i);return yk(t,o,zc())}async _openRedirect(t,n,r,i){return await this._originValidation(t),kI(dh(t,n,r,gu(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await fk(t),r=new QI(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ta,{type:ta},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ta];o!==void 0&&n(!!o),mt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hm()||Fc()||Yo()}}const kk=Ik;var fh="@firebase/auth",hh="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Rk(e){gt(new st("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{N(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),N(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vm(e)},d=new lI(l,a,u);return FS(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),gt(new st("auth-internal",t=>{const n=Jo(t.getProvider("auth").getImmediate());return(r=>new Tk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(fh,hh,Ck(e)),We(fh,hh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=5*60,Pk=Qg("authIdTokenMaxAge")||Ak;let ph=null;const Nk=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Pk)return;const i=n==null?void 0:n.token;ph!==i&&(ph=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ok(e=Pc()){const t=jn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=US(e,{popupRedirectResolver:kk,persistence:[DI,_I,Ym]}),r=Qg("authTokenSyncURL");if(r){const s=Nk(r);mI(n,s,()=>s(n.currentUser)),gI(n,o=>s(o))}const i=Xg("auth");return i&&aI(n,`http://${i}`),n}Rk("Browser");var xk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,bc=bc||{},O=xk||self;function So(){}function tl(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Vi(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Dk(e){return Object.prototype.hasOwnProperty.call(e,na)&&e[na]||(e[na]=++Lk)}var na="closure_uid_"+(1e9*Math.random()>>>0),Lk=0;function Mk(e,t,n){return e.call.apply(e.bind,arguments)}function $k(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ve(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ve=Mk:ve=$k,ve.apply(null,arguments)}function Es(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function fe(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(r,i,s){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return t.prototype[i].apply(r,o)}}function un(){this.s=this.s,this.o=this.o}var Uk=0;un.prototype.s=!1;un.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Uk!=0)&&Dk(this)};un.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const sv=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Hc(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function gh(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(tl(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function ye(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var Fk=function(){if(!O.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{O.addEventListener("test",So,t),O.removeEventListener("test",So,t)}catch{}return e}();function Io(e){return/^[\s\xa0]*$/.test(e)}var mh=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ra(e,t){return e<t?-1:e>t?1:0}function nl(){var e=O.navigator;return e&&(e=e.userAgent)?e:""}function ct(e){return nl().indexOf(e)!=-1}function Vc(e){return Vc[" "](e),e}Vc[" "]=So;function jk(e){var t=bk;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var zk=ct("Opera"),Ci=ct("Trident")||ct("MSIE"),ov=ct("Edge"),vu=ov||Ci,lv=ct("Gecko")&&!(nl().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge"))&&!(ct("Trident")||ct("MSIE"))&&!ct("Edge"),Bk=nl().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge");function av(){var e=O.document;return e?e.documentMode:void 0}var yu;e:{var ia="",sa=function(){var e=nl();if(lv)return/rv:([^\);]+)(\)|;)/.exec(e);if(ov)return/Edge\/([\d\.]+)/.exec(e);if(Ci)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Bk)return/WebKit\/(\S+)/.exec(e);if(zk)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(sa&&(ia=sa?sa[1]:""),Ci){var oa=av();if(oa!=null&&oa>parseFloat(ia)){yu=String(oa);break e}}yu=ia}var bk={};function Hk(){return jk(function(){let e=0;const t=mh(String(yu)).split("."),n=mh("9").split("."),r=Math.max(t.length,n.length);for(let o=0;e==0&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;e=ra(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||ra(i[2].length==0,s[2].length==0)||ra(i[2],s[2]),i=i[3],s=s[3]}while(e==0)}return 0<=e})}O.document&&Ci&&av();function Ri(e,t){if(ye.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(lv){e:{try{Vc(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Vk[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ri.X.h.call(this)}}fe(Ri,ye);var Vk={2:"touch",3:"pen",4:"mouse"};Ri.prototype.h=function(){Ri.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Wi="closure_listenable_"+(1e6*Math.random()|0),Wk=0;function Kk(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++Wk,this.ba=this.ea=!1}function rl(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Wc(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function uv(e){const t={};for(const n in e)t[n]=e[n];return t}const vh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cv(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<vh.length;s++)n=vh[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function il(e){this.src=e,this.g={},this.h=0}il.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Eu(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Kk(t,this.src,s,!!r,i),t.ea=n,e.push(t)),t};function wu(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=sv(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(rl(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Eu(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}var Kc="closure_lm_"+(1e6*Math.random()|0),la={};function dv(e,t,n,r,i){if(r&&r.once)return hv(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)dv(e,t[s],n,r,i);return null}return n=Xc(n),e&&e[Wi]?e.N(t,n,Vi(r)?!!r.capture:!!r,i):fv(e,t,n,!1,r,i)}function fv(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Vi(i)?!!i.capture:!!i,l=qc(e);if(l||(e[Kc]=l=new il(e)),n=l.add(t,n,r,o,s),n.proxy)return n;if(r=Gk(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Fk||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(gv(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Gk(){function e(n){return t.call(e.src,e.listener,n)}const t=qk;return e}function hv(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)hv(e,t[s],n,r,i);return null}return n=Xc(n),e&&e[Wi]?e.O(t,n,Vi(r)?!!r.capture:!!r,i):fv(e,t,n,!0,r,i)}function pv(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)pv(e,t[s],n,r,i);else r=Vi(r)?!!r.capture:!!r,n=Xc(n),e&&e[Wi]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Eu(s,n,r,i),-1<n&&(rl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=qc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Eu(t,n,r,i)),(n=-1<e?t[e]:null)&&Gc(n))}function Gc(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Wi])wu(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(gv(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=qc(t))?(wu(n,e),n.h==0&&(n.src=null,t[Kc]=null)):rl(e)}}}function gv(e){return e in la?la[e]:la[e]="on"+e}function qk(e,t){if(e.ba)e=!0;else{t=new Ri(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Gc(e),e=n.call(r,t)}return e}function qc(e){return e=e[Kc],e instanceof il?e:null}var aa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xc(e){return typeof e=="function"?e:(e[aa]||(e[aa]=function(t){return e.handleEvent(t)}),e[aa])}function le(){un.call(this),this.i=new il(this),this.P=this,this.I=null}fe(le,un);le.prototype[Wi]=!0;le.prototype.removeEventListener=function(e,t,n,r){pv(this,e,t,n,r)};function ce(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new ye(t,e);else if(t instanceof ye)t.target=t.target||e;else{var i=t;t=new ye(r,e),cv(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=_s(o,r,!0,t)&&i}if(o=t.g=e,i=_s(o,r,!0,t)&&i,i=_s(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=_s(o,r,!1,t)&&i}le.prototype.M=function(){if(le.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)rl(n[r]);delete e.g[t],e.h--}}this.I=null};le.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};le.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function _s(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var l=o.listener,a=o.ha||o.src;o.ea&&wu(e.i,o),i=l.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var Qc=O.JSON.stringify;function Xk(){var e=yv;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Qk{constructor(){this.h=this.g=null}add(t,n){const r=mv.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var mv=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Yk,e=>e.reset());class Yk{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Jk(e){O.setTimeout(()=>{throw e},0)}function vv(e,t){_u||Zk(),Su||(_u(),Su=!0),yv.add(e,t)}var _u;function Zk(){var e=O.Promise.resolve(void 0);_u=function(){e.then(eT)}}var Su=!1,yv=new Qk;function eT(){for(var e;e=Xk();){try{e.h.call(e.g)}catch(n){Jk(n)}var t=mv;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Su=!1}function sl(e,t){le.call(this),this.h=e||1,this.g=t||O,this.j=ve(this.lb,this),this.l=Date.now()}fe(sl,le);R=sl.prototype;R.ca=!1;R.R=null;R.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ce(this,"tick"),this.ca&&(Yc(this),this.start()))}};R.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yc(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}R.M=function(){sl.X.M.call(this),Yc(this),delete this.g};function Jc(e,t,n){if(typeof e=="function")n&&(e=ve(e,n));else if(e&&typeof e.handleEvent=="function")e=ve(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:O.setTimeout(e,t||0)}function wv(e){e.g=Jc(()=>{e.g=null,e.i&&(e.i=!1,wv(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class tT extends un{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:wv(this)}M(){super.M(),this.g&&(O.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ai(e){un.call(this),this.h=e,this.g={}}fe(Ai,un);var yh=[];function Ev(e,t,n,r){Array.isArray(n)||(n&&(yh[0]=n.toString()),n=yh);for(var i=0;i<n.length;i++){var s=dv(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function _v(e){Wc(e.g,function(t,n){this.g.hasOwnProperty(n)&&Gc(t)},e),e.g={}}Ai.prototype.M=function(){Ai.X.M.call(this),_v(this)};Ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ol(){this.g=!0}ol.prototype.Aa=function(){this.g=!1};function nT(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",l=s.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var d=u[0];u=u[1];var p=d.split("_");o=2<=p.length&&p[1]=="type"?o+(d+"="+u+"&"):o+(d+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function rT(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function er(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+sT(e,n)+(r?" "+r:"")})}function iT(e,t){e.info(function(){return"TIMEOUT: "+t})}ol.prototype.info=function(){};function sT(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Qc(n)}catch{return t}}var Tr={},wh=null;function Zc(){return wh=wh||new le}Tr.Pa="serverreachability";function Sv(e){ye.call(this,Tr.Pa,e)}fe(Sv,ye);function Pi(e){const t=Zc();ce(t,new Sv(t))}Tr.STAT_EVENT="statevent";function Iv(e,t){ye.call(this,Tr.STAT_EVENT,e),this.stat=t}fe(Iv,ye);function Se(e){const t=Zc();ce(t,new Iv(t,e))}Tr.Qa="timingevent";function kv(e,t){ye.call(this,Tr.Qa,e),this.size=t}fe(kv,ye);function Ki(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return O.setTimeout(function(){e()},t)}var ed={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},oT={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function td(){}td.prototype.h=null;function Eh(e){return e.h||(e.h=e.i())}function lT(){}var Gi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function nd(){ye.call(this,"d")}fe(nd,ye);function rd(){ye.call(this,"c")}fe(rd,ye);var Iu;function ll(){}fe(ll,td);ll.prototype.g=function(){return new XMLHttpRequest};ll.prototype.i=function(){return{}};Iu=new ll;function qi(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Ai(this),this.O=aT,e=vu?125:void 0,this.T=new sl(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Tv}function Tv(){this.i=null,this.g="",this.h=!1}var aT=45e3,ku={},ko={};R=qi.prototype;R.setTimeout=function(e){this.O=e};function Tu(e,t,n){e.K=1,e.v=ul(Ot(t)),e.s=n,e.P=!0,Cv(e,null)}function Cv(e,t){e.F=Date.now(),Xi(e),e.A=Ot(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),Lv(n.i,"t",r),e.C=0,n=e.l.H,e.h=new Tv,e.g=ty(e.l,n?t:null,!e.s),0<e.N&&(e.L=new tT(ve(e.La,e,e.g),e.N)),Ev(e.S,e.g,"readystatechange",e.ib),t=e.H?uv(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Pi(),nT(e.j,e.u,e.A,e.m,e.U,e.s)}R.ib=function(e){e=e.target;const t=this.L;t&&kt(e)==3?t.l():this.La(e)};R.La=function(e){try{if(e==this.g)e:{const d=kt(this.g);var t=this.g.Ea();const p=this.g.aa();if(!(3>d)&&(d!=3||vu||this.g&&(this.h.h||this.g.fa()||kh(this.g)))){this.I||d!=4||t==7||(t==8||0>=p?Pi(3):Pi(2)),al(this);var n=this.g.aa();this.Y=n;t:if(Rv(this)){var r=kh(this.g);e="";var i=r.length,s=kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_n(this),ri(this);var o="";break t}this.h.i=new O.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,rT(this.j,this.u,this.A,this.m,this.U,d,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Io(l)){var u=l;break t}}u=null}if(n=u)er(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Cu(this,n);else{this.i=!1,this.o=3,Se(12),_n(this),ri(this);break e}}this.P?(Av(this,d,o),vu&&this.i&&d==3&&(Ev(this.S,this.T,"tick",this.hb),this.T.start())):(er(this.j,this.m,o,null),Cu(this,o)),d==4&&_n(this),this.i&&!this.I&&(d==4?Yv(this.l,this):(this.i=!1,Xi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Se(12)):(this.o=0,Se(13)),_n(this),ri(this)}}}catch{}finally{}};function Rv(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Av(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if(i=uT(e,n),i==ko){t==4&&(e.o=4,Se(14),r=!1),er(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ku){e.o=4,Se(15),er(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else er(e.j,e.m,i,null),Cu(e,i);Rv(e)&&i!=ko&&i!=ku&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Se(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),cd(t),t.K=!0,Se(11))):(er(e.j,e.m,n,"[Invalid Chunked Response]"),_n(e),ri(e))}R.hb=function(){if(this.g){var e=kt(this.g),t=this.g.fa();this.C<t.length&&(al(this),Av(this,e,t),this.i&&e!=4&&Xi(this))}};function uT(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?ko:(n=Number(t.substring(n,r)),isNaN(n)?ku:(r+=1,r+n>t.length?ko:(t=t.substr(r,n),e.C=r+n,t)))}R.cancel=function(){this.I=!0,_n(this)};function Xi(e){e.V=Date.now()+e.O,Pv(e,e.O)}function Pv(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ki(ve(e.gb,e),t)}function al(e){e.B&&(O.clearTimeout(e.B),e.B=null)}R.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(iT(this.j,this.A),this.K!=2&&(Pi(),Se(17)),_n(this),this.o=2,ri(this)):Pv(this,this.V-e)};function ri(e){e.l.G==0||e.I||Yv(e.l,e)}function _n(e){al(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Yc(e.T),_v(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Cu(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Ru(n.h,e))){if(!e.J&&Ru(n.h,e)&&n.G==3){try{var r=n.Fa.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Ro(n),hl(n);else break e;ud(n),Se(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ki(ve(n.cb,n),6e3));if(1>=Uv(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Sn(n,11)}else if((e.J||n.g==e)&&Ro(n),!Io(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const d=u[3];d!=null&&(n.ma=d,n.j.info("VER="+n.ma));const p=u[4];p!=null&&(n.Ca=p,n.j.info("SVER="+n.Ca));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const w=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.h;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(id(s,s.h),s.h=null))}if(r.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,K(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=ey(r,r.H?r.ka:null,r.V),o.J){Fv(r.h,o);var l=o,a=r.J;a&&l.setTimeout(a),l.B&&(al(l),Xi(l)),r.g=o}else Xv(r);0<n.i.length&&pl(n)}else u[0]!="stop"&&u[0]!="close"||Sn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Sn(n,7):ad(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Pi(4)}catch{}}function cT(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(tl(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function dT(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(tl(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Nv(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(tl(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=dT(e),r=cT(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Ov=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fT(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Cn(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Cn){this.h=t!==void 0?t:e.h,To(this,e.j),this.s=e.s,this.g=e.g,Co(this,e.m),this.l=e.l,t=e.i;var n=new Ni;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),_h(this,n),this.o=e.o}else e&&(n=String(e).match(Ov))?(this.h=!!t,To(this,n[1]||"",!0),this.s=Vr(n[2]||""),this.g=Vr(n[3]||"",!0),Co(this,n[4]),this.l=Vr(n[5]||"",!0),_h(this,n[6]||"",!0),this.o=Vr(n[7]||"")):(this.h=!!t,this.i=new Ni(null,this.h))}Cn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Wr(t,Sh,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Wr(t,Sh,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Wr(n,n.charAt(0)=="/"?gT:pT,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Wr(n,vT)),e.join("")};function Ot(e){return new Cn(e)}function To(e,t,n){e.j=n?Vr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Co(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function _h(e,t,n){t instanceof Ni?(e.i=t,yT(e.i,e.h)):(n||(t=Wr(t,mT)),e.i=new Ni(t,e.h))}function K(e,t,n){e.i.set(t,n)}function ul(e){return K(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Vr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Wr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,hT),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function hT(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Sh=/[#\/\?@]/g,pT=/[#\?:]/g,gT=/[#\?]/g,mT=/[#\?@]/g,vT=/#/g;function Ni(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function cn(e){e.g||(e.g=new Map,e.h=0,e.i&&fT(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}R=Ni.prototype;R.add=function(e,t){cn(this),this.i=null,e=Cr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function xv(e,t){cn(e),t=Cr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Dv(e,t){return cn(e),t=Cr(e,t),e.g.has(t)}R.forEach=function(e,t){cn(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};R.oa=function(){cn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};R.W=function(e){cn(this);let t=[];if(typeof e=="string")Dv(this,e)&&(t=t.concat(this.g.get(Cr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};R.set=function(e,t){return cn(this),this.i=null,e=Cr(this,e),Dv(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};R.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Lv(e,t,n){xv(e,t),0<n.length&&(e.i=null,e.g.set(Cr(e,t),Hc(n)),e.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Cr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function yT(e,t){t&&!e.j&&(cn(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(xv(this,r),Lv(this,i,n))},e)),e.j=t}var wT=class{constructor(e,t){this.h=e,this.g=t}};function Mv(e){this.l=e||ET,O.PerformanceNavigationTiming?(e=O.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(O.g&&O.g.Ga&&O.g.Ga()&&O.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ET=10;function $v(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Uv(e){return e.h?1:e.g?e.g.size:0}function Ru(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function id(e,t){e.g?e.g.add(t):e.h=t}function Fv(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Mv.prototype.cancel=function(){if(this.i=jv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function jv(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Hc(e.i)}function sd(){}sd.prototype.stringify=function(e){return O.JSON.stringify(e,void 0)};sd.prototype.parse=function(e){return O.JSON.parse(e,void 0)};function _T(){this.g=new sd}function ST(e,t,n){const r=n||"";try{Nv(e,function(i,s){let o=i;Vi(i)&&(o=Qc(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function IT(e,t){const n=new ol;if(O.Image){const r=new Image;r.onload=Es(Ss,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Es(Ss,n,r,"TestLoadImage: error",!1,t),r.onabort=Es(Ss,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Es(Ss,n,r,"TestLoadImage: timeout",!1,t),O.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ss(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function cl(e){this.l=e.ac||null,this.j=e.jb||!1}fe(cl,td);cl.prototype.g=function(){return new dl(this.l,this.j)};cl.prototype.i=function(e){return function(){return e}}({});function dl(e,t){le.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=od,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}fe(dl,le);var od=0;R=dl.prototype;R.open=function(e,t){if(this.readyState!=od)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Oi(this)};R.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||O).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qi(this)),this.readyState=od};R.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Oi(this)),this.g&&(this.readyState=3,Oi(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof O.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zv(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function zv(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}R.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Qi(this):Oi(this),this.readyState==3&&zv(this)}};R.Va=function(e){this.g&&(this.response=this.responseText=e,Qi(this))};R.Ua=function(e){this.g&&(this.response=e,Qi(this))};R.ga=function(){this.g&&Qi(this)};function Qi(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Oi(e)}R.setRequestHeader=function(e,t){this.v.append(e,t)};R.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Oi(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(dl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var kT=O.JSON.parse;function Z(e){le.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bv,this.K=this.L=!1}fe(Z,le);var Bv="",TT=/^https?$/i,CT=["POST","PUT"];R=Z.prototype;R.Ka=function(e){this.L=e};R.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Iu.g(),this.C=this.u?Eh(this.u):Eh(Iu),this.g.onreadystatechange=ve(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){Ih(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=O.FormData&&e instanceof O.FormData,!(0<=sv(CT,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vv(this),0<this.B&&((this.K=RT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ve(this.qa,this)):this.A=Jc(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Ih(this,s)}};function RT(e){return Ci&&Hk()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}R.qa=function(){typeof bc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ce(this,"timeout"),this.abort(8))};function Ih(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,bv(e),fl(e)}function bv(e){e.D||(e.D=!0,ce(e,"complete"),ce(e,"error"))}R.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ce(this,"complete"),ce(this,"abort"),fl(this))};R.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fl(this,!0)),Z.X.M.call(this)};R.Ha=function(){this.s||(this.F||this.v||this.l?Hv(this):this.fb())};R.fb=function(){Hv(this)};function Hv(e){if(e.h&&typeof bc<"u"&&(!e.C[1]||kt(e)!=4||e.aa()!=2)){if(e.v&&kt(e)==4)Jc(e.Ha,0,e);else if(ce(e,"readystatechange"),kt(e)==4){e.h=!1;try{const l=e.aa();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=l===0){var i=String(e.H).match(Ov)[1]||null;if(!i&&O.self&&O.self.location){var s=O.self.location.protocol;i=s.substr(0,s.length-1)}r=!TT.test(i?i.toLowerCase():"")}n=r}if(n)ce(e,"complete"),ce(e,"success");else{e.m=6;try{var o=2<kt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",bv(e)}}finally{fl(e)}}}}function fl(e,t){if(e.g){Vv(e);const n=e.g,r=e.C[0]?So:null;e.g=null,e.C=null,t||ce(e,"ready");try{n.onreadystatechange=r}catch{}}}function Vv(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(O.clearTimeout(e.A),e.A=null)}function kt(e){return e.g?e.g.readyState:0}R.aa=function(){try{return 2<kt(this)?this.g.status:-1}catch{return-1}};R.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),kT(t)}};function kh(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Bv:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}R.Ea=function(){return this.m};R.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Wv(e){let t="";return Wc(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function ld(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Wv(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):K(e,t,n))}function Fr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kv(e){this.Ca=0,this.i=[],this.j=new ol,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Fr("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Fr("baseRetryDelayMs",5e3,e),this.bb=Fr("retryDelaySeedMs",1e4,e),this.$a=Fr("forwardChannelMaxRetries",2,e),this.ta=Fr("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Mv(e&&e.concurrentRequestLimit),this.Fa=new _T,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}R=Kv.prototype;R.ma=8;R.G=1;function ad(e){if(Gv(e),e.G==3){var t=e.U++,n=Ot(e.F);K(n,"SID",e.I),K(n,"RID",t),K(n,"TYPE","terminate"),Yi(e,n),t=new qi(e,e.j,t,void 0),t.K=2,t.v=ul(Ot(n)),n=!1,O.navigator&&O.navigator.sendBeacon&&(n=O.navigator.sendBeacon(t.v.toString(),"")),!n&&O.Image&&(new Image().src=t.v,n=!0),n||(t.g=ty(t.l,null),t.g.da(t.v)),t.F=Date.now(),Xi(t)}Zv(e)}function hl(e){e.g&&(cd(e),e.g.cancel(),e.g=null)}function Gv(e){hl(e),e.u&&(O.clearTimeout(e.u),e.u=null),Ro(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&O.clearTimeout(e.m),e.m=null)}function pl(e){$v(e.h)||e.m||(e.m=!0,vv(e.Ja,e),e.C=0)}function AT(e,t){return Uv(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Ki(ve(e.Ja,e,t),Jv(e,e.C)),e.C++,!0)}R.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new qi(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=uv(s),cv(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=qv(this,i,t),n=Ot(this.F),K(n,"RID",e),K(n,"CVER",22),this.D&&K(n,"X-HTTP-Session-Id",this.D),Yi(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(Wv(s)))+"&"+t:this.o&&ld(n,this.o,s)),id(this.h,i),this.Ya&&K(n,"TYPE","init"),this.O?(K(n,"$req",t),K(n,"SID","null"),i.Z=!0,Tu(i,n,null)):Tu(i,n,t),this.G=2}}else this.G==3&&(e?Th(this,e):this.i.length==0||$v(this.h)||Th(this))};function Th(e,t){var n;t?n=t.m:n=e.U++;const r=Ot(e.F);K(r,"SID",e.I),K(r,"RID",n),K(r,"AID",e.T),Yi(e,r),e.o&&e.s&&ld(r,e.o,e.s),n=new qi(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=qv(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),id(e.h,n),Tu(n,r,t)}function Yi(e,t){e.ia&&Wc(e.ia,function(n,r){K(t,r,n)}),e.l&&Nv({},function(n,r){K(t,r,n)})}function qv(e,t,n){n=Math.min(e.i.length,n);var r=e.l?ve(e.l.Ra,e.l,e):null;e:{var i=e.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let l=!0;for(let a=0;a<n;a++){let u=i[a].h;const d=i[a].g;if(u-=s,0>u)s=Math.max(0,i[a].h-100),l=!1;else try{ST(d,o,"req"+u+"_")}catch{r&&r(d)}}if(l){r=o.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Xv(e){e.g||e.u||(e.Z=1,vv(e.Ia,e),e.A=0)}function ud(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Ki(ve(e.Ia,e),Jv(e,e.A)),e.A++,!0)}R.Ia=function(){if(this.u=null,Qv(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Ki(ve(this.eb,this),e)}};R.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Se(10),hl(this),Qv(this))};function cd(e){e.B!=null&&(O.clearTimeout(e.B),e.B=null)}function Qv(e){e.g=new qi(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Ot(e.sa);K(t,"RID","rpc"),K(t,"SID",e.I),K(t,"CI",e.L?"0":"1"),K(t,"AID",e.T),K(t,"TYPE","xmlhttp"),Yi(e,t),e.o&&e.s&&ld(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=ul(Ot(t)),n.s=null,n.P=!0,Cv(n,e)}R.cb=function(){this.v!=null&&(this.v=null,hl(this),ud(this),Se(19))};function Ro(e){e.v!=null&&(O.clearTimeout(e.v),e.v=null)}function Yv(e,t){var n=null;if(e.g==t){Ro(e),cd(e),e.g=null;var r=2}else if(Ru(e.h,t))n=t.D,Fv(e.h,t),r=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=Zc(),ce(r,new kv(r,n)),pl(e)}else Xv(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(r==1&&AT(e,t)||r==2&&ud(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Sn(e,5);break;case 4:Sn(e,10);break;case 3:Sn(e,6);break;default:Sn(e,2)}}}function Jv(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Sn(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=ve(e.kb,e);n||(n=new Cn("//www.google.com/images/cleardot.gif"),O.location&&O.location.protocol=="http"||To(n,"https"),ul(n)),IT(n.toString(),r)}else Se(2);e.G=0,e.l&&e.l.va(t),Zv(e),Gv(e)}R.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function Zv(e){if(e.G=0,e.la=[],e.l){const t=jv(e.h);(t.length!=0||e.i.length!=0)&&(gh(e.la,t),gh(e.la,e.i),e.h.i.length=0,Hc(e.i),e.i.length=0),e.l.ua()}}function ey(e,t,n){var r=n instanceof Cn?Ot(n):new Cn(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),Co(r,r.m);else{var i=O.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Cn(null,void 0);r&&To(s,r),t&&(s.g=t),i&&Co(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&K(r,n,t),K(r,"VER",e.ma),Yi(e,r),r}function ty(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Z(new cl({jb:!0})):new Z(e.ra),t.Ka(e.H),t}function ny(){}R=ny.prototype;R.xa=function(){};R.wa=function(){};R.va=function(){};R.ua=function(){};R.Ra=function(){};function Xe(e,t){le.call(this),this.g=new Kv(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Io(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Io(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Rr(this)}fe(Xe,le);Xe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Se(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=ey(e,null,e.V),pl(e)};Xe.prototype.close=function(){ad(this.g)};Xe.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Qc(e),e=n);t.i.push(new wT(t.ab++,e)),t.G==3&&pl(t)};Xe.prototype.M=function(){this.g.l=null,delete this.j,ad(this.g),delete this.g,Xe.X.M.call(this)};function ry(e){nd.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}fe(ry,nd);function iy(){rd.call(this),this.status=1}fe(iy,rd);function Rr(e){this.g=e}fe(Rr,ny);Rr.prototype.xa=function(){ce(this.g,"a")};Rr.prototype.wa=function(e){ce(this.g,new ry(e))};Rr.prototype.va=function(e){ce(this.g,new iy)};Rr.prototype.ua=function(){ce(this.g,"b")};Xe.prototype.send=Xe.prototype.u;Xe.prototype.open=Xe.prototype.m;Xe.prototype.close=Xe.prototype.close;ed.NO_ERROR=0;ed.TIMEOUT=8;ed.HTTP_ERROR=6;oT.COMPLETE="complete";lT.EventType=Gi;Gi.OPEN="a";Gi.CLOSE="b";Gi.ERROR="c";Gi.MESSAGE="d";le.prototype.listen=le.prototype.N;Z.prototype.listenOnce=Z.prototype.O;Z.prototype.getLastError=Z.prototype.Oa;Z.prototype.getLastErrorCode=Z.prototype.Ea;Z.prototype.getStatus=Z.prototype.aa;Z.prototype.getResponseJson=Z.prototype.Sa;Z.prototype.getResponseText=Z.prototype.fa;Z.prototype.send=Z.prototype.da;Z.prototype.setWithCredentials=Z.prototype.Ka;const Ch="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ge.UNAUTHENTICATED=new ge(null),ge.GOOGLE_CREDENTIALS=new ge("google-credentials-uid"),ge.FIRST_PARTY=new ge("first-party-uid"),ge.MOCK_USER=new ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji="9.18.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new Go("@firebase/firestore");function De(e,...t){if(yr.logLevel<=j.DEBUG){const n=t.map(fd);yr.debug(`Firestore (${Ji}): ${e}`,...n)}}function dd(e,...t){if(yr.logLevel<=j.ERROR){const n=t.map(fd);yr.error(`Firestore (${Ji}): ${e}`,...n)}}function PT(e,...t){if(yr.logLevel<=j.WARN){const n=t.map(fd);yr.warn(`Firestore (${Ji}): ${e}`,...n)}}function fd(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(e="Unexpected state"){const t=`FIRESTORE (${Ji}) INTERNAL ASSERTION FAILED: `+e;throw dd(t),new Error(t)}function Ao(e,t){e||hd()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ue extends ot{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class NT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ge.UNAUTHENTICATED))}shutdown(){}}class OT{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xT{constructor(t){this.t=t,this.currentUser=ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let s=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ur,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=s;t.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{De("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(De("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ur)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(De("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ao(typeof r.accessToken=="string"),new sy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ao(t===null||typeof t=="string"),new ge(t)}}class DT{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=ge.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ao(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class LT{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new DT(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MT{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $T{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const r=s=>{s.error!=null&&De("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,De("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{De("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):De("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ao(typeof n.token=="string"),this.A=n.token,new MT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=UT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function oy(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(t,n,r,i,s,o,l,a){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.useFetchStreams=a}}class Po{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Po&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rh,$;($=Rh||(Rh={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";function ua(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(t,n,r=1e3,i=1.5,s=6e4){this.Ys=t,this.timerId=n,this.po=r,this.Io=i,this.To=s,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(t){this.cancel();const n=Math.floor(this.Eo+this.bo()),r=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-r);i>0&&De("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),t())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,l=new pd(t,n,o,i,s);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ue($e.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function BT(e,t){if(dd("AsyncQueue",`${t}: ${e}`),oy(e))return new Ue($e.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ge.UNAUTHENTICATED,this.clientId=FT.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{De("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(De("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ue($e.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=BT(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}const Ah=new Map;function HT(e,t,n,r){if(t===!0&&r===!0)throw new Ue($e.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function VT(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":hd()}function WT(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ue($e.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=VT(e);throw new Ue($e.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new Ue($e.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ue($e.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,HT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ph({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ue($e.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ue($e.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ph(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new NT;switch(n.type){case"gapi":const r=n.client;return new LT(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Ue($e.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ah.get(t);n&&(De("ComponentProvider","Removing Datastore"),Ah.delete(t),n.terminate())}(this),Promise.resolve()}}function KT(e,t,n,r={}){var i;const s=(e=WT(e,ly))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==t&&PT("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,l;if(typeof r.mockUserToken=="string")o=r.mockUserToken,l=ge.MOCK_USER;else{o=Qw(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const a=r.mockUserToken.sub||r.mockUserToken.user_id;if(!a)throw new Ue($e.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ge(a)}e._authCredentials=new OT(new sy(o,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new zT(this,"async_queue_retry"),this.Hc=()=>{const n=ua();n&&De("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const t=ua();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Jc(),this.Yc(t)}enterRestrictedMode(t){if(!this.Kc){this.Kc=!0,this.zc=t||!1;const n=ua();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(t){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new ur;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Uc.push(t),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(t){if(!oy(t))throw t;De("AsyncQueue","Operation failed with retryable error: "+t)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(t){const n=this.qc.then(()=>(this.jc=!0,t().catch(r=>{this.Qc=r,this.jc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw dd("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.jc=!1,r))));return this.qc=n,n}enqueueAfterDelay(t,n,r){this.Jc(),this.Wc.indexOf(t)>-1&&(n=0);const i=pd.createAndSchedule(this,t,n,r,s=>this.Xc(s));return this.Gc.push(i),i}Jc(){this.Qc&&hd()}verifyOperationInProgress(){}async ta(){let t;do t=this.qc,await t;while(t!==this.qc)}ea(t){for(const n of this.Gc)if(n.timerId===t)return!0;return!1}na(t){return this.ta().then(()=>{this.Gc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ta()})}sa(t){this.Wc.push(t)}Xc(t){const n=this.Gc.indexOf(t);this.Gc.splice(n,1)}}class qT extends ly{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new GT,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||QT(this),this._firestoreClient.terminate()}}function XT(e,t){const n=typeof e=="object"?e:Pc(),r=typeof e=="string"?e:t||"(default)",i=jn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Gw("firestore");s&&KT(i,...s)}return i}function QT(e){var t;const n=e._freezeSettings(),r=function(i,s,o,l){return new jT(i,s,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new bT(e._authCredentials,e._appCheckCredentials,e._queue,r)}(function(e,t=!0){(function(n){Ji=n})(zi),gt(new st("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new qT(new xT(n.getProvider("auth-internal")),new $T(n.getProvider("app-check-internal")),function(l,a){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new Ue($e.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Po(l.options.projectId,a)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),We(Ch,"3.9.0",e),We(Ch,"3.9.0","esm2017")})();const YT={apiKey:"AIzaSyBtReUaJWm52XJZu1pZ_reSUE-3ACgNAA0",authDomain:"cloud8minds.firebaseapp.com",projectId:"cloud8minds",storageBucket:"cloud8minds.appspot.com",messagingSenderId:"422514335341",appId:"1:422514335341:web:fd0fd7eddcc33c4136a964",measurementId:"G-154CCYQ8KR"},gd=rm(YT);OS(gd);const Je=Ok(gd),JT=new wt;XT(gd);const ZT=()=>F("div",{className:"h-full",children:"Home Page"}),eC=()=>F("div",{children:"NewPost"}),tC=()=>{let e=Tc();return F("div",{children:F("h1",{className:"w-full mt-64 h-96 text-lg p-2 font-medium text-center",children:Bn("button",{onClick:()=>{BI(Je,JT).then(n=>{localStorage.setItem("isAuth","true"),e("/")}).catch(n=>console.error(n))},className:"btn h-14 font-bold text-lg text-gray-300 sm:w-96 bg-gray-600 w-full gap-2",children:[F("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-google",viewBox:"0 0 16 16",id:"IconChangeColor",children:F("path",{d:"M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z",id:"mainIconPathAttribute",fill:"#222"})}),"LOGIN WITH GOOGLE"]})})})},nC=()=>{let e=Tc();return F("div",{className:"w-full h-96 flex justify-center items-center",children:F("button",{onClick:()=>{vI(Je).then(()=>{e("/"),console.log("User SignOut")})},className:"btn h-14 font-bold text-lg text-gray-300 sm:w-96 bg-gray-600 w-[90%] gap-2",children:"SIGN OUT"})})};function rC(){var e,t,n;return I.useState(!1),I.useEffect(()=>{}),F(Mw,{children:Bn("div",{className:"h-screen w-full bg-gray-900",children:[Bn("nav",{className:"sticky overflow-x-scroll top-0 bg-gray-800 w-full p-5 flex gap-5 justify-center items-center",children:[F(ys,{className:"text-white/40 hover:text-white transition ease-in text-2xl font-bold p-0",to:"/",children:"HOME"}),((e=Je==null?void 0:Je.currentUser)==null?void 0:e.uid)&&F(ys,{className:"text-white/40 hover:text-white transition ease-in text-2xl font-bold p-0",to:"/new-post",children:"POST"}),!((t=Je==null?void 0:Je.currentUser)!=null&&t.uid)&&F(ys,{className:"text-white/40 hover:text-white transition ease-in text-2xl font-bold p-0",to:"/login",children:"LOGIN"}),((n=Je==null?void 0:Je.currentUser)==null?void 0:n.uid)&&F(ys,{className:"text-white/40 hover:text-white transition ease-in text-2xl font-bold p-0",to:"/profile",children:"PROFILE"})]}),F("div",{className:"absolute opacity-10 top-52 rotate-45 scale-x-125 right-24 h-[300px] blur-3xl w-[550px] rounded-full bg-gradient-to-br from-blue-900 via-blue-600 to-gray-500"}),Bn("div",{className:"container mx-auto",children:[Bn("div",{className:"mockup-code bg-gray-900 my-10 mx-2",children:[F("pre",{"data-prefix":"$",children:F("code",{children:"npm i cloudminds@latest"})}),F("pre",{"data-prefix":">",className:"text-warning",children:F("code",{children:"installing..."})}),F("pre",{"data-prefix":">",className:"text-success",children:F("code",{children:"Done!"})})]}),Bn(Nw,{children:[F(Hr,{path:"/",element:F(ZT,{})}),F(Hr,{path:"/login",element:F(tC,{})}),F(Hr,{path:"/new-post",element:F(eC,{})}),F(Hr,{path:"/profile",element:F(nC,{})})]})]})]})})}da.createRoot(document.getElementById("root")).render(F(Uh.StrictMode,{children:F(rC,{})}));
