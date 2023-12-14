/**
 * @description 包含环境定量、多平台公共接口等可直接确定的定量
 * @description 均以 _ 开头的小驼峰命名
 */

/**
 * @name 环境对象
 */
export let _globalThis: any
const initGlobalThis = (): void => {
  _globalThis =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {}
}

// 初始化
;(() => {
  initGlobalThis()
})()
