<template>
  <BModal v-model="modal" hide-footer class="v-modal-custom" centered >
    <div style="margin-top: -10px">
      <div class="d-flex justify-content-center align-items-center mb-3">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">
          {{ $t("订单数据统计") }}
        </h1>
      </div>
    </div>

    <div class="modal-content border border-0">
      <div class="modal-body">
        <div class="">
          <div class="d-flex gap-3">
            <div style="width: 50px;">{{ $t("总笔数") }}:</div>
            <div class="">0</div>
          </div>

          <div>
            <div class="d-flex gap-3">
              <div style="width: 50px;">{{ $t("总金额") }}:</div>
              <div>0</div>
            </div>
          </div>
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
  onClose: Function,
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

//   const onClose = () => {
//     props.onClose();
//     modal.value = false;
//   };

//   const onConfirm = () => {
//     props.onConfirm();
//     onClose()
//   }
</script>
