"use strict";(self.webpackChunkghichu_new=self.webpackChunkghichu_new||[]).push([[8957],{3812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"Javascript/Advanced/thamchieuthamtri","title":"Value types & Reference types (Tham tr\u1ecb v\xe0 tham chi\u1ebfu)","description":"Ph\xe2n lo\u1ea1i c\xe1c ki\u1ec3u d\u1eef li\u1ec7u","source":"@site/docs/web/Javascript/Advanced/thamchieuthamtri.md","sourceDirName":"Javascript/Advanced","slug":"/Javascript/Advanced/thamchieuthamtri","permalink":"/documents/web/Javascript/Advanced/thamchieuthamtri","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web/Javascript/Advanced/thamchieuthamtri.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Scope - Ph\u1ea1m vi","permalink":"/documents/web/Javascript/Advanced/scope"},"next":{"title":"Closure","permalink":"/documents/web/Javascript/Advanced/Function/Closure"}}');var i=t(4848),c=t(8453);const r={sidebar_position:2},s="Value types & Reference types (Tham tr\u1ecb v\xe0 tham chi\u1ebfu)",h={},l=[{value:"Ph\xe2n lo\u1ea1i c\xe1c ki\u1ec3u d\u1eef li\u1ec7u",id:"ph\xe2n-lo\u1ea1i-c\xe1c-ki\u1ec3u-d\u1eef-li\u1ec7u",level:2},{value:"Value types (Primitive data types: Ki\u1ec3u d\u1eef li\u1ec7u nguy\xean th\u1ee7y(tham tr\u1ecb))",id:"value-types-primitive-data-types-ki\u1ec3u-d\u1eef-li\u1ec7u-nguy\xean-th\u1ee7ytham-tr\u1ecb",level:3},{value:"Reference types (Non-primitive data types: Ki\u1ec3u tham chi\u1ebfu)",id:"reference-types-non-primitive-data-types-ki\u1ec3u-tham-chi\u1ebfu",level:3},{value:"Value types",id:"value-types",level:2},{value:"Reference types",id:"reference-types",level:2},{value:"L\u01b0u \xfd",id:"l\u01b0u-\xfd",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",pre:"pre",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"value-types--reference-types-tham-tr\u1ecb-v\xe0-tham-chi\u1ebfu",children:"Value types & Reference types (Tham tr\u1ecb v\xe0 tham chi\u1ebfu)"})}),"\n",(0,i.jsx)(n.h2,{id:"ph\xe2n-lo\u1ea1i-c\xe1c-ki\u1ec3u-d\u1eef-li\u1ec7u",children:"Ph\xe2n lo\u1ea1i c\xe1c ki\u1ec3u d\u1eef li\u1ec7u"}),"\n",(0,i.jsx)(n.h3,{id:"value-types-primitive-data-types-ki\u1ec3u-d\u1eef-li\u1ec7u-nguy\xean-th\u1ee7ytham-tr\u1ecb",children:"Value types (Primitive data types: Ki\u1ec3u d\u1eef li\u1ec7u nguy\xean th\u1ee7y(tham tr\u1ecb))"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"- String\n- Number\n- Boolean\n- BigInt\n- Symbol\n- undefined\n- null\n"})}),"\n",(0,i.jsx)(n.h3,{id:"reference-types-non-primitive-data-types-ki\u1ec3u-tham-chi\u1ebfu",children:"Reference types (Non-primitive data types: Ki\u1ec3u tham chi\u1ebfu)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"- Object\n- Array\n- Function\n"})}),"\n",(0,i.jsx)(n.h2,{id:"value-types",children:"Value types"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"title='V\xed d\u1ee5'",children:"let a = 1; // T\u1ea1o ra bi\u1ebfn a, c\u1ea5p 1 \xf4 nh\u1edb, l\u01b0u 1 v\xe0o \xf4 nh\u1edb\nlet b = a; // T\u1ea1o 1 bi\u1ebfn b, c\u1ea5p 1 \xf4 nh\u1edb kh\xe1c, sao ch\xe9p gi\xe1 tr\u1ecb c\u1ee7a a(l\xe0 1) v\xe0o \xf4 nh\u1edb m\u1edbi\na = 2; // S\u1eeda gi\xe1 tr\u1ecb trong \xf4 nh\u1edb c\u1ee7a a th\xe0nh 2. \xf4 nh\u1edb c\u1ee7a b v\u1eabn l\xe0 1\nconsole.log(b); // Output: 1\n"})}),"\n",(0,i.jsx)(n.h2,{id:"reference-types",children:"Reference types"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"title='V\xed d\u1ee5'",children:"const a = {\n    name: \"Mercedes\",\n};\n// T\u1ea1o bi\u1ebfn a, c\u1ea5p 1 \xf4 nh\u1edb, l\u01b0u {name: 'Mercedes'} c\u1ee7a a v\xe0o \xf4 nh\u1edb, tr\u1ea3 v\u1ec1 \u0111\u1ecba ch\u1ec9 \xf4 nh\u1edb \u0111\xe3 l\u01b0u\n// Khi truy c\u1eadp v\xe0o bi\u1ebfn a JS s\u1ebd \u0111\u1ecdc \u0111\u1ecba ch\u1ec9 v\xe0 truy xu\u1ea5t v\xe0o \xf4 nh\u1edb \u0111ang l\u01b0u Object \u0111\xf3\n// Bi\u1ebfn a: (\u0110\u1ecba ch\u1ec9: #001, Gi\xe1 tr\u1ecb: #001, \xf4 nh\u1edb {name: 'Mercedes'})\n\nconst b = a;\n// T\u1ea1o bi\u1ebfn b, tr\u1ecf bi\u1ebfn b t\u1edbi c\xf9ng \u0111\u1ecba ch\u1ec9 \xf4 nh\u1edb c\u1ee7a bi\u1ebfn a hay n\xf3i\n// c\xe1ch kh\xe1c l\xe0 n\xf3 g\xe1n \u0111\u1ecba ch\u1ec9 c\u1ee7a bi\u1ebfn a v\xe0o gi\xe1 tr\u1ecb c\u1ee7a bi\u1ebfn b\n// Bi\u1ebfn b: (G\xeda tr\u1ecb: #001)\n\na.name = \"BMW\";\n// S\u1eeda gi\xe1 tr\u1ecb key name trong \xf4 nh\u1edb th\xe0nh 'BMW'\n\nconsole.log(b.name); //Output: 'BMW'\n// V\xec 2 bi\u1ebfn a v\xe0 b c\xf9ng 1 \xf4 nh\u1edb n\xean khi s\u1eeda Object th\xf4ng qua bi\u1ebfn a v\xe0 b l\xe0 nh\u01b0 nhau\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"- M\u1ed7i object m\u1edbi hay array m\u1edbi s\u1ebd l\xe0 1 v\xf9ng nh\u1edb \u0111\u01b0\u1ee3c t\u1ea1o ra.\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"title='V\xed d\u1ee5'",children:'const student = {\n    name: "Oanh Ha",\n    profile: {\n        firstName: "Oanh",\n        lastName: "Ha",\n        introduction: "Girl",\n    },\n};\n// Bi\u1ebfn student (\u0110\u1ecba ch\u1ec9: #001, \xd4 nh\u1edb: {\n//         firstName: "Oanh",\n//         lastName: "Ha",\n//         introduction: "Girl",\n//     },\n// Gi\xe1 tr\u1ecb: #002, \u0110\u1ecba ch\u1ec9: #002, {name: \'Oanh Ha\', profile: #001})\n'})}),"\n",(0,i.jsx)(n.h2,{id:"l\u01b0u-\xfd",children:"L\u01b0u \xfd"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"- Kh\xf4ng n\xean s\u1eeda 1 object l\xe0 tham s\u1ed1 tr\u1ef1c ti\u1ebfp trong 1 function v\xec n\xf3\nc\xf3 th\u1ec3 thay \u0111\u1ed5i \u0111\u1ed1i s\u1ed1 l\xe0 object kh\xe1c \u1edf b\xean ngo\xe0i function. (Side effect).\n- C\xe1ch gi\u1ea3i quy\u1ebft l\xe0 copy object tham s\u1ed1 tr\u01b0\u1edbc khi s\u1eeda ( S\u1eed d\u1ee5ng to\xe1n t\u1eed spread)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"title='So s\xe1nh 2 Object'",children:'const a = {\n    name: "BMW",\n};\nconst b = {\n    name: "BMW",\n};\nconst a = c;\nconsole.log(a === b); // Output: false\n// Kh\xe1c \u0111\u1ecba ch\u1ec9 v\xf9ng nh\u1edb ( 2 Object kh\xe1c nhau)\nconsole.log(a === c); // Output: true\n// C\xf9ng \u0111\u1ecba ch\u1ec9 v\xf9ng nh\u1edb\n'})})]})}function o(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var a=t(6540);const i={},c=a.createContext(i);function r(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);