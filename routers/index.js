const Controller = require('../controller/controller');
const router = require('express').Router()

router.get('/',Controller.home)//home

router.use(require('./users'));
router.use(require('./products'));

module.exports = router