const express = require('express');
const router = express.Router();
const { createElecConjunction,deleteElecConjunction} = require('../controller/conjunctionElecController')


router.post('/',createElecConjunction)
router.post('/delete',deleteElecConjunction)


module.exports = router;
