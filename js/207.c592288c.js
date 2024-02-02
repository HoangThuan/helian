"use strict";(self["webpackChunkvelzon"]=self["webpackChunkvelzon"]||[]).push([[207],{6943:function(t,e,l){l.d(e,{Z:function(){return v}});var a=l(6252),s=l(6612);const n={class:"card p-2 d-flex align-items-center flex-row",style:{"font-size":"14px"}},o=(0,a._)("i",{class:"ri-stack-fill fs-4 text-info me-1"},null,-1),i=(0,a._)("a",{class:"mb-sm-0 text-info"},"控制台",-1),c=(0,a._)("span",{class:"mx-1"},"/",-1),u={class:"mb-sm-0"};var r={__name:"Breadcrumb",props:{title:{type:String,default:""}},setup(t){const e=t;return(t,l)=>((0,a.wg)(),(0,a.iD)("div",n,[o,i,c,(0,a._)("div",u,(0,s.zw)(e.title),1)]))}};const d=r;var v=d},9449:function(t,e,l){l.d(e,{Z:function(){return f}});var a=l(6252),s=l(6612);const n={key:0,class:"modal fade show",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-modal":"true",role:"dialog",style:{display:"block","background-color":"rgba(0,0,0,.4)"}},o={class:"modal-content"},i={class:"modal-header",style:{"border-bottom":"none"}},c={class:"modal-header-footer-center"},u={style:{"font-weight":"bold",color:"black"}},r={class:"modal-body"},d={key:0,class:"modal-footer"},v={class:"modal-header-footer-center"};function p(t,e,l,p,b,_){return l.visible?((0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",{class:(0,s.C_)(["modal-dialog modal-dialog-centered",""+l.size])},[(0,a._)("div",o,[(0,a._)("div",i,[(0,a._)("div",c,[(0,a._)("h3",u,(0,s.zw)(l.title),1)]),(0,a._)("button",{type:"button",class:"btn-close",onClick:e[0]||(e[0]=e=>t.$emit("close")),"aria-label":"Close"})]),(0,a._)("div",r,[(0,a.WI)(t.$slots,"default")]),l.showFooter?((0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",v,[(0,a._)("button",{type:"button",class:"btn-customer-no",style:{"margin-left":"4px"},onClick:e[1]||(e[1]=e=>t.$emit("configEvent"))}," 确定 "),(0,a._)("button",{type:"button",class:"btn-customer-no-back",style:{"margin-left":"3%"},onClick:e[2]||(e[2]=e=>t.$emit("close"))}," 取消 ")])])):(0,a.kq)("",!0)])],2)])):(0,a.kq)("",!0)}var b={name:"test",props:{visible:Boolean,title:String,showFooter:{type:Boolean,default:!0},size:{type:String,default:"modal-lg"}}},_=l(3744);const w=(0,_.Z)(b,[["render",p]]);var f=w},426:function(t,e,l){l.d(e,{Z:function(){return p}});var a=l(6252),s=l(6612);const n={class:"modal-content-item"},o={class:"text"},i={key:0,style:{color:"red","font-size":"16px"}},c={class:"item"};function u(t,e,l,u,r,d){return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",o,[(0,a._)("span",null,[l.isRed?((0,a.wg)(),(0,a.iD)("span",i,"* ")):(0,a.kq)("",!0),(0,a.Uk)((0,s.zw)(l.title),1)])]),(0,a._)("div",c,[(0,a.WI)(t.$slots,"default")])])}var r={props:{title:{type:String,default:""},isRed:{type:Boolean,default:!1}}},d=l(3744);const v=(0,d.Z)(r,[["render",u]]);var p=v},9876:function(t,e,l){l.r(e),l.d(e,{default:function(){return O}});var a=l(6252),s=l(6612),n=l(8061),o=l(6962),i=l(6943),c=l(9449),u=l(426),r=l(2931);const d={class:"mt-2 p-3"},v={class:"d-flex flex-row flex-wrap align-items-center gap-2"},p={class:"fw-bold",style:{"font-size":"14px"}},b={class:""},_={class:"form-select","aria-label":"Default select example",style:{"font-size":"14px"}},w=["value"],f=["placeholder"],m=["placeholder"],g=["placeholder"],x={class:"table-responsive"},y={class:"table table-hover text-left",id:"customerTable"},k={class:"table-light"},h={class:"list form-check-all"},z={class:"status badge bg-success text-successr"},C={class:"status badge bg-success text-successr"},$={class:"d-flex gap-3"},D=["onClick"],W=["onClick"],Z=["onClick"],B={class:""},H=["onClick"],I=["onClick"],M={class:""},F={class:"waves-light p-2 border-0 bg-dark-subtle",style:{width:"50px"}},K=["value"],S={class:"no_data"},Y=(0,a._)("img",{src:"https://pay2world.me/static/common/images/no_data.png",alt:"暂无数据"},null,-1),q=(0,a._)("p",null,"暂无数据",-1),R=[Y,q],A={class:"model-content-custome",style:{"padding-top":"2px",overflow:"auto"}},E=(0,a._)("span",null,"0",-1),j=(0,a._)("span",null,"0",-1);var L={__name:"withdrawn-list",setup(t){const e=(0,r.iH)([{text:"商户名称",value:""},{text:"商家ID",value:""},{text:"代理名称",value:""},{text:"收款银行",value:""},{text:"收款卡号",value:""},{text:"收款人姓名",value:""},{text:"提现金额",value:""},{text:"手续费",value:""},{text:"实际扣除金额",value:""},{text:"处理状态",value:""},{text:"处理人",value:""},{text:"处理时间\t",value:""},{text:"申请时间",value:""},{text:"操作",value:""}]),l=(0,r.iH)([]),Y=(0,r.iH)([{value:"",label:"处理状态"},{value:"1",label:"待审核"},{value:"2",label:"拒绝"},{value:"3",label:"成功"}]),q=(0,r.iH)([{value:"",label:"t-more"},{value:"1",label:"t-enable-script"},{value:"2",label:"t-delete-bank-card"},{value:"2",label:"t-account-test"},{value:"2",label:"t-balance-update"},{value:"2",label:"t-execute-script"},{value:"2",label:"t-script-log"},{value:"2",label:"t-view-VPN"},{value:"2",label:"t-crawler-detail"}]),L=t=>{"active"===l.value[t].status?l.value[t].status="inActive":l.value[t].status="active"},N=t=>{"active"===l.value[t].script_execution_status?l.value[t].script_execution_status="inActive":l.value[t].script_execution_status="active"},O=(0,r.iH)(!1),P=()=>{O.value=!0};return(t,r)=>{const T=(0,a.up)("BCol"),U=(0,a.up)("BCardBody"),V=(0,a.up)("BCard"),G=(0,a.up)("BRow");return(0,a.wg)(),(0,a.j4)(o.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(G,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i.Z,{title:t.$t("商户列表")},null,8,["title"]),(0,a.Wm)(G,{class:"mt-3"},{default:(0,a.w5)((()=>[(0,a.Wm)(V,{"no-body":"",class:"card-body"},{default:(0,a.w5)((()=>[(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a._)("div",d,[(0,a._)("form",v,[(0,a._)("div",p,(0,s.zw)(t.$t("搜索"))+": ",1),(0,a._)("div",b,[(0,a._)("select",_,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Y.value,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.value,value:e.value},(0,s.zw)(t.$t(e.label)),9,w)))),128))])]),(0,a._)("div",null,[(0,a._)("input",{type:"text",class:"form-control",id:"placeholderInput",placeholder:t.$t("商家名称或商家ID"),style:{"font-size":"14px"}},null,8,f)]),(0,a._)("div",null,[(0,a._)("input",{type:"text",class:"form-control",id:"placeholderInput",placeholder:t.$t("收款银行卡号"),style:{"font-size":"14px"}},null,8,m)]),(0,a._)("div",null,[(0,a._)("input",{type:"text",class:"form-control",id:"placeholderInput",placeholder:t.$t("申请时间"),style:{"font-size":"14px"}},null,8,g)]),(0,a.Wm)(T,{lg:"2"},{default:(0,a.w5)((()=>[(0,a._)("button",{type:"button",class:"btn-customer-no",style:{"margin-left":"4px",height:"39px","font-size":"14px"},onClick:r[0]||(r[0]=(0,n.iM)((()=>{}),["prevent"]))},(0,s.zw)(t.$t("搜索")),1),(0,a._)("button",{type:"button",class:"btn-customer-no-back",style:{"margin-left":"4px",height:"39px","font-size":"14px"},onClick:r[1]||(r[1]=(0,n.iM)((e=>t.location.reload()),["prevent"]))},(0,s.zw)(t.$t("重置")),1),(0,a._)("button",{type:"button",class:"btn-customer-yellow",style:{"margin-left":"4px",height:"39px","font-size":"14px"},onClick:r[2]||(r[2]=(0,n.iM)((t=>P()),["prevent"]))},(0,s.zw)(t.$t("统计")),1)])),_:1})])]),(0,a._)("div",x,[(0,a._)("table",y,[(0,a._)("thead",k,[(0,a._)("tr",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.value,(e=>((0,a.wg)(),(0,a.iD)("th",{key:e.text},(0,s.zw)(t.$t(e.text)),1)))),128))])]),(0,a._)("tbody",h,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.value,((e,l)=>((0,a.wg)(),(0,a.iD)("tr",{key:l},[(0,a._)("td",null,(0,s.zw)(e.id),1),(0,a._)("td",null,(0,s.zw)(e.merchant_name),1),(0,a._)("td",null,(0,s.zw)(e.merchant_account),1),(0,a._)("td",null,(0,s.zw)(e.agency_name),1),(0,a._)("td",null,(0,s.zw)(e.agency_account),1),(0,a._)("td",null,(0,s.zw)(e.avalable_balance),1),(0,a._)("td",null,[(0,a._)("span",z,(0,s.zw)(e.approval_status),1)]),(0,a._)("td",null,[(0,a._)("span",C,(0,s.zw)(e.account_status),1)]),(0,a._)("td",null,(0,s.zw)(e.total_turnover_today),1),(0,a._)("td",null,(0,s.zw)(e.total_success_rate),1),(0,a._)("td",null,(0,s.zw)(e.remark),1),(0,a._)("td",null,(0,s.zw)(e.register_time),1),(0,a._)("td",$,[(0,a._)("button",{type:"button",class:"btn btn-info waves-effect waves-light btn-row active px-2",onClick:e=>t.onOpenModal(l)},(0,s.zw)(t.$t("t-edit")),9,D),(0,a._)("div",null,["active"===e.status?((0,a.wg)(),(0,a.iD)("button",{key:0,type:"button",class:"btn btn-success waves-effect waves-light btn-row px-2",onClick:t=>L(l)},(0,s.zw)(t.$t("t-enable")),9,W)):((0,a.wg)(),(0,a.iD)("button",{key:1,type:"button",class:"btn btn-danger waves-effect waves-light btn-row px-2",onClick:t=>L(l)},(0,s.zw)(t.$t("t-deactivate")),9,Z))]),(0,a._)("div",B,["active"===e.script_execution_status?((0,a.wg)(),(0,a.iD)("button",{key:0,type:"button",class:"btn btn-success waves-effect waves-light btn-row px-2",onClick:t=>N(l)},(0,s.zw)(t.$t("t-enable-script")),9,H)):((0,a.wg)(),(0,a.iD)("button",{key:1,type:"button",class:"btn btn-danger waves-effect waves-light btn-row px-2",onClick:t=>N(l)},(0,s.zw)(t.$t("t-deactivate-script")),9,I))]),(0,a._)("div",M,[(0,a._)("select",F,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(q.value,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.value,value:e.value},(0,s.zw)(t.$t(e.label)),9,K)))),128))])])])])))),128))])]),(0,a.wy)((0,a._)("div",S,R,512),[[n.F8,0===l.value?.length]])])])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.Wm)(c.Z,{visible:O.value,onConfigEvent:r[3]||(r[3]=t=>O.value=!1),onClose:r[4]||(r[4]=t=>O.value=!1),title:"总计",showFooter:!1,size:""},{default:(0,a.w5)((()=>[(0,a._)("div",A,[(0,a.Wm)(u.Z,{title:"总笔数:"},{default:(0,a.w5)((()=>[E])),_:1}),(0,a.Wm)(u.Z,{title:"总金额:"},{default:(0,a.w5)((()=>[j])),_:1})])])),_:1},8,["visible"])])),_:1})}}};const N=L;var O=N}}]);
//# sourceMappingURL=207.c592288c.js.map