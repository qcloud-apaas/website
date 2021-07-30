(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4904],{3905:function(e,n,t){"use strict";t.d(n,{kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),i=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=i(t),s=r,h=d["".concat(l,".").concat(s)]||d[s]||m[s]||a;return t?o.createElement(h,c(c({ref:n},u),{},{components:t})):o.createElement(h,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<a;i++)c[i]=t[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1297:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return m},default:function(){return d}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),c=["components"],p={},l="\u4f7f\u7528",i={unversionedId:"api/cli/usage",id:"api/cli/usage",isDocsHomePage:!1,title:"\u4f7f\u7528",description:"\u4ecb\u7ecd",source:"@site/docs/api/cli/2-usage.md",sourceDirName:"api/cli",slug:"/api/cli/usage",permalink:"/website/docs/api/cli/usage",editUrl:"https://github.com/qcloud-apaas/website/edit/master/docs/api/cli/2-usage.md",version:"current",sidebarPosition:2,frontMatter:{},sidebar:"cli",previous:{title:"\u5386\u53f2\u7248\u672c",permalink:"/website/docs/api/cli/history"}},m=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[]},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",children:[]},{value:"<code>qcomponent build</code>",id:"qcomponent-build",children:[]},{value:"<code>qcomponent config [CONFIGKEY] [CONFIGVALUE]</code>",id:"qcomponent-config-configkey-configvalue",children:[]},{value:"<code>qcomponent create [KEY]</code>",id:"qcomponent-create-key",children:[]},{value:"<code>qcomponent help [COMMAND]</code>",id:"qcomponent-help-command",children:[]},{value:"<code>qcomponent mkcert [KEY]</code>",id:"qcomponent-mkcert-key",children:[]},{value:"<code>qcomponent publish</code>",id:"qcomponent-publish",children:[]},{value:"<code>qcomponent release</code>",id:"qcomponent-release",children:[]},{value:"<code>qcomponent start</code>",id:"qcomponent-start",children:[]}],u={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ qcomponent COMMAND\nrunning command...\n$ qcomponent (-v|--version|version)\n@qcloud-apaas/component-tools-cli/1.1.12 darwin-x64 node-v14.16.1\n$ qcomponent --help [COMMAND]\nUSAGE\n  $ qcomponent COMMAND\n...\n")),(0,a.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#qcomponent-build"},(0,a.kt)("inlineCode",{parentName:"a"},"qcomponent build"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#qcomponent-config-configkey-configvalue"},(0,a.kt)("inlineCode",{parentName:"a"},"qcomponent config [CONFIGKEY] [CONFIGVALUE]"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#qcomponent-create-key"},(0,a.kt)("inlineCode",{parentName:"a"},"qcomponent create [KEY]"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#qcomponent-help-command"},(0,a.kt)("inlineCode",{parentName:"a"},"qcomponent help [COMMAND]"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#qcomponent-mkcert-key"},(0,a.kt)("inlineCode",{parentName:"a"},"qcomponent mkcert [KEY]"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#qcomponent-publish"},(0,a.kt)("inlineCode",{parentName:"a"},"qcomponent publish"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#qcomponent-release"},(0,a.kt)("inlineCode",{parentName:"a"},"qcomponent release"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#qcomponent-start"},(0,a.kt)("inlineCode",{parentName:"a"},"qcomponent start")))),(0,a.kt)("h2",{id:"qcomponent-build"},(0,a.kt)("inlineCode",{parentName:"h2"},"qcomponent build")),(0,a.kt)("p",null,"\u53d1\u5e03\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ qcomponent build\n\nOPTIONS\n  -h, --help  show CLI help\n\nEXAMPLE\n  $ qcomponent release\n")),(0,a.kt)("h2",{id:"qcomponent-config-configkey-configvalue"},(0,a.kt)("inlineCode",{parentName:"h2"},"qcomponent config [CONFIGKEY] [CONFIGVALUE]")),(0,a.kt)("p",null,"\u4fee\u6539\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ qcomponent config [CONFIGKEY] [CONFIGVALUE]\n\nOPTIONS\n  -h, --help  show CLI help\n\nEXAMPLE\n  $ qcomponent config secretId <secretId>\n  $ qcomponent config secretKey <secretKey>\n")),(0,a.kt)("h2",{id:"qcomponent-create-key"},(0,a.kt)("inlineCode",{parentName:"h2"},"qcomponent create [KEY]")),(0,a.kt)("p",null,"\u751f\u6210\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ qcomponent create [KEY]\n\nOPTIONS\n  -h, --help  show CLI help\n\nEXAMPLE\n  $ qcomponent create <group>:<name>\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"See code: ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/qcloud-apaas/component-tools-cli/blob/v1.1.12/src/commands/create.ts"},"src/commands/create.ts"))),(0,a.kt)("h2",{id:"qcomponent-help-command"},(0,a.kt)("inlineCode",{parentName:"h2"},"qcomponent help [COMMAND]")),(0,a.kt)("p",null,"display help for qcomponent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ qcomponent help [COMMAND]\n\nARGUMENTS\n  COMMAND  command to show help for\n\nOPTIONS\n  --all  see all commands in CLI\n")),(0,a.kt)("h2",{id:"qcomponent-mkcert-key"},(0,a.kt)("inlineCode",{parentName:"h2"},"qcomponent mkcert [KEY]")),(0,a.kt)("p",null,"\u751f\u6210\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ qcomponent mkcert [KEY]\n\nOPTIONS\n  -h, --help  show CLI help\n\nEXAMPLE\n  $ qcomponent create <group>:<name>\n")),(0,a.kt)("h2",{id:"qcomponent-publish"},(0,a.kt)("inlineCode",{parentName:"h2"},"qcomponent publish")),(0,a.kt)("p",null,"\u53d1\u5e03\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ qcomponent publish\n\nOPTIONS\n  -h, --help  show CLI help\n\nEXAMPLE\n  $ qcomponent release\n")),(0,a.kt)("h2",{id:"qcomponent-release"},(0,a.kt)("inlineCode",{parentName:"h2"},"qcomponent release")),(0,a.kt)("p",null,"\u53d1\u5e03\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ qcomponent release\n\nOPTIONS\n  -h, --help  show CLI help\n\nEXAMPLE\n  $ qcomponent release\n")),(0,a.kt)("h2",{id:"qcomponent-start"},(0,a.kt)("inlineCode",{parentName:"h2"},"qcomponent start")),(0,a.kt)("p",null,"\u8fd0\u884c\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ qcomponent start\n\nOPTIONS\n  -c, --config=config  webpack\u914d\u7f6e\n  -h, --help           show CLI help\n  -p, --port=port      \u8fd0\u884c\u7aef\u53e3\n\nEXAMPLE\n\n       $ qcomponent start\n       $ qcomponent start -p 8080\n       $ qcomponent start -c ./webpack.config.js\n")))}d.isMDXComponent=!0}}]);