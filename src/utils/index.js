
import Taro from '@tarojs/taro'
//设置一个基本弹窗
export function showModal({ title = '温馨提示', content = '默认内容' }) {
  return new Promise((resolve) => {
    Taro.showModal({
      title,
      content,
      confirmColor: '#FF2F00'
    }).then((res) => {
      resolve(res)
    })
  })

}
//设置storageFn
export function storageSetFn({key='',value=''}=params) {
  return Taro.setStorageSync(key,value)
}
//获取storageFn
export function storageGetFn(key) {
 return Taro.getStorageSync(key)
}
