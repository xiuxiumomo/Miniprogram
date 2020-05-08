import { $ajax as request } from '@/utils/request'
// 测试登录接口
export const login = async function (params = {}) {
    const { data = {} } = params
    let res = await request('/login', {
        data,
        method: 'get'
    })

    return res
}
