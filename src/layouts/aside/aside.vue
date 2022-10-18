<template>
  <a-menu v-model:selectedKeys="selectedKeys2" mode="inline" :style="{ height: '100%', borderRight: 0 }">
    <a-menu-item key="1" @click="router.push('/dashboard')">
      <template #icon>
        <PieChartOutlined />
      </template>
      <span>DashBoard</span>
    </a-menu-item>
    <a-menu-item key="2" @click="router.push('/apilist')">
      <span>接口列表</span>
    </a-menu-item>
  </a-menu>
</template>

<script setup lang="ts">
import { PieChartOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const selectedKeys2 = ref<string[]>(['1'])
</script>

<style lang="less" scoped>
</style>