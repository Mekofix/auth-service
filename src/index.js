require('dotenv/config')
const express = require('express')
// const limiter = require('./middlewares/rateLimiter')
const PORT = process.env.PORT || 4000
const cors = require('cors')
const swaggerUi = require("swagger-ui-express")
const swaggerFile = require("../swagger_output.json")
const sequelize = require('./config/db')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


// app.use('/api', limiter)
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/carowner', require('./routes/carOwners') )


const start = async () =>
{
    try
    {
            await sequelize.sync({alter: true})
        app.listen(PORT, () =>
    {
        console.log( `App running on Port ${PORT}`)
    })
    } catch (error)
    { 
        console.error(error)
    }
}
start()