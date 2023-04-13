
require("./Sqlite3_sequelize")//引入数据库模块，实现建表插入数据

const express = require("express")

const cors = require("cors")

const bodyParser = require('body-parser');

const multer = require("multer");//开放文件夹访问

const Re_code = require("./Config/Re_code");//封装的一个返回值包装函数

const router = require("./Api_Router");

const app = new express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(router)

app.use((err, req, res, next) => {

    res.send(Re_code(err.message))

});



app.listen(3000, () => {
    console.log('示例应用正在监听 http://localhost:3000 端口 !');
});

