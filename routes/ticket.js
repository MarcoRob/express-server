const express = require('express');
const router = express.Router();

const ticketController = require('../controllers/ticket');

router.get('/', ticketController.list);

module.exports = router