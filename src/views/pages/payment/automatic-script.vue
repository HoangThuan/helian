<template>
  <Layout>

    <BRow>
      <Breadcrumb :title="$t('代付脚本配置列表')" />

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
                <div>
                  <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('银行卡账号')" />
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
                  <button type="button" class="btn btn-secondary waves-effect p-2">
                    {{ $t('添加脚本信息') }}
                  </button>
                </div>

              </form>
            </div>

            <div class="table-responsive">
              <table class="table table-hover text-left table-bordered" id="customerTable">
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
                    <td>{{ item.desktop_number }}</td>
                    <td>{{ item.device_id }}</td>
                    <td>{{ item.key }}</td>
                    <td>{{ item.bank_card_number }}</td>
                    <td>{{ item.bank_card_holder }}</td>
                    <td>{{ item.bank_card_balance }}</td>
                    <td><span class=" status  badge bg-success text-successr">
                        {{ item.script_status }}
                      </span></td>


                    <td>
                      {{ item.remark }}
                    </td>


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
  { text: "名称[2]", value: "" },
  { text: "桌面编号", value: "" },
  { text: "设备Id	", value: "" },
  { text: "密钥	", value: "" },
  { text: "银行卡号	", value: "" },
  { text: "银行卡人姓名	", value: "" },
  { text: "银行卡余额	", value: "" },
  { text: "脚本状态	", value: "" },
  { text: "备注	", value: "" },
  { text: "操作", value: "" },

]);

const items = ref([
  {
    name: "456	",
    desktop_number: "D27510",
    device_id: "S33374	",
    key: "cc88a7b44f643f14f1f6513b22376e2a	",
    bank_card_number: "159532548",
    bank_card_holder: "NAME NAME",
    bank_card_balance: "5000000",
    script_status: "启用	",
    remark: "",
    operate: ""
  },
]);

const optionStatus = ref([
  { value: "", label: "账户状态" },
  { value: "1", label: "开启" },
  { value: "0", label: "关闭" }
]);


</script>