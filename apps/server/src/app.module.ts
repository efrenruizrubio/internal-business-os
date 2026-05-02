import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SeedModule } from './modules/seed/seed.module'
import { envSchema, envSchemaOptions } from './constants/env-schema'

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: envSchema,
      validationOptions: envSchemaOptions,
      isGlobal: true,
    }),
    SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
