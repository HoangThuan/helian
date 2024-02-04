<template>
    <Layout>
        <BRow>
            <Breadcrumb :title="$t('t-payment-chanel')" />

            <div class="col-lg-6 col-12">
                <BRow>

                    <div class="border border-info p-2 rounded" style="background-color: #b8daff">
                    <i class="mdi mdi-lightbulb-on fs-4 text-info"></i>
                    <span class="text-blue" style="font-size: 14px;">平台通道总开关，控制平台的全部转账汇款方式！</span>
                </div>
                </BRow>
                

                <BRow class="mt-3">
                    <BCard no-body class="card-body">
                        <BCardBody>
                            <div class="table-responsive">
                                <table class="table table-hover table-bordered table-nowrap" id="customerTable">
                                    <thead class="table-light">
                                        <tr>
                                            <th v-for="header in headers" :key="header.text">
                                                {{ $t(header.text) }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-body-font-size">
                                        <tr v-for="(item, index) in items" :key="index">
                                            <td>{{ item.name }}</td>
                                            <td>{{ item.code }}</td>
                                            <td>
                                                <span class="status text-danger" v-if="item.status === 'active'" style="font-size: 12px;">
                                                    <i class="ri-error-warning-fill fs-5"></i>
                                                    已关闭
                                                </span>

                                                <span class="status text-success" v-else>
                                                    <i class="ri-checkbox-circle-fill fs-5 text-success" style="font-size: 12px;"></i>

                                                    已开启
                                                </span>
                                            </td>

                                            <td>
                                                <button type="button"
                                                    :class="item.status == 'active'? 'btn-customer-no':'btn-customer-ok'"
                                                    @click="onOpenModal(index)">
                                                    {{ item.status == 'active'?"开启":"关闭" }}
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

const headers = ref([
    { text: "t-chanel-name", value: "name" },
    { text: "t-chanel-code", value: "code" },
    { text: "t-chanel-status", value: "status" },
    { text: "t-operate", value: "operate" },
]);

const items = ref([
    {
        name: "越南网银扫码",
        code: "VNBANKQR",
        status: "active",
    },
    {
        name: "越南网银扫码",
        code: "VNBANKQR",
        status: "active",
    },
    {
        name: "越南网银扫码",
        code: "VNBANKQR",
        status: "active",
    },
    {
        name: "越南网银扫码",
        code: "VNBANKQR",
        status: "active",
    },
    {
        name: "越南网银扫码",
        code: "VNBANKQR",
        status: "active",
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
