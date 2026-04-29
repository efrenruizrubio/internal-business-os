import * as Joi from 'joi'

export const envSchema = Joi.object({
  DATABASE_URL: Joi.string().required(),
})

export const envSchemaOptions = {
  allowUnknown: true,
  abortEarly: true,
}
