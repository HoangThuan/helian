"use strict";(self["webpackChunkvelzon"]=self["webpackChunkvelzon"]||[]).push([[874],{6943:function(e,l,t){t.d(l,{Z:function(){return p}});var a=t(6252),o=t(6612);const n={class:"card p-2 d-flex align-items-center flex-row",style:{"font-size":"14px"}},s=(0,a._)("i",{class:"ri-stack-fill fs-4 text-info me-1"},null,-1),u=(0,a._)("a",{class:"mb-sm-0 text-info"},"控制台",-1),i=(0,a._)("span",{class:"mx-1"},"/",-1),c={class:"mb-sm-0"};var r={__name:"Breadcrumb",props:{title:{type:String,default:""}},setup(e){const l=e;return(e,t)=>((0,a.wg)(),(0,a.iD)("div",n,[s,u,i,(0,a._)("div",c,(0,o.zw)(l.title),1)]))}};const d=r;var p=d},9449:function(e,l,t){t.d(l,{Z:function(){return w}});var a=t(6252),o=t(6612);const n={key:0,class:"modal fade show",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-modal":"true",role:"dialog",style:{display:"block","background-color":"rgba(0,0,0,.4)"}},s={class:"modal-content"},u={class:"modal-header",style:{"border-bottom":"none"}},i={class:"modal-header-footer-center"},c={style:{"font-weight":"bold",color:"black"}},r={class:"modal-body"},d={key:0,class:"modal-footer"},p={class:"modal-header-footer-center"};function v(e,l,t,v,m,_){return t.visible?((0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",{class:(0,o.C_)(["modal-dialog modal-dialog-centered",""+t.size])},[(0,a._)("div",s,[(0,a._)("div",u,[(0,a._)("div",i,[(0,a._)("h3",c,(0,o.zw)(t.title),1)]),(0,a._)("button",{type:"button",class:"btn-close",onClick:l[0]||(l[0]=l=>e.$emit("close")),"aria-label":"Close"})]),(0,a._)("div",r,[(0,a.WI)(e.$slots,"default")]),t.showFooter?((0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",p,[(0,a._)("button",{type:"button",class:"btn-customer-no",style:{"margin-left":"4px"},onClick:l[1]||(l[1]=l=>e.$emit("configEvent"))}," 确定 "),(0,a._)("button",{type:"button",class:"btn-customer-no-back",style:{"margin-left":"3%"},onClick:l[2]||(l[2]=l=>e.$emit("close"))}," 取消 ")])])):(0,a.kq)("",!0)])],2)])):(0,a.kq)("",!0)}var m={name:"test",props:{visible:Boolean,title:String,showFooter:{type:Boolean,default:!0},size:{type:String,default:"modal-lg"}}},_=t(3744);const f=(0,_.Z)(m,[["render",v]]);var w=f},426:function(e,l,t){t.d(l,{Z:function(){return v}});var a=t(6252),o=t(6612);const n={class:"modal-content-item"},s={class:"text"},u={key:0,style:{color:"red","font-size":"16px"}},i={class:"item"};function c(e,l,t,c,r,d){return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",s,[(0,a._)("span",null,[t.isRed?((0,a.wg)(),(0,a.iD)("span",u,"* ")):(0,a.kq)("",!0),(0,a.Uk)((0,o.zw)(t.title),1)])]),(0,a._)("div",i,[(0,a.WI)(e.$slots,"default")])])}var r={props:{title:{type:String,default:""},isRed:{type:Boolean,default:!1}}},d=t(3744);const p=(0,d.Z)(r,[["render",c]]);var v=p},3286:function(e,l,t){t.r(l),t.d(l,{default:function(){return T}});var a=t(6252),o=t(6612),n=t(8061),s=t(6962),u=t(6943),i=t(9449),c=t(426),r=t(2931);const d={class:"mt-2 p-3"},p={class:"d-flex flex-row flex-wrap align-items-center gap-2",style:{"font-size":"14px"}},v={class:"fw-bold",style:{"font-size":"14px"}},m={class:""},_={class:"form-select","aria-label":"Default select example",style:{"font-size":"14px"}},f=["value"],w=["placeholder"],b=["placeholder"],y=["placeholder"],x=["placeholder"],h=["placeholder"],g={class:""},z={class:"form-select","aria-label":"Default select example",style:{"font-size":"14px"}},k=["value"],W={class:"d-flex gap-2"},Z={type:"button",class:"btn-customer-no",style:{"padding-top":"8px","padding-bottom":"8px","font-size":"14px"}},D={type:"button",class:"btn-customer-no-back",style:{"font-size":"14px"}},H={class:"table-responsive",style:{"min-height":"80ch"}},C={class:"table table-hover text-left",id:"customerTable"},$={class:"table-light"},V={class:"list form-check-all"},U={class:"group-button"},I=["onClick"],B=["onClick"],M={class:"dropdow_item_font_size"},R={class:"model-content-custome",style:{"padding-top":"2px",overflow:"auto"}},K=(0,a._)("option",{value:"",disabled:""},"银行类型",-1),Y=(0,a._)("option",{value:"dl001-dl001"},"dl001-dl001",-1),q=[K,Y],P=(0,a._)("div",{class:"form-check form-switch form-switch-right form-switch-md",style:{"margin-left":"5px"}},[(0,a._)("input",{class:"form-check-input code-switcher",type:"checkbox",id:"sizing-input-showcode"})],-1),S=(0,a._)("div",{class:"form-check form-switch form-switch-right form-switch-md",style:{"margin-left":"5px"}},[(0,a._)("input",{class:"form-check-input code-switcher",type:"checkbox",id:"sizing-input-showcode"})],-1),j={class:"model-content-custome",style:{"padding-top":"2px",overflow:"auto"}},E=(0,a._)("span",null,"0元",-1);var F={__name:"merchant-list",setup(e){const l=(0,r.iH)([{text:"商户ID",value:""},{text:"商户名称",value:""},{text:"商户账户",value:""},{text:"代理账户",value:""},{text:"代理名称",value:""},{text:"可用余额",value:""},{text:"审核状态",value:""},{text:"账户状态",value:""},{text:"今日总流水",value:""},{text:"注册时间\t",value:""},{text:"操作",value:""}]),t=(0,r.iH)([{id:"1665526",merchant_name:"1123",merchant_account:"123",agency_account:"dl001",agency_name:"dl001",avalable_balance:"9,999,552,657.0",approval_status:1,status:1,total_turnover_today:"0",total_success_rate:"0%",remark:"",register_time:"2023-12-26 12:48:04\t"}]),K=(0,r.iH)([{value:"",label:"账户状态"},{value:"1",label:"开启"},{value:"0",label:"关闭"}]),Y=(0,r.iH)([{value:"",label:"排序方式"},{value:"",label:"按注册时间倒序"},{value:"",label:"按注册时间顺序"},{value:"",label:"按余额顺序"},{value:"",label:"按余额倒序"},{value:"",label:"按今日流水倒序"}]),F=(0,r.iH)([{value:"",label:"t-more"},{value:"1",label:"t-enable-script"},{value:"2",label:"t-delete-bank-card"},{value:"2",label:"t-account-test"},{value:"2",label:"t-balance-update"},{value:"2",label:"t-execute-script"},{value:"2",label:"t-script-log"},{value:"2",label:"t-view-VPN"},{value:"2",label:"t-crawler-detail"}]),J=(0,r.iH)();(0,a.bv)((()=>{const e=new Date,l=new Date((new Date).setDate(e.getDate()+7));J.value=[e,l]}));const T=(0,r.iH)(!1),L=(0,r.iH)(!1),N=(0,r.iH)(""),A=(0,r.iH)(""),G=(0,r.iH)(""),O=(0,r.iH)(""),Q=(0,r.iH)(""),X=(0,r.iH)(0),ee=(0,r.iH)(0),le=(0,r.iH)(0),te=(0,r.iH)(""),ae=(0,r.iH)(""),oe=(0,r.iH)(!0),ne=(0,r.iH)("添加商户"),se=(0,r.iH)(""),ue=()=>{T.value=!0,oe.value=!0,ne.value="添加商户",N.value="",A.value="",G.value="",O.value="",X.value=0,ee.value=0,le.value=0,te.value="",ae.value=""},ie=(e,l)=>{T.value=!0,oe.value=!1,ne.value="编辑商户信息",A.value=l.merchant_name,G.value=l.merchant_account,O.value="",X.value=0,ee.value=1e4,le.value=3e8,te.value="",ae.value=""},ce=(e,l)=>{L.value=!0,se.value=l.id,A.value=l.merchant_name},re=()=>{T.value=!1},de=()=>{L.value=!1},pe=()=>{T.value=!1},ve=()=>{T.value=!1};return(e,r)=>{const me=(0,a.up)("VueDatePicker"),_e=(0,a.up)("BDropdownItem"),fe=(0,a.up)("BDropdown"),we=(0,a.up)("BCardBody"),be=(0,a.up)("BCard"),ye=(0,a.up)("BRow");return(0,a.wg)(),(0,a.j4)(s.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ye,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u.Z,{title:e.$t("商户列表")},null,8,["title"]),(0,a.Wm)(ye,{class:"mt-3"},{default:(0,a.w5)((()=>[(0,a.Wm)(be,{"no-body":"",class:"card-body"},{default:(0,a.w5)((()=>[(0,a.Wm)(we,null,{default:(0,a.w5)((()=>[(0,a._)("div",d,[(0,a._)("form",p,[(0,a._)("div",v,(0,o.zw)(e.$t("搜索"))+":",1),(0,a._)("div",m,[(0,a._)("select",_,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(K.value,(l=>((0,a.wg)(),(0,a.iD)("option",{key:l.value,value:l.value},(0,o.zw)(e.$t(l.label)),9,f)))),128))])]),(0,a._)("div",null,[(0,a._)("input",{type:"text",class:"form-control",id:"placeholderInput",placeholder:e.$t("代理账户"),style:{"font-size":"14px"}},null,8,w)]),(0,a._)("div",null,[(0,a._)("input",{type:"text",class:"form-control",id:"placeholderInput",placeholder:e.$t("商户ID"),style:{"font-size":"14px"}},null,8,b)]),(0,a._)("div",null,[(0,a._)("input",{type:"text",class:"form-control",id:"placeholderInput",placeholder:e.$t("商户账户"),style:{"font-size":"14px"}},null,8,y)]),(0,a._)("div",null,[(0,a._)("input",{type:"text",class:"form-control",id:"placeholderInput",placeholder:e.$t("商户名称"),style:{"font-size":"14px"}},null,8,x)]),(0,a._)("div",null,[(0,a._)("input",{type:"text",class:"form-control",id:"placeholderInput",placeholder:e.$t("备注"),style:{"font-size":"14px"}},null,8,h)]),(0,a._)("div",null,[(0,a.Wm)(me,{modelValue:J.value,"onUpdate:modelValue":r[0]||(r[0]=e=>J.value=e),range:"","multi-calendars":"","time-picker-inline":"",class:"datapicker vue-datepicker-customer",placeholder:e.$t("注册时间"),style:{"font-size":"14px","max-width":"198.78px"}},null,8,["modelValue","placeholder"])]),(0,a._)("div",g,[(0,a._)("select",z,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Y.value,(l=>((0,a.wg)(),(0,a.iD)("option",{key:l.value,value:l.value},(0,o.zw)(e.$t(l.label)),9,k)))),128))])]),(0,a._)("div",W,[(0,a._)("button",Z,(0,o.zw)(e.$t("搜索")),1),(0,a._)("button",D,(0,o.zw)(e.$t("重置")),1),(0,a._)("button",{type:"button",class:"btn-customer-no",style:{"font-size":"14px"},onClick:r[1]||(r[1]=(0,n.iM)((e=>ue()),["prevent"]))},(0,o.zw)(e.$t("添加商户")),1)])])]),(0,a._)("div",H,[(0,a._)("table",C,[(0,a._)("thead",$,[(0,a._)("tr",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.value,(l=>((0,a.wg)(),(0,a.iD)("th",{key:l.text,class:"table-th-style"},(0,o.zw)(e.$t(l.text)),1)))),128))])]),(0,a._)("tbody",V,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.value,((l,t)=>((0,a.wg)(),(0,a.iD)("tr",{key:t},[(0,a._)("td",null,(0,o.zw)(l.id),1),(0,a._)("td",null,(0,o.zw)(l.merchant_name),1),(0,a._)("td",null,(0,o.zw)(l.merchant_account),1),(0,a._)("td",null,(0,o.zw)(l.agency_name),1),(0,a._)("td",null,(0,o.zw)(l.agency_account),1),(0,a._)("td",null,(0,o.zw)(l.avalable_balance),1),(0,a._)("td",null,[(0,a._)("button",{style:{"margin-left":"2px"},type:"button",class:(0,o.C_)(1===l.approval_status?"btn-customer-green":"btn-customer-ok"),onClick:r[2]||(r[2]=(0,n.iM)((()=>{}),["prevent"]))},(0,o.zw)(1==l.approval_status?"已审核":"未审核"),3)]),(0,a._)("td",null,[(0,a._)("button",{style:{"margin-left":"2px"},type:"button",class:(0,o.C_)(1===l.status?"btn-customer-green":"btn-customer-ok"),onClick:r[3]||(r[3]=(0,n.iM)((()=>{}),["prevent"]))},(0,o.zw)(1==l.status?"正常":"关闭"),3)]),(0,a._)("td",null,(0,o.zw)(l.remark),1),(0,a._)("td",null,(0,o.zw)(l.register_time),1),(0,a._)("td",U,[(0,a._)("button",{style:{"margin-left":"2px"},type:"button",class:"btn-customer-blue",onClick:(0,n.iM)((t=>ce(e.event,l)),["prevent"])},(0,o.zw)(e.$t("t-neipu")),9,I),(0,a._)("button",{style:{"margin-left":"2px"},type:"button",class:"btn-customer-blue",onClick:(0,n.iM)((t=>ie(e.event,l)),["prevent"])},(0,o.zw)(e.$t("t-edit")),9,B),(0,a._)("button",{style:{"margin-left":"2px"},type:"button",class:"btn-customer-ok",onClick:r[4]||(r[4]=(0,n.iM)((()=>{}),["prevent"]))},(0,o.zw)(e.$t("t-delete")),1),(0,a.Wm)(fe,{class:"cardbuton",text:e.$t("t-gengduo"),style:{"margin-left":"2px"},dropdown:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(F.value,(l=>((0,a.wg)(),(0,a.j4)(_e,{key:l.value},{default:(0,a.w5)((()=>[(0,a._)("span",M,(0,o.zw)(e.$t(l.label)),1)])),_:2},1024)))),128))])),_:1},8,["text"])])])))),128))])])])])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.Wm)(i.Z,{visible:T.value,onConfigEvent:r[15]||(r[15]=e=>pe()),onClose:re,title:ne.value},{default:(0,a.w5)((()=>[(0,a._)("div",R,[oe.value?((0,a.wg)(),(0,a.j4)(c.Z,{key:0,title:"选择绑定代理:",isRed:!0},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("select",{class:"form-select","onUpdate:modelValue":r[5]||(r[5]=e=>N.value=e),style:{"font-size":"12px"}},q,512),[[n.bM,N.value]])])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(c.Z,{title:"商户名称:",isRed:!0},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",placeholder:"商户名称","onUpdate:modelValue":r[6]||(r[6]=e=>A.value=e),style:{"font-size":"12px"}},null,512),[[n.nr,A.value]])])),_:1}),(0,a.Wm)(c.Z,{title:"账户：",isRed:!0},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",placeholder:"账户","onUpdate:modelValue":r[7]||(r[7]=e=>G.value=e),style:{"font-size":"12px"}},null,512),[[n.nr,G.value]])])),_:1}),(0,a.Wm)(c.Z,{title:"密码:",isRed:!0},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{type:"password",class:"form-control",placeholder:"密码","onUpdate:modelValue":r[8]||(r[8]=e=>O.value=e),style:{"font-size":"12px"}},null,512),[[n.nr,O.value]])])),_:1}),(0,a.Wm)(c.Z,{title:"确认密码:",isRed:!0},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{type:"password",class:"form-control",placeholder:"确认密码","onUpdate:modelValue":r[9]||(r[9]=e=>Q.value=e),style:{"font-size":"12px"}},null,512),[[n.nr,Q.value]])])),_:1}),(0,a.Wm)(c.Z,{title:"代付默认利率%:"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",placeholder:"代付默认利率","onUpdate:modelValue":r[10]||(r[10]=e=>X.value=e),style:{"font-size":"12px"}},null,512),[[n.nr,X.value]])])),_:1}),(0,a.Wm)(c.Z,{title:"下发默认利率%:"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",placeholder:"下发默认利率","onUpdate:modelValue":r[11]||(r[11]=e=>ee.value=e),style:{"font-size":"12px"}},null,512),[[n.nr,ee.value]])])),_:1}),(0,a.Wm)(c.Z,{title:"内充默认利率%:"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",placeholder:"内充默认利率","onUpdate:modelValue":r[12]||(r[12]=e=>le.value=e),style:{"font-size":"12px"}},null,512),[[n.nr,le.value]])])),_:1}),(0,a.Wm)(c.Z,{title:"备注:"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",placeholder:"备注","onUpdate:modelValue":r[13]||(r[13]=e=>te.value=e),style:{"font-size":"12px"}},null,512),[[n.nr,te.value]])])),_:1}),(0,a.Wm)(c.Z,{title:"代付IP白名单:"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",placeholder:"IP白名单/一行一个",style:{"font-size":"12px"},rows:"3","onUpdate:modelValue":r[14]||(r[14]=e=>ae.value=e)},null,512),[[n.nr,ae.value]])])),_:1}),(0,a.Wm)(c.Z,{title:"代收功能开关:"},{default:(0,a.w5)((()=>[P])),_:1}),(0,a.Wm)(c.Z,{title:"代付功能开关:"},{default:(0,a.w5)((()=>[S])),_:1})])])),_:1},8,["visible","title"]),(0,a.Wm)(i.Z,{visible:L.value,onConfigEvent:ve,onClose:de,title:"内充"},{default:(0,a.w5)((()=>[(0,a._)("div",j,[(0,a.Wm)(c.Z,{title:"商户Id:"},{default:(0,a.w5)((()=>[(0,a._)("span",null,(0,o.zw)(se.value),1)])),_:1}),(0,a.Wm)(c.Z,{title:"商户名称:"},{default:(0,a.w5)((()=>[(0,a._)("span",null,(0,o.zw)(A.value),1)])),_:1}),(0,a.Wm)(c.Z,{title:"充值金额:"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",placeholder:"充值金额","onUpdate:modelValue":r[16]||(r[16]=l=>e.chongJiner=l),style:{"font-size":"12px"}},null,512),[[n.nr,e.chongJiner]])])),_:1}),(0,a.Wm)(c.Z,{title:"内充利率%:"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",placeholder:"内充利率","onUpdate:modelValue":r[17]||(r[17]=e=>ee.value=e),style:{"font-size":"12px"}},null,512),[[n.nr,ee.value]])])),_:1}),(0,a.Wm)(c.Z,{title:"手续费:"},{default:(0,a.w5)((()=>[E])),_:1}),(0,a.Wm)(c.Z,{title:"备注:"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",placeholder:"备注","onUpdate:modelValue":r[18]||(r[18]=e=>te.value=e),style:{"font-size":"12px"}},null,512),[[n.nr,te.value]])])),_:1})])])),_:1},8,["visible"])])),_:1})}}};const J=F;var T=J}}]);
//# sourceMappingURL=874.d76c87e9.js.map