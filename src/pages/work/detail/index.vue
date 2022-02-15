<template>
  <div>{{ data.id }}</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { workItem } from '@/models'

const data: workItem = reactive({
  id: 0,
  title: 'xxxx',
  description: 'xxxxxxxx',
  time: 'xxxx-xx-xx'
})

onLoad(option => {
  console.log(option.id)
})
</script>