const express = require('express')
const limiter = require('./middlewares/rateLimiter')
const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use('/api', limiter)



const startServer = () =>
{
    
    app.listen(PORT, () =>
    {
        console.log( `App running on Port ${PORT}`)
    })
}


startServer()