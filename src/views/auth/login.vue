<template>
  <div class="login-container">
    <div class="section">
      <div class="div-image">
        <a-image class="image" :src="logo" :preview="false" />
      </div>
      <div class="div-form">
        <a-form :model="loginFormData" class="login-form">
          <div class="title-container">
            <h3 class="title">Vue3 Template Portal 登录界面</h3>
          </div>
          <a-form-item v-bind="validateInfos.username">
            <a-input
              v-model:value.trim="loginFormData.username"
              placeholder="Please input your username"
              autocomplete="off"
            >
              <template #prefix>
                <Icon icon="user-outlined" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item v-bind="validateInfos.password">
            <a-input-password
              v-model:value.trim="loginFormData.password"
              placeholder="Please input your password"
              autocomplete="off"
            >
              <template #prefix>
                <Icon icon="lock-outlined" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item>
            <a-button
              :loading="loading"
              type="primary"
              style="width: 100%"
              @click="handleLogin"
            >
              <span>Submit</span>
            </a-button>
          </a-form-item>
          <div style="position: relative">
            <div class="tips">
              <span style="margin-right: 0.2rem">Username : admin</span>
              <span>Password : admin</span>
            </div>
          </div>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute, RouteLocationRaw } from 'vue-router';
import { Form, message } from 'ant-design-vue';
import { setUserInfo } from '@/utils/auth';
const useForm = Form.useForm;
interface LoginForm {
  username: string;
  password: string;
}
const router = useRouter();
const route = useRoute();
const redirectPath = ref<RouteLocationRaw>();
const loading = ref<boolean>(false);
const loginFormData = reactive<LoginForm>({
  username: 'admin',
  password: 'admin'
});
const loginFormValidate = {
  username: [
    { required: true, message: 'please input your username', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'please input your password', trigger: 'blur' }
  ]
};

onMounted(() => {
  redirectPath.value = (route.query?.redirect as RouteLocationRaw) || '';
});
const { validate, validateInfos } = useForm(loginFormData, loginFormValidate);

const handleLogin = async () => {
  try {
    loading.value = true;
    const { username, password } = await validate();
    if (username === 'admin' && password === 'admin') {
      setTimeout(() => {
        // 存储用户信息
        setUserInfo(loginFormData);
        message.success('Login Successfully');
        router.push(redirectPath.value || { name: 'DashBoard' });
        loading.value = false;
      }, 2000);
    }
  } catch (err) {
    loading.value = false;
    const { errorFields } = err as any;
    if (errorFields.length) {
      message.error('please check your username & password!');
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  position: relative;
  min-height: 100%;
  width: 100%;
  background-image: url('../../assets/images/back.jpg');
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100% 100%;
  overflow: hidden;

  ::v-deep(.ant-input-affix-wrapper) {
    background: transparent !important;
    input {
      background: transparent !important;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 0.15rem 0.0625rem 0.15rem 0.1875rem;
      color: #fff;
      height: 0.5rem;
      caret-color: #fff;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 12.5rem #fff inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }

  ::v-deep(.ant-form-item) {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }

  ::v-deep(svg) {
    width: 0.2rem;
    height: 0.2rem;
    fill: #fff;
    overflow: hidden;
  }

  .section {
    box-shadow: 5px 5px 10px #100f0f;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    .div-image {
      -webkit-clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
      background-color: rgba(255, 255, 255);
      padding: 0.2rem;
      padding-right: 1rem;
      width: 6rem;
    }
    .div-form {
      margin-left: -2.125rem;
      padding-left: 2.125rem;
      background-color: rgba(34, 34, 34, 0.8);
      .login-form {
        padding: 1rem 0.375rem;
        position: relative;
        width: 6rem;
        max-width: 100%;
        margin: 0 auto;
        overflow: hidden;
      }

      .tips {
        font-size: 0.175rem;
        color: #fff;
        margin-bottom: 0.1rem;

        span {
          &:first-of-type {
            margin-right: 0.2rem;
          }
        }
      }
      .svg-container {
        padding: 6px 5px 6px 15px;
        color: rgb(83, 81, 81);
        vertical-align: middle;
        width: 0.2rem;
        display: inline-block;
      }

      .title-container {
        position: relative;

        .title {
          font-size: 0.325rem;
          color: #fff;
          margin: 0px auto 0.5rem auto;
          text-align: center;
          font-weight: bold;
        }
      }

      .show-pwd {
        position: absolute;
        right: 0.125rem;
        top: 0.0875rem;
        font-size: 0.2rem;
        color: #fff;
        cursor: pointer;
        user-select: none;
      }
    }
  }
}
</style>
