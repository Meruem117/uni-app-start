<template>
  <view class="flex flex-col g_box">
    <view class="text-center g_text_45 g_mt_15">{{ state.data.title }}</view>
    <view class="text-center text-gray-400 g_mt_15">发布日期: {{ state.data.time }}</view>
    <view class="g_mt_15">{{ state.data.description }}</view>
    <view class="g_text_35 g_mt_15">相关图片</view>
    <imageListVue :images="state.data.images" />
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import imageListVue from '@/components/common/image-list.vue'
import type { workItem } from '@/models'

const state: { data: workItem } = reactive({
  data: {
    id: 0,
    title: 'xxxx',
    description: 'xxxxxxxx',
    time: 'xxxx-xx-xx',
    images: []
  }
})

onLoad(option => {
  console.log(option.id)
})
</script>