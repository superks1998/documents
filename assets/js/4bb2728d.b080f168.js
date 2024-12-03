"use strict";(self.webpackChunkghichu_new=self.webpackChunkghichu_new||[]).push([[8514],{5525:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"Javascript/Basic/string","title":"Strings","description":"JavaScript Strings","source":"@site/docs/web/Javascript/Basic/string.md","sourceDirName":"Javascript/Basic","slug":"/Javascript/Basic/string","permalink":"/documents/web/Javascript/Basic/string","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web/Javascript/Basic/string.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"JSON","permalink":"/documents/web/Javascript/Basic/json"},"next":{"title":"Tham chi\u1ebfu","permalink":"/documents/web/Javascript/Advanced/Data-State/thamchieu"}}');var i=c(4848),t=c(8453);const l={},r="Strings",a={},h=[{value:"JavaScript Strings",id:"javascript-strings",level:2},{value:"C\xe1c T\u1ea1o String trong JavaScript",id:"c\xe1c-t\u1ea1o-string-trong-javascript",level:3},{value:"T\xednh Ch\u1ea5t C\u01a1 B\u1ea3n c\u1ee7a Strings",id:"t\xednh-ch\u1ea5t-c\u01a1-b\u1ea3n-c\u1ee7a-strings",level:3},{value:"C\xe1c Ph\u01b0\u01a1ng Th\u1ee9c String Quan Tr\u1ecdng",id:"c\xe1c-ph\u01b0\u01a1ng-th\u1ee9c-string-quan-tr\u1ecdng",level:3},{value:"Concatenation (N\u1ed1i Chu\u1ed7i)",id:"concatenation-n\u1ed1i-chu\u1ed7i",level:3},{value:"Template Literals",id:"template-literals",level:3},{value:"Escape Characters",id:"escape-characters",level:3}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"strings",children:"Strings"})}),"\n",(0,i.jsx)(e.h2,{id:"javascript-strings",children:"JavaScript Strings"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["String trong JavaScript l\xe0 m\u1ed9t ki\u1ec3u d\u1eef li\u1ec7u chu\u1ed7i \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 l\u01b0u tr\u1eef v\xe0 thao t\xe1c v\u1edbi v\u0103n b\u1ea3n. Strings trong JavaScript c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c t\u1ea1o b\u1eb1ng d\u1ea5u nh\xe1y \u0111\u01a1n (",(0,i.jsx)(e.code,{children:"'"}),"), nh\xe1y k\xe9p (",(0,i.jsx)(e.code,{children:'"'}),"), ho\u1eb7c d\u1ea5u nh\xe1y ng\u01b0\u1ee3c (",(0,i.jsx)(e.code,{children:"`"}),")."]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"c\xe1c-t\u1ea1o-string-trong-javascript",children:"C\xe1c T\u1ea1o String trong JavaScript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"JavaScript cho ph\xe9p t\u1ea1o chu\u1ed7i theo nhi\u1ec1u c\xe1ch:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"D\xf9ng d\u1ea5u nh\xe1y \u0111\u01a1n ho\u1eb7c nh\xe1y k\xe9p"}),": \u0110\xe2y l\xe0 c\xe1ch ph\u1ed5 bi\u1ebfn v\xe0 \u0111\u01a1n gi\u1ea3n nh\u1ea5t \u0111\u1ec3 khai b\xe1o chu\u1ed7i."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"let greeting = \"Hello, World!\";\nlet name = 'John Doe';\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"D\xf9ng d\u1ea5u nh\xe1y ng\u01b0\u1ee3c (Template Literals)"}),": C\xe1ch n\xe0y cho ph\xe9p nh\xfang bi\u1ebfn v\xe0 bi\u1ec3u th\u1ee9c v\xe0o chu\u1ed7i m\xe0 kh\xf4ng c\u1ea7n ph\xe9p n\u1ed1i (concatenation)."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"let age = 25;\nlet message = `John is ${age} years old.`;\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"t\xednh-ch\u1ea5t-c\u01a1-b\u1ea3n-c\u1ee7a-strings",children:"T\xednh Ch\u1ea5t C\u01a1 B\u1ea3n c\u1ee7a Strings"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Chu\u1ed7i c\xf3 th\u1ec3 c\xf3 \u0111\u1ed9 d\xe0i b\u1eb1ng 0"})," (string r\u1ed7ng) ho\u1eb7c c\xf3 \u0111\u1ed9 d\xe0i l\u1edbn h\u01a1n 0, l\u01b0u tr\u1eef c\xe1c k\xfd t\u1ef1 Unicode."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Strings l\xe0 b\u1ea5t bi\u1ebfn"}),": M\u1ed9t khi \u0111\u01b0\u1ee3c t\u1ea1o, chu\u1ed7i kh\xf4ng th\u1ec3 thay \u0111\u1ed5i n\u1ed9i dung. C\xe1c thao t\xe1c tr\xean chu\u1ed7i s\u1ebd t\u1ea1o ra m\u1ed9t chu\u1ed7i m\u1edbi."]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"c\xe1c-ph\u01b0\u01a1ng-th\u1ee9c-string-quan-tr\u1ecdng",children:"C\xe1c Ph\u01b0\u01a1ng Th\u1ee9c String Quan Tr\u1ecdng"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"JavaScript cung c\u1ea5p nhi\u1ec1u ph\u01b0\u01a1ng th\u1ee9c gi\xfap thao t\xe1c v\u1edbi chu\u1ed7i d\u1ec5 d\xe0ng:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"length"})}),": Tr\u1ea3 v\u1ec1 \u0111\u1ed9 d\xe0i c\u1ee7a chu\u1ed7i."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let text = "Hello";\nconsole.log(text.length); // Output: 5\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"toUpperCase()"})})," v\xe0 ",(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"toLowerCase()"})}),": Chuy\u1ec3n \u0111\u1ed5i chu\u1ed7i th\xe0nh ch\u1eef hoa ho\u1eb7c ch\u1eef th\u01b0\u1eddng."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let word = "Hello";\nconsole.log(word.toUpperCase()); // Output: "HELLO"\nconsole.log(word.toLowerCase()); // Output: "hello"\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"includes(substring)"})}),": Ki\u1ec3m tra xem m\u1ed9t chu\u1ed7i c\xf3 ch\u1ee9a m\u1ed9t chu\u1ed7i con kh\xf4ng."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let phrase = "JavaScript is fun";\nconsole.log(phrase.includes("fun")); // Output: true\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"indexOf(substring)"})})," v\xe0 ",(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"lastIndexOf(substring)"})}),": T\xecm v\u1ecb tr\xed xu\u1ea5t hi\u1ec7n \u0111\u1ea7u ti\xean ho\u1eb7c cu\u1ed1i c\xf9ng c\u1ee7a m\u1ed9t chu\u1ed7i con."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let sentence = "Hello, world!";\nconsole.log(sentence.indexOf("world")); // Output: 7\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"slice(start, end)"})}),": L\u1ea5y m\u1ed9t ph\u1ea7n c\u1ee7a chu\u1ed7i t\u1eeb ",(0,i.jsx)(e.code,{children:"start"})," \u0111\u1ebfn ",(0,i.jsx)(e.code,{children:"end"})," (kh\xf4ng bao g\u1ed3m ",(0,i.jsx)(e.code,{children:"end"}),")."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let text = "JavaScript";\nconsole.log(text.slice(0, 4)); // Output: "Java"\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"replace(search, replacement)"})}),": Thay th\u1ebf chu\u1ed7i con \u0111\u1ea7u ti\xean t\xecm th\u1ea5y."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let phrase = "Hello, World!";\nconsole.log(phrase.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"substring(start, end)"})}),": L\u1ea5y chu\u1ed7i con t\u1eeb ",(0,i.jsx)(e.code,{children:"start"})," \u0111\u1ebfn ",(0,i.jsx)(e.code,{children:"end"})," (kh\xf4ng bao g\u1ed3m ",(0,i.jsx)(e.code,{children:"end"}),"). Kh\xe1c v\u1edbi ",(0,i.jsx)(e.code,{children:"slice"}),", ",(0,i.jsx)(e.code,{children:"substring"})," kh\xf4ng nh\u1eadn ch\u1ec9 s\u1ed1 \xe2m."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let text = "JavaScript";\nconsole.log(text.substring(0, 4)); // Output: "Java"\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"concat()"})}),": N\u1ed1i hai ho\u1eb7c nhi\u1ec1u chu\u1ed7i v\u1edbi nhau."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let greeting = "Hello";\nlet name = "Alice";\nconsole.log(greeting.concat(", ", name)); // Output: "Hello, Alice"\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"trim()"})}),": Lo\u1ea1i b\u1ecf kho\u1ea3ng tr\u1eafng \u1edf \u0111\u1ea7u v\xe0 cu\u1ed1i chu\u1ed7i."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let str = "   Hello, World!   ";\nconsole.log(str.trim()); // Output: "Hello, World!"\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"padStart(targetLength, padString)"})})," v\xe0 ",(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"padEnd(targetLength, padString)"})}),": Th\xeam k\xfd t\u1ef1 v\xe0o \u0111\u1ea7u ho\u1eb7c cu\u1ed1i chu\u1ed7i \u0111\u1ec3 \u0111\u1ea1t \u0111\u1ed9 d\xe0i mong mu\u1ed1n."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let num = "5";\nconsole.log(num.padStart(3, "0")); // Output: "005"\nconsole.log(num.padEnd(3, "0")); // Output: "500"\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"split(separator)"})}),": Chia chu\u1ed7i th\xe0nh m\u1ea3ng d\u1ef1a tr\xean k\xfd t\u1ef1 ph\xe2n c\xe1ch."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let text = "JavaScript is awesome";\nconsole.log(text.split(" ")); // Output: ["JavaScript", "is", "awesome"]\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"repeat(count)"})}),": L\u1eb7p l\u1ea1i chu\u1ed7i v\u1edbi s\u1ed1 l\u1ea7n ",(0,i.jsx)(e.code,{children:"count"})," x\xe1c \u0111\u1ecbnh."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let word = "Hi ";\nconsole.log(word.repeat(3)); // Output: "Hi Hi Hi "\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"startsWith(substring)"})})," v\xe0 ",(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"endsWith(substring)"})}),": Ki\u1ec3m tra chu\u1ed7i c\xf3 b\u1eaft \u0111\u1ea7u ho\u1eb7c k\u1ebft th\xfac b\u1eb1ng chu\u1ed7i con c\u1ee5 th\u1ec3 kh\xf4ng."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let text = "Hello, World!";\nconsole.log(text.startsWith("Hello")); // Output: true\nconsole.log(text.endsWith("World!")); // Output: true\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"charAt(index)"})}),": Tr\u1ea3 v\u1ec1 k\xfd t\u1ef1 t\u1ea1i v\u1ecb tr\xed ",(0,i.jsx)(e.code,{children:"index"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let text = "JavaScript";\nconsole.log(text.charAt(3)); // Output: "a"\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"charCodeAt(index)"})}),": Tr\u1ea3 v\u1ec1 m\xe3 Unicode c\u1ee7a k\xfd t\u1ef1 t\u1ea1i v\u1ecb tr\xed ",(0,i.jsx)(e.code,{children:"index"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let text = "JavaScript";\nconsole.log(text.charCodeAt(3)); // Output: 97 (Unicode c\u1ee7a "a")\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"match(regex)"})}),": T\xecm v\xe0 tr\u1ea3 v\u1ec1 m\u1ea3ng c\xe1c chu\u1ed7i kh\u1edbp v\u1edbi bi\u1ec3u th\u1ee9c ch\xednh quy."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let text = "JavaScript is fun";\nconsole.log(text.match(/is/g)); // Output: ["is"]\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"search(regex)"})}),": T\xecm v\u1ecb tr\xed \u0111\u1ea7u ti\xean c\u1ee7a chu\u1ed7i kh\u1edbp v\u1edbi bi\u1ec3u th\u1ee9c ch\xednh quy."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let text = "JavaScript is fun";\nconsole.log(text.search(/fun/)); // Output: 15\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"concatenation-n\u1ed1i-chu\u1ed7i",children:"Concatenation (N\u1ed1i Chu\u1ed7i)"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Chu\u1ed7i c\xf3 th\u1ec3 n\u1ed1i v\u1edbi nhau b\u1eb1ng to\xe1n t\u1eed ",(0,i.jsx)(e.code,{children:"+"})," ho\u1eb7c ",(0,i.jsx)(e.code,{children:"+="}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let greeting = "Hello, ";\nlet name = "Alice";\nconsole.log(greeting + name); // Output: "Hello, Alice"\n'})}),"\n",(0,i.jsx)(e.h3,{id:"template-literals",children:"Template Literals"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Template literals (d\u1ea5u nh\xe1y ng\u01b0\u1ee3c ",(0,i.jsx)(e.strong,{children:"`"}),") cho ph\xe9p nh\xfang bi\u1ebfn v\xe0 bi\u1ec3u th\u1ee9c v\xe0o chu\u1ed7i m\u1ed9t c\xe1ch d\u1ec5 d\xe0ng."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let user = "John";\nlet age = 30;\nlet message = `User ${user} is ${age} years old.`;\nconsole.log(message); // Output: "User John is 30 years old."\n'})}),"\n",(0,i.jsx)(e.h3,{id:"escape-characters",children:"Escape Characters"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u0110\u1ec3 hi\u1ec3n th\u1ecb c\xe1c k\xfd t\u1ef1 \u0111\u1eb7c bi\u1ec7t nh\u01b0 d\u1ea5u nh\xe1y (",(0,i.jsx)(e.code,{children:'"'}),", ",(0,i.jsx)(e.code,{children:"'"}),"), d\u1ea5u xu\u1ed1ng d\xf2ng (",(0,i.jsx)(e.code,{children:"\\n"}),"), ho\u1eb7c d\u1ea5u g\u1ea1ch ch\xe9o ng\u01b0\u1ee3c (",(0,i.jsx)(e.code,{children:"\\\\"}),"), c\u1ea7n s\u1eed d\u1ee5ng k\xfd t\u1ef1 escape."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'let text = "She said, \\"Hello!\\"";\nlet multiline = "This is line 1.\\nThis is line 2.";\n'})})]})}function o(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,c)=>{c.d(e,{R:()=>l,x:()=>r});var s=c(6540);const i={},t=s.createContext(i);function l(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);