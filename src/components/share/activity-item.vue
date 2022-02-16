<template>
  <view class="base_item" @click="toActivityDetail">
    <view class="base_p" style="width: 120rpx;">
      <view class="base_icon">
        <uni-icons type="flag-filled" size="30" class="m-auto"></uni-icons>
      </view>
    </view>
    <view class="flex flex-col base_p" style="width: 520rpx;">
      <view class="base_head">[{{ props.item.type }}] {{ props.item.title }}</view>
      <view class="text-gray-400 base_mt">活动时间: {{ props.item.startTime }}</view>
    </view>
    <view class="flex justify-end base_p" style="width: 40rpx;">
      <uni-icons type="forward" size="20" color="#9CA3AF"></uni-icons>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { activityItem } from '@/models'

const props = defineProps<{ item: activityItem }>()

function toActivityDetail() {
  uni.navigateTo({ url: '/pages/share/activity/detail/index?id=' + props.item.id })
}
</script>
