<template>
    <Layout>

        <BRow>
            <Breadcrumb :title="$t('代付配置')" />

            <BRow class="mt-3">
                <div class="alert alert-secondary">
                    <i class="iconfont icon-tishi"
                        style="color: rgb(24, 128, 255); font-size: 18px; vertical-align: -2px; margin-right: 3px;"></i>
                    部分设置保存后，需刷新页面后起效！
                </div>
                <BCard no-body class="card-body">
                    <BCardBody>
                        <div class="mt-2 px-3">
                            <form class="d-flex flex-row flex-wrap align-items-center gap-2 justify-content-between">
                                <div class="fw-bold">{{ $t('代付配置') }} </div>

                                <div class="d-flex gap-2">
                                    <button type="button" class="btn btn-secondary waves-effect waves-light mx-2 p-2"  @click="onOpenModal(index)">
                                        {{ $t('提交') }}
                                    </button>
                                    <button type="button" class="btn btn-light waves-effect p-2">
                                        {{ $t('重置') }}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="px-3">
                            <p>代付银行维护限制</p>
                            <p>选择配置维护停用的银行Code</p>
                            <div class="my-2">
                                <button v-for="(item, index) in items" :key="index"
                                    :class="['btn px-3 py-2', item.isActive ? 'btn-danger' : 'btn-light', 'me-2', 'mb-3']"
                                    @click="toggleButton(index)">
                                    <span>{{ $t(item.value) }}</span>
                                </button>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body class="card-body mt-3">
                    <BCardBody>
                        <div class="px-3">
                            <p>项目代付业务总开关，控制整个项目代付功能的运行</p>
                            <div class="row">
                                <div class="col-6">
                                    <p>代付业务总开关</p>
                                </div>
                                <div class="col-6">
                                    <Switch></Switch>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body class="card-body mt-3">
                    <BCardBody>
                        <div class="px-3">
                            <p>自动代付功能总开关，控制自动代付脚本的运行</p>
                            <div class="row">
                                <div class="col-6">
                                    <p>自动代付功能总开关</p>
                                </div>
                                <div class="col-6">
                                    <Switch></Switch>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BRow>

        </BRow>
        <ModalSuccess v-model="isConfirmCloseChanel"  />

    </Layout>
</template>
    
<script setup>
import Layout from "@/layouts/main.vue";
// import ModalHint from "@/components/modals/ModalHint.vue";
import Breadcrumb from "@/components/Breadcrumd/Breadcrumb.vue";
import Switch from "@/components/switch.vue";

import { ref, onMounted } from "vue";
import ModalSuccess from "../../../components/modals/ModalSuccess.vue";

