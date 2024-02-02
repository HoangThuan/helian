<template>
    <Layout>
        <BRow>
            <Breadcrumb :title="$t('t-system-operation')" />
            <BRow class="mt-3">
        <BCard no-body class="card-body">
          <BCardBody>
            <div class="mt-2 p-3">
              <form class="d-flex flex-row flex-wrap align-items-center gap-2">
                <div class="fw-bold">搜索：</div>

                <div class="col-12 col-lg-auto">
                  <select class="form-select" aria-label="Default select example">
                    <option v-for="option in optionstate" :key="option.value" :value="option.value">{{ $t(option.label) }}
                    </option>
                  </select>
                </div>

                <div class="col-12 col-lg-auto">
                  <input type="text" class="form-control" id="placeholderInput"
                    :placeholder="$t('请求ip')" />
                </div>

                <div class="col-12 col-lg-auto">
                  <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('请求时间')" />
                </div>

             

                <div class="d-flex gap-2">
                  <button type="button" class="btn btn-secondary waves-effect waves-light mx-2 p-2">
                    {{ $t('搜索') }}
                  </button>
                  <button type="button" class="btn btn-light waves-effect p-2">
                    {{ $t('t-reset') }}
                  </button>
                  
                </div>

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

                    <td>{{ item.name }}</td>
                    <td>{{ item.bank }}</td>
                    <td>{{ item.bank_card_account }}</td>
                    <td>{{ item.card_type }}</td>
                    <td>{{ item.agent_name }}</td>
                    <td>{{ item.remark }}</td>

                    <td>
                      <span class=" status  badge bg-success text-successr" v-if="item.status === 'active'">
                      
                        启用
                      </span>

                      <span class="status text-danger badge bg-danger-subtle" v-else>
                  

                        已开启
                      </span>
                    </td>

                    <td>
                      <span class=" status  badge bg-success text-successr" v-if="item.script_execution_status === 'active'">
                      
                      启用
                    </span>

                    <span class="status text-danger badge bg-danger-subtle" v-else>
                

                      已开启
                    </span>
                     

                    </td>
                    <td>{{ item.real_time_balance }}</td>
                    <td>{{ item.daily_collection_limit }}</td>
                    <td>{{ item.max_daily_payment_collection }}</td>
                    <td>{{ item.collection_amount_range }}</td>
                    <td>{{ item.balance_limit }}</td>

                    <td class="d-flex gap-3">
                      <button type="button" class="btn btn-info waves-effect waves-light btn-row active px-2"
                        @click="onOpenModal(index)">
                        {{ $t('t-edit') }}
                      </button>

                      <div>
                        <button type="button" class="btn btn-success waves-effect waves-light btn-row px-2"
                        @click="handleChangeStatus(index)"
                        v-if="item.status === 'active'"
                        >
                        {{ $t('t-enable') }}
                      </button>
                        <button type="button" class="btn btn-danger waves-effect waves-light btn-row px-2"
                        @click="handleChangeStatus(index)"
                        v-else
                        >
                        {{ $t('t-deactivate') }}
                      </button>
                      </div>
                  
                      <div class="">
                        <button type="button" class="btn btn-success waves-effect waves-light btn-row px-2"
                        @click="handleChangeScriptExecution(index)"
                        v-if="item.script_execution_status === 'active'"
                        >
                        {{ $t('t-enable-script') }}
                      </button>
                        <button type="button" class="btn btn-danger waves-effect waves-light btn-row px-2"
                        @click="handleChangeScriptExecution(index)"
                        v-else
                        >
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

    </Layout>
</template>
    
<script setup>
import Layout from "@/layouts/main.vue";
import Breadcrumb from "@/components/Breadcrumd/Breadcrumb.vue";
import { ref } from "vue";


const headers = ref([
    { text: "请求IP", value: "" },
    { text: "请求模式", value: "" },
    { text: "请求地址", value: "" },
    { text: "响应Code", value: "" },
    { text: "响应备注", value: "" },
    { text: "请求时间", value: "" }
  ]);
  
  const items = ref([
   
  ]);

  const optionstate = ref([
  { value: "", label: "请求模式" },
  { value: "1", label: "GET" },
  { value: "2", label: "POST" },
])


</script>