import { LoginFormValues } from '@/modules/login/constants/form'
import { axios } from '@shared/services/axios'
import { refreshTokenApi } from '@shared/services/refresh-token-axios'

import { SessionData } from './index.types'

const authApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_API_URL}/auth`,
})

const authenticate = async (data: LoginFormValues) => {
  await authApi.post('/login', data)
}

const getSession = async () => {
  const { data } = await refreshTokenApi.get<SessionData>('/auth/session')

  return data
}

export { authenticate, getSession }
