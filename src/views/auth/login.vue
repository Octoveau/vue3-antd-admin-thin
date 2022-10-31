<template>
  <div>
    <h1>思聪永远的神，给么你</h1>

    <a-button type="primary" @click="gotoDashBoard">跳转</a-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const gotoDashBoard = () => {
  router.push({
    name: 'DashBoard'
  });
};
</script>

<style scoped></style>
