"use strict";(self.webpackChunkghichu_new=self.webpackChunkghichu_new||[]).push([[78],{3276:(n,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>h,metadata:()=>e,toc:()=>l});const e=JSON.parse('{"id":"Javascript/Advanced/Javascript Runtime/Hoisting","title":"Hoisting","description":"Hoisting trong JavaScript","source":"@site/docs/web/Javascript/Advanced/Javascript Runtime/Hoisting.md","sourceDirName":"Javascript/Advanced/Javascript Runtime","slug":"/Javascript/Advanced/Javascript Runtime/Hoisting","permalink":"/documents/web/Javascript/Advanced/Javascript Runtime/Hoisting","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web/Javascript/Advanced/Javascript Runtime/Hoisting.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Closure","permalink":"/documents/web/Javascript/Advanced/Function/Closure"},"next":{"title":"scope","permalink":"/documents/web/Javascript/Advanced/Javascript Runtime/scope"}}');var c=s(4848),t=s(8453);const h={},r="Hoisting",d={},l=[{value:"Hoisting trong JavaScript",id:"hoisting-trong-javascript",level:2},{value:"<strong>Kh\xe1i ni\u1ec7m</strong>",id:"kh\xe1i-ni\u1ec7m",level:3},{value:"<strong>C\xe1ch ho\u1ea1t \u0111\u1ed9ng</strong>",id:"c\xe1ch-ho\u1ea1t-\u0111\u1ed9ng",level:3},{value:"<strong>V\xed d\u1ee5 minh h\u1ecda</strong>",id:"v\xed-d\u1ee5-minh-h\u1ecda",level:3},{value:"1. <strong>Khai b\xe1o bi\u1ebfn v\u1edbi <code>var</code></strong>",id:"1-khai-b\xe1o-bi\u1ebfn-v\u1edbi-var",level:4},{value:"2. <strong>Khai b\xe1o bi\u1ebfn v\u1edbi let v\xe0 <code>const</code></strong>",id:"2-khai-b\xe1o-bi\u1ebfn-v\u1edbi-let-v\xe0-const",level:4},{value:"3. <strong>Hoisting v\u1edbi <code>h\xe0m</code></strong>",id:"3-hoisting-v\u1edbi-h\xe0m",level:4},{value:"4. <strong>Hoisting v\u1edbi <code>class</code></strong>",id:"4-hoisting-v\u1edbi-class",level:4},{value:"<strong>T\xf3m t\u1eaft</strong>",id:"t\xf3m-t\u1eaft",level:3}];function o(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.header,{children:(0,c.jsx)(i.h1,{id:"hoisting",children:"Hoisting"})}),"\n",(0,c.jsx)(i.h2,{id:"hoisting-trong-javascript",children:"Hoisting trong JavaScript"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"Hoisting"})," l\xe0 m\u1ed9t kh\xe1i ni\u1ec7m quan tr\u1ecdng trong JavaScript, gi\xfap ng\u01b0\u1eddi m\u1edbi h\u1ecdc hi\u1ec3u r\xf5 h\u01a1n c\xe1ch m\xe0 tr\xecnh bi\xean d\u1ecbch x\u1eed l\xfd c\xe1c bi\u1ebfn, h\xe0m v\xe0 l\u1edbp tr\u01b0\u1edbc khi m\xe3 \u0111\u01b0\u1ee3c th\u1ef1c thi."]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"kh\xe1i-ni\u1ec7m",children:(0,c.jsx)(i.strong,{children:"Kh\xe1i ni\u1ec7m"})}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"Hoisting"})," l\xe0 qu\xe1 tr\xecnh m\xe0 tr\xecnh bi\xean d\u1ecbch JavaScript di chuy\u1ec3n c\xe1c khai b\xe1o ",(0,c.jsx)(i.strong,{children:"bi\u1ebfn"}),", ",(0,c.jsx)(i.strong,{children:"h\xe0m"}),", ho\u1eb7c ",(0,c.jsx)(i.strong,{children:"l\u1edbp"})," l\xean \u0111\u1ea7u ph\u1ea1m vi c\u1ee7a ch\xfang (scope) trong qu\xe1 tr\xecnh ",(0,c.jsx)(i.strong,{children:"compile"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsx)(i.p,{children:"\u0110i\u1ec1u n\xe0y c\xf3 ngh\u0129a l\xe0 b\u1ea1n c\xf3 th\u1ec3 s\u1eed d\u1ee5ng ch\xfang tr\u01b0\u1edbc khi ch\xfang \u0111\u01b0\u1ee3c khai b\xe1o trong m\xe3 ngu\u1ed3n."}),"\n"]}),"\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:["Tuy nhi\xean, ",(0,c.jsx)(i.strong,{children:"gi\xe1 tr\u1ecb"})," c\u1ee7a c\xe1c bi\u1ebfn (\u0111\u01b0\u1ee3c khai b\xe1o b\u1eb1ng ",(0,c.jsx)(i.code,{children:"var"}),", ",(0,c.jsx)(i.code,{children:"let"}),", ho\u1eb7c ",(0,c.jsx)(i.code,{children:"const"}),") s\u1ebd kh\xf4ng \u0111\u01b0\u1ee3c hoisting."]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h3,{id:"c\xe1ch-ho\u1ea1t-\u0111\u1ed9ng",children:(0,c.jsx)(i.strong,{children:"C\xe1ch ho\u1ea1t \u0111\u1ed9ng"})}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsxs)(i.strong,{children:["Khai b\xe1o bi\u1ebfn b\u1eb1ng ",(0,c.jsx)(i.code,{children:"var"})]}),": C\xe1c bi\u1ebfn \u0111\u01b0\u1ee3c khai b\xe1o b\u1eb1ng ",(0,c.jsx)(i.code,{children:"var"})," s\u1ebd \u0111\u01b0\u1ee3c hoisting, nh\u01b0ng gi\xe1 tr\u1ecb c\u1ee7a ch\xfang m\u1eb7c \u0111\u1ecbnh l\xe0 ",(0,c.jsx)(i.code,{children:"undefined"})," cho \u0111\u1ebfn khi \u0111\u01b0\u1ee3c g\xe1n gi\xe1 tr\u1ecb."]}),"\n"]}),"\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsxs)(i.strong,{children:["Khai b\xe1o b\u1eb1ng ",(0,c.jsx)(i.code,{children:"let"})," v\xe0 ",(0,c.jsx)(i.code,{children:"const"})]}),': C\u0169ng \u0111\u01b0\u1ee3c hoisting, nh\u01b0ng n\u1eb1m trong "Temporal Dead Zone" (TDZ): th\u1eddi gian t\u1eeb khi kh\u1edfi t\u1ea1o cho \u0111\u1ebfn khi khai b\xe1o bi\u1ebfn v\xe0 kh\xf4ng th\u1ec3 s\u1eed d\u1ee5ng tr\u01b0\u1edbc khi khai b\xe1o.']}),"\n"]}),"\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"H\xe0m"}),": Hoisting to\xe0n b\u1ed9 h\xe0m (c\u1ea3 khai b\xe1o l\u1eabn \u0111\u1ecbnh ngh\u0129a), gi\xfap b\u1ea1n g\u1ecdi h\xe0m tr\u01b0\u1edbc khi \u0111\u1ecbnh ngh\u0129a."]}),"\n"]}),"\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"L\u1edbp (class)"}),": Hoisting ch\u1ec9 x\u1ea3y ra v\u1edbi ph\u1ea7n khai b\xe1o, nh\u01b0ng b\u1ea1n kh\xf4ng th\u1ec3 s\u1eed d\u1ee5ng l\u1edbp tr\u01b0\u1edbc khi \u0111\u1ecbnh ngh\u0129a."]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h3,{id:"v\xed-d\u1ee5-minh-h\u1ecda",children:(0,c.jsx)(i.strong,{children:"V\xed d\u1ee5 minh h\u1ecda"})}),"\n",(0,c.jsxs)(i.h4,{id:"1-khai-b\xe1o-bi\u1ebfn-v\u1edbi-var",children:["1. ",(0,c.jsxs)(i.strong,{children:["Khai b\xe1o bi\u1ebfn v\u1edbi ",(0,c.jsx)(i.code,{children:"var"})]})]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-javascript",children:"console.log(x); // K\u1ebft qu\u1ea3: undefined\nvar x = 5;\nconsole.log(x); // K\u1ebft qu\u1ea3: 5\n"})}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"Gi\u1ea3i th\xedch"}),": Bi\u1ebfn x \u0111\u01b0\u1ee3c hoisting l\xean \u0111\u1ea7u v\u1edbi gi\xe1 tr\u1ecb ban \u0111\u1ea7u l\xe0 undefined."]}),"\n"]}),"\n",(0,c.jsxs)(i.h4,{id:"2-khai-b\xe1o-bi\u1ebfn-v\u1edbi-let-v\xe0-const",children:["2. ",(0,c.jsxs)(i.strong,{children:["Khai b\xe1o bi\u1ebfn v\u1edbi let v\xe0 ",(0,c.jsx)(i.code,{children:"const"})]})]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-javascript",children:"console.log(y); // L\u1ed7i: Cannot access 'y' before initialization\nlet y = 10;\n\nconsole.log(z); // L\u1ed7i: Cannot access 'z' before initialization\nconst z = 20;\n"})}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"Gi\u1ea3i th\xedch"}),": let v\xe0 const n\u1eb1m trong TDZ v\xe0 kh\xf4ng th\u1ec3 truy c\u1eadp tr\u01b0\u1edbc khi \u0111\u01b0\u1ee3c khai b\xe1o."]}),"\n"]}),"\n",(0,c.jsxs)(i.h4,{id:"3-hoisting-v\u1edbi-h\xe0m",children:["3. ",(0,c.jsxs)(i.strong,{children:["Hoisting v\u1edbi ",(0,c.jsx)(i.code,{children:"h\xe0m"})]})]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-javascript",children:'sayHello(); // K\u1ebft qu\u1ea3: "Hello, world!"\n\nfunction sayHello() {\nconsole.log("Hello, world!");\n}\n    - **Gi\u1ea3i th\xedch**: To\xe0n b\u1ed9 h\xe0m sayHello \u0111\u01b0\u1ee3c hoisting, cho ph\xe9p g\u1ecdi h\xe0m tr\u01b0\u1edbc khi \u0111\u1ecbnh ngh\u0129a.\n'})}),"\n",(0,c.jsxs)(i.h4,{id:"4-hoisting-v\u1edbi-class",children:["4. ",(0,c.jsxs)(i.strong,{children:["Hoisting v\u1edbi ",(0,c.jsx)(i.code,{children:"class"})]})]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-javascript",children:"const obj = new MyClass(); // L\u1ed7i: Cannot access 'MyClass' before initialization\n\nclass MyClass {\nconstructor() {\n    this.name = \"```JavaScript\";\n}\n}\n"})}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"Gi\u1ea3i th\xedch"}),": Class ch\u1ec9 \u0111\u01b0\u1ee3c hoisting ph\u1ea7n khai b\xe1o, nh\u01b0ng kh\xf4ng th\u1ec3 s\u1eed d\u1ee5ng tr\u01b0\u1edbc khi \u0111\u1ecbnh ngh\u0129a."]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"t\xf3m-t\u1eaft",children:(0,c.jsx)(i.strong,{children:"T\xf3m t\u1eaft"})}),"\n",(0,c.jsxs)(i.table,{children:[(0,c.jsx)(i.thead,{children:(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.th,{children:"Lo\u1ea1i"}),(0,c.jsx)(i.th,{children:"C\xf3 Hoisting"}),(0,c.jsx)(i.th,{children:"Gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh"}),(0,c.jsx)(i.th,{children:"Gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh"})]})}),(0,c.jsxs)(i.tbody,{children:[(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"var"})}),(0,c.jsx)(i.td,{children:"C\xf3"}),(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"undefined"})}),(0,c.jsx)(i.td,{children:"\u0110\u01b0\u1ee3c ph\xe9p"})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"let"})}),(0,c.jsx)(i.td,{children:"C\xf3"}),(0,c.jsx)(i.td,{children:"Kh\xf4ng"}),(0,c.jsx)(i.td,{children:"Kh\xf4ng (TDZ)"})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"const"})}),(0,c.jsx)(i.td,{children:"C\xf3"}),(0,c.jsx)(i.td,{children:"Kh\xf4ng"}),(0,c.jsx)(i.td,{children:"Kh\xf4ng (TDZ)"})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"Function"})}),(0,c.jsx)(i.td,{children:"C\xf3"}),(0,c.jsx)(i.td,{children:"\u0110\u1ea7y \u0111\u1ee7"}),(0,c.jsx)(i.td,{children:"\u0110\u01b0\u1ee3c ph\xe9p"})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.code,{children:"Class"})}),(0,c.jsx)(i.td,{children:"C\xf3"}),(0,c.jsx)(i.td,{children:"Kh\xf4ng"}),(0,c.jsx)(i.td,{children:"Kh\xf4ng"})]})]})]})]})}function a(n={}){const{wrapper:i}={...(0,t.R)(),...n.components};return i?(0,c.jsx)(i,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},8453:(n,i,s)=>{s.d(i,{R:()=>h,x:()=>r});var e=s(6540);const c={},t=e.createContext(c);function h(n){const i=e.useContext(t);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function r(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:h(n.components),e.createElement(t.Provider,{value:i},n.children)}}}]);