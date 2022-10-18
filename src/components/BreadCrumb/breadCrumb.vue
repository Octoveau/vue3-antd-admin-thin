<template>
  <div class="bread-crumb-container">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item, index) in breadCrumbList" :key="index">
        <span v-if="index == breadCrumbList.length - 1" class="no-redirect">
          {{ item.meta.title }}
        </span>
        <a @click.prevent="handleJumpLink(item)" v-else>
          {{ item.meta.title }}
        </a>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
type Route = Array<{ path?: string; meta?: any }>
const breadCrumbList = ref<Route>([])

watch(route, () => {
  getBreadCrumbList()
})

onMounted(() => {
  getBreadCrumbList()
})

const getBreadCrumbList = () => {
  let routeList = route.matched.filter(
    (item) => item.meta && item.meta.title
  ) as Route

  const first = routeList[0]

  if (!isDashBoard(first)) {
    routeList = [{ path: '/dashboard', meta: { title: 'DashBoard' } }].concat(routeList as any)
  }

  breadCrumbList.value = routeList.filter((item) => {
    return item.meta && item.meta.title && item.meta.breadcrumb !== false
  })
}

const isDashBoard = (route: any) => {
  const name = route && route.name
  if (!name) {
    return false
  }
  return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
}

const handleJumpLink = (item: any) => {
  router.push(item.path)
}
</script>

<style lang="less" scoped>
.bread-crumb-container {
  padding: 12px 0;
}
</style>