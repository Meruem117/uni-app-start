<template>
  <view class="flex flex-col base_p">
    <view class="text-center base_title">党建联盟简介</view>
    <view class="base_mt">{{ state.content }}</view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const state: { content: string } = reactive({
  content: 'xxxxxxxxxxxxxxxxxxxxxxxxx'
})
</script>
