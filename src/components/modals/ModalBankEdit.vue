<template>
  <BModal v-model="modal" hide-footer class="v-modal-custom modal-50" centered>
    <div class="modal-content border  border-0 ">

      <div class="ctx-body">
        <div class="d-flex justify-content-center align-items-center mb-3">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            编辑银行信息
          </h1>
        </div>
        <div class="px-lg-5">
          <div class="d-flex mb-3 gap-2">
            <h5 class="left-row">是否使用IP池：</h5>
            <div class=" form-switch  form-switch-md w-100">
              <input class="form-check-input code-switcher" type="checkbox" id="sizing-input-showcode" />
            </div>
          </div>
          <div class="d-flex mb-3 gap-2">
            <h5 class="left-row">多久时间切换ip/秒：</h5>
            <div class="w-100">
              <input type="number" class="form-control w-100" id="ip_single_period" value="600" placeholder="多久时间切换ip"
                aria-label="" style="display: inline-block; width: calc(100% - 180px)" />
            </div>
          </div>
          <div class="d-flex mb-3 gap-2">
            <h5 class="left-row">ip使用间隔时间</h5>
            <div class="w-100">
              <input type="number" class="form-control w-100" id="ip_single_period" value="1500" placeholder="多久时间切换ip"
                aria-label="" style="display: inline-block; width: calc(100% - 180px)" />
            </div>
          </div>
          <div class="d-flex mb-3 gap-2">
            <h5 class="left-row">IP池/一行一个：</h5>
            <div class="w-100">
              <textarea class="form-control w-100" id="ips" rows="5" placeholder="IP池/一行一个"
                style="display: inline-block; width: calc(100% - 180px)"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <div class="d-flex justify-content-center align-items-center w-100 gap-3">
          <button type="button" class="btn btn-light p-2" @click="onClose">取消</button>
          <button type="button" class="btn btn-info p-2" @click="onConfirm">
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
  // onClose: Function
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

  modal.value = false;
};

const onConfirm = () => {
  props.onConfirm();
  onClose()
}
</script>
  
<style scoped  >
.ctx-body {
  height: 24rem;
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