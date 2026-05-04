import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SeedModule } from './modules/seed/seed.module'
import { envSchema, envSchemaOptions } from './constants/env-schema'
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module'
import { JwtModule } from './modules/jwt/jwt.module'
import { APP_GUARD } from '@nestjs/core'
import { RolesGuard } from './guards/roles.guard'
import { AuthGuard } from './modules/auth/auth.guard'

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
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {}
