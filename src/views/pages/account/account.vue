<template>
  <Layout>

    <BRow>
      <Breadcrumb :title="$t('账户管理')" />

      <BRow class="mt-3">
        <BCard no-body class="card-body">
          <BCardBody>
            <div class="mt-2 p-3">
              <form class="d-flex flex-row flex-wrap align-items-center gap-2">
                <div class="fw-bold" style="font-size: 14px;">{{ $t('搜索') }}: </div>

                <div class="">
                  <select class="form-select" aria-label="Default select example" style="font-size: 14px;">
                    <option v-for="option in optionStatus" :key="option.value" :value="option.value">{{ $t(option.label)
                    }}
                    </option>
                  </select>
                </div>
                <div class="">
                  <select class="form-select" aria-label="Default select example"  style="font-size: 14px;">
                    <option v-for="option in optionRole" :key="option.value" :value="option.value">{{ $t(option.label)
                    }}
                    </option>
                  </select>
                </div>
                <div>
                  <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('登录账户')" style="font-size: 14px;" />
                </div>

                <div>
                  <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('姓名')" style="font-size: 14px;" />
                </div>
                <div>
                  <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('邮箱')" style="font-size: 14px;"/>
                </div>
                <div>
                  <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('备注')" style="font-size: 14px;"/>
                </div>

                <BCol>
                  <button
                  type="button"
                  class="btn-customer-no"
                  style="margin-left: 4px;font-size: 14px;height: 39px;"
                  v-on:click.prevent=""
                >
                  搜索
                </button>
                <button
                  type="button"
                  class="btn-customer-no-back"
                  style="margin-left: 4px;font-size: 14px;height: 39px;"
                  v-on:click.prevent="reloadPage"
                >
                  重置
                </button>
              <button
                  type="button"
                  class="btn-customer-no"
                  v-on:click.prevent="addNewItem()"
                  style="margin-left: 4px;font-size: 14px;height: 39px;"
                >
                  添加账户
                </button>
                </BCol>
              </form>
            </div>

            <div class="table-responsive" style="min-height: 80ch;">
              <table class="table table-hover text-left table-bordered table-nowrap" id="customerTable">
                <thead class="table-light">
                  <tr>
                    <th v-for="header in headers" :key="header.text">
                      {{ $t(header.text) }}
                    </th>
                  </tr>
                </thead>
                <tbody class="list form-check-all">
                  <tr v-for="(item, index) in items" :key="index">

                    <td>{{ item.name }}</td>
                    <td>{{ item.login_account }}</td>
                    <td>{{ item.role }}</td>
                    <td>{{ item.agent_account }}</td>
                    <td>{{ item.mail }}</td>
             
                    <td><button
                        type="button"
                        :class="item.state ==1?'btn-customer-green':'btn-customer-ok'"
                        v-on:click.prevent=""
                      >
                        {{item.state == 1?"正常":"禁用"}}
                      </button></td>
                      <td>
                        <button
                        type="button"
                        :class="item.online_status == 1?'btn-customer-green':'btn-customer-ok'"
                        v-on:click.prevent=""
                      >
                        {{item.onlineStatus == 1?"在线":"离线"}}
                      </button></td>
                    <td>{{ item.creation_time }}</td>
                    <td>{{ item.last_login_time }}</td>
                    <td>{{ item.balance }}</td>
                    <td>{{ item.merchant_login_address }}</td>
                    <td>{{ item.remark }}</td>
                    <td>
                      <BCol>
                        <button
                        type="button"
                        class="btn-customer-blue"
                        v-on:click.prevent="UpdateItem($event, item)"
                        style="margin-top: 3px;"
                      >
                        编辑
                      </button>
                      <button
                        type="button"
                        class="btn-customer-blue"
                        v-on:click.prevent="RoleUpdate()"
                        style="margin-left:2px;margin-top: 3px;"
                      >
                        权限
                      </button>
                      <button
                        type="button"
                        class="btn-customer-ok"
                        v-on:click.prevent="deleteItem()"
                        style="margin-left:2px;margin-top: 3px;"
                      >
                        删除
                      </button>
                      <BDropdown class="cardbuton" text="更多" style="margin-left:2px">
                          <BDropdownItem v-on:click="showQrCode = true"
                            ><span class="dropdow_item_font_size"
                              >Google验证码</span
                            ></BDropdownItem
                          >
                          <BDropdownItem
                            ><span class="dropdow_item_font_size"
                              >出款卡记录</span
                            ></BDropdownItem
                          >
                        </BDropdown>
                      </BCol>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </BCardBody>
        </BCard>
      </BRow>

    </BRow>
    <Modal
          :visible="showDialog"
          @configEvent="config"
          @close="closeDialog"
          :title="addDialogTitle"
          :showFooter="showFormAdd"
        >
          <div
            class="model-content-custome"
            style="padding-top: 2px; overflow: auto"
            v-if="showFormAdd"
          >
           <modal-item title="姓名:" :isRed="true">
            <input type="text" class="form-control" placeholder="姓名" v-model="dgName" style="font-size: 12px"/>
           </modal-item>
           <modal-item title="账户:" :isRed="true">
            <input type="text" class="form-control" placeholder="账户" v-model="dgUserName" style="font-size: 12px"/>
           </modal-item>
           <modal-item title="密码：" :isRed="true">
            <input type="text" class="form-control" placeholder="密码" v-model="dgPassword" style="font-size: 12px"/>
           </modal-item>
           <modal-item title="确认密码：" :isRed="true">
            <input type="text" class="form-control" placeholder="确认密码" v-model="dgConfigPassword" style="font-size: 12px"/>
           </modal-item>

           <modal-item title="用户角色：" :isRed="true" v-if="isAddItem">
            <select class="form-select" v-model="dgJiaoCe" style="font-size: 14px" >
                <option value="">角色</option>
                <option value="Root管理员">Root管理员</option>
                <option value="代理商">代理商</option>
                <option value="代理子账户">代理子账户</option>
                <option value="普通管理员">普通管理员</option>
                <option value="出款人员">出款人员</option>
            </select>
           </modal-item>

           <modal-item title="电话：">
            <input type="text" class="form-control" placeholder="电话" v-model="dgPhoneNumber" style="font-size: 12px"/>
           </modal-item>
           <modal-item title="备注：">
            <input type="text" class="form-control" placeholder="备注" v-model="dgNote" style="font-size: 12px"/>
           </modal-item>
           <modal-item title="入款-银行扫码费率% :" v-if="isAddItem">
            <input type="text" class="form-control" placeholder="入款-银行扫码费率" v-model="dgSaoma" style="font-size: 12px"/>
           </modal-item>
           <modal-item title="出款最小值：" v-else>
            <input type="number" class="form-control" placeholder="出款最小值" v-model="dgMinMony" style="font-size: 12px"/>
           </modal-item>
           <modal-item title="代付费率%:" v-if="isAddItem">
            <input type="text" class="form-control" placeholder="代付费率" v-model="dgSendMony" style="font-size: 12px"/>
           </modal-item>
           <modal-item title="出款最大值：" v-else>
            <input type="number" class="form-control" placeholder="出款最大值" v-model="dgMaxMony" style="font-size: 12px"/>
           </modal-item>
           <modal-item title="内充利率%:" v-if="isAddItem">
            <input type="text" class="form-control" placeholder="内充利率" v-model="dgneiChong" style="font-size: 12px"/>
           </modal-item>
           <modal-item title="出款银行卡信息:" v-else>
            <input type="text" class="form-control" placeholder="出款银行卡信息" v-model="dgBankInfo" style="font-size: 12px"/>
           </modal-item>
           
          </div>
          <div
            class="model-content-custome"
            style="padding: 2px;"
            v-else
          >
           <div class="role-dialog-title">
            <div class="row1">
              菜单名
            </div>
            <div class="row2">
              <Bcol lg="12">
                <div> 拥有权重</div>
              </Bcol>
            </div>
          </div>
          <div class="role-dialog-content" v-for="(item,index) in roles" v-bind:key="index">
            <div class="row1">
              {{item.title}}
            </div>
            <div class="row2">
              <BCol lg="12">
                <button
                style="margin-left: 2px;margin-top: 2px;"
                type="button"
                v-for="(itemRole,index1) in item.roleItems"
                v-bind:key="index1"
                :class="itemRole.status?'btn-customer-ok':'btn-customer-no-back'"
                v-on:click.prevent="itemRole.status = !itemRole.status"
              >
                {{ itemRole.name }}
              </button>
              </BCol>
            </div>
          </div>
          <div class="role-dialog-content">
            <div class="row1">
              代付管理
            </div>
            <div class="row2">
              <BCol lg="12">
                <button
                style="margin-left: 2px;margin-top: 2px;"
                type="button"
                class="btn-customer-success"
                v-on:click.prevent=""
              >
                <span><i class="bi bi-check-circle-fill" style="margin-right: 4px;"></i>已开放</span>
              </button>
              </BCol>
            </div>
          </div>
        </div>
        </Modal>
        <Modal
          :visible="showQrCode"
          @configEvent="config"
          @close="closeQrcodeDialog()"
          title=""
          :showFooter="false"
          size=" "
        >
          <div
            class="model-content-custome"
            style="padding: 0px; overflow: auto"
          >
          <VueQRCodeComponent
            text="https://goo.gl/9eIWP9"
            size="450"
            error-level="L">
        </VueQRCodeComponent>

        </div>
        </Modal>

  </Layout>
