<template>
    <Layout>
        <BRow>
            <Breadcrumb :title="$t('t-reconciliation-daily')" />

            <BRow class="mt-3">
                <BCard no-body class="card-body">
                    <BCardBody>
                        <div class="mt-2 p-3">
                            <form class="d-flex flex-row flex-wrap align-items-center gap-2">
                                <div class="fw-bold text-form">搜索：</div>
                                <div class="col-12 col-lg-auto">
                                    <select class="form-select text-form" aria-label="Default select example">
                                        <option v-for="option in optionType" :key="option.value" :value="option.value">
                                            {{ $t(option.label) }}
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
                                        style="font-size: 12px; max-width: 198.78px" />
                                </div>

                                <div class="d-flex gap-2">
                                    <button type="button"
                                        class="btn text-form btn-secondary waves-effect waves-light mx-2 p-2">
                                        {{ $t("t-search") }}
                                    </button>
                                    <button type="button" class="btn text-form btn-light waves-effect p-2">
                                        {{ $t("t-reset") }}
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
    { text: "t-collection-amount", value: "collection_amount" },
    { text: "t-collection-fee", value: "collection_fee" },
    { text: "t-payment-amount", value: "payment-amount" },
    { text: "t-payment-fee", value: "payment-fee" },
    { text: "t-manual-delivery", value: "manual_delivery" },
    { text: "t-maual-issue-fee", value: "maual_issue_fee" },
    { text: "t-starting-merchant-balance", value: "starting_merchant_balance" },
    { text: "t-ending-merchant-balance", value: "ending-merchant-balance" },
    { text: "t-difference", value: "difference" },
]);

const items = ref([]);

const optionType = ref([
    { value: "", label: "商户搜索" },
    { value: "", label: "代理搜索" },
]);
const date = ref();

onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
});
</script>
