


module.exports = (msg = "Error", data = null, status = 1) => {

    let obj = {

        status, // 0 表示处理成功，1 表示处理失败
        msg, // 状态的描述
        data,

    }

    return obj

}