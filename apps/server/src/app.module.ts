import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SeedModule } from './modules/seed/seed.module'
import { envSchema, envSchemaOptions } from './constants/env-schema'
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module'
import { JwtModule } from './modules/jwt/jwt.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: envSchema,
      validationOptions: envSchemaOptions,
      isGlobal: true,
    }),
    SeedModule,
    UserModule,
    AuthModule,
    JwtModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
