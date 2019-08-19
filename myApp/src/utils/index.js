export default function getTime() {
  return '1'
}

//获取token
export function getToken() {
  let token = wx.getStorageSync('token');
  return token ? token : '';
}
