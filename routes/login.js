const express = require('express');
const router = express.Router();
const { checkLogin, verify } = require('../controller/loginController');

router.post('/login', checkLogin);
router.post('/verify', verify);

module.exports = router;
