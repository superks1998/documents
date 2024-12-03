"use strict";(self.webpackChunkghichu_new=self.webpackChunkghichu_new||[]).push([[6894],{2476:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"Git/Git","title":"Git","description":"C\xe1c kh\xe1i ni\u1ec7m","source":"@site/docs/web/Git/Git.md","sourceDirName":"Git","slug":"/Git/","permalink":"/documents/web/Git/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web/Git/Git.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Property Important","permalink":"/documents/web/CSS/property-important"},"next":{"title":"Main Concept","permalink":"/documents/web/HTML/main-concept"}}');var c=n(4848),h=n(8453);const a={},r="Git",s={},l=[{value:"C\xe1c kh\xe1i ni\u1ec7m",id:"c\xe1c-kh\xe1i-ni\u1ec7m",level:2},{value:"Git config",id:"git-config",level:2},{value:"Git remote",id:"git-remote",level:2},{value:"Git pull: (H\u1ee3p nh\u1ea5t t\u1eeb xa)",id:"git-pull-h\u1ee3p-nh\u1ea5t-t\u1eeb-xa",level:2},{value:"Git stash",id:"git-stash",level:2},{value:"Git rebase: (H\u1ee3p nh\u1ea5t code)",id:"git-rebase-h\u1ee3p-nh\u1ea5t-code",level:2}];function o(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,h.R)(),...t.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"git",children:"Git"})}),"\n",(0,c.jsx)(e.h2,{id:"c\xe1c-kh\xe1i-ni\u1ec7m",children:"C\xe1c kh\xe1i ni\u1ec7m"}),"\n",(0,c.jsx)(e.h2,{id:"git-config",children:"Git config"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:'$ git config --g user.name "Dev name"\n$ git config --g user.email "Dev email"\n$ git config --list\n\n'})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u0110\u1ecbnh c\u1ea5u h\xecnh c\xe1c bi\u1ebfn c\u1ea5u h\xecnh chung \u2013 N\u1ebfu b\u1ea1n \u0111ang l\xe0m vi\u1ec7c v\u1edbi c\xe1c developer kh\xe1c, b\u1ea1n s\u1ebd c\u1ea7n bi\u1ebft ai \u0111ang ki\u1ec3m tra m\xe3 xu\u1ea5t nh\u1eadp v\xe0 th\u1ef1c hi\u1ec7n thay \u0111\u1ed5i."}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"git-remote",children:"Git remote"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"$ git remote add origin https... <url>\xa0- Li\xean k\u1ebft \u0111\u1ebfn remote repository (local & GitHub)\n$ git remote set-url <name> <new url>\xa0- Thay \u0111\u1ed5i \u0111\u1ecba ch\u1ec9 c\u1ee7a remote repository \u0111\xe3 Li\xean k\u1ebft v\xe0o \u0111\u1ecba ch\u1ec9 c\u1ee7a <new url>.\n$ git remote rename <old> <new>\xa0- Thay \u0111\u1ed5i t\xean c\u1ee7a remote repository \u0111\xe3 Li\xean k\u1ebft.\n"})}),"\n",(0,c.jsx)(e.h2,{id:"git-pull-h\u1ee3p-nh\u1ea5t-t\u1eeb-xa",children:"Git pull: (H\u1ee3p nh\u1ea5t t\u1eeb xa)"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"$ git pull origin main\xa0- Git pull k\xe9o t\u1ea5t c\u1ea3 c\xe1c thay \u0111\u1ed5i t\u1eeb main v\u1ec1 local.\n$ git pull\xa0- Git pull k\xe9o t\u1ea5t c\u1ea3 c\xe1c thay \u0111\u1ed5i t\u1eeb branch_mane v\u1ec1 local.\n$ git pull origin\xa0- Git pull k\xe9o t\u1ea5t c\u1ea3 c\xe1c thay \u0111\u1ed5i t\u1eeb kho l\u01b0u tr\u1eef t\u1eeb xa v\xe0o branch b\u1ea1n \u0111ang l\xe0m vi\u1ec7c. (pull l\xe0 s\u1ef1 k\u1ebft h\u1ee3p c\u1ee7a 2 l\u1ec7nh kh\xe1c nhau: fetch v\xe0 merge)\n$ git pull --rebase\xa0(C\xe1ch pull ch\u1ed1ng xung \u0111\u1ed9t)\n\n"})}),"\n",(0,c.jsx)(e.h2,{id:"git-stash",children:"Git stash"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"$ git stash save #\xa0Ho\u1eb7c\xa0$ git stash\xa0- L\u01b0u l\u1ea1i c\xf4ng vi\u1ec7c \u0111ang l\xe0m \u1edf branch n\xe0y \u0111\u1ec3 chuy\u1ec3n sang branch kh\xe1c (Khi b\u1ea1n ch\u01b0a mu\u1ed1n commit code)\n$ git stash pop\xa0- K\xe9o working tree c\u1ee7a b\u1ea1n \u0111\xe3 l\u01b0u v\xe0o stash g\u1ea7n nh\u1ea5t ra\n$ git stash list\xa0- Xem l\u1ea1i l\u1ecbch s\u1eed thay \u0111\u1ed5i.\n$ git stash show stash@{n}\xa0- Xem l\u1ea1i l\u1ecbch s\u1eed thay \u0111\u1ed5i c\u1ee5 th\u1ec3 c\u1ee7a l\u1ea7n stash save{n}.\n$ git stash apply stash@{1}\xa0- Apply thay \u0111\u1ed5i c\u1ee7a l\u1ea7n stash save{n}.\n$ git stash clear\xa0- Xo\xe1 to\xe0n b\u1ed9 stash.\n\n"})}),"\n",(0,c.jsx)(e.h2,{id:"git-rebase-h\u1ee3p-nh\u1ea5t-code",children:"Git rebase: (H\u1ee3p nh\u1ea5t code)"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"$ git checkout branch_mane1 - Di chuy\u1ec3n v\u1ec1 nh\xe1nh nh\u1eadn s\u1ef1 h\u1ee3p nh\u1ea5t.\n$ git rebase branch_mane2\xa0(Code t\u1eeb branch_mane2 \u0111\u01b0\u1ee3c h\u1ee3p nh\u1ea5t v\xe0o branch_mane1) - Ti\u1ebfn h\xe0nh h\u1ee3p nh\u1ea5t\n- Git rebase s\u1ebd reset l\u1ea1i base cho branch b\u1eb1ng c\xe1ch h\u1ee3p nh\u1ea5t code c\u1ee7a 1 branch kh\xe1c nh\u01b0ng s\u1ebd xo\xe1 h\u1ebft l\u1ecbch s\u1eed commit \u1edf branch \u0111\u01b0\u1ee3c rebase\n\n"})})]})}function u(t={}){const{wrapper:e}={...(0,h.R)(),...t.components};return e?(0,c.jsx)(e,{...t,children:(0,c.jsx)(o,{...t})}):o(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>r});var i=n(6540);const c={},h=i.createContext(c);function a(t){const e=i.useContext(h);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:a(t.components),i.createElement(h.Provider,{value:e},t.children)}}}]);