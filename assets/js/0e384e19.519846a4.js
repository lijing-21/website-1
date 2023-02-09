"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},o="About AREX",s={unversionedId:"intro",id:"intro",title:"About AREX",description:"AREX",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/website/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Get Started",permalink:"/website/docs/category/get-started"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Background",id:"background",level:3},{value:"What is AREX?",id:"what-is-arex",level:3},{value:"Operating Principle",id:"operating-principle",level:4},{value:"Technical Principle",id:"technical-principle",level:4},{value:"Advantages",id:"advantages",level:3},{value:"Low Cost",id:"low-cost",level:4},{value:"Diversity Support",id:"diversity-support",level:4},{value:"Stable running of test cases",id:"stable-running-of-test-cases",level:4},{value:"Quickly reproduce online issues in local environment",id:"quickly-reproduce-online-issues-in-local-environment",level:4},{value:"Safe and stable",id:"safe-and-stable",level:4},{value:"Good functional testing support",id:"good-functional-testing-support",level:4},{value:"Technical Implementation",id:"technical-implementation",level:2},{value:"Trace Transfer",id:"trace-transfer",level:3},{value:"Java Executors",id:"java-executors",level:4},{value:"ForkJoinPool",id:"forkjoinpool",level:4},{value:"Async",id:"async",level:4},{value:"Other",id:"other",level:4},{value:"Version Management",id:"version-management",level:5},{value:"Time Management",id:"time-management",level:5},{value:"Local Cache",id:"local-cache",level:5},{value:"Code Isolation and Interoperability",id:"code-isolation-and-interoperability",level:5},{value:"AREX Composition",id:"arex-composition",level:3},{value:"Front",id:"front",level:4},{value:"Schedule Service",id:"schedule-service",level:4},{value:"Storage Service",id:"storage-service",level:4},{value:"Report Service",id:"report-service",level:4},{value:"Data Storage",id:"data-storage",level:4}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"about-arex"},"About AREX"),(0,i.kt)("img",{src:"https://avatars.githubusercontent.com/u/103105168?s=200&v=4",alt:"Arex Icon",width:"27",height:""}),"AREX",(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Real automated API testing with real data.")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("h3",{id:"background"},"Background"),(0,i.kt)("p",null,"For simple services that have just come online, software testing can be handled through regular automated and some manual testing. However, for more complex online business systems that undergo frequent iterations, it is especially important to ensure the correctness of the core business functions when modifications are made."),(0,i.kt)("p",null,"Traditional automation testing often requires amount of human resources for test data and scripts preparation, and may not provide sufficient coverage to meet requirements. To ensure the stability of online systems, both developers and testers are facing the challenge of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After development, it can be challenging to quickly verify locally and identify initial issues."),(0,i.kt)("li",{parentName:"ul"},"Preparing test data, writing and maintaining automation scripts requires a lot of human effort, and it is difficult to ensure coverage."),(0,i.kt)("li",{parentName:"ul"},"It is difficult to verify the data written to services, and testing may produce dirty data, such as in our core trading system, which may write data to databases, message queues, Redis, etc. This data is often difficult to verify, and the data generated by testing is also difficult to clean up."),(0,i.kt)("li",{parentName:"ul"},"Online issues are difficult to reproduce locally, making it difficult to troubleshoot.")),(0,i.kt)("h3",{id:"what-is-arex"},"What is AREX?"),(0,i.kt)("p",null,"AREX is a tool that automates regression testing by recording real traffic from the online environment to the test environment, solving the problem of regression testing. AREX uses Java's instrument to implement data collection and automated mocking without code intrusion. The intelligent mocking mechanism allows the test to run the code on the application being tested, without causing real external interactions (such as writing to the database or calling other services), and also perfectly supports testing of written interfaces (such as core transaction systems and inventory systems)."),(0,i.kt)("p",null,"AREX supports various types of API testing, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API testing, similar to Postman testing, with case setting, execution, and result assertions."),(0,i.kt)("li",{parentName:"ul"},"Comparison testing, which sends the same request to different interfaces and compares the differences in the returned results, supporting both non-MOCK and AREX real data MOCK testing."),(0,i.kt)("li",{parentName:"ul"},"Replay testing, which uses real production data for comparison testing.")),(0,i.kt)("h4",{id:"operating-principle"},"Operating Principle"),(0,i.kt)("p",null,"We assume that the applications in production environment will normally respond to users' requests. Through the AOP approach, we save the request parameters and return results, as well as some snapshot data of the execution process, such as the input and output of accessing the database and the input and output of accessing the remote server. Then the snapshot data is sent to the test machine (which with code changes) to complete a replay process. By comparing the drop data, the data of the backend requests and the returned results with the data of the real online requests, the differences are found and the problems of the system under test are identified."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(898).Z,width:"1080",height:"218"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"xxxTestCase: The collected data that used as a test CASE during Replay."),(0,i.kt)("li",{parentName:"ul"},"xxxMock\uff1aMock with captured data during playback, instead of real data."),(0,i.kt)("li",{parentName:"ul"},"xxxExpect and xxxReal\uff1aAfter the test, the corresponding data will be verified to discover hidden dangers in the code")),(0,i.kt)("h4",{id:"technical-principle"},"Technical Principle"),(0,i.kt)("p",null,"In JDK1.5, Java introduced the java.lang.Instrument package, which provides tools to help developers dynamically modify the Class in the system at runtime to enhance the function of the original class. Many tools are now based on this technology, such as the open-source arthas and monitoring tool SkyWalking from Alibaba, and AREX's data collection and automatic Mock are also based on this technology."),(0,i.kt)("h3",{id:"advantages"},"Advantages"),(0,i.kt)("h4",{id:"low-cost"},"Low Cost"),(0,i.kt)("p",null,"No code intrusion, low integration cost.\nNo need to write test cases, and massive online requests can also ensure high coverage.\nStaking code is simple enough for low performance loss."),(0,i.kt)("h4",{id:"diversity-support"},"Diversity Support"),(0,i.kt)("p",null,"Supports validation of data written to the service, validation of database, message queue, Redis data, and even validation of runtime in-memory data. Does not produce dirty data during testing."),(0,i.kt)("h4",{id:"stable-running-of-test-cases"},"Stable running of test cases"),(0,i.kt)("p",null,"Supports automatic data collection and mock for various mainstream technical frameworks, see: arex_java, and supports local time and cache, accurately restoring the data environment during production execution during replay."),(0,i.kt)("h4",{id:"quickly-reproduce-online-issues-in-local-environment"},"Quickly reproduce online issues in local environment"),(0,i.kt)("p",null,"Supports one-click local debugging, allowing for quick debugging of online issues in a local environment."),(0,i.kt)("h4",{id:"safe-and-stable"},"Safe and stable"),(0,i.kt)("p",null,"Code isolation is also implemented in AREX, which also provides health management. During times of high system activity, AREX will intelligently reduce or turn off data collection frequency."),(0,i.kt)("h4",{id:"good-functional-testing-support"},"Good functional testing support"),(0,i.kt)("p",null,"Support for test scripts and simple editing of the collected data to achieve fixed test cases, avoiding the need for extensive test data preparation."),(0,i.kt)("h2",{id:"technical-implementation"},"Technical Implementation"),(0,i.kt)("p",null,"We have implemented bytecode modification using the ByteBuddy library and have encountered various challenges in the process."),(0,i.kt)("h3",{id:"trace-transfer"},"Trace Transfer"),(0,i.kt)("p",null,"During data collection, AREX collects multiple pieces of data for the same request (e.g. request/response, requests and responses for other service calls), and we need to link these pieces of data together to form a complete test case. However, our application often uses an asynchronous framework and extensively uses threads, which makes it difficult to link the data."),(0,i.kt)("h4",{id:"java-executors"},"Java Executors"),(0,i.kt)("p",null,"Java and various frameworks provide many thread pool implementations, and we need to ensure that Trace data can be correctly transferred between threads. Therefore, we have modified Runnable/Callable as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ableWrapper implements Runnable { \n  private final Runnable runnable; \n  private final TraceTransmitter traceTransmitter;\n  private RunnableWrapper(Runnable runnable) { \n    this.runnable = runnable; \n    this.traceTransmitter = TraceTransmitter.create(); \n  }\n\n  @Override public void run() { \n    try (TraceTransmitter tm = traceTransmitter.transmit()) { \n      runnable.run(); \n    } \n  }\n\n  @Override public boolean equals(Object o) { \n    if (this == o) return true; \n    if (o == null || getClass() != o.getClass()) \n      return false;\n    RunnableWrapper that = (RunnableWrapper) o; \n    return runnable.equals(that.runnable); \n  }\n\n  @Override public int hashCode() { \n    return runnable.hashCode(); \n  }\n\n  @Override public String toString() { \n    return this.getClass().getName() + " - " + runnable.toString(); \n  }\n\n  public static Runnable get(Runnable runnable) { \n    if (null == runnable || TraceContextManager.get() == null) { \n      return runnable; \n    }\n\n    if (runnable instanceof RunnableWrapper) { \n      return runnable; \n    } \n    return new RunnableWrapper(runnable); \n  }\n}\n')),(0,i.kt)("p",null,"Then, the code modifies various thread pools by replacing Runnable/Callable with Wrapper, and Wrapper ensures the correct transfer of Trace through TraceTransmitter internally."),(0,i.kt)("h4",{id:"forkjoinpool"},"ForkJoinPool"),(0,i.kt)("p",null,"CompletableFuture and the default parallel stream processing of data sets use ForkJoinPool, which is also commonly used in heavily parallelized applications. This has significant differences from the typical thread pool implementation and requires separate handling. We have modified the ForkJoinPool task unit ForkJoinTask, which is more complex to implement than Runnable and is difficult to handle in a simple way. In order to not disrupt the original class structure (Agent on attach method does not support modification either), we did not add a field on this class to implement data transfer, but instead used a WeakCache for data buffering to ensure trace transfer between the task generation and execution threads."),(0,i.kt)("h4",{id:"async"},"Async"),(0,i.kt)("p",null,"There are many asynchronous frameworks (Reactor, RxJava etc.) in the Java ecosystem, and many libraries also provide asynchronous implementations, such as lettuce provides both synchronous and asynchronous access to Redis. Different scenarios often require different solutions. For example, ApacheAsyncClient uses fixed running threads to listen for responses and initiate Callbacks. We need to ensure that Trace is correctly passed across threads in the entire process of calling, listening and callback. You can refer to ApacheAsyncClient for specific implementation."),(0,i.kt)("h4",{id:"other"},"Other"),(0,i.kt)("h5",{id:"version-management"},"Version Management"),(0,i.kt)("p",null,"Popular components often have multiple versions in use in different systems at the same time, and the implementation methods of different versions may vary greatly or even be incompatible. AREX also supports multiple versions (such as Jedis). We need to ensure that we can inject bytecode based on the correct version to avoid running errors. Bytecode injection is performed during class loading, so we must identify the component versions that the application depends on before these classes are loaded, and then match the versions during class loading to ensure correct code injection. You can refer to VersionMatch for part of the implementation."),(0,i.kt)("h5",{id:"time-management"},"Time Management"),(0,i.kt)("p",null,"Many business systems are time-sensitive, and different time accesses often return different results. Therefore, we have also implemented the time Mock function. Because replay is executed in parallel, it is not appropriate to modify the machine time of the test machine (and many servers cannot modify the current time). Therefore, the time Mock is still implemented at the code level.\nDuring data collection, we record the current time for each case. During replay, we will mock System.currentTimeMills (many time underlying Java is through this method), and the time-sensitive methods related to the current time will get the correct time value through this method. This can ensure that the replay result is consistent with the collection."),(0,i.kt)("h5",{id:"local-cache"},"Local Cache"),(0,i.kt)("p",null,"Business applications may use various caches to improve runtime performance, and there may be significant differences in these data in different environments (syncing data between multiple environments is often a complex process). These data differences may result in completely different execution results. To avoid this problem, AREX also supports the collection and Mock of local cache data. With some simple configuration, data can be automatically collected and mocked. Of course, this function also supports Mock of various memory data."),(0,i.kt)("h5",{id:"code-isolation-and-interoperability"},"Code Isolation and Interoperability"),(0,i.kt)("p",null,"To ensure system stability, the AREX agent's framework code is loaded in a separate Class loader and is not interoperable with application code. To ensure that injected code can be accessed correctly at runtime, we have also modified the ClassLoader to ensure that runtime code is loaded by the correct ClassLoader (think SpringBoot's LaunchedURLClassLoader)."),(0,i.kt)("h3",{id:"arex-composition"},"AREX Composition"),(0,i.kt)("p",null,"AREX is composed of multiple modules, including Front, Schedule Service, Storage Service, Report Service, and data storage such as Mongodb, Redis."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u7ec4\u6210\u6a21\u5757",src:n(5785).Z,width:"834",height:"587"})),(0,i.kt)("h4",{id:"front"},"Front"),(0,i.kt)("p",null,"The AREX Front End is the front-end operator interface for AREX tools."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u524d\u7aef\u754c\u9762",src:n(783).Z,width:"3836",height:"1861"})),(0,i.kt)("h4",{id:"schedule-service"},"Schedule Service"),(0,i.kt)("p",null,"The Schedule Service is responsible for sending case replay requests to the tested service and triggering result comparisons and dependency comparisons after the service responds."),(0,i.kt)("h4",{id:"storage-service"},"Storage Service"),(0,i.kt)("p",null,"The Storage Service is responsible for receiving and storing the actual data of requests, responses, and dependencies captured by Agent, and returning stored data as requested by Agent during replay."),(0,i.kt)("h4",{id:"report-service"},"Report Service"),(0,i.kt)("p",null,"The Report Service is responsible for collecting and displaying test results and issues during the execution of replay testing."),(0,i.kt)("h4",{id:"data-storage"},"Data Storage"),(0,i.kt)("p",null,"The Redis storage service is responsible for caching data during replay;"),(0,i.kt)("p",null,"The MongoDB storage service is responsible for storing recorded data and replay results."))}p.isMDXComponent=!0},5785:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/arch-d5550e2b2b3094a185b1ab167fdcb3c4.png"},898:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/arexintroduce-c3237bba73ad273a38c8e24e26664775.jpeg"},783:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/front-7b9e74df0e854909b8d0d33bbad98692.png"}}]);