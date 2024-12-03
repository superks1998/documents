"use strict";(self.webpackChunkghichu_new=self.webpackChunkghichu_new||[]).push([[6412],{4945:(n,i,h)=>{h.r(i),h.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>e,toc:()=>a});const e=JSON.parse('{"id":"Javascript/Advanced/Data-State/thamtri","title":"Tham tr\u1ecb","description":"Tham tr\u1ecb trong JavaScript","source":"@site/docs/web/Javascript/Advanced/Data-State/thamtri.md","sourceDirName":"Javascript/Advanced/Data-State","slug":"/Javascript/Advanced/Data-State/thamtri","permalink":"/documents/web/Javascript/Advanced/Data-State/thamtri","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web/Javascript/Advanced/Data-State/thamtri.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Tham chi\u1ebfu","permalink":"/documents/web/Javascript/Advanced/Data-State/thamchieu"},"next":{"title":"Closure (H\xe0m bao \u0111\xf3ng)","permalink":"/documents/web/Javascript/Advanced/closure"}}');var t=h(4848),c=h(8453);const r={},l="Tham tr\u1ecb",s={},a=[{value:"Tham tr\u1ecb trong JavaScript",id:"tham-tr\u1ecb-trong-javascript",level:2},{value:"<strong>Kh\xe1i ni\u1ec7m Tham tr\u1ecb</strong>",id:"kh\xe1i-ni\u1ec7m-tham-tr\u1ecb",level:3},{value:"<strong>C\xe1ch ho\u1ea1t \u0111\u1ed9ng c\u1ee7a Tham tr\u1ecb</strong>",id:"c\xe1ch-ho\u1ea1t-\u0111\u1ed9ng-c\u1ee7a-tham-tr\u1ecb",level:3},{value:"<strong>1. G\xe1n gi\xe1 tr\u1ecb gi\u1eefa c\xe1c bi\u1ebfn</strong>",id:"1-g\xe1n-gi\xe1-tr\u1ecb-gi\u1eefa-c\xe1c-bi\u1ebfn",level:4},{value:"<strong>2. Truy\u1ec1n gi\xe1 tr\u1ecb v\xe0o h\xe0m</strong>",id:"2-truy\u1ec1n-gi\xe1-tr\u1ecb-v\xe0o-h\xe0m",level:4},{value:"<strong>So s\xe1nh gi\u1eefa Tham tr\u1ecb v\xe0 Tham chi\u1ebfu</strong>",id:"so-s\xe1nh-gi\u1eefa-tham-tr\u1ecb-v\xe0-tham-chi\u1ebfu",level:3},{value:"<strong>Minh h\u1ecda tr\u1ef1c quan</strong>",id:"minh-h\u1ecda-tr\u1ef1c-quan",level:3},{value:"1. V\u1edbi ki\u1ec3u nguy\xean th\u1ee7y:",id:"1-v\u1edbi-ki\u1ec3u-nguy\xean-th\u1ee7y",level:4},{value:"2. Trong h\xe0m:",id:"2-trong-h\xe0m",level:4},{value:"L\u01b0u \xfd khi l\xe0m vi\u1ec7c v\u1edbi Tham tr\u1ecb",id:"l\u01b0u-\xfd-khi-l\xe0m-vi\u1ec7c-v\u1edbi-tham-tr\u1ecb",level:3},{value:"Kh\xf4ng c\xf3 t\xe1c \u0111\u1ed9ng hai chi\u1ec1u:",id:"kh\xf4ng-c\xf3-t\xe1c-\u0111\u1ed9ng-hai-chi\u1ec1u",level:4},{value:"T\xf3m t\u1eaft",id:"t\xf3m-t\u1eaft",level:3},{value:"V\xed d\u1ee5 th\u1ef1c t\u1ebf",id:"v\xed-d\u1ee5-th\u1ef1c-t\u1ebf",level:3},{value:"So s\xe1nh ki\u1ec3u nguy\xean th\u1ee7y v\u1edbi ki\u1ec3u ph\u1ee9c t\u1ea1p:",id:"so-s\xe1nh-ki\u1ec3u-nguy\xean-th\u1ee7y-v\u1edbi-ki\u1ec3u-ph\u1ee9c-t\u1ea1p",level:4}];function d(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"tham-tr\u1ecb",children:"Tham tr\u1ecb"})}),"\n",(0,t.jsx)(i.h2,{id:"tham-tr\u1ecb-trong-javascript",children:"Tham tr\u1ecb trong JavaScript"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Tham tr\u1ecb (Pass by Value) l\xe0 m\u1ed9t kh\xe1i ni\u1ec7m quan tr\u1ecdng trong JavaScript khi l\xe0m vi\u1ec7c v\u1edbi c\xe1c ki\u1ec3u d\u1eef li\u1ec7u nguy\xean th\u1ee7y."}),"\n",(0,t.jsx)(i.li,{children:"N\xf3 gi\u1ea3i th\xedch c\xe1ch gi\xe1 tr\u1ecb \u0111\u01b0\u1ee3c truy\u1ec1n v\xe0 s\u1eed d\u1ee5ng trong c\xe1c bi\u1ebfn ho\u1eb7c h\xe0m."}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"kh\xe1i-ni\u1ec7m-tham-tr\u1ecb",children:(0,t.jsx)(i.strong,{children:"Kh\xe1i ni\u1ec7m Tham tr\u1ecb"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Khi m\u1ed9t bi\u1ebfn \u0111\u01b0\u1ee3c g\xe1n gi\xe1 tr\u1ecb ho\u1eb7c truy\u1ec1n v\xe0o m\u1ed9t h\xe0m, m\u1ed9t ",(0,t.jsx)(i.strong,{children:"b\u1ea3n sao"})," c\u1ee7a gi\xe1 tr\u1ecb \u0111\xf3 \u0111\u01b0\u1ee3c t\u1ea1o."]}),"\n",(0,t.jsxs)(i.li,{children:["S\u1ef1 thay \u0111\u1ed5i c\u1ee7a b\u1ea3n sao s\u1ebd ",(0,t.jsx)(i.strong,{children:"kh\xf4ng \u1ea3nh h\u01b0\u1edfng"})," \u0111\u1ebfn gi\xe1 tr\u1ecb ban \u0111\u1ea7u."]}),"\n",(0,t.jsxs)(i.li,{children:["Tham tr\u1ecb \xe1p d\u1ee5ng cho c\xe1c ki\u1ec3u d\u1eef li\u1ec7u nguy\xean th\u1ee7y (",(0,t.jsx)(i.strong,{children:"Primitive Types"}),") bao g\u1ed3m:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"number"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"string"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"boolean"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"null"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"undefined"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"symbol"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"bigint"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"c\xe1ch-ho\u1ea1t-\u0111\u1ed9ng-c\u1ee7a-tham-tr\u1ecb",children:(0,t.jsx)(i.strong,{children:"C\xe1ch ho\u1ea1t \u0111\u1ed9ng c\u1ee7a Tham tr\u1ecb"})}),"\n",(0,t.jsx)(i.h4,{id:"1-g\xe1n-gi\xe1-tr\u1ecb-gi\u1eefa-c\xe1c-bi\u1ebfn",children:(0,t.jsx)(i.strong,{children:"1. G\xe1n gi\xe1 tr\u1ecb gi\u1eefa c\xe1c bi\u1ebfn"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Khi m\u1ed9t bi\u1ebfn \u0111\u01b0\u1ee3c g\xe1n gi\xe1 tr\u1ecb ki\u1ec3u nguy\xean th\u1ee7y cho m\u1ed9t bi\u1ebfn kh\xe1c, m\u1ed9t b\u1ea3n sao c\u1ee7a gi\xe1 tr\u1ecb \u0111\u01b0\u1ee3c sao ch\xe9p."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"V\xed d\u1ee5:"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"let a = 10;\nlet b = a; // Sao ch\xe9p gi\xe1 tr\u1ecb c\u1ee7a a v\xe0o b\n\nb = 20;    // Thay \u0111\u1ed5i b kh\xf4ng \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn a\n\nconsole.log(a); // 10\nconsole.log(b); // 20\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"2-truy\u1ec1n-gi\xe1-tr\u1ecb-v\xe0o-h\xe0m",children:(0,t.jsx)(i.strong,{children:"2. Truy\u1ec1n gi\xe1 tr\u1ecb v\xe0o h\xe0m"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Khi truy\u1ec1n m\u1ed9t bi\u1ebfn ki\u1ec3u nguy\xean th\u1ee7y v\xe0o m\u1ed9t h\xe0m, ch\u1ec9 c\xf3 gi\xe1 tr\u1ecb c\u1ee7a bi\u1ebfn \u0111\xf3 \u0111\u01b0\u1ee3c sao ch\xe9p v\xe0 truy\u1ec1n \u0111i."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"V\xed d\u1ee5:"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"function updateValue(x) {\nx = 100; // Thay \u0111\u1ed5i x trong h\xe0m\n}\n\nlet y = 50;\nupdateValue(y); // Truy\u1ec1n gi\xe1 tr\u1ecb c\u1ee7a y v\xe0o h\xe0m\n\nconsole.log(y); // 50 (Kh\xf4ng b\u1ecb \u1ea3nh h\u01b0\u1edfng)\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"so-s\xe1nh-gi\u1eefa-tham-tr\u1ecb-v\xe0-tham-chi\u1ebfu",children:(0,t.jsx)(i.strong,{children:"So s\xe1nh gi\u1eefa Tham tr\u1ecb v\xe0 Tham chi\u1ebfu"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"So s\xe1nh gi\u1eefa Tham tr\u1ecb v\xe0 Tham chi\u1ebfu"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u0110\u1eb7c \u0111i\u1ec3m"}),(0,t.jsx)(i.th,{children:"Tham tr\u1ecb (Pass by Value)"}),(0,t.jsx)(i.th,{children:"Tham chi\u1ebfu (Pass by Reference)"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Ki\u1ec3u d\u1eef li\u1ec7u \xe1p d\u1ee5ng"})}),(0,t.jsx)(i.td,{children:"Ki\u1ec3u nguy\xean th\u1ee7y"}),(0,t.jsxs)(i.td,{children:["Ki\u1ec3u ph\u1ee9c t\u1ea1p (",(0,t.jsx)(i.code,{children:"object"}),", ",(0,t.jsx)(i.code,{children:"array"}),", ",(0,t.jsx)(i.code,{children:"function"}),")"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Ph\u1ee9c t\u1ea1p"})}),(0,t.jsx)(i.td,{children:"Sao ch\xe9p gi\xe1 tr\u1ecb"}),(0,t.jsx)(i.td,{children:"Sao ch\xe9p tham chi\u1ebfu"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Thay \u0111\u1ed5i gi\xe1 tr\u1ecb"})}),(0,t.jsx)(i.td,{children:"Kh\xf4ng \u1ea3nh h\u01b0\u1edfng bi\u1ebfn g\u1ed1c"}),(0,t.jsx)(i.td,{children:"\u1ea2nh h\u01b0\u1edfng bi\u1ebfn g\u1ed1c"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"V\xed d\u1ee5"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"number"}),", ",(0,t.jsx)(i.code,{children:"string"}),", ",(0,t.jsx)(i.code,{children:"boolean"}),", etc."]}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"object"}),", ",(0,t.jsx)(i.code,{children:"array"}),", ",(0,t.jsx)(i.code,{children:"function"})]})]})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"minh-h\u1ecda-tr\u1ef1c-quan",children:(0,t.jsx)(i.strong,{children:"Minh h\u1ecda tr\u1ef1c quan"})}),"\n",(0,t.jsx)(i.h4,{id:"1-v\u1edbi-ki\u1ec3u-nguy\xean-th\u1ee7y",children:"1. V\u1edbi ki\u1ec3u nguy\xean th\u1ee7y:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Khi g\xe1n gi\xe1 tr\u1ecb ho\u1eb7c truy\u1ec1n v\xe0o h\xe0m:"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"let x = 5;\nlet y = x; // Sao ch\xe9p gi\xe1 tr\u1ecb\n\ny = 10;\n\nconsole.log(x); // 5 (Kh\xf4ng thay \u0111\u1ed5i)\nconsole.log(y); // 10\n"})}),"\n",(0,t.jsx)(i.h4,{id:"2-trong-h\xe0m",children:"2. Trong h\xe0m:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"function increment(num) {\nnum += 1;\n}\n\nlet value = 7;\nincrement(value);\n\nconsole.log(value); // 7 (Gi\xe1 tr\u1ecb g\u1ed1c kh\xf4ng b\u1ecb \u1ea3nh h\u01b0\u1edfng)\n"})}),"\n",(0,t.jsx)(i.h3,{id:"l\u01b0u-\xfd-khi-l\xe0m-vi\u1ec7c-v\u1edbi-tham-tr\u1ecb",children:"L\u01b0u \xfd khi l\xe0m vi\u1ec7c v\u1edbi Tham tr\u1ecb"}),"\n",(0,t.jsx)(i.h4,{id:"kh\xf4ng-c\xf3-t\xe1c-\u0111\u1ed9ng-hai-chi\u1ec1u",children:"Kh\xf4ng c\xf3 t\xe1c \u0111\u1ed9ng hai chi\u1ec1u:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Khi l\xe0m vi\u1ec7c v\u1edbi c\xe1c ki\u1ec3u d\u1eef li\u1ec7u nguy\xean th\u1ee7y, vi\u1ec7c thay \u0111\u1ed5i bi\u1ebfn b\u1ea3n sao kh\xf4ng \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn bi\u1ebfn g\u1ed1c."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Ph\xf9 h\u1ee3p cho d\u1eef li\u1ec7u kh\xf4ng thay \u0111\u1ed5i:"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Tham tr\u1ecb th\xedch h\u1ee3p \u0111\u1ec3 l\xe0m vi\u1ec7c v\u1edbi c\xe1c d\u1eef li\u1ec7u kh\xf4ng c\u1ea7n s\u1eeda \u0111\u1ed5i nhi\u1ec1u, nh\u01b0 gi\xe1 tr\u1ecb s\u1ed1, chu\u1ed7i, ho\u1eb7c c\xe1c h\u1eb1ng s\u1ed1."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"t\xf3m-t\u1eaft",children:"T\xf3m t\u1eaft"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Tham tr\u1ecb (Pass by Value) ch\u1ec9 \xe1p d\u1ee5ng cho ki\u1ec3u d\u1eef li\u1ec7u nguy\xean th\u1ee7y."}),"\n",(0,t.jsx)(i.li,{children:"Khi g\xe1n ho\u1eb7c truy\u1ec1n v\xe0o h\xe0m, gi\xe1 tr\u1ecb \u0111\u01b0\u1ee3c sao ch\xe9p ho\xe0n to\xe0n \u0111\u1ed9c l\u1eadp."}),"\n",(0,t.jsx)(i.li,{children:"\u0110\xe2y l\xe0 c\xe1ch ho\u1ea1t \u0111\u1ed9ng m\u1eb7c \u0111\u1ecbnh c\u1ee7a JavaScript v\u1edbi ki\u1ec3u d\u1eef li\u1ec7u nguy\xean th\u1ee7y."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"v\xed-d\u1ee5-th\u1ef1c-t\u1ebf",children:"V\xed d\u1ee5 th\u1ef1c t\u1ebf"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"T\xednh to\xe1n m\xe0 kh\xf4ng thay \u0111\u1ed5i bi\u1ebfn g\u1ed1c:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"function doubleValue(num) {\nreturn num * 2; // Nh\xe2n \u0111\xf4i gi\xe1 tr\u1ecb v\xe0 tr\u1ea3 v\u1ec1\n}\n\nlet original = 15;\nlet doubled = doubleValue(original);\n\nconsole.log(original); // 15\nconsole.log(doubled);  // 30\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"so-s\xe1nh-ki\u1ec3u-nguy\xean-th\u1ee7y-v\u1edbi-ki\u1ec3u-ph\u1ee9c-t\u1ea1p",children:"So s\xe1nh ki\u1ec3u nguy\xean th\u1ee7y v\u1edbi ki\u1ec3u ph\u1ee9c t\u1ea1p:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"let primitive = 10;\nlet complex = { value: 10 };\n\nfunction modifyValues(p, c) {\np = 20;           // Kh\xf4ng \u1ea3nh h\u01b0\u1edfng primitive\nc.value = 20;     // \u1ea2nh h\u01b0\u1edfng object\n}\n\nmodifyValues(primitive, complex);\n\nconsole.log(primitive); // 10 (Kh\xf4ng thay \u0111\u1ed5i)\nconsole.log(complex);   // { value: 20 } (B\u1ecb thay \u0111\u1ed5i)\n"})})]})}function o(n={}){const{wrapper:i}={...(0,c.R)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,i,h)=>{h.d(i,{R:()=>r,x:()=>l});var e=h(6540);const t={},c=e.createContext(t);function r(n){const i=e.useContext(c);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function l(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),e.createElement(c.Provider,{value:i},n.children)}}}]);