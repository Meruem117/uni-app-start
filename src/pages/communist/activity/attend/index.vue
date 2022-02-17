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
        class="text-white g_ml_15 g_text_25"
        :class="IS_PARTICIPANT[state.isParticipant].color"
      >{{ IS_PARTICIPANT[state.isParticipant].text }}</button>
    </view>
    <view class="g_mt_15">{{ state.data.content }}</view>
    <view v-if="state.isParticipant" class="g_mt_15">
      <view v-if="state.data.status === STATUS_TYPE.START">
        <button class="text-white bg-blue-400 base_button">我要打卡</button>
      </view>
      <view v-if="state.data.status === STATUS_TYPE.END">
        <view class="g_text_35 g_mt_15">精彩影集</view>
        <imageListVue :images="state.data.images" />
      </view>
    </view>
    <view v-else>
      <button class="text-white bg-orange-400 base_button">我要报名</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import imageListVue from '@/components/common/image-list.vue'
import type { activityItem } from '@/models'
import { ACTIVITY_STATUS, STATUS_TYPE, IS_PARTICIPANT } from '@/constant'

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
    status: 2,
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

<style scoped>
.base_button {
  width: 640rpx;
  height: 80rpx;
  font-size: 35rpx;
  margin-top: 40rpx;
  @apply rounded-3xl;
}
</style>
