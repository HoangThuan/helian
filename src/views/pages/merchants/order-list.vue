<template>
  <Layout>

    <BRow>
      <Breadcrumb :title="$t('订单列表')" />

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
                  <select class="form-select" aria-label="Default select example" style="font-size: 14px;">
                    <option v-for="option in optionPayment" :key="option.value" :value="option.value">{{ $t(option.label)
                    }}
                    </option>
                  </select>
                </div>
                <div class="">
                  <select class="form-select" aria-label="Default select example" style="font-size: 14px;">
                    <option v-for="option in optionCallbackStatus" :key="option.value" :value="option.value">{{ $t(option.label)
                    }}
                    </option>
                  </select>
                </div>
                <div class="">
                  <select class="form-select" aria-label="Default select example" style="font-size: 14px;">
                    <option v-for="option in optionCallbackType" :key="option.value" :value="option.value">{{ $t(option.label)
                    }}
                    </option>
                  </select>
                </div>
                <div class="">
                  <select class="form-select" aria-label="Default select example" style="font-size: 14px;">
                    <option v-for="option in optionSort" :key="option.value" :value="option.value">{{ $t(option.label)
                    }}
                    </option>
                  </select>
                </div>
                <div class="">
                  <select class="form-select" aria-label="Default select example" style="font-size: 14px;">
                    <option v-for="option in optionSearchType" :key="option.value" :value="option.value">{{ $t(option.label)
                    }}
                    </option>
                  </select>
                </div>
                <div>
                  <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('搜索内容')" style="font-size: 14px;" />
                </div>
                <div>
                  <VueDatePicker
                    v-model="dateOrder"
                    range
                    multi-calendars
                    time-picker-inline
                    class="datapicker vue-datepicker-customer"
                    :placeholder="$t('订单时间')"
                    style="font-size: 14px; max-width: 198.78px"
                  ></VueDatePicker>
                </div>
                <div>
                  <VueDatePicker
                    v-model="dateResend"
                    range
                    multi-calendars
                    time-picker-inline
                    class="datapicker vue-datepicker-customer"
                    :placeholder="$t('回调时间')"
                    style="font-size: 14px; max-width: 198.78px"
                  ></VueDatePicker>
                </div>
                <Bcol lg="12">
                  <button
                  type="button"
                  class="btn-customer-no"
                  style="margin-left: 4px; font-size: 14px; margin-top: 7px;height: 39px;"
                  v-on:click.prevent="fiterListItem"
                >
                {{ $t('搜索') }}
                </button>
                <button
                  type="button"
                  class="btn-customer-no-back"
                  style="margin-left: 4px; font-size: 14px; margin-top: 7px;height: 39px;"
                  v-on:click.prevent="location.reload()"
                >
                {{ $t('重置') }}
                </button>

                <BDropdown class="behalfPay" text="暂不处理" style="margin-left: 4px; font-size: 14px;  margin-top: -3.1px;height: 39px;">
                  <BDropdownItem
                    ><span class="dropdow_item_font_size"
                      >暂不处理</span
                    ></BDropdownItem
                  >
                  <BDropdownItem
                    ><span class="dropdow_item_font_size"
                      >10秒自动刷新</span
                    ></BDropdownItem
                  >
                  <BDropdownItem
                    ><span class="dropdow_item_font_size"
                      >20秒自动刷新</span
                    ></BDropdownItem
                  >
                  <BDropdownItem
                    ><span class="dropdow_item_font_size"
                      >30秒自动刷新</span
                    ></BDropdownItem
                  >
                </BDropdown>
                <button
                  type="button"
                  class="btn-customer-yellow"
                  v-on:click.prevent="showZongHeDialog = true"
                  style="margin-left: 4px; font-size: 14px;margin-top: 10px;height: 39px;"
                >
                {{ $t('总计') }}
                </button>
                <button
                  type="button"
                  class="btn-customer-yellow"
                  v-on:click.prevent="dowloadData()"
                  style="margin-left: 4px; font-size: 14px;margin-top: 7px;height: 39px;"
                >
                {{ $t('导出订单数据') }}
                </button>
                </Bcol>
                

              </form>
            </div>

            <div class="table-responsive">
              <table class="table table-hover text-left" id="customerTable">
                <thead class="table-light">
                  <tr>
                    <th v-for="header in headers" :key="header.text">
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
                    <td><span class=" status  badge bg-success text-successr">
                        {{ item.approval_status }}
                      </span></td>

                    <td><span class=" status  badge bg-success text-successr">
                        {{ item.account_status }}
                      </span></td>
                    <td>
                      {{ item.total_turnover_today }}
                    </td>
                    <td>{{ item.total_success_rate }}</td>
                    <td>{{ item.remark }}</td>
                    <td>{{ item.register_time }}</td>

                    <td class="d-flex gap-3">
                      <button type="button" class="btn btn-info waves-effect waves-light btn-row active px-2"
                        @click="onOpenModal(index)">
                        {{ $t('t-edit') }}
                      </button>

                      <div>
                        <button type="button" class="btn btn-success waves-effect waves-light btn-row px-2"
                          @click="handleChangeStatus(index)" v-if="item.status === 'active'">
                          {{ $t('t-enable') }}
                        </button>
                        <button type="button" class="btn btn-danger waves-effect waves-light btn-row px-2"
                          @click="handleChangeStatus(index)" v-else>
                          {{ $t('t-deactivate') }}
                        </button>
                      </div>

                      <div class="">
                        <button type="button" class="btn btn-success waves-effect waves-light btn-row px-2"
                          @click="handleChangeScriptExecution(index)" v-if="item.script_execution_status === 'active'">
                          {{ $t('t-enable-script') }}
                        </button>
                        <button type="button" class="btn btn-danger waves-effect waves-light btn-row px-2"
                          @click="handleChangeScriptExecution(index)" v-else>
                          {{ $t('t-deactivate-script') }}
                        </button>
                      </div>


                      <div class="">
                        <select class="waves-light p-2 border-0 bg-dark-subtle" style="width: 50px">
                          <option v-for="option in optionMore" :key="option.value" :value="option.value">{{
                            $t(option.label) }}
                          </option>
                        </select>
                      </div>

                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-show="items?.length === 0"
               class="no_data">
                                    <img src="https://pay2world.me/static/common/images/no_data.png" alt="暂无数据">
                                    <p>暂无数据</p>
                                </div>
            </div>
          </BCardBody>
        </BCard>
      </BRow>

    </BRow>
    <Modal
          :visible="showZongHeDialog"
          @configEvent="showZongHeDialog= false"
          @close="showZongHeDialog= false"
          title="总计"
        :showFooter="false"
        >
          <div
            class="model-content-custome"
            style="padding-top: 2px; overflow: auto"
          >
            <modal-item title="订单金额:">
             <span>23,002</span>
            </modal-item>
            <modal-item title="实付金额:">
             <span>0</span>
            </modal-item>
            <modal-item title="实付笔数:">
             <span>0</span>
            </modal-item>
            <modal-item title="实付手续费:">
             <span>0</span>
            </modal-item>
            <modal-item title="回调金额:">
             <span>0</span>
            </modal-item>
            <modal-item title="回调笔数:">
             <span>0</span>
            </modal-item>
            <modal-item title="掉单金额:">
             <span>0</span>
            </modal-item>
            <modal-item title="掉单笔数:">
             <span>0</span>
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
import { ref, onMounted,inject } from "vue";


