(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{106:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return p})),o.d(t,"default",(function(){return d}));var n=o(2),r=o(6),a=(o(0),o(113)),c={id:"code-splitting",title:"Code Splitting"},i={unversionedId:"code-splitting",id:"code-splitting",isDocsHomePage:!1,title:"Code Splitting",description:"Em vez de baixar o aplicativo inteiro antes que os usu\xe1rios possam us\xe1-lo, o Code Splitting (divis\xe3o de c\xf3digo) permite que voc\xea divida seu c\xf3digo em pequenos peda\xe7os que voc\xea pode carregar sob demanda.",source:"@site/..\\docs\\code-splitting.md",slug:"/code-splitting",permalink:"/create-react-app/docs/code-splitting",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/code-splitting.md",version:"current",lastUpdatedBy:"Fernando Belotto",lastUpdatedAt:1609691874,sidebar:"docs",previous:{title:"Usando a pasta Public",permalink:"/create-react-app/docs/using-the-public-folder"},next:{title:"Instalando uma Depend\xeancia",permalink:"/create-react-app/docs/installing-a-dependency"}},p=[{value:"<code>moduleA.js</code>",id:"moduleajs",children:[]},{value:"<code>App.js</code>",id:"appjs",children:[]},{value:"Com React Router",id:"com-react-router",children:[]}],s={rightToc:p};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Em vez de baixar o aplicativo inteiro antes que os usu\xe1rios possam us\xe1-lo, o Code Splitting (divis\xe3o de c\xf3digo) permite que voc\xea divida seu c\xf3digo em pequenos peda\xe7os que voc\xea pode carregar sob demanda."),Object(a.b)("p",null,"Esta configura\xe7\xe3o de projeto suporta code splitting via ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://2ality.com/2017/01/import-operator.html#loading-code-on-demand"}),"dynamic ",Object(a.b)("inlineCode",{parentName:"a"},"import()")),". Sua ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tc39/proposal-dynamic-import"}),"proposta")," est\xe1 no est\xe1gio 4. A forma semelhante \xe0 fun\xe7\xe3o ",Object(a.b)("inlineCode",{parentName:"p"},"import()")," leva o nome do m\xf3dulo como um argumento e retorna uma ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),Object(a.b)("inlineCode",{parentName:"a"},"Promessa"))," que sempre resolve para o objeto de namespace do m\xf3dulo."),Object(a.b)("p",null,"Aqui est\xe1 um exemplo:"),Object(a.b)("h2",{id:"moduleajs"},Object(a.b)("inlineCode",{parentName:"h2"},"moduleA.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const moduleA = 'Hello';\n\nexport { moduleA };\n")),Object(a.b)("h2",{id:"appjs"},Object(a.b)("inlineCode",{parentName:"h2"},"App.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\n\nclass App extends Component {\n  handleClick = () => {\n    import('./moduleA')\n      .then(({ moduleA }) => {\n        // Usa moduleA\n      })\n      .catch(err => {\n        // Lidar com falha\n      });\n  };\n\n  render() {\n    return (\n      <div>\n        <button onClick={this.handleClick}>Load</button>\n      </div>\n    );\n  }\n}\n\nexport default App;\n")),Object(a.b)("p",null,"Isso far\xe1 com que ",Object(a.b)("inlineCode",{parentName:"p"},"moduleA.js")," e todas as suas depend\xeancias exclusivas sejam um trecho separado que s\xf3 carrega ap\xf3s o usu\xe1rio clicar no bot\xe3o 'Load'. Para obter mais informa\xe7\xf5es sobre os blocos que s\xe3o criados, consulte a se\xe7\xe3o ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/create-react-app/docs/production-build"}),"build de produ\xe7\xe3o"),"."),Object(a.b)("p",null,"Voc\xea tamb\xe9m pode us\xe1-lo com a sintaxe ",Object(a.b)("inlineCode",{parentName:"p"},"async")," / ",Object(a.b)("inlineCode",{parentName:"p"},"await")," se preferir."),Object(a.b)("h2",{id:"com-react-router"},"Com React Router"),Object(a.b)("p",null,"Se voc\xea estiver usando o React Router, confira ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/code-splitting.html#route-based-code-splitting"}),"este tutorial")),Object(a.b)("p",null,"Verifique tamb\xe9m a se\xe7\xe3o ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/code-splitting.html"}),"Code Splitting")," na documenta\xe7\xe3o do React."))}d.isMDXComponent=!0},113:function(e,t,o){"use strict";o.d(t,"a",(function(){return l})),o.d(t,"b",(function(){return b}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=d(o),m=n,b=l["".concat(c,".").concat(m)]||l[m]||u[m]||a;return o?r.a.createElement(b,i(i({ref:t},s),{},{components:o})):r.a.createElement(b,i({ref:t},s))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=o[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);