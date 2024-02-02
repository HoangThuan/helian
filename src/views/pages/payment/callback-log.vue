<template>
    <Layout>

        <BRow>
            <Breadcrumb :title="$t('回调记录')" />

            <BRow class="mt-3">
                <BCard no-body class="card-body">
                    <BCardBody>
                        <div class="mt-2 p-3">
                            <form class="d-flex flex-row flex-wrap align-items-center gap-2">
                                <div class="fw-bold">{{ $t('搜索') }}: </div>
                                <div>
                                    <select class="form-select" aria-label="Default select example">
                                        <option v-for="option in optionStatus" :key="option.value" :value="option.value">{{
                                            $t(option.label)
                                        }}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <input type="text" class="form-control" id="placeholderInput"
                                        :placeholder="$t('订单号')" />
                                </div>
                                <div>
                                    <input type="text" class="form-control" id="placeholderInput" :placeholder="$t('时间')" />
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
                            <table class="table table-hover text-left" id="customerTable">
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
                                        <td><span class=" status  badge bg-danger text-white">
                                                {{ item.state }}
                                            </span></td>
                                        <td><span class=" status  badge bg-success text-successr">
                                                {{ item.response_code }}
                                            </span></td>
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
import { ref, onMounted } from "vue";


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
        state: "fail",
        response_code: "200",
        response_content: "<!DOCTYPE html> <!--STATUS OK--><html> <head><meta http-equiv=content-type content=text/html;charset=utf-8><meta http-equiv=X-UA -Compatible content=IE=Edge><meta content=always name=referrer><link rel=stylesheet type=text/css href=http://s1.bdstatic.com/r/www/cache/bdorz/baidu.min .css><title>ç™¾åº¦	",
        remark: "Forced deposit	",
        time: "2024-01-17 19:31:59",
        operate: "",

    }
]);

const date = ref();
const optionStatus = ref([
    { value: "", label: "回调状态" },
    { value: "1", label: "成功" },
    { value: "0", label: "失败" }
]);

onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
})
</script>