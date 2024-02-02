<template>
  <Layout>
    <BRow>
      <Breadcrumb :title="$t('商户列表')" />

      <BRow class="mt-3">
        <BCard no-body class="card-body">
          <BCardBody>
            <div class="mt-2 p-3">
              <form
                class="d-flex flex-row flex-wrap align-items-center gap-2"
                style="font-size: 14px;"
              >
                <div class="fw-bold" style="font-size: 14px;">{{ $t("搜索") }}:</div>

                <div class="">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    style="font-size: 14px;"
                  >
                    <option
                      v-for="option in optionStatus"
                      :key="option.value"
                      :value="option.value"
                    >
                      {{ $t(option.label) }}
                    </option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    class="form-control"
                    id="placeholderInput"
                    :placeholder="$t('代理账户')"
                    style="font-size: 14px;"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    class="form-control"
                    id="placeholderInput"
                    :placeholder="$t('商户ID')"
                    style="font-size: 14px;"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    class="form-control"
                    id="placeholderInput"
                    :placeholder="$t('商户账户')"
                    style="font-size: 14px;"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    class="form-control"
                    id="placeholderInput"
                    :placeholder="$t('商户名称')"
                    style="font-size: 14px;"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    class="form-control"
                    id="placeholderInput"
                    :placeholder="$t('备注')"
                    style="font-size: 14px;"
                  />
                </div>
                <div>
                  <VueDatePicker
                    v-model="date"
                    range
                    multi-calendars
                    time-picker-inline
                    class="datapicker vue-datepicker-customer"
                    :placeholder="$t('注册时间')"
                    style="font-size: 14px; max-width: 198.78px"
                  ></VueDatePicker>
                </div>
                <div class="">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    style="font-size: 14px;"
                  >
                    <option
                      v-for="option in optionSort"
                      :key="option.value"
                      :value="option.value"
                    >
                      {{ $t(option.label) }}
                    </option>
                  </select>
                </div>
                <div class="d-flex gap-2">
                  <button
                    type="button"
                    class="btn-customer-no"
                    style="padding-top: 8px; padding-bottom: 8px ;font-size: 14px;"
                  >
                    {{ $t("搜索") }}
                  </button>
                  <button type="button" class="btn-customer-no-back" style="font-size: 14px;">
                    {{ $t("重置") }}
                  </button>
                  <button type="button" class="btn-customer-no" style="font-size: 14px;"
                  v-on:click.prevent="createItem()">
                    {{ $t("添加商户") }}
                  </button>
                </div>
              </form>
            </div>

            <div class="table-responsive" style="min-height: 80ch;">
              <table class="table table-hover text-left" id="customerTable">
                <thead class="table-light">
                  <tr>
                    <th v-for="header in headers" :key="header.text" class="table-th-style">
                      {{ $t(header.text) }}
                    </th>
                  </tr>
                </thead>
                <tbody class="list form-check-all">
                  <tr v-for="(item, index) in items" :key="index">
                    <td>{{ item.id }}</td>
                    <td>{{ item.merchant_name }}</td>
                    <td>{{ item.merchant_account }}</td>
                    <td>{{ item.agency_name }}</td>
                    <td>{{ item.agency_account }}</td>
                    <td>{{ item.avalable_balance }}</td>
                    <td>
                      <button
                        style="margin-left: 2px"
                        type="button"
                        :class="
                          item.approval_status === 1
                            ? 'btn-customer-green'
                            : 'btn-customer-ok'
                        "
                        v-on:click.prevent=""
                      >
                      {{ item.approval_status == 1? "已审核":"未审核" }}
                    </button>
                    
                    </td>

                    <td>
                      <button
                        style="margin-left: 2px"
                        type="button"
                        :class="
                          item.status === 1
                            ? 'btn-customer-green'
                            : 'btn-customer-ok'
                        "
                        v-on:click.prevent=""
                      >
                      {{ item.status == 1? "正常":"关闭" }}
                    </button>
                    </td>
                    <!-- <td>
                      {{ item.total_turnover_today }}
                    </td>
                    <td>{{ item.total_success_rate }}</td> -->
                    <td>{{ item.remark }}</td>
                    <td>{{ item.register_time }}</td>

                    <td class="group-button">
                      <button
                        style="margin-left: 2px"
                        type="button"
                        class="btn-customer-blue"
                        v-on:click.prevent="neiPuItemEvent(event,item)"
                      >
                        {{ $t("t-neipu") }}
                      </button>
                      <button
                        style="margin-left: 2px"
                        type="button"
                        class="btn-customer-blue"
                        v-on:click.prevent="updateItemEvent(event,item)"
                      >
                        {{ $t("t-edit") }}
                      </button>

                      <button
                        style="margin-left: 2px"
                        type="button"
                        class="btn-customer-ok"
                        v-on:click.prevent=""
                      >
                      {{ $t("t-delete") }}
                      </button>
                      

                      <!-- <div class=""> -->
                      <BDropdown
                        class="cardbuton"
                        :text="$t('t-gengduo')"
                        style="margin-left: 2px"
                        dropdown
                      >
                        <BDropdownItem  v-for="option in optionMore"
                            :key="option.value"
                          ><span class="dropdow_item_font_size"
                            > {{ $t(option.label) }}</span
                          ></BDropdownItem>
                      </BDropdown>
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
          :visible="showEditDialog"
          @configEvent="editDialogConfigEvent()"
          @close="closeEditDialog"
          :title="editDialogTitle"
        >
          <div
            class="model-content-custome"
            style="padding-top: 2px; overflow: auto"
          >
            <modal-item title="选择绑定代理:" :isRed="true" v-if="isAddItem">
              <select
                class="form-select"
                v-model="dialogdaili_zhuanghu"
                style="font-size: 12px"
              >
                <option value="" disabled>银行类型</option>
                <option value="dl001-dl001">dl001-dl001</option>
              </select>
            </modal-item>
            <modal-item title="商户名称:" :isRed="true">
              <input
                type="text"
                class="form-control"
                placeholder="商户名称"
                v-model="dialogkehu_mingcheng"
                style="font-size: 12px"
              />
            </modal-item>
            <modal-item title="账户：" :isRed="true">
              <input
                type="text"
                class="form-control"
                placeholder="账户"
                v-model="dialogkehu_zhuanghu"
                style="font-size: 12px"
              />
            </modal-item>
            <modal-item title="密码:" :isRed="true">
              <input
                type="password"
                class="form-control"
                placeholder="密码"
                v-model="dialogPassWord"
                style="font-size: 12px"
              />
            </modal-item> 
            <modal-item title="确认密码:" :isRed="true">
              <input
                type="password"
                class="form-control"
                placeholder="确认密码"
                v-model="dialogConfigPassWord"
                style="font-size: 12px"
              />
            </modal-item>
            <modal-item title="代付默认利率%:">
              <input
                type="number"
                class="form-control"
                placeholder="代付默认利率"
                v-model="dialoglv_li"
                style="font-size: 12px"
              />
            </modal-item>
            <modal-item title="下发默认利率%:">
              <input
                type="number"
                class="form-control"
                placeholder="下发默认利率"
                v-model="dialogliu_shui"
                style="font-size: 12px"
              />
            </modal-item>
            <modal-item title="内充默认利率%:">
              <input
                type="number"
                class="form-control"
                placeholder="内充默认利率"
                v-model="dialogNeibu"
                style="font-size: 12px"
              />
            </modal-item>
            <modal-item title="备注:">
              <input
                type="text"
                class="form-control"
                placeholder="备注"
                v-model="dialogBeiZhu"
                style="font-size: 12px"
              />
            </modal-item>
            <modal-item title="代付IP白名单:">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="IP白名单/一行一个"
                  style="font-size: 12px"
                  rows="3"
                  v-model="dialogIp"
                ></textarea>
            </modal-item>
            
            <modal-item title="代收功能开关:">
              <div class="form-check form-switch form-switch-right form-switch-md" style="margin-left: 5px;">                    
                  <input class="form-check-input code-switcher" type="checkbox" id="sizing-input-showcode">
              </div>
            </modal-item>

            <modal-item title="代付功能开关:">
              <div class="form-check form-switch form-switch-right form-switch-md" style="margin-left: 5px;">                    
                  <input class="form-check-input code-switcher" type="checkbox" id="sizing-input-showcode">
              </div>
            </modal-item>




          </div>
        </Modal>
        <Modal
          :visible="showNeiChong"
          @configEvent="neiChongDialogConfigEvent"
          @close="closeNeiChongDialog"
          title="内充"
        >
          <div
            class="model-content-custome"
            style="padding-top: 2px; overflow: auto"
          >
            <modal-item title="商户Id:">
             <span>{{ dialogId }}</span>
            </modal-item>
            <modal-item title="商户名称:">
             <span>{{ dialogkehu_mingcheng }}</span>
            </modal-item>
            <modal-item title="充值金额:">
              <input
                type="number"
                class="form-control"
                placeholder="充值金额"
                v-model="chongJiner"
                style="font-size: 12px"
              />
            </modal-item>
            <modal-item title="内充利率%:">
              <input
                type="number"
                class="form-control"
                placeholder="内充利率"
                v-model="dialogliu_shui"
                style="font-size: 12px"
              />
            </modal-item>
            <modal-item title="手续费:">
            <span>0元</span>
            </modal-item>
            <modal-item title="备注:">
              <input
                type="text"
                class="form-control"
                placeholder="备注"
                v-model="dialogBeiZhu"
                style="font-size: 12px"
              />
            </modal-item>
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
import { ref, onMounted } from "vue";

