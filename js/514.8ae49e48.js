"use strict";(self["webpackChunkvelzon"]=self["webpackChunkvelzon"]||[]).push([[514],{6943:function(e,t,l){l.d(t,{Z:function(){return m}});var a=l(6252),s=l(6612);const n={class:"card p-2 d-flex align-items-center flex-row",style:{"font-size":"14px"}},c=(0,a._)("i",{class:"ri-stack-fill fs-4 text-info me-1"},null,-1),o=(0,a._)("a",{class:"mb-sm-0 text-info"},"控制台",-1),u=(0,a._)("span",{class:"mx-1"},"/",-1),i={class:"mb-sm-0"};var r={__name:"Breadcrumb",props:{title:{type:String,default:""}},setup(e){const t=e;return(e,l)=>((0,a.wg)(),(0,a.iD)("div",n,[c,o,u,(0,a._)("div",i,(0,s.zw)(t.title),1)]))}};const d=r;var m=d},6336:function(e,t,l){l.d(t,{Z:function(){return f}});var a=l(6252),s=l(6612),n=l(8061);const c={class:"table-responsive ctx-tabl"},o={class:"table align-middle table-hover text-center table-bordered table-nowrap",id:"customerTable"},u={class:"table-light"},i={class:"list form-check-all"},r={class:"no_data"},d=(0,a._)("img",{src:"https://pay2world.me/static/common/images/no_data.png",alt:"暂无数据"},null,-1),m=(0,a._)("p",null,"暂无数据",-1),p=[d,m];var v={__name:"TableBase",props:{headers:[],items:[],activeIndex:null},setup(e){const t=(e,t)=>{const l=t.value;return e[l]};return(l,d)=>((0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("table",o,[(0,a._)("thead",u,[(0,a._)("tr",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.headers,(e=>((0,a.wg)(),(0,a.iD)("th",{key:e.text},(0,s.zw)(l.$t(e.text)),1)))),128))])]),(0,a._)("tbody",i,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.items,((l,n)=>((0,a.wg)(),(0,a.iD)("tr",{key:n},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.headers,(e=>((0,a.wg)(),(0,a.iD)("td",{key:e.value},(0,s.zw)(t(l,e)),1)))),128))])))),128))])]),(0,a.wy)((0,a._)("div",r,p,512),[[n.F8,0===e.items?.length]])]))}};const _=v;var f=_},4005:function(e,t,l){l.r(t),l.d(t,{default:function(){return k}});var a=l(6252),s=l(6612),n=l(6962),c=l(6943),o=l(6336),u=l(2931);const i={class:"mt-2 p-3"},r={class:"d-flex flex-row flex-wrap align-items-center gap-2"},d=(0,a._)("div",{class:"fw-bold text-form"},"搜索：",-1),m={class:"col-12 col-lg-auto"},p={class:"form-select text-form","aria-label":"Default select example"},v=["value"],_={class:"col-12 col-lg-auto"},f=["placeholder"],b={class:"col-12 col-lg-auto"},w={class:"d-flex gap-2"},x={type:"button",class:"btn text-form btn-secondary waves-effect waves-light mx-2 p-2"},g={type:"button",class:"btn text-form btn-light waves-effect p-2"},h={class:"table-responsive"};var y={__name:"merchant-channel-report",setup(e){const t=(0,u.iH)([{text:"t-merchantId",value:"name"},{text:"t-business-name",value:"business_name"},{text:"t-aisle",value:"aisle"},{text:"t-change-rate",value:"change_rate"},{text:"t-collection-success-rate",value:"collection_success_rate"},{text:"t-number-application-orders-collected",value:"number_application_orders_collected"},{text:"t-number-successful-collections",value:"number_successful_collections"},{text:"t-successful-collection-amount",value:"successful_collection_amount"},{text:"t-successful-collection-fee",value:"successful_collection_fee"}]),l=(0,u.iH)([{name:"总计：",business_name:"",aisle:"",change_rate:"",number_application_orders_collected:"0",successful_collection_amount:"0",successful_collection_fee:"0"}]),y=(0,u.iH)([{value:"",label:"t-channel-type"},{value:"",label:"t-vn-online-banking-scan-QRCode"},{value:"",label:"t-vn-ZALO-pay"},{value:"",label:"t-Vietnam-MOMO-pay"},{value:"",label:"t-ViettelPay-Vietnam"}]),D=(0,u.iH)();return(0,a.bv)((()=>{const e=new Date,t=new Date((new Date).setDate(e.getDate()+7));D.value=[e,t]})),(e,u)=>{const k=(0,a.up)("VueDatePicker"),z=(0,a.up)("BCardBody"),H=(0,a.up)("BCard"),V=(0,a.up)("BRow");return(0,a.wg)(),(0,a.j4)(n.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(V,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c.Z,{title:e.$t("t-reconciliation-daily")},null,8,["title"]),(0,a.Wm)(H,{"no-body":"",class:"card-body ctx-content px-0"},{default:(0,a.w5)((()=>[(0,a.Wm)(z,null,{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a._)("form",r,[d,(0,a._)("div",m,[(0,a._)("select",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.value,(t=>((0,a.wg)(),(0,a.iD)("option",{key:t.value,value:t.value},(0,s.zw)(e.$t(t.label)),9,v)))),128))])]),(0,a._)("div",_,[(0,a._)("input",{type:"text",class:"form-control text-form",id:"placeholderInput",placeholder:e.$t("t-merchant-name-or-id")},null,8,f)]),(0,a._)("div",b,[(0,a.Wm)(k,{modelValue:D.value,"onUpdate:modelValue":u[0]||(u[0]=e=>D.value=e),range:"","multi-calendars":"","time-picker-inline":"",class:"datapicker vue-datepicker-customer",placeholder:e.$t("时间"),style:{"font-size":"12px","max-width":"198.78px"}},null,8,["modelValue","placeholder"])]),(0,a._)("div",w,[(0,a._)("button",x,(0,s.zw)(e.$t("t-search")),1),(0,a._)("button",g,(0,s.zw)(e.$t("t-reset")),1)])])]),(0,a._)("div",h,[(0,a.Wm)(o.Z,{headers:t.value,items:l.value},null,8,["headers","items"])])])),_:1})])),_:1})])),_:1})])),_:1})}}};const D=y;var k=D}}]);
//# sourceMappingURL=514.8ae49e48.js.map