// 常用方法
import {bus} from './bus';
import {SAVE_LASTING} from '../api/ajax';

// 获取localStorage
export const getItem = (key) => {
    let val = ""
    if (SAVE_LASTING) {
        val = localStorage.getItem(key)
    } else {
        val = sessionStorage.getItem(key)
    }
    return JSON.parse(val)
}

// 设置localStorage
export const setItem = (key, val) => {
    val = JSON.stringify(val)
    if (SAVE_LASTING) {
        val = localStorage.setItem(key, val)
    } else {
        val = sessionStorage.setItem(key, val)
    }
}

export const validLogin = () => {
    let userInfo = getItem('userInfo')
    let token = getItem('token_json_key')
    return userInfo && token
}

// 是否实名认证
export const checkRealName = () => {
    let flag = true
    let real_name = getItem('userInfo').real_name
    let id_card = getItem('userInfo').id_card
    if (!real_name || !id_card || id_card == '' || real_name == '') {
        flag = false
    } else {
        flag = true
    }
    return flag
}




export function fixed (num, n) {
    /*
    * num 数字
    * n  保留几位小数
    * */
    num = Number(num)
    let i = parseInt(Math.ceil(num * Math.pow(10, n + 1)) / 10)
    return i / Math.pow(10, n)
}

// 扩大10的n次方
export function enlarge(data, n) {
    var strData = parseFloat((data)*Math.pow(10, n));
    return strData;
}

// 身份证验证
export const isCardID = (sId) => {
    if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
        msgToast('你输入的身份证长度或格式错误')
        return false
    }

    // 身份证城市
    var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
    if(!aCity[parseInt(sId.substr(0,2))]) {
        msgToast('你的身份证地区非法')
        return false
    }

    // 出生日期验证
    var sBirthday=(sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2))).replace(/-/g,"/"),
        d = new Date(sBirthday)
    if(sBirthday != (d.getFullYear()+"/"+ (d.getMonth()+1) + "/" + d.getDate())) {
        msgToast('身份证上的出生日期非法')
        return false
    }

    // 身份证号码校验
    var sum = 0,
        weights =  [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        codes = "10X98765432"
    for (var i = 0; i < sId.length - 1; i++) {
        sum += sId[i] * weights[i];
    }
    var last = codes[sum % 11];  // 计算出来的最后一位身份证号码
    if (sId[sId.length-1] != last) {
        msgToast('你输入的身份证号非法')
        return false
    }

    return true
}

// 判断是否为微信环境
export const isWechat = () => {
    let ua = navigator.userAgent.toLowerCase()
    let isWeixin = ua.indexOf('micromessenger') != -1
    if (isWeixin) {
        return true
    } else {
        return false
    }
}


// 时间格式化
export function formatDate (date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
        }
    }
    return fmt
}

function padLeftZero (str) {
    return ('00' + str).substr(str.length)
}

// 格式化金额
export function formatMoney (num) {
    let money
    if (typeof num === "string") {
        money = num.replace(/([0-9]+\.[0-9]{2})[0-9]*/, '$1')
    } else {
        money = Number(num).toFixed(2)
    }
    if (money == 'NaN') return '0.00'
    if (money.indexOf('.') == -1) {
        money = money + '.00'
    } else if (money.substr(-2, 1) == '.') {
        money = money + '0'
    }
    let now = money.replace(/(\d{1,3})(?=(\d{3})+(?:$|\D))/g, '$1,')
    return now
}

Number.prototype.toFixed = function (s) {
    let str = this.toString()
    let model = `([0-9]+\\.[0-9]{${s}})[0-9]*`
    return str.replace(new RegExp(model), '$1')
}

Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
}

/**
 * 压缩图片
 * @param file
 * @param quality
 * @param callback
 */
export const compress = function (file, quality, callback) {
    if (!window.FileReader || !window.Blob) {
        return errorHandler('您的浏览器不支持图片上传')()
    }

    let reader = new FileReader()
    let mimeType = file.type || 'image/jpeg'

    reader.onload = createImage
    reader.onerror = errorHandler('图片读取失败！')
    reader.readAsDataURL(file)

    function createImage () {
        let dataURL = this.result
        let image = new Image()
        image.onload = compressImage
        image.onerror = errorHandler('图片加载失败')
        image.src = dataURL
    }

    function compressImage () {
        var canvas = document.createElement('canvas')
        var ctx
        var dataURI

        canvas.width = this.naturalWidth
        canvas.height = this.naturalHeight
        ctx = canvas.getContext('2d')
        ctx.drawImage(this, 0, 0)
        dataURI = canvas.toDataURL(mimeType, quality)

        callback(null, dataURI)
    }

    function errorHandler (message) {
        return function () {
            let error = new Error('Compression Error:', message)
            callback(error, null)
        }
    }
}

export function toPercent(data){
    var strData = parseFloat(data)*100;
    var ret = strData.toString()+"%"
    return ret;
}
