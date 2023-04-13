'use strict'

const fs = require('fs')

const express = require('express');

const router = express.Router();


require("express-async-errors");//express 异常捕获

router.use((req, res, next) => {

    console.log(req.body.Account || "null" + 'Time: ', new Date().toLocaleString(), req.url);

    res.header("Access-Control-Allow-Origin", "*");

    next();


})


let dirname = __dirname + '/Routers';

let files = fs.readdirSync(dirname).filter(item => item.endsWith('.js'));

files.forEach(item => {

    let Apiname = '/' + item.replace('.js', '')

    let Apiobj = require(dirname + Apiname)

    for (const key in Apiobj) {

        router[key](Apiname, Apiobj[key])

    }

});




module.exports = router
