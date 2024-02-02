<script>
export default {
   name:'test',
   props:{
    visible:Boolean,
    title:String,
    showFooter:{
      type:Boolean,
      default:true
    },
    size:{
      type: String,
      default:'modal-lg'
    }
   },
}
</script>
<template>
<div v-if="visible" class="modal fade show" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" 
style="display: block; background-color: rgba(0,0,0,.4);">
  <div class="modal-dialog modal-dialog-centered" :class="''+size">
    <div class="modal-content">
      <div class="modal-header" style="border-bottom: none;">
        <div class="modal-header-footer-center">
            <h3 style="font-weight: bold; color: black;">{{ title }}</h3>
        </div>
        <button type="button" class="btn-close" @click="$emit('close')" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <slot/>
      </div>
      <div class="modal-footer" v-if="showFooter">
        <div class="modal-header-footer-center">
            <button
                  type="button"
                  class="btn-customer-no"
                  style="margin-left: 4px"
                  @click="$emit('configEvent')"
                >
                 确定
                </button>
                <button
                  type="button"
                  class="btn-customer-no-back"
                  style="margin-left: 3%"
                  @click="$emit('close')"
                >
                  取消
                </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>