const generateSign = require('../../utils/generateSign')
const config = require("../../config/base")

const getSign = async (ctx) => {
    const headers = ctx.headers
    const bodyParams = ctx.request.body
    const appKey = config.appKey
    const appSecret = config.appSecret
    
    const sign = generateSign(appSecret, bodyParams, {
        appKey,
        expireTime: headers.expiretime,
        timestamp: headers.timestamp
    })

    ctx.body = {
        appKey: appKey,
        sign: sign.toString()
    }
}

module.exports = {
    getSign
}