var controller = require('../controller/usuario')
var express = require('express');
var router = express.Router();


router.get('/',controller.getAll)
router.get('/:id',controller.getById)
router.delete('/:id',controller.remove)
router.put('/:id',controller.update)
router.post('/',controller.insert)
router.post('/login',controller.insert)
router.get('/logOut',controller.getById)

module.exports = router;