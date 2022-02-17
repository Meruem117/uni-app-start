<template>
    <view class="flex flex-col g_box">
        <view v-for="item in props.data" :key="item.id" class="flex flex-col g_mt_20 g_mb_15">
            <!-- main -->
            <view class="flex">
                <image class="avatar" :src="item.avatar" />
                <view class="my-auto g_text_30 g_ml_15" style="width: 450rpx;">{{ item.name }}</view>
                <uni-icons type="hand-up" size="25" class="my-auto"></uni-icons>
                <view class="my-auto text-gray-500 g_text_25">{{ item.like }}赞</view>
            </view>
            <view class="g_text_30 g_mt_15 content">{{ item.content }}</view>
            <!-- sub -->
            <view
                v-if="item.children"
                class="flex flex-col mx-auto rounded-md bg-gray-100 g_p_10 g_mt_15"
                style="width: 600rpx;"
            >
                <view
                    v-for="subItem in item.children"
                    :key="subItem.id"
                    class="flex flex-col g_mt_15"
                >
                    <view class="flex">
                        <image class="subavatar g_ml_15" :src="subItem.avatar" />
                        <view class="my-auto text-gray-400 g_text_30 g_ml_15">{{ subItem.name }}</view>
                    </view>
                    <view class="g_text_25 subcontent">{{ subItem.content }}</view>
                </view>
            </view>
            <!-- footer -->
            <view class="flex g_mt_15">
                <view class="g_text_25 time">{{ item.time }}</view>
                <view class="text-gray-400 g_text_25">回复</view>
                <view class="text-gray-400 g_text_25 g_ml_20">查看更多</view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import type { commentItem } from '@/models'

const props = defineProps<{ data: commentItem[] }>()
</script>

<style scoped>
.avatar {
    width: 70rpx;
    height: 70rpx;
    border-radius: 100%;
}

.subavatar {
    width: 60rpx;
    height: 60rpx;
    border-radius: 100%;
}

.content {
    margin-left: 90rpx;
}

.subcontent {
    margin-left: 80rpx;
}

.time {
    width: 450rpx;
    margin-left: 30rpx;
}
</style>
