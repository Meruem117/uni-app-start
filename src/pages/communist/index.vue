<template>
  <view class="flex flex-col g_box g_mt_15">
    <view class="g_jump_full">Brand</view>
    <view class="flex">
      <view class="g_jump_half" @click="toActivity">Activity</view>
      <view class="g_jump_half g_ml_15">Study</view>
    </view>
    <view class="flex">
      <view class="g_jump_half" @click="toFriend">Friend</view>
      <view class="g_jump_half g_ml_15">Map</view>
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
