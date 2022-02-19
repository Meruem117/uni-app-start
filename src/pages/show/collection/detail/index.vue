<template>
  <view class="flex flex-col g_box">
    <view class="text-center g_text_45 g_mt_15">{{ state.data.title }}</view>
    <view class="text-center text-gray-400 g_mt_15">发布日期: {{ state.data.time }}</view>
    <swiper class="w-full g_mt_15" indicator-dots="true">
      <swiper-item
        v-for="(image, index) in state.data.images"
        :key="index"
        class="flex justify-center"
      >
        <image class="image" :src="image" />
      </swiper-item>
    </swiper>
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
import CommentList from '@/components/common/CommentList.vue'
import type { collectionItem, commentItem } from '@/models'

type stateType = {
  data: collectionItem,
  comments: commentItem[],
  input: string
}

const state: stateType = reactive({
  data: {
    id: 0,
    title: 'xxxx',
    time: 'xxxx-xx-xx',
    images: [
      'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
      'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
      'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg'
    ]
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
.image {
  width: 640rpx;
  height: 560rpx;
}
</style>
