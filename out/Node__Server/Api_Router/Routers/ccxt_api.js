// 测试一下

const CCXT = require('../../Config/CCXT')

const Re_code = require('../../Config/Re_code')


let Api_Fn = async (req, res) => {

    console.log(req.body);

    let obj = req.body

    let data = await CCXT(obj).fetchBalance()

    res.send(Re_code("查询成功", data, 0))

}




module.exports = {

    "post": Api_Fn

}