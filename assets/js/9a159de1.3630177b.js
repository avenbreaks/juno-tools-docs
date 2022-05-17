"use strict";(self.webpackChunkjunotools_docs=self.webpackChunkjunotools_docs||[]).push([[516],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6480:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l="Guide",d={unversionedId:"dashboards/cw-1/guide",id:"dashboards/cw-1/guide",title:"Guide",description:"In this guide, we'll go over how to instantiate, query, and execute CW-1 methods seen below.",source:"@site/docs/03-dashboards/03-cw-1/02-guide.md",sourceDirName:"03-dashboards/03-cw-1",slug:"/dashboards/cw-1/guide",permalink:"/docs/dashboards/cw-1/guide",editUrl:"https://github.com/CosmosContracts/juno-tools-docs/edit/main/docs/03-dashboards/03-cw-1/02-guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/dashboards/cw-1/introduction"},next:{title:"Introduction",permalink:"/docs/dashboards/cw-20/introduction"}},c=[{value:"Instantiate",id:"instantiate",children:[],level:2},{value:"Query",id:"query",children:[],level:2},{value:"Execute",id:"execute",children:[],level:2}],u={toc:c};function p(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"guide"},"Guide"),(0,i.kt)("p",null,"In this guide, we'll go over how to instantiate, query, and execute CW-1 methods seen below."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6916).Z,width:"938",height:"87"})),(0,i.kt)("h2",{id:"instantiate"},"Instantiate"),(0,i.kt)("p",null,"Instantiating a CW-1 contract is simple with only 1 thing to decide, which is whether you want the contract admin to be changeable or not."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7595).Z,width:"938",height:"435"})),(0,i.kt)("p",null,"In case you choose ",(0,i.kt)("strong",{parentName:"p"},"Not Changeable"),", you will have to create a new contract in case you want a new admin address."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can add multiple admin addresses by clicking the ",(0,i.kt)("strong",{parentName:"p"},"+")," sign."))),(0,i.kt)("h2",{id:"query"},"Query"),(0,i.kt)("p",null,"Querying a CW-1 token means gathering information related to that contract directly from the blockchain."),(0,i.kt)("p",null,"Using the dashboard, it is possible to query any CW-1 contract for"),(0,i.kt)("img",{src:"/img/cw-1/queries.png",width:"400"}),(0,i.kt)("p",null,"However, each query requires at least 1 input which is the CW-1 contract address. "),(0,i.kt)("p",null,"Checking the ",(0,i.kt)("strong",{parentName:"p"},"Admins"),", ",(0,i.kt)("strong",{parentName:"p"},"All Permissions"),", and ",(0,i.kt)("strong",{parentName:"p"},"All Allowances")," queries do not require additional parameters other than CW-1 contract address. Required parameters for other queries are shown below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Allowance")," which is an amount allowed by the admin to another address for sending, transferring, delegating, redelegating and undelegating.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Spender address"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"All Allowance")," is the list of all allowances the admin has provided."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Permissions")," is the permissions an address have provided by the admin.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Address to check permissions"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"All Permissions")," is the list of all addresses and their assigned permissions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Can Execute")," explanation will be added shortly.")),(0,i.kt)("h2",{id:"execute"},"Execute"),(0,i.kt)("p",null,"A CW-1 Contract contains a set of methods to control and interact with the token it contains. JunoTools let's you easily execute those methods as you wish with just a click."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8083).Z,width:"950",height:"680"})),(0,i.kt)("p",null,"All the messages that can be executed are explained below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Execute"),": To execute a message, an admin has to give permission to an address. The address can execute the messages they have the permission which are as follows",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Send"),": explanation will be added shortly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delegate"),": explanation will be added shortly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Undelegate"),": explanation will be added shortly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Redelegate"),": explanation will be added shortly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Withdraw"),": explanation will be added shortly."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Freeze*"),": If the contract is initially set as ",(0,i.kt)("strong",{parentName:"li"},"Changeable"),", an admin can freeze the contract and stopping anyone from adding a new admin."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Update Admins"),": Add a set of new admins to replace the older ones. This is possible if the contract is not frozen and is changeable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Increase Allowance"),": Increase the allowance of an address based on the contracts balance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Decrease Allowance"),": Decrease the allowance of an address based on the contracts balance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Set Permissions*"),": Set new permissions for an address.")),(0,i.kt)("p",null,"*: admin only"),(0,i.kt)("p",null,"After each execution, the corresponding transaction hash will be prompted for your information."),(0,i.kt)("img",{src:"/img/cw-1/tx-hash.png",width:"400"}),(0,i.kt)("p",null,"Congrats! You have successfully learned how to create a CW-1 contract and interact with it."))}p.isMDXComponent=!0},7595:function(e,t,n){t.Z=n.p+"assets/images/cw-1-instantiate-7253a088e14a751ec2f24f1e04db9ead.png"},8083:function(e,t,n){t.Z=n.p+"assets/images/execute-a7b6c2ca2831da509f3b1724e1e73936.png"},6916:function(e,t,n){t.Z=n.p+"assets/images/methods-faae6898b374028529c0e62cebf3ed7d.png"}}]);