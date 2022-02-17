<template>
  <view class="flex flex-col g_box g_mt_15">
    <view class="text-center g_text_45">党建联盟简介</view>
    <view class="g_mt_15 g_p_10">{{ state.content }}</view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const state: { content: string } = reactive({
  content: 'xxxxxxxxxxxxxxxxxxxxxxxxx'
})
</script>
