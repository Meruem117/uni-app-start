<template>
  <view class="flex flex-col base_p">
    <view class="text-center base_title base_mt">{{ state.data.name }}</view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { peopleItem } from '@/models'

const state: { data: peopleItem } = reactive({
  data: {
    id: 0,
    name: 'xxx',
    description: 'xxxxxxxxxxxxxx',
    job: 'xxxx',
    title: 'xxxx',
    images: [],
    video: ''
  }
})

onLoad(option => {
  console.log(option.id)
})
</script>
