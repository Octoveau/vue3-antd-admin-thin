<template>
  <component :is="antdIcon" />
</template>


<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: String,
    default: ''
  }
})

const antdIcon = computed(() => unifiedAntdIconName(props.icon))


/*
* @description antd图标名称统一规范
*/
const unifiedAntdIconName = (iconName: string): string => {
  // 当存在短横线时
  if (iconName.includes('-')) {
    let icon = ''
    let iconNameArr = iconName.split('-').map(item => {
      let str = ''
      const characters = [...item]
      characters[0] = characters[0].toLocaleUpperCase()
      str = characters.join('')
      return str
    })

    iconNameArr.forEach(item => {
      icon += item
    })

    return icon
  }

  return iconName
}

</script>