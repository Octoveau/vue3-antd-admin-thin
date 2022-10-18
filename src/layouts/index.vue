<template>
  <a-layout>
    <a-layout-header>
      <header-comp />
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <aside-comp />
      </a-layout-sider>
      <a-layout-content>
        <content-comp />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import headerComp from "./header/header.vue"
import asideComp from './aside/aside.vue'
import contentComp from './content/content.vue'
</script>
