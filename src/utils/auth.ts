import storage from "./storage";

const USERINFO_KEY = 'USER_INFO'

export let userInfo = ((e: any) => {
  if (!e) {
    return {}
  }
  try {
    return JSON.parse(e)
  } catch (err) {
    storage.setStorage(USERINFO_KEY, {})
    return {}
  }
})(storage.getStorage(USERINFO_KEY))

/*
* @description 存储用户信息
*/
export const setUserInfo = (value: any): void => {
  userInfo = value
  storage.setStorage(USERINFO_KEY, value)
}

/*
* @description 获取用户Token
*/
export const getToken = (): string => {
  return userInfo && userInfo.token
}

/*
* @description 获取用户信息
*/
export const getUserInfo = () => {
  return userInfo && userInfo
}

/*
* @description 删除用户信息
*/
export const removeUserInfo = () => {
  userInfo = {}
  storage.removeStorage(USERINFO_KEY)
}