<template>
  <BModal v-model="modal" hide-footer class="v-modal-custom"  centered hide-header-close>
    <div class="modal-content border  border-0 ctx">
    
      <div class="modal-body">
        <div class="d-flex justify-content-center">
          <i class="ri-error-warning-line icon_hint"></i>
        </div>

        <div class="d-flex justify-content-center align-items-center mb-3">
          <h1 class="modal-title fs-2" id="staticBackdropLabel">提示</h1>
        </div>

        <div class="d-flex justify-content-center align-items-center mb-3">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            确定开启使用该银行？
          </h1>
        </div>
      </div>

      <div class="modal-footer">
        <div class="d-flex justify-content-center align-items-center w-100 gap-3">
          <button type="button" class="btn btn-light p-2 fs-6" @click="onClose">取消</button>
          <button type="button" class="btn btn-info p-2 fs-6" @click="onConfirm">
            确定
          </button>
        </div>
      </div>
    </div>
  </BModal>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
   modelValue: Boolean,
  title: String,
  description: String,
  onConfirm: Function,
  onClose: Function
})


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
  props.onClose();
  modal.value = false;
};

const onConfirm = () => {
  props.onConfirm();
  onClose()
}
</script>

<style scoped>
.modal-body {
  padding: 0px !important;
}
.ctx {
padding: 0px;
}

.icon_hint {
  font-size: 120px;
   color: #f8bb86;
   margin-top: -50px
}

</style>