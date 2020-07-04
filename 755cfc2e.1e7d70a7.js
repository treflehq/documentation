(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{154:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(9),o=(t(0),t(173)),i=t(204),c=t(205),l={id:"pagination",title:"Pagination"},s={id:"pagination",isDocsHomePage:!1,title:"Pagination",description:"When you query a collection (ex: /api/v1/plants), you'll notice that you have only 30 items returned.",source:"@site/docs/pagination.md",permalink:"/docs/pagination",editUrl:"https://github.com/treflehq/documentation/edit/master/docs/pagination.md",lastUpdatedBy:"Andr\xe9 Aubin",lastUpdatedAt:1593874781,sidebar:"someSidebar",previous:{title:"Getting started",permalink:"/docs/"},next:{title:"Filtering",permalink:"/docs/filtering"}},u=[],p={rightToc:u};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When you query a collection (ex: ",Object(o.b)("inlineCode",{parentName:"p"},"/api/v1/plants"),"), you'll notice that you have only 30 items returned."),Object(o.b)("p",null,"That's because results are paginated. You have links for the next page in the ",Object(o.b)("inlineCode",{parentName:"p"},"links")," attribute of the JSON response."),Object(o.b)("p",null,"You can specify the page you want with the ",Object(o.b)("inlineCode",{parentName:"p"},"page")," parameter. To query the second page, we have add the ",Object(o.b)("inlineCode",{parentName:"p"},"page")," parameter as follows: ",Object(o.b)("inlineCode",{parentName:"p"},"page=2"),"."),Object(o.b)("p",null,"Let's query the second page of the plants."),Object(o.b)(i.a,{groupId:"supports",defaultValue:"browser",values:[{label:"Browser",value:"browser"},{label:"CURL",value:"curl"},{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"browser",mdxType:"TabItem"},Object(o.b)("p",null,"Open your browser and navigate to"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&page=2"}),Object(o.b)("inlineCode",{parentName:"a"},"https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&page=2")))),Object(o.b)(c.a,{value:"curl",mdxType:"TabItem"},Object(o.b)("p",null,"In your terminal:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl 'https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&page=2'\n"))),Object(o.b)(c.a,{value:"node",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const fetch = require('node-fetch');\n\n(async () => {\n  const response = await fetch('https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&page=2');\n  const json = await response.json();\n  console.log(json);\n})();\n")))),Object(o.b)("p",null,"You now got the second page of the plants."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "data": [\n        {\n            "author": "Schltr.",\n            "bibliography": "Repert. Spec. Nov. Regni Veg. Beih. 8: 38 (1921)",\n            "common_name": null,\n            "family": "Orchidaceae",\n            "family_common_name": null,\n            "genus": "Aa",\n            "genus_id": 14887,\n            "id": 834623,\n            "links": {\n                "genus": "/api/v1/genus/aa",\n                "plant": "/api/v1/plants/aa-riobambae",\n                "self": "/api/v1/species/aa-riobambae"\n            },\n            "plant_id": 423099,\n            "rank": "species",\n            "scientific_name": "Aa riobambae",\n            "slug": "aa-riobambae",\n            "status": "accepted",\n            "synonyms": [\n                "Altensteinia riobambae"\n            ],\n            "year": 1921\n        },\n        {\n            "author": "Ames",\n            "bibliography": "Proc. Biol. Soc. Washington 35: 81 (1922)",\n            "common_name": null,\n            "family": "Orchidaceae",\n            "family_common_name": null,\n            "genus": "Aa",\n            "genus_id": 14887,\n            "id": 834625,\n            "links": {\n                "genus": "/api/v1/genus/aa",\n                "plant": "/api/v1/plants/aa-rosei",\n                "self": "/api/v1/species/aa-rosei"\n            },\n            "plant_id": 423100,\n            "rank": "species",\n            "scientific_name": "Aa rosei",\n            "slug": "aa-rosei",\n            "status": "accepted",\n            "synonyms": [\n                "Altensteinia rosei"\n            ],\n            "year": 1922\n        },  // ... 28 more items\n    ],\n    "links": {\n        "first": "/api/v1/species?page=1",\n        "last": "/api/v1/species?page=20865",\n        "next": "/api/v1/species?page=3",\n        "prev": "/api/v1/species?page=1",\n        "self": "/api/v1/species?page=2"\n    },\n    "meta": {\n        "total": 417293\n    }}\n')))}b.isMDXComponent=!0},173:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,m=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return t?r.a.createElement(m,c(c({ref:n},s),{},{components:t})):r.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},174:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},187:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});n.a=r},188:function(e,n,t){"use strict";var a=t(0),r=t(187);n.a=function(){return Object(a.useContext)(r.a)}},204:function(e,n,t){"use strict";t(25),t(19),t(20);var a=t(0),r=t.n(a),o=t(188),i=t(174),c=t(131),l=t.n(c),s=37,u=39;n.a=function(e){var n=e.block,t=e.children,c=e.defaultValue,p=e.values,b=e.groupId,f=Object(o.a)(),m=f.tabGroupChoices,d=f.setTabGroupChoices,g=Object(a.useState)(c),y=g[0],O=g[1];if(null!=b){var v=m[b];null!=v&&v!==y&&p.some((function(e){return e.value===v}))&&O(v)}var h=function(e){O(e),null!=b&&d(b,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n})},p.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":y===n,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===n}),key:n,ref:function(e){return j.push(e)},onKeyDown:function(e){return function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(j,e.target,e)},onFocus:function(){return h(n)},onClick:function(){return h(n)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((function(e){return e.props.value===y}))[0]))}},205:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}}}]);