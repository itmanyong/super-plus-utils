/**
 * @description 包含各类类型判定、状态判定、值判定等返回布尔值的判定方法
 * @description 均以 is 开头的小驼峰命名，返回值均为 boolean
 */
import { getTypeString } from './get'
/**
 * @name 是否是null
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isNull(value: unknown): value is null {
  return getTypeString(value) === '[object Null]' || value === null
}
/**
 * @name 是否是undefined
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isUndefined(value: unknown): value is undefined {
  return getTypeString(value) === '[object Undefined]' || value === void 0
}
/**
 * @name 是否是数字
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isNumber<N = Number>(value: unknown): value is N {
  return typeof value === 'number'
}
/**
 * @name 是否是字符串
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isString<S = String>(value: unknown): value is S {
  return typeof value === 'string'
}
/**
 * @name 是否是布尔值
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isBoolean(value: unknown): value is Boolean {
  return value === true || value === false || typeof value === 'boolean'
}
/**
 * @name 是否是函数
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isFunction<T extends Function = (...args: any[]) => unknown>(value: unknown): value is T {
  return typeof value === 'function' || false
}
/**
 * @name 是否是数组
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isArray<T = any>(value: unknown): value is Array<T> {
  return getTypeString(value) === '[object Array]' || Array.isArray(value)
}
/**
 * @name 是否是对象
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isObject<T = Record<string, any>>(value: unknown): value is T {
  return getTypeString(value) === '[object Object]'
}
/**
 * @name 是否是正则表达式
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isRegExp(value: unknown): value is RegExp {
  return getTypeString(value) === '[object RegExp]' || value instanceof RegExp
}
/**
 * @name 是否是日期对象
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isDate(value: unknown): value is Date {
  return getTypeString(value) === '[object Date]' || value instanceof Date
}
/**
 * @name 是否是错误对象
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isError(value: unknown): value is Error {
  return getTypeString(value) === '[object Error]' || value instanceof Error
}
/**
 * @name 是否是Symbol函数
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isSymbol<T extends symbol = symbol>(value: unknown): value is T {
  return getTypeString(value) === '[object Symbol]' || typeof value === 'symbol'
}
/**
 * @name 是否是Promise对象
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isPromise<T = any>(value: unknown): value is Promise<T> {
  return (
    getTypeString(value) === '[object Promise]' ||
    value instanceof Promise ||
    (isFunction((value as Promise<T>).then) && isFunction((value as Promise<T>).catch))
  )
}
/**
 * @name 是否是Set对象
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isSet<T = any>(value: unknown): value is Set<T> {
  return getTypeString(value) === '[object Set]' || value instanceof Set
}
/**
 * @name 是否是Map对象
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isMap<K = any, V = any>(value: unknown): value is Map<K, V> {
  return getTypeString(value) === '[object Map]' || value instanceof Map
}
/**
 * @name 是否是FormData对象
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isFormData(value: unknown): value is FormData {
  return getTypeString(value) === '[object FormData]' || value instanceof FormData
}
/**
 * @name 是否是File对象
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isFile(value: unknown): value is File {
  return getTypeString(value) === '[object File]' || value instanceof File
}
/**
 * @name 是否是Blob对象
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isBlob(value: unknown): value is Blob {
  return getTypeString(value) === '[object Blob]' || value instanceof Blob
}
/**
 * @name 是否是ArrayBuffer对象
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isArrayBuffer(value: unknown): value is ArrayBuffer {
  return getTypeString(value) === '[object ArrayBuffer]' || value instanceof ArrayBuffer
}
/**
 * @name 是否是异步函数
 * @param {any} value 需要判断的值s
 * @returns {boolean} 返回布尔值
 * @description 内部返回异步结果具有不确定性，不予支持，标准化全部使用async/await语法糖
 */
export function isAsyncFunction<T extends Function = (...args: any[]) => unknown>(value: unknown): value is T {
  return getTypeString(value) === '[object AsyncFunction]' || false
}
/**
 * @name 是否是正整数
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isInteger<T = Number>(value: unknown): value is T {
  return isNumber(value) && Number.isInteger(value)
}
/**
 * @name 是否是数字字符串
 * @param {any} value 需要判断的值
 * @returns {boolean} 返回布尔值
 */
export function isNumberString<T = String>(value: unknown): value is T {
  return isString(value) && /^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?$/i.test(value as string)
}
/**
 * @name 是否为空
 * @param {any} value 需要判断的值
 * @param {boolean} nullIsEmpty null是否为空，默认为true
 * @returns {boolean} 返回布尔值
 * @description undefined、空字符串、空数组、空对象、空Map、空Set 均视为空
 * @description null默认为空，可配置nullIsEmpty为false，使其认定为不为空
 */
export function isEmpty(value: unknown, nullIsEmpty: boolean = true): boolean {
  if ((nullIsEmpty && isNull(value)) || isUndefined(value)) {
    return true
  }
  if (isString(value)) {
    return (value as string).trim() === ''
  }
  if (isArray(value)) {
    return (value as unknown[]).length === 0
  }
  if (isObject(value)) {
    return Reflect.ownKeys(value as object).length === 0
  }
  if (isMap(value) || isSet(value)) {
    return (value as Map<unknown, unknown> | Set<unknown>).size === 0
  }

  return false
}
