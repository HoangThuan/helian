<template>
  <Layout>
    <BRow>
      <Breadcrumb :title="$t('t-bank-script')" />

      <div class="col-lg-6 col-24">
        <BRow>

          <div class="border border-info p-2 rounded" style="background-color: #b8daff">
            <i class="mdi mdi-lightbulb-on fs-4 text-info"></i>
            <span class="text-blue">平台通道总开关，控制平台的全部转账汇款方式！</span>
          </div>
        </BRow>


        <BRow class="mt-3">
          <BCard no-body class="card-body">
            <BCardBody>
              <div class="table-responsive">
                <table class="table table-hover table-bordered table-nowrap" id="customerTable">
                  <thead class="table-light ">
                    <tr>
                      <th v-for="header in headers" :key="header.text">
                        {{ $t(header.text) }}
                      </th>
                    </tr>
                  </thead>
                  <tbody class="list form-check-all">
                    <tr v-for="(item, index) in items" :key="index">
                      <td>{{ item.name }}</td>
                      <td>{{ item.code }}</td>
                      <td>
                        <span class="status text-danger" v-if="item.status === 'active'">
                          <i class="ri-error-warning-fill fs-5"></i>
                          已停止
                        </span>

                        <span class="status text-success" v-else>
                          <i class="ri-checkbox-circle-fill fs-5 text-success"></i>

                          运行中
                        </span>
                      </td>

                      <td>{{ item.hour }}</td>

                      <td>
                        <button type="button" v-if="item.status === 'active'"
                          class="btn btn-info waves-effect waves-light btn-row active" @click="onOpenModal(index)">
                          开启
                        </button>

                        <button type="button" v-else class="btn btn-danger waves-effect waves-light btn-row active"
                          @click="onOpenModal(index)">
                          停止
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </BCardBody>
          </BCard>
        </BRow>

      </div>
    </BRow>

    <ModalHint v-model="isConfirmCloseChanel" :on-confirm="handleCloseChanel" :on-close="onClose" />
  </Layout>
</template>

<script setup>
import Layout from "@/layouts/main.vue";
import { ref } from "vue";
import ModalHint from "@/components/modals/ModalHint.vue";
import Breadcrumb from "@/components/Breadcrumd/Breadcrumb.vue";
import moment from 'moment'

const headers = ref([
  { text: "t-bank-name", value: "name" },
  { text: "t-bank-code", value: "code" },
  { text: "t-script-running", value: "status" },
  { text: "t-operation-hour", value: "status" },
  { text: "t-operate", value: "operate" },
]);

const items = ref([
  {
    name: "Ngân hàng TMCP Á Châu",
    code: "ACB",
    status: "active",
    hour: moment("2021-03-29T13:56:16.000000Z").format("hh:mm:ss")
  },
  {
    name: "Ngân hàng TMCP Công thương Việt Nam",
    code: "ICB",
    status: "active",
    hour: moment("2021-03-29T13:56:16.000000Z").format("hh:mm:ss")
  },
  {
    name: "Ngân hàng TMCP Quân đội",
    code: "MSB",
    status: "active",
    hour: moment("2021-03-29T13:56:16.000000Z").format("hh:mm:ss")
  },
  {
    name: "Ngân hàng TMCP Nam Á",
    code: "NAB",
    status: "active",
    hour: moment("2021-03-29T13:56:16.000000Z").format("hh:mm:ss")
  },
  {
    name: "Ngân hàng TMCP Đông Nam Á",
    code: "SEAB",
    status: "active",
    hour: moment("2021-03-29T13:56:16.000000Z").format("hh:mm:ss")
  },

]);

const isConfirmCloseChanel = ref(false);
const itemSelected = ref();

const onOpenModal = (index) => {
  isConfirmCloseChanel.value = true;
  itemSelected.value = index;
};

const onClose = () => {
  isConfirmCloseChanel.value = false;
};

const handleCloseChanel = () => {

  if (items.value[itemSelected.value].status === "active") {
    items.value[itemSelected.value].status = "inActive";
  } else {
    items.value[itemSelected.value].status = "active";
  }
};
</script>
