import express from 'express';

const photoController = require('./photoController.js');

const router = express.Router();

router.post('/', photoController.createPhoto);

module.exports = router;
