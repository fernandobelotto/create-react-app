(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{113:function(e,a,o){"use strict";o.d(a,"a",(function(){return s})),o.d(a,"b",(function(){return m}));var t=o(0),r=o.n(t);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function d(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=r.a.createContext({}),u=function(e){var a=r.a.useContext(p),o=a;return e&&(o="function"==typeof e?e(a):c(c({},a),e)),o},s=function(e){var a=u(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var o=e.components,t=e.mdxType,n=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=u(o),b=t,m=s["".concat(i,".").concat(b)]||s[b]||l[b]||n;return o?r.a.createElement(m,c(c({ref:a},p),{},{components:o})):r.a.createElement(m,c({ref:a},p))}));function m(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=o.length,i=new Array(n);i[0]=b;var c={};for(var d in a)hasOwnProperty.call(a,d)&&(c[d]=a[d]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<n;p++)i[p]=o[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},79:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return i})),o.d(a,"metadata",(function(){return c})),o.d(a,"rightToc",(function(){return d})),o.d(a,"default",(function(){return u}));var t=o(2),r=o(6),n=(o(0),o(113)),i={id:"production-build",title:"Criando o build de produ\xe7\xe3o"},c={unversionedId:"production-build",id:"production-build",isDocsHomePage:!1,title:"Criando o build de produ\xe7\xe3o",description:"npm run build cria um diret\xf3rio build com uma build (constru\xe7\xe3o) de produ\xe7\xe3o de seu aplicativo. Dentro do diret\xf3rio build/static estar\xe3o seus arquivos JavaScript e CSS. Cada nome de arquivo dentro de build/static conter\xe1 um hash \xfanico do conte\xfado do arquivo. Este hash no nome do arquivo habilita t\xe9cnicas de cache de longo prazo.",source:"@site/..\\docs\\production-build.md",slug:"/production-build",permalink:"/create-react-app/docs/production-build",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/production-build.md",version:"current",lastUpdatedBy:"Fernando Belotto",lastUpdatedAt:1609700542,sidebar:"docs",previous:{title:"Medindo o desempenho",permalink:"/create-react-app/docs/measuring-performance"},next:{title:"Running Tests",permalink:"/create-react-app/docs/running-tests"}},d=[{value:"Cache de arquivo est\xe1tico",id:"cache-de-arquivo-est\xe1tico",children:[]},{value:"Profiling",id:"profiling",children:[]}],p={rightToc:d};function u(e){var a=e.components,o=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(t.a)({},p,o,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"npm run build")," cria um diret\xf3rio ",Object(n.b)("inlineCode",{parentName:"p"},"build")," com uma build (constru\xe7\xe3o) de produ\xe7\xe3o de seu aplicativo. Dentro do diret\xf3rio ",Object(n.b)("inlineCode",{parentName:"p"},"build/static")," estar\xe3o seus arquivos JavaScript e CSS. Cada nome de arquivo dentro de ",Object(n.b)("inlineCode",{parentName:"p"},"build/static")," conter\xe1 um hash \xfanico do conte\xfado do arquivo. Este hash no nome do arquivo habilita ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"#static-file-caching"}),"t\xe9cnicas de cache de longo prazo"),"."),Object(n.b)("p",null,"When running a production build of freshly created Create React App application, there are a number of ",Object(n.b)("inlineCode",{parentName:"p"},".js")," files (called ",Object(n.b)("em",{parentName:"p"},"chunks"),") that are generated and placed in the ",Object(n.b)("inlineCode",{parentName:"p"},"build/static/js")," directory:\nAo executar uma vers\xe3o de produ\xe7\xe3o do aplicativo Create React App criado recentemente, h\xe1 uma s\xe9rie de arquivos ",Object(n.b)("inlineCode",{parentName:"p"},".js")," (chamados ",Object(n.b)("em",{parentName:"p"},"chunks"),") que s\xe3o gerados e colocados no diret\xf3rio ",Object(n.b)("inlineCode",{parentName:"p"},"build/static/js"),":"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"main.[hash].chunk.js")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Este \xe9 o c\xf3digo da sua ",Object(n.b)("em",{parentName:"li"},"aplica\xe7\xe3o"),". ",Object(n.b)("inlineCode",{parentName:"li"},"App.js"),", etc.")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"[number].[hash].chunk.js")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Esses arquivos podem ser c\xf3digo de ",Object(n.b)("em",{parentName:"li"},"terceiros")," ou ",Object(n.b)("a",Object(t.a)({parentName:"li"},{href:"/create-react-app/docs/code-splitting"}),"code splitting chunks"),". O c\xf3digo de ",Object(n.b)("em",{parentName:"li"},"terceiros")," inclui m\xf3dulos que voc\xea importou de ",Object(n.b)("inlineCode",{parentName:"li"},"node_modules"),". Uma das vantagens potenciais de dividir seu c\xf3digo de ",Object(n.b)("em",{parentName:"li"},"terceiros")," e ",Object(n.b)("em",{parentName:"li"},"aplica\xe7\xe3o")," \xe9 habilitar ",Object(n.b)("a",Object(t.a)({parentName:"li"},{href:"#static-file-caching"}),"t\xe9cnicas de cache de longo prazo")," para melhorar o desempenho de carregamento do aplicativo. Como o c\xf3digo do ",Object(n.b)("em",{parentName:"li"},"terceiro")," tende a mudar com menos frequ\xeancia do que o c\xf3digo da ",Object(n.b)("em",{parentName:"li"},"aplica\xe7\xe3o")," real, o navegador poder\xe1 armazen\xe1-los em cache separadamente e n\xe3o baixar\xe1 novamente cada vez que o c\xf3digo do aplicativo mudar.")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"runtime-main.[hash].js")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Este \xe9 um pequeno peda\xe7o da l\xf3gica do ",Object(n.b)("a",Object(t.a)({parentName:"li"},{href:"https://webpack.js.org/configuration/optimization/#optimization-runtimechunk"}),"webpack runtime")," que \xe9 usado para carregar e executar seu aplicativo. O conte\xfado disso ser\xe1 embutido em seu arquivo ",Object(n.b)("inlineCode",{parentName:"li"},"build/index.html")," por padr\xe3o para salvar uma solicita\xe7\xe3o de rede adicional. Voc\xea pode cancelar especificando ",Object(n.b)("inlineCode",{parentName:"li"},"INLINE_RUNTIME_CHUNK=false")," conforme documentado em nossa ",Object(n.b)("a",Object(t.a)({parentName:"li"},{href:"/create-react-app/docs/advanced-configuration"}),"configura\xe7\xe3o avan\xe7ada"),", que ir\xe1 carregar este trecho em vez de incorpor\xe1-lo em seu",Object(n.b)("inlineCode",{parentName:"li"}," index.html"),".")),Object(n.b)("p",null,"Se voc\xea estiver usando ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"/create-react-app/docs/code-splitting"}),"code splitting")," para dividir seu aplicativo, isso criar\xe1 peda\xe7os adicionais na pasta ",Object(n.b)("inlineCode",{parentName:"p"},"build/static")," tamb\xe9m."),Object(n.b)("h2",{id:"cache-de-arquivo-est\xe1tico"},"Cache de arquivo est\xe1tico"),Object(n.b)("p",null,"Cada arquivo dentro do diret\xf3rio ",Object(n.b)("inlineCode",{parentName:"p"},"build/static")," ter\xe1 um hash \xfanico anexado ao nome do arquivo que \xe9 gerado com base no conte\xfado do arquivo, o que permite que voc\xea use ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"https://developers.google.com/web/fundals/performance/optimizing-content-fficiency/http-caching#invalidating_and_updating_cached_responses"}),"t\xe9cnicas agressivas de cache")," para evitar que o navegador baixe novamente seus assets se o conte\xfado do arquivo n\xe3o tiver mudado. Se o conte\xfado de um arquivo for alterado em uma constru\xe7\xe3o subsequente, o hash do nome do arquivo gerado ser\xe1 diferente."),Object(n.b)("p",null,"Para oferecer o melhor desempenho aos seus usu\xe1rios, \xe9 uma pr\xe1tica recomendada especificar um cabe\xe7alho ",Object(n.b)("inlineCode",{parentName:"p"},"Cache-Control")," para",Object(n.b)("inlineCode",{parentName:"p"}," index.html"),", bem como os arquivos dentro de ",Object(n.b)("inlineCode",{parentName:"p"},"build/static"),". Este cabe\xe7alho permite que voc\xea controle por quanto tempo o navegador e tamb\xe9m os CDNs armazenar\xe3o em cache seus assets est\xe1ticos. Se voc\xea n\xe3o est\xe1 familiarizado com o que ",Object(n.b)("inlineCode",{parentName:"p"},"Cache-Control")," faz, consulte ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"https://jakearchibald.com/2016/caching-best-practices/"}),"este artigo")," para uma \xf3tima introdu\xe7\xe3o."),Object(n.b)("p",null,"Usar ",Object(n.b)("inlineCode",{parentName:"p"},"Cache-Control: max-age=31536000")," para seus assets ",Object(n.b)("inlineCode",{parentName:"p"},"build/static")," e ",Object(n.b)("inlineCode",{parentName:"p"},"Cache-Control: no-cache")," para todo o resto \xe9 um ponto de partida seguro e eficaz que garante que o navegador do usu\xe1rio sempre verifique um arquivo ",Object(n.b)("inlineCode",{parentName:"p"},"index.html")," atualizado, e armazenar\xe1 em cache todos os arquivos ",Object(n.b)("inlineCode",{parentName:"p"},"build/static")," por um ano. Observe que voc\xea pode usar a expira\xe7\xe3o de um ano em ",Object(n.b)("inlineCode",{parentName:"p"},"build/static")," com seguran\xe7a porque o hash do conte\xfado do arquivo est\xe1 embutido no nome do arquivo."),Object(n.b)("h2",{id:"profiling"},"Profiling"),Object(n.b)("p",null,"O ReactDOM suporta automaticamente profiling no modo de desenvolvimento para a vers\xe3o 16.5+, mas como a profilling adiciona algumas pequenas sobrecargas adicionais, \xe9 opcional para o modo de produ\xe7\xe3o. Voc\xea pode optar por usar o sinalizador ",Object(n.b)("inlineCode",{parentName:"p"},"--profile"),". Use ",Object(n.b)("inlineCode",{parentName:"p"},"npm run build - --profile")," ou ",Object(n.b)("inlineCode",{parentName:"p"},"yarn build --profile")," para habilitar o profilling no build de produ\xe7\xe3o. Consulte os ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler"}),"documentos do React")," para obter detalhes sobre profilling usando o React DevTools."))}u.isMDXComponent=!0}}]);