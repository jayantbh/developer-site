(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{703:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(3),r(7),r(719),r(10);var n=r(1),a=r.n(n),o=r(118),i=r(141),c=r.n(i),u=r(692),s=r(701),l=r.n(s),f=r(75),h=r(720),p=r.n(h),m=(r(91),r(721),r(82),r(44),r(203),r(713),r(723)),y=r.n(m),v=r(702),g=r.n(v);function d(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,a)}var w=function(t,e){return parseInt(t.getAttribute(e),10)},x=function(){var t=Object(n.useRef)(null);return Object(n.useLayoutEffect)(function(){var e;(e=p.a.mark(function e(){var r,n,a,o,i,c,u,s,l,f,h,m,y,v,g,d;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.current){e.next=2;break}return e.abrupt("return");case 2:if(r=t.current.querySelector("svg")){e.next=5;break}return e.abrupt("return");case 5:n=w(r,"height"),a=Array.from(r.querySelectorAll("*")),o=0,i=a;case 8:if(!(o<i.length)){e.next=32;break}c=i[o],e.t0=c.tagName,e.next="rect"===e.t0?13:"circle"===e.t0?20:26;break;case 13:return u=w(c,"x"),s=w(c,"y"),l=w(c,"width"),f=!Number.isInteger(s),c.style.transform="scaleY(0)",c.style.transformOrigin=u+l/2+"px "+(f?0:n)+"px",e.abrupt("break",27);case 20:return h=w(c,"cx"),m=w(c,"cy"),y=!Number.isInteger(m),c.style.transform="scale(0)",c.style.transformOrigin=h+"px "+(y?0:m)+"px",e.abrupt("break",27);case 26:c.style.transform="scale(0)";case 27:return e.next=29,new Promise(function(t){return setTimeout(t,200)});case 29:o++,e.next=8;break;case 32:return e.next=34,new Promise(function(t){return setTimeout(t,200)});case 34:v=0,g=a;case 35:if(!(v<g.length)){e.next=48;break}d=g[v],e.t1=d.tagName,e.next="rect"===e.t1?40:(e.t1,42);break;case 40:return d.style.transform="scaleY(1)",e.abrupt("break",43);case 42:d.style.transform="scale(1)";case 43:return e.next=45,new Promise(function(t){return setTimeout(t,200)});case 45:v++,e.next=35;break;case 48:case"end":return e.stop()}},e)}),function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(t){d(o,n,a,i,c,"next",t)}function c(t){d(o,n,a,i,c,"throw",t)}i(void 0)})})()},[t]),a.a.createElement("div",{ref:t,className:g.a.container},a.a.createElement(y.a,null))};var b=function(t){var e=t.children,r=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,["children"]);return a.a.createElement("div",Object.assign({},r,{className:c()(l.a.effect,r.className)}),e)},E=[function(t){var e=t.triggered;return a.a.createElement(b,{className:c()(l.a["effect-1"],e&&l.a["triggered-effect-1"])},"Hi!")},function(t){var e=t.triggered;return a.a.createElement(b,{className:c()(l.a["effect-2"],l.a.small,e&&l.a["triggered-effect-2"])},a.a.createElement("div",null,"Hi!"))},function(t){var e=t.triggered;return a.a.createElement(b,{className:c()(l.a["effect-3"],l.a.small,e&&l.a["triggered-effect-3"])},a.a.createElement(x,null))}],k=function(){return Math.floor(Math.random()*E.length)};e.default=function(){var t=Object(n.useState)(!1),e=t[0],r=t[1],i=Object(n.useState)(k()),c=i[0],s=i[1];Object(n.useEffect)(function(){var t=setTimeout(function(){return r(!0)},500);return function(){return clearTimeout(t)}},[]);var h=Object(n.useMemo)(function(){return E[c]},[c]);return a.a.createElement("div",{className:l.a.container},a.a.createElement(u.a,{title:"Welcome",keywords:["jayant bhawal","frontend","javascript","react","typescript","gatsby"]}),a.a.createElement("div",{className:l.a["effect-wrapper"],onClick:function(){return s(k())}},a.a.createElement(h,{triggered:e})),a.a.createElement("h1",{className:l.a.h1},"I'm Jayant Bhawal"),a.a.createElement("nav",{className:l.a.navigation},a.a.createElement(o.a,{to:"/about"},"About"),a.a.createElement(o.a,{to:"/blog"},"Blog"),a.a.createElement(f.a,{to:"https://jayant.dev",noIcon:!0},"Experiments")))}},705:function(t,e,r){var n=r(6),a=r(18),o=r(56),i=/"/g,c=function(t,e,r,n){var a=String(o(t)),c="<"+e;return""!==r&&(c+=" "+r+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+a+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(c),n(n.P+n.F*a(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",r)}},713:function(t,e,r){r(5),r(4),r(26),r(28),r(82),r(3),r(81),r(21),r(16),r(36),r(39),r(9);var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r,n){var a=e&&e.prototype instanceof y?e:y,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(t,e,r){var n=l;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:f,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",m={};function y(){}function v(){}function g(){}var d={};d[o]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(C([])));x&&x!==r&&n.call(x,o)&&(d=x);var b=g.prototype=y.prototype=Object.create(d);function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(r,a){function o(){return new Promise(function(e,o){!function e(r,a,o,i){var c=s(t[r],t,a);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(l).then(function(t){u.value=t,o(u)},function(t){return e("throw",t,o,i)})}i(c.arg)}(r,a,e,o)})}return e=e?e.then(o,o):o()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=s(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function C(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:_}}function _(){return{value:e,done:!0}}return v.prototype=b.constructor=g,g.constructor=v,g[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,a){var o=new k(u(e,r,n,a));return t.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(b),b[c]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},719:function(t,e,r){"use strict";r(705)("small",function(t){return function(){return t(this,"small","","")}})},720:function(t,e,r){t.exports=r(713)},721:function(t,e,r){var n=r(6);n(n.S,"Number",{isInteger:r(722)})},722:function(t,e,r){var n=r(19),a=Math.floor;t.exports=function(t){return!n(t)&&isFinite(t)&&a(t)===t}},723:function(t,e,r){var n=r(1);function a(t){return n.createElement("svg",t,[n.createElement("rect",{width:"20",height:"80",fill:"#C4C4C4",key:0}),n.createElement("rect",{x:"40",width:"20",height:"80",fill:"#C4C4C4",key:1}),n.createElement("rect",{x:"80",y:"40",width:"20",height:"40",fill:"#C4C4C4",key:2}),n.createElement("circle",{cx:"90",cy:"26",r:"10",fill:"#C4C4C4",key:3}),n.createElement("rect",{x:"120",width:"20",height:"56",fill:"#C4C4C4",key:4}),n.createElement("circle",{cx:"130",cy:"70",r:"10",fill:"#C4C4C4",key:5})])}a.defaultProps={width:"140",height:"80",viewBox:"0 0 140 80",fill:"none"},t.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-pages-index-tsx-bce4d73db95679907fab.js.map