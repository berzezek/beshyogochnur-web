import{_ as h}from"./Dm8WjGkF.js";import{m as f,u as k,n as y,p as $,o,c,q as i,s as b,a as s,t as a,F as C,v as w,x as B,y as F}from"./4DfHR1Dw.js";import{u as R}from"./CJ59Clvv.js";const T={key:1},D={class:"module",id:"catalog"},q={class:"container"},A={class:"row"},E={class:"col-sm-6 col-sm-offset-3"},I={class:"module-title font-alt"},L={class:"row"},N=["onClick"],O={class:"team-image"},P=["src","alt"],S={class:"team-descr font-alt"},U={class:"team-name"},V={class:"team-role"},X={class:"mt-20"},J=f({__name:"[slug]",async setup(Y){let n,l;const m=F(),_=k(),d=y(),{data:u,pending:p,error:j}=([n,l]=$(()=>R(`${m.public.apiBase}catalog/${_.params.slug}/`,"$kXP1YesrO7")),n=await n,l(),n),v=async t=>{d.push(`/product/${t}`)};return(t,r)=>{const g=h;return o(),c("div",null,[i(p)?(o(),b(g,{key:0})):(o(),c("div",T,[s("section",D,[s("div",q,[s("div",A,[s("div",E,[s("h2",I,a(t.$t("products")),1)])]),s("div",L,[(o(!0),c(C,null,w(i(u),e=>(o(),c("div",{class:"mb-sm-20 wow fadeInUp col-sm-6 col-md-3",key:e.name},[s("div",{class:"team-item",onClick:x=>v(e.slug)},[s("div",O,[s("img",{src:e.image,alt:e.name},null,8,P)]),s("div",S,[s("div",U,a(e.name),1),s("div",V,a(e.price)+" "+a(t.$t("currency")),1)])],8,N)]))),128))]),s("div",X,[s("a",{onClick:r[0]||(r[0]=e=>("navigateTo"in t?t.navigateTo:i(B))("/catalog")),class:"btn btn-b mb-4"},a(t.$t("back")),1)])])])]))])}}});export{J as default};