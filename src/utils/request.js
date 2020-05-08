import Taro from '@tarojs/taro'
let apiBaseUrl = ''
if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
    apiBaseUrl = 'https://api-freexsxcx.jinhuyu.cn'
} else {
    apiBaseUrl = 'https://api-freexsxcx.jinhuyu.cn'
}



const ajax = async function (url, 
    {
        data={},
        method='GET',
        header= {'content-type': 'application/x-www-form-urlencoded'}
    }=params) {

    return await new Promise((resolve, reject) => {
        Taro.request({
            url: apiBaseUrl + url,
            data: {
                ...data
            },
            method,
            header
        }).then(res => {
         
            if (res.data.code != 200) {
                if (res.data.code == 40002) {
                    Taro.showToast({
                        title: '登录过期，请重新登录',
                        icon: 'none',
                        duration: 2000
                    });
                    Taro.navigateTo({
                        url: '/pages/auth/index'
                    })
                } else {
                    if (!params.prompt) {
                        Taro.showToast({
                            title: '系统繁忙',
                            icon: 'none',
                            duration: 2000
                        });
                    }
                }
            }
            resolve(res.data)
        }).catch(err => {
            reject(err)
            Taro.showToast({
                title: '网络请求失败',
                icon: 'none',
                duration: 2000
            })
        })
    })
}
Taro.$ajax = ajax
export const $ajax = ajax
