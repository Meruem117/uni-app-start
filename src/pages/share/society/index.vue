<template>
  <view class="flex flex-col shadow-md g_box g_mt_15">
    <view class="flex bg-gradient-to-r from-blue-200 to-white g_p_10">
      <uni-icons type="home-filled" size="25"></uni-icons>
      <view class="my-auto g_text_30 g_ml_15">便民热线</view>
    </view>
    <view class="flex flex-col">
      <contactItemVue v-for="item in state.data" :key="item.id" :item="item" />
    </view>
  </view>
  <view class="g_jump_full">事项上报</view>
  <view class="flex flex-col shadow-md g_box g_mt_15">
    <view class="flex bg-gradient-to-r from-blue-200 to-white g_p_10">
      <uni-icons type="home-filled" size="25"></uni-icons>
      <view class="my-auto g_text_30 g_ml_15" style="width: 480rpx;">你问我答</view>
      <view class="my-auto text-gray-400 g_text_25">查看更多</view>
    </view>
    <uni-search-bar :value="state.value" placeholder="输入关键词搜索" @confirm="search"></uni-search-bar>
    <commentListVue :data="state.comments" />
  </view>
  <view class="flex bg-gray-100 g_p_10 g_mt_15">
    <input class="my-auto bg-white input g_ml_20" :value="state.input" placeholder="想对你说些什么" />
    <uni-icons type="plus" size="25" class="my-auto g_ml_15"></uni-icons>
    <view class="my-auto g_text_25 g_ml_15">发表</view>
    <uni-icons type="hand-up-filled" size="25" color="#9CA3AF" class="my-auto g_ml_15"></uni-icons>
    <view class="my-auto text-gray-400">0</view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import contactItemVue from '@/components/share/contact-item.vue'
import commentListVue from '@/components/common/comment-list.vue'
import type { contactItem, commentItem } from '@/models'

type stateType = {
  data: contactItem[],
  value: string,
  comments: commentItem[],
  input: string
}

const state: stateType = reactive({
  data: [{
    id: 1,
    name: 'xxx',
    service: 'xxxxx',
    tels: ['xx-xxxxxxxx', 'xx-xxxxxxxx'],
    location: 'xxxxxxxx'
  }, {
    id: 2,
    name: 'xxx',
    service: 'xxxxx',
    tels: ['xx-xxxxxxxx'],
    location: 'xxxxxxxx'
  }, {
    id: 3,
    name: 'xxx',
    service: 'xxxxx',
    tels: ['xx-xxxxxxxx'],
    location: 'xxxxxxxx'
  }],
  value: '',
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

function search() {
  console.log(state.value)
}
</script>

<style scoped>
.input {
  width: 480rpx;
  height: 60rpx;
  border-radius: 80rpx;
  padding-left: 20rpx;
}
</style>
