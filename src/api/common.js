import initAxios, {errorHandle} from './ajax';

// 网站相关
export const getIndexData = params => {
    return initAxios().post('/getIndexData', params).then(res => res.data).catch(errorHandle)
}

// 获取首页公告
export const getIndexArticles = params => {
    return initAxios().post('/getIndexArticles', params).then(res => res.data).catch(errorHandle)
}

// 获取文章
export const getArticle = params => {
    return initAxios().post('/getArticle', params).then(res => res.data).catch(errorHandle)
}