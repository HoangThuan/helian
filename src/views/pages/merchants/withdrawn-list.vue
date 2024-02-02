<template>
    <Layout>
  
      <BRow>
        <Breadcrumb :title="$t('商户列表')" />
  
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
                  <div>
                    <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('商家名称或商家ID')" style="font-size: 14px;"/>
                  </div>
  
                  <div>
                    <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('收款银行卡号')" style="font-size: 14px;"/>
                  </div>
  
                  <div>
                    <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('申请时间')" style="font-size: 14px;"/>
                  </div>
                  <BCol lg="2">
                    <button
                    type="button"
                    class="btn-customer-no"
                    style="margin-left: 4px;height: 39px; font-size: 14px;"
                    v-on:click.prevent=""
                    >
                    {{ $t('搜索') }}
                    </button>
                    <button
                    type="button"
                    class="btn-customer-no-back"
                    style="margin-left: 4px; height: 39px; font-size: 14px;"
                    v-on:click.prevent="location.reload()"
                    >
                    {{ $t('重置') }}
                    </button>
                    <button
                    type="button"
                    class="btn-customer-yellow"
                    style="margin-left: 4px; height: 39px; font-size: 14px;"
                    v-on:click.prevent="openTotalEvent()"
                    >
                    {{ $t('统计') }}
                    </button>
                </BCol>
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
                <div v-show="items?.length === 0" class="no_data">
                <img src="https://pay2world.me/static/common/images/no_data.png" alt="暂无数据">
                <p>暂无数据</p>
              </div>
              </div>
            </BCardBody>
          </BCard>
        </BRow>
  
      </BRow>
      <Modal
          :visible="showTotalDialog"
          @configEvent="showTotalDialog= false"
          @close="showTotalDialog= false"
          title="总计"
        :showFooter="false"
        size=""
        >
          <div
            class="model-content-custome"
            style="padding-top: 2px; overflow: auto"
          >
            <modal-item title="总笔数:">
             <span>0</span>
            </modal-item>
            <modal-item title="总金额:">
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
  import { ref } from "vue";
  
  
  const headers = ref([
    { text: "商户名称", value: "" },
    { text: "商家ID", value: "" },
    { text: "代理名称", value: "" },
    { text: "收款银行", value: "" },
    { text: "收款卡号", value: "" },
    { text: "收款人姓名", value: "" },
    { text: "提现金额", value: "" },
    { text: "手续费", value: "" },
    { text: "实际扣除金额", value: "" },
    { text: "处理状态", value: "" },
    { text: "处理人", value: "" },
    { text: "处理时间	", value: "" },
    { text: "申请时间", value: "" },
    { text: "操作", value: "" }
  ]);
  
  const items = ref([
   
  ]);
  
  const optionStatus = ref([
    { value: "", label: "处理状态" },
    { value: "1", label: "待审核" },
    { value: "2", label: "拒绝" },
    { value: "3", label: "成功" }
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
  const showTotalDialog = ref(false)
  const openTotalEvent = () =>{
    showTotalDialog.value = true;
  }
  </script>