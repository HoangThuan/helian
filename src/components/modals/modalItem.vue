<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    isRed : {
      type: Boolean,
      default: false
    },
  },
};
</script>
<template>
  <div class="modal-content-item">
    <div class="text">
      <span><span v-if="isRed" style="color: red;font-size: 16px;">* </span>{{ title }}</span>
    </div>
    <div class="item">
      <slot />
    </div>
  </div>
</template>
