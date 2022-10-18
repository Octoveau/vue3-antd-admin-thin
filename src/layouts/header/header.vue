<template>
  <a-row>
    <a-col :span="6">
      <div class="logo-title">
        <span>Vue3-Template-Portal</span>
      </div>
    </a-col>
    <a-col :span="12" />
    <a-col :span="6">
      <div class="text-right">
        <a-space>
          <div class="dropdown-container">
            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent>
                <span style="padding-right: 5px">{{ userName }}</span>
                <DownOutlined />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item key="0">
                    <span @click="handleJumpToPersonal">个人中心</span>
                  </a-menu-item>
                  <a-menu-item key="1">
                    <span @click="handleLogout">退出登录</span>
                  </a-menu-item>
                  <a-menu-divider />
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </a-space>
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { DownOutlined } from '@ant-design/icons-vue'
import { Ref } from 'vue'

const userName: Ref<string> = ref<string>('Administator')

// 个人中心跳转
const handleJumpToPersonal = () => {
  console.log('跳转')
}

// 退出登录
const handleLogout = () => {
  console.log('退出登录')
}
</script>

<style lang="less" scoped>
.logo-title {
  color: #000000;
  font-weight: bold;
  font-size: 18px;
}

.ant-row {
  height: 100%;
}

.logout {
  ::v-deep(.ant-dropdown-link) {
    color: #000000;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>