"use strict";(self["webpackChunkvelzon"]=self["webpackChunkvelzon"]||[]).push([[185],{6943:function(t,e,a){a.d(e,{Z:function(){return v}});var l=a(6252),s=a(6612);const n={class:"card p-2 d-flex align-items-center flex-row",style:{"font-size":"14px"}},o=(0,l._)("i",{class:"ri-stack-fill fs-4 text-info me-1"},null,-1),c=(0,l._)("a",{class:"mb-sm-0 text-info"},"控制台",-1),i=(0,l._)("span",{class:"mx-1"},"/",-1),u={class:"mb-sm-0"};var d={__name:"Breadcrumb",props:{title:{type:String,default:""}},setup(t){const e=t;return(t,a)=>((0,l.wg)(),(0,l.iD)("div",n,[o,c,i,(0,l._)("div",u,(0,s.zw)(e.title),1)]))}};const r=d;var v=r},5147:function(t,e,a){a.d(e,{Z:function(){return u}});var l=a(6252);const s=t=>((0,l.dD)("data-v-7140f177"),t=t(),(0,l.Cn)(),t),n=s((()=>(0,l._)("div",{class:"modal-body"},[(0,l._)("div",{class:"d-flex justify-content-center"},[(0,l._)("i",{class:"ri-error-warning-line icon_hint"})]),(0,l._)("div",{class:"d-flex justify-content-center align-items-center mb-3"},[(0,l._)("h1",{class:"modal-title fs-2",id:"staticBackdropLabel"},"提示")]),(0,l._)("div",{class:"d-flex justify-content-center align-items-center mb-3"},[(0,l._)("h1",{class:"modal-title fs-5",id:"staticBackdropLabel"}," 确定开启使用该银行？ ")])],-1)));var o={__name:"ModalHint",props:{modelValue:Boolean,title:String,description:String,onConfirm:Function,onClose:Function},emits:["update:modelValue"],setup(t,{emit:e}){const a=t,s=(0,l.Fl)({get(){return a.modelValue},set(t){e("update:modelValue",t)}}),o=()=>{a.onClose(),s.value=!1},c=()=>{a.onConfirm(),o()};return(t,e)=>{const a=(0,l.up)("BModal");return(0,l.wg)(),(0,l.j4)(a,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=t=>s.value=t),"hide-footer":"",class:"v-modal-custom",centered:"","hide-header-close":""},{default:(0,l.w5)((()=>[(0,l._)("div",{class:"modal-content border border-0 ctx"},[n,(0,l._)("div",{class:"modal-footer"},[(0,l._)("div",{class:"d-flex justify-content-center align-items-center w-100 gap-3"},[(0,l._)("button",{type:"button",class:"btn btn-light p-2 fs-6",onClick:o},"取消"),(0,l._)("button",{type:"button",class:"btn btn-info p-2 fs-6",onClick:c}," 确定 ")])])])])),_:1},8,["modelValue"])}}},c=a(3744);const i=(0,c.Z)(o,[["__scopeId","data-v-7140f177"]]);var u=i},5774:function(t,e,a){a.r(e),a.d(e,{default:function(){return C}});var l=a(6252),s=a(6612),n=a(6962),o=a(2931),c=a(5147),i=a(6943);const u=t=>((0,l.dD)("data-v-13bfc082"),t=t(),(0,l.Cn)(),t),d={class:"col-lg-6 col-12 px-0"},r=u((()=>(0,l._)("div",{class:"border border-info p-2 rounded",style:{"background-color":"#b8daff"}},[(0,l._)("i",{class:"mdi mdi-lightbulb-on fs-4 text-info"}),(0,l._)("span",{class:"text-blue",style:{"font-size":"14px"}},"平台通道总开关，控制平台的全部转账汇款方式！")],-1))),v={class:"table-responsive"},m={class:"table table-hover table-bordered table-nowrap",id:"customerTable"},f={class:"table-light"},_={class:"table-body-font-size"},b={key:0,class:"status text-danger",style:{"font-size":"12px"}},p=u((()=>(0,l._)("i",{class:"ri-error-warning-fill fs-5"},null,-1))),x={key:1,class:"status text-success"},w=u((()=>(0,l._)("i",{class:"ri-checkbox-circle-fill fs-5 text-success",style:{"font-size":"12px"}},null,-1))),g=["onClick"];var y={__name:"payment-chanel",setup(t){const e=(0,o.iH)([{text:"t-chanel-name",value:"name"},{text:"t-chanel-code",value:"code"},{text:"t-chanel-status",value:"status"},{text:"t-operate",value:"operate"}]),a=(0,o.iH)([{name:"越南网银扫码",code:"VNBANKQR",status:"active"},{name:"越南网银扫码",code:"VNBANKQR",status:"active"},{name:"越南网银扫码",code:"VNBANKQR",status:"active"},{name:"越南网银扫码",code:"VNBANKQR",status:"active"},{name:"越南网银扫码",code:"VNBANKQR",status:"active"}]),u=(0,o.iH)(!1),y=(0,o.iH)(),h=t=>{u.value=!0,y.value=t},k=()=>{u.value=!1},C=()=>{"active"===a.value[y.value].status?a.value[y.value].status="inActive":a.value[y.value].status="active"};return(t,o)=>{const y=(0,l.up)("BCardBody"),V=(0,l.up)("BCard"),B=(0,l.up)("BRow");return(0,l.wg)(),(0,l.j4)(n.Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(B,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i.Z,{title:t.$t("t-payment-chanel")},null,8,["title"]),(0,l._)("div",d,[r,(0,l.Wm)(V,{"no-body":"",class:"card-body mt-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{class:"px-0"},{default:(0,l.w5)((()=>[(0,l._)("div",v,[(0,l._)("table",m,[(0,l._)("thead",f,[(0,l._)("tr",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.value,(e=>((0,l.wg)(),(0,l.iD)("th",{key:e.text},(0,s.zw)(t.$t(e.text)),1)))),128))])]),(0,l._)("tbody",_,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.value,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",{key:e},[(0,l._)("td",null,(0,s.zw)(t.name),1),(0,l._)("td",null,(0,s.zw)(t.code),1),(0,l._)("td",null,["active"===t.status?((0,l.wg)(),(0,l.iD)("span",b,[p,(0,l.Uk)(" 已关闭 ")])):((0,l.wg)(),(0,l.iD)("span",x,[w,(0,l.Uk)(" 已开启 ")]))]),(0,l._)("td",null,[(0,l._)("button",{type:"button",class:(0,s.C_)("active"==t.status?"btn-customer-no":"btn-customer-ok"),onClick:t=>h(e)},(0,s.zw)("active"==t.status?"开启":"关闭"),11,g)])])))),128))])])])])),_:1})])),_:1})])])),_:1}),(0,l.Wm)(c.Z,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=t=>u.value=t),"on-confirm":C,"on-close":k},null,8,["modelValue"])])),_:1})}}},h=a(3744);const k=(0,h.Z)(y,[["__scopeId","data-v-13bfc082"]]);var C=k}}]);
//# sourceMappingURL=185.d095cc17.js.map