<template>
  <view class="flex flex-col g_p_10">
    <uni-search-bar :value="state.value" placeholder="输入关键词搜索" @confirm="search"></uni-search-bar>
    <activityItemVue v-for="item in state.data" :key="item.id" :item="item" />
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import activityItemVue from '@/components/share/activity-item.vue'
import type { activityItem } from '@/models'

type stateType = {
  value: '',
  type: '',
  data: activityItem[]
}

const state: stateType = reactive({
  value: '',
  type: '',
  data: [{
    id: 1,
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
  }, {
    id: 2,
    title: 'xxxx',
    type: 'xxx',
    status: 1,
    startTime: 'xxxx-xx-xx',
    endTime: 'xxxx-xx-xx',
    location: 'xxxxxxx',
    total: 40,
    restrict: 50,
    content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    images: []
  }, {
    id: 3,
    title: 'xxxx',
    type: 'xxx',
    status: 2,
    startTime: 'xxxx-xx-xx',
    endTime: 'xxxx-xx-xx',
    location: 'xxxxxxx',
    total: 40,
    restrict: 50,
    content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    images: []
  }]
})

function search() {
  console.log(state.value)
}
</script>
