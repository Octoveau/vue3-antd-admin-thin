<template>
  <a-spin tip="正在退出登录..." :spinning="spinning">
    <section class="section"></section>
  </a-spin>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const spinning = ref<Boolean>(true);
const timer = ref();
const router = useRouter();
onMounted(() => {
  timer.value = setTimeout(() => {
    router.push({
      name: 'Login'
    });
  }, 1500);
});
onBeforeUnmount(() => {
  clearTimeout(timer.value);
});
</script>

<style scoped lang="less">
.section {
  width: 100vw;
  height: 100vh;
  background-color: grey;
}
::v-deep(.ant-spin) {
  max-height: 100vh !important;
}
</style>
