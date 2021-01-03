(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,g=p["".concat(s,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(g,i(i({ref:t},u),{},{components:n})):o.a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(113)),s={id:"debugging-tests",title:"Debugging Tests",sidebar_label:"Debugging Tests"},i={unversionedId:"debugging-tests",id:"debugging-tests",isDocsHomePage:!1,title:"Debugging Tests",description:"There are various ways to setup a debugger for your Jest tests. We cover debugging in Chrome and Visual Studio Code.",source:"@site/..\\docs\\debugging-tests.md",slug:"/debugging-tests",permalink:"/create-react-app/docs/debugging-tests",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/debugging-tests.md",version:"current",lastUpdatedBy:"Ian Schmitz",lastUpdatedAt:1607981911,sidebar_label:"Debugging Tests",sidebar:"docs",previous:{title:"Running Tests",permalink:"/create-react-app/docs/running-tests"},next:{title:"Proxying API Requests in Development",permalink:"/create-react-app/docs/proxying-api-requests-in-development"}},c=[{value:"Debugging Tests in Chrome",id:"debugging-tests-in-chrome",children:[]},{value:"Debugging Tests in Visual Studio Code",id:"debugging-tests-in-visual-studio-code",children:[]}],u={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are various ways to setup a debugger for your Jest tests. We cover debugging in Chrome and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code"),"."),Object(a.b)("h2",{id:"debugging-tests-in-chrome"},"Debugging Tests in Chrome"),Object(a.b)("p",null,"Add the following to the ",Object(a.b)("inlineCode",{parentName:"p"},"scripts")," section in your project's ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"scripts": {\n    "test:debug": "react-scripts --inspect-brk test --runInBand --no-cache"\n  }\n')),Object(a.b)("p",null,"Place ",Object(a.b)("inlineCode",{parentName:"p"},"debugger;")," statements in any test and run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ npm run test:debug\n")),Object(a.b)("p",null,"This will start running your Jest tests, but pause before executing to allow a debugger to attach to the process."),Object(a.b)("p",null,"Open the following in Chrome"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"about:inspect\n")),Object(a.b)("p",null,"After opening that link, the Chrome Developer Tools will be displayed. Select ",Object(a.b)("inlineCode",{parentName:"p"},"inspect"),' on your process and a breakpoint will be set at the first line of the react script (this is done to give you time to open the developer tools and to prevent Jest from executing before you have time to do so). Click the button that looks like a "play" button in the upper right hand side of the screen to continue execution. When Jest executes the test that contains the debugger statement, execution will pause and you can examine the current scope and call stack.'),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: the --runInBand cli option makes sure Jest runs test in the same process rather than spawning processes for individual tests. Normally Jest parallelizes test runs across processes but it is hard to debug many processes at the same time.")),Object(a.b)("h2",{id:"debugging-tests-in-visual-studio-code"},"Debugging Tests in Visual Studio Code"),Object(a.b)("p",null,"Debugging Jest tests is supported out of the box for ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com"}),"Visual Studio Code"),"."),Object(a.b)("p",null,"Use the following ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/editor/debugging#_launch-configurations"}),Object(a.b)("inlineCode",{parentName:"a"},"launch.json"))," configuration file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug CRA Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",\n      "args": ["test", "--runInBand", "--no-cache", "--watchAll=false"],\n      "cwd": "${workspaceRoot}",\n      "protocol": "inspector",\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen",\n      "env": { "CI": "true" },\n      "disableOptimisticBPs": true\n    }\n  ]\n}\n')))}l.isMDXComponent=!0}}]);