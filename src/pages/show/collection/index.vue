<template>
  <view class="flex flex-col base_p">
    <uni-search-bar :value="state.value" placeholder="输入关键词搜索" @confirm="search"></uni-search-bar>
    <collectionItemVue v-for="item in state.data" :key="item.id" :item="item" />
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import collectionItemVue from '@/components/show/collection-item.vue'
import type { collectionItem } from '@/models'

type stateType = {
  value: '',
  data: collectionItem[]
}

const state: stateType = reactive({
  value: '',
  data: [{
    id: 1,
    title: 'xxxx',
    time: 'xxxx-xx-xx',
    image: ''
  }, {
    id: 2,
    title: 'xxxx',
    time: 'xxxx-xx-xx',
    image: ''
  }]
})

function search() {
  console.log(state.value)
}
</script>
