<template>
  <view class="base_item" @click="toPeopleDetail">
    <view class="base_p" style="width: 120rpx;">
      <view class="base_icon">
        <uni-icons type="person-filled" size="30" class="m-auto"></uni-icons>
      </view>
    </view>
    <view class="flex flex-col base_p" style="width: 520rpx;">
      <view class="base_head">{{ props.item.name }}</view>
      <view class="base_mt">{{ props.item.description }}</view>
      <view class="base_mt">{{ props.item.job }}</view>
    </view>
    <view class="flex justify-end base_p" style="width: 40rpx;">
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
