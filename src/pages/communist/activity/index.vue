<template>
  <view class="flex flex-col g_p_10">
    <uni-search-bar :value="state.value" placeholder="输入关键词搜索" @confirm="search"></uni-search-bar>
    <uni-popup ref="popup" type="bottom">
      <picker @change="change" :value="state.type" :range="state.types">
        <view>{{ state.types[state.type] }}</view>
      </picker>
    </uni-popup>
    <ActivityItem v-for="item in state.data" :key="item.id" :item="item" />
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import ActivityItem from '@/components/communist/ActivityItem.vue'
import type { activityItem } from '@/models'

type stateType = {
  visible: boolean,
  type: number,
  types: string[]
  value: string,
  data: activityItem[]
}

const popup = ref()
const state: stateType = reactive({
  visible: false,
  type: 0,
  types: ['t1', 't2'],
  value: '',
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

function open() {
  popup.value.open()
}

function change() {
  console.log(state.types[state.type])
}

function search() {
  console.log(state.value)
}
</script>
