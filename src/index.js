require('dotenv/config')
const express = require('express')
const limiter = require('./middlewares/rateLimiter')
const PORT = process.env.PORT || 4000
const cors = require('cors')
const router = require('./routes/index')
const swaggerUi = require("swagger-ui-express")
const swaggerFile = require("../swagger_output.json")

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(router)
app.use('/api', limiter)
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerFile))




const startServer = () =>
{
    
    app.listen(PORT, () =>
    {
        console.log( `App running on Port ${PORT}`)
    })
}


startServer()