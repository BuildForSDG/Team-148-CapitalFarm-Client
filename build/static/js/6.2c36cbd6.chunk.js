/*! For license information please see 6.2c36cbd6.chunk.js.LICENSE.txt */
(this["webpackJsonpcapital-farm-client"]=this["webpackJsonpcapital-farm-client"]||[]).push([[6],{117:function(e,t,n){"use strict";var r=n(7),o=n(10),a=n(0),s=n.n(a),i=n(9),c=n.n(i),u=n(53),l=n.n(u),d=n(54),f={tag:d.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var t=e.className,n=e.cssModule,a=e.color,i=e.body,c=e.inverse,u=e.outline,f=e.tag,p=e.innerRef,m=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.mapToCssModules)(l()(t,"card",!!c&&"text-white",!!i&&"card-body",!!a&&(u?"border":"bg")+"-"+a),n);return s.a.createElement(f,Object(r.a)({},m,{className:b,ref:p}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},118:function(e,t,n){"use strict";var r=n(7),o=n(10),a=n(0),s=n.n(a),i=n(9),c=n.n(i),u=n(53),l=n.n(u),d=n(54),f={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var t=e.className,n=e.cssModule,a=e.innerRef,i=e.tag,c=Object(o.a)(e,["className","cssModule","innerRef","tag"]),u=Object(d.mapToCssModules)(l()(t,"card-body"),n);return s.a.createElement(i,Object(r.a)({},c,{className:u,ref:a}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},432:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(19),s=(n(8),n(17)),i=n(96),c=n(82),u=n(83),l=n(117),d=n(118),f=n(85),p=n.n(f);class m extends r.Component{constructor(e){super(e),this._isMounted=!1,this.renderRedirectToRoot=()=>{},this.state={}}componentDidMount(){this._isMounted=!0,document.body.classList.add("authentication-bg")}componentWillUnmount(){this._isMounted=!1,document.body.classList.remove("authentication-bg")}render(){return o.a.createElement(o.a.Fragment,null,this.renderRedirectToRoot(),(this._isMounted,o.a.createElement("div",{className:"account-pages my-5"},o.a.createElement(i.a,null,o.a.createElement(c.a,{className:"justify-content-center"},o.a.createElement(u.a,{md:8,lg:6,xl:5},o.a.createElement(l.a,{className:"text-center"},o.a.createElement(d.a,{className:"p-4"},o.a.createElement("div",{className:"mx-auto mb-5"},o.a.createElement("a",{href:"/"},o.a.createElement("img",{src:p.a,alt:"",height:"119"}))),o.a.createElement("h6",{className:"h5 mb-0 mt-4"},"Confirm your email"),o.a.createElement("p",{className:"text-muted mt-3 mb-3"},"Your account has been successfully registered. To complete the verification process, please check your email for a validation request."))))),o.a.createElement(c.a,{className:"mt-3"},o.a.createElement(u.a,{className:"text-center"},o.a.createElement("p",{className:"text-muted"},"Return to"," ",o.a.createElement(s.b,{to:"/account/login",className:"text-primary font-weight-bold ml-1"},"Login"))))))))}}t.default=Object(a.b)()(m)},53:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var s=o.apply(null,r);s&&e.push(s)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},54:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return s})),n.d(t,"setScrollbarWidth",(function(){return i})),n.d(t,"isBodyOverflowing",(function(){return c})),n.d(t,"getOriginalBodyPadding",(function(){return u})),n.d(t,"conditionallyUpdateScrollbar",(function(){return l})),n.d(t,"setGlobalCssModule",(function(){return d})),n.d(t,"mapToCssModules",(function(){return f})),n.d(t,"omit",(function(){return p})),n.d(t,"pick",(function(){return m})),n.d(t,"warnOnce",(function(){return y})),n.d(t,"deprecated",(function(){return g})),n.d(t,"DOMElement",(function(){return v})),n.d(t,"targetPropType",(function(){return E})),n.d(t,"tagPropType",(function(){return O})),n.d(t,"TransitionTimeouts",(function(){return T})),n.d(t,"TransitionPropTypeKeys",(function(){return j})),n.d(t,"TransitionStatuses",(function(){return N})),n.d(t,"keyCodes",(function(){return w})),n.d(t,"PopperPlacements",(function(){return x})),n.d(t,"canUseDOM",(function(){return M})),n.d(t,"isReactRefObj",(function(){return P})),n.d(t,"toNumber",(function(){return R})),n.d(t,"isObject",(function(){return C})),n.d(t,"isFunction",(function(){return S})),n.d(t,"findDOMElements",(function(){return k})),n.d(t,"isArrayOrNodeList",(function(){return D})),n.d(t,"getTarget",(function(){return I})),n.d(t,"defaultToggleEvents",(function(){return L})),n.d(t,"addMultipleEventListeners",(function(){return $})),n.d(t,"focusableElements",(function(){return G}));var r,o=n(9),a=n.n(o);function s(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function i(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function u(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function l(){var e=s(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;c()&&i(n+e)}function d(e){r=e}function f(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function p(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function m(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,a={};o>0;)a[n=r[o-=1]]=e[n];return a}var b={};function y(e){b[e]||("undefined"!==typeof console&&console.error(e),b[e]=!0)}function g(e,t){return function(n,r,o){null!==n[r]&&"undefined"!==typeof n[r]&&y('"'+r+'" property of "'+o+'" has been deprecated.\n'+t);for(var a=arguments.length,s=new Array(a>3?a-3:0),i=3;i<a;i++)s[i-3]=arguments[i];return e.apply(void 0,[n,r,o].concat(s))}}var h="object"===typeof window&&window.Element||function(){};function v(e,t,n){if(!(e[t]instanceof h))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var E=a.a.oneOfType([a.a.string,a.a.func,v,a.a.shape({current:a.a.any})]),O=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),T={Fade:150,Collapse:350,Modal:300,Carousel:600},j=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],N={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},w={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},x=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],M=!("undefined"===typeof window||!window.document||!window.document.createElement);function P(e){return!(!e||"object"!==typeof e)&&"current"in e}function A(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function R(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===A(e))return NaN;if(C(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=C(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(e);return r||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function C(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function S(e){if(!C(e))return!1;var t=A(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function k(e){if(P(e))return e.current;if(S(e))return e();if("string"===typeof e&&M){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function D(e){return null!==e&&(Array.isArray(e)||M&&"number"===typeof e.length)}function I(e,t){var n=k(e);return t?D(n)?n:null===n?[]:[n]:D(n)?n[0]:n}var L=["touchstart","click"];function $(e,t,n,r){var o=e;D(o)||(o=[o]);var a=n;if("string"===typeof a&&(a=a.split(/\s+/)),!D(o)||"function"!==typeof t||!Array.isArray(a))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(o,(function(n){n.addEventListener(e,t,r)}))})),function(){Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(o,(function(n){n.removeEventListener(e,t,r)}))}))}}var G=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},82:function(e,t,n){"use strict";var r=n(7),o=n(10),a=n(0),s=n.n(a),i=n(9),c=n.n(i),u=n(53),l=n.n(u),d=n(54),f=c.a.oneOfType([c.a.number,c.a.string]),p={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},m={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,i=e.tag,c=e.form,u=e.widths,f=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];u.forEach((function(t,n){var r=e[t];if(delete f[t],r){var o=!n;p.push(o?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var m=Object(d.mapToCssModules)(l()(t,a?"no-gutters":null,c?"form-row":"row",p),n);return s.a.createElement(i,Object(r.a)({},f,{className:m}))};b.propTypes=p,b.defaultProps=m,t.a=b},83:function(e,t,n){"use strict";var r=n(7),o=n(10),a=n(0),s=n.n(a),i=n(9),c=n.n(i),u=n(53),l=n.n(u),d=n(54),f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),m={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,a=e.widths,i=e.tag,c=Object(o.a)(e,["className","cssModule","widths","tag"]),u=[];a.forEach((function(t,r){var o=e[t];if(delete c[t],o||""===o){var a=!r;if(Object(d.isObject)(o)){var s,i=a?"-":"-"+t+"-",f=y(a,t,o.size);u.push(Object(d.mapToCssModules)(l()(((s={})[f]=o.size||""===o.size,s["order"+i+o.order]=o.order||0===o.order,s["offset"+i+o.offset]=o.offset||0===o.offset,s)),n))}else{var p=y(a,t,o);u.push(p)}}})),u.length||u.push("col");var f=Object(d.mapToCssModules)(l()(t,u),n);return s.a.createElement(i,Object(r.a)({},c,{className:f}))};g.propTypes=m,g.defaultProps=b,t.a=g},85:function(e,t,n){e.exports=n.p+"static/media/logo.507b7d2c.png"},96:function(e,t,n){"use strict";var r=n(7),o=n(10),a=n(0),s=n.n(a),i=n(9),c=n.n(i),u=n(53),l=n.n(u),d=n(54),f={tag:d.tagPropType,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,n=e.cssModule,a=e.fluid,i=e.tag,c=Object(o.a)(e,["className","cssModule","fluid","tag"]),u="container";!0===a?u="container-fluid":a&&(u="container-"+a);var f=Object(d.mapToCssModules)(l()(t,u),n);return s.a.createElement(i,Object(r.a)({},c,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=6.2c36cbd6.chunk.js.map