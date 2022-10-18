<template>
  <i :class="['iconfont', `icon-${props.icon}`]" :style="props.style"></i>
</template>

<script setup lang="ts">
  const props = defineProps({
    icon: {
      type: String,
      required: true
    },
    style: {
      type: Object,
      default: () => ({})
    }
  })
</script>