<template>
  <view class="flex flex-col g_p_10">
    <view class="flex bg-gray-100 text-sm text-gray-300 rounded g_p_10" style="margin: 20rpx;">
      <view class="g_ml_15" @click="open">活动类型</view>
      <uni-icons type="bottom" size="15" color="#D1D5DB"></uni-icons>
      <view class="g_ml_15">|</view>
      <input
        class="text-black g_ml_15"
        v-model="state.value"
        placeholder="输入关键词搜索"
        placeholder-class="text-sm text-gray-300"
        style="width: 450rpx;"
        @confirm="search"
      />
      <uni-icons type="search" size="20" color="#D1D5DB" class="my-auto" @click="search"></uni-icons>
    </view>
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