const headers = ref([
  { text: "商户ID", value: "" },
  { text: "商户名称", value: "" },
  { text: "商户账户", value: "" },
  { text: "代理账户", value: "" },
  { text: "代理名称", value: "" },
  { text: "可用余额", value: "" },
  { text: "审核状态", value: "" },
  { text: "账户状态", value: "" },
  { text: "今日总流水", value: "" },
  // { text: "今日成功率", value: "" },
  // { text: "备注", value: "" },
  { text: "注册时间	", value: "" },
  { text: "操作", value: "" },
]);

const items = ref([
  {
    id: "1665526",
    merchant_name: "1123",
    merchant_account: "123",
    agency_account: "dl001",
    agency_name: "dl001",
    avalable_balance: "9,999,552,657.0",
    approval_status: 1,
    status: 1,
    total_turnover_today: "0",
    total_success_rate: "0%",
    remark: "",
    register_time: "2023-12-26 12:48:04	",
  },
]);

const optionStatus = ref([
  { value: "", label: "账户状态" },
  { value: "1", label: "开启" },
  { value: "0", label: "关闭" },
]);

const optionSort = ref([
  { value: "", label: "排序方式" },
  { value: "", label: "按注册时间倒序" },
  { value: "", label: "按注册时间顺序" },
  { value: "", label: "按余额顺序" },
  { value: "", label: "按余额倒序" },
  { value: "", label: "按今日流水倒序" },
]);

