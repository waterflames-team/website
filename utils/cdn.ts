const baseUrl =
  'https://waterflames-1259622527.cos.ap-shanghai.myqcloud.com/website/'

export const cdnUrl = (name: string) => {
  return `${baseUrl}${name}`
}
export const avatarUrl = (name: string) => {
  return `${baseUrl}avatars/${name}`
}
