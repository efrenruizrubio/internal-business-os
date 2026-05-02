import { IsEmail, IsJWT, IsString } from 'class-validator'

export class LoginDto {
  @IsEmail()
  email!: string

  @IsString()
  password!: string
}

export class RefreshTokenDto {
  @IsJWT()
  token!: string
}
