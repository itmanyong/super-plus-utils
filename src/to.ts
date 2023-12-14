/**
 * @description 包含类型转化、格式转化、值转化等各类从A->B的形式转化方法
 * @description 均以 to 开头的小驼峰命名，返回值不定
 */
import { isString, isNumber } from './is'
/**
 * @description 转化为数字
 * @param {any} value 需要转化的值
 * @returns {number} 转化后的数字
 * @rule 1. 如果是数字，直接返回
 * @rule 2. 如果是字符串，通过parseFloat尝试转化为数字，如果转化失败，返回0
 * @rule 3. 其他情况，通过Number尝试转化为数字，如果转化失败，返回0
 */
export function toNumber<T = any>(value: T, radix: number = 10): number {
  if (isNumber(value)) return value as number
  if (isString(value)) {
    const n = parseFloat(value as string)
    return isNaN(n) ? 0 : n
  }
  try {
    return Number(value) || 0
  } catch (e) {
    return 0
  }
}
