<template>
  <view class="flex flex-col g_box">
    <view class="g_text_45">{{ props.data.title }}</view>
    <view class="flex g_info">
      活动类型:&nbsp;
      <view class="text-orange-600">{{ props.data.type }}</view>
    </view>
    <view class="g_info">活动时间: {{ props.data.startTime }} ~ {{ props.data.endTime }}</view>
    <view class="g_info">活动地址: {{ props.data.location }}</view>
    <view class="g_info">活动状态: {{ ACTIVITY_STATUS[props.data.status].text }}</view>
    <view class="flex">
      <view class="g_info" style="width: 230rpx;">已报人数: {{ props.data.total }}人</view>
      <view class="g_info" style="width: 230rpx;">限额人数: {{ props.data.restrict }}人</view>
      <button
        size="mini"
        class="text-white g_text_30 g_ml_20 g_mt_10"
        :class="IS_PARTICIPANT[props.isParticipant].color"
      >{{ IS_PARTICIPANT[props.isParticipant].text }}</button>
    </view>
    <view class="g_mt_20">{{ props.data.content }}</view>
  </view>
</template>

<script setup lang="ts">
import type { activityItem } from '@/models'
import { ACTIVITY_STATUS, IS_PARTICIPANT } from '@/constant'

type propsType = {
  isParticipant: number,
  data: activityItem
}

const props = defineProps<propsType>()
</script>
