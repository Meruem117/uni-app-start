<template>
  <view class="flex flex-col g_box">
    <ActivityInfo :isParticipant="state.isParticipant" :data="state.data" />
    <view v-if="state.isParticipant" class="g_mt_15">
      <view v-if="state.data.status === STATUS_TYPE.START">
        <button class="text-white bg-blue-400 g_text_30 base_button">我要打卡</button>
      </view>
      <view v-if="state.data.status === STATUS_TYPE.END">
        <view class="g_text_35 g_mt_15">精彩影集</view>
        <ImageList :images="state.data.images" />
      </view>
    </view>
    <view v-else>
      <button class="text-white bg-orange-400 g_text_30 base_button">我要报名</button>
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
import { STATUS_TYPE } from '@/constant'

type stateType = {
  isParticipant: number,
  data: activityItem,
  comments: commentItem[],
  input: string
}

const state: stateType = reactive({
  isParticipant: 1,
  data: {
    id: 0,
    title: 'xxxx',
    type: 'xxx',
    status: 1,
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
.base_button {
  width: 640rpx;
  height: 80rpx;
  font-size: 35rpx;
  margin-top: 40rpx;
  border-radius: 80rpx;
}
</style>
