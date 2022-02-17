<template>
    <view class="g_item" @click="toDetail">
        <view class="g_p_10" style="width: 120rpx;">
            <view class="g_icon">
                <uni-icons :type="props.icon" size="25" class="m-auto"></uni-icons>
            </view>
        </view>
        <view class="flex flex-col g_p_10" style="width: 520rpx;">
            <view class="g_text_35">{{ props.title }}</view>
            <slot name="body"></slot>
        </view>
        <view class="flex justify-end g_p_10" style="width: 40rpx;">
            <uni-icons type="forward" size="25" color="#9CA3AF"></uni-icons>
        </view>
    </view>
</template>

<script setup lang="ts">
type propsType = {
    icon: string,
    title: string,
    link: string
}

const props = defineProps<propsType>()

function toDetail() {
    uni.navigateTo({ url: props.link })
}
</script>