const optionMore = ref([
  { value: "", label: "t-more" },
  { value: "1", label: "t-enable-script" },
  { value: "2", label: "t-delete-bank-card" },
  { value: "2", label: "t-account-test" },
  { value: "2", label: "t-balance-update" },
  { value: "2", label: "t-execute-script" },
  { value: "2", label: "t-script-log" },
  { value: "2", label: "t-view-VPN" },
  { value: "2", label: "t-crawler-detail" },
]);
const date = ref();

onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
});

const showEditDialog = ref(false);
const showNeiChong = ref(false)

const dialogdaili_zhuanghu = ref("");
const dialogkehu_mingcheng = ref("");
const dialogkehu_zhuanghu = ref("");
const dialogPassWord = ref("");
const dialogConfigPassWord = ref("");
const dialoglv_li = ref(0);
const dialogliu_shui = ref(0);
const dialogNeibu = ref(0);
const dialogBeiZhu = ref("");
const dialogIp = ref("");
const isAddItem = ref(true)
const editDialogTitle = ref("添加商户");

//内充
const dialogId = ref("");
const createItem =() =>{
 showEditDialog.value = true;
 isAddItem.value = true;
 editDialogTitle.value = "添加商户";
 dialogdaili_zhuanghu.value = "";
 dialogkehu_mingcheng.value = "";
 dialogkehu_zhuanghu.value = "";
 dialogPassWord.value = "";
 dialoglv_li.value = 0;
 dialogliu_shui.value = 0;
 dialogNeibu.value = 0;
 dialogBeiZhu.value = "";
 dialogIp.value = "";
}
const updateItemEvent = (event,item) =>{
 showEditDialog.value = true;
 isAddItem.value = false;
 editDialogTitle.value = "编辑商户信息";
 dialogkehu_mingcheng.value = item.merchant_name;
 dialogkehu_zhuanghu.value = item.merchant_account;
 dialogPassWord.value = "";
 dialoglv_li.value = 0;
 dialogliu_shui.value = 10000;
 dialogNeibu.value = 300000000;
 dialogBeiZhu.value = "";
 dialogIp.value = "";
}
const neiPuItemEvent = (event,item) =>{
 showNeiChong.value = true;
 dialogId.value = item.id
 dialogkehu_mingcheng.value = item.merchant_name;
}
const closeEditDialog = ()=>{
  showEditDialog.value = false;
}
const closeNeiChongDialog = ()=>{
  showNeiChong.value = false;
}
 const editDialogConfigEvent = () =>{
  showEditDialog.value = false;
 }
 const neiChongDialogConfigEvent = () =>{
  showEditDialog.value = false;
 }

</script>