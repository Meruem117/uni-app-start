<template>
    <view class="flex flex-col mx-auto base_p" style="width: 695rpx;">
        <view class="base_title">{{ state.data.title }}</view>
        <view class="base_info flex">
            活动类型:&nbsp;
            <view class="text-orange-600">{{ state.data.type }}</view>
        </view>
        <view class="base_info">活动时间: {{ state.data.startTime }} ~ {{ state.data.endTime }}</view>
        <view class="base_info">活动地址: {{ state.data.title }}</view>
        <view class="base_info">活动状态: {{ ACTIVITY_STATUS[state.data.status].text }}</view>
        <view class="flex">
            <view class="base_info" style="width: 225rpx;">已报人数: {{ state.data.total }}人</view>
            <view class="base_info" style="width: 225rpx;">限额人数: {{ state.data.restrict }}人</view>
            <button
                size="mini"
                class="text-white base_ml"
                :class="IS_PARTICIPANT[state.isParticipant].color"
                style="font-size: 25rpx;"
            >{{ IS_PARTICIPANT[state.isParticipant].text }}</button>
        </view>
        <view class="base_mt">{{ state.data.content }}</view>
        <view v-if="state.isParticipant" class="base_mt">
            <view v-if="state.data.status === STATUS_TYPE.START">
                <button class="text-white bg-blue-400 base_button">我要打卡</button>
            </view>
            <view v-if="state.data.status === STATUS_TYPE.END">
                <view class="base_head base_mt">精彩影集</view>
                <view class="flex justify-center base_mt">
                    <image style="width:215rpx; height:160rpx;" :src="state.src" class="rounded-lg"></image>
                    <image style="width:215rpx; height:160rpx;" :src="state.src" class="rounded-lg base_ml"></image>
                    <image style="width:215rpx; height:160rpx;" :src="state.src" class="rounded-lg base_ml"></image>
                </view>
            </view>
        </view>
        <view v-else>
            <button class="text-white bg-orange-400 base_button">我要报名</button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { activityItem } from '@/models'
import { ACTIVITY_STATUS, STATUS_TYPE, IS_PARTICIPANT } from '@/constant'

type stateType = {
    isParticipant: number,
    data: activityItem,
    src: string
}

const state: stateType = reactive({
    isParticipant: 1,
    data: {
        id: 0,
        title: 'xxxx',
        type: 'xxx',
        status: 2,
        startTime: 'xxxx-xx-xx',
        endTime: 'xxxx-xx-xx',
        location: 'xxxxxxx',
        total: 40,
        restrict: 50,
        content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        images: []
    },
    src: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg'
})

onLoad(option => {
    console.log(option.id)
})
</script>

<style scoped>
.base_button {
    width: 640rpx;
    height: 80rpx;
    font-size: 35rpx;
    margin-top: 40rpx;
    @apply rounded-3xl;
}
</style>
