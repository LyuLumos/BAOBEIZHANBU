import{_ as d,i as m,b as e,c as n,f as o,d as l,w as _,p,e as u,l as g}from"./index-f8263904.js";const h=""+new URL("preb-8acfd6d8.svg",import.meta.url).href,b=""+new URL("1-b30d0ab0.png",import.meta.url).href,f=""+new URL("2-752fa7b1.png",import.meta.url).href,k=""+new URL("3-45053c4d.png",import.meta.url).href,v=""+new URL("4-b689bf01.png",import.meta.url).href,w=""+new URL("5-164445c0.png",import.meta.url).href,y=""+new URL("6-ee3e9dfc.png",import.meta.url).href,s=a=>(p("data-v-3adc7d2d"),a=a(),u(),a),I={class:"wrapper"},R={class:"position"},C=s(()=>o("img",{src:h,class:"iconfont position__icon",alt:""},null,-1)),L=s(()=>o("div",{color:"black"},"占卜结果",-1)),U=s(()=>o("img",{src:g,class:"iconfont topRight",alt:""},null,-1)),M={key:0},N=s(()=>o("img",{src:b,class:"baobei",alt:"Main Image"},null,-1)),P=[N],T={key:1},B=s(()=>o("img",{src:f,class:"baobei",alt:"Main Image"},null,-1)),O=[B],S={key:2},q=s(()=>o("img",{src:k,class:"baobei",alt:"Main Image"},null,-1)),V=[q],$={key:3},j=s(()=>o("img",{src:v,class:"baobei",alt:"Main Image"},null,-1)),x=[j],E={key:4},F=s(()=>o("img",{src:w,class:"baobei",alt:"Main Image"},null,-1)),z=[F],A={key:5},D=s(()=>o("img",{src:y,class:"baobei",alt:"Main Image"},null,-1)),G=[D],H={class:"buttonContainer"},J={name:"OutCome",data(){return{}},computed:{reflag(){return console.log(this.$route.query.index),this.$route.query.index}},setup(){}},K=Object.assign(J,{setup(a){return(t,i)=>{const c=m("router-link");return e(),n("div",I,[o("div",R,[l(c,{to:{path:"/startgame"}},{default:_(()=>[C]),_:1}),L,U]),o("div",null,[t.reflag==0?(e(),n("div",M,P)):t.reflag==1?(e(),n("div",T,O)):t.reflag==2?(e(),n("div",S,V)):t.reflag==3?(e(),n("div",$,x)):t.reflag==4?(e(),n("div",E,z)):(e(),n("div",A,G))]),o("div",H,[l(c,{to:{path:"/startgame"}},{default:_(()=>[o("button",{onClick:i[0]||(i[0]=(...r)=>t.goToNextPage&&t.goToNextPage(...r)),style:{"background-color":"#000000",color:"white"},class:"buttonbottom"},"再试一次")]),_:1}),o("button",{onClick:i[1]||(i[1]=(...r)=>t.goToNextPage&&t.goToNextPage(...r)),style:{"background-color":"#F70017",color:"white"},class:"buttonbottom"},"去下单")])])}}}),W=d(K,[["__scopeId","data-v-3adc7d2d"]]);export{W as default};