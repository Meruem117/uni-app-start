<template>
  <view class="flex flex-col g_box">
    <view class="text-center g_text_45 g_mt_15">{{ state.data.name }}</view>
    <view
      class="text-center border border-solid border-gray-500 bg-red-100 shadow-lg shadow-red-100 g_text_30 g_p_10 g_mt_20"
    >荣誉称号: {{ state.data.title }}</view>
    <video :src="state.data.video" class="video g_mt_20"></video>
    <view class="g_text_25 g_mt_15">{{ state.data.description }}</view>
  </view>
  <view class="flex flex-col g_box">
    <view class="g_text_30 g_mt_15">相关图片</view>
    <ImageList :images="state.data.images" />
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import ImageList from '@/components/common/ImageList.vue'
import type { peopleItem } from '@/models'

const state: { data: peopleItem } = reactive({
  data: {
    id: 0,
    name: 'xxx',
    description: 'xxxxxxxxxxxxxx',
    job: 'xxxx',
    title: 'xxxx',
    images: [
      'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
      'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
      'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg'
    ],
    video: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4'
  }
})

onLoad(option => {
  console.log(option.id)
})
</script>

<style scoped>
.video {
  width: 680rpx;
  height: 400rpx;
}
</style>
