import{j as e,L as p,c as a,a as _,b,R as P,d as H,T as i,C as c,u as N}from"./index-LJcEBsaG.js";var y="vocs_Button_button",L="vocs_Button_button_accent";function M({children:t,className:n,href:r,variant:h}){return e.jsx(p,{className:a(n,y,h==="accent"&&L),href:r,variant:"styleless",children:t})}var C="vocs_HomePage_button",B="vocs_HomePage_buttons",k="vocs_HomePage_description",w="vocs_HomePage_logo",l="vocs_HomePage_packageManager",D="vocs_HomePage",R="vocs_HomePage_tabs",u="vocs_HomePage_tabsContent",T="vocs_HomePage_tabsList",$="vocs_HomePage_tagline",E="vocs_HomePage_title";function m({children:t,className:n}){return e.jsx("div",{className:a(n,D),children:t})}function d({className:t}){const{logoUrl:n,title:r}=_();return n?e.jsx("div",{className:a(t,w),children:e.jsx(b,{})}):e.jsx("h1",{className:a(t,E),children:r})}function g({children:t,className:n}){return e.jsx("div",{className:a(n,$),children:t})}function v({children:t,className:n}){return e.jsx("div",{className:a(n,k),children:t})}function x({children:t,className:n}){return e.jsx("div",{className:a(n,B),children:t})}function o(t){return e.jsx(M,{...t,className:a(C,t.className)})}function j({name:t,type:n="install"}){return e.jsxs(P,{className:R,defaultValue:"npm",children:[e.jsxs(H,{className:T,children:[e.jsx(i,{value:"npm",children:"npm"}),e.jsx(i,{value:"pnpm",children:"pnpm"}),e.jsx(i,{value:"yarn",children:"yarn"})]}),e.jsxs(c,{className:u,value:"npm",children:[e.jsx("span",{className:l,children:"npm"})," ",n==="init"?"init":"install"," ",t]}),e.jsxs(c,{className:u,value:"pnpm",children:[e.jsx("span",{className:l,children:"pnpm"})," ",n==="init"?"create":"install"," ",t]}),e.jsxs(c,{className:u,value:"yarn",children:[e.jsx("span",{className:l,children:"yarn"})," ",n==="init"?"create":"install"," ",t]})]})}const X=Object.freeze(Object.defineProperty({__proto__:null,Button:o,Buttons:x,Description:v,InstallPackage:j,Logo:d,Root:m,Tagline:g},Symbol.toStringTag,{value:"Module"})),I={layout:"landing"};function f(t){return X||s("HomePage",!1),o||s("HomePage.Button",!0),x||s("HomePage.Buttons",!0),v||s("HomePage.Description",!0),j||s("HomePage.InstallPackage",!0),d||s("HomePage.Logo",!0),m||s("HomePage.Root",!0),g||s("HomePage.Tagline",!0),e.jsxs(m,{children:[e.jsx(d,{}),e.jsx(g,{children:"My Awesome Docs"}),e.jsx(j,{name:"vocs",type:"init"}),e.jsx(v,{children:"This is a description of my documentation website."}),e.jsxs(x,{children:[e.jsx(o,{href:"/getting-started",variant:"accent",children:"Get started"}),e.jsx(o,{href:"https://github.com/wevm/vocs",children:"GitHub"})]})]})}function O(t={}){const{wrapper:n}={...N(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(f,{...t})}):f()}function s(t,n){throw new Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{O as default,I as frontmatter};
