<template>
    <BModal v-model="modal" hide-footer class="v-modal-custom modal-50" centered>
        <div class="modal-content border border-0">
            <div class="modal-body" style="
          height: 28rem;
          position: relative;
          box-sizing: border-box;
          overflow-y: auto;
        ">
                <div class="d-flex justify-content-center align-items-center mb-3">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                       {{ props.mode === 'add' ? "添加VPN" : "  编辑VPN信息"  }}
                    </h1>
                </div>
                <div class="px-5">
                   

                    <div class="d-flex mb-3 gap-2">
                        <div style="text-align: end; width: 150px">
                            <i class="mdi mdi-asterisk" style="color: red"></i>
                            {{ $t("名称") }}：
                        </div>
                        <div class="w-100">
                            <input type="number" class="form-control w-100" id="ip_single_period" value=""
                                placeholder="名称" aria-label=""
                             />
                        </div>
                    </div>

                    <div class="d-flex mb-3 gap-2">
                        <div style="text-align: end; width: 150px">
                            <i class="mdi mdi-asterisk" style="color: red"></i>
                            {{ $t("VPN 链接") }}：
                        </div>
                        <div class="w-100">
                            <input type="number" class="form-control w-100" id="ip_single_period" value=""
                                placeholder="VPN 链接" aria-label=""
                              />
                        </div>
                    </div>

                    <div class="d-flex mb-3 gap-2">
                        <div style="text-align: end; width: 150px">
                            
                            {{ $t("绑定代理") }}：
                        </div>
                        <div class="w-100">
                            <div class="w-100">
                            <select class="form-select" aria-label="Default select example">
                                <option v-for="option in optionsProxy" :key="option.value" :value="option.value">
                                    {{ $t(option.label) }}
                                </option>
                            </select>
                        </div>
                        </div>
                    </div>

                    <div class="d-flex mb-3 gap-2">
                        <div style="text-align: end; width: 150px">
                           
                            {{ $t("备注") }}：
                        </div>
                        <div class="w-100">
                            <input type="number" class="form-control w-100" id="ip_single_period" value=""
                                placeholder="备注" aria-label=""
                                />
                        </div>
                    </div>

                  
                </div>
            </div>

            <div class="modal-footer">
                <div class="d-flex justify-content-center align-items-center w-100 gap-3">
                    <button type="button" class="btn btn-light p-2" @click="onClose">
                        确定
                    </button>
                    <button type="button" class="btn btn-info p-2" @click="onConfirm">
                        取消
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

const optionsProxy = ref([
    { value: "", label: "选择代理" },
    { value: "1", label: "dl001  (dl001)" },
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
