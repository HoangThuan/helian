<template>
  <Layout>

    <BRow>
      <Breadcrumb :title="$t('t-beneficiary-bank')" />

     
        <BCard no-body class="card-body">
          <BCardBody>
            <div class="p-3 pt-2">
              <form class="d-flex flex-row flex-wrap align-items-center gap-2 search-bar-font-size">
                <div class="fw-bold">搜索：</div>

                <div class="col-12 col-lg-auto">
                  <select class="form-select" aria-label="Default select example">
                    <option v-for="option in optionstate" :key="option.value" :value="option.value">{{ $t(option.label) }}
                    </option>
                  </select>
                </div>

                <div class="col-12 col-lg-auto">
                  <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('t-bank-name')" />
                </div>

                <div class="col-12 col-lg-auto">
                  <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('t-bank-code')" />
                </div>

                <div class="col-12 col-lg-auto">
                  <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('t-remark')" />
                </div>

                <div>
                  <button type="button" class="btn btn-secondary waves-effect waves-light mx-2 p-2">
                    {{ $t('t-search') }}
                  </button>
                  <button type="button" class="btn btn-light waves-effect p-2">
                    {{ $t('t-reset') }}
                  </button>
                </div>


              </form>
            </div>

            <div class="table-responsive ctx-table">
              <table class="table table-hover table-bordered table-nowrap" id="customerTable">
                <thead class="table-light">
                  <tr>
                    <th v-for="header in headers" :key="header.text">
                      {{ $t(header.text) }}
                    </th>
                  </tr>
                </thead>
                <tbody class="list form-check-all table-body-font-size">
                  <tr v-for="(item, index) in items" :key="index">
                    <td>
                      <img :src="item.img" alt="" style="
                              position: relative;
                              height: 35px;
                              display: inline-block;
                          " />
                    </td>

                    <td>{{ item.bankName }}</td>
                    <td>{{ item.bankAbbreviation }}</td>
                    <td>{{ item.code1 }}</td>
                    <td>{{ item.code2 }}</td>

                     <td>
                      <span class=" status text-danger" v-if="item.status === 'active'">
                        <i class="ri-error-warning-fill fs-5"></i>
                        已关闭
                      </span>

                      <span class="status text-success" v-else>
                        <i class="ri-checkbox-circle-fill fs-5 text-success"></i>

                        已开启
                      </span>
                    </td> 

                    <td>{{ item.numberCard }}</td>

                    <td >
                      <div class="d-flex gap-3">
                        <button type="button" class="btn-customer-blue"
                        @click="onOpenModalEdit(index)">
                        编辑
                      </button>

                      <button type="button" 
                      :class="item.status == 'active'? 'btn-customer-blue':'btn-customer-ok'"
                        @click="onOpenModal(index)">
                        {{ item.status == 'active'? "开启":"关闭" }}
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
    <ModalHint v-model="isConfirmCloseChanel" :on-confirm="handleCloseChanel" :on-close="onClose" />
    <ModalBankEdit v-model="isConfirmUpdate" :on-confirm="handleUpdate" :on-close="onClose" />

  </Layout>
</template>
  
<script setup>
import Layout from "@/layouts/main.vue";
import ModalHint from "@/components/modals/ModalHint.vue";
import ModalBankEdit from "@/components/modals/ModalBankEdit.vue";
import Breadcrumb from "@/components/Breadcrumd/Breadcrumb.vue";
import { ref } from "vue";

const headers = ref([
  { text: "Logo", value: "" },
  { text: "t-bank-name", value: "name" },
  { text: "t-bank-abbreviation", value: "abbreviation" },
  { text: "t-bank-code", value: "code" },
  { text: "t-bank-code", value: "code" },
  { text: "t-state", value: "state" },
  { text: "t-number-bank-cards", value: "number-bank-card" },
  { text: "t-operate", value: "" },
]);

