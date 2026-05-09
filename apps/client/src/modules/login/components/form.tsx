'use client'

import { Form } from '@/modules/shared/form/form'
import { loginFormFields, loginFormSchema, LoginFormValues } from '../constants/form'
import { SubmitHandler } from 'react-hook-form'
import { authenticate } from '@/services/login'
import { useMutation } from '@tanstack/react-query'
import { sileo } from 'sileo'
import { useRouter } from 'next/navigation'

export const LoginForm = () => {
  const { replace } = useRouter()

  const mutation = useMutation({
    mutationFn: authenticate,
    onSuccess: () => replace('/home'),
  })

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    sileo.promise(mutation.mutateAsync(data), {
      loading: { title: 'Loading...' },
      success: { title: 'Logged in!' },
      error: { title: 'Invalid credentials' },
    })
  }

  return (
    <article className="bg-card text-card-foreground border-border w-full rounded-md border p-6 shadow-sm min-[1920px]:w-1/4! min-[2560px]:w-1/6! md:w-2/3 md:self-center lg:w-2/4 xl:w-1/3">
      <div className="mb-6">
        <h2 className="text-xl leading-[1.3] font-semibold">Welcome back</h2>
        <p className="text-muted-foreground mt-1 text-sm leading-5">
          Enter your credentials to access your dashboard.
        </p>
      </div>

      <Form
        schema={loginFormSchema}
        fields={loginFormFields}
        onSubmit={onSubmit}
        submitText="Login"
      />

      <footer className="border-border mt-6 border-t pt-6 text-center">
        <p className="text-muted-foreground text-sm leading-5">
          Need help?{' '}
          <a className="font-medium" href="/support">
            Contact Support
          </a>
        </p>
      </footer>
    </article>
  )
}
