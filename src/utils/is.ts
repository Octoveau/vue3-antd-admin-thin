export const is = (value: any, type: string): boolean => {
  return Object.prototype.toString.call(value) === `[object ${type}]`
}

export const isNumber = (value: any): value is number => {
  return typeof value === 'number'
}

export const isString = (value: any): value is string => {
  return typeof value === 'string'
}

export const isBoolean = (value: any): value is boolean => {
  return typeof value === 'boolean'
}

export const isObject = (value: any): boolean => {
  return value !== null && is(value, 'Object')
}

export const isArray = (value: any): value is Array<any> => {
  return value && Array.isArray(value)
}

export const isNull = (value: any): value is null => {
  return value === null
}

export const isNil = (value: undefined | null): value is undefined | null => {
  return value === undefined || value === null
}