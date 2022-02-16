<template>
  <!-- 1 -->
  <view class="bg-gradient-to-b from-blue-400 to-white">
    <!-- 1.1 -->
    <view class="flex g_box" style="padding:40rpx;">
      <view class="bg-white rounded-xl g_p_10">
        <uni-icons type="heart-filled" size="30" color="red" class="m-auto"></uni-icons>
      </view>
      <view class="my-auto text-white g_text_45 g_ml_15">国宾社区</view>
    </view>
    <!-- 1.2 -->
    <view class="flex bg-white rounded-md shadow-md g_box g_text_30">
      <view class="flex justify-center" style="width:180rpx;">
        <view class="my-auto">社区</view>
        <view class="my-auto text-white rounded-md bg-blue-400 g_p_10 g_ml_15">公告</view>
      </view>
      <view class="my-auto text-gray-500" style="width: 400rpx;">· {{ state.notice }}</view>
      <view class="my-auto text-center text-gray-500 border_left" style="width: 100rpx;">更多</view>
    </view>
  </view>
  <!-- 2 -->
  <view class="flex flex-col g_text_30">
    <view class="jump_full" @click="toCommunist">党员之家</view>
    <view class="jump_full" @click="toShare">参与日常活动和主题服务</view>
    <view class="flex justify-center">
      <view class="jump_half" @click="toShow">活动和先锋人物</view>
      <view class="jump_half g_ml_15">家园概况</view>
    </view>
  </view>
  <!-- 3 -->
  <view class="flex g_box g_mt_15">
    <view class="text-blue-400 border_bottom g_pb_10 g_text_30" style="width: 180rpx;">重点热点工作</view>
    <view class="flex justify-end" style="width: 475rpx;" @click="toWork">
      <view class="my-auto text-gray-400 g_text_25">查看更多</view>
      <uni-icons type="forward" size="15" color="#9CA3AF" class="my-auto"></uni-icons>
    </view>
  </view>
  <!-- 4 -->
  <view class="flex flex-col">
    <workItemVue v-for="item in state.data" :key="item.id" :item="item" />
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import workItemVue from '@/components/work/work-item.vue'
import type { workItem } from '@/models'

type stateType = {
  notice: string,
  data: workItem[]
}

const state: stateType = reactive({
  notice: '十九大报告"综治新语"出炉!',
  data: [{
    id: 1,
    title: "xxxx",
    description: "xxxxxxxx",
    time: "xxxx-xx-xx",
  }, {
    id: 2,
    title: "xxxx",
    description: "xxxxxxxx",
    time: "xxxx-xx-xx",
  }]
})

function toCommunist() {
  uni.navigateTo({ url: '/pages/communist/index' })
}

function toShare() {
  uni.navigateTo({ url: '/pages/share/index' })
}

function toShow() {
  uni.navigateTo({ url: '/pages/show/index' })
}

function toWork() {
  uni.navigateTo({ url: '/pages/work/index' })
}
</script>

<style scoped>
.jump_full {
  width: 680rpx;
  height: 180rpx;
  margin-top: 25rpx;
  padding: 10rpx;
  @apply rounded-md shadow-md mx-auto;
}

.jump_half {
  width: 325rpx;
  height: 180rpx;
  margin-top: 15rpx;
  padding: 10rpx;
  @apply rounded-md shadow-md;
}

.border_left {
  @apply border-l border-solid border-gray-400;
  @apply border-t-transparent border-r-transparent border-b-transparent;
}

.border_bottom {
  @apply border-b-3 border-solid border-blue-400;
  @apply border-t-transparent border-l-transparent border-r-transparent;
}
</style>
