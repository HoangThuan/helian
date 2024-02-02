<template>
    <BModal v-model="modal" hide-footer class="v-modal-custom modal-50" centered>
        <div class="modal-content border border-0">
            <div class="ctx-body">
                <div class="d-flex justify-content-center align-items-center mb-3">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        {{ props.mode === 'add' ? "添加银行卡" : " 编辑银行卡" }}
                    </h1>
                </div>
                <div class="px-lg-5">
                    <div class="d-flex mb-3 gap-2" v-if="props.mode === 'add'">
                        <div class="left-row">
                            <i class="mdi mdi-asterisk" style="color: red"></i>
                            {{ $t("选择卡类型") }}：
                        </div>
                        <div class="w-100">
                            <select class="form-select" aria-label="Default select example">
                                <option v-for="option in optionsCardType" :key="option.value" :value="option.value">
                                    {{ $t(option.label) }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex mb-3 gap-2">
                        <div class="left-row">
                            <i class="mdi mdi-asterisk" style="color: red"></i>
                            {{ $t("名称") }}：
                        </div>
                        <div class="w-100">
                            <input type="number" class="form-control w-100" id="ip_single_period" value="" placeholder="名称"
                                aria-label="" />
                        </div>
                    </div>

                    <div class="d-flex mb-3 gap-2">
                        <div class="left-row">
                            <i class="mdi mdi-asterisk" style="color: red"></i>
                            {{ $t("银行用户名") }}：
                        </div>
                        <div class="w-100">
                            <input type="number" class="form-control w-100" id="ip_single_period" value=""
                                placeholder="银行用户名" aria-label="" />
                        </div>
                    </div>

                    <div class="d-flex mb-3 gap-2">
                        <div class="left-row">
                            <i class="mdi mdi-asterisk" style="color: red"></i>
                            {{ $t("银行密码") }}：
                        </div>
                        <div class="w-100">
                            <input type="number" class="form-control w-100" id="ip_single_period" value=""
                                placeholder="银行密码" aria-label="" />
                        </div>
                    </div>

                    <div class="d-flex mb-3 gap-2">
                        <div class="left-row">
                            <i class="mdi mdi-asterisk" style="color: red"></i>
                            {{ $t("银行卡账号") }}：
                        </div>
                        <div class="w-100">
                            <input type="number" class="form-control w-100" id="ip_single_period" value=""
                                placeholder="银行卡账号" aria-label="" />
                        </div>
                    </div>

                    <div class="d-flex mb-3 gap-2">
                        <div class="left-row">
                            <i class="mdi mdi-asterisk" style="color: red"></i>
                            {{ $t("银行账户人姓名") }}：
                        </div>
                        <div class="w-100">
                            <input type="number" class="form-control w-100" id="ip_single_period" value=""
                                placeholder="银行账户人姓名" aria-label="" />
                        </div>
                    </div>

                    <div class="d-flex mb-3 gap-2">
                        <div class="left-row">
                            <i class="mdi mdi-asterisk" style="color: red"></i>
                            {{ $t("银行") }}：
                        </div>
                        <div class="w-100">
                            <select class="form-select" aria-label="Default select example">
                                <option v-for="option in optionsBank" :key="option.value" :value="option.value">
                                    {{ $t(option.label) }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex mb-3 gap-2">
                        <div class="left-row">
                            {{ $t("限制余额最大额度") }}：
                        </div>
                        <div class="w-100">
                            <input type="number" class="form-control w-100" id="ip_single_period" value=""
                                placeholder="限制余额最大额度" aria-label="" />
                        </div>
                    </div>

                    <div class="d-flex mb-3 gap-2">
                        <div class="left-row">
                            {{ $t("收款最小金额") }}：
                        </div>
                        <div class="w-100">
                            <input type="number" class="form-control w-100" id="ip_single_period" value=""
                                placeholder="收款最小金额" aria-label="" />
                        </div>
                    </div>

                    <div class="d-flex mb-3 gap-2">
                        <div class="left-row">
                            {{ $t("收款最大金额") }}：
                        </div>
                        <div class="w-100">
                            <input type="number" class="form-control w-100" id="ip_single_period" value=""
                                placeholder="收款最大金额" aria-label="" />
                        </div>
                    </div>

                    <div class="d-flex mb-3 gap-2">
                        <div class="left-row">
                            {{ $t("日收款上限") }}：
                        </div>
                        <div class="w-100">
                            <input type="number" class="form-control w-100" id="ip_single_period" value=""
                                placeholder="日收款上限" aria-label="" />
                        </div>
                    </div>

                    <div class="d-flex mb-3 gap-2">
                        <div class="left-row">
                            {{ $t("日收款笔数上限") }}：
                        </div>
                        <div class="w-100">
                            <input type="number" class="form-control w-100" id="ip_single_period" value=""
                                placeholder="日收款笔数上限" aria-label="" />
                        </div>
                    </div>

                    <div class="d-flex mb-3 gap-2">
                        <div class="left-row">
                            {{ $t("选择VPN") }}：
                        </div>
                        <div class="w-100">
                            <select class="form-select" aria-label="Default select example">
                                <option v-for="option in optionstate" :key="option.value" :value="option.value">
                                    {{ $t(option.label) }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex mb-3 gap-2">
                        <div class="left-row">{{ $t("备注") }}：</div>
                        <div class="w-100">
                            <input type="number" class="form-control w-100" id="ip_single_period" value="" placeholder="备注"
                                aria-label="" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <div class="d-flex justify-content-center align-items-center w-100 gap-3">
                    <button type="button" class="btn btn-light p-2" @click="onClose">
                        取消
                    </button>
                    <button type="button" class="btn btn-info p-2" @click="onConfirm">
                        确定
                    </button>
                </div>
            </div>
        </div>
    </BModal>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
    modelValue: Boolean,
    title: String,
    description: String,
    onConfirm: Function,
    // onClose: Function,
    mode: String,
    id: String
});

const optionstate = ref([
    { value: "", label: "选择VPN" },
    { value: "1", label: "123" },
]);

const optionsBank = ref([
    { value: "", label: "ABC" },
    { value: "1", label: "123" },
]);

const optionsCardType = ref([
    { value: "", label: "选择卡类型" },
    { value: "1", label: "系统卡" },
    { value: "2", label: "代理卡" },
]);


const emit = defineEmits(["update:modelValue"]);

const modal = computed({
    get() {
        return props.modelValue;
    },

    set(value) {
        emit("update:modelValue", value);
    },
});

const onClose = () => {
    // props.onClose();
    modal.value = false;
};

const onConfirm = () => {
    props.onConfirm();
    onClose();
};
</script>

<style scoped  >
.ctx-body {
    height: 28rem;
    position: relative;
    box-sizing: border-box;
    overflow-y: auto;
    padding-right: 7px;
}

.left-row {
    text-align: end;
    width: 150px
}

@media screen and (max-width: 767.98px) {
    .left-row {
        width: 100px;
    }
}
</style>