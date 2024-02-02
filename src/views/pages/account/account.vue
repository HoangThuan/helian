<template>
  <Layout>

    <BRow>
      <Breadcrumb :title="$t('账户管理')" />

      <BRow class="mt-3">
        <BCard no-body class="card-body">
          <BCardBody>
            <div class="mt-2 p-3">
              <form class="d-flex flex-row flex-wrap align-items-center gap-2">
                <div class="fw-bold">{{ $t('搜索') }}: </div>

                <div class="">
                  <select class="form-select" aria-label="Default select example">
                    <option v-for="option in optionStatus" :key="option.value" :value="option.value">{{ $t(option.label)
                    }}
                    </option>
                  </select>
                </div>
                <div class="">
                  <select class="form-select" aria-label="Default select example">
                    <option v-for="option in optionRole" :key="option.value" :value="option.value">{{ $t(option.label)
                    }}
                    </option>
                  </select>
                </div>
                <div>
                  <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('登录账户')" />
                </div>

                <div>
                  <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('姓名')" />
                </div>
                <div>
                  <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('邮箱')" />
                </div>
                <div>
                  <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('备注')" />
                </div>

                <div class="d-flex gap-2">
                  <button type="button" class="btn btn-secondary waves-effect waves-light mx-2 p-2">
                    {{ $t('搜索') }}
                  </button>
                  <button type="button" class="btn btn-light waves-effect p-2">
                    {{ $t('重置') }}
                  </button>
                  <button type="button" class="btn btn-secondary waves-effect waves-light mx-2 p-2">
                    {{ $t('添加账户') }}
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
                    <td>{{ item.login_account }}</td>
                    <td>{{ item.role }}</td>
                    <td>{{ item.agent_account }}</td>
                    <td>{{ item.mail }}</td>
             
                    <td><span class=" status  badge bg-success text-successr">
                        {{ item.state }}
                      </span></td>
                      <td><span class=" status  badge bg-success text-successr">
                        {{ item.online_status }}
                      </span></td>
                    <td>{{ item.creation_time }}</td>
                    <td>{{ item.last_login_time }}</td>
                    <td>{{ item.balance }}</td>
                    <td>{{ item.merchant_login_address }}</td>
                    <td>{{ item.remark }}</td>
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
import { ref } from "vue";


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
    state: "正常",
    online_status: "在线",
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
const optionMore = ref([
  { value: "", label: "更多" },
  { value: "1", label: "内充" },
  { value: "0", label: "扣除" },
  { value: "0", label: "资金流水" },
  { value: "0", label: "Google验证码" },
]);

</script>