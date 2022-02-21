<template>
  <view class="flex flex-col g_box">
    <ActivityInfo :isParticipant="state.isParticipant" :data="state.data" />
    <view class="g_text_30 g_mt_15">精彩影集</view>
    <ImageList :images="state.data.images" />
  </view>
  <view class="flex flex-col g_box">
    <view class="g_text_30 g_mt_15">精彩视频</view>
    <view class="flex justify-center g_pt_15">
      <video :src="state.data.video1" class="video"></video>
      <video :src="state.data.video2" class="g_ml_20 video"></video>
    </view>
  </view>
  <view class="g_box">
    <view class="g_text_35 g_mt_15 g_mb_15">全部评论</view>
    <CommentList :data="state.comments" />
  </view>
  <view class="flex bg-gray-100 g_p_10 g_mt_15">
    <input class="my-auto bg-white g_input g_ml_20" :value="state.input" placeholder="想对你说些什么" />
    <view class="my-auto g_text_25 g_ml_20">发表</view>
    <uni-icons type="hand-up-filled" size="25" color="#9CA3AF" class="my-auto g_ml_15"></uni-icons>
    <view class="my-auto text-gray-400">0</view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import ActivityInfo from '@/components/common/ActivityInfo.vue'
import ImageList from '@/components/common/ImageList.vue'
import CommentList from '@/components/common/CommentList.vue'
import type { activityItem, commentItem } from '@/models'

interface shareActivityItem extends activityItem {
  video1: string,
  video2: string
}

type stateType = {
  isParticipant: number,
  data: shareActivityItem,
  comments: commentItem[],
  input: string
}

const state: stateType = reactive({
  isParticipant: 1,
  data: {
    id: 0,
    title: 'xxxx',
    type: 'xxx',
    status: 0,
    startTime: 'xxxx-xx-xx',
    endTime: 'xxxx-xx-xx',
    location: 'xxxxxxx',
    total: 40,
    restrict: 50,
    content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    images: [
      'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
      'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
      'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg'
    ],
    video1: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
    video2: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4'
  },
  comments: [{
    id: 1,
    userId: 1,
    name: 'xxx',
    avatar: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
    content: 'xxxxxxxx',
    like: 50,
    time: 'xxxx-xx-xx',
    children: [{
      id: 2,
      userId: 1,
      name: 'xxx',
      avatar: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
      content: 'xxxxxxxx',
      like: 50,
      time: 'xxxx-xx-xx',
    }, {
      id: 3,
      userId: 1,
      name: 'xxx',
      avatar: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
      content: 'xxxxxxxx',
      like: 50,
      time: 'xxxx-xx-xx',
    }]
  }, {
    id: 4,
    userId: 1,
    name: 'xxx',
    avatar: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
    content: 'xxxxxxxx',
    like: 50,
    time: 'xxxx-xx-xx',
  }],
  input: ''
})

onLoad(option => {
  console.log(option.id)
})
</script>

<style scoped>
.video {
  width: 320rpx;
  height: 200rpx;
}
</style>