const items = ref([
  {
    log: "log",
    img: "https://pay2world.me/assets/bank/img/ICB.png",
    bankName: "Ngân hàng TMCP Công thương Việt Nam",
    bankAbbreviation: "VietinBank",
    code1: "ICB",
    code2: "970415",
    state: "active",
    numberCard: "0",
  },
  {
    log: "log",
    img: "https://pay2world.me/assets/bank/img/ACB.png",
    bankName: "Ngân hàng TMCP Á Châu",
    bankAbbreviation: "ACB",
    code1: "ACB",
    code2: "970415",
    state: "active",
    numberCard: "0",
  },
  {
    log: "log",
    img: "https://pay2world.me/assets/bank/img/BAB.png",
    bankName: "Ngân hàng TMCP Bắc Á",
    bankAbbreviation: "BacABank",
    code1: "BAB",
    code2: "970415",
    state: "active",
    numberCard: "0",
  },
  {
    log: "log",
    img: "https://pay2world.me/assets/bank/img/VCB.png",
    bankName: "Ngân hàng TMCP Ngoại Thương Việt Nam",
    bankAbbreviation: "Vietcombank",
    code1: "VCB",
    code2: "970415",
    state: "active",
    numberCard: "0",
  },
  {
    log: "log",
    img: "https://pay2world.me/assets/bank/img/BIDV.png",
    bankName: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam",
    bankAbbreviation: "BIDV",
    code1: "BIDV",
    code2: "970418",
    state: "active",
    numberCard: "0",
  },
  {
    log: "log",
    img: "https://pay2world.me/assets/bank/img/MB.png",
    bankName: "Ngân hàng TMCP Quân đội",
    bankAbbreviation: "MBBank",
    code1: "MB",
    code2: "970415",
    state: "active",
    numberCard: "0",
  },
  {
    log: "log",
    img: "https://pay2world.me/assets/bank/img/TPB.png",
    bankName: "Ngân hàng TMCP Tiên Phong",
    bankAbbreviation: "	TPBank",
    code1: "TPB",
    code2: "970415",
    state: "active",
    numberCard: "0",
  },
  {
    log: "log",
    img: "https://pay2world.me/assets/bank/img/MSB.png",
    bankName: "Ngân hàng TMCP Hàng Hải",
    bankAbbreviation: "MSB",
    code1: "MSB",
    code2: "970415",
    state: "active",
    numberCard: "0",
  },
  {
    log: "log",
    img: "https://pay2world.me/assets/bank/img/VAB.png",
    bankName: "Ngân hàng TMCP Việt Á",
    bankAbbreviation: "VietABank",
    code1: "VAB",
    code2: "970415",
    state: "active",
    numberCard: "0",
  },
  {
    log: "log",
    img: "https://pay2world.me/assets/bank/img/NAB.png",
    bankName: "Ngân hàng TMCP Nam Á",
    bankAbbreviation: "NamABank",
    code1: "NAB",
    code2: "970415",
    state: "active",
    numberCard: "0",
  },

]);

const optionstate = ref([
  { value: "", label: "t-on-state" },
  { value: "1", label: "t-turn-on" },
  { value: "2", label: "t-closure" },
])

const isConfirmCloseChanel = ref(false);
const isConfirmUpdate = ref(false);
const itemSelected = ref();

const onOpenModal = (index) => {
    isConfirmCloseChanel.value = true;
    itemSelected.value = index;
};

const onOpenModalEdit = (index) => {
  isConfirmUpdate.value = true;
  itemSelected.value = index;
};

const onClose = () => {
    isConfirmCloseChanel.value = false;
    isConfirmCloseChanel.value = false;
};

const handleCloseChanel = () => {

    if (items.value[itemSelected.value].status === "active") {
        items.value[itemSelected.value].status = "inActive";
    } else {
        items.value[itemSelected.value].status = "active";
    }
};

const handleUpdate = () => {
  
}


</script>