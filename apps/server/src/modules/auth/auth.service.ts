import { BadRequestException, Injectable } from '@nestjs/common'
import { LoginDto } from './auth.dto'
import * as bcrypt from 'bcrypt'

import { UserService } from '../user/user.service'
import { JwtService } from '../jwt/jwt.service'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(payload: LoginDto) {
    const { email, password } = payload

    try {
      const user = await this.userService.getByEmailOrThrow({ email })

      const { id, name, email: userEmail, role, passwordHash } = user!

      const isPasswordValid = await bcrypt.compare(password, passwordHash)

      if (!isPasswordValid) {
        throw new BadRequestException('Invalid credentials')
      }

      const token = this.jwtService.sign({ id, name, email: userEmail, role })

      return { token }
    } catch {
      throw new BadRequestException('Invalid credentials')
    }
  }
}
