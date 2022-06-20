import Joi from "joi"

export const validateShareInput = (input) => {
  const schema = Joi.object({
    url: Joi.string().required(),
  })

  return schema.validate(input)
}