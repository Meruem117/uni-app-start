<template>
  <view class="base_item" @click="toActivityAttend">
    <view class="base_p" style="width: 120rpx;">
      <view class="base_icon">
        <uni-icons type="flag-filled" size="30" class="m-auto"></uni-icons>
      </view>
    </view>
    <view class="flex flex-col base_p" style="width: 380rpx;">
      <view class="base_head">[{{ props.item.type }}] {{ props.item.title }}</view>
      <view class="text-gray-400 base_mt">活动时间: {{ props.item.startTime }}</view>
    </view>
    <view class="flex justify-end base_p" style="width: 160rpx;">
      <uni-tag
        inverted
        size="small"
        :text="ACTIVITY_STATUS[props.item.status].text"
        :type="ACTIVITY_STATUS[props.item.status].type"
      ></uni-tag>
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
