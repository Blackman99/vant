import{t,a as e}from"./use-translate.bf1abf23.js";import{c as a,w as d}from"./with-install.af140ae3.js";import{C as i}from"./index.8591e547.js";import{B as n,f as o,E as s,r as l,a as r,w as m,D as c,F as p,o as u}from"./vendor.09b5b9a9.js";import{T as f}from"./function-call.2f25783d.js";import"./use-route.bc60204d.js";import"./index.5afcfd01.js";import"./unit.36efb2dd.js";import"./mount-component.14353bf5.js";import"./use-expose.028ef04d.js";import"./index.02c1c9ae.js";import"./interceptor.9b43abfe.js";import"./use-touch.871001cd.js";import"./event.7d40caae.js";import"./index.2baefb73.js";import"./utils.fd06bcd3.js";import"./index.e4b17f1e.js";import"./use-lazy-render.bae5ade9.js";import"./on-popup-reopen.d2d6f1c6.js";import"./index.bb1b1d01.js";import"./index.4893bdc2.js";const[b,j,C]=a("contact-card");const x=d(n({name:b,props:{tel:String,name:String,addText:String,editable:t,type:{type:String,default:"add"}},emits:["click"],setup(t,{emit:e}){const a=a=>{t.editable&&e("click",a)},d=()=>"add"===t.type?t.addText||C("addText"):[o("div",null,[`${C("name")}：${t.name}`]),o("div",null,[`${C("tel")}：${t.tel}`])];return()=>o(i,{center:!0,icon:"edit"===t.type?"contact":"add-square",class:j([t.type]),border:!1,isLink:t.editable,valueClass:j("value"),onClick:a},{value:d})}}));var y=n({setup(t){const a=e({"zh-CN":{add:"新增",edit:"编辑",name:"张三",addContact:"添加联系人",editContact:"编辑联系人"},"en-US":{add:"Add",edit:"Edit",name:"John Snow",addContact:"Add Contact",editContact:"Edit Contact"}}),d=s((()=>({name:a("name"),tel:"13000000000"}))),i=()=>f(a("add")),n=()=>f(a("edit"));return(t,e)=>{const s=l("demo-block");return u(),r(p,null,[o(s,{title:c(a)("addContact")},{default:m((()=>[o(c(x),{type:"add",onClick:i})])),_:1},8,["title"]),o(s,{title:c(a)("editContact")},{default:m((()=>[o(c(x),{type:"edit",name:c(d).name,tel:c(d).tel,onClick:n},null,8,["name","tel"])])),_:1},8,["title"]),o(s,{title:c(a)("uneditable")},{default:m((()=>[o(c(x),{type:"edit",name:c(d).name,tel:c(d).tel,editable:!1},null,8,["name","tel"])])),_:1},8,["title"])],64)}}});export{y as default};