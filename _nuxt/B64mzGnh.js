import{_ as p}from"./ChuzzUwB.js";import{_ as d,o as c,c as r,a as s,t as o,b as a,w as $,d as v,m as b,y as h}from"./4DfHR1Dw.js";import{_ as g}from"./D8SHTWEt.js";const y={},w={class:"home-section bg-dark bg-gradient",id:"home"},k={class:"titan-caption"},C={class:"caption-content"},N={class:"font-alt mb-30 titan-title-size-1"},S={class:"font-alt mb-40 titan-title-size-4"};function T(e,t){const _=p;return c(),r("section",w,[s("div",k,[s("div",C,[s("div",N,o(e.$t("welcome_title")),1),s("div",S,o(e.$t("company_name")),1),a(_,{class:"section-scroll btn btn-border-w btn-round",to:"/catalog"},{default:$(()=>[v(o(e.$t("learn_more")),1)]),_:1})])])])}const j=d(y,[["render",T]]),B={},M={class:"module",id:"about"},V={class:"container"},x={class:"row"},z={class:"col-sm-8 col-sm-offset-2"},E={class:"module-title font-alt"},F={class:"module-subtitle font-serif large-text"};function O(e,t){return c(),r("section",M,[s("div",V,[s("div",x,[s("div",z,[s("h2",E,o(e.$t("about_us")),1),s("div",F,[s("span",null,o(e.$t("about_company")),1),t[0]||(t[0]=s("br",null,null,-1)),t[1]||(t[1]=s("br",null,null,-1)),s("span",null,o(e.$t("about_company_1")),1),t[2]||(t[2]=s("br",null,null,-1)),t[3]||(t[3]=s("br",null,null,-1)),s("span",null,o(e.$t("about_company_2")),1),t[4]||(t[4]=s("br",null,null,-1)),t[5]||(t[5]=s("br",null,null,-1)),s("span",null,o(e.$t("about_company_3")),1)])])])])])}const I=d(B,[["render",O]]),J={},P={class:"module bg-primary",id:"services"},R={class:"container"},q={class:"row"},A={class:"col-sm-6 col-sm-offset-3"},D={class:"module-title font-alt"},G={class:"module-subtitle font-serif"},H={class:"row multi-columns-row"},K={class:"col-md-3 col-sm-6 col-xs-12"},L={class:"features-item"},Q={class:"features-title font-alt"},U={class:"col-md-3 col-sm-6 col-xs-12"},W={class:"features-item"},X={class:"features-title font-alt"},Y={class:"col-md-3 col-sm-6 col-xs-12"},Z={class:"features-item"},ss={class:"features-title font-alt"},ts={class:"col-md-3 col-sm-6 col-xs-12"},es={class:"features-item"},os={class:"features-title font-alt"};function ns(e,t){return c(),r("section",P,[s("div",R,[s("div",q,[s("div",A,[s("h2",D,o(e.$t("services_title")),1),s("div",G,o(e.$t("services_intro")),1)])]),s("div",H,[s("div",K,[s("div",L,[t[0]||(t[0]=s("div",{class:"features-icon"},[s("span",{class:"icon-lightbulb"})],-1)),s("h3",Q,o(e.$t("service_1_title")),1),s("p",null,o(e.$t("service_1_desc")),1)])]),s("div",U,[s("div",W,[t[1]||(t[1]=s("div",{class:"features-icon"},[s("span",{class:"icon-tools"})],-1)),s("h3",X,o(e.$t("service_2_title")),1),s("p",null,o(e.$t("service_2_desc")),1)])]),s("div",Y,[s("div",Z,[t[2]||(t[2]=s("div",{class:"features-icon"},[s("span",{class:"icon-gears"})],-1)),s("h3",ss,o(e.$t("service_3_title")),1),s("p",null,o(e.$t("service_3_desc")),1)])]),s("div",ts,[s("div",es,[t[3]||(t[3]=s("div",{class:"features-icon"},[s("span",{class:"icon-lifesaver"})],-1)),s("h3",os,o(e.$t("service_4_title")),1),s("p",null,o(e.$t("service_4_desc")),1)])])])])])}const is=d(J,[["render",ns]]),rs=b({__name:"index",setup(e){const t=h(),_=async n=>{try{const i=`Имя: ${n.userName}
Email: ${n.email}
Телефон: ${n.phone}
Сообщение: ${n.message}`,l=await fetch(`https://api.telegram.org/bot${t.public.telegramToken}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:t.public.chatId,text:i})});return l.ok?{status:"success",data:await l.json()}:{status:"error",message:"Failed to send message",error:await l.json()}}catch{return{status:"error",message:"Failed to send message"}}};return(n,i)=>{const l=j,u=I,m=is,f=g;return c(),r("div",null,[a(l),a(u),i[0]||(i[0]=s("hr",{class:"divider-w"},null,-1)),a(m),a(f,{onSendMess:_})])}}});export{rs as default};