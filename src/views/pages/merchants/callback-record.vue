<template>
    <Layout>

        <BRow>
            <Breadcrumb :title="$t('回调记录')" />

            <BRow class="mt-3">
                <BCard no-body class="card-body">
                    <BCardBody>
                        <div class="mt-2 p-3">
                            <form class="d-flex flex-row flex-wrap align-items-center gap-2">
                                <div class="fw-bold" style="font-size: 14px;">{{ $t('搜索') }}: </div>
                                <div>
                                    <select class="form-select" aria-label="Default select example" style="font-size: 14px;">
                                        <option v-for="option in optionStatus" :key="option.value" :value="option.value">{{
                                            $t(option.label)
                                        }}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <input type="text" class="form-control" id="placeholderInput"
                                        :placeholder="$t('订单号')" style="font-size: 14px;" />
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
                                    style="margin-left: 4px; height: 39px;font-size: 14px;"
                                    v-on:click.prevent="reloadPage"
                                    >
                                    {{ $t('重置') }}
                                    </button>
                                </BCol>
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
                                        <td>{{ item.business_name }}</td>
                                        <td>{{ item.merchant_order_id }}</td>
                                        <td>{{ item.callback_address }}</td>
                                        <td>{{ item.callback_content }}</td>
                                        <td>
                                            <button
                                            type="button"
                                            :class=" item.state === 1?'btn-customer-green':'btn-customer-ok'"
                                            v-on:click.prevent=""
                                            >
                                            {{ item.state === 1?"成功":"失败"}}
                                            </button>
                                            </td>
                                        <td>
                                            <button
                                            type="button"
                                            :class=" item.response_code === '200'?'btn-customer-green':'btn-customer-ok'"
                                            v-on:click.prevent=""
                                            >
                                            {{ item.response_code}}
                                            </button>
                                        </td>
                                        <td>{{ item.response_content }}</td>
                                        <td>{{ item.remark }}</td>
                                        <td>{{ item.time }}</td>
                                        <td>{{ item.operate }}</td>
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
import VueDatapickerCustomer from "@/components/datapicker/VueDatapicker.vue";
import { ref,onMounted } from "vue";


const headers = ref([
    { text: "订单ID	", value: "" },
    { text: "商户名称", value: "" },
    { text: "商家订单ID", value: "" },
    { text: "回调地址", value: "" },
    { text: "回调内容", value: "" },
    { text: "状态", value: "" },
    { text: "响应CODE", value: "" },
    { text: "响应内容", value: "" },
    { text: "备注", value: "" },
    { text: "时间", value: "" },
    { text: "操作", value: "" },

]);

const items = ref([
    {
        order_id: "RS5263379354",
        business_name: "1123",
        merchant_order_id: "W21183022465455136776",
        callback_address: "https://baidu.com",
        callback_content: "{'mchId': '1665526', 'mchOrderId': 'W21183022465455136776', 'amount': 30000, 'payAmount': 30000, 'isPaid': 1, 'payMethod': 7, 'sign': '967e715b10f228157bda8f0a5 7fabe69'}	",
        state: 0,
        response_code: "200",
        response_content: "<!DOCTYPE html> <!--STATUS OK--><html> <head><meta http-equiv=content-type content=text/html;charset=utf-8><meta http-equiv=X-UA -Compatible content=IE=Edge><meta content=always name=referrer><link rel=stylesheet type=text/css href=http://s1.bdstatic.com/r/www/cache/bdorz/baidu.min .css><title>ç™¾åº¦	",
        remark: "Forced deposit	",
        time: "2024-01-17 19:31:59",
        operate: "",

    }
]);

const date = ref();
onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
})
const optionStatus = ref([
    { value: "", label: "回调状态" },
    { value: "1", label: "成功" },
    { value: "0", label: "失败" }
]);
const reloadPage = ()=>{
  location.reload();
}

</script>