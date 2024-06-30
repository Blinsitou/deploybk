const express = require('express');
const userCtrl= require('../controller/userController');
const router = express.Router();

router.get('/', userCtrl.getUser);
router.post('/', userCtrl.createUser);
router.get('/:id', userCtrl.getUniqueUser);
router.put('/:id', userCtrl.editUser);
router.delete('/:id', userCtrl.deleteUser);

module.exports = router;


