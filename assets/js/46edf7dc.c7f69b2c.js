"use strict";(self.webpackChunkghichu_new=self.webpackChunkghichu_new||[]).push([[7352],{8338:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>h,contentTitle:()=>t,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"Javascript/Basic New/json","title":"JSON","description":"JSON trong JavaScript","source":"@site/docs/web/Javascript/Basic New/json.md","sourceDirName":"Javascript/Basic New","slug":"/Javascript/Basic New/json","permalink":"/documents/web/Javascript/Basic New/json","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web/Javascript/Basic New/json.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"DOM Manipulation","permalink":"/documents/web/Javascript/Basic New/D.O.M/"},"next":{"title":"Numbers","permalink":"/documents/web/Javascript/Basic New/number"}}');var s=c(4848),r=c(8453);const l={},t="JSON",h={},a=[{value:"JSON trong JavaScript",id:"json-trong-javascript",level:2},{value:"1. \u0110\u1eb7c \u0111i\u1ec3m c\u1ee7a JSON",id:"1-\u0111\u1eb7c-\u0111i\u1ec3m-c\u1ee7a-json",level:3},{value:"2. C\u1ea5u tr\xfac JSON",id:"2-c\u1ea5u-tr\xfac-json",level:3},{value:"V\xed d\u1ee5 v\u1ec1 c\u1ea5u tr\xfac JSON",id:"v\xed-d\u1ee5-v\u1ec1-c\u1ea5u-tr\xfac-json",level:4},{value:"3. JSON v\xe0 JavaScript",id:"3-json-v\xe0-javascript",level:3},{value:"4. JSON.stringify()",id:"4-jsonstringify",level:3},{value:"5. JSON.parse()",id:"5-jsonparse",level:3},{value:"6. L\u01b0u \xfd khi l\xe0m vi\u1ec7c v\u1edbi JSON",id:"6-l\u01b0u-\xfd-khi-l\xe0m-vi\u1ec7c-v\u1edbi-json",level:3},{value:"7. V\xed d\u1ee5 T\u1ed5ng H\u1ee3p",id:"7-v\xed-d\u1ee5-t\u1ed5ng-h\u1ee3p",level:3}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"json",children:"JSON"})}),"\n",(0,s.jsx)(e.h2,{id:"json-trong-javascript",children:"JSON trong JavaScript"}),"\n",(0,s.jsx)(e.p,{children:"JSON (JavaScript Object Notation) l\xe0 m\u1ed9t \u0111\u1ecbnh d\u1ea1ng d\u1eef li\u1ec7u nh\u1eb9, d\u1ec5 \u0111\u1ecdc, th\u01b0\u1eddng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 trao \u0111\u1ed5i d\u1eef li\u1ec7u gi\u1eefa m\xe1y kh\xe1ch (client) v\xe0 m\xe1y ch\u1ee7 (server). JSON c\xf3 c\u1ea5u tr\xfac r\u1ea5t gi\u1ed1ng v\u1edbi \u0111\u1ed1i t\u01b0\u1ee3ng trong JavaScript, gi\xfap n\xf3 tr\u1edf n\xean ph\u1ed5 bi\u1ebfn trong vi\u1ec7c l\u01b0u tr\u1eef v\xe0 truy\u1ec1n d\u1eef li\u1ec7u."}),"\n",(0,s.jsx)(e.h3,{id:"1-\u0111\u1eb7c-\u0111i\u1ec3m-c\u1ee7a-json",children:"1. \u0110\u1eb7c \u0111i\u1ec3m c\u1ee7a JSON"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u0110\u1ecbnh d\u1ea1ng v\u0103n b\u1ea3n"}),": JSON l\xe0 m\u1ed9t chu\u1ed7i v\u0103n b\u1ea3n, do \u0111\xf3 n\xf3 c\xf3 th\u1ec3 d\u1ec5 d\xe0ng g\u1eedi qua m\u1ea1ng."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"C\u1ea5u tr\xfac \u0111\u01a1n gi\u1ea3n"}),": JSON ch\u1ec9 bao g\u1ed3m c\xe1c c\u1eb7p kh\xf3a-gi\xe1 tr\u1ecb v\xe0 c\xe1c m\u1ea3ng (arrays) c\u1ee7a ch\xfang."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"T\u01b0\u01a1ng th\xedch v\u1edbi nhi\u1ec1u ng\xf4n ng\u1eef"}),": H\u1ea7u h\u1ebft c\xe1c ng\xf4n ng\u1eef l\u1eadp tr\xecnh hi\u1ec7n \u0111\u1ea1i \u0111\u1ec1u h\u1ed7 tr\u1ee3 JSON."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"2-c\u1ea5u-tr\xfac-json",children:"2. C\u1ea5u tr\xfac JSON"}),"\n",(0,s.jsx)(e.p,{children:"JSON c\xf3 th\u1ec3 ch\u1ee9a c\xe1c lo\u1ea1i d\u1eef li\u1ec7u sau:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"S\u1ed1"}),": ",(0,s.jsx)(e.code,{children:"10"}),", ",(0,s.jsx)(e.code,{children:"3.14"})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Chu\u1ed7i"}),": ",(0,s.jsx)(e.code,{children:'"Xin ch\xe0o"'})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Gi\xe1 tr\u1ecb boolean"}),": ",(0,s.jsx)(e.code,{children:"true"})," ho\u1eb7c ",(0,s.jsx)(e.code,{children:"false"})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"M\u1ea3ng"}),": ",(0,s.jsx)(e.code,{children:"[1, 2, 3]"})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u0110\u1ed1i t\u01b0\u1ee3ng"}),": ",(0,s.jsx)(e.code,{children:'{ "name": "Alice", "age": 25 }'})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Gi\xe1 tr\u1ecb null"}),": ",(0,s.jsx)(e.code,{children:"null"})]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"v\xed-d\u1ee5-v\u1ec1-c\u1ea5u-tr\xfac-json",children:"V\xed d\u1ee5 v\u1ec1 c\u1ea5u tr\xfac JSON"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n    "name": "Alice",\n    "age": 25,\n    "isStudent": false,\n    "subjects": ["Math", "Science", "History"],\n    "address": {\n        "city": "New York",\n        "zip": "10001"\n    }\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"3-json-v\xe0-javascript",children:"3. JSON v\xe0 JavaScript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Trong JavaScript, JSON th\u01b0\u1eddng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng khi l\xe0m vi\u1ec7c v\u1edbi d\u1eef li\u1ec7u t\u1eeb API ho\u1eb7c khi c\u1ea7n chuy\u1ec3n \u0111\u1ed5i \u0111\u1ed1i t\u01b0\u1ee3ng JavaScript th\xe0nh chu\u1ed7i v\u0103n b\u1ea3n."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"C\xe1c ph\u01b0\u01a1ng th\u1ee9c l\xe0m vi\u1ec7c v\u1edbi JSON trong JavaScript:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"JSON.stringify()"}),": Chuy\u1ec3n \u0111\u1ed5i m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng JavaScript th\xe0nh chu\u1ed7i JSON."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"JSON.parse()"}),": Ph\xe2n t\xedch m\u1ed9t chu\u1ed7i JSON v\xe0 chuy\u1ec3n \u0111\u1ed5i th\xe0nh \u0111\u1ed1i t\u01b0\u1ee3ng JavaScript."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"4-jsonstringify",children:"4. JSON.stringify()"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"M\u1ee5c \u0111\xedch"}),": Chuy\u1ec3n \u0111\u1ed5i \u0111\u1ed1i t\u01b0\u1ee3ng JavaScript th\xe0nh chu\u1ed7i JSON \u0111\u1ec3 d\u1ec5 d\xe0ng l\u01b0u tr\u1eef ho\u1eb7c truy\u1ec1n qua m\u1ea1ng."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"C\xfa ph\xe1p"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"JSON.stringify(value, replacer, space);\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"value"}),": \u0110\u1ed1i t\u01b0\u1ee3ng c\u1ea7n chuy\u1ec3n \u0111\u1ed5i."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"replacer (t\xf9y ch\u1ecdn)"}),": H\xe0m ho\u1eb7c m\u1ea3ng d\xf9ng \u0111\u1ec3 l\u1ecdc c\xe1c thu\u1ed9c t\xednh s\u1ebd \u0111\u01b0\u1ee3c th\xeam v\xe0o chu\u1ed7i JSON."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"space (t\xf9y ch\u1ecdn)"}),": S\u1ed1 l\u01b0\u1ee3ng kho\u1ea3ng tr\u1eafng \u0111\u1ec3 th\u1ee5t d\xf2ng, gi\xfap cho chu\u1ed7i JSON d\u1ec5 \u0111\u1ecdc h\u01a1n."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"V\xed d\u1ee5"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'Sao ch\xe9p m\xe3\nconst person = {\n    name: "Alice",\n    age: 25,\n    isStudent: false,\n    subjects: ["Math", "Science"]\n};\n\nconst jsonString = JSON.stringify(person);\nconsole.log(jsonString); // In ra: {"name":"Alice","age":25,"isStudent":false,"subjects":["Math","Science"]}\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"V\u1edbi space"}),":","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'const jsonStringPretty = JSON.stringify(person, null, 2);\nconsole.log(jsonStringPretty);\n// In ra chu\u1ed7i JSON th\u1ee5t d\xf2ng:\n// {\n//   "name": "Alice",\n//   "age": 25,\n//   "isStudent": false,\n//   "subjects": ["Math", "Science"]\n// }\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"5-jsonparse",children:"5. JSON.parse()"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"M\u1ee5c \u0111\xedch"}),": Chuy\u1ec3n \u0111\u1ed5i chu\u1ed7i JSON th\xe0nh \u0111\u1ed1i t\u01b0\u1ee3ng JavaScript \u0111\u1ec3 d\u1ec5 d\xe0ng thao t\xe1c."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"C\xfa ph\xe1p"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"JSON.parse(text, reviver);\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"text"}),": Chu\u1ed7i JSON c\u1ea7n ph\xe2n t\xedch."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"reviver (t\xf9y ch\u1ecdn)"}),": H\xe0m x\u1eed l\xfd t\u1eebng c\u1eb7p kh\xf3a-gi\xe1 tr\u1ecb, c\xf3 th\u1ec3 ch\u1ec9nh s\u1eeda gi\xe1 tr\u1ecb tr\u01b0\u1edbc khi tr\u1ea3 v\u1ec1."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"V\xed d\u1ee5"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'const jsonString = \'{"name":"Alice","age":25,"isStudent":false}\';\nconst personObj = JSON.parse(jsonString);\n\nconsole.log(personObj.name); // In ra: Alice\nconsole.log(personObj.age);  // In ra: 25\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"6-l\u01b0u-\xfd-khi-l\xe0m-vi\u1ec7c-v\u1edbi-json",children:"6. L\u01b0u \xfd khi l\xe0m vi\u1ec7c v\u1edbi JSON"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"JSON kh\xf4ng h\u1ed7 tr\u1ee3 c\xe1c thu\u1ed9c t\xednh h\xe0m ho\u1eb7c kh\xf4ng ph\u1ea3i d\u1eef li\u1ec7u: Ch\u1ec9 ch\u1ee9a \u0111\u01b0\u1ee3c d\u1eef li\u1ec7u, kh\xf4ng ch\u1ee9a \u0111\u01b0\u1ee3c h\xe0m hay c\xe1c thu\u1ed9c t\xednh kh\xf4ng ph\u1ea3i d\u1eef li\u1ec7u."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'const person = {\n    name: "Alice",\n    age: 25,\n    greet: function() { console.log("Hello!"); }\n};\n\nconst jsonString = JSON.stringify(person);\nconsole.log(jsonString); \n// In ra: {"name":"Alice","age":25}, thu\u1ed9c t\xednh greet kh\xf4ng \u0111\u01b0\u1ee3c th\xeam v\xe0o\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"JSON kh\xf4ng h\u1ed7 tr\u1ee3 undefined: N\u1ebfu m\u1ed9t thu\u1ed9c t\xednh c\xf3 gi\xe1 tr\u1ecb l\xe0 undefined, n\xf3 s\u1ebd b\u1ecb lo\u1ea1i b\u1ecf khi chuy\u1ec3n \u0111\u1ed5i th\xe0nh JSON."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'Sao ch\xe9p m\xe3\nconst person = {\n    name: "Alice",\n    age: undefined\n};\n\nconst jsonString = JSON.stringify(person);\nconsole.log(jsonString); \n// In ra: {"name":"Alice"}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"7-v\xed-d\u1ee5-t\u1ed5ng-h\u1ee3p",children:"7. V\xed d\u1ee5 T\u1ed5ng H\u1ee3p"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Gi\u1ea3 s\u1eed ch\xfang ta c\xf3 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng ng\u01b0\u1eddi d\xf9ng v\xe0 mu\u1ed1n chuy\u1ec3n \u0111\u1ed1i t\u01b0\u1ee3ng n\xe0y th\xe0nh JSON \u0111\u1ec3 l\u01b0u tr\u1eef trong c\u01a1 s\u1edf d\u1eef li\u1ec7u v\xe0 sau \u0111\xf3 chuy\u1ec3n l\u1ea1i th\xe0nh \u0111\u1ed1i t\u01b0\u1ee3ng JavaScript \u0111\u1ec3 s\u1eed d\u1ee5ng."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'Sao ch\xe9p m\xe3\n// \u0110\u1ed1i t\u01b0\u1ee3ng JavaScript\nconst user = {\n    id: 1,\n    username: "alice123",\n    email: "alice@example.com",\n    roles: ["user", "admin"],\n    isActive: true\n};\n\n// Chuy\u1ec3n \u0111\u1ed1i t\u01b0\u1ee3ng th\xe0nh chu\u1ed7i JSON\nconst jsonUser = JSON.stringify(user);\nconsole.log("Chu\u1ed7i JSON:", jsonUser); \n// In ra: {"id":1,"username":"alice123","email":"alice@example.com","roles":["user","admin"],"isActive":true}\n\n// Gi\u1ea3 s\u1eed ch\xfang ta nh\u1eadn chu\u1ed7i JSON t\u1eeb server v\xe0 mu\u1ed1n s\u1eed d\u1ee5ng trong \u1ee9ng d\u1ee5ng\nconst parsedUser = JSON.parse(jsonUser);\nconsole.log("\u0110\u1ed1i t\u01b0\u1ee3ng JavaScript:", parsedUser);\n// In ra: { id: 1, username: "alice123", email: "alice@example.com", roles: ["user", "admin"], isActive: true }\n'})}),"\n"]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,c)=>{c.d(e,{R:()=>l,x:()=>t});var i=c(6540);const s={},r=i.createContext(s);function l(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);