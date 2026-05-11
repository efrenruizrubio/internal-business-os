import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserModule } from '../user/user.module'
import { JwtModule } from '../jwt/jwt.module'
import { MenuModule } from '../menu/menu.module'

@Module({
  imports: [UserModule, JwtModule, MenuModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
