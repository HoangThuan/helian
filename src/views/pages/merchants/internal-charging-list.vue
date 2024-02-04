<template>
    <Layout>

        <BRow>
            <Breadcrumb :title="$t('内充列表')" />

            <BRow class="mt-3">
                <BCard no-body class="card-body">
                    <BCardBody>
                        <div class="mt-2 p-3">
                            <form class="d-flex flex-row flex-wrap align-items-center gap-2">
                                <div class="fw-bold" style="font-size: 14px;">{{ $t('搜索') }}: </div>
                                <div>
                                    <input type="text" class="form-control" id="placeholderInput"
                                        :placeholder="$t('操作人员账户')" style="font-size: 14px;" />
                                </div>
                                <div>
                                    <input type="text" class="form-control" id="placeholderInput"
                                        :placeholder="$t('商户ID')" style="font-size: 14px;" />
                                </div>
                                <div>
                                    <input type="text" class="form-control" id="placeholderInput"
                                        :placeholder="$t('商户名称')" style="font-size: 14px;" />
                                </div>
                                <div>
                                    <VueDatapickerCustomer
                                        v-model="date"
                                        :placeholder="$t('时间')"
                                    ></VueDatapickerCustomer>
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
                            <table class="table table-hover text-left table-bordered table-nowrap" id="customerTable" style="border-collapse: collapse;">
                                <thead class="table-light">
                                    <tr>
                                        <th v-for="header in headers" :key="header.text">
                                            {{ $t(header.text) }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="list form-check-all">
                                    <tr v-for="(item, index) in items" :key="index">
                                        <td>{{ item.operator }}</td>
                                        <td>{{ item.business_name }}</td>
                                        <td>{{ item.merchant_id }}</td>
                                        <td>{{ item.recharge_amount }}</td>
                                        <td>{{ item.handling_fee }}</td>
                                        <td>{{ item.time }}</td>
                                        <td>{{ item.remark }}</td>
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
import VueDatapickerCustomer from "@/components/datapicker/VueDatapicker.vue";


const headers = ref([
    { text: "操作人员", value: "" },
    { text: "商户ID", value: "" },
    { text: "商户名称", value: "" },
    { text: "内充金额", value: "" },
    { text: "手续费", value: "" },
    { text: "时间", value: "" },
    { text: "备注", value: "" },
]);

const items = ref([
    {
        operator: "admin01",
        merchant_id: "1665526",
        business_name: "1123",
        recharge_amount: "9999999999.0",
        handling_fee: "0",
        time: "2024-01-12 11:43:39",
        remark: ""
    },
    {
        operator: "admin01",
        merchant_id: "1665526",
        business_name: "1123",
        recharge_amount: "9999999999.0",
        handling_fee: "0",
        time: "2024-01-12 11:43:39",
        remark: ""
    },
    {
        operator: "admin01",
        merchant_id: "1665526",
        business_name: "1123",
        recharge_amount: "9999999999.0",
        handling_fee: "0",
        time: "2024-01-12 11:43:39",
        remark: ""
    }
]);

const date = ref();
onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
})

onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
})
const reloadPage = ()=>{
  location.reload();
}
</script>