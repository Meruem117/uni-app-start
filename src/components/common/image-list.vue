<template>
    <view class="flex justify-center g_mt_15 g_pt_15">
        <image
            v-for="(image, index) in props.images"
            :key="index"
            class="rounded-lg image"
            :src="image"
        />
    </view>
</template>

<script setup lang="ts">
const props = defineProps<{ images: string[] }>()
</script>

<style scoped>
.image {
    width: 215rpx;
    height: 160rpx;
    margin-right: 20rpx;
}
</style>
