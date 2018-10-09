import initAxios, {errorHandle} from './ajax';

// 获取配资协议内容
export const getContract = params => {
    return initAxios().post("/getContract", params).then(res => res.data).catch(errorHandle)
}

// all product
export const getProducts = params => {
    return initAxios().post("/getProducts", params).then(res => res.data).catch(errorHandle)
}

// 配资接口
export const stockFinance = params => {
    return initAxios().post("/stockFinance", params).then(res => res.data).catch(errorHandle)
}

// 所有配资
export const getStockFinances = (page, pageSize, params) => {
    return initAxios().post("/getStockFinances?page=" + page + "&pageSize=" + pageSize, params).then(res => res.data).catch(errorHandle)
}

// 根据id 找到当前配资
export const getStockFinance = params => {
    return initAxios().post("/getStockFinance", params).then(res => res.data).catch(errorHandle)
}

// 修改是否自动补保，自动延期
export const modifyAutoSupplyCautionMoney = params => {
    return initAxios().post("/modifyAutoSupplyCautionMoney", params).then(res => res.data).catch(errorHandle)
}

// 修改是否自动延期，自动延期
export const modifyAutoExceed = params => {
    return initAxios().post("/modifyAutoExceed", params).then(res => res.data).catch(errorHandle)
}

// 结算的方法
export const settleup = params => {
    return initAxios().post("/settleup", params).then(res => res.data).catch(errorHandle)
}

// 获取资金明细列表
export const getStockFinanceDetails = (params, page) => {
    return initAxios().post('/getStockFinanceDetails?page=' + page, params).then(res => res.data).catch(errorHandle)
}

// 最大可提取金额
export const getAllowMaxExtractProfit = params => {
    return initAxios().post("/getAllowMaxExtractProfit", params).then(res => res.data).catch(errorHandle)
}

// 提取利润
export const extractProfit = params => {
    return initAxios().post("/extractProfit", params).then(res => res.data).catch(errorHandle)
}

// 追加保证金
export const postAddCautionMoney = params => {
   return initAxios().post("/postAddCautionMoney", params).then(res => res.data).catch(errorHandle)
}

// 追加配资额
export const postFinanceCautionMoney = params => {
    return initAxios().post("/postFinanceCautionMoney", params).then(res => res.data).catch(errorHandle)
}

// 追加配资计算补缴
export const getInterest = params => {
    return initAxios().post("/getInterest", params).then(res => res.data).catch(errorHandle)
}

// 免息体验
export const stockFinanceOfFree = params => {
    return initAxios().post("/stockFinanceOfFree", params).then(res => res.data).catch(errorHandle)
}

// 获取股票信息
export const getStockInfo = (params, page) => {
    return initAxios().post('/getStockInfo', params).then(res => res.data).catch(errorHandle)
}

// 搜索股票
export const getStocks = (params, page) => {
    return initAxios().post('/getStocks', params).then(res => res.data).catch(errorHandle)
}

// 获取最大可买股数
export const getMaxStockNum = (params) => {
    return initAxios().post('/getMaxStockNum', params).then(res => res.data).catch(errorHandle)
}

// 委托买入
export const entrustBuy = (params, page) => {
    return initAxios().post('/entrustBuy', params).then(res => res.data).catch(errorHandle)
}

// 委托卖出
export const entrustSell = (params, page) => {
    return initAxios().post('/entrustCell', params).then(res => res.data).catch(errorHandle)
}

// 获取持仓列表
export const getHoldings = (params, page) => {
    return initAxios().post('/getHoldings', params).then(res => res.data).catch(errorHandle)
}

// 获取可撤单委托列表
export const getRevocableEntrusts = (page, pageSize, params) => {
    return initAxios().post('/getRevocableEntrusts?page=' + page + "&pageSize=" + pageSize, params).then(res => res.data).catch(errorHandle)
}

// 取消委托买入
export const cancelEntrustBuy = (params, page) => {
    return initAxios().post('/cancelEntrustBuy', params).then(res => res.data).catch(errorHandle)
}

// 取消委托卖出
export const cancelEntrustCell = (params, page) => {
    return initAxios().post('/cancelEntrustCell', params).then(res => res.data).catch(errorHandle)
}

// 获取今日委托列表
export const getEntrusts = (page, pageSize, params) => {
    return initAxios().post('/getEntrusts?page=' + page + "&pageSize=" + pageSize, params).then(res => res.data).catch(errorHandle)
}

// 获取历史委托列表
export const getEntrustsHistory = (page, params) => {
    return initAxios().post('/getEntrustsHistory?page=' + page, params).then(res => res.data).catch(errorHandle)
}

// 获取今日成交列表
export const getMakedeals = (page, pageSize, params) => {
    return initAxios().post('/getMakedeals?page=' + page + "&pageSize=" + pageSize, params).then(res => res.data).catch(errorHandle)
}

// 获取历史成交列表
export const getMakedealsHistory = (page, params) => {
    return initAxios().post('/getMakedealsHistory?page=' + page, params).then(res => res.data).catch(errorHandle)
}

// 炒股大赛
export const competitionCount  = params => {
    return initAxios().get("/competitionCount", params).then(res => res.data).catch(errorHandle)
}

// 炒股大赛
export const competitionList  = params => {
    return initAxios().get("/competitionList", params).then(res => res.data).catch(errorHandle)
}
