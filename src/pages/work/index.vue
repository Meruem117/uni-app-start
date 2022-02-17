<template>
  <view class="flex flex-col g_p_10">
    <uni-search-bar :value="state.value" placeholder="输入关键词搜索" @confirm="search"></uni-search-bar>
    <listItemVue
      v-for="item in state.data"
      :key="item.id"
      icon="star"
      :title="item.title"
      :link="`/pages/work/detail/index?id=${item.id}`"
    >
      <template #body>
        <view class="g_mt_10 g_text_30">{{ item.description }}</view>
        <view class="flex justify-start g_mt_10">
          <uni-icons type="circle" size="15" color="#9CA3AF"></uni-icons>
          <view class="text-gray-400 g_ml_15 g_text_30">{{ item.time }}</view>
        </view>
      </template>
    </listItemVue>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import listItemVue from '@/components/common/list-item.vue'
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