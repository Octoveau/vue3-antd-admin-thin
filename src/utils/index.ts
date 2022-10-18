/*
* @description 生成随机id
*/
export const createRandomId = (): string => {
  return `${Math.random()*10}-${new Date().getTime()}-${Math.random()*10}`
}