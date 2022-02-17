<template>
  <view class="flex flex-col g_box">
    <baseInfoVue :isParticipant="state.isParticipant" :data="state.data" />
    <view class="g_text_30 g_mt_15">精彩影集</view>
    <imageListVue :images="state.data.images" />
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import baseInfoVue from '@/components/common/base-info.vue'
import imageListVue from '@/components/common/image-list.vue'
import type { activityItem } from '@/models'

type stateType = {
  isParticipant: number,
  data: activityItem
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
    images: []
  }
})

onLoad(option => {
  console.log(option.id)
})
</script>
