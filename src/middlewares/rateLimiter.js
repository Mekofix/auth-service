const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    windowMs: 60000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
})


module.exports = limiter