<template>
  <view class="flex flex-col g_p_10">
    <uni-search-bar :value="state.value" placeholder="输入关键词搜索" @confirm="search"></uni-search-bar>
    <listItemVue
      v-for="item in state.data"
      :key="item.id"
      icon="person-filled"
      :title="item.name"
      :link="`/pages/show/people/detail/index?id=${item.id}`"
    >
      <template #body>
        <view class="g_mt_10 g_text_30">{{ item.description }}</view>
        <view class="g_mt_10 g_text_30">{{ item.job }}</view>
      </template>
    </listItemVue>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import listItemVue from '@/components/common/list-item.vue'
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
