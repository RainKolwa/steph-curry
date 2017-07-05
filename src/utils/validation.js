/*
 * 验证手机号
 */
export const isMobile = phone => /^1[3|4|5|7|8]\d{9}$/.test(phone)

/*
 * 判断是否微信环境
 */
export const isWechat = () => {
  return (
    navigator.userAgent.toLowerCase().match(/micromessenger/i) ===
    'micromessenger'
  )
}