</template>
  
<script setup>
import Layout from "@/layouts/main.vue";
// import ModalHint from "@/components/modals/ModalHint.vue";
import Breadcrumb from "@/components/Breadcrumd/Breadcrumb.vue";
import Modal from "@/components/modals/modal.vue";
import ModalItem from "@/components/modals/modalItem.vue";
import VueQRCodeComponent from 'vue-qrcode-component'
import { ref,inject } from "vue";


const headers = ref([
  { text: "姓名", value: "" },
  { text: "登录账名	", value: "" },
  { text: "角色	", value: "" },
  { text: "代理商账户	", value: "" },
  { text: "邮箱	", value: "" },
  { text: "状态", value: "" },
  { text: "在线状态	", value: "" },
  { text: "创建时间	", value: "" },
  { text: "最近登录时间	", value: "" },
  { text: "余额	", value: "" },
  { text: "商户登录地址	", value: "" },
  { text: "备注	", value: "" },
  { text: "操作	", value: "" },
]);

const items = ref([
  {
    name: "3333	",
    login_account: "3333",
    role: "出款人员		",
    agent_account: "",
    mail: "",
    state: 1,
    online_status: 1,
    creation_time: "2024-01-17 02:12:15",
    last_login_time: "",
    balance: "",
    merchant_login_address: "",
    remark: "3333",
    operate: "3333"
  },
]);

