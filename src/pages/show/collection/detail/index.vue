<template>
  <view class="flex flex-col g_p_10">
    <view class="text-center g_text_45 g_mt_15">{{ state.data.title }}</view>
    <view class="text-center text-gray-400 g_mt_15">发布日期: {{ state.data.time }}</view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { collectionItem } from '@/models'

const state: { data: collectionItem } = reactive({
  data: {
    id: 0,
    title: 'xxxx',
    time: 'xxxx-xx-xx',
    image: ''
  }
})

onLoad(option => {
  console.log(option.id)
})
</script>
