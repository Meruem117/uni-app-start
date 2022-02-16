<template>
  <view class="g_item" @click="toPeopleDetail">
    <view class="g_p_10" style="width: 120rpx;">
      <view class="g_icon">
        <uni-icons type="person-filled" size="30" class="m-auto"></uni-icons>
      </view>
    </view>
    <view class="flex flex-col g_p_10" style="width: 520rpx;">
      <view class="g_text_35">{{ props.item.name }}</view>
      <view class="g_mt_10 g_text_30">{{ props.item.description }}</view>
      <view class="g_mt_10 g_text_30">{{ props.item.job }}</view>
    </view>
    <view class="flex justify-end g_p_10" style="width: 40rpx;">
      <uni-icons type="forward" size="20" color="#9CA3AF"></uni-icons>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { peopleItem } from '@/models'

const props = defineProps<{ item: peopleItem }>()

function toPeopleDetail() {
  uni.navigateTo({ url: '/pages/show/people/detail/index?id=' + props.item.id })
}
</script>
