"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6723],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4091:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},i=void 0,c={unversionedId:"chapter1/Get Started",id:"chapter1/Get Started",title:"Get Started",description:"Creating collection",source:"@site/docs/chapter1/Get Started.md",sourceDirName:"chapter1",slug:"/chapter1/Get Started",permalink:"/website/docs/chapter1/Get Started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter1/Get Started.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/website/docs/chapter1/Overview"},next:{title:"Routine Testing",permalink:"/website/docs/category/routine-testing"}},s={},l=[{value:"Creating collection",id:"creating-collection",level:2},{value:"Creating a workspace",id:"creating-a-workspace",level:2},{value:"Sending request",id:"sending-request",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"creating-collection"},"Creating collection"),(0,a.kt)("p",null,"Collections are a group of saved requests. You can save your requests in groups by creating collections, which can help you manage requests better."),(0,a.kt)("p",null,"To create a new collection, select ",(0,a.kt)("strong",{parentName:"p"},"Collection")," > ",(0,a.kt)("strong",{parentName:"p"},"New")," from the sidebar."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u65b0\u5efa\u96c6\u5408",src:r(4650).Z,width:"3840",height:"1750"})),(0,a.kt)("p",null,"Or select the ",(0,a.kt)("strong",{parentName:"p"},"+")," icon to create a new collection\uff1a"),(0,a.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3TiPX.png",alt:"New Collection",width:"400",height:""}),(0,a.kt)("p",null,"Once created, you can manage all your collections under ",(0,a.kt)("strong",{parentName:"p"},"Collections")," in the sidebar. You can also add new subsets/folders under collections."),(0,a.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3TndN.png",alt:"New Collection",width:"500",height:""}),(0,a.kt)("p",null,"To customize and configure the new collection, click directly on the collection:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Authorization")," to configure authorization details for the collection. If you do not want to expose the interface to the public, you can use authorization. The authorization process will verify that you have permission to access the data required by the server, and when you send a request, you usually need to include parameters to ensure that the request has permission to access and return the required data. By default, this will take effect for requests under the entire collection/folder. If you need to modify the authorization type for a particular request, you can do so separately in that request."),(0,a.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3T0Eb.png",alt:"Authorization",width:"600",height:""})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Pre-request Script")," to define a pre-request script for your collection, which will run before requests are sent to the server."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"\u96c6\u5408\u524d\u7f6e\u811a\u672c",src:r(8569).Z,width:"2865",height:"1550"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Tests")," to define a test script for your collection, which will run after a response is received."))),(0,a.kt)("h2",{id:"creating-a-workspace"},"Creating a workspace"),(0,a.kt)("p",null,"You will be in your default personal workspace when first log in AREX. You can not only create various workspaces for your personal use, but also invite your team to collaborate in your workspace to manage ",(0,a.kt)("strong",{parentName:"p"},"Collections"),", share ",(0,a.kt)("strong",{parentName:"p"},"Environments")," etc."),(0,a.kt)("p",null,"To create a new workspace:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("strong",{parentName:"p"},"+")," icon in the upper right to ",(0,a.kt)("strong",{parentName:"p"},"Add Workspace"),". You can also select other workspaces from the dropdown list."),(0,a.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3T2pw.png",alt:"New workspace",width:"400",height:""})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter a Name for your workspace and click the ",(0,a.kt)("strong",{parentName:"p"},"\u221a")," icon to save\u3002"),(0,a.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3ThBt.png",alt:"Save",width:"400",height:""})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once created, you can select the ",(0,a.kt)("img",{alt:"\u7f16\u8f91",src:r(5676).Z,width:"25",height:"26"})," icon in the upper right to ",(0,a.kt)("strong",{parentName:"p"},"Edit Workspace"),", where you can edit the name of the workspace, manage collaborators, and delete the workspace."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"\u7f16\u8f91\u5de5\u4f5c\u533a",src:r(7911).Z,width:"2873",height:"1632"})))),(0,a.kt)("p",null,"You can also invite other users to collaborate in a workspace via email by selecting ",(0,a.kt)("strong",{parentName:"p"},"Invite")," in the upper-right corner. There're ",(0,a.kt)("strong",{parentName:"p"},"Admin"),", ",(0,a.kt)("strong",{parentName:"p"},"Editor"),", and ",(0,a.kt)("strong",{parentName:"p"},"Viewer")," three roles."),(0,a.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3Tb4x.png",alt:"Invite",width:"700",height:""}),(0,a.kt)("h2",{id:"sending-request"},"Sending request"),(0,a.kt)("p",null,"You can use AREX to create and send API requests."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"+")," icon in the workbench to open a new tab."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"\u65b0\u5efa\u8bf7\u6c42",src:r(7001).Z,width:"2875",height:"1253"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the request URL.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Send"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"\u53d1\u9001\u8bf7\u6c42",src:r(1448).Z,width:"2826",height:"1590"})))))}d.isMDXComponent=!0},7911:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c1.editworkspace-12d81ca629797f3153b7ff000bd76928.png"},7001:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c1.new.request-f5874dfa6279bddb02472718868d2351.png"},4650:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c1.newcollection-066570e67736f752d7869be33a00b418.png"},8569:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c1.prerequest-9e1a105e833ab61eed26ab7d44bbb700.png"},5676:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAF+SURBVEhL3ZU5jsIwFIb/hC4cgAaJpaAi3AHo6bkDS82iFISQLgXLHeipgTug9GmRoIUSZt5TGBY5cciQYuaTLNmW5U+/n+Mo2Wz2ioRRcrncNZVK+cPPc7lcoCYpIFRVher3E0VVFAVJt7+RJJ1OC+cf26+StFotjEYjFoURW9Jut1GtVpHJZKSiWMfV6XRYsFgsYBgGi0zTDDy6t5PcEsznc2y3W57jjb6/hyDeklCCWq32I8jn8xiPxzgcDhgMBjifz/7KZyJLboLZbIbNZoNCoQDLsnA8HjEcDgMFRCRJt9tFvV4XCijB6XTyV4qRSprNJgum0ynW6zULJpMJC/r9vlRASCWVSgWr1YoFxWIRtm1zDXq9XiQBIb3C5XKZr2aj0XgSUA1E64WtVCoF/rQ0TcNyueQ+beq6LhzHCS2yiFAJoes69vs9J4hLoIQKLHuTXqEaeZ7nj+4IJSSg6xoHehFeRYFJ6FbFYbfb+b070pp8grferrj8FwnwBRcXmNZZiYeLAAAAAElFTkSuQmCC"},1448:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c1.request-94936db36c02f8368f1d4daf6d14fb1a.png"}}]);