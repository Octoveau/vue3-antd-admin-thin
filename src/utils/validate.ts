/*
* @description 判断是否存在中文字符
*/
export const validateChinese = (value: any): boolean => {
  const regex: RegExp = /[\u4e00-\u9fa5]/g
  return regex.test(value)
}

/*
* @description 大写字母
*/
export const validateBiggerWord = (value: any): boolean => {
  const reg = /^[A-Z]+$/
  return reg.test(value)
}

/*
* @description 小写字母
*/
export function verifySmallerWord (value: any): boolean {
  const reg = /^[a-z]+$/
  return reg.test(value)
}

/*
* @description 大小写字母
*/
export function verifyWord (value: any): boolean {
  const reg = /^[A-Za-z]+$/
  return reg.test(value)
}

/*
* @description 大小写字母数字
*/
export function verifyWordNumber (value: any): boolean {
  const reg = /^[a-z0-9A-Z]+$/
  return reg.test(value)
}