<template>
  <view class="flex flex-col g_box g_mt_15">
    <view class="g_jump_full">党建品牌</view>
    <view class="flex">
      <view class="g_jump_half" @click="toActivity">党建活动</view>
      <view class="g_jump_half g_ml_15">学而时习</view>
    </view>
    <view class="flex">
      <view class="g_jump_half" @click="toFriend">党建朋友圈</view>
      <view class="g_jump_half g_ml_15">党建地图</view>
    </view>
  </view>
</template>

<script setup lang="ts">
function toActivity() {
  uni.navigateTo({ url: '/pages/communist/activity/index' })
}

function toFriend() {
  uni.navigateTo({ url: '/pages/communist/friend/index' })
}
</script>
