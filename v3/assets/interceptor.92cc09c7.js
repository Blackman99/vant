import{l as r,n as e}from"./use-translate.a8ac0154.js";function p(t,{args:a=[],done:i,canceled:s}){if(t){const l=t.apply(null,a);r(l)?l.then(f=>{f?i():s&&s()}).catch(e):l?i():s&&s()}else i()}export{p as c};