import{_ as h}from"./Dm8WjGkF.js";import{m as f,n as v,p as g,o as e,c as n,q as i,s as y,a as s,t as _,F as k,v as w,y as C}from"./4DfHR1Dw.js";import{u as x}from"./CJ59Clvv.js";const B={key:1},$={class:"module",id:"catalog"},F={class:"container"},I={class:"row"},b={class:"col-sm-6 col-sm-offset-3"},L={class:"module-title font-alt"},R={class:"row"},q=["onClick"],z={class:"team-image"},A=["src","alt"],D={class:"team-descr font-alt"},E={class:"team-name"},G=f({__name:"index",async setup(N){let o,c;const l=C(),r=v(),{data:d,pending:m,error:S}=([o,c]=g(()=>x(`${l.public.apiBase}catalog/`,"$IIXyx7zwvY")),o=await o,c(),o),u=async a=>{r.push(`/catalog/${a}`)};return(a,U)=>{const p=h;return e(),n("div",null,[i(m)?(e(),y(p,{key:0})):(e(),n("div",B,[s("section",$,[s("div",F,[s("div",I,[s("div",b,[s("h2",L,_(a.$t("products")),1)])]),s("div",R,[(e(!0),n(k,null,w(i(d),t=>(e(),n("div",{class:"mb-sm-20 wow fadeInUp col-sm-6 col-md-3",key:t.name},[s("div",{class:"team-item",onClick:V=>u(t.slug)},[s("div",z,[s("img",{src:t.image,alt:t.name},null,8,A)]),s("div",D,[s("div",E,_(t.name),1)])],8,q)]))),128))])])])]))])}}});export{G as default};