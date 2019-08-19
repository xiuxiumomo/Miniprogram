import Taro from '@tarojs/taro'
import { getToken } from './index'
const baseApi = process.env.BASE_API
export default function request(url, {
  params = {},
  method = 'GET',
  header = {
    'content-type': 'application/json'
  }
}) {
  return new Promise((resolve, reject) => {
    let token = getToken();
    params.token = token;
    //过滤空参数
    if (Object.keys(params).length > 0) {
      for (let k in params) {
        let item = params[k];
        if (item === '' || item === null || item === undefined) {
          delete params[k]
        }
      }
    }

    Taro.request({
      url: baseApi + url,
      data: params,
      method,
      header,
    }).then((res) => {
      resolve(res.data)
    }).catch((e) => {
      reject(e)
    })
  })
}


