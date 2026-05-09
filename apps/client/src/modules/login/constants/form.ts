import { Icons } from '@/modules/shared/icons'
import { Field } from '@modules/shared/form/form.types'
import * as z from 'zod'

export interface LoginFormValues {
  email: string
  password: string
  rememberDevice: boolean
}

export const loginFormSchema = z.object({
  email: z
    .email({
      error: 'Please enter a valid email address',
    })
    .trim(),
  password: z
    .string()
    .min(1, {
      error: 'Password is required',
    })
    .max(128),
  rememberDevice: z.boolean(),
})

export const loginFormFields: Field<LoginFormValues>[] = [
  {
    name: 'email',
    type: 'input',
    icon: Icons.Email,
    htmlType: 'email',
    label: 'Email address',
    placeholder: 'name@company.com',
    props: {
      autoComplete: 'username',
    },
  },
  {
    name: 'password',
    type: 'input',
    icon: Icons.Lock,
    htmlType: 'password',
    label: 'Password',
    placeholder: '••••••••',
    props: {
      autoComplete: 'current-password',
    },
  },
  { name: 'rememberDevice', type: 'checkbox', text: 'Remember this device for 30 days' },
]
