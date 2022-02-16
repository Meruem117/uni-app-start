<template>
  <view class="g_item" @click="toWorkDetail">
    <view class="g_p_10" style="width: 120rpx;">
      <view class="g_icon">
        <uni-icons type="star" size="30" class="m-auto"></uni-icons>
      </view>
    </view>
    <view class="flex flex-col g_p_10" style="width: 520rpx;">
      <view class="g_text_35">{{ props.item.title }}</view>
      <view class="g_mt_10 g_text_30">{{ props.item.description }}</view>
      <view class="flex justify-start g_mt_10">
        <uni-icons type="circle" size="15" color="#9CA3AF"></uni-icons>
        <view class="text-gray-400 g_ml_15 g_text_30">{{ props.item.time }}</view>
      </view>
    </view>
    <view class="flex justify-end g_p_10" style="width: 40rpx;">
      <uni-icons type="forward" size="20rpx" color="#9CA3AF"></uni-icons>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { workItem } from '@/models'

const props = defineProps<{ item: workItem }>()

function toWorkDetail() {
  uni.navigateTo({ url: '/pages/work/detail/index?id=' + props.item.id })
}
</script>
