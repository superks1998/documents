"use strict";(self.webpackChunkghichu_new=self.webpackChunkghichu_new||[]).push([[3168],{1518:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>i});var c=s(5893),r=s(1151);const t={},o="CSS",l={id:"CSS/css",title:"CSS",description:"S\u1eed d\u1ee5ng CSS \u0111\u1ed9c l\u1eadp trong component",source:"@site/docs/CSS/css.md",sourceDirName:"CSS",slug:"/CSS/",permalink:"/documents/docs/CSS/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CSS/css.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/documents/docs/tutorial-basics/congratulations"},next:{title:"Main Concept",permalink:"/documents/docs/CSS/main-concept"}},a={},i=[{value:"S\u1eed d\u1ee5ng CSS \u0111\u1ed9c l\u1eadp trong component",id:"s\u1eed-d\u1ee5ng-css-\u0111\u1ed9c-l\u1eadp-trong-component",level:2},{value:"CSS module",id:"css-module",level:3},{value:"packages x\u1eed l\xfd className",id:"packages-x\u1eed-l\xfd-classname",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"css",children:"CSS"}),"\n",(0,c.jsx)(e.h2,{id:"s\u1eed-d\u1ee5ng-css-\u0111\u1ed9c-l\u1eadp-trong-component",children:"S\u1eed d\u1ee5ng CSS \u0111\u1ed9c l\u1eadp trong component"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"C\xf3 2 c\xe1ch l\xe0 d\xf9ng Css module v\xe0 packages styled-components."}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"css-module",children:"CSS module"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"- CSS module l\xe0 ch\u1ee9c n\u0103ng c\xf3 s\u1eb5n c\u1ee7a webpack.\r\n- C\xe1ch d\xf9ng l\xe0 \u0111\u1ed5i t\xean file css c\xf3 th\xeam \u0111u\xf4i module r\u1ed3i import v\xe0o component.\r\nVD: import Style from './Style.module.css'\r\n- Style s\u1ebd tr\u1ea3 v\u1ec1 1 Object ch\u1ee9a c\xe1c class \u0111\u01b0\u1ee3c vi\u1ebft trong file css c\u1ee7a n\xf3.\r\nVD: {\r\n    heading: Style_heading_3oX0Z\r\n}\r\n- C\xe1ch s\u1eed d\u1ee5ng l\xe0 d\xf9ng nh\u1eadp className c\u1ee7a component s\u1eed d\u1ee5ng Object className Style tr\u1ea3 v\u1ec1.\r\n- CSS module lu\xf4n \u0111\u1ed5i t\xean file n\xean mu\u1ed1n ch\u1ec9 s\u1eed d\u1ee5ng \u0111\u01b0\u1ee3c v\u1edbi className.\n"})}),"\n",(0,c.jsx)(e.h2,{id:"packages-x\u1eed-l\xfd-classname",children:"packages x\u1eed l\xfd className"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"- C\xf3 2 packages ch\u1ee9c n\u0103ng t\u01b0\u01a1ng t\u1ef1 nhau l\xe0 classnames v\xe0 clsx\r\n\u0111\u1ec3 x\u1eed l\xfd ClassName Css module.\r\n- Clsx c\xf3 th\u1ec3 th\xeam nhi\u1ec1u className CSS module cho 1 element v\u1edbi c\xfa ph\xe1p \u0111\u1eb9p h\u01a1n.\r\n- Install: yarn add clsx.\r\n- C\xfa ph\xe1p: clsx(..input) Return String.\r\n- H\xe0m clsx nh\u1eadn c\xe1c \u0111\u1ed1i s\u1ed1 l\xe0 String, Array, Object\r\nx\u1eed l\xfd \u0111\u1ec3 tr\u1ea3 v\u1ec1 className, c\xe1ch nhau b\u1eb1ng d\u1ea5u ','.\r\n- G\xeda tr\u1ecb false s\u1ebd kh\xf4ng \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb,\r\nObject s\u1ebd in ra key.\r\n- Truy\u1ec1n bi\u1ebfn c\u1ee7a CSS module d\u01b0\u1edbi d\u1ea1ng key Object truy\u1ec1n v\xe0o clsx c\u1ea7n c\xf3 d\u1ea5u '[]'.\r\nVD: clsx({\r\n    foo: true\r\n}, {\r\n    bar: false\r\n}, {\r\n    '--foobar': 'hello'\r\n}) // output: 'foo -foobar'\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",metastring:"title='V\xed d\u1ee5'",children:'// \xe1p d\u1ee5ng \u0111\u1ec3 t\u1ea1o component nh\u1eadn props \u0111\u1ec3 thay \u0111\u1ed5i css.\r\n\r\nimport clsx from "clsx";\r\nimport styles from "./button.module.scss";\r\n\r\nfunction Button({ primary, success, disabled }) {\r\n    const classes = clsx(styles.btn, {\r\n        [styles.primary]: primary,\r\n        [styles.disabled]: disabled,\r\n    });\r\n\r\n    return <button className={classes}>Click me</button>;\r\n}\r\n\r\nexport default Button;\r\n\r\n// button.module.scss\r\n// .btn {\r\n//     padding: 5px 10px;\r\n//     background-color: #ccc;\r\n//     color: brown;\r\n// }\r\n\r\n// .primary {\r\n//     background-color: #007bfe;\r\n// }\r\n\r\n// .disabled {\r\n//     opacity: 0.5;\r\n//     pointer-events: none;\r\n// }\n'})})]})}function u(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>l,a:()=>o});var c=s(7294);const r={},t=c.createContext(r);function o(n){const e=c.useContext(t);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),c.createElement(t.Provider,{value:e},n.children)}}}]);