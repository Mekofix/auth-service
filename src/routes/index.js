const router = require('express').Router()

const { route } = require('./carOwners')
const { route } = require('./technicians')
const { route } = require('./vendors')
const carOwnerRoutes = require('./carOwners')
const technicianRoutes = require("./technicians")
const vendorRoutes = require('./vendors')



router.use('/api', carOwnerRoutes)
router.use('/api', technicianRoutes)
router.use('/api', vendorRoutes)


module.exports = router