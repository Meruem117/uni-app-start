<template>
    <view class="base_item" @click="toCollectionDetail">
        <view class="base_p" style="width: 120rpx;">
            <view class="base_icon">
                <uni-icons type="flag-filled" size="30" class="m-auto"></uni-icons>
            </view>
        </view>
        <view class="flex flex-col base_p" style="width: 520rpx;">
            <view class="base_head">{{ props.item.title }}</view>
            <view class="text-gray-400 base_mt">活动时间: {{ props.item.time }}</view>
        </view>
        <view class="flex justify-end base_p" style="width: 40rpx;">
            <uni-icons type="forward" size="20" color="#9CA3AF"></uni-icons>
        </view>
    </view>
</template>

<script setup lang="ts">
import type { collectionItem } from '@/models'

const props = defineProps<{ item: collectionItem }>()

function toCollectionDetail() {
    uni.navigateTo({ url: '/pages/show/collection/detail/index?id=' + props.item.id })
}
</script>
