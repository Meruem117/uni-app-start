<template>
  <view class="flex flex-col base_p">
    <view class="text-center base_title base_mt">{{ state.data.title }}</view>
    <view class="text-center text-gray-400 base_mt">发布日期: {{ state.data.time }}</view>
    <view class="base_mt">{{ state.data.description }}</view>
    <view class="base_title">相关图片</view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { workItem } from '@/models'

const state: { data: workItem } = reactive({
  data: {
    id: 0,
    title: 'xxxx',
    description: 'xxxxxxxx',
    time: 'xxxx-xx-xx'
  }
})

onLoad(option => {
  console.log(option.id)
})
</script>