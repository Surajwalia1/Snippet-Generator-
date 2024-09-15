const express = require('express');
const { generateCode } = require('../controllers/generateController');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/generate', authMiddleware, generateCode);

module.exports = router;
