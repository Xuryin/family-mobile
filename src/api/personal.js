import initAxios, {errorHandle} from './ajax';

// 获取验证码 不需要任何参数
export const createCaptcha = params => {
    return initAxios().post(`/createCaptcha`, params).then(res => res.data).catch(errorHandle)
}

// 手机号码 密码登陆/
export const requestLogin = params => {
    return initAxios().post(`/login`, params).then(res => res.data).catch(errorHandle)
}

// 退出
export const logout = () => {
    return initAxios().post('/logout').then(res => res.data).catch(errorHandle)
}

// 注册api
export const requestRegister = params => {
    return initAxios().post('/register', params).then(res => res.data).catch(errorHandle)
}

// 获取商品列表
export const getGoodsList = params => {
    return initAxios().post('/goodsLists', params).then(res => res.data).catch(errorHandle)
}
// 获取商品详情
export const getGoodsDetails = params => {
    return initAxios().post('/goodsDetails', params).then(res => res.data).catch(errorHandle)
}
