'use strict'

const { DataTypes } = require('sequelize')

const tablemodel = {

    id: {

        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true

    },
    Account: {

        type: DataTypes.STRING

    },
    password: {

        type: DataTypes.STRING

    }


}




module.exports = {

    tablemodel,

    createData: (Model) => {

        Model.sync({ force: true }).then(() => {

            Model.create({

                Account: "222",

                password: "222"

            })

        }).catch((err) => {

        })
    }
}
