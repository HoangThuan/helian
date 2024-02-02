<template>
    <Layout>
        <BRow>
            <Breadcrumb :title="$t('t-reconciliation-daily')" />

            <BCard no-body class="card-body ctx-content px-0">
                <BCardBody>
                    <div class="mt-2 p-3">
                        <form class="d-flex flex-row flex-wrap align-items-center gap-2">
                            <div class="fw-bold text-form">搜索：</div>

                            <div class="col-12 col-lg-auto">
                                <input type="text" class="form-control text-form" id="placeholderInput"
                                    :placeholder="$t('t-merchant-name-or-id')" />
                            </div>

                            <div class="col-12 col-lg-auto">
                                <VueDatePicker v-model="date" range multi-calendars time-picker-inline
                                    class="datapicker vue-datepicker-customer" :placeholder="$t('时间')"
                                    style="font-size: 12px; max-width: 198.78px" />
                            </div>

                            <div class="d-flex gap-2">
                                <button type="button" class="btn text-form btn-secondary waves-effect waves-light mx-2 p-2">
                                    {{ $t("t-search") }}
                                </button>
                                <button type="button" class="btn text-form btn-light waves-effect p-2">
                                    {{ $t("t-reset") }}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div class="table-responsvie">
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
    {
        text: "t-number-application-orders-collected",
        value: "number_application_orders_collected",
    },
    {
        text: "t-number-successful-collections",
        value: "number_successful_collections",
    },
    {
        text: "t-successful-collection-amount",
        value: "successful_collection_amount",
    },
    { text: "t-successful-collection-fee", value: "successful_collection_fee" },
    {
        text: "t-number-successful-payment-orders",
        value: "number_successful_payment_orders",
    },
    {
        text: "t-total-amount-successful-payment",
        value: "total_amount_successful_payment",
    },
    { text: "t-total-handling-paid", value: "total_handling_paid" },
    {
        text: "t-number-application-orders-issued",
        value: "number_application_orders_issued",
    },
    { text: "t-issue-application-amount", value: "issue_application_amount" },
    { text: "t-successfully-issued-amount", value: "successfully_issued_amount" },
    {
        text: "t-total-handling-fee-issuance",
        value: "total_handling_fee_issuance",
    },
    {
        text: "t-increase-amount-internal-recharge",
        value: "increase_amount_internal_recharge",
    },
    {
        text: "t-total-handling-internal-recharge",
        value: "total_handling_internal_recharge",
    },
]);

const items = ref([
    {
        name: "总计：",
        business_name: "",
        number_application_orders_collected: "0",
        successful_collection_amount: "0",
        successful_collection_fee: "0",
        number_successful_payment_orders: "0",
        total_amount_successful_payment: "0",
        total_handling_paid: "0",
        number_application_orders_issued: "0",
        issue_application_amount: "0",
        successfully_issued_amount: "0",
        total_handling_fee_issuance: "0",
        increase_amount_internal_recharge: "0",
        total_handling_internal_recharge: "0",
    },
]);

const date = ref();

onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
});
</script>
