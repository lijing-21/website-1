"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[282],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var s=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=s.createContext({}),d=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return s.createElement(o.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},A=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),A=n,g=p["".concat(o,".").concat(A)]||p[A]||h[A]||r;return a?s.createElement(g,i(i({ref:t},l),{},{components:a})):s.createElement(g,i({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=A;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var d=2;d<r;d++)i[d]=a[d];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}A.displayName="MDXCreateElement"},4738:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=a(7462),n=(a(7294),a(3905));const r={},i=void 0,c={unversionedId:"chapter 3/Save Recorded Cases",id:"chapter 3/Save Recorded Cases",title:"Save Recorded Cases",description:"Scenarios",source:"@site/docs/chapter 3/Save Recorded Cases.md",sourceDirName:"chapter 3",slug:"/chapter 3/Save Recorded Cases",permalink:"/website/docs/chapter 3/Save Recorded Cases",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter 3/Save Recorded Cases.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Force Record",permalink:"/website/docs/chapter 3/Force Record"},next:{title:"Managing Test Cases",permalink:"/website/docs/category/managing-test-cases"}},o={},d=[{value:"Scenarios",id:"scenarios",level:3},{value:"Creat a collection to save test cases",id:"creat-a-collection-to-save-test-cases",level:2},{value:"Save test cases",id:"save-test-cases",level:2},{value:"View test cases",id:"view-test-cases",level:2}],l={toc:d},p="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"scenarios"},"Scenarios"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AREX can record real online traffic to generate rich test cases, which can then be saved for your needs to increase the number of test cases.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Test cases recorded by AREX will be deleted if they exceed the validity period. By saving test cases manually, they can be retained for a longer time and replayed anytime you want."))),(0,n.kt)("h2",{id:"creat-a-collection-to-save-test-cases"},"Creat a collection to save test cases"),(0,n.kt)("p",null,"First, you need to creat a new collection to save the recorded test cases."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"+")," icon besides ",(0,n.kt)("strong",{parentName:"p"},"Collection")," to creat a new collection."),(0,n.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3TiPX.png",alt:"New Collection",width:"400",height:""})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Add Request")," in the dropdown list of the new collection to creat a new request, storing test cases that need to be saved later."),(0,n.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3T59J.png",alt:"New request",width:"400",height:""}))),(0,n.kt)("h2",{id:"save-test-cases"},"Save test cases"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Replay")," in the sidebar and select the application you are working with."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"\u56de\u653e\u62a5\u544a",src:a(4973).Z,width:"3432",height:"1706"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the replay execution list, select the replay task in which you want to save test cases and view the recorded test cases by selecting ",(0,n.kt)("strong",{parentName:"p"},"Case Table"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"\u7528\u4f8b",src:a(2492).Z,width:"1164",height:"793"})),(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Detail")," to view the details of the test cases:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"\u7528\u4f8b\u7ec6\u8282",src:a(7865).Z,width:"2776",height:"1748"})),(0,n.kt)("p",{parentName:"li"},"The validation of the main interface in AREX is mainly based on comparing the differences between the recorded and replayed response messages, while the validation of other external dependencies is validated by comparing their request message. "),(0,n.kt)("p",{parentName:"li"},"The left side shows the request message sent to the external dependencies such as database calls, and the response messages of the main interface during ",(0,n.kt)("strong",{parentName:"p"},"recording"),"."),(0,n.kt)("p",{parentName:"li"},"The right side shows the request message sent to the dependencies and the response messages of the main interface during ",(0,n.kt)("strong",{parentName:"p"},"replay"),"."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(2591).Z,width:"24",height:"24"})," icon indicates points of difference, ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(5616).Z,width:"24",height:"24"})," icon indicates no point of difference.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Save")," to save the case into the collection created previously."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"\u4fdd\u5b58\u7528\u4f8b",src:a(4007).Z,width:"2560",height:"887"})),(0,n.kt)("img",{src:"https://i.328888.xyz/2023/02/10/RtvHb.png",alt:"RtvHb.png",width:"400",height:""}))),(0,n.kt)("h2",{id:"view-test-cases"},"View test cases"),(0,n.kt)("p",null,"Once the test case is saved, you can view it under the corresponding collection request with a similar pattern as a request."),(0,n.kt)("p",null,"You can categorize your test cases by adding tags. Just place your cursor on ",(0,n.kt)("strong",{parentName:"p"},"Add Tag")," and select the ",(0,n.kt)("img",{src:a(5676).Z,width:"25",height:"26"})," icon. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u67e5\u770b\u7528\u4f8b",src:a(1368).Z,width:"2862",height:"925"})),(0,n.kt)("p",null,"Tags can be pre-configured by selecting the ",(0,n.kt)("strong",{parentName:"p"},"Edit Workspace")," icon >> ",(0,n.kt)("strong",{parentName:"p"},"Labels")," tab."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u7ba1\u7406\u6807\u7b7e",src:a(2548).Z,width:"3840",height:"1298"})),(0,n.kt)("p",null,"The request URL is configured with the path of the interface by default, you can enter the test port in front of the path and send request to debug."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"arex-record-id")," in the request ",(0,n.kt)("strong",{parentName:"p"},"Headers")," is the recording ID, if you want to replay the case in test environment, you can add the arex-record-id in the request header of the new request, and send the request."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u67e5\u770b\u7528\u4f8b",src:a(1299).Z,width:"2924",height:"1175"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Mock")," tab shows all data and third-party dependencies mocked from the production environment during recording. "),(0,n.kt)("p",null,"The left side displays the recorded request messages sent to the main interface and external dependencies, while the right side displays the corresponding response messages."),(0,n.kt)("p",null,'The mocked data can be edited, so if you are not satisfied with it, you can manually modify it and select "Save" to save it. Then, in next repaly, you can request by using the modified mock data.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u67e5\u770b\u7528\u4f8b",src:a(5441).Z,width:"2914",height:"1374"})))}h.isMDXComponent=!0},5676:(e,t,a)=>{a.d(t,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAF+SURBVEhL3ZU5jsIwFIb/hC4cgAaJpaAi3AHo6bkDS82iFISQLgXLHeipgTug9GmRoIUSZt5TGBY5cciQYuaTLNmW5U+/n+Mo2Wz2ioRRcrncNZVK+cPPc7lcoCYpIFRVher3E0VVFAVJt7+RJJ1OC+cf26+StFotjEYjFoURW9Jut1GtVpHJZKSiWMfV6XRYsFgsYBgGi0zTDDy6t5PcEsznc2y3W57jjb6/hyDeklCCWq32I8jn8xiPxzgcDhgMBjifz/7KZyJLboLZbIbNZoNCoQDLsnA8HjEcDgMFRCRJt9tFvV4XCijB6XTyV4qRSprNJgum0ynW6zULJpMJC/r9vlRASCWVSgWr1YoFxWIRtm1zDXq9XiQBIb3C5XKZr2aj0XgSUA1E64WtVCoF/rQ0TcNyueQ+beq6LhzHCS2yiFAJoes69vs9J4hLoIQKLHuTXqEaeZ7nj+4IJSSg6xoHehFeRYFJ6FbFYbfb+b070pp8grferrj8FwnwBRcXmNZZiYeLAAAAAElFTkSuQmCC"},5616:(e,t,a)=>{a.d(t,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAAGgrv1cAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfUExURSAgICAcHiEXGyIUGSITGCIUGCEWGiAaHSAfHyEhISAdHiAaHB00LBlSPhdnTBZ0VRdtUBhaRBxANCAbHSAfICEgICEbHh4tJxdoTRORZhCjchCmcxCcbxCkchKabBV8WRw+MyEfHyEfICEcHh0/NBOKYRCkcxOKYhhgRxxKOxxBNhxEOBpUQBV7WRGgcRGcbRlZQyEkIiEgISIcHR0+MxKYahhjSh80LSAiIiIcHiIbHiAqJxtMPBKTaA+pdhpVQSIeHx8pJxOJYhCodRtQPiAlIyEdHx02LRKUaBGgcBxCNSIZHA+reBhkSiEeHyEeHiEaHBxFNxWDXiAoJiIdHyAtKROTaBOQZh8vKh8qJxlhSRxHOSEbHRZzVBGmdRxIOSIYHBxLOxCrdxlgSCAjIhduURKYbBCpdiEiIiIiIiMVGhllSw+yex1DNiIfICAvKh4/NCAmJSIgISMbHRxLPBGhchhmTCEjIxGhcRSHYCEkIyIgICIjIiQUGRdzVRCndR86MSIhISMcHh83LxWIYhpeRyIiIyAwKxOVahWEXyEtKSIhIhORaBOUaiEmJBdyVB87MiEjIhdvUh1ENxZ9WxKdbx8+MxOXahOUaSQWGw+yfBxGOSAuKRSIYhGfcA+seBpaRCIiIRGlcxSDXiIkJCMaHhxJOhCqeBdsUCEkJB1FOBd1VRxKOhCteRhpTiIjIyIfISEnJRSQZxKdbh82LiEhIh1HOSAwKhWBXRGodh5BNhtVQg+wexd5WCMWGhtXQxZ2VyImJSElIxZ8Wg+2fhhsUCArKCMYHCMZHB1OPRCreBOXax45MRWHYA+zfBaBXR1IOiQXGyQVGh84MBGreBObbh1IOR81LhdwVBCndhGldBWJYxhyVBphShlrUBZ/XA+ueiApJhxNPRd7WRKbbxCwexCvexGjcxWKYxpfRx8zLSAuKh4+NB1KOxxPPhxNPB1DNyMeHyMdHiMdHwAAACNgycYAAAD1dFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Awu13zwAAAAlwSFlzAAAOnAAADpwBB5RT3QAAAU9JREFUKFNVUTGOwzAMy6BNyJDJU18RCNDkIUsBAf6ENz2pc5Y+w4Ofcg850kUPOCGpbZGiyXRzl03dt0zZBKt5bDNzU73DdMtolgZ09JIkL/4VA1RXb0O3kZGSGM6cCWa/1rh7aSMEJIzdOwa9PHhRCw/Iut4n5N8pPRNnjpYZIs8eEEDvr2js+9CE6jEOCNODR22x18OBqFf0XCxIs0JKSMVBphc/gT6ohgv7jUsMyKt7xkD6iUMe2GWeXODguhAM+T924qf3Rnh5e71eXGiH16irsGhqHRGUWy3NarVHtRHs4iVwhtVWEAeZdqu7JwQASJuNLOqpS9T7IyUrIT+q6kA8jYp/gMCoJeV5tSx2oYNQSAWLckwkzHJZPZZR78xG72ZPNqLwN/OuJK5QY75duEHuvdsiLCDL6P0a7c2FdNQHQJWII75qqD/gf2X+ApBPqrjUidQrAAAAAElFTkSuQmCC"},1368:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/c3.case.3-2961bf0760249ca33fe005fdc00ba14d.png"},2492:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/c3.case-6e1171546823ed86cfaad5b9e7c0caad.png"},1299:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/c3.case1-cd99baddca72293e7f190f48910e886d.png"},5441:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/c3.case2-361513c6f8299d880e469516fe0c5167.png"},7865:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/c3.detail-526ea3c4b455839f8612c34d8bbb4017.png"},2591:(e,t,a)=>{a.d(t,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAAGgrv1cAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK4UExURR0dHRsdHRgcHRYcHBUcHBwdHRgcHB8dHTIgHzsiIEMkIUMjITwiIBodHSAdHj0jIWkpJJsxKrQ2Lck7L8k6L7U3LZwyKmoqJT4jISEeHSofHmgpJrE3Lc47MbY3LaI0K5cyKpYyKqI0LLY3LtA7MbM2LWopJSsfHxkcHBkdHIMuKNA7MHcsJ0ckISMdHQ4bHCMeHkUjIXYrJ7M3LtE7MYMtKCsfHhocHSMeHYEtJ9I8MJkyKkMjIBEbGxUbHBAbHEEjIJoyK9I7MIAtKCUeHl8oI54yKjEgHxQcHBccHBIbHDAgH58zK14oI7A1LLo4Lz0iIBYcHTEhHysgHiwgHhMbHD8jIL44L642LFYmI9Q8MXgsJ3IsJpAwKT8iIBkcHZIxKXErJR4dHX4sJ9U9MVUmI5EwKb84L0QjIUYkIbk2LZ8zKi4gHywfH6Y0K7g2LRQbHEgjIcM6L48wKSAeHbg3La01LSQdHlwnJME5LoovKMA4Lh8dHLE2LSIeHiAdHaQ1LGsqJdM8MWkqJQ4bG6o1LM07MCEdHdA8MaU0LF8oJMo6MM47MF0oJBscHRAbG6s1LB8dHrc3Law1LRccHUkkIaEzK7Y2LbA2LZIwKb84LkYjIUIjIa01LDQgHzYhH641LMI5Lo4vKWEoI9U8MXktJ3csJkwkIkwkIbQ3LXIrJn0sJ1onIy4gHro3Lrc4LUAiIDQhHy8gHxsdHDMhHz4jILk3LrQ2LiwgH18nJJUxKRQcHZoxKl0nIyYeHo4vKBocHDshINY8MYQuKCUeHZIxKtE7MKc0LGcpJUAjISgfHiceHWYpJKg0LBMcHHQrJr85Ls87MKY0LIowKYMvKIgvKNA6L0okInotJqc0K8E5L6k0LHssJ0slIhcdHQ8aHE0lI04lI0EkITUhHxEbHA4aHA4aGwAAAGJXVvEAAADodFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wCyLaC6AAAACXBIWXMAAA6cAAAOnAEHlFPdAAABXklEQVQoU01RsY0EMQh0eBHRtuKIIr6KlRA1oGvAtVzm6EJiS44+IPqMOn7wffCWdg0MzABuZtZs45vULK3t9KamzZ47NRHKQYFr9IEkuJXvKZ3abcKoGHabUZtpL7FGm+NRmWZbr5CTnw4UxbwgojAuRo3Ced8k8VDwI416r7rppwaWyKOulv9ONSF86SpCOF2hsXyWsxj9UT4GnPRMJtnWbyCadvdSrpmCyMbKn3RQj0x9xTT5hqNiZDlTn0XtQuB796NjGr2PnXCIKF8iiBF0cOGkTcGZHw+nJQGeS4cGM6vrmggdIJ/dWWqXoMM03g+A0VWxqYlhUIq/fMWzKozRGfahPGfUwCkXH8DjNJB7+PpYMY7GVxRn3sooQKcYAGuGxsIQhMeB/q0wszseA1S5nKH5YUEXPBAvABthjyUY6CUr/I0wHQCQyY7L/YpdAxGooYElQvDvxU62mdkvXq8/vwkVucQAAAAASUVORK5CYII="},4973:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/c3.report2-d5c615f277fb69144ad647ed0c3b7250.png"},4007:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/c3.savecase-8658b6ba53c97afd69739cc9338c7ffd.png"},2548:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/c4.addlabel-e014b95060e92fa63c29407d3732c7b4.png"}}]);