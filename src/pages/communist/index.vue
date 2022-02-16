<template>
  <view class="flex flex-col mx-auto g_p_10" style="width: 695rpx;">
    <view class="base_jump" style="width: 675rpx;">党建品牌</view>
    <view class="flex w-full">
      <view class="base_jump" style="width: 325rpx;" @click="toActivity">党建活动</view>
      <view class="base_jump g_ml_15" style="width: 325rpx;">学而时习</view>
    </view>
    <view class="flex w-full">
      <view class="base_jump" style="width: 325rpx;" @click="toFriend">党建朋友圈</view>
      <view class="base_jump g_ml_15" style="width: 325rpx;">党建地图</view>
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

<style scoped>
.base_jump {
  height: 180rpx;
  margin-top: 15rpx;
  padding: 10rpx;
  @apply rounded-md shadow-md;
}
</style>
