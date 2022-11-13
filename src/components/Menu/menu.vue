<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    @openChange="handleOpenChange"
  >
    <menu-item :menuList="props.menuList" />
  </a-menu>
</template>

<script lang="ts" setup>
import MenuItem from './menuItem.vue';
import { PropType } from 'vue';
import { MenuListInterface } from './menu.interface';
import { useRoute } from 'vue-router';
const $route = useRoute();
const props = defineProps({
  menuList: {
    type: Array as PropType<MenuListInterface[]>,
    default: () => []
  }
});

const openKeys = ref<any>();

onMounted(() => {
  openKeys.value = [getOpenKey(props.menuList)?.menu_name];
});

const selectedKeys = computed(() => {
  const { path } = $route;
  if (path) {
    return [path];
  }

  return ['DashBoard'];
});

const getOpenKey = (menuList: any) => {
  const { path } = $route;
  let fatherItem: any;
  for (let item of menuList) {
    if (item.menu_url === path) {
      return;
    }
    if (item.children && item.children.length) {
      fatherItem = item;
      getOpenKey(item.children);
    }
  }
  return fatherItem;
};

const handleOpenChange = (keys: string[]) => openKeys.value = keys.length !== 0 ? [keys[1]] : [''];
</script>