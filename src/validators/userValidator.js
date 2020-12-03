/* eslint-disable import/prefer-default-export */
import Joi from 'joi';

export function userValidate(req, res, next) {
  const userValiation = Joi.object({
    first_name: Joi.string().min(2).required().trim(),
    last_name: Joi.string().min(2).required().trim(),
    email: Joi.string().min(4).required().email()
      .trim(),
    password: Joi.string().min(6).max(8).trim(),
    role: Joi.string().trim()
  });
  const result = userValiation.validate(req.body);
  if (result.error) return res.status(400).json({ Message: result.error.details[0].message });
  next();
}