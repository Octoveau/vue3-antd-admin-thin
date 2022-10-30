<template>
  <template v-for="(item, index) in menuList" :key="index">
    <a-sub-menu
      v-if="item.children && item.children.length > 0"
      :key="item.menu_name"
      :index="item.menu_name"
    >
      <template #icon>
        <component :is="$antIcons[item.menu_icon]" />
      </template>
      <template #title>
        <span>{{ item.menu_name }}</span>
      </template>
      <MenuItem :menu-list="item.children" />
    </a-sub-menu>
    <a-menu-item v-else :index="item.menu_url ? item.menu_url : ''" :key="item.menu_url" @click="router.push(item.menu_url)">
      <template #icon>
        <i :class="item.menu_icon ? item.menu_icon : 'no-icon'"></i>
      </template>
      <span>{{ item.menu_name }}</span>
    </a-menu-item>
  </template>
</template>

<script lang="ts">
import { MailOutlined } from '@ant-design/icons-vue';
import { PropType } from 'vue';
import { useRouter } from 'vue-router'
import { MenuListInterface } from './menu.interface'
export default {
  name: 'MenuItem',
  components: {MailOutlined},
  props: {
    menuList: {
      type: Array as PropType<MenuListInterface[]>,
      default: () => []
    }
  },
  setup () {
    const router = useRouter()

    return {
      router
    }
  }
}
</script>