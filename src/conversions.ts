import { chinese as zhData } from './lang/zh'
interface Custom {
  src: string
  des: string
}
export type CustomStr = Array<Custom>
/**
 * 简体字
 */
const S = zhData.S

/**
 * 繁体字
 */
const T = zhData.T

const tranStr = (str: string, toT: boolean): string => {
  let src
  let des
  let i: number
  let letter
  let result = ''
  let index: number
  if (toT) {
    src = S
    des = T
  }
  else {
    src = T
    des = S
  }
  for (i = 0; i < str.length; i++) {
    letter = str.charAt(i)
    const code = str.charCodeAt(i)
    // 根据字符的Unicode判断是否为汉字，以提高性能
    const isChinese: boolean
      = (code > 0x3400 && code < 0x9FC3) || (code > 0xF900 && code < 0xFA6A)
    if (!isChinese) {
      result += letter
      continue
    }

    index = src.indexOf(letter)

    if (index !== -1)
      result += des.charAt(index)
    else result += letter
  }
  return result
}

export const Chinese = {
  /**
   *
   * @param {string} str 需要转换的字符
   * @param {CustomStr} custom 自定义的字符
   * @returns {string}
   */
  s2t: (str: string, custom?: CustomStr): string => {
    if (custom) {
      for (let s = 0; s < custom.length; s++) {
        if (str.includes(custom[s].src))
          str = str.replaceAll(custom[s].src, custom[s].des)
      }
      return tranStr(str, true)
    }
    else {
      return tranStr(str, true)
    }
  },
  /**
   *
   * @param {string} str 需要转换的字符
   * @param {CustomStr} custom 自定义的字符
   * @returns {string}
   */
  t2s: (str: string, custom?: CustomStr): string => {
    if (custom) {
      for (let s = 0; s < custom.length; s++) {
        if (str.includes(custom[s].src))
          str = str.replaceAll(custom[s].src, custom[s].des)
      }
      return tranStr(str, false)
    }
    else {
      return tranStr(str, false)
    }
  },
}

