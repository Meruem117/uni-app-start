<template>
  <view class="flex flex-col base_p">
    <uni-search-bar :value="state.value" placeholder="输入关键词搜索" @confirm="search"></uni-search-bar>
    <peopleItemVue v-for="item in state.data" :key="item.id" :item="item" />
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import peopleItemVue from '@/components/show/people-item.vue'
import type { peopleItem } from '@/models'

type stateType = {
  value: '',
  data: peopleItem[]
}

const state: stateType = reactive({
  value: '',
  data: [{
    id: 1,
    name: 'xxx',
    description: "xxxxxxxx",
    job: 'xxxxxx',
    title: "xxxx",
    images: [],
    video: ''
  }, {
    id: 2,
    name: 'xxx',
    description: "xxxxxxxx",
    job: 'xxxxxx',
    title: "xxxx",
    images: [],
    video: ''
  }]
})

function search() {
  console.log(state.value)
}
</script>
