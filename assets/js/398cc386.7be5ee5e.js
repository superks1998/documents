"use strict";(self.webpackChunkghichu_new=self.webpackChunkghichu_new||[]).push([[3468],{8581:(n,c,s)=>{s.r(c),s.d(c,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>e,metadata:()=>h,toc:()=>o});const h=JSON.parse('{"id":"Javascript/Basic/Async/Async","title":"Synchronous and Asynchronous","description":"- JavaScript l\xe0 m\u1ed9t ng\xf4n ng\u1eef l\u1eadp tr\xecnh \u0111\u01a1n lu\u1ed3ng, ngh\u0129a l\xe0 ch\u1ec9 c\xf3 th\u1ec3 th\u1ef1c hi\u1ec7n m\u1ed9t t\xe1c v\u1ee5 t\u1ea1i m\u1ed9t th\u1eddi \u0111i\u1ec3m.","source":"@site/docs/web/Javascript/Basic/Async/Async.md","sourceDirName":"Javascript/Basic/Async","slug":"/Javascript/Basic/Async/","permalink":"/documents/web/Javascript/Basic/Async/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web/Javascript/Basic/Async/Async.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Array Method","permalink":"/documents/web/Javascript/Basic/Array/array-method"},"next":{"title":"Promises","permalink":"/documents/web/Javascript/Basic/Async/Promise"}}');var t=s(4848),i=s(8453);const e={},l="Synchronous and Asynchronous",r={},o=[{value:"\u0110\u1ed3ng b\u1ed9 (Synchronous)",id:"\u0111\u1ed3ng-b\u1ed9-synchronous",level:3},{value:"V\xed d\u1ee5 v\u1ec1 Synchronous",id:"v\xed-d\u1ee5-v\u1ec1-synchronous",level:4},{value:"B\u1ea5t \u0111\u1ed3ng b\u1ed9 (Asynchronous)",id:"b\u1ea5t-\u0111\u1ed3ng-b\u1ed9-asynchronous",level:3},{value:"V\xed d\u1ee5 v\u1ec1 Asynchronous",id:"v\xed-d\u1ee5-v\u1ec1-asynchronous",level:3},{value:"C\xe1c k\u1ef9 thu\u1eadt x\u1eed l\xfd b\u1ea5t \u0111\u1ed3ng b\u1ed9 trong JavaScript",id:"c\xe1c-k\u1ef9-thu\u1eadt-x\u1eed-l\xfd-b\u1ea5t-\u0111\u1ed3ng-b\u1ed9-trong-javascript",level:3},{value:"1. Callbacks",id:"1-callbacks",level:4},{value:"2. Promises",id:"2-promises",level:4},{value:"3. Async/Await",id:"3-asyncawait",level:4},{value:"So s\xe1nh Synchronous v\xe0 Asynchronous",id:"so-s\xe1nh-synchronous-v\xe0-asynchronous",level:3}];function a(n){const c={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.header,{children:(0,t.jsx)(c.h1,{id:"synchronous-and-asynchronous",children:"Synchronous and Asynchronous"})}),"\n",(0,t.jsx)(c.h1,{id:"\u0111\u1ed3ng-b\u1ed9-synchronous-v\xe0-b\u1ea5t-\u0111\u1ed3ng-b\u1ed9-asynchronous-trong-javascript",children:"\u0110\u1ed3ng b\u1ed9 (Synchronous) v\xe0 B\u1ea5t \u0111\u1ed3ng b\u1ed9 (Asynchronous) trong JavaScript"}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsx)(c.li,{children:"JavaScript l\xe0 m\u1ed9t ng\xf4n ng\u1eef l\u1eadp tr\xecnh \u0111\u01a1n lu\u1ed3ng, ngh\u0129a l\xe0 ch\u1ec9 c\xf3 th\u1ec3 th\u1ef1c hi\u1ec7n m\u1ed9t t\xe1c v\u1ee5 t\u1ea1i m\u1ed9t th\u1eddi \u0111i\u1ec3m."}),"\n",(0,t.jsx)(c.li,{children:"Tuy nhi\xean, \u0111\u1ec3 qu\u1ea3n l\xfd t\u1ed1t c\xe1c t\xe1c v\u1ee5 m\u1ea5t th\u1eddi gian (nh\u01b0 y\xeau c\u1ea7u API, truy v\u1ea5n c\u01a1 s\u1edf d\u1eef li\u1ec7u), JavaScript h\u1ed7 tr\u1ee3 c\xe1c c\u01a1 ch\u1ebf \u0111\u1ed3ng b\u1ed9 (sync) v\xe0 b\u1ea5t \u0111\u1ed3ng b\u1ed9 (async) \u0111\u1ec3 x\u1eed l\xfd c\xe1c c\xf4ng vi\u1ec7c n\xe0y hi\u1ec7u qu\u1ea3 h\u01a1n."}),"\n"]}),"\n",(0,t.jsx)(c.h3,{id:"\u0111\u1ed3ng-b\u1ed9-synchronous",children:"\u0110\u1ed3ng b\u1ed9 (Synchronous)"}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.strong,{children:"Kh\xe1i ni\u1ec7m"}),": Trong JavaScript, c\xe1c thao t\xe1c \u0111\u1ed3ng b\u1ed9 \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n l\u1ea7n l\u01b0\u1ee3t theo th\u1ee9 t\u1ef1. T\u1ee9c l\xe0, m\u1ed9t t\xe1c v\u1ee5 s\u1ebd ph\u1ea3i ho\xe0n th\xe0nh tr\u01b0\u1edbc khi t\xe1c v\u1ee5 ti\u1ebfp theo \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n."]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.strong,{children:"C\xe1ch th\u1ee9c ho\u1ea1t \u0111\u1ed9ng"}),": N\u1ebfu m\u1ed9t t\xe1c v\u1ee5 m\u1ea5t th\u1eddi gian \u0111\u1ec3 ho\xe0n th\xe0nh (nh\u01b0 m\u1ed9t ph\xe9p t\xednh l\u1edbn ho\u1eb7c thao t\xe1c I/O), n\xf3 s\u1ebd ch\u1eb7n lu\u1ed3ng th\u1ef1c thi v\xe0 ng\u0103n c\xe1c t\xe1c v\u1ee5 sau n\xf3 \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n cho \u0111\u1ebfn khi ho\xe0n t\u1ea5t."]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.strong,{children:"\u01afu \u0111i\u1ec3m"}),": D\u1ec5 hi\u1ec3u v\xe0 d\u1ec5 vi\u1ebft do c\xe1c t\xe1c v\u1ee5 th\u1ef1c thi tu\u1ea7n t\u1ef1."]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.strong,{children:"Nh\u01b0\u1ee3c \u0111i\u1ec3m"}),': G\xe2y ra hi\u1ec7n t\u01b0\u1ee3ng "blocking" (t\u1eafc ngh\u1ebdn), khi\u1ebfn \u1ee9ng d\u1ee5ng ch\u1eadm l\u1ea1i n\u1ebfu c\xf3 nhi\u1ec1u t\xe1c v\u1ee5 m\u1ea5t th\u1eddi gian.']}),"\n"]}),"\n",(0,t.jsx)(c.h4,{id:"v\xed-d\u1ee5-v\u1ec1-synchronous",children:"V\xed d\u1ee5 v\u1ec1 Synchronous"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-javascript",children:'    console.log("T\xe1c v\u1ee5 1");\n    console.log("T\xe1c v\u1ee5 2");\n    console.log("T\xe1c v\u1ee5 3");\n'})}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.strong,{children:"Gi\u1ea3i th\xedch"}),":","\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsx)(c.li,{children:'Trong v\xed d\u1ee5 n\xe0y, c\xe1c t\xe1c v\u1ee5 \u0111\u01b0\u1ee3c th\u1ef1c thi l\u1ea7n l\u01b0\u1ee3t: "T\xe1c v\u1ee5 1", sau \u0111\xf3 "T\xe1c v\u1ee5 2", v\xe0 cu\u1ed1i c\xf9ng l\xe0 "T\xe1c v\u1ee5 3".'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(c.h3,{id:"b\u1ea5t-\u0111\u1ed3ng-b\u1ed9-asynchronous",children:"B\u1ea5t \u0111\u1ed3ng b\u1ed9 (Asynchronous)"}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.strong,{children:"Kh\xe1i ni\u1ec7m"}),":","\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsx)(c.li,{children:"V\u1edbi c\u01a1 ch\u1ebf b\u1ea5t \u0111\u1ed3ng b\u1ed9, JavaScript c\xf3 th\u1ec3 th\u1ef1c hi\u1ec7n c\xe1c t\xe1c v\u1ee5 m\xe0 kh\xf4ng c\u1ea7n ch\u1edd t\xe1c v\u1ee5 tr\u01b0\u1edbc ho\xe0n th\xe0nh."}),"\n",(0,t.jsx)(c.li,{children:'Thay v\xec ch\u1eb7n lu\u1ed3ng th\u1ef1c thi, c\xe1c t\xe1c v\u1ee5 m\u1ea5t th\u1eddi gian s\u1ebd \u0111\u01b0\u1ee3c "\u0111\u1eb7t l\u1ecbch" v\xe0 chuy\u1ec3n sang tr\u1ea1ng th\xe1i ch\u1edd.'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.strong,{children:"C\xe1ch th\u1ee9c ho\u1ea1t \u0111\u1ed9ng"}),":","\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsx)(c.li,{children:'Khi m\u1ed9t t\xe1c v\u1ee5 b\u1ea5t \u0111\u1ed3ng b\u1ed9 \u0111\u01b0\u1ee3c g\u1ecdi, JavaScript s\u1ebd \u0111\u1eb7t t\xe1c v\u1ee5 \u0111\xf3 v\xe0o h\xe0ng ch\u1edd, cho ph\xe9p lu\u1ed3ng ch\xednh ti\u1ebfp t\u1ee5c th\u1ef1c hi\u1ec7n c\xe1c t\xe1c v\u1ee5 kh\xe1c. Khi t\xe1c v\u1ee5 b\u1ea5t \u0111\u1ed3ng b\u1ed9 ho\xe0n th\xe0nh, n\xf3 s\u1ebd "\u0111\xe1nh th\u1ee9c" JavaScript \u0111\u1ec3 x\u1eed l\xfd k\u1ebft qu\u1ea3.'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.strong,{children:"\u01afu \u0111i\u1ec3m"}),": Cho ph\xe9p x\u1eed l\xfd nhi\u1ec1u t\xe1c v\u1ee5 song song, kh\xf4ng ch\u1eb7n lu\u1ed3ng ch\xednh, gi\xfap c\u1ea3i thi\u1ec7n hi\u1ec7u su\u1ea5t."]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.strong,{children:"Nh\u01b0\u1ee3c \u0111i\u1ec3m"}),": Ph\u1ee9c t\u1ea1p h\u01a1n \u0111\u1ec3 hi\u1ec3u v\xe0 qu\u1ea3n l\xfd, do kh\xf4ng tu\xe2n theo th\u1ee9 t\u1ef1 th\u1ef1c hi\u1ec7n tu\u1ea7n t\u1ef1."]}),"\n"]}),"\n",(0,t.jsx)(c.h3,{id:"v\xed-d\u1ee5-v\u1ec1-asynchronous",children:"V\xed d\u1ee5 v\u1ec1 Asynchronous"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-javascript",children:'    console.log("T\xe1c v\u1ee5 1");\n\n    setTimeout(() => {\n        console.log("T\xe1c v\u1ee5 2 (sau 2 gi\xe2y)");\n    }, 2000);\n\n    console.log("T\xe1c v\u1ee5 3");\n'})}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.strong,{children:"Gi\u1ea3i th\xedch"}),":","\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsx)(c.li,{children:"Trong v\xed d\u1ee5 n\xe0y, T\xe1c v\u1ee5 1 s\u1ebd \u0111\u01b0\u1ee3c in ra tr\u01b0\u1edbc."}),"\n",(0,t.jsx)(c.li,{children:"Sau \u0111\xf3, T\xe1c v\u1ee5 3 s\u1ebd \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n m\xe0 kh\xf4ng c\u1ea7n ch\u1edd T\xe1c v\u1ee5 2."}),"\n",(0,t.jsx)(c.li,{children:"T\xe1c v\u1ee5 2 ch\u1ec9 \u0111\u01b0\u1ee3c th\u1ef1c thi sau 2 gi\xe2y, nh\u1edd v\xe0o c\u01a1 ch\u1ebf b\u1ea5t \u0111\u1ed3ng b\u1ed9 c\u1ee7a setTimeout."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(c.h3,{id:"c\xe1c-k\u1ef9-thu\u1eadt-x\u1eed-l\xfd-b\u1ea5t-\u0111\u1ed3ng-b\u1ed9-trong-javascript",children:"C\xe1c k\u1ef9 thu\u1eadt x\u1eed l\xfd b\u1ea5t \u0111\u1ed3ng b\u1ed9 trong JavaScript"}),"\n",(0,t.jsx)(c.h4,{id:"1-callbacks",children:"1. Callbacks"}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.strong,{children:"Kh\xe1i ni\u1ec7m"}),": Callbacks l\xe0 c\xe1c h\xe0m \u0111\u01b0\u1ee3c truy\u1ec1n nh\u01b0 tham s\u1ed1 v\xe0o m\u1ed9t h\xe0m kh\xe1c \u0111\u1ec3 th\u1ef1c thi sau khi t\xe1c v\u1ee5 tr\u01b0\u1edbc \u0111\xf3 ho\xe0n t\u1ea5t. \u0110\xe2y l\xe0 c\xe1ch c\u01a1 b\u1ea3n \u0111\u1ec3 x\u1eed l\xfd b\u1ea5t \u0111\u1ed3ng b\u1ed9."]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.strong,{children:"Nh\u01b0\u1ee3c \u0111i\u1ec3m"}),": D\u1ec5 d\u1eabn \u0111\u1ebfn callback hell (c\u1ea5u tr\xfac l\u1ed3ng nhau ph\u1ee9c t\u1ea1p, kh\xf3 \u0111\u1ecdc).","\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-javascript",children:'function greet(callback) {\n    console.log("Hello");\n    callback();\n}\n\ngreet(() => {\n    console.log("Welcome!");\n});\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(c.h4,{id:"2-promises",children:"2. Promises"}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:["\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.strong,{children:"Kh\xe1i ni\u1ec7m"}),": Promise l\xe0 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng \u0111\u1ea1i di\u1ec7n cho m\u1ed9t t\xe1c v\u1ee5 b\u1ea5t \u0111\u1ed3ng b\u1ed9 m\xe0 k\u1ebft qu\u1ea3 c\u1ee7a n\xf3 c\xf3 th\u1ec3 l\xe0 ho\xe0n th\xe0nh (resolved) ho\u1eb7c th\u1ea5t b\u1ea1i (rejected). Promises gi\xfap c\u1ea3i thi\u1ec7n m\xe3 d\u1ec5 \u0111\u1ecdc h\u01a1n so v\u1edbi callbacks."]}),"\n"]}),"\n",(0,t.jsxs)(c.li,{children:["\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.strong,{children:"C\u1ea5u tr\xfac"}),": .then() \u0111\u01b0\u1ee3c g\u1ecdi khi th\xe0nh c\xf4ng, .catch() \u0111\u01b0\u1ee3c g\u1ecdi khi l\u1ed7i."]}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-javascript",children:'let promise = new Promise((resolve, reject) => {\n    setTimeout(() => resolve("K\u1ebft qu\u1ea3 sau 2 gi\xe2y"), 2000);\n});\n\npromise\n    .then(result => console.log(result))\n    .catch(error => console.log(error));\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(c.h4,{id:"3-asyncawait",children:"3. Async/Await"}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:["\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.strong,{children:"Kh\xe1i ni\u1ec7m"}),": async v\xe0 await gi\xfap vi\u1ebft m\xe3 b\u1ea5t \u0111\u1ed3ng b\u1ed9 m\xe0 nh\xecn gi\u1ed1ng nh\u01b0 m\xe3 \u0111\u1ed3ng b\u1ed9. await ch\u1ec9 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong h\xe0m async v\xe0 n\xf3 d\u1eebng th\u1ef1c thi h\xe0m cho \u0111\u1ebfn khi Promise \u0111\u01b0\u1ee3c ho\xe0n th\xe0nh."]}),"\n"]}),"\n",(0,t.jsxs)(c.li,{children:["\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.strong,{children:"\u01afu \u0111i\u1ec3m"}),": D\u1ec5 \u0111\u1ecdc v\xe0 d\u1ec5 qu\u1ea3n l\xfd h\u01a1n so v\u1edbi Promises v\xe0 callbacks."]}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-javascript",children:'async function fetchData() {\n    let result = await new Promise(resolve => setTimeout(() => resolve("K\u1ebft qu\u1ea3 sau 2 gi\xe2y"), 2000));\n    console.log(result);\n}\n\nfetchData();\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(c.h3,{id:"so-s\xe1nh-synchronous-v\xe0-asynchronous",children:"So s\xe1nh Synchronous v\xe0 Asynchronous"}),"\n",(0,t.jsxs)(c.table,{children:[(0,t.jsx)(c.thead,{children:(0,t.jsxs)(c.tr,{children:[(0,t.jsx)(c.th,{children:"\u0110\u1eb7c \u0111i\u1ec3m"}),(0,t.jsx)(c.th,{children:"\u0110\u1ed3ng b\u1ed9 (Synchronous)"}),(0,t.jsx)(c.th,{children:"B\u1ea5t \u0111\u1ed3ng b\u1ed9 (Asynchronous)"})]})}),(0,t.jsxs)(c.tbody,{children:[(0,t.jsxs)(c.tr,{children:[(0,t.jsx)(c.td,{children:(0,t.jsx)(c.code,{children:"C\xe1ch th\u1ef1c thi"})}),(0,t.jsx)(c.td,{children:"Tu\u1ea7n t\u1ef1"}),(0,t.jsx)(c.td,{children:"Kh\xf4ng ch\u1eb7n lu\u1ed3ng, song song"})]}),(0,t.jsxs)(c.tr,{children:[(0,t.jsx)(c.td,{children:(0,t.jsx)(c.code,{children:"\u1ea2nh h\u01b0\u1edfng \u0111\u1ebfn hi\u1ec7u su\u1ea5t"})}),(0,t.jsx)(c.td,{children:"C\xf3 th\u1ec3 g\xe2y t\u1eafc ngh\u1ebdn"}),(0,t.jsx)(c.td,{children:"C\u1ea3i thi\u1ec7n hi\u1ec7u su\u1ea5t"})]}),(0,t.jsxs)(c.tr,{children:[(0,t.jsx)(c.td,{children:(0,t.jsx)(c.code,{children:"\u0110\u1ed9 ph\u1ee9c t\u1ea1p trong qu\u1ea3n l\xfd"})}),(0,t.jsx)(c.td,{children:"\u0110\u01a1n gi\u1ea3n"}),(0,t.jsx)(c.td,{children:"Ph\u1ee9c t\u1ea1p h\u01a1n v\u1edbi callbacks ho\u1eb7c Promises"})]}),(0,t.jsxs)(c.tr,{children:[(0,t.jsx)(c.td,{children:(0,t.jsx)(c.code,{children:"V\xed d\u1ee5"})}),(0,t.jsx)(c.td,{children:(0,t.jsx)(c.code,{children:'console.log("A"); console.log("B");'})}),(0,t.jsx)(c.td,{children:(0,t.jsx)(c.code,{children:'setTimeout(() => console.log("A"), 1000); console.log("B");'})})]})]})]})]})}function d(n={}){const{wrapper:c}={...(0,i.R)(),...n.components};return c?(0,t.jsx)(c,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8453:(n,c,s)=>{s.d(c,{R:()=>e,x:()=>l});var h=s(6540);const t={},i=h.createContext(t);function e(n){const c=h.useContext(i);return h.useMemo((function(){return"function"==typeof n?n(c):{...c,...n}}),[c,n])}function l(n){let c;return c=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:e(n.components),h.createElement(i.Provider,{value:c},n.children)}}}]);