require('dotenv').config();
const express = require('express')
const sequelize = require('sequelize')

const cookieParser = require('cookie-parser')

const db = require('./Model')
const userRoutes = require('./Routes/userRoutes')
const productRoutes =  require('./Routes/productRoutes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json({limit: '20000mb'}));
app.use(express.urlencoded({limit: '20000mb', extended : true}));
app.use(cookieParser())

/*
db.sequelize.sync({ force: true }).then(() => {
    console.log("db has been re sync")
}) */

app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)

app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))

console.log(this.jwtService);