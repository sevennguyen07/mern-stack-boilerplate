import Joi from "joi"

export const validateLoginInput = (input) => {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email().required(),
    password: Joi.string().min(6).max(255).required(),
  })

  return schema.validate(input)
}

export const validateRegisterInput = (input) => {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email().required(),
    password: Joi.string().min(6).max(255).required(),
  });

  return schema.validate(input)
}