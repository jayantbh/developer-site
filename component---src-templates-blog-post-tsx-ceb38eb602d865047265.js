(self.webpackChunkdeveloper_site=self.webpackChunkdeveloper_site||[]).push([[7],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},23646:function(e,t,r){var n=r(67228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},69100:function(e,t,r){var n=r(99489),o=r(57067);function l(t,r,c){return o()?(e.exports=l=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=l=function(e,t,r){var o=[null];o.push.apply(o,t);var l=new(Function.bind.apply(e,o));return r&&n(l,r.prototype),l},e.exports.default=e.exports,e.exports.__esModule=!0),l.apply(null,arguments)}e.exports=l,e.exports.default=e.exports,e.exports.__esModule=!0},57067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},46860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(23646),o=r(46860),l=r(60379),c=r(98206);e.exports=function(e){return n(e)||o(e)||l(e)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},60379:function(e,t,r){var n=r(67228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},86425:function(e,t,r){"use strict";var n=r(96156),o=r(67294),l=r(32946);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.children;return o.createElement("p",{style:a(a({},(0,l.bA)(-.2)),{},{display:"block",marginBottom:(0,l.qZ)(1),marginTop:(0,l.qZ)(-1)})},t)}},80487:function(e,t,r){"use strict";r.r(t);var n=r(67294),o=r(25444),l=r(89146),c=r(85749),a=r(56757),i=r(19384),u=r(32946),s=r(86425);t.default=function(e){var t,r=e.data,p=e.pageContext,f=e.location,d=r.mdx,m=r.site.siteMetadata.title,y=null===(t=r.allFile.nodes[0])||void 0===t?void 0:t.publicURL,x=p.previous,b=p.next;return n.createElement(a.Z,{location:f,title:m+" → Blog → Post"},n.createElement(i.Z,{title:d.frontmatter.title,description:d.frontmatter.desc||d.excerpt,image:y,readingTime:d.timeToRead,publishDate:new Date(parseInt(d.frontmatter.timestamp,10)).toISOString()}),n.createElement("h1",null,d.frontmatter.title),n.createElement(s.Z,null,d.frontmatter.date),n.createElement(l.MDXRenderer,null,d.body),n.createElement("hr",{style:{marginTop:(0,u.qZ)(1/4),marginBottom:(0,u.qZ)(1)}}),n.createElement(c.Z,null),n.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.createElement("li",null,x&&n.createElement(o.Link,{to:"/blog"+x.fields.slug,rel:"prev"},"← ",x.frontmatter.title)),n.createElement("li",null,b&&n.createElement(o.Link,{to:"/blog"+b.fields.slug,rel:"next"},b.frontmatter.title," →"))))}},89146:function(e,t,r){var n=r(84477);e.exports={MDXRenderer:n}},84477:function(e,t,r){var n=r(69100),o=r(319),l=r(59713),c=r(37316);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(67294),s=r(63497).mdx,p=r(12985).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,l=c(e,["scope","children"]),a=p(t),f=u.useMemo((function(){if(!r)return null;var e=i({React:u,mdx:s},a),t=Object.keys(e),l=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(l)))}),[r,t]);return u.createElement(f,i({},l))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-ceb38eb602d865047265.js.map