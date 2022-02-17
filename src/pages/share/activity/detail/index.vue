<template>
  <view class="flex flex-col g_box">
    <view class="g_text_45">{{ state.data.title }}</view>
    <view class="flex g_info">
      活动类型:&nbsp;
      <view class="text-orange-600">{{ state.data.type }}</view>
    </view>
    <view class="g_info">活动时间: {{ state.data.startTime }} ~ {{ state.data.endTime }}</view>
    <view class="g_info">活动地址: {{ state.data.title }}</view>
    <view class="g_info">活动状态: {{ ACTIVITY_STATUS[state.data.status].text }}</view>
    <view class="flex">
      <view class="g_info" style="width: 225rpx;">已报人数: {{ state.data.total }}人</view>
      <view class="g_info" style="width: 225rpx;">限额人数: {{ state.data.restrict }}人</view>
      <button
        size="mini"
        class="text-white g_ml_15"
        :class="IS_PARTICIPANT[state.isParticipant].color"
        style="font-size: 25rpx;"
      >{{ IS_PARTICIPANT[state.isParticipant].text }}</button>
    </view>
    <view class="g_mt_15">{{ state.data.content }}</view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { activityItem } from '@/models'
import { ACTIVITY_STATUS, IS_PARTICIPANT } from '@/constant'

type stateType = {
  isParticipant: number,
  data: activityItem
}

const state: stateType = reactive({
  isParticipant: 1,
  data: {
    id: 0,
    title: 'xxxx',
    type: 'xxx',
    status: 0,
    startTime: 'xxxx-xx-xx',
    endTime: 'xxxx-xx-xx',
    location: 'xxxxxxx',
    total: 40,
    restrict: 50,
    content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    images: []
  }
})

onLoad(option => {
  console.log(option.id)
})
</script>
