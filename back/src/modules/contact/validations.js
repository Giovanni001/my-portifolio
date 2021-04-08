const Joi = require('@hapi/joi');
const { errorMessages } = require('../validation/i18n');

module.exports = {
  contact: Joi.object({
    name: Joi.string()
      .max(255)
      .required()
      .messages({
        'string.max': errorMessages.MESSAGES.STRING_MAX,
        'any.required': errorMessages.MESSAGES.ANY_REQUIRED,
      }),

    email: Joi.string()
      .max(255)
      .required()
      .messages({
        'string.max': errorMessages.MESSAGES.STRING_MAX,
        'any.required': errorMessages.MESSAGES.ANY_REQUIRED,
      }),

    subject: Joi.string()
      .max(255)
      .required()
      .messages({
        'string.max': errorMessages.MESSAGES.STRING_MAX,
        'any.required': errorMessages.MESSAGES.ANY_REQUIRED,
      }),

    message: Joi.string()
      .max(500)
      .required()
      .messages({
        'string.max': errorMessages.MESSAGES.STRING_MAX,
        'any.required': errorMessages.MESSAGES.ANY_REQUIRED,
      }),
  }),
};
