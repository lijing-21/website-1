"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9015],{3905:(e,n,t)=>{t.d(n,{Zo:()=>A,kt:()=>p});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},A=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},v="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,A=o(e,["components","mdxType","originalType","parentName"]),v=l(t),d=i,p=v["".concat(c,".").concat(d)]||v[d]||m[d]||a;return t?r.createElement(p,s(s({ref:n},A),{},{components:t})):r.createElement(p,s({ref:n},A))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[v]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8743:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:4},s=void 0,o={unversionedId:"chapter2/Managing Environments",id:"chapter2/Managing Environments",title:"Managing Environments",description:"A project will be in different environments at different stages, such as development environment, test environment, and production environment. Usually, different environments have different pre-fixed URLs and different parameter values for the interfaces. Changing the pre-fixed URL and parameters frequently due to different environments is very inconvenient. Different environments can be created in AREX and different environment variables can be set in each environment. When testing in different environments, you can simply switch environments.",source:"@site/docs/chapter2/Managing Environments.md",sourceDirName:"chapter2",slug:"/chapter2/Managing Environments",permalink:"/website/docs/chapter2/Managing Environments",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter2/Managing Environments.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Writing Scripts",permalink:"/website/docs/chapter2/Writing Scripts"},next:{title:"Traffic Replay",permalink:"/website/docs/category/traffic-replay"}},c={},l=[{value:"Creating environments",id:"creating-environments",level:2},{value:"Adding environment variables",id:"adding-environment-variables",level:3},{value:"Accessing environments",id:"accessing-environments",level:2},{value:"Selecting an active environment",id:"selecting-an-active-environment",level:3},{value:"Editing environment variables",id:"editing-environment-variables",level:3},{value:"Setting environment variables from scripts",id:"setting-environment-variables-from-scripts",level:3}],A={toc:l},v="wrapper";function m(e){let{components:n,...a}=e;return(0,i.kt)(v,(0,r.Z)({},A,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A project will be in different environments at different stages, such as development environment, test environment, and production environment. Usually, different environments have different pre-fixed URLs and different parameter values for the interfaces. Changing the pre-fixed URL and parameters frequently due to different environments is very inconvenient. Different environments can be created in AREX and different environment variables can be set in each environment. When testing in different environments, you can simply switch environments."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Managing environments",src:t(2114).Z,width:"3840",height:"1171"})),(0,i.kt)("p",null,"You can access all environments from ",(0,i.kt)("strong",{parentName:"p"},"Environment")," in the sidebar."),(0,i.kt)("h2",{id:"creating-environments"},"Creating environments"),(0,i.kt)("p",null,"To create a new environment, select ",(0,i.kt)("strong",{parentName:"p"},"Environment")," in the sidebar and select ",(0,i.kt)("strong",{parentName:"p"},"+"),"."),(0,i.kt)("img",{src:"https://i.328888.xyz/2023/02/10/R4gDV.png",alt:"new environment",width:"400",height:""}),(0,i.kt)("p",null,"Select the new environment to open the environment editor."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"edit environments",src:t(2070).Z,width:"3840",height:"1744"})),(0,i.kt)("p",null,"Select the ",(0,i.kt)("img",{src:t(5676).Z,width:"25",height:"26"})," icon to rename this environment."),(0,i.kt)("p",null,"Select the ",(0,i.kt)("img",{src:t(4818).Z,width:"23",height:"24"})," icon to make it the active environment."),(0,i.kt)("img",{src:"https://i.328888.xyz/2023/02/10/RUDAN.png",alt:"RUDAN.png",width:"400",height:""}),(0,i.kt)("p",null,"Select the ",(0,i.kt)("img",{src:t(9749).Z,width:"26",height:"27"})," icon to duplicate current environment."),(0,i.kt)("img",{src:"https://i.328888.xyz/2023/02/10/R4Lz5.png",alt:"R4Lz5.png",width:"300",height:""}),(0,i.kt)("h3",{id:"adding-environment-variables"},"Adding environment variables"),(0,i.kt)("p",null,"Environment variables are variables that change in response to environment switches. You can add variables to an active (currently selected) environment by opening the environment from the sidebar and editing it in the tab that opens."),(0,i.kt)("p",null,"You can the variable names and values inline, or use the ",(0,i.kt)("strong",{parentName:"p"},"Disable")," and ",(0,i.kt)("strong",{parentName:"p"},"Remove")," icon to disable and delete a variable. Enter the name in ",(0,i.kt)("strong",{parentName:"p"},"VARIABLE")," and values in ",(0,i.kt)("strong",{parentName:"p"},"VALUE")," for a new variable on a new line. Then select the ",(0,i.kt)("img",{src:t(8148).Z,width:"22",height:"24"})," icon to save your changes."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Setting environment variables",src:t(3066).Z,width:"2482",height:"848"})),(0,i.kt)("h2",{id:"accessing-environments"},"Accessing environments"),(0,i.kt)("p",null,"You can access your environment variables from your request elements, including the URL, parameters, body data, and test scripts."),(0,i.kt)("h3",{id:"selecting-an-active-environment"},"Selecting an active environment"),(0,i.kt)("p",null,"To use the variables in an environment, select it from the environment selector at the right corner of the workbench."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u5207\u6362\u73af\u5883",src:t(4949).Z,width:"2874",height:"1057"})),(0,i.kt)("p",null,"By selecting an environment through the environment selector, AREX recognizes it as the active one and executes all requests utilizing values from that environment in case your requests refer to environment variables."),(0,i.kt)("p",null,"To use an environment variable in a request, just reference it by name, surrounded with double curly braces like: ",(0,i.kt)("inlineCode",{parentName:"p"},"{{VARIABLE}}"),". The system will automatically replace them with the set values during actual execution."),(0,i.kt)("p",null,"You can use the same variable notation in request URLs, parameters, headers, and body data. Move your cursor to a variable reference to view its value."),(0,i.kt)("img",{src:"https://i.328888.xyz/2023/02/10/RD1NE.png",alt:"RD1NE.png",width:"700",height:""}),(0,i.kt)("h3",{id:"editing-environment-variables"},"Editing environment variables"),(0,i.kt)("p",null,"You are able to edit environments in the workspace where you have ",(0,i.kt)("strong",{parentName:"p"},"Editor")," access. "),(0,i.kt)("p",null,"You can edit the environment name, the names and values of your variables by opening an environment from ",(0,i.kt)("strong",{parentName:"p"},"Environments")," in the sidebar."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"edit environments",src:t(7802).Z,width:"3840",height:"1206"})),(0,i.kt)("h3",{id:"setting-environment-variables-from-scripts"},"Setting environment variables from scripts"),(0,i.kt)("p",null,"You can also update environment variable value via Pre-request and Tests scripts ."),(0,i.kt)("p",null,"Use arex.environment to set an environment variable in the active (currently selected) environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'arex.environment.set("variable_key", "variable_value");\n')),(0,i.kt)("p",null,"Mind that if you write scripts to assign values to environment variables, all requests that refer to these variables will reflect the updates."))}m.isMDXComponent=!0},4949:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/c1.change.environment-9f63b6fc6cc8e248b5a1f1e420f63988.png"},5676:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAF+SURBVEhL3ZU5jsIwFIb/hC4cgAaJpaAi3AHo6bkDS82iFISQLgXLHeipgTug9GmRoIUSZt5TGBY5cciQYuaTLNmW5U+/n+Mo2Wz2ioRRcrncNZVK+cPPc7lcoCYpIFRVher3E0VVFAVJt7+RJJ1OC+cf26+StFotjEYjFoURW9Jut1GtVpHJZKSiWMfV6XRYsFgsYBgGi0zTDDy6t5PcEsznc2y3W57jjb6/hyDeklCCWq32I8jn8xiPxzgcDhgMBjifz/7KZyJLboLZbIbNZoNCoQDLsnA8HjEcDgMFRCRJt9tFvV4XCijB6XTyV4qRSprNJgum0ynW6zULJpMJC/r9vlRASCWVSgWr1YoFxWIRtm1zDXq9XiQBIb3C5XKZr2aj0XgSUA1E64WtVCoF/rQ0TcNyueQ+beq6LhzHCS2yiFAJoes69vs9J4hLoIQKLHuTXqEaeZ7nj+4IJSSg6xoHehFeRYFJ6FbFYbfb+b070pp8grferrj8FwnwBRcXmNZZiYeLAAAAAElFTkSuQmCC"},9749:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAMAAAEiz1/PAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFNUExURSAgIBoaGhgYGBsbGx8fHysrKzIyMjMzMygoKB4eHpCQkMjIyMbGxsXFxYGBgRwcHBYWFmtra5OTk5KSkpWVlZubm9ra2qenpy0tLSwsLEJCQkpKSk9PT05OTlFRUT09PS4uLri4uKWlpXp6er29vcrKysfHx8PDw4aGhrKysqSkpJqamtLS0paWloyMjI2NjYuLi9nZ2bCwsDQ0NDk5OSQkJCYmJiIiIr6+vjU1NZycnLu7uy8vLxkZGa+vr7y8vB0dHa6urrq6uhISEhQUFMvLy4eHh4ODg4WFhXZ2duPj49fX10FBQba2tkhISOjo6I6Ojm5ubt/f30VFRaCgoEdHR7e3t97e3hcXF1RUVFBQUCUlJURERODg4OTk5HJycnNzc3R0dHFxcXd3d9HR0T4+PqysrNbW1ufn55+fnzo6OlNTU1hYWFlZWQAAAATEv9UAAABvdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AP5WdtUAAAAJcEhZcwAADpwAAA6cAQeUU90AAAEmSURBVChTVVIxDgMhDGNj7jt4gIeMEaw3opPYkPj/E2oHquuFK+AYEwNNDnhC6ezckJBvdo5U2koFK7kwaq1NywBbxOPDUQqKD82htJaZzOCXXAPRNYSA+4YGCnaoKvIYNwNLyEtW2vLyjbQ5EXWuvak9HDB6m7NqhRBtKDgcS+cT+pWL6l7oVGYDjYhs3IaoNoWtjUwKrEDu9Q+9OaIoJZ1c1zYfzq31QOy40tc15ww1EVxHH5wEeuKNXqHXish/sTP75O6fUtpppavwpnzuk+9oMD7loVB0Ayd4DtPNHxs/SnWrqEAPFX78R+lRlXk29BwbxvyoZJIT/l61+MRXX7UPElt1zMfiYbV0/j0oNcv71rZ5kav3XtkuFYrcoYjoSU2dOMcX2+Gg00OlhPAAAAAASUVORK5CYII="},3066:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/c2.add.env.parameters-bd4dde3450a8db707bc366fc392b93b2.png"},2070:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/c2.edit.env-a273a1df5f37d9121ebd595c1e84c4bf.png"},7802:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/c2.edit.env2-08cb40bc8fb632b6f773b3a8ab40882b.png"},2114:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/c2.environment-9bffa6b2d239a8de8bc78876d25a7daa.png"},8148:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAMAAAG+Z83vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGhUExURR8fHx0dHRwcHCEhISQkJCMjIyAgICcnJ1lZWX9/f3x8fH19fXt7e3l5eXp6emdnZzExMRkZGR4eHjo6OrKysu7u7tXV1dTU1Nra2uPj49vb29jY2Obm5uDg4JOTkywsLBgYGBoaGjs7O7CwsMDAwF1dXVBQUMXFxYeHh01NTVdXV1FRUWtra7u7u9bW1tHR0SoqKjw8PLGxsaysrBsbGwcHB05OTrq6ulxcXAMDAxISEgoKCjMzM6enp5iYmISEhJCQkCkpKa+vrxQUFFZWVsTExJWVlWZmZmFhYb+/v4mJiUZGRs7Ozs3Nzby8vA8PDysrK5+fn1NTUygoKEdHR0JCQkBAQEVFRcbGxl5eXhMTEyYmJhYWFhUVFaSkpKioqDc3N29vb8HBwZ2dnT4+PrW1tXV1dWNjY0pKSggICBEREYGBgT09PTAwMHZ2dsrKymxsbHJycqOjoy8vL3BwcLi4uL29vYyMjBcXF2pqai0tLSUlJW5ubrOzs9DQ0ICAgKqqqsvLyzY2NtLS0szMzE9PTyIiIjU1NUNDQ0RERAAAAB9cAKgAAACLdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wCFwxXvAAAACXBIWXMAABX9AAAV/QHNcFFhAAABBUlEQVQoU21RwY0EIQyjiftQAZ8UMBKaF1J6yYMa8kCW0vU62bnV3ek8JFgeQwI0M2sIBowcbc7V5tBma0QHZVdbzQ7BKdF8h6A5IlZzgyq5mLaRpoY1xiYmuNqxblUx7mQyMX0j/fDJsdUeXkgOQ9XIpj4g535jDE19npBY2u/kYkd1j3sUnxEBHPJsy6dZckGwASudHid5OJQ9vflTKnnPYxDCutUKc57lXzQL+eq9Z9R0f2S3a8m6zK7p964flN3BVAW6qMH74sXT/T46TZX0lEw39d1F3hs/crnj7MuYaP8p0+1+uO63nF8Oxrd88k75WJXH9pSBvMQMppoiHzIX/gXwAmgh1suDX6e/AAAAAElFTkSuQmCC"},4818:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAMAAAFRpabRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzUExURSAgICEhISIiIh8fHxsbG3Nzc7m5uWBgYB4eHhoaGoODg9fX12xsbBkZGRISEn5+ftPT02ZmZhcXFxgYGEVFRXt7e729vd/f37i4uHl5eUJCQhwcHDg4OJOTk+fn5+Li4ujo6NjY2JCQkDU1NUdHR7S0tMfHx4WFhVVVVVhYWIaGhsjIyOnp6a6urj4+PjIyMqurq5ycnB0dHT09PaWlpaOjo39/f+Hh4TQ0NK2trW5ubru7u9LS0lJSUjc3N52dnXJycjAwMBQUFFlZWdbW1jY2Ng8PD1xcXKCgoC8vLxMTEzMzM6ysrOTk5BYWFi0tLdHR0U9PT11dXbOzs319fSQkJBEREXBwcN3d3dnZ2Y+Pj97e3pmZmU1NTdra2uDg4Obm5m1tbQ4ODtzc3GlpaVZWVoSEhCcnJ+Xl5ZeXl4GBgVRUVE5OTs/Pz9TU1HV1dSgoKBUVFcrKykhISCkpKWRkZCUlJUtLS2NjY0lJSS4uLmdnZ8PDw0pKSlNTU8nJySMjI4yMjMTExCoqKmtra7q6ury8vIKCgiwsLFtbW5GRkSYmJoCAgGhoaIiIiFFRUQAAAJGujVoAAACRdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAy+WGbAAAACXBIWXMAABX9AAAV/QHNcFFhAAABKElEQVQoUz1Ru5ElIQyklAFVOMpABgY+IeCr2sDaEAiEmLebm1s95gmE+gOUNCuWg98pxvm1LDVZszaZbnf8QDv3NRoH02xaDUu3AkNFLXYsQ7jNHgEI8czXT8BpccbbSayFvgyP6Sw7sHVSmLx9704lYYgkgSQ/3TdomD88/ld3uHYIaLjt9ueMGqwtthWLnaPziyyAJ9DtopeMQTnXUdQfmRnPkhmmTyk8Ew2Np1APF0/3O50ifcY3Zfyv06CT8Fs9z0pto3eNK3MMceaiucWcmvFGVVd5ovH/bmdzYCzxxN6zu9gV1XJj7B1lRbvgywWr/VB5wyMW/aRN8DmtVd4LcZISP+PiVDWYH3Iy9DZKVgdpOoaOpsq/uiLvY/vi7x7Sgja/MPsFplJZ6iVTPxEAAAAASUVORK5CYII="}}]);