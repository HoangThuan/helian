<template>
  <Layout>

    <BRow>
      <Breadcrumb :title="$t('审核列表')" />

      <BRow class="mt-3">
        <BCard no-body class="card-body">
          <BCardBody>
            <div class="mt-2 p-3">
              <form class="d-flex flex-row flex-wrap align-items-center gap-2 ">
                <div class="fw-bold" style="font-size: 14px;">{{ $t('搜索') }}: </div>
                <div>
                  <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('账户')" style="font-size: 14px;"/>
                </div>
                <div>
                  <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('名称')" style="font-size: 14px;"/>
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
                  style="margin-left: 4px; height: 39px ; font-size: 14px;"
                  v-on:click.prevent="reloadPage"
                >
                {{ $t('重置') }}
                </button>
                </BCol>
              </form>
            </div>
            <div class="table-responsive">
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

  </Layout>
</template>
  
<script setup>
import Layout from "@/layouts/main.vue";
// import ModalHint from "@/components/modals/ModalHint.vue";
import Breadcrumb from "@/components/Breadcrumd/Breadcrumb.vue";
import { ref, onMounted } from "vue";


const headers = ref([
  { text: "商户ID", value: "" },
  { text: "商户名称", value: "" },
  { text: "账户", value: "" },
  { text: "审核状态", value: "" },
  { text: "备注", value: "" },
  { text: "操作", value: "" },
  
]);

const items = ref([

]);



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
const date = ref();


onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
})
const reloadPage = ()=>{
  location.reload();
}
</script>