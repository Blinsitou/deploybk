const express = require('express');
const emplCtrl= require('../controller/employeeController');
const router = express.Router();

router.get('/', emplCtrl.getEmployee);
router.post('/', emplCtrl.createEmployee);
router.get('/:id', emplCtrl.getUniqueEmployee);
router.put('/:id', emplCtrl.editEmployee);
router.delete('/:id', emplCtrl.deleteEmployee);

module.exports = router;