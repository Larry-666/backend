const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(`postgres://postgres:Sql303Manha11an@localhost:5432/postgres`, 
    {dialect: "postgres"})

//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected to discover`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model
db.users = require('./userModel') (sequelize, DataTypes)
db.products = require('./productModel') (sequelize, DataTypes)
db.remove = require('./removeProdModel') (sequelize, DataTypes)
db.inventory = require('./inventoryModel') (sequelize, DataTypes)

//exporting the module
module.exports = db