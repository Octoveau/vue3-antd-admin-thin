// ICON.js
import { createVNode, VNode } from 'vue'
import * as $Icon from '@ant-design/icons-vue'

export const Icon = (props: { icon: any; }) => {
  return ((iconName: string): VNode => {
    let antdIcon = ''
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
      antdIcon = icon
    } else {
      antdIcon = iconName
    }
    return createVNode($Icon[antdIcon as keyof typeof $Icon]);
  })(props.icon)
};