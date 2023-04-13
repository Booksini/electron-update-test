// 测试一下

const CCXT = require('../../Config/CCXT')

const Re_code = require('../../Config/Re_code')

const { User } = require('../../Sqlite3_sequelize')


let Api_Fn = async (req, res) => {

    let data = await User.findAll()


    console.log(await CCXT().fetchBalance());


    res.send(Re_code("查询成功", data, 0))


}




module.exports = {

    "get": Api_Fn

}