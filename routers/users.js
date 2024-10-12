const userController = require('../controller/userControoller')

const router = require('express').Router()

// router.get('/user',(req, res) =>{
//     res.send('users')
// })//test
router.get('/login',userController.showFormLogin)

module.exports = router