<template>
    <uni-list>
        <uni-list :border="true">
            <!-- 显示圆形头像 -->
            <uni-list-chat
                :avatar-circle="true"
                title="uni-app"
                avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
                note="您收到一条新的消息"
                time="2020-02-02 20:20"
            ></uni-list-chat>
            <!-- 右侧带角标 -->
            <uni-list-chat
                title="uni-app"
                avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
                note="您收到一条新的消息"
                time="2020-02-02 20:20"
                badge-text="12"
            ></uni-list-chat>
            <!-- 头像显示圆点 -->
            <uni-list-chat
                title="uni-app"
                avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
                note="您收到一条新的消息"
                time="2020-02-02 20:20"
                badge-positon="left"
                badge-text="dot"
            ></uni-list-chat>
            <!-- 头像显示角标 -->
            <uni-list-chat
                title="uni-app"
                avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
                note="您收到一条新的消息"
                time="2020-02-02 20:20"
                badge-positon="left"
                badge-text="99"
            ></uni-list-chat>
        </uni-list>
    </uni-list>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>
