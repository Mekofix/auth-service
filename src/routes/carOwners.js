const controller = require('../controller/carOwner');
const router = require('express').Router();

//CRUD
router
    .get('/', controller.getAll)
    // .get('/:id', controller.getOne)
    // .post('/', controller.signUp)
    // .post('/signin', controller.signIn)
    // .post('/signout', controller.signOut)
    // .post('/reset', controller.forgotPassword)
    // .post('/reset/:token', controller.resetPassword)


module.exports = router