(self.webpackChunkdeveloper_site=self.webpackChunkdeveloper_site||[]).push([[691],{13878:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return g}});var n=r(12265),o=r(67294),a=r(25444),i=r(69931),c=r.n(i),u=r(61083);var l=r(15655);function s(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}var f=r(42656),h=r.n(f),p=r(80874),y=r.n(p);var m=function(t,e){return parseInt(t.getAttribute(e),10)},v=function(){var t=(0,o.useRef)(null);return(0,o.useLayoutEffect)((function(){var e;(e=h().mark((function e(){var r,n,o,a,i,c,u,l,s,f,p,y,v,d,g,w;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.current){e.next=2;break}return e.abrupt("return");case 2:if(r=t.current.querySelector("svg")){e.next=5;break}return e.abrupt("return");case 5:n=m(r,"height"),o=Array.from(r.querySelectorAll("*")),a=0,i=o;case 8:if(!(a<i.length)){e.next=32;break}c=i[a],e.t0=c.tagName,e.next="rect"===e.t0?13:"circle"===e.t0?20:26;break;case 13:return u=m(c,"x"),l=m(c,"y"),s=m(c,"width"),f=!Number.isInteger(l),c.style.transform="scaleY(0)",c.style.transformOrigin=u+s/2+"px "+(f?0:n)+"px",e.abrupt("break",27);case 20:return p=m(c,"cx"),y=m(c,"cy"),v=!Number.isInteger(y),c.style.transform="scale(0)",c.style.transformOrigin=p+"px "+(v?0:y)+"px",e.abrupt("break",27);case 26:c.style.transform="scale(0)";case 27:return e.next=29,new Promise((function(t){return setTimeout(t,200)}));case 29:a++,e.next=8;break;case 32:return e.next=34,new Promise((function(t){return setTimeout(t,200)}));case 34:d=0,g=o;case 35:if(!(d<g.length)){e.next=48;break}w=g[d],e.t1=w.tagName,e.next="rect"===e.t1?40:(e.t1,42);break;case 40:return w.style.transform="scaleY(1)",e.abrupt("break",43);case 42:w.style.transform="scale(1)";case 43:return e.next=45,new Promise((function(t){return setTimeout(t,200)}));case 45:d++,e.next=35;break;case 48:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(t){s(a,n,o,i,c,"next",t)}function c(t){s(a,n,o,i,c,"throw",t)}i(void 0)}))})()}),[t]),o.createElement("div",{ref:t,className:"styles-module--container--MdFXw"},o.createElement(y(),null))},d=function(t){var e=t.children,r=(0,n.Z)(t,["children"]);return o.createElement("div",Object.assign({},r,{className:c()("index-module--effect--AWuXF",r.className)}),e)},g=function(){var t=(0,o.useState)(!1),e=(t[0],t[1]);return(0,o.useEffect)((function(){var t=setTimeout((function(){return e(!0)}),500);return function(){return clearTimeout(t)}}),[]),o.createElement("div",{className:"index-module--container--k7ALA"},o.createElement(u.Z,{title:"Welcome",keywords:["jayant bhawal","frontend","javascript","react","typescript","gatsby"]}),o.createElement("div",{className:"index-module--effect-wrapper--2xIbc"},o.createElement(d,{className:c()("index-module--effect-1--3FPIS","index-module--small--bK2D5")},o.createElement(v,null))),o.createElement("h1",{className:"index-module--h1--vaVG6"},"I'm Jayant Bhawal"),o.createElement("nav",{className:"index-module--navigation--2wkxF"},o.createElement(a.Link,{to:"/about"},"About"),o.createElement(a.Link,{to:"/blog"},"Blog"),o.createElement(l.Z,{to:"https://jayant.tech",noIcon:!0},"Experiments")))}},42656:function(t,e,r){t.exports=r(3076)},3076:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(F){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=C(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?y:h,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",p="executing",y="completed",m={};function v(){}function d(){}function g(){}var w={};w[a]=function(){return this};var x=Object.getPrototypeOf,b=x&&x(x(O([])));b&&b!==r&&n.call(b,a)&&(w=b);var E=g.prototype=v.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return d.prototype=E.constructor=g,g.constructor=d,d.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},k(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(E),u(E,c,"Generator"),E[a]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(r){Function("r","regeneratorRuntime = r")(e)}},80874:function(t,e,r){var n=r(67294);function o(t){return n.createElement("svg",t,[n.createElement("rect",{width:"20",height:"80",fill:"#C4C4C4",key:0}),n.createElement("rect",{x:"40",width:"20",height:"80",fill:"#C4C4C4",key:1}),n.createElement("rect",{x:"80",y:"40",width:"20",height:"40",fill:"#C4C4C4",key:2}),n.createElement("circle",{cx:"90",cy:"26",r:"10",fill:"#C4C4C4",key:3}),n.createElement("rect",{x:"120",width:"20",height:"56",fill:"#C4C4C4",key:4}),n.createElement("circle",{cx:"130",cy:"70",r:"10",fill:"#C4C4C4",key:5})])}o.defaultProps={width:"140",height:"80",viewBox:"0 0 140 80",fill:"none"},t.exports=o,o.default=o}}]);
//# sourceMappingURL=component---src-pages-index-tsx-9f2c71b3913f66107392.js.map