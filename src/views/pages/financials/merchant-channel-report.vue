<template>
    <Layout>
        <BRow>
            <Breadcrumb :title="$t('t-reconciliation-daily')" />


            <BCard no-body class="card-body ctx-content">
                <BCardBody>
                    <div class="mt-2 p-3">
                        <form class="d-flex flex-row flex-wrap align-items-center gap-2">
                            <div class="fw-bold text-form ">搜索：</div>
                            <div class="col-12 col-lg-auto">
                                <select class="form-select text-form" aria-label="Default select example">
                                    <option v-for="option in optionType" :key="option.value" :value="option.value">{{
                                        $t(option.label) }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-12 col-lg-auto">
                                <input type="text" class="form-control text-form" id="placeholderInput"
                                    :placeholder="$t('t-merchant-name-or-id')" />
                            </div>

                            <div class="col-12 col-lg-auto">
                                <VueDatePicker v-model="date" range multi-calendars time-picker-inline
                                    class="datapicker vue-datepicker-customer" :placeholder="$t('时间')"
                                    style="font-size: 12px; max-width: 198.78px;" />
                            </div>


                            <div class="d-flex gap-2">
                                <button type="button" class="btn text-form btn-secondary waves-effect waves-light mx-2 p-2">
                                    {{ $t('t-search') }}
                                </button>
                                <button type="button" class="btn text-form btn-light waves-effect p-2">
                                    {{ $t('t-reset') }}
                                </button>

                            </div>


                        </form>
                    </div>

                    <div class="table-responsive">

                        <TableBase :headers="headers" :items="items" />

                    </div>
                </BCardBody>
            </BCard>


        </BRow>

    </Layout>
</template>
    
<script setup>
import Layout from "@/layouts/main.vue";
import Breadcrumb from "@/components/Breadcrumd/Breadcrumb.vue";
import TableBase from "@/components/table/TableBase.vue";

import { ref, onMounted } from "vue";

const headers = ref([
    { text: "t-merchantId", value: "name" },
    { text: "t-business-name", value: "business_name" },
    { text: "t-aisle", value: "aisle" },
    { text: "t-change-rate", value: "change_rate" },
    { text: "t-collection-success-rate", value: "collection_success_rate" },
    { text: "t-number-application-orders-collected", value: "number_application_orders_collected" },
    { text: "t-number-successful-collections", value: "number_successful_collections" },
    { text: "t-successful-collection-amount", value: "successful_collection_amount" },
    { text: "t-successful-collection-fee", value: "successful_collection_fee" },

]);

const items = ref([
    {
        name: "总计：",
        business_name: "",
        aisle: "",
        change_rate: "",
        number_application_orders_collected: '0',
        successful_collection_amount: '0',
        successful_collection_fee: '0',
    },
]);

const optionType = ref([
    { value: "", label: "t-channel-type" },
    { value: "", label: "t-vn-online-banking-scan-QRCode" },
    { value: "", label: "t-vn-ZALO-pay" },
    { value: "", label: "t-Vietnam-MOMO-pay" },
    { value: "", label: "t-ViettelPay-Vietnam" },

])
const date = ref();


onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
})



</script>