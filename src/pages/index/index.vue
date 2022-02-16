<template>
  <view class="flex flex-col bg-gradient-to-b from-blue-400 to-white base_p">
    <!-- part 1.1 -->
    <view class="flex" style="padding:50rpx;">
      <view class="bg-white rounded-xl base_p" style="margin-right: 30rpx;">
        <uni-icons type="heart-filled" size="30" color="red" class="m-auto"></uni-icons>
      </view>
      <view class="my-auto text-white font-medium base_title">国宾社区</view>
    </view>
    <!-- part 1.2 -->
    <view class="flex mx-auto rounded-md bg-white shadow-md base_box">
      <view class="flex justify-center" style="width:190rpx;">
        <view class="my-auto" style="font-size: 35rpx;">社区</view>
        <view
          class="my-auto text-white rounded-md bg-blue-400"
          style="padding: 5rpx;margin-left: 5rpx;font-size: 30rpx;"
        >公告</view>
      </view>
      <view
        class="my-auto text-gray-500"
        style="width: 395rpx;font-size: 30rpx;"
      >· {{ state.notice }}</view>
      <view
        class="my-auto text-center text-gray-500 border_left"
        style="width: 110rpx;font-size: 30rpx;"
      >更多</view>
    </view>
  </view>
  <!-- part 2 -->
  <view class="flex flex-col mx-auto base_box">
    <view class="base_jump" style="width: 675rpx;" @click="toCommunist">党员之家</view>
    <view class="base_jump" style="width: 675rpx;" @click="toShare">参与日常活动和主题服务</view>
    <view class="flex w-full">
      <view class="base_jump" style="width: 325rpx;" @click="toShow">活动和先锋人物</view>
      <view class="base_jump base_ml" style="width: 325rpx;">家园概况</view>
    </view>
  </view>
  <!-- part 3 -->
  <view class="flex base_box">
    <view
      class="text-blue-400 font-semibold border-solid border-b-3 border-t-transparent border-l-transparent border-r-transparent border-blue-400 base_ml"
      style="width: 220rpx;font-size: 35rpx;padding-bottom: 10rpx;"
    >重点热点工作</view>
    <view class="flex justify-end" style="width: 475rpx;" @click="toWork">
      <view class="my-auto text-gray-400">查看更多</view>
      <uni-icons type="forward" size="15" color="#9CA3AF" class="my-auto"></uni-icons>
    </view>
  </view>
  <view class="flex flex-col" style="padding-bottom: 30rpx;">
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
.base_box {
  width: 695rpx;
  padding: 10rpx;
}

.base_jump {
  height: 180rpx;
  margin-top: 25rpx;
  padding: 10rpx;
  @apply rounded-md shadow-md;
}

.border_left {
  @apply border-l border-solid border-gray-400;
  @apply border-t-transparent border-r-transparent border-b-transparent;
}
</style>
