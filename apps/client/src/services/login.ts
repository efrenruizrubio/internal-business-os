import { LoginFormValues } from '@/modules/login/constants/form'
import { axios } from './axios'

const authenticate = async (data: LoginFormValues) => {
  await axios.post('/auth/login', data)
}

export { authenticate }
