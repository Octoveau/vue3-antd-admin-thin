<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
  ></div>
  <svg v-else :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts" setup>
import { validateExternal } from '@/utils/validate'
const props = defineProps({
  iconClass: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  }
})

const isExternal = computed(() => validateExternal(props.iconClass))

const iconName = computed(() => `#icon-${props.iconClass}`)

const svgClass = computed(() =>
  props.className ? `svg-icon ${props.className}` : `svg-icon`
)

const styleExternalIcon = computed(() => ({
  mask: `url(${props.iconClass}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.iconClass}) no-repeat 50% 50%`
}))
</script>