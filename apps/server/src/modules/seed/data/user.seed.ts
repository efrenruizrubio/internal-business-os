import { User } from '@/generated/prisma/client'
import * as bcrypt from 'bcrypt'

const PASSWORD = '123456'
const SALT_ROUNDS = 10

type UserSeedData = Omit<User, 'id' | 'createdAt' | 'updatedAt'>

export const usersSeed: UserSeedData[] = [
  {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    passwordHash: bcrypt.hashSync(PASSWORD, SALT_ROUNDS),
    role: 'ADMIN',
  },
  {
    name: 'Bob Smith',
    email: 'bob@example.com',
    passwordHash: bcrypt.hashSync(PASSWORD, SALT_ROUNDS),
    role: 'CLIENT',
  },
  {
    name: 'Carlos Ruiz',
    email: 'carlos@example.com',
    passwordHash: bcrypt.hashSync(PASSWORD, SALT_ROUNDS),
    role: 'DEV',
  },
]
