import * as Joi from 'joi'

export enum ApplicationEnvironment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export const envSchema = Joi.object({
  DATABASE_URL: Joi.string().required(),
  APPLICATION_ENVIRONMENT: Joi.string()
    .valid(...Object.values(ApplicationEnvironment))
    .required(),
  JWT_SECRET_KEY: Joi.string().required(),
  JWT_ISSUER: Joi.string().uri().required(),
})

export const envSchemaOptions = {
  allowUnknown: true,
  abortEarly: true,
}
