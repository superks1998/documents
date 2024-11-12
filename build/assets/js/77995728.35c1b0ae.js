"use strict";(self.webpackChunkghichu_new=self.webpackChunkghichu_new||[]).push([[4810],{3580:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var t=r(5893),i=r(1151);const a={sidebar_position:6},c="Array Method",s={id:"Javascript/Basic/Array",title:"Array Method",description:"Ki\u1ec3m tra Array",source:"@site/docs/Javascript/Basic/Array.md",sourceDirName:"Javascript/Basic",slug:"/Javascript/Basic/Array",permalink:"/documents/docs/Javascript/Basic/Array",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/Basic/Array.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Spread, Rest Operator and Destructuring",permalink:"/documents/docs/Javascript/Basic/SpreadRest"},next:{title:"String and Number Method",permalink:"/documents/docs/Javascript/Basic/String"}},h={},o=[{value:"Ki\u1ec3m tra Array",id:"ki\u1ec3m-tra-array",level:2},{value:"Convert Array to String",id:"convert-array-to-string",level:2},{value:"Th\xeam v\xe0 x\xf3a ph\u1ea7n t\u1eed",id:"th\xeam-v\xe0-x\xf3a-ph\u1ea7n-t\u1eed",level:2},{value:"forEach()",id:"foreach",level:2},{value:"every()",id:"every",level:2},{value:"some()",id:"some",level:2},{value:"find()",id:"find",level:2},{value:"filter()",id:"filter",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"array-method",children:"Array Method"}),"\n",(0,t.jsx)(e.h2,{id:"ki\u1ec3m-tra-array",children:"Ki\u1ec3m tra Array"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"- Array.isArray(argument)\nreturn Boolan\n"})}),"\n",(0,t.jsx)(e.h2,{id:"convert-array-to-string",children:"Convert Array to String"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"- toString(): chuy\u1ec3n \u0111\u1ed5i array sang chu\u1ed7i, ng\u0103n c\xe1ch b\u1edfi d\u1ea5u ','.\n- join(argument): gi\u1ed1ng toString, nh\u1eefng c\xf3 th\u1ec3 ch\u1ec9 \u0111\u1ecbnh d\u1ea5u ph\xe2n c\xe1ch \u1edf \u0111\u1ed1i s\u1ed1.\n"})}),"\n",(0,t.jsx)(e.h2,{id:"th\xeam-v\xe0-x\xf3a-ph\u1ea7n-t\u1eed",children:"Th\xeam v\xe0 x\xf3a ph\u1ea7n t\u1eed"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"- pop(): x\xf3a ph\u1ea7n t\u1eed cu\u1ed1i m\u1ea3ng, tr\u1ea3 v\u1ec1 gi\xe1 tr\u1ecb b\u1ecb x\xf3a.\n- push(): Th\xeam 1 ho\u1eb7c nhi\u1ec1u ph\u1ea7n t\u1eed v\xe0o cu\u1ed1i m\u1ea3ng,\ntr\u1ea3 v\u1ec1 \u0111\u1ed9 d\xe0i m\u1edbi c\u1ee7a m\u1ea3ng.\n- C\xf3 1 c\xe1ch th\xeam n\u1eefa l\xe0 s\u1eed d\u1ee5ng length.\nVD: array[array.length] = 'newValue';\n- shift(): X\xf3a ph\u1ea7n t\u1eed \u1edf \u0111\u1ea7u m\u1ea3ng, tr\u1ea3 v\u1ec1 gi\xe1 tr\u1ecb \u0111\xe3 x\xf3a.\n- unshift(): Th\xeam 1 ho\u1eb7c nhi\u1ec1u ph\u1ea7n t\u1eed v\xe0o \u0111\u1ea7u m\u1ea3ng,\ntr\u1ea3 v\u1ec1 \u0111\u1ed9 d\xe0i m\u1edbi c\u1ee7a m\u1ea3ng.\n- concat(): N\u1ed1i 2 m\u1ea3ng. Tr\u1ea3 v\u1ec1 m\u1ea3ng m\u1edbi.\nVD: array1.concat(array2).\n- slice(): C\u1eaft 1 m\u1ea3ng th\xe0nh 1 m\u1ea3ng m\u1edbi.\nSlice nh\u1eadn 2 argument, 1 l\xe0 b\u1eaft \u0111\u1ea7u, 2 l\xe0 k\u1ebft th\xfac.\nVD: array.slice(1, 3)\nOutput nh\u1eadn \u0111\u01b0\u1ee3c s\u1ebd l\xe0 ph\u1ea7n t\u1eed 1 v\xe0 2 c\u1ee7a m\u1ea3ng.\nCh\u1ec9 nh\u1eadp \u0111\u1ed1i s\u1ed1 \u0111\u1ea7u ti\xean th\xec s\u1ebd c\u1eaft \u0111\u1ebfn h\u1ebft m\u1ea3ng.\n"})}),"\n",(0,t.jsx)(e.h2,{id:"foreach",children:"forEach()"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Gi\u1ed1ng v\xf2ng l\u1eb7p for, kh\xf4ng return v\u1ec1 g\xec c\u1ea3."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"every",children:"every()"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"- Ki\u1ec3m tra t\u1ea5t c\u1ea3 c\xe1c ph\u1ea7n t\u1eed c\u1ee7a m\u1ea3ng ph\u1ea3i th\u1ecfa m\xe3n \u0111i\u1ec1u g\xec \u0111\xf3.\n  Tr\u1ea3 v\u1ec1 Boolean. true n\u1ebfu t\u1ea5t c\u1ea3 gi\xe1 tr\u1ecb th\u1ecfa m\xe3n \u0111i\u1ec1u ki\u1ec7n.\n- C\xfa ph\xe1p: every((element, index) => { DK } )\n"})}),"\n",(0,t.jsx)(e.h2,{id:"some",children:"some()"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Ng\u01b0\u1ee3c l\u1ea1i v\u1edbi every()\nch\u1ec9 c\u1ea7n 1 ph\u1ea7n t\u1eed th\u1ecfa m\xe3n \u0111i\u1ec1u ki\u1ec7n th\xec tr\u1ea3 v\u1ec1 true lu\xf4n."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"find",children:"find()"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"- C\xfa ph\xe1p: find((element, index) => { \u0110K} )\n- H\xe0m t\xecm ki\u1ebfm 1 ph\u1ea7n t\u1eed th\u1ecfa m\xe3n \u0111i\u1ec1u ki\u1ec7n trong m\u1ea3ng.\n  Tr\u1ea3 v\u1ec1 1 ph\u1ea7n t\u1eed th\u1ecfa m\xe3n.\n"})}),"\n",(0,t.jsx)(e.h2,{id:"filter",children:"filter()"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language--",metastring:"C\xfa ph\xe1p: filter((element, index) => { ... } );",children:"- H\xe0m t\xecm ki\u1ebfm 1 danh s\xe1ch th\u1ecfa m\xe3n \u0111i\u1ec1u ki\u1ec7n.\n- Tr\u1ea3 v\u1ec1 1 m\u1ea3ng ch\u1ee9a c\xe1c gi\xe1 tr\u1ecb th\u1ecfa m\xe3n.\n"})})]})}function l(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>s,a:()=>c});var t=r(7294);const i={},a=t.createContext(i);function c(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);