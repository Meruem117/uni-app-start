<template>
  <view class="g_item" @click="toCollectionDetail">
    <view class="g_p_10" style="width: 120rpx;">
      <view class="g_icon">
        <uni-icons type="flag-filled" size="30" class="m-auto"></uni-icons>
      </view>
    </view>
    <view class="flex flex-col g_p_10" style="width: 520rpx;">
      <view class="g_text_35">{{ props.item.title }}</view>
      <view class="text-gray-400 g_mt_10 g_text_30">活动时间: {{ props.item.time }}</view>
    </view>
    <view class="flex justify-end g_p_10" style="width: 40rpx;">
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
