<template>
  <view class="flex flex-col mx-auto shadow-md base_p" style="width: 730rpx;">
    <view class="flex bg-gradient-to-r from-blue-200 to-white base_p">
      <uni-icons type="home-filled" size="30"></uni-icons>
      <view class="base_ml">便民热线</view>
    </view>
    <view class="flex flex-col">
      <contactItemVue v-for="item in state.data" :key="item.id" :item="item" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import contactItemVue from '@/components/share/contact-item.vue'
import type { contactItem } from '@/models'

type stateType = {
  data: contactItem[],
  value: ''
}

const state: stateType = reactive({
  data: [{
    id: 1,
    name: 'xxx',
    service: 'xxxxx',
    tels: ['xx-xxxxxxxx', 'xx-xxxxxxxx'],
    location: 'xxxxxxxx'
  }, {
    id: 2,
    name: 'xxx',
    service: 'xxxxx',
    tels: ['xx-xxxxxxxx'],
    location: 'xxxxxxxx'
  }, {
    id: 3,
    name: 'xxx',
    service: 'xxxxx',
    tels: ['xx-xxxxxxxx'],
    location: 'xxxxxxxx'
  }],
  value: ''
})
</script>
