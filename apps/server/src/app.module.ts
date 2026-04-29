import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { envSchema, envSchemaOptions } from './constants/env-schema'

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: envSchema,
      validationOptions: envSchemaOptions,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
