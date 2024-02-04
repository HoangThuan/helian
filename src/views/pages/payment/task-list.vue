<template>
  <Layout>

    <BRow>
      <Breadcrumb :title="$t('代付任务列表')" />

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

                    <td>{{ item.order_id }}</td>
                    <td>{{ item.excute_script_name }}</td>
                    <td>{{ item.desktop_number }}</td>
                    <td>{{ item.device_id }}</td>
                    <td>{{ item.paymentbank }}</td>
                    <td>{{ item.paymentcard }}</td>
                    <td>{{ item.payee }}</td>
                    <td>{{ item.task_status }}</td>
                    <td>{{ item.start_time }}</td>
                    <td>{{ item.endtime }}</td>
                    <td>{{ item.remark }}</td>
                    <td class="d-flex gap-3">
                      <button type="button" class="btn btn-success waves-effect waves-light btn-row px-2"
                          @click="handleChangeStatus(index)" v-if="item.status === 'active'">
                          {{ $t('删除') }}
                        </button>
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
  { text: "订单ID", value: "" },
  { text: "执行脚本名称", value: "" },
  { text: "执行桌面编号", value: "" },
  { text: "执行设备Id", value: "" },
  { text: "付款银行", value: "" },
  { text: "付款银行卡", value: "" },
  { text: "收款人", value: "" },
  { text: "任务状态", value: "" },
  { text: "开始时间", value: "" },
  { text: "结束时间", value: "" },
  { text: "备注", value: "" },
  { text: "操作", value: "" },


]);

const items = ref([
  {
    order_id: "YS5263256150",
    excute_script_name: "456",
    desktop_number: "D27510	",
    device_id: "S33374	",
    paymentbank: "NAB",
    paymentcard: "898618174",
    payee: "DO TRUNG PHONG",
    task_status: "成功	",
    start_time: "",
    endtime: "",
    remark: "",
    operate: ""
  },
]);

const optionStatus = ref([
  { value: "", label: "任务状态" },
  { value: "successed", label: "成功" },
  { value: "processing", label: "进行中" },
  { value: "failed", label: "失败" }
]);


</script>