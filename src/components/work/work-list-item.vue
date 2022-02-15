<template>
  <div class="flex px-4 pt-4 pb-6 mt-4 mx-4 bg-white rounded-md shadow-lg" @click="toWorkDetail">
    <div
      class="flex flex-col justify-center text-center w-10 h-10 rounded-full shadow-md shadow-blue-400"
    >
      <uni-icons type="star" size="30"></uni-icons>
    </div>
    <div class="flex flex-col ml-4">
      <view class="left-0 text-lg">{{ props.item.title }}</view>
      <view class="left-0">{{ props.item.description }}</view>
      <div class="flex justify-start">
        <uni-icons type="circle" size="15" color="#9CA3AF"></uni-icons>
        <view class="text-gray-400 ml-1">{{ props.item.time }}</view>
      </div>
    </div>
    <div class="flex justify-end ml-44">
      <uni-icons type="forward" size="20" color="#9CA3AF"></uni-icons>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { workItem } from '@/models'

const props = defineProps<{
  item: workItem
}>()

function toWorkDetail() {
  uni.navigateTo({ url: '/pages/work/detail/index?id=' + props.item.id })
}
</script>