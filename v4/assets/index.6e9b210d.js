import{C as v}from"./index.b251f9af.js";import{c as B,e as E,p as T,a as y}from"./use-translate.9f14972f.js";import{t as k,b as I,m as U,w as _}from"./with-install.74763816.js";import{H as N}from"./constant.80c6de18.js";import{I as $}from"./index.b817fd06.js";import{p as H,a as K,P as L}from"./index.6ecb02f5.js";import{L as V}from"./index.ccf6f928.js";import{A as D,e as n,B as q,q as z,x as w,D as g,r as W,o as j,a as G,w as S,C as e,d as J,t as M,F as Q}from"./vue-libs.a3cd7f61.js";import{s as x}from"./index.c88a663f.js";import"./use-route.7a9317f3.js";import"./interceptor.2ffde640.js";import"./use-expose.b4c33459.js";import"./use-touch.196fce0c.js";import"./use-lazy-render.4c81c593.js";import"./on-popup-reopen.a53db14c.js";import"./index.663d05d1.js";import"./mount-component.21851ecf.js";const[R,l]=B("action-sheet"),X=E({},H,{title:String,round:k,actions:I(),closeIcon:U("cross"),closeable:k,cancelText:String,description:String,closeOnPopstate:k,closeOnClickAction:Boolean,safeAreaInsetBottom:k}),Y=[...K,"round","closeOnPopstate","safeAreaInsetBottom"];var Z=D({name:R,props:X,emits:["select","cancel","update:show"],setup(i,{slots:t,emit:c}){const u=a=>c("update:show",a),r=()=>{u(!1),c("cancel")},m=()=>{if(i.title)return n("div",{class:l("header")},[i.title,i.closeable&&n($,{name:i.closeIcon,class:[l("close"),N],onClick:r},null)])},f=()=>{if(t.cancel||i.cancelText)return[n("div",{class:l("gap")},null),n("button",{type:"button",class:l("cancel"),onClick:r},[t.cancel?t.cancel():i.cancelText])]},h=(a,p)=>a.loading?n(V,{class:l("loading-icon")},null):t.action?t.action({action:a,index:p}):[n("span",{class:l("name")},[a.name]),a.subname&&n("div",{class:l("subname")},[a.subname])],F=(a,p)=>{const{color:b,loading:o,callback:d,disabled:s,className:P}=a,O=()=>{s||o||(d&&d(a),i.closeOnClickAction&&u(!1),z(()=>c("select",a,p)))};return n("button",{type:"button",style:{color:b},class:[l("item",{loading:o,disabled:s}),P],onClick:O},[h(a,p)])},A=()=>{if(i.description||t.description){const a=t.description?t.description():i.description;return n("div",{class:l("description")},[a])}};return()=>n(L,q({class:l(),position:"bottom","onUpdate:show":u},T(i,Y)),{default:()=>{var a;return[m(),A(),n("div",{class:l("content")},[i.actions.map(F),(a=t.default)==null?void 0:a.call(t)]),f()]}})}});const C=_(Z);const tt={class:"demo-action-sheet-content"},ht=D({__name:"index",setup(i){const t=y({"zh-CN":{option1:"\u9009\u9879\u4E00",option2:"\u9009\u9879\u4E8C",option3:"\u9009\u9879\u4E09",subname:"\u63CF\u8FF0\u4FE1\u606F",showCancel:"\u5C55\u793A\u53D6\u6D88\u6309\u94AE",buttonText:"\u5F39\u51FA\u83DC\u5355",customPanel:"\u81EA\u5B9A\u4E49\u9762\u677F",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u4FE1\u606F",optionStatus:"\u9009\u9879\u72B6\u6001",coloredOption:"\u7740\u8272\u9009\u9879",disabledOption:"\u7981\u7528\u9009\u9879",showDescription:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F"},"en-US":{option1:"Option 1",option2:"Option 2",option3:"Option 3",subname:"Description",showCancel:"Show Cancel Button",buttonText:"Show ActionSheet",customPanel:"Custom Panel",description:"Description",optionStatus:"Option Status",coloredOption:"Colored Option",disabledOption:"Disabled Option",showDescription:"Show Description"}}),c=w(!1),u=w(!1),r=w(!1),m=w(!1),f=w(!1),h=g(()=>[{name:t("option1")},{name:t("option2")},{name:t("option3")}]),F=g(()=>[{name:t("coloredOption"),color:"#ee0a24"},{name:t("disabledOption"),disabled:!0},{loading:!0}]),A=g(()=>[{name:t("option1")},{name:t("option2")},{name:t("option3"),subname:t("subname")}]),a=b=>{c.value=!1,x(b.name)},p=()=>x(t("cancel"));return(b,o)=>{const d=W("demo-block");return j(),G(Q,null,[n(d,{card:"",title:e(t)("basicUsage")},{default:S(()=>[n(e(v),{"is-link":"",title:e(t)("basicUsage"),onClick:o[0]||(o[0]=s=>c.value=!0)},null,8,["title"]),n(e(v),{"is-link":"",title:e(t)("showCancel"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["title"]),n(e(v),{"is-link":"",title:e(t)("showDescription"),onClick:o[2]||(o[2]=s=>f.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(d,{card:"",title:e(t)("optionStatus")},{default:S(()=>[n(e(v),{"is-link":"",title:e(t)("optionStatus"),onClick:o[3]||(o[3]=s=>m.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(d,{card:"",title:e(t)("customPanel")},{default:S(()=>[n(e(v),{"is-link":"",title:e(t)("customPanel"),onClick:o[4]||(o[4]=s=>r.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(e(C),{show:c.value,"onUpdate:show":o[5]||(o[5]=s=>c.value=s),actions:e(h),onSelect:a},null,8,["show","actions"]),n(e(C),{show:u.value,"onUpdate:show":o[6]||(o[6]=s=>u.value=s),actions:e(h),"close-on-click-action":"","cancel-text":e(t)("cancel"),onCancel:p},null,8,["show","actions","cancel-text"]),n(e(C),{show:f.value,"onUpdate:show":o[7]||(o[7]=s=>f.value=s),actions:e(A),"close-on-click-action":"","cancel-text":e(t)("cancel"),description:e(t)("description")},null,8,["show","actions","cancel-text","description"]),n(e(C),{show:m.value,"onUpdate:show":o[8]||(o[8]=s=>m.value=s),"close-on-click-action":"",actions:e(F),"cancel-text":e(t)("cancel")},null,8,["show","actions","cancel-text"]),n(e(C),{show:r.value,"onUpdate:show":o[9]||(o[9]=s=>r.value=s),title:e(t)("title")},{default:S(()=>[J("div",tt,M(e(t)("content")),1)]),_:1},8,["show","title"])],64)}}});export{ht as default};