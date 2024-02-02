<template>
    <BModal v-model="modal" hide-footer class="v-modal-custom" centered hide-header-close>
        <div class="modal-content border  border-0 ctx">

            <div class="modal-body">
                <div class="d-flex justify-content-center">
                    <i class="ri-checkbox-circle-fill icon_check"></i>
                </div>
                <div class="d-flex justify-content-center align-items-center mb-3">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        保存成功
                    </h1>
                </div>
            </div>


        </div>
    </BModal>
</template>
  
<script setup>
import { computed, watch } from "vue";

const props = defineProps({
    modelValue: Boolean,
    title: String,
    description: String,
});

const emit = defineEmits(["update:modelValue"]);

const modal = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    },
});

// Thêm đoạn code này
watch(modal, (newValue) => {
    if (newValue) {
        setTimeout(() => {
            modal.value = false;
        }, 1000); // 3 giây = 3000 mili giây
    }
});
</script>

  
<style scoped>
.modal-body {
    padding: 0px !important;
}

.ctx {
    padding: 0px;
}

.icon_check {
    font-size: 120px;
    color: #8cf886;
    margin-top: -50px
}
</style>