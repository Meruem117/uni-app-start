<template>
  <view class="flex g_box border_bottom">
    <uni-icons type="home-filled" size="25"></uni-icons>
    <view class="flex flex-col g_ml_15">
      <view class="g_text_30">{{ props.item.name }}</view>
      <view class="g_info">服务: {{ props.item.service }}</view>
      <view class="flex">
        <view class="g_info">电话:&nbsp;</view>
        <view class="flex flex-col">
          <view v-for="(tel, index) in props.item.tels" :key="index" class="flex">
            <view class="g_info" style="width: 480rpx;">{{ tel }}</view>
            <uni-icons type="phone-filled" size="20"></uni-icons>
          </view>
        </view>
      </view>
      <view class="g_info">地址: {{ props.item.location }}</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { contactItem } from '@/models'

const props = defineProps<{ item: contactItem }>()
</script>

<style scoped>
.border_bottom {
  @apply border-b border-solid border-gray-100;
  @apply border-t-transparent border-l-transparent border-r-transparent;
}
</style>
