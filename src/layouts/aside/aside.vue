<template>
  <MenuComp :menu-list="menuList" />
</template>

<script setup lang="ts">
import MenuComp from '@/components/Menu/menu.vue'
import { menuList } from '@/mock/menu.mock'
</script>

<style lang="less" scoped>
</style>