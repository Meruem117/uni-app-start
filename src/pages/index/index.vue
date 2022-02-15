<template>
  <div class="flex flex-col pb-2 bg-gradient-to-b from-blue-400 to-white">
    <div class="flex p-6">
      <div class="bg-white rounded-xl p-1 mr-5">
        <uni-icons type="heart-filled" size="30" color="red"></uni-icons>
      </div>
      <view class="text-xl text-white font-medium p-1">国宾社区</view>
    </div>
    <div class="flex h-10 mx-4 px-1 rounded-md bg-white shadow-md">
      <view class="my-auto text-lg">社区</view>
      <view class="my-auto ml-1 px-1 text-base text-white rounded-md bg-blue-400">公告</view>
      <view class="my-auto ml-5 text-gray-500">· {{ state.notice }}</view>
      <view
        class="my-auto ml-5 pl-2 text-gray-500 border-t-transparent border-r-transparent border-b-transparent border-l border-solid border-gray-400"
      >更多</view>
    </div>
  </div>
  <div class="flex flex-col mx-4 mb-4">
    <view class="base_jump w-full">党员之家</view>
    <view class="base_jump w-full">参与日常活动和主题服务</view>
    <div class="flex mt-4">
      <view class="base_jump base_jump_small mr-4">活动和先锋人物</view>
      <view class="base_jump base_jump_small">家园概况</view>
    </div>
  </div>
  <div class="flex mx-4">
    <view
      class="pb-1 text-blue-600 font-medium border-solid border-b-3 border-t-transparent border-l-transparent border-r-transparent border-blue-600"
    >重点热点工作</view>
    <div class="flex justify-end" style="width: 72%;" @click="toWork">
      <view class="text-gray-400">查看更多</view>
      <uni-icons type="forward" size="15" color="#9CA3AF"></uni-icons>
    </div>
  </div>
  <div class="flex flex-col">
    <workListItemVue v-for="item in state.data" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import workListItemVue from '@/components/work/work-list-item.vue'

const state = reactive({
  notice: '十九大报告"综治新语"出炉!',
  data: [
    {
      id: 1,
      title: "xxxx",
      description: "xxxxxxxx",
      time: "xxxx-xx-xx",
    },
    {
      id: 2,
      title: "xxxx",
      description: "xxxxxxxx",
      time: "xxxx-xx-xx",
    },
  ]
})

function toWork() {
  uni.navigateTo({ url: '/pages/work/index' })
}
</script>

<style scoped>
.base_jump {
  @apply h-20;
  @apply mt-4;
  @apply rounded-md;
  @apply shadow-md;
}

.base_jump_small {
  width: 50%;
}
</style>
