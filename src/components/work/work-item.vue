<template>
  <view class="base_item" @click="toWorkDetail">
    <view class="base_p" style="width: 120rpx;">
      <view class="base_icon">
        <uni-icons type="star" size="30" class="m-auto"></uni-icons>
      </view>
    </view>
    <view class="flex flex-col base_p" style="width: 520rpx;">
      <view class="base_head">{{ props.item.title }}</view>
      <view class="base_mt">{{ props.item.description }}</view>
      <view class="flex justify-start base_mt">
        <uni-icons type="circle" size="15" color="#9CA3AF"></uni-icons>
        <view class="text-gray-400 base_ml">{{ props.item.time }}</view>
      </view>
    </view>
    <view class="flex justify-end base_p" style="width: 40rpx;">
      <uni-icons type="forward" size="20" color="#9CA3AF"></uni-icons>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { workItem } from '@/models'

const props = defineProps<{ item: workItem }>()

function toWorkDetail() {
  uni.navigateTo({ url: '/pages/work/detail/index?id=' + props.item.id })
}
</script>
