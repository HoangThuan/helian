<template>
    <Layout>
        <BRow>
            <Breadcrumb :title="$t('t-reconciliation-daily')" />

         
                <BCard no-body class="card-body ctx-content">
                    <BCardBody>
                        <div class="mt-2 p-3">
                            <form class="d-flex flex-row flex-wrap align-items-center gap-2">
                                <div class="fw-bold">搜索：</div>

                                <div class="col-12 col-lg-auto">
                                    <select class="form-select" aria-label="Default select example">
                                        <option v-for="option in optionProcessType" :key="option.value"
                                            :value="option.value">{{
                                                $t(option.label) }}
                                        </option>
                                    </select>
                                </div>

                               
                                <div class="col-12 col-lg-auto">
                                    <input type="text" class="form-control" id="placeholderInput"
                                        :placeholder="$t('t-amount')" />
                                </div>
                                <div class="col-12 col-lg-auto">
                                    <input type="text" class="form-control" id="placeholderInput"
                                        :placeholder="$t('t-payee-bank-card-number')" />
                                </div>

                                <div class="col-12 col-lg-auto">
                                    <VueDatePicker v-model="date" range multi-calendars time-picker-inline
                                    class="datapicker vue-datepicker-customer" :placeholder="$t('时间')"
                                    style="font-size: 12px; max-width: 198.78px" />
                                </div>


                                <div class="d-flex gap-2">
                                    <button type="button" class="btn btn-secondary waves-effect waves-light mx-2 p-2">
                                        {{ $t('t-search') }}
                                    </button>
                                    <button type="button" class="btn btn-light waves-effect p-2">
                                        {{ $t('t-reset') }}
                                    </button>
                                    <button type="button" class="btn btn-warning waves-effect p-2"
                                    @click="onOpenModal"
                                    >
                                        {{ $t('统计') }}
                                    </button>

                                </div>


                            </form>
                        </div>

                        <div >

                            <TableBase :headers="headers" :items="items" />

                       
                        </div>
                    </BCardBody>
                </BCard>
           

        </BRow>
        <ModalStaticsFinace v-model="isModalStatis" />
    </Layout>
</template>
    
<script setup>
import Layout from "@/layouts/main.vue";
import Breadcrumb from "@/components/Breadcrumd/Breadcrumb.vue";
import TableBase from "@/components/table/TableBase.vue";

import { ref, onMounted } from "vue";
import ModalStaticsFinace from "../../../components/modals/ModalStaticsFinace.vue";

const headers = ref([
    { text: "收款银行卡号【0】", value: "name" },
    { text: "原订单ID", value: "business_name" },
    { text: "金额", value: "collection_amount" },
    { text: "记录时间", value: "collection_fee" },
    { text: "代理商t", value: "payment-amount" },
    { text: "处理状态", value: "payment-fee" },
    { text: "处理人", value: "manual_delivery" },
    { text: "订单备注", value: "maual_issue_fee" },
    { text: "备注", value: "starting_merchant_balance" },
    { text: "操作", value: "ending-merchant-balance" }
]);

const items = ref([

]);

const date = ref();
const isModalStatis = ref(false)

const optionProcessType = ref([
    { value: "", label: "t-processing-status" },
    { value: "1", label: "t-processed" },
    { value: "2", label: "t-not-processed" }
])

const onOpenModal = () => {
 isModalStatis.value = !isModalStatis.value
}


onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
})



</script>