(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return y}));var r=a(0),n=a.n(r);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=l(a),d=r,y=b["".concat(c,".").concat(d)]||b[d]||u[d]||p;return a?n.a.createElement(y,i(i({ref:t},s),{},{components:a})):n.a.createElement(y,i({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,c=new Array(p);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<p;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return l}));var r=a(2),n=a(6),p=(a(0),a(113)),c={id:"adding-typescript",title:"Adicionando TypeScript"},i={unversionedId:"adding-typescript",id:"adding-typescript",isDocsHomePage:!1,title:"Adicionando TypeScript",description:"Note: this feature is available with react-scripts@2.1.0 and higher.",source:"@site/..\\docs\\adding-typescript.md",slug:"/adding-typescript",permalink:"/create-react-app/docs/adding-typescript",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/adding-typescript.md",version:"current",lastUpdatedBy:"Dylan Brookes",lastUpdatedAt:1595881511,sidebar:"docs",previous:{title:"Adicionando Flow",permalink:"/create-react-app/docs/adding-flow"},next:{title:"Adding Relay",permalink:"/create-react-app/docs/adding-relay"}},o=[{value:"Installation",id:"installation",children:[]},{value:"Getting Started with TypeScript and React",id:"getting-started-with-typescript-and-react",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],s={rightToc:o};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(p.b)("inlineCode",{parentName:"p"},"react-scripts@2.1.0")," and higher.\nNote: this feature is available with ",Object(p.b)("inlineCode",{parentName:"p"},"react-scripts@2.1.0")," and higher.")),Object(p.b)("p",null,Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," is a typed superset of JavaScript that compiles to plain JavaScript."),Object(p.b)("h2",{id:"installation"},"Installation"),Object(p.b)("p",null,"To start a new Create React App project with ",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript"),", you can run:"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app --template typescript\n\n# or\n\nyarn create react-app my-app --template typescript\n")),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"If you've previously installed ",Object(p.b)("inlineCode",{parentName:"p"},"create-react-app")," globally via ",Object(p.b)("inlineCode",{parentName:"p"},"npm install -g create-react-app"),", we recommend you uninstall the package using ",Object(p.b)("inlineCode",{parentName:"p"},"npm uninstall -g create-react-app")," or ",Object(p.b)("inlineCode",{parentName:"p"},"yarn global remove create-react-app")," to ensure that ",Object(p.b)("inlineCode",{parentName:"p"},"npx")," always uses the latest version."),Object(p.b)("p",{parentName:"blockquote"},"Global installs of ",Object(p.b)("inlineCode",{parentName:"p"},"create-react-app")," are no longer supported.")),Object(p.b)("p",null,"To add ",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," to an existing Create React App project, first install it:"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save typescript @types/node @types/react @types/react-dom @types/jest\n\n# or\n\nyarn add typescript @types/node @types/react @types/react-dom @types/jest\n")),Object(p.b)("p",null,"Next, rename any file to be a TypeScript file (e.g. ",Object(p.b)("inlineCode",{parentName:"p"},"src/index.js")," to ",Object(p.b)("inlineCode",{parentName:"p"},"src/index.tsx"),") and ",Object(p.b)("strong",{parentName:"p"},"restart your development server"),"!"),Object(p.b)("p",null,"Type errors will show up in the same console as the build one. You'll have to fix these type errors before you continue development or build your project. For advanced configuration, ",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"/create-react-app/docs/advanced-configuration"}),"see here"),"."),Object(p.b)("h2",{id:"getting-started-with-typescript-and-react"},"Getting Started with TypeScript and React"),Object(p.b)("p",null,"You are not required to make a ",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"}),Object(p.b)("inlineCode",{parentName:"a"},"tsconfig.json")," file"),", one will be made for you. You are allowed to edit the generated TypeScript configuration."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.typescriptlang.org/"}),"TypeScript Handbook")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.typescriptlang.org/play/index.html?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react"}),"TypeScript Example on React")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets"}),"React + TypeScript Cheatsheets")," has a good overview on how to use React with TypeScript")),Object(p.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(p.b)("p",null,"If your project is not created with TypeScript enabled, npx may be using a cached version of ",Object(p.b)("inlineCode",{parentName:"p"},"create-react-app"),". Remove previously installed versions with ",Object(p.b)("inlineCode",{parentName:"p"},"npm uninstall -g create-react-app")," or ",Object(p.b)("inlineCode",{parentName:"p"},"yarn global remove create-react-app")," (see ",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/6119#issuecomment-451614035"}),"#6119"),")."),Object(p.b)("p",null,"If you are currently using ",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wmonk/create-react-app-typescript/"}),"create-react-app-typescript"),", see ",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"https://vincenttunru.com/migrate-create-react-app-typescript-to-create-react-app/"}),"this blog post")," for instructions on how to migrate to Create React App."),Object(p.b)("p",null,"Constant enums and namespaces are not supported, you can learn about the constraints of ",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats"}),"using Babel with TypeScript here"),"."))}l.isMDXComponent=!0}}]);