const headers = ref([
  { text: "订单号	", value: "" },
  { text: "商户名称	", value: "" },
  { text: "商户订单号	", value: "" },
  { text: "收款账号	", value: "" },
  { text: "收款人	", value: "" },
  { text: "支付模式	", value: "" },
  { text: "订单金额	", value: "" },
  { text: "手续费	", value: "" },
  { text: "支付金额	", value: "" },
  { text: "订单时间	", value: "" },
  { text: "支付状态	", value: "" },
  { text: "回调状态		", value: "" },
  { text: "回调时间		", value: "" },
  { text: "操作	", value: "" }
]);

const items = ref([
  
]);

const optionStatus = ref([
  { value: "", label: "支付状态" },
  { value: "1", label: "已支付" },
  { value: "0", label: "未支付" }
]);
const optionPayment = ref([
  { value: "", label: "支付模式" },
  { value: "VNBANKQR", label: "越南网银扫码" },
  { value: "VNZALO", label: "越南ZALO pay" },
  { value: "VNMOMO", label: "越南MOMO pay" },
  { value: "VNVTPAY", label: "越南ViettelPay" }
]);
const optionCallbackStatus = ref([
  { value: "", label: "回调状态" },
  { value: "success", label: "成功" },
  { value: "failed", label: "失败" },
  { value: "not_calledback", label: "未回调" },
]);
const optionCallbackType = ref([
  { value: "", label: "回调类型" },
  { value: "manual", label: "手动" },
  { value: "automatic", label: "自动" },
]);

const optionSort = ref([
  { value: "", label: "排序方式" },
  { value: "order_time_0", label: "按订单时间倒序" },
  { value: "order_time_1", label: "按订单时间顺序" },

]);
const optionSearchType = ref([
  { value: "", label: "选择搜索类型" },
  { value: "merchant_id", label: "商户Id" },
  { value: "merchant_name", label: "商户名称" },
  { value: "bankcard_account", label: "收款卡号" },
  { value: "order_id", label: "订单号" },
  { value: "merchant_order_id", label: "商户订单号" },
  { value: "order_amount", label: "订单金额" },
  { value: "actual_amount", label: "实际支付金额" },

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
  { value: "2", label: "t-crawler-detail" }
])

const handleChangeStatus = (index) => {
  if (items.value[index].status === "active") {
    items.value[index].status = "inActive";
  } else {
    items.value[index].status = "active";
  }
}


const handleChangeScriptExecution = (index) => {
  if (items.value[index].script_execution_status === "active") {
    items.value[index].script_execution_status = "inActive";
  } else {
    items.value[index].script_execution_status = "active";
  }
}
const dateOrder = ref();
const dateResend = ref();


onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    dateOrder.value = [startDate, endDate];
})
const swal = inject('$swal')
const dowloadData = ()=>{
  swal({
        title: "提醒",
        icon: "question",
        iconHtml: "!",
        text:"是否导出数据？",
        cancelButtonText: "取消",
        confirmButtonText: "确定",
        showCancelButton: true,
        showCloseButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          swal({
          icon: "success",
          title: "导出完毕",
          showConfirmButton: false,
          timer: 1500,
        });
        }
      });
}
const showZongHeDialog = ref(false)
</script>