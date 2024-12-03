"use strict";(self.webpackChunkghichu_new=self.webpackChunkghichu_new||[]).push([[6402],{8876:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>h,default:()=>j,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Javascript/Basic/Array/array","title":"Array","description":"M\u1ea3ng trong JavaScript","source":"@site/docs/web/Javascript/Basic/Array/array.md","sourceDirName":"Javascript/Basic/Array","slug":"/Javascript/Basic/Array/","permalink":"/documents/web/Javascript/Basic/Array/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web/Javascript/Basic/Array/array.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Objects","permalink":"/documents/web/Javascript/Basic/object"},"next":{"title":"Array Method","permalink":"/documents/web/Javascript/Basic/Array/array-method"}}');var c=r(4848),t=r(8453);const i={sidebar_position:10},h="Array",l={},d=[{value:"M\u1ea3ng trong JavaScript",id:"m\u1ea3ng-trong-javascript",level:2},{value:"C\xe1ch t\u1ea1o m\u1ea3ng",id:"c\xe1ch-t\u1ea1o-m\u1ea3ng",level:3},{value:"C\xe1c ph\u01b0\u01a1ng th\u1ee9c c\u01a1 b\u1ea3n c\u1ee7a m\u1ea3ng",id:"c\xe1c-ph\u01b0\u01a1ng-th\u1ee9c-c\u01a1-b\u1ea3n-c\u1ee7a-m\u1ea3ng",level:3},{value:"M\u1ed9t s\u1ed1 ph\u01b0\u01a1ng th\u1ee9c quan tr\u1ecdng kh\xe1c",id:"m\u1ed9t-s\u1ed1-ph\u01b0\u01a1ng-th\u1ee9c-quan-tr\u1ecdng-kh\xe1c",level:3},{value:"M\u1ed9t s\u1ed1 v\xed d\u1ee5 c\u01a1 b\u1ea3n v\u1ec1 m\u1ea3ng",id:"m\u1ed9t-s\u1ed1-v\xed-d\u1ee5-c\u01a1-b\u1ea3n-v\u1ec1-m\u1ea3ng",level:3},{value:"B\u1ea3ng t\xf3m t\u1eaft m\u1ed9t s\u1ed1 ph\u01b0\u01a1ng th\u1ee9c ch\xednh c\u1ee7a m\u1ea3ng",id:"b\u1ea3ng-t\xf3m-t\u1eaft-m\u1ed9t-s\u1ed1-ph\u01b0\u01a1ng-th\u1ee9c-ch\xednh-c\u1ee7a-m\u1ea3ng",level:3}];function a(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"array",children:"Array"})}),"\n",(0,c.jsx)(e.h2,{id:"m\u1ea3ng-trong-javascript",children:"M\u1ea3ng trong JavaScript"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"M\u1ea3ng l\xe0 m\u1ed9t c\u1ea5u tr\xfac d\u1eef li\u1ec7u trong JavaScript gi\xfap l\u01b0u tr\u1eef v\xe0 qu\u1ea3n l\xfd nhi\u1ec1u gi\xe1 tr\u1ecb trong m\u1ed9t bi\u1ebfn duy nh\u1ea5t. M\u1ed7i gi\xe1 tr\u1ecb trong m\u1ea3ng \u0111\u01b0\u1ee3c g\u1ecdi l\xe0 m\u1ed9t ph\u1ea7n t\u1eed v\xe0 c\xf3 v\u1ecb tr\xed x\xe1c \u0111\u1ecbnh \u0111\u01b0\u1ee3c g\u1ecdi l\xe0 ch\u1ec9 m\u1ee5c (index)."}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"M\u1ea3ng r\u1ea5t h\u1eefu \xedch khi c\u1ea7n l\u01b0u tr\u1eef c\xe1c danh s\xe1ch, d\xe3y s\u1ed1, chu\u1ed7i, ho\u1eb7c c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng."}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"c\xe1ch-t\u1ea1o-m\u1ea3ng",children:"C\xe1ch t\u1ea1o m\u1ea3ng"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"S\u1eed d\u1ee5ng c\xfa ph\xe1p m\u1ea3ng r\u1ed7ng"}),": T\u1ea1o m\u1ed9t m\u1ea3ng kh\xf4ng ch\u1ee9a ph\u1ea7n t\u1eed n\xe0o."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"let arr = [];\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"T\u1ea1o m\u1ea3ng c\xf3 ph\u1ea7n t\u1eed"}),": C\xf3 th\u1ec3 th\xeam c\xe1c ph\u1ea7n t\u1eed ngay khi khai b\xe1o m\u1ea3ng."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"let fruits = ['Apple', 'Banana', 'Orange'];\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsxs)(e.strong,{children:["S\u1eed d\u1ee5ng t\u1eeb kh\xf3a ",(0,c.jsx)(e.code,{children:"new Array()"})]}),": M\u1ed9t c\xe1ch kh\xe1c \u0111\u1ec3 t\u1ea1o m\u1ea3ng, nh\u01b0ng \xedt ph\u1ed5 bi\u1ebfn h\u01a1n."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"let numbers = new Array(1, 2, 3, 4, 5);\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"c\xe1c-ph\u01b0\u01a1ng-th\u1ee9c-c\u01a1-b\u1ea3n-c\u1ee7a-m\u1ea3ng",children:"C\xe1c ph\u01b0\u01a1ng th\u1ee9c c\u01a1 b\u1ea3n c\u1ee7a m\u1ea3ng"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"Th\xeam ph\u1ea7n t\u1eed"}),":"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"push()"}),": Th\xeam m\u1ed9t ho\u1eb7c nhi\u1ec1u ph\u1ea7n t\u1eed v\xe0o cu\u1ed1i m\u1ea3ng."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"fruits.push('Mango');\n// K\u1ebft qu\u1ea3: ['Apple', 'Banana', 'Orange', 'Mango']\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"unshift()"}),": Th\xeam m\u1ed9t ho\u1eb7c nhi\u1ec1u ph\u1ea7n t\u1eed v\xe0o \u0111\u1ea7u m\u1ea3ng."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"fruits.unshift('Grapes');\n// K\u1ebft qu\u1ea3: ['Grapes', 'Apple', 'Banana', 'Orange', 'Mango']\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"X\xf3a ph\u1ea7n t\u1eed"}),":"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"pop()"}),": X\xf3a ph\u1ea7n t\u1eed cu\u1ed1i m\u1ea3ng v\xe0 tr\u1ea3 v\u1ec1 ph\u1ea7n t\u1eed \u0111\xe3 x\xf3a."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"let lastFruit = fruits.pop();\n// K\u1ebft qu\u1ea3: lastFruit = 'Mango'; fruits = ['Grapes', 'Apple', 'Banana', 'Orange']\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"shift()"}),": X\xf3a ph\u1ea7n t\u1eed \u0111\u1ea7u ti\xean c\u1ee7a m\u1ea3ng v\xe0 tr\u1ea3 v\u1ec1 ph\u1ea7n t\u1eed \u0111\xe3 x\xf3a."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"let firstFruit = fruits.shift();\n// K\u1ebft qu\u1ea3: firstFruit = 'Grapes'; fruits = ['Apple', 'Banana', 'Orange']\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"Truy c\u1eadp ph\u1ea7n t\u1eed trong m\u1ea3ng"}),":"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"C\xf3 th\u1ec3 truy c\u1eadp ph\u1ea7n t\u1eed trong m\u1ea3ng b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ch\u1ec9 m\u1ee5c, b\u1eaft \u0111\u1ea7u t\u1eeb 0."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"console.log(fruits[0]); // K\u1ebft qu\u1ea3: 'Apple'\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"\u0110\u1ed9 d\xe0i c\u1ee7a m\u1ea3ng"}),":"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["S\u1eed d\u1ee5ng thu\u1ed9c t\xednh ",(0,c.jsx)(e.code,{children:"length"})," \u0111\u1ec3 l\u1ea5y s\u1ed1 ph\u1ea7n t\u1eed trong m\u1ea3ng."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"console.log(fruits.length); // K\u1ebft qu\u1ea3: 3\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"m\u1ed9t-s\u1ed1-ph\u01b0\u01a1ng-th\u1ee9c-quan-tr\u1ecdng-kh\xe1c",children:"M\u1ed9t s\u1ed1 ph\u01b0\u01a1ng th\u1ee9c quan tr\u1ecdng kh\xe1c"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:(0,c.jsx)(e.code,{children:"splice()"})}),": Th\xeam, x\xf3a, ho\u1eb7c thay th\u1ebf c\xe1c ph\u1ea7n t\u1eed trong m\u1ea3ng."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"fruits.splice(1, 1, 'Kiwi'); // Thay ph\u1ea7n t\u1eed t\u1ea1i v\u1ecb tr\xed 1 b\u1eb1ng 'Kiwi'\n// K\u1ebft qu\u1ea3: ['Apple', 'Kiwi', 'Orange']\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:(0,c.jsx)(e.code,{children:"slice()"})}),": T\u1ea1o m\u1ed9t m\u1ea3ng m\u1edbi l\xe0 b\u1ea3n sao c\u1ee7a m\u1ed9t ph\u1ea7n trong m\u1ea3ng g\u1ed1c."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"let newFruits = fruits.slice(1, 3);\n// K\u1ebft qu\u1ea3: newFruits = ['Kiwi', 'Orange']\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:(0,c.jsx)(e.code,{children:"map()"})}),": T\u1ea1o m\u1ed9t m\u1ea3ng m\u1edbi t\u1eeb vi\u1ec7c \xe1p d\u1ee5ng m\u1ed9t h\xe0m l\xean t\u1eebng ph\u1ea7n t\u1eed c\u1ee7a m\u1ea3ng c\u0169."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"let numbers = [1, 2, 3];\nlet squaredNumbers = numbers.map(num => num * num);\n// K\u1ebft qu\u1ea3: squaredNumbers = [1, 4, 9]\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:(0,c.jsx)(e.code,{children:"filter()"})}),": T\u1ea1o m\u1ed9t m\u1ea3ng m\u1edbi ch\u1ee9a c\xe1c ph\u1ea7n t\u1eed th\u1ecfa m\xe3n \u0111i\u1ec1u ki\u1ec7n."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"let evenNumbers = numbers.filter(num => num % 2 === 0);\n// K\u1ebft qu\u1ea3: evenNumbers = [2]\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:(0,c.jsx)(e.code,{children:"reduce()"})}),": T\xednh to\xe1n m\u1ed9t gi\xe1 tr\u1ecb duy nh\u1ea5t b\u1eb1ng c\xe1ch g\u1ed9p c\xe1c ph\u1ea7n t\u1eed c\u1ee7a m\u1ea3ng theo m\u1ed9t h\xe0m."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"let sum = numbers.reduce((total, num) => total + num, 0);\n// K\u1ebft qu\u1ea3: sum = 6\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"m\u1ed9t-s\u1ed1-v\xed-d\u1ee5-c\u01a1-b\u1ea3n-v\u1ec1-m\u1ea3ng",children:"M\u1ed9t s\u1ed1 v\xed d\u1ee5 c\u01a1 b\u1ea3n v\u1ec1 m\u1ea3ng"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"T\u1ea1o m\u1ed9t m\u1ea3ng s\u1ed1 v\xe0 t\xednh t\u1ed5ng c\xe1c ph\u1ea7n t\u1eed trong m\u1ea3ng"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"let numbers = [5, 10, 15, 20];\nlet sum = numbers.reduce((total, num) => total + num, 0);\nconsole.log(sum); // K\u1ebft qu\u1ea3: 50\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"T\xecm c\xe1c s\u1ed1 ch\u1eb5n trong m\u1ed9t m\u1ea3ng"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"let numbers = [1, 2, 3, 4, 5, 6];\nlet evenNumbers = numbers.filter(num => num % 2 === 0);\nconsole.log(evenNumbers); // K\u1ebft qu\u1ea3: [2, 4, 6]\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"Chuy\u1ec3n \u0111\u1ed5i m\u1ed9t m\u1ea3ng chu\u1ed7i th\xe0nh ch\u1eef hoa"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"let fruits = ['apple', 'banana', 'orange'];\nlet upperFruits = fruits.map(fruit => fruit.toUpperCase());\nconsole.log(upperFruits); // K\u1ebft qu\u1ea3: ['APPLE', 'BANANA', 'ORANGE']\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.hr,{}),"\n",(0,c.jsx)(e.h3,{id:"b\u1ea3ng-t\xf3m-t\u1eaft-m\u1ed9t-s\u1ed1-ph\u01b0\u01a1ng-th\u1ee9c-ch\xednh-c\u1ee7a-m\u1ea3ng",children:"B\u1ea3ng t\xf3m t\u1eaft m\u1ed9t s\u1ed1 ph\u01b0\u01a1ng th\u1ee9c ch\xednh c\u1ee7a m\u1ea3ng"}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"Ph\u01b0\u01a1ng th\u1ee9c"}),(0,c.jsx)(e.th,{children:"Ch\u1ee9c n\u0103ng"}),(0,c.jsx)(e.th,{children:"V\xed d\u1ee5"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"push()"})}),(0,c.jsx)(e.td,{children:"Th\xeam ph\u1ea7n t\u1eed v\xe0o cu\u1ed1i m\u1ea3ng"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"arr.push(4)"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"pop()"})}),(0,c.jsx)(e.td,{children:"X\xf3a ph\u1ea7n t\u1eed cu\u1ed1i v\xe0 tr\u1ea3 v\u1ec1 ph\u1ea7n t\u1eed \u0111\xe3 x\xf3a"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"arr.pop()"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"shift()"})}),(0,c.jsx)(e.td,{children:"X\xf3a ph\u1ea7n t\u1eed \u0111\u1ea7u v\xe0 tr\u1ea3 v\u1ec1 ph\u1ea7n t\u1eed \u0111\xe3 x\xf3a"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"arr.shift()"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"unshift()"})}),(0,c.jsx)(e.td,{children:"Th\xeam ph\u1ea7n t\u1eed v\xe0o \u0111\u1ea7u m\u1ea3ng"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"arr.unshift(0)"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"map()"})}),(0,c.jsx)(e.td,{children:"T\u1ea1o m\u1ea3ng m\u1edbi v\u1edbi c\xe1c ph\u1ea7n t\u1eed sau khi bi\u1ebfn \u0111\u1ed5i"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"arr.map(x => x * 2)"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"filter()"})}),(0,c.jsx)(e.td,{children:"L\u1ecdc c\xe1c ph\u1ea7n t\u1eed th\u1ecfa m\xe3n \u0111i\u1ec1u ki\u1ec7n"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"arr.filter(x => x > 2)"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"reduce()"})}),(0,c.jsx)(e.td,{children:"T\xednh to\xe1n gi\xe1 tr\u1ecb duy nh\u1ea5t t\u1eeb c\xe1c ph\u1ea7n t\u1eed trong m\u1ea3ng"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"arr.reduce((a, b) => a + b)"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"slice()"})}),(0,c.jsx)(e.td,{children:"Tr\xedch xu\u1ea5t m\u1ed9t ph\u1ea7n c\u1ee7a m\u1ea3ng"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"arr.slice(1, 3)"})})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"splice()"})}),(0,c.jsx)(e.td,{children:"Th\xeam/x\xf3a/thay th\u1ebf c\xe1c ph\u1ea7n t\u1eed trong m\u1ea3ng"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"arr.splice(1, 1, 'New')"})})]})]})]})]})}function j(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(a,{...n})}):a(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>h});var s=r(6540);const c={},t=s.createContext(c);function i(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function h(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);