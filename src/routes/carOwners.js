const router = require("express").Router()
//Controller goes here


router.post('/signin', async (req, res) =>
{
    /*  
    #swagger.tags = ['Car Owners']
*/ 
    res.send("Sign in Successful")
})
router.post('/signup', async (req, res) =>
{
    /*  
    #swagger.tags = ['Car Owners']
*/ 
    res.send("Sign up successful")
})
router.put('/resetpassword', async (req, res) =>
{
    /*  
    #swagger.tags = ['Car Owners']
*/ 
    res.send("Password reset successful")
})


module.exports = router