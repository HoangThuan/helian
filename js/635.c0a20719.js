"use strict";(self["webpackChunkvelzon"]=self["webpackChunkvelzon"]||[]).push([[635],{6943:function(e,l,a){a.d(l,{Z:function(){return v}});var t=a(6252),n=a(6612);const s={class:"card p-2 d-flex align-items-center flex-row",style:{"font-size":"14px"}},u=(0,t._)("i",{class:"ri-stack-fill fs-4 text-info me-1"},null,-1),c=(0,t._)("a",{class:"mb-sm-0 text-info"},"控制台",-1),i=(0,t._)("span",{class:"mx-1"},"/",-1),o={class:"mb-sm-0"};var r={__name:"Breadcrumb",props:{title:{type:String,default:""}},setup(e){const l=e;return(e,a)=>((0,t.wg)(),(0,t.iD)("div",s,[u,c,i,(0,t._)("div",o,(0,n.zw)(l.title),1)]))}};const d=r;var v=d},6336:function(e,l,a){a.d(l,{Z:function(){return f}});var t=a(6252),n=a(6612),s=a(8061);const u={class:"table-responsive ctx-tabl"},c={class:"table align-middle table-hover text-center table-bordered table-nowrap",id:"customerTable"},i={class:"table-light"},o={class:"list form-check-all"},r={class:"no_data"},d=(0,t._)("img",{src:"https://pay2world.me/static/common/images/no_data.png",alt:"暂无数据"},null,-1),v=(0,t._)("p",null,"暂无数据",-1),m=[d,v];var b={__name:"TableBase",props:{headers:[],items:[],activeIndex:null},setup(e){const l=(e,l)=>{const a=l.value;return e[a]};return(a,d)=>((0,t.wg)(),(0,t.iD)("div",u,[(0,t._)("table",c,[(0,t._)("thead",i,[(0,t._)("tr",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.headers,(e=>((0,t.wg)(),(0,t.iD)("th",{key:e.text},(0,n.zw)(a.$t(e.text)),1)))),128))])]),(0,t._)("tbody",o,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.items,((a,s)=>((0,t.wg)(),(0,t.iD)("tr",{key:s},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.headers,(e=>((0,t.wg)(),(0,t.iD)("td",{key:e.value},(0,n.zw)(l(a,e)),1)))),128))])))),128))])]),(0,t.wy)((0,t._)("div",r,m,512),[[s.F8,0===e.items?.length]])]))}};const p=b;var f=p},430:function(e,l,a){a.r(l),a.d(l,{default:function(){return H}});var t=a(6252),n=a(6612),s=a(6962),u=a(6943),c=a(6336),i=a(2931);const o={class:"mt-2 p-3"},r={class:"d-flex flex-row flex-wrap align-items-center gap-2"},d=(0,t._)("div",{class:"fw-bold"},"搜索：",-1),v={class:"col-12 col-lg-auto"},m={class:"form-select","aria-label":"Default select example"},b=["value"],p={class:"col-12 col-lg-auto"},f={class:"form-select","aria-label":"Default select example"},_=["value"],w={class:"col-12 col-lg-auto"},g=["placeholder"],x={class:"col-12 col-lg-auto"},h={class:"d-flex gap-2"},y={type:"button",class:"btn btn-secondary waves-effect waves-light mx-2 p-2"},D={type:"button",class:"btn btn-light waves-effect p-2"},k={class:"table-responsive"};var B={__name:"bank-card-statement",setup(e){const l=(0,i.iH)([{text:"t-merchantId",value:"name"},{text:"t-business-name",value:"business_name"},{text:"t-collection-amount",value:"collection_amount"},{text:"t-collection-fee",value:"collection_fee"},{text:"t-payment-amount",value:"payment-amount"},{text:"t-payment-fee",value:"payment-fee"},{text:"t-manual-delivery",value:"manual_delivery"},{text:"t-maual-issue-fee",value:"maual_issue_fee"},{text:"t-starting-merchant-balance",value:"starting_merchant_balance"},{text:"t-ending-merchant-balance",value:"ending-merchant-balance"},{text:"t-difference",value:"difference"}]),a=(0,i.iH)([]),B=(0,i.iH)(),z=(0,i.iH)([{value:"",label:"t-bank-type"},{value:"1",label:"ICB"},{value:"2",label:"VCB"},{value:"3",label:"BIDV"},{value:"3",label:"MB"},{value:"3",label:"ACB"},{value:"3",label:"TPB"},{value:"3",label:"MSB"},{value:"3",label:"BAB"},{value:"3",label:"VAB"},{value:"3",label:"NAB"},{value:"3",label:"SEAB"}]),H=(0,i.iH)([{value:"",label:"t-bank-type"},{value:"1",label:"t-bank-system-card"},{value:"2",label:"t-proxy-card"}]);return(0,t.bv)((()=>{const e=new Date,l=new Date((new Date).setDate(e.getDate()+7));B.value=[e,l]})),(e,i)=>{const $=(0,t.up)("VueDatePicker"),C=(0,t.up)("BCardBody"),V=(0,t.up)("BCard"),W=(0,t.up)("BRow");return(0,t.wg)(),(0,t.j4)(s.Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u.Z,{title:e.$t("t-reconciliation-daily")},null,8,["title"]),(0,t.Wm)(V,{"no-body":"",class:"card-body mt-3 px-0"},{default:(0,t.w5)((()=>[(0,t.Wm)(C,null,{default:(0,t.w5)((()=>[(0,t._)("div",o,[(0,t._)("form",r,[d,(0,t._)("div",v,[(0,t._)("select",m,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(H.value,(l=>((0,t.wg)(),(0,t.iD)("option",{key:l.value,value:l.value},(0,n.zw)(e.$t(l.label)),9,b)))),128))])]),(0,t._)("div",p,[(0,t._)("select",f,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(z.value,(l=>((0,t.wg)(),(0,t.iD)("option",{key:l.value,value:l.value},(0,n.zw)(e.$t(l.label)),9,_)))),128))])]),(0,t._)("div",w,[(0,t._)("input",{type:"text",class:"form-control",id:"placeholderInput",placeholder:e.$t("t-bank-card-number")},null,8,g)]),(0,t._)("div",x,[(0,t.Wm)($,{modelValue:B.value,"onUpdate:modelValue":i[0]||(i[0]=e=>B.value=e),range:"","multi-calendars":"","time-picker-inline":"",class:"datapicker vue-datepicker-customer",placeholder:e.$t("时间"),style:{"font-size":"12px","max-width":"198.78px"}},null,8,["modelValue","placeholder"])]),(0,t._)("div",h,[(0,t._)("button",y,(0,n.zw)(e.$t("t-search")),1),(0,t._)("button",D,(0,n.zw)(e.$t("t-reset")),1)])])]),(0,t._)("div",k,[(0,t.Wm)(c.Z,{headers:l.value,items:a.value},null,8,["headers","items"])])])),_:1})])),_:1})])),_:1})])),_:1})}}};const z=B;var H=z}}]);
//# sourceMappingURL=635.c0a20719.js.map