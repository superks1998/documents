"use strict";(self.webpackChunkghichu_new=self.webpackChunkghichu_new||[]).push([[3188],{1915:(n,i,c)=>{c.r(i),c.d(i,{assets:()=>o,contentTitle:()=>h,default:()=>a,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Javascript/Basic/function","title":"Functions","description":"H\xe0m (Functions) trong JavaScript","source":"@site/docs/web/Javascript/Basic/function.md","sourceDirName":"Javascript/Basic","slug":"/Javascript/Basic/function","permalink":"/documents/web/Javascript/Basic/function","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web/Javascript/Basic/function.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Numbers","permalink":"/documents/web/Javascript/Basic/Fundamentals/number"},"next":{"title":"Objects","permalink":"/documents/web/Javascript/Basic/object"}}');var e=c(4848),t=c(8453);const r={sidebar_position:6},h="Functions",o={},l=[{value:"H\xe0m (Functions) trong JavaScript",id:"h\xe0m-functions-trong-javascript",level:2},{value:"C\xe1c Lo\u1ea1i H\xe0m trong JavaScript",id:"c\xe1c-lo\u1ea1i-h\xe0m-trong-javascript",level:3},{value:"So S\xe1nh <code>this</code> trong C\xe1c Lo\u1ea1i H\xe0m",id:"so-s\xe1nh-this-trong-c\xe1c-lo\u1ea1i-h\xe0m",level:3},{value:"V\xed d\u1ee5 v\u1ec1 Hoisting v\xe0 <code>this</code>",id:"v\xed-d\u1ee5-v\u1ec1-hoisting-v\xe0-this",level:3},{value:"C\xe1c T\xednh N\u0103ng Quan Tr\u1ecdng c\u1ee7a H\xe0m trong JavaScript",id:"c\xe1c-t\xednh-n\u0103ng-quan-tr\u1ecdng-c\u1ee7a-h\xe0m-trong-javascript",level:3},{value:"So S\xe1nh C\xe1c Lo\u1ea1i H\xe0m trong JavaScript",id:"so-s\xe1nh-c\xe1c-lo\u1ea1i-h\xe0m-trong-javascript",level:3}];function d(n){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.header,{children:(0,e.jsx)(i.h1,{id:"functions",children:"Functions"})}),"\n",(0,e.jsx)(i.h2,{id:"h\xe0m-functions-trong-javascript",children:"H\xe0m (Functions) trong JavaScript"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["H\xe0m (Function) l\xe0 kh\u1ed1i m\xe3 th\u1ef1c hi\u1ec7n m\u1ed9t nhi\u1ec7m v\u1ee5 c\u1ee5 th\u1ec3 v\xe0 c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c t\xe1i s\u1eed d\u1ee5ng. JavaScript c\xf3 nhi\u1ec1u lo\u1ea1i h\xe0m, m\u1ed7i lo\u1ea1i c\xf3 \u0111\u1eb7c \u0111i\u1ec3m ri\xeang v\u1ec1 ",(0,e.jsx)(i.code,{children:"this"}),", hoisting, v\xe0 c\xe1ch s\u1eed d\u1ee5ng. D\u01b0\u1edbi \u0111\xe2y l\xe0 c\xe1c lo\u1ea1i h\xe0m ph\u1ed5 bi\u1ebfn v\xe0 chi ti\u1ebft t\u1eebng \u0111\u1eb7c \u0111i\u1ec3m c\u1ee7a ch\xfang."]}),"\n"]}),"\n",(0,e.jsx)(i.h3,{id:"c\xe1c-lo\u1ea1i-h\xe0m-trong-javascript",children:"C\xe1c Lo\u1ea1i H\xe0m trong JavaScript"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.em,{children:(0,e.jsx)(i.strong,{children:"Function Declaration"})})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Gi\u1edbi thi\u1ec7u"}),": L\xe0 c\xe1ch khai b\xe1o h\xe0m truy\u1ec1n th\u1ed1ng trong JavaScript. \u0110\u01b0\u1ee3c hoisted n\xean c\xf3 th\u1ec3 g\u1ecdi tr\u01b0\u1edbc khi \u0111\u01b0\u1ee3c khai b\xe1o trong m\xe3."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Hoisting"}),": Function declaration \u0111\u01b0\u1ee3c hoisted l\xean \u0111\u1ea7u ph\u1ea1m vi, ngh\u0129a l\xe0 c\xf3 th\u1ec3 g\u1ecdi h\xe0m tr\u01b0\u1edbc khi khai b\xe1o."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsxs)(i.strong,{children:[(0,e.jsx)(i.code,{children:"this"})," trong Function Declaration"]}),": Gi\xe1 tr\u1ecb c\u1ee7a ",(0,e.jsx)(i.code,{children:"this"})," ph\u1ee5 thu\u1ed9c v\xe0o c\xe1ch h\xe0m \u0111\u01b0\u1ee3c g\u1ecdi, th\u01b0\u1eddng l\xe0 ",(0,e.jsx)(i.code,{children:"undefined"})," trong strict mode ho\u1eb7c tr\u1ecf \u0111\u1ebfn global object (window trong tr\xecnh duy\u1ec7t)."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"C\xfa ph\xe1p"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"function functionName(parameters) {\n    // code to be executed\n}\n"})}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"V\xed d\u1ee5"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:'function greet(name) {\n    return "Hello, " + name + "!";\n}\nconsole.log(greet("Alice")); // In ra "Hello, Alice!"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.em,{children:(0,e.jsx)(i.strong,{children:"Function Expression"})})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Gi\u1edbi thi\u1ec7u"}),": Khai b\xe1o h\xe0m d\u01b0\u1edbi d\u1ea1ng bi\u1ec3u th\u1ee9c, th\u01b0\u1eddng g\xe1n v\xe0o m\u1ed9t bi\u1ebfn. Kh\xf4ng \u0111\u01b0\u1ee3c hoisted, ngh\u0129a l\xe0 kh\xf4ng th\u1ec3 g\u1ecdi tr\u01b0\u1edbc khi khai b\xe1o."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Hoisting"}),": Function expression kh\xf4ng \u0111\u01b0\u1ee3c hoisted, v\xec th\u1ebf c\u1ea7n khai b\xe1o tr\u01b0\u1edbc khi g\u1ecdi."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsxs)(i.strong,{children:[(0,e.jsx)(i.code,{children:"this"})," trong Function Expression"]}),": T\u01b0\u01a1ng t\u1ef1 function declaration, ",(0,e.jsx)(i.code,{children:"this"})," trong function expression ph\u1ee5 thu\u1ed9c v\xe0o c\xe1ch h\xe0m \u0111\u01b0\u1ee3c g\u1ecdi."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"C\xfa ph\xe1p"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const functionName = function(parameters) {\n    // code to be executed\n};\n"})}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"V\xed d\u1ee5"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const add = function(a, b) {\n    return a + b;\n};\nconsole.log(add(5, 3)); // In ra 8\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.em,{children:(0,e.jsx)(i.strong,{children:"Arrow Function"})})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Gi\u1edbi thi\u1ec7u"}),": C\xfa ph\xe1p h\xe0m r\xfat g\u1ecdn, th\xedch h\u1ee3p cho c\xe1c h\xe0m ng\u1eafn g\u1ecdn. Kh\xf4ng c\xf3 ",(0,e.jsx)(i.code,{children:"this"})," ri\xeang m\xe0 k\u1ebf th\u1eeba ",(0,e.jsx)(i.code,{children:"this"})," t\u1eeb ph\u1ea1m vi b\xean ngo\xe0i (lexical ",(0,e.jsx)(i.code,{children:"this"}),"). Kh\xf4ng \u0111\u01b0\u1ee3c hoisted."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Hoisting"}),": Arrow function kh\xf4ng \u0111\u01b0\u1ee3c hoisted n\xean ph\u1ea3i khai b\xe1o tr\u01b0\u1edbc khi g\u1ecdi."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsxs)(i.strong,{children:[(0,e.jsx)(i.code,{children:"this"})," trong Arrow Function"]}),": Arrow function kh\xf4ng c\xf3 ",(0,e.jsx)(i.code,{children:"this"})," ri\xeang, n\xf3 k\u1ebf th\u1eeba ",(0,e.jsx)(i.code,{children:"this"})," t\u1eeb ph\u1ea1m vi b\xean ngo\xe0i. \u0110i\u1ec1u n\xe0y r\u1ea5t h\u1eefu \xedch khi c\u1ea7n truy c\u1eadp ",(0,e.jsx)(i.code,{children:"this"})," trong ng\u1eef c\u1ea3nh c\u1ee7a h\xe0m cha."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"C\xfa ph\xe1p"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const functionName = (parameters) => {\n    // code to be executed\n};\n"})}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"V\xed d\u1ee5"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:'const person = {\n    name: "Alice",\n    sayHello: () => {\n        console.log("Hello, " + this.name);\n    }\n};\nperson.sayHello(); // In ra "Hello, undefined" v\xec `this` tr\u1ecf \u0111\u1ebfn global object, kh\xf4ng tr\u1ecf \u0111\u1ebfn object person\n\nconst person = {\n    name: "Alice",\n    sayHello: () => {\n        console.log("Hello, " + this.name);\n    }\n};\n\nperson.sayHello(); // In ra "Hello, Alice" v\xec `this` tr\u1ecf \u0111\u1ebfn object person\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.em,{children:(0,e.jsx)(i.strong,{children:"Anonymous Function"})})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Gi\u1edbi thi\u1ec7u"}),": H\xe0m kh\xf4ng c\xf3 t\xean, th\u01b0\u1eddng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong c\xe1c tr\u01b0\u1eddng h\u1ee3p kh\xf4ng c\u1ea7n t\xe1i s\u1eed d\u1ee5ng h\xe0m. Kh\xf4ng c\xf3 t\xean n\xean kh\xf4ng th\u1ec3 g\u1ecdi tr\u1ef1c ti\u1ebfp b\u1eb1ng t\xean, ch\u1ec9 c\xf3 th\u1ec3 g\u1ecdi th\xf4ng qua m\u1ed9t bi\u1ebfn ho\u1eb7c trong ng\u1eef c\u1ea3nh nh\u1ea5t \u0111\u1ecbnh."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Hoisting"}),": Anonymous function kh\xf4ng \u0111\u01b0\u1ee3c hoisted v\xec ph\u1ea3i \u0111\u01b0\u1ee3c g\xe1n v\xe0o bi\u1ebfn ho\u1eb7c g\u1ecdi tr\u1ef1c ti\u1ebfp t\u1ea1i ch\u1ed7."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"V\xed d\u1ee5"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:'setTimeout(function() {\n    console.log("This is an anonymous function");\n}, 1000);\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.em,{children:(0,e.jsx)(i.strong,{children:"IIFE (Immediately Invoked Function Expression)"})})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Gi\u1edbi thi\u1ec7u"}),": H\xe0m \u0111\u01b0\u1ee3c khai b\xe1o v\xe0 g\u1ecdi ngay l\u1eadp t\u1ee9c. IIFE th\u01b0\u1eddng \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 t\u1ea1o ph\u1ea1m vi c\u1ee5c b\u1ed9 nh\u1eb1m ng\u0103n xung \u0111\u1ed9t bi\u1ebfn trong m\xe3 JavaScript."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Hoisting"}),": Kh\xf4ng c\xf3 hoisting v\xec \u0111\u01b0\u1ee3c th\u1ef1c thi ngay khi khai b\xe1o."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"C\xfa ph\xe1p"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"(function() {\n    // code to be executed immediately\n})();\n"})}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"V\xed d\u1ee5"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:'(function() {\n    console.log("This is an IIFE");\n})();\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.h3,{id:"so-s\xe1nh-this-trong-c\xe1c-lo\u1ea1i-h\xe0m",children:["So S\xe1nh ",(0,e.jsx)(i.code,{children:"this"})," trong C\xe1c Lo\u1ea1i H\xe0m"]}),"\n",(0,e.jsxs)(i.table,{children:[(0,e.jsx)(i.thead,{children:(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.th,{children:"Lo\u1ea1i H\xe0m"}),(0,e.jsxs)(i.th,{children:["Gi\xe1 tr\u1ecb ",(0,e.jsx)(i.code,{children:"this"})]}),(0,e.jsxs)(i.th,{children:["Ph\u1ea1m vi ",(0,e.jsx)(i.code,{children:"this"})]})]})}),(0,e.jsxs)(i.tbody,{children:[(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:(0,e.jsx)(i.strong,{children:"Function Declaration"})}),(0,e.jsx)(i.td,{children:"Ph\u1ee5 thu\u1ed9c v\xe0o c\xe1ch g\u1ecdi"}),(0,e.jsxs)(i.td,{children:["C\xf3 ",(0,e.jsx)(i.code,{children:"this"})," ri\xeang, x\xe1c \u0111\u1ecbnh khi h\xe0m \u0111\u01b0\u1ee3c g\u1ecdi"]})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:(0,e.jsx)(i.strong,{children:"Function Expression"})}),(0,e.jsx)(i.td,{children:"Ph\u1ee5 thu\u1ed9c v\xe0o c\xe1ch g\u1ecdi"}),(0,e.jsxs)(i.td,{children:["C\xf3 ",(0,e.jsx)(i.code,{children:"this"})," ri\xeang, x\xe1c \u0111\u1ecbnh khi h\xe0m \u0111\u01b0\u1ee3c g\u1ecdi"]})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:(0,e.jsx)(i.strong,{children:"Arrow Function"})}),(0,e.jsxs)(i.td,{children:["K\u1ebf th\u1eeba ",(0,e.jsx)(i.code,{children:"this"})," t\u1eeb ph\u1ea1m vi b\xean ngo\xe0i"]}),(0,e.jsxs)(i.td,{children:["Kh\xf4ng c\xf3 ",(0,e.jsx)(i.code,{children:"this"})," ri\xeang"]})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:(0,e.jsx)(i.strong,{children:"Anonymous Function"})}),(0,e.jsx)(i.td,{children:"Ph\u1ee5 thu\u1ed9c v\xe0o c\xe1ch g\u1ecdi"}),(0,e.jsxs)(i.td,{children:["C\xf3 ",(0,e.jsx)(i.code,{children:"this"})," ri\xeang trong ng\u1eef c\u1ea3nh g\u1ecdi"]})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:(0,e.jsx)(i.strong,{children:"IIFE"})}),(0,e.jsx)(i.td,{children:"Ph\u1ee5 thu\u1ed9c v\xe0o c\xe1ch g\u1ecdi"}),(0,e.jsxs)(i.td,{children:["C\xf3 ",(0,e.jsx)(i.code,{children:"this"})," ri\xeang, x\xe1c \u0111\u1ecbnh t\u1ea1i th\u1eddi \u0111i\u1ec3m g\u1ecdi"]})]})]})]}),"\n",(0,e.jsxs)(i.h3,{id:"v\xed-d\u1ee5-v\u1ec1-hoisting-v\xe0-this",children:["V\xed d\u1ee5 v\u1ec1 Hoisting v\xe0 ",(0,e.jsx)(i.code,{children:"this"})]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Hoisting"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"Function declarations c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c g\u1ecdi tr\u01b0\u1edbc khi ch\xfang \u0111\u01b0\u1ee3c khai b\xe1o."}),"\n",(0,e.jsx)(i.li,{children:"Function expressions v\xe0 arrow functions kh\xf4ng th\u1ec3 \u0111\u01b0\u1ee3c g\u1ecdi tr\u01b0\u1edbc khi khai b\xe1o."}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"// Function Declaration\nconsole.log(sum(2, 3)); // In ra 5 v\xec function declaration \u0111\u01b0\u1ee3c hoisted\n\nfunction sum(a, b) {\n    return a + b;\n}\n\n// Function Expression\nconsole.log(subtract(5, 3)); // L\u1ed7i v\xec function expression kh\xf4ng \u0111\u01b0\u1ee3c hoisted\nconst subtract = function(a, b) {\n    return a - b;\n};\n\n// Arrow Function\nconsole.log(multiply(3, 4)); // L\u1ed7i v\xec arrow function kh\xf4ng \u0111\u01b0\u1ee3c hoisted\nconst multiply = (a, b) => a * b;\n"})}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsxs)(i.strong,{children:["S\u1eed d\u1ee5ng ",(0,e.jsx)(i.code,{children:"this"})]}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["V\u1edbi function declaration v\xe0 function expression, ",(0,e.jsx)(i.code,{children:"this"})," c\xf3 th\u1ec3 thay \u0111\u1ed5i ph\u1ee5 thu\u1ed9c v\xe0o c\xe1ch h\xe0m \u0111\u01b0\u1ee3c g\u1ecdi."]}),"\n",(0,e.jsxs)(i.li,{children:["Arrow functions kh\xf4ng c\xf3 ",(0,e.jsx)(i.code,{children:"this"})," ri\xeang, lu\xf4n s\u1eed d\u1ee5ng ",(0,e.jsx)(i.code,{children:"this"})," t\u1eeb ph\u1ea1m vi b\xean ngo\xe0i."]}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:'// Function Declaration\nfunction showThis() {\n    console.log(this);\n}\nshowThis(); // `this` tr\u1ecf \u0111\u1ebfn global object (ho\u1eb7c undefined trong strict mode)\n\nconst obj = {\n    name: "Alice",\n    showThis: showThis\n};\nobj.showThis(); // `this` tr\u1ecf \u0111\u1ebfn obj v\xec h\xe0m \u0111\u01b0\u1ee3c g\u1ecdi th\xf4ng qua obj\n\n// Arrow Function\nconst person = {\n    name: "Alice",\n    greet: () => {\n        console.log("Hello, " + this.name);\n    }\n};\nperson.greet(); // `this` tr\u1ecf \u0111\u1ebfn global object (ho\u1eb7c undefined trong strict mode) v\xec `this` c\u1ee7a arrow function l\xe0 c\u1ee7a ph\u1ea1m vi b\xean ngo\xe0i\n'})}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.h3,{id:"c\xe1c-t\xednh-n\u0103ng-quan-tr\u1ecdng-c\u1ee7a-h\xe0m-trong-javascript",children:"C\xe1c T\xednh N\u0103ng Quan Tr\u1ecdng c\u1ee7a H\xe0m trong JavaScript"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Tham s\u1ed1 M\u1eb7c \u0111\u1ecbnh (Default Parameters)"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"JavaScript cho ph\xe9p \u0111\u1eb7t gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh cho tham s\u1ed1 trong h\xe0m, gi\xfap tr\xe1nh l\u1ed7i khi thi\u1ebfu \u0111\u1ed1i s\u1ed1 khi g\u1ecdi h\xe0m."}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"V\xed d\u1ee5"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:'function greet(name = "Guest") {\n    return "Hello, " + name;\n}\nconsole.log(greet()); // In ra "Hello, Guest"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Rest Parameters"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"Cho ph\xe9p truy\u1ec1n v\xe0o m\u1ed9t s\u1ed1 l\u01b0\u1ee3ng tham s\u1ed1 kh\xf4ng x\xe1c \u0111\u1ecbnh d\u01b0\u1edbi d\u1ea1ng m\u1ea3ng."}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"V\xed d\u1ee5"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"function sum(...numbers) {\n    return numbers.reduce((total, num) => total + num, 0);\n}\nconsole.log(sum(1, 2, 3, 4)); // In ra 10\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Closures"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"Closure l\xe0 m\u1ed9t h\xe0m c\xf3 th\u1ec3 truy c\u1eadp c\xe1c bi\u1ebfn t\u1eeb ph\u1ea1m vi c\u1ee7a h\xe0m ch\u1ee9a n\xf3 ngay c\u1ea3 khi h\xe0m ch\u1ee9a \u0111\xf3 \u0111\xe3 k\u1ebft th\xfac."}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"V\xed d\u1ee5"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"function outer() {\n    let count = 0;\n    return function() {\n        count++;\n        return count;\n    };\n}\nconst counter = outer();\nconsole.log(counter()); // In ra 1\nconsole.log(counter()); // In ra 2\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.h3,{id:"so-s\xe1nh-c\xe1c-lo\u1ea1i-h\xe0m-trong-javascript",children:"So S\xe1nh C\xe1c Lo\u1ea1i H\xe0m trong JavaScript"}),"\n",(0,e.jsxs)(i.table,{children:[(0,e.jsx)(i.thead,{children:(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.th,{children:"Lo\u1ea1i H\xe0m"}),(0,e.jsx)(i.th,{children:"S\u1eed D\u1ee5ng Khi"}),(0,e.jsx)(i.th,{children:"\u01afu \u0110i\u1ec3m"}),(0,e.jsx)(i.th,{children:"Nh\u01b0\u1ee3c \u0110i\u1ec3m"})]})}),(0,e.jsxs)(i.tbody,{children:[(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:(0,e.jsx)(i.strong,{children:"Function Declaration"})}),(0,e.jsx)(i.td,{children:"C\u1ea7n khai b\xe1o h\xe0m c\xf3 t\xean"}),(0,e.jsx)(i.td,{children:"D\u1ec5 g\u1ecdi \u1edf b\u1ea5t k\u1ef3 \u0111\xe2u trong ph\u1ea1m vi"}),(0,e.jsx)(i.td,{children:"Kh\xf4ng ph\xf9 h\u1ee3p cho c\xe1c h\xe0m ng\u1eafn, \u0111\u01a1n gi\u1ea3n"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:(0,e.jsx)(i.strong,{children:"Function Expression"})}),(0,e.jsx)(i.td,{children:"C\u1ea7n l\u01b0u h\xe0m v\xe0o bi\u1ebfn"}),(0,e.jsx)(i.td,{children:"Linh ho\u1ea1t, d\u1ec5 truy\u1ec1n v\xe0o c\xe1c h\xe0m kh\xe1c"}),(0,e.jsx)(i.td,{children:"Kh\xf4ng th\u1ec3 g\u1ecdi tr\u01b0\u1edbc khi khai b\xe1o"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:(0,e.jsx)(i.strong,{children:"Arrow Function"})}),(0,e.jsxs)(i.td,{children:["C\u1ea7n c\xfa ph\xe1p ng\u1eafn g\u1ecdn, kh\xf4ng c\u1ea7n ",(0,e.jsx)(i.code,{children:"this"})]}),(0,e.jsx)(i.td,{children:"Ng\u1eafn g\u1ecdn, d\u1ec5 \u0111\u1ecdc"}),(0,e.jsxs)(i.td,{children:["Kh\xf4ng c\xf3 ",(0,e.jsx)(i.code,{children:"this"})," ri\xeang n\xean kh\xf4ng ph\xf9 h\u1ee3p v\u1edbi t\u1ea5t c\u1ea3 tr\u01b0\u1eddng h\u1ee3p"]})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:(0,e.jsx)(i.strong,{children:"Anonymous Function"})}),(0,e.jsx)(i.td,{children:"C\u1ea7n d\xf9ng h\xe0m kh\xf4ng t\xe1i s\u1eed d\u1ee5ng"}),(0,e.jsx)(i.td,{children:"Ti\u1ebft ki\u1ec7m c\xfa ph\xe1p, g\u1ecdn nh\u1eb9"}),(0,e.jsx)(i.td,{children:"Kh\xf4ng c\xf3 t\xean n\xean kh\xf3 debug"})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:(0,e.jsx)(i.strong,{children:"IIFE"})}),(0,e.jsx)(i.td,{children:"C\u1ea7n t\u1ea1o ph\u1ea1m vi ri\xeang"}),(0,e.jsx)(i.td,{children:"Ng\u0103n xung \u0111\u1ed9t bi\u1ebfn"}),(0,e.jsx)(i.td,{children:"Kh\xf3 \u0111\u1ecdc n\u1ebfu l\u1ea1m d\u1ee5ng"})]})]})]}),"\n",(0,e.jsx)(i.hr,{})]})}function a(n={}){const{wrapper:i}={...(0,t.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},8453:(n,i,c)=>{c.d(i,{R:()=>r,x:()=>h});var s=c(6540);const e={},t=s.createContext(e);function r(n){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function h(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:r(n.components),s.createElement(t.Provider,{value:i},n.children)}}}]);