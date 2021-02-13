const Joi = require('joi');

exports.RegisterValidations = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().min(6).max(50).trim(),
    email: Joi.string().required().email().trim(),
    password: Joi.string().required().min(6).max(255),
    number: Joi.number().required(),
  });

  return schema.validate(data);
};
