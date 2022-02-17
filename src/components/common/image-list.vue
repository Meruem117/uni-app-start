<template>
    <view class="flex justify-center g_mt_15 g_pt_15">
        <image class="rounded-lg" style="width:215rpx; height:160rpx;" :src="src" />
        <image class="rounded-lg g_ml_20" style="width:215rpx; height:160rpx;" :src="src" />
        <image class="rounded-lg g_ml_20" style="width:215rpx; height:160rpx;" :src="src" />
    </view>
</template>

<script setup lang="ts">
const props = defineProps<{ images: string[] }>()

const src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg'
</script>
