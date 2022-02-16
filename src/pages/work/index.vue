<template>
  <view class="flex flex-col base_p">
    <uni-search-bar :value="state.value" placeholder="输入关键词搜索" @confirm="search"></uni-search-bar>
    <workItemVue v-for="item in state.data" :key="item.id" :item="item" />
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import workItemVue from '@/components/work/work-item.vue'
import type { workItem } from '@/models'

type stateType = {
  value: '',
  data: workItem[]
}

const state: stateType = reactive({
  value: '',
  data: [{
    id: 1,
    title: "xxxx",
    description: "xxxxxxxx",
    time: "xxxx-xx-xx",
  }, {
    id: 2,
    title: "xxxx",
    description: "xxxxxxxx",
    time: "xxxx-xx-xx",
  }, {
    id: 3,
    title: "xxxx",
    description: "xxxxxxxx",
    time: "xxxx-xx-xx",
  }]
})

function search() {
  console.log(state.value)
}
</script>