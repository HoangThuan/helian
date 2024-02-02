<template>
    <div class="card p-2 d-flex align-items-center flex-row" style="font-size: 14px;">
        <i class="ri-stack-fill fs-4 text-info me-1"></i>
        <a class="mb-sm-0 text-info">控制台</a>


        <span class="mx-1">/</span>
        <div class="mb-sm-0 ">{{ props.title  }}</div>

    </div>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        default: ""
    }
})

</script>