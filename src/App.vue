<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log("App Launch")
})
onShow(() => {
  console.log("App Show")
})
onHide(() => {
  console.log("App Hide")
})
</script>

<style>
.base_title {
  font-size: 45rpx;
}

.base_head {
  font-size: 35rpx;
}

.base_p {
  padding: 20rpx;
}

.base_mt {
  margin-top: 10rpx;
}

.base_ml {
  margin-left: 20rpx;
}

.base_item {
  width: 680rpx;
  height: 200rpx;
  padding: 10rpx;
  margin-top: 15rpx;
  @apply flex mx-auto bg-white shadow-lg;
}

.base_icon {
  width: 80rpx;
  height: 80rpx;
  @apply flex mx-auto rounded-full shadow-md shadow-blue-400;
}

.base_info {
  font-size: 25rpx;
  margin-top: 15rpx;
  @apply text-gray-400;
}
</style>
