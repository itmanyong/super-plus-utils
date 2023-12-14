/**
 * @description 包含环境定量、接口兼容性、多API合一等归一化的方法
 * @description 均以 get 开头的小驼峰命名，返回值不定
 */
/**
 * @name 获取当前对象的表示字符串
 * @returns {string} 返回类型字符串
 */
const objectToString: () => string = Object.prototype.toString
/**
 * @name 获取给定值的类型字符串
 * @param {any} value 需要判断的值
 * @returns {string} 返回类型字符串
 */
export function getTypeString<T = any>(value: T): string {
  return objectToString.call(value)
}
/**
 * @name 获取给定值的原始类型
 * @param {any} value 需要判断的值
 * @returns {string} 返回类型字符串
 */
export function getRawType<T = any>(value: T): string {
  return getTypeString(value).slice(8, -1)
}