const optionStatus = ref([
  { value: "", label: "状态" },
  { value: "1", label: "正常" },
  { value: "0", label: "禁用" },
]);
const optionRole = ref([
  { value: "", label: "角色" },
  { value: "1", label: "ROOT管理员" },
  { value: "0", label: "代理商" },
  { value: "0", label: "代理子账户" },
  { value: "0", label: "普通管理员" },
  { value: "0", label: "出款人员" },

]);
const showQrCode = ref(false)
const showDialog = ref( false)
const isAddItem = ref(true)
const showFormAdd = ref(false)
const dgName = ref("")
const dgUserName = ref("")
const dgPassword = ref("")
const dgConfigPassword = ref("")
const dgJiaoCe = ref("")
const dgPhoneNumber = ref("")
const dgNote = ref("")
const dgSaoma = ref("")
const dgMinMony = ref(0)
const dgSendMony = ref("")
const dgMaxMony = ref(0)
const dgneiChong = ref("")
const dgBankInfo = ref("")
const swal = inject('$swal')
const addDialogTitle = ref("添加账户")

const addNewItem = () =>{
  showDialog.value = true;
  showFormAdd.value = true;
  isAddItem.value = true;
  addDialogTitle.value = "添加账户";
  dgName.value = "";
  dgUserName.value = "";
  dgPassword.value = "";
  dgConfigPassword.value = "";
  dgJiaoCe.value = "";
  dgPhoneNumber.value = "";
  dgNote.value = "";
  dgSaoma.value = "";
  dgSendMony.value = "";
  dgneiChong.value = "";

}
const UpdateItem = ($event, item) =>{
showDialog.value = true;
showFormAdd.value = true;
isAddItem.value = false;
addDialogTitle.value = "编辑用户信息";
dgName.value = item.name;
dgUserName.value = item.login_account;
dgPassword.value = "";
dgConfigPassword.value = "";
dgPhoneNumber.value = "25251325";
dgNote.value = item.note;
dgMinMony.value = 0;
dgMaxMony.value = 0;
dgBankInfo.value = "";
}

const RoleUpdate = () =>{
  showDialog.value = true;
  showFormAdd.value = false;
}
const config = () => {
  if (isAddItem.value) {
    swal({
    title: "提醒",
    icon: "question",
    iconHtml: "!",
    cancelButtonText: "取消",
    confirmButtonText: "确定",
    showCancelButton: true,
    showCloseButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      swal({
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    }
  });
  } else 
  {
    swal({
    title: "提醒",
    icon: "question",
    iconHtml: "!",
    cancelButtonText: "取消",
    confirmButtonText: "确定",
    showCancelButton: true,
    showCloseButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      swal({
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    }
  });
  }
  showDialog.value = false;
}
const deleteItem = () =>{
  swal({
    title: "提醒",
    icon: "question",
    iconHtml: "!",
    cancelButtonText: "取消",
    confirmButtonText: "确定",
    showCancelButton: true,
    showCloseButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      swal({
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    }
  });
}
const closeDialog =() => {
  showDialog.value = false;
}
const closeQrcodeDialog =() =>{
  showQrCode.value = false;
}
const reloadPage = ()=>{
  location.reload();
}
const roles = ref([
        {title:"收款管理",roleItems:[
          {name:"银行卡管理权限",status:false},
          {name:"Zalo账户管理权限",status:false},
          {name:"ViettelPay管理权限",status:false},
          {name:"Momo管理权限",status:false},
          {name:"收款银行管理",status:false},
          {name:"总计管理",status:false},
          {name:"银行脚本管理",status:false},
        ]},
        {title:"收款管理",roleItems:[
          {name:"银行卡管理权限",status:false},
          {name:"Zalo账户管理权限",status:false},
          {name:"ViettelPay管理权限",status:false},
          {name:"Momo管理权限",status:false},
          {name:"收款银行管理",status:false},
          {name:"总计管理",status:false},
          {name:"银行脚本管理",status:false},
        ]}
      ])
</script>