import{h as _,e as F,c as H,i as K}from"./use-translate.a8ac0154.js";import{n as C,t as k,u as M,m as b,w as N}from"./with-install.6409cc32.js";import{N as O,O as Y,x as j,z as G,C as S,B as U,E as V,P as $,J,e as f,T as Q,Q as Z,F as q,j as W,v as X,H as ee}from"./vue-libs.4d090e76.js";import{c as oe}from"./interceptor.92cc09c7.js";import{u as te}from"./use-expose.7071738f.js";import{u as ne}from"./use-touch.66e4202e.js";import{o as se,u as ae}from"./index.4a4661ca.js";import{g as ce}from"./index.cbbbdc40.js";import{u as re}from"./use-lazy-render.a4eed0b1.js";import{P as le}from"./on-popup-reopen.8d8043ad.js";import{I as ie}from"./index.fc97feb1.js";import{O as ue}from"./index.af34d444.js";const g={show:Boolean,zIndex:C,overlay:k,duration:C,teleport:[String,Object],lockScroll:k,lazyRender:k,beforeClose:Function,overlayStyle:Object,overlayClass:M,transitionAppear:Boolean,closeOnClickOverlay:k},Se=Object.keys(g);let p=0;const z="van-overflow-hidden";function de(e,t){const s=ne(),a=r=>{s.move(r);const w=s.deltaY.value>0?"10":"01",h=ce(r.target,e.value),{scrollHeight:l,offsetHeight:y,scrollTop:m}=h;let u="11";m===0?u=y>=l?"00":"01":m+y>=l&&(u="10"),u!=="11"&&s.isVertical()&&!(parseInt(u,2)&parseInt(w,2))&&_(r,!0)},n=()=>{document.addEventListener("touchstart",s.start),document.addEventListener("touchmove",a,{passive:!1}),p||document.body.classList.add(z),p++},c=()=>{p&&(document.removeEventListener("touchstart",s.start),document.removeEventListener("touchmove",a),p--,p||document.body.classList.remove(z))},v=()=>t()&&n(),i=()=>t()&&c();se(v),O(i),Y(i),j(t,r=>{r?n():c()})}const fe=F({},g,{round:Boolean,position:b("center"),closeIcon:b("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:b("top-right"),safeAreaInsetBottom:Boolean}),[ve,L]=H("popup");let B=2e3;var me=G({name:ve,inheritAttrs:!1,props:fe,emits:["open","close","click","opened","closed","update:show","click-overlay","click-close-icon"],setup(e,{emit:t,attrs:s,slots:a}){let n,c;const v=S(),i=S(),r=re(()=>e.show||!e.lazyRender),w=U(()=>{const o={zIndex:v.value};if(K(e.duration)){const d=e.position==="center"?"animationDuration":"transitionDuration";o[d]=`${e.duration}s`}return o}),h=()=>{n||(e.zIndex!==void 0&&(B=+e.zIndex),n=!0,v.value=++B,t("open"))},l=()=>{n&&oe(e.beforeClose,{done(){n=!1,t("close"),t("update:show",!1)}})},y=o=>{t("click-overlay",o),e.closeOnClickOverlay&&l()},m=()=>{if(e.overlay)return f(ue,{show:e.show,class:e.overlayClass,zIndex:v.value,duration:e.duration,customStyle:e.overlayStyle,onClick:y},{default:a["overlay-content"]})},u=o=>{t("click-close-icon",o),l()},A=()=>{if(e.closeable)return f(ie,{role:"button",tabindex:0,name:e.closeIcon,class:L("close-icon",e.closeIconPosition),classPrefix:e.iconPrefix,onClick:u},null)},E=o=>t("click",o),T=()=>t("opened"),D=()=>t("closed"),R=r(()=>{var P;const{round:o,position:d,safeAreaInsetBottom:I}=e;return W(f("div",ee({ref:i,style:w.value,class:[L({round:o,[d]:d}),{"van-safe-area-bottom":I}],onClick:E},s),[(P=a.default)==null?void 0:P.call(a),A()]),[[X,e.show]])}),x=()=>{const{position:o,transition:d,transitionAppear:I}=e,P=o==="center"?"van-fade":`van-popup-slide-${o}`;return f(Q,{name:d||P,appear:I,onAfterEnter:T,onAfterLeave:D},{default:R})};return j(()=>e.show,o=>{o?h():(n=!1,t("close"))}),te({popupRef:i}),de(i,()=>e.show&&e.lockScroll),ae("popstate",()=>{e.closeOnPopstate&&(l(),c=!1)}),V(()=>{e.show&&h()}),$(()=>{c&&(t("update:show",!0),c=!1)}),O(()=>{e.show&&(l(),c=!0)}),J(le,()=>e.show),()=>e.teleport?f(Z,{to:e.teleport},{default:()=>[m(),x()]}):f(q,null,[m(),x()])}});const ge=N(me);export{ge as P,Se as a,g as p};