const items = ref([{ 'key': 'VietinBank', 'value': 'VietinBank', 'isActive': false },
{ 'key': 'Vietcombank', 'value': 'Vietcombank', 'isActive': false },
{ 'key': 'BIDV', 'value': 'BIDV', 'isActive': false },
{ 'key': 'Agribank', 'value': 'Agribank', 'isActive': false },
{ 'key': 'OCB', 'value': 'OCB', 'isActive': false },
{ 'key': 'MBBank', 'value': 'MBBank', 'isActive': false },
{ 'key': 'Techcombank', 'value': 'Techcombank', 'isActive': false },
{ 'key': 'ACB', 'value': 'ACB', 'isActive': false },
{ 'key': 'VPBank', 'value': 'VPBank', 'isActive': false },
{ 'key': 'TPBank', 'value': 'TPBank', 'isActive': false },
{ 'key': 'Sacombank', 'value': 'Sacombank', 'isActive': false },
{ 'key': 'HDBank', 'value': 'HDBank', 'isActive': false },
{ 'key': 'VietCapitalBank', 'value': 'VietCapitalBank', 'isActive': false },
{ 'key': 'SCB', 'value': 'SCB', 'isActive': false },
{ 'key': 'VIB', 'value': 'VIB', 'isActive': false },
{ 'key': 'SHB', 'value': 'SHB', 'isActive': false },
{ 'key': 'Eximbank', 'value': 'Eximbank', 'isActive': false },
{ 'key': 'MSB', 'value': 'MSB', 'isActive': false },
{ 'key': 'CAKE', 'value': 'CAKE', 'isActive': false },
{ 'key': 'Ubank', 'value': 'Ubank', 'isActive': false },
{ 'key': 'Timo', 'value': 'Timo', 'isActive': false },
{ 'key': 'ViettelMoney', 'value': 'ViettelMoney', 'isActive': false },
{ 'key': 'VNPTMoney', 'value': 'VNPTMoney', 'isActive': false },
{ 'key': 'SaigonBank', 'value': 'SaigonBank', 'isActive': false },
{ 'key': 'BacABank', 'value': 'BacABank', 'isActive': false },
{ 'key': 'PVcomBank', 'value': 'PVcomBank', 'isActive': false },
{ 'key': 'Oceanbank', 'value': 'Oceanbank', 'isActive': false },
{ 'key': 'NCB', 'value': 'NCB', 'isActive': false },
{ 'key': 'ShinhanBank', 'value': 'ShinhanBank', 'isActive': false },
{ 'key': 'ABBANK', 'value': 'ABBANK', 'isActive': false },
{ 'key': 'VietABank', 'value': 'VietABank', 'isActive': false },
{ 'key': 'NamABank', 'value': 'NamABank', 'isActive': false },
{ 'key': 'PGBank', 'value': 'PGBank', 'isActive': false },
{ 'key': 'VietBank', 'value': 'VietBank', 'isActive': false },
{ 'key': 'BaoVietBank', 'value': 'BaoVietBank', 'isActive': false },
{ 'key': 'SeABank', 'value': 'SeABank', 'isActive': false },
{ 'key': 'COOPBANK', 'value': 'COOPBANK', 'isActive': false },
{ 'key': 'LienVietPostBank', 'value': 'LienVietPostBank', 'isActive': false },
{ 'key': 'KienLongBank', 'value': 'KienLongBank', 'isActive': false },
{ 'key': 'KBank', 'value': 'KBank', 'isActive': false },
{ 'key': 'UnitedOverseas', 'value': 'UnitedOverseas', 'isActive': false },
{ 'key': 'StandardChartered', 'value': 'StandardChartered', 'isActive': false },
{ 'key': 'PublicBank', 'value': 'PublicBank', 'isActive': false },
{ 'key': 'Nonghyup', 'value': 'Nonghyup', 'isActive': false },
{ 'key': 'IndovinaBank', 'value': 'IndovinaBank', 'isActive': false },
{ 'key': 'IBKHCM', 'value': 'IBKHCM', 'isActive': false },
{ 'key': 'IBKHN', 'value': 'IBKHN', 'isActive': false },
{ 'key': 'VRB', 'value': 'VRB', 'isActive': false },
{ 'key': 'Woori', 'value': 'Woori', 'isActive': false },
{ 'key': 'KookminHN', 'value': 'KookminHN', 'isActive': false },
{ 'key': 'KookminHCM', 'value': 'KookminHCM', 'isActive': false },
{ 'key': 'HSBC', 'value': 'HSBC', 'isActive': false },
{ 'key': 'HongLeong', 'value': 'HongLeong', 'isActive': false },
{ 'key': 'GPBank', 'value': 'GPBank', 'isActive': false },
{ 'key': 'DongABank', 'value': 'DongABank', 'isActive': false },
{ 'key': 'DBSBank', 'value': 'DBSBank', 'isActive': false },
{ 'key': 'CIMB', 'value': 'CIMB', 'isActive': false },
{ 'key': 'CBBank', 'value': 'CBBank', 'isActive': false },
{ 'key': 'Citibank', 'value': 'Citibank', 'isActive': false },
{ 'key': 'KEBHanaHCM', 'value': 'KEBHanaHCM', 'isActive': false },
{ 'key': 'KEBHANAHN', 'value': 'KEBHANAHN', 'isActive': false },
{ 'key': 'MAFC', 'value': 'MAFC', 'isActive': false },
{ 'key': 'VBSP', 'value': 'VBSP', 'isActive': false },
{ 'key': 'LIOBANK', 'value': 'LIOBANK', 'isActive': false }]);

const toggleButton = (index) => {
    items.value[index].isActive = !items.value[index].isActive;
}
const isConfirmCloseChanel = ref(false);
const itemSelected = ref();
const onOpenModal = (index) => {
    isConfirmCloseChanel.value = true;
    itemSelected.value = index;
};

const date = ref();

onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
})
</script>