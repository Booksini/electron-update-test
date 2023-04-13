

const sequelize = require("sequelize")

const fs = require("fs")



const Sql = new sequelize({

    dialect: 'sqlite',

    storage: './SqLiteDb/el.db'

});


let dirname = __dirname + '/Models'


let files = fs.readdirSync(dirname).filter(i => i.endsWith(".js"))

let resObj = {}

resObj.Op = sequelize.Op

files.forEach(i => {

    let modelName = i.replace(".js", "")

    let { tablemodel, createData } = require(dirname + "/" + modelName)

    let tableName = modelName.toLowerCase();

    resObj[modelName] = Sql.define(tableName, tablemodel)

    createData == undefined ? "" : createData(resObj[modelName])

})


module.exports = resObj

