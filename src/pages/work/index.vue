<template>
  <div class="flex flex-col">
    <uni-search-bar :value="state.value" placeholder="输入关键词搜索" @confirm="search"></uni-search-bar>
    <workListItemVue v-for="item in state.data" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import workListItemVue from '@/components/work/work-list-item.vue'

const state = reactive({
  value: '',
  data: [
    {
      id: 1,
      title: "xxxx",
      description: "xxxxxxxx",
      time: "xxxx-xx-xx",
    },
    {
      id: 2,
      title: "xxxx",
      description: "xxxxxxxx",
      time: "xxxx-xx-xx",
    },
    {
      id: 3,
      title: "xxxx",
      description: "xxxxxxxx",
      time: "xxxx-xx-xx",
    },
  ]
})

function search() {
  console.log(state.value)
}
</script>