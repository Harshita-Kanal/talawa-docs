(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(148)),i={id:"data-management-overview",title:"Overview"},c={unversionedId:"features/data-management/data-management-overview",id:"features/data-management/data-management-overview",isDocsHomePage:!1,title:"Overview",description:"This section is a work in progress.",source:"@site/docs/features/data-management/overview.md",slug:"/features/data-management/data-management-overview",permalink:"/talawa-docs/docs/features/data-management/data-management-overview",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/features/data-management/overview.md",version:"current",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/talawa-docs/docs/features/notifications/notifications-overview"},next:{title:"Data Compression",permalink:"/talawa-docs/docs/features/data-management/data-management-compression"}},s=[{value:"Overall Guidance",id:"overall-guidance",children:[]}],d={toc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This section is a work in progress."))),Object(o.b)("h2",{id:"overall-guidance"},"Overall Guidance"),Object(o.b)("p",null,"These relate to how data is managed by the app. "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Each organisation should create a new database."),Object(o.b)("li",{parentName:"ol"},"The ability should exist from the admin portal to specify",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"The duration that objects and data are retained in the database"),Object(o.b)("li",{parentName:"ol"},"The type of data or objects to be retained/ purged based on the age criteria"),Object(o.b)("li",{parentName:"ol"},"Limit the size and duration of audio/ video files uploaded to the newsfeed"))),Object(o.b)("li",{parentName:"ol"},"There should be a preset encoding algorithm for audio and video")))}l.isMDXComponent=!0},148:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,b=m["".concat(i,".").concat(u)]||m[u]||p[u]||o;return a?r.a.createElement(b,c(c({ref:t},d),{},{components:a})):r.a.createElement(b,c({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);