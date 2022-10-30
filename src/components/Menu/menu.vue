<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    mode="inline"
  >
    <menu-item :menuList="props.menuList" />
  </a-menu>
</template>

<script lang="ts" setup>
import MenuItem from './menuItem.vue'
import { PropType } from 'vue';
import { MenuListInterface } from './menu.interface'
import { useRoute } from 'vue-router';
const $route = useRoute()
const props = defineProps({
  menuList: {
    type: Array as PropType<MenuListInterface[]>,
    default: () => []
  }
})
const selectedKeys = computed(() => {
  const { path } = $route
  if (path) {
    return [path]
  }

  return ['DashBoard']
})
</script>