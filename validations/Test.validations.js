const Joi = require('joi');

exports.clientValidations = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().min(6).max(50).trim(),
    prenom: Joi.string().required().min(6).max(50).trim(),
    email: Joi.string().email().required().trim(),
  });

  return schema.validate(data);
};
