<template>
  <view class="flex flex-col g_p_10">
    <uni-search-bar :value="state.value" placeholder="输入关键词搜索" @confirm="search"></uni-search-bar>
    <listItemVue
      v-for="item in state.data"
      :key="item.id"
      icon="flag-filled"
      :title="item.title"
      :link="`/pages/show/collection/detail/index?id=${item.id}`"
    >
      <template #body>
        <view class="text-gray-400 g_mt_10 g_text_30">活动时间: {{ item.time }}</view>
      </template>
    </listItemVue>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import listItemVue from '@/components/common/list-item.vue'
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
