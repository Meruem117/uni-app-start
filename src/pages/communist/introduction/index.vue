<template>
  <view class="flex flex-col g_box g_mt_15">
    <view class="text-center g_text_45">Introduction</view>
    <view class="g_text_25 g_mt_15 g_p_10">{{ state.content }}</view>
    <image
      class="mx-auto image g_mt_15"
      src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"
    />
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const state: { content: string } = reactive({
  content: 'xxxxxxxxxxxxxxxxxxxxxxxxx'
})
</script>

<style scoped>
.image {
  width: 640rpx;
  height: 420rpx;
}
</style>
