"use strict";(self.webpackChunkghichu_new=self.webpackChunkghichu_new||[]).push([[8136],{2624:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var h=e(5893),c=e(1151);const r={},i="This, bind(), call()",o={id:"Advenced/this",title:"This, bind(), call()",description:"Object",source:"@site/docs/Advenced/this.md",sourceDirName:"Advenced",slug:"/Advenced/this",permalink:"/docs/Advenced/this",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Advenced/this.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Value types & Reference types (Tham tr\u1ecb v\xe0 tham chi\u1ebfu)",permalink:"/docs/Advenced/thamchieuthamtri"}},s={},a=[{value:"Object",id:"object",level:2},{value:"Function",id:"function",level:2},{value:"Method bind()",id:"method-bind",level:2},{value:"Ph\u01b0\u01a1ng th\u1ee9c call() v\xe0 apply()",id:"ph\u01b0\u01a1ng-th\u1ee9c-call-v\xe0-apply",level:2}];function l(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...n.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.h1,{id:"this-bind-call",children:"This, bind(), call()"}),"\n",(0,h.jsx)(t.h2,{id:"object",children:"Object"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{children:"- Trong 1 ph\u01b0\u01a1ng th\u1ee9c(method) c\u1ee7a 1 Object VD:\r\nconst iPhone7 = {\r\n    name: 'iPhone7',\r\n    color: 'Pink,\r\n\r\n\r\n    takePhoto() {\r\n        console.log(this)\r\n    } // method\r\n}\r\n- This tham chi\u1ebfu t\u1edbi \u0111\u1ed1i t\u01b0\u1ee3ng truy c\u1eadp ph\u01b0\u01a1ng th\u1ee9c (\u0111\u1ed1i t\u01b0\u1ee3ng tr\u01b0\u1edbc d\u1ea5u .)\r\nVD: iPhone7.takePhoto() // This = iPhone7;\n"})}),"\n",(0,h.jsx)(t.h2,{id:"function",children:"Function"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{children:"- \u0110\u1ee9ng ngo\xe0i ph\u01b0\u01a1ng th\u1ee9c c\u1ee7a Object (VD: trong 1 function). This tham chi\u1ebfu t\u1edbi \u0111\u1ed1i t\u01b0\u1ee3ng global (Windown);\r\n- This trong h\xe0m t\u1ea1o (Constructor function), this trong h\xe0m t\u1ea1o \u0111\u1ea1i di\u1ec7n cho \u0111\u1ed1i t\u01b0\u1ee3ng s\u1ebd t\u1ea1o.\r\n- This trong 1 h\xe0m l\xe0 undefined khi \u1edf strict mode\r\n- M\u1ed7i 1 function \u0111\u1ec1u c\xf3 Context (Ng\u1eef c\u1ea3nh \u0111\u1ec3 ch\u1ea1y h\xe0m) ri\xeang c\u1ee7a n\xf3.\r\n- Ngh\u0129a l\xe0 m\u1ed7i 1 function \u0111\u1ec1u c\xf3 this ri\xeang c\u1ee7a n\xf3.\r\n- Ngo\u1ea1i tr\u1eeb Arrow function kh\xf4ng c\xf3 Context. N\xean n\xf3 s\u1ebd kh\xf4ng c\xf3 this.\r\n- Arrow function s\u1ebd l\u1ea5y this \u1edf ph\u1ea1m vi b\xean ngo\xe0i c\u1ee7a n\xf3 (h\xe0m g\u1ea7n nh\u1ea5t ch\u1ee9a n\xf3)\r\n\n"})}),"\n",(0,h.jsx)(t.h2,{id:"method-bind",children:"Method bind()"}),"\n",(0,h.jsx)(t.p,{children:"S\u1eed d\u1ee5ng khi mong mu\u1ed1n t\u1eeb kh\xf3a this r\u1eb1ng bu\u1ed9c v\u1edbi 1 \u0111\u1ed1i t\u01b0\u1ee3ng n\xe0o \u0111\xf3."}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{children:"- Ph\u01b0\u01a1ng th\u1ee9c bind() cho ph\xe9p r\xe0ng bu\u1ed9c this cho 1 ph\u01b0\u01a1ng th\u1ee9c (function).\r\n- Ph\u01b0\u01a1ng th\u1ee9c bind() s\u1ebd tr\u1ea3 v\u1ec1 1 h\xe0m m\u1edbi v\u1edbi context \u0111\u01b0\u1ee3c bind.\r\n- H\xe0m \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 t\u1eeb bind() v\u1eabn c\xf3 th\u1ec3 nh\u1eadn c\xe1c \u0111\u1ed1i s\u1ed1 c\u1ee7a h\xe0m g\u1ed1c (t\u1eeb \u0111\u1ed1i s\u1ed1 th\u1ee9 2 tr\u1edf \u0111i).\r\n\r\nVD: const $ = document.querySelector.bind(document);\r\n\r\n    $('h1');\r\n    N\u1ebfu kh\xf4ng s\u1eed d\u1ee5ng bind th\xec s\u1ebd b\u1ecb l\u1ed7i v\xec method querySelector s\u1eed d\u1ee5ng t\u1eeb kh\xf3a this\r\n    m\xe0 m\xecnh g\xe1n 1 bi\u1ebfn cho \u0111o\u1ea1n code tr\xean th\xec this s\u1ebd tr\u1ecf v\u1ec1 \u0111\u1ed1i t\u01b0\u1ee3ng window\r\n    ch\u1ee9 kh\xf4ng ph\u1ea3i \u0111\u1ed1i t\u01b0\u1ee3ng document c\xf3 method querySelector;\r\n\n"})}),"\n",(0,h.jsx)(t.h2,{id:"ph\u01b0\u01a1ng-th\u1ee9c-call-v\xe0-apply",children:"Ph\u01b0\u01a1ng th\u1ee9c call() v\xe0 apply()"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{children:'- Kh\xe1c v\u1edbi bind(), ph\u01b0\u01a1ng th\u1ee9c call() v\xe0 apply() \u0111\u1ec3 g\u1ecdi th\u1ef1c thi m\u1ed9t h\xe0m v\u1edbi\r\nm\u1ed9t ng\u1eef c\u1ea3nh ch\u1ec9 \u0111\u1ecbnh th\xf4ng qua tham s\u1ed1 thisArg v\xe0 c\xe1c tham s\u1ed1 \u0111\u1ea7u v\xe0o c\u1ee7a h\xe0m t\u01b0\u01a1ng \u1ee9ng.\r\n- S\u1ef1 kh\xe1c nhau gi\u1eefa ch\xfang l\xe0 call() s\u1ebd nh\u1eadn tham s\u1ed1 h\xe0m qua t\u1eebng bi\u1ebfn \u0111\u1ea7u v\xe0o\r\nri\xeang bi\u1ec7t c\xf2n apply() th\xec l\u1ea1i nh\u1eadn c\xe1c tham s\u1ed1 h\xe0m qua m\u1ed9t m\u1ea3ng ch\u1ee9a c\xe1c bi\u1ebfn \u0111\u1ea7u v\xe0o.\r\n\r\nVD:\r\nvar obj = {\r\n    firstName: "V\xf4",\r\n    lastName : "Danh",\r\n\r\n    mMethod: function(firstName, lastName) {\r\n        var firstName = firstName || this.firstName\r\n        var lastName = lastName || this.lastName\r\n        console.log("Hello " + firstName + " " + lastName)\r\n    }\r\n}\r\n\r\nvar obj1 = {\r\n    firstName: "\xd4ng",\r\n    lastName : "K\xe9"\r\n};\r\n\r\nobj.mMethod() // Hello V\xf4 Danh\r\n\r\nobj.mMethod.call(obj1) // Hello \xd4ng K\xe9\r\n\r\nobj.mMethod.apply(obj1) // Hello \xd4ng K\xe9\r\n\r\nobj.mMethod.call(obj1, "Th\u1ecb", "N\u1edf") // Hello Th\u1ecb N\u1edf\r\n\r\nobj.mMethod.apply(obj1, ["Ch\xed", "Ph\xe8o"]) // Hello Ch\xed Ph\xe8o\n'})})]})}function d(n={}){const{wrapper:t}={...(0,c.a)(),...n.components};return t?(0,h.jsx)(t,{...n,children:(0,h.jsx)(l,{...n})}):l(n)}},1151:(n,t,e)=>{e.d(t,{Z:()=>o,a:()=>i});var h=e(7294);const c={},r=h.createContext(c);function i(n){const t=h.useContext(r);return h.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),h.createElement(r.Provider,{value:t},n.children)}}}]);