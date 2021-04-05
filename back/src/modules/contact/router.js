const express = require('express');
const controller = require('./controller');
const { validationMiddleware } = require('../validation');
const schemas = require('./validations');

const router = express.Router();

router.post('/', validationMiddleware(schemas.contact, 'body'), controller.contact);

module.exports = router;
