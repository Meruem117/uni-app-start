<template>
  <view class="g_item" @click="toActivityAttend">
    <view class="g_p_10" style="width: 120rpx;">
      <view class="g_icon">
        <uni-icons type="flag-filled" size="30" class="m-auto"></uni-icons>
      </view>
    </view>
    <view class="flex flex-col g_p_10" style="width: 380rpx;">
      <view class="g_text_35">[{{ props.item.type }}] {{ props.item.title }}</view>
      <view class="text-gray-400 g_mt_10 g_text_30">活动时间: {{ props.item.startTime }}</view>
    </view>
    <view class="flex justify-end g_p_10" style="width: 160rpx;">
      <view class="tag g_text_25" :class="ACTIVITY_STATUS[props.item.status].color">
        <view class="m-auto">{{ ACTIVITY_STATUS[props.item.status].text }}</view>
      </view>
      <uni-icons type="forward" size="20" color="#9CA3AF" style="margin-top: 5rpx;"></uni-icons>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { activityItem } from '@/models'
import { ACTIVITY_STATUS } from '@/constant'

const props = defineProps<{ item: activityItem }>()

function toActivityAttend() {
  uni.navigateTo({ url: '/pages/communist/activity/attend/index?id=' + props.item.id })
}
</script>

<style scoped>
.tag {
  width: 72rpx;
  height: 30rpx;
  padding: 5rpx;
  @apply flex border border-solid rounded;
}
</style>
