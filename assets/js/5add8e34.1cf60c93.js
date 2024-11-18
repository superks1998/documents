"use strict";(self.webpackChunkghichu_new=self.webpackChunkghichu_new||[]).push([[1153],{7713:(n,t,c)=>{c.r(t),c.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>e,toc:()=>l});const e=JSON.parse('{"id":"OOP/oop","title":"OOP","description":"4 t\xednh ch\u1ea5t","source":"@site/docs/web/OOP/oop.md","sourceDirName":"OOP","slug":"/OOP/","permalink":"/documents/web/OOP/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web/OOP/oop.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Strings","permalink":"/documents/web/Javascript/Basic New/string"},"next":{"title":"Basic","permalink":"/documents/web/ReactJS/basic"}}');var h=c(4848),s=c(8453);const r={},a="OOP",i={},l=[{value:"4 t\xednh ch\u1ea5t",id:"4-t\xednh-ch\u1ea5t",level:2},{value:"Tr\u1eebu t\u01b0\u1ee3ng h\xf3a",id:"tr\u1eebu-t\u01b0\u1ee3ng-h\xf3a",level:3},{value:"Th\u1eeba k\u1ebf",id:"th\u1eeba-k\u1ebf",level:3},{value:"\u0110a h\xecnh",id:"\u0111a-h\xecnh",level:3},{value:"\u0110\xf3ng g\xf3i",id:"\u0111\xf3ng-g\xf3i",level:3},{value:"instace, static",id:"instace-static",level:2},{value:"K\u1ebf th\u1eeba (extend), super()",id:"k\u1ebf-th\u1eeba-extend-super",level:2},{value:"Access modifier(truy nh\u1eadp \u0111\u1ed1i t\u01b0\u1ee3ng)",id:"access-modifiertruy-nh\u1eadp-\u0111\u1ed1i-t\u01b0\u1ee3ng",level:2},{value:"Accessor",id:"accessor",level:2}];function d(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",pre:"pre",...(0,s.R)(),...n.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.header,{children:(0,h.jsx)(t.h1,{id:"oop",children:"OOP"})}),"\n",(0,h.jsx)(t.h2,{id:"4-t\xednh-ch\u1ea5t",children:"4 t\xednh ch\u1ea5t"}),"\n",(0,h.jsx)(t.h3,{id:"tr\u1eebu-t\u01b0\u1ee3ng-h\xf3a",children:"Tr\u1eebu t\u01b0\u1ee3ng h\xf3a"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{children:"- L\xe0 vi\u1ec7c x\xe1c \u0111\u1ecbnh thu\u1ed9c t\xednh v\xe0 ph\u01b0\u01a1ng th\u1ee9c cho 1 ch\u01b0\u01a1ng tr\xecnh (1 Class), l\xe0 t\xednh ch\u1ea5t \u0111\u1ea7u ti\xean.\n"})}),"\n",(0,h.jsx)(t.h3,{id:"th\u1eeba-k\u1ebf",children:"Th\u1eeba k\u1ebf"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{children:"- L\u1edbp n\xe0y c\xf3 th\u1ec3 k\u1ebf th\u1eeba c\xe1c ph\u01b0\u01a1ng t\xednh v\xe0 thu\u1ed9c t\xednh c\u1ee7a thu\u1ed9c t\xednh kh\xe1c (Extend).\r\n\n"})}),"\n",(0,h.jsx)(t.h3,{id:"\u0111a-h\xecnh",children:"\u0110a h\xecnh"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{children:"- Vi\u1ebft l\u1ea1i c\xe1c thu\u1ed9c t\xednh v\xe0 ph\u01b0\u01a1ng th\u1ee9c c\u1ee7a l\u1edbp kh\xe1c\n"})}),"\n",(0,h.jsx)(t.h3,{id:"\u0111\xf3ng-g\xf3i",children:"\u0110\xf3ng g\xf3i"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{children:"- Cho ph\xe9p ng\u01b0\u1eddi d\xf9ng hay \u0111\u1ed1i t\u01b0\u1ee3ng kh\xe1c truy xu\u1ea5t ho\u1eb7c thay \u0111\u1ed5i d\u1eef li\u1ec7u c\u1ee7a \u0111\u1ed1i t\u01b0\u1ee3ng hi\u1ec7n t\u1ea1i hay kh\xf4ng.\n"})}),"\n",(0,h.jsx)(t.h2,{id:"instace-static",children:"instace, static"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{children:"- Instance l\xe0 \u0111\u1ed1i t\u01b0\u1ee3ng \u0111\u01b0\u1ee3c t\u1ea1o t\u1eeb 1 Class.\r\n- C\u1ea7n ph\u1ea3i t\u1ea1o Instance b\u1eb1ng t\u1eeb kh\xf3a new Class th\xec m\u1edbi c\xf3 th\u1ec3 truy xu\u1ea5t thu\u1ed9c t\xednh v\xe0 ph\u01b0\u01a1ng th\u1ee9c c\u1ee7a Class th\xf4ng qua Instance.\r\n- Static cho ph\xe9p kh\xf4ng c\u1ea7n ph\u1ea3i t\u1ea1o instance m\xe0 v\u1eabn c\xf3 th\u1ec3 s\u1eed d\u1ee5ng \u0111\u01b0\u1ee3c thu\u1ed9c t\xednh v\xe0 ph\u01b0\u01a1ng th\u1ee9c c\u1ee7a Class.\n"})}),"\n",(0,h.jsx)(t.h2,{id:"k\u1ebf-th\u1eeba-extend-super",children:"K\u1ebf th\u1eeba (extend), super()"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{children:"- S\u1eed d\u1ee5ng t\u1eeb kh\xf3a extend \u0111\u1ec3 k\u1ebf th\u1eeba c\xe1c ph\u01b0\u01a1ng th\u1ee9c v\xe0 thu\u1ed9c t\xednh c\u1ee7a Class qua 1 Class m\u1edbi.\r\n- Mu\u1ed1n s\u1eeda \u0111\u1ed5i thu\u1ed9c t\xednh v\xe0 ph\u01b0\u01a1ng th\u1ee9c c\u1ee7a class con k\u1ebf th\u1eeba t\u1eeb class cha th\xec c\u1ea7n \u0111\u1eb7t tr\xf9ng t\xean \u0111\u1ec3 ghi \u0111\xe8.\r\n- S\u1eed d\u1ee5ng super() \u0111\u1ec3 d\xf9ng l\u1ea1i code trong ph\u01b0\u01a1ng th\u1ee9c c\u1ee7a class cha.\r\n- super() nh\u1eadn th\xeam \u0111\u1ed1i s\u1ed1 \u1edf class con n\u1ebfu constructor class cha nh\u1eadn \u0111\u1ed1i s\u1ed1.\n"})}),"\n",(0,h.jsx)(t.h2,{id:"access-modifiertruy-nh\u1eadp-\u0111\u1ed1i-t\u01b0\u1ee3ng",children:"Access modifier(truy nh\u1eadp \u0111\u1ed1i t\u01b0\u1ee3ng)"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{children:"- L\xe0 c\xe1c t\u1eeb kh\xf3a tr\u1ea1ng th\xe1i truy c\u1eadp d\u1eef li\u1ec7u c\u1ee7a class.\r\n- C\xf3 3 t\u1eeb kh\xf3a c\u1ee7a access modifier: public, protected, private.\r\n- Public: c\xf3 th\u1ec3 truy c\u1eadp: trong class, ngo\xe0i class, class con.\r\n- Protected: c\xf3 th\u1ec3 truy c\u1eadp: trong class v\xe0 class con, kh\xf4ng \u0111\u01b0\u1ee3c ngo\xe0i class.\r\n- Private: c\xf3 th\u1ec3 truy c\u1eadp: trong class, ngo\xe0i class v\xe0 class con th\xec kh\xf4ng \u0111\u01b0\u1ee3c.\n"})}),"\n",(0,h.jsx)(t.h2,{id:"accessor",children:"Accessor"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{children:"- L\xe0 ph\u01b0\u01a1ng th\u1ee9c truy c\u1eadp d\u1eef li\u1ec7u nh\u01b0ng v\u1eabn gi\u1eef t\xednh b\u1ea3o m\u1eadt c\u1ee7a class.\r\n- Getter v\xe0 setter \u0111\u1ec3 truy c\u1eadp v\xe0 ch\u1ec9nh s\u1eeda v\xe0o d\u1eef li\u1ec7u th\xf4ng qua h\xe0m.\r\n- S\u1eed d\u1ee5ng c\u1ea7n th\xeam d\u1ea5u '_' \u1edf t\xean d\u1eef li\u1ec7u.\r\n- C\u1ea7n \u0111\u1ecbnh ngh\u0129a h\xe0m getter v\xe0 setter gi\u1ed1ng t\xean d\u1eef li\u1ec7u nh\u01b0ng kh\xf4ng th\xeam d\u1ea5u '_'.\r\n- S\u1eed d\u1ee5ng b\u1eb1ng c\xe1ch t\u1ea1o 1 instance v\xe0 g\u1ecdi \u0111\u1ebfn t\xean getter, setter.\r\n- N\u1ebfu truy c\u1eadp l\xe0 getter, c\xf2n ch\u1ec9nh s\u1eeda(g\xe1n) l\xe0 setter.\n"})}),"\n",(0,h.jsx)(t.h1,{id:"abstract",children:"Abstract"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{children:"- Abstract l\xe0 1 b\u1ea3n thi\u1ebft k\u1ebf c\u1ee7a class.\r\n- T\u1ee9c l\xe0 Abstract l\xe0 1 b\u1ea3n t\xf3m t\u1eaft c\u1ee7a class. M\xf4 t\u1ea3 c\xe1c ch\u1ee9 n\u0103ng c\u1ee7a class m\xe0 kh\xf4ng ph\xe2n t\xe1n v\xe0o chi ti\u1ebft.\r\n- Abstract class kh\xf4ng \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 t\u1ea1o \u0111\u1ed1i t\u01b0\u1ee3ng m\xe0 ch\u1ec9 \u0111\u1ebf xem c\u1ea5u tr\xfac c\u1ee7a class.\r\n- Class extend t\u1eeb abstract.\r\n- Abstract method l\xe0 b\u1ea3n thi\u1ebft k\u1ebf c\u1ee7a 1 ph\u01b0\u01a1ng th\u1ee9c.\r\n- Abstract method ch\u1ec9 \u0111\u1ec3 khai b\xe1o t\xean v\xe0 ki\u1ec3u tr\u1ea3 v\u1ec1 c\u1ee7a ph\u01b0\u01a1ng th\u1ee9c m\xe0 kh\xf4ng c\xf3 code b\xean trong.\r\n- Ph\u1ea3i t\u1ef1 \u0111\u1ecbnh ngh\u0129a code b\xean d\u01b0\u1edbi class con.\n"})})]})}function o(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,h.jsx)(t,{...n,children:(0,h.jsx)(d,{...n})}):d(n)}},8453:(n,t,c)=>{c.d(t,{R:()=>r,x:()=>a});var e=c(6540);const h={},s=e.createContext(h);function r(n){const t=e.useContext(s);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(h):n.components||h:r(n.components),e.createElement(s.Provider,{value:t},n.children)}}}]);