<template>
  <view class="flex flex-col px-5 pb-2 bg-gradient-to-b from-blue-400 to-blue-100">
    <view class="flex p-6">
      <div class="bg-white rounded-xl p-1 mr-5">
        <uni-icons type="heart-filled" size="30" color="red"></uni-icons>
      </div>
      <view class="text-xl text-white font-medium p-1">国宾社区</view>
    </view>
    <view class="flex h-10 rounded-md bg-white shadow shadow-gray-700">
      <view class="w-5 mx-2 my-auto">xxxx</view>
      <view class="ml-5 my-auto">{{ state.notice }}</view>
      <view class="ml-5 my-auto">更多</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
  notice: '十九大报告"综治新语"出炉!'
})
</script>

<style>
</style>
