class Storage {
  constructor() {

  }

  setStorage(key: string, value: any) {
    if ($IS.isObject(value)) {
      sessionStorage.setItem(key, JSON.stringify(value))
    } else {
      sessionStorage.setItem(key, value)
    }
  }

  getStorage(key: string) {
    return sessionStorage.getItem(key)
  }

  removeStorage(key: string) {
    return sessionStorage.removeItem(key)
  }
}

export default new Storage()