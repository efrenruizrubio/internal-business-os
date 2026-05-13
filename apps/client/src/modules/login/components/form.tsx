'use client'

import { Form } from '@/modules/shared/components/form/form'
import { loginFormFields, loginFormSchema, LoginFormValues } from '../constants/form'
import { SubmitHandler } from 'react-hook-form'
import { authenticate, getSession } from '@/modules/login/services'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { sileo } from 'sileo'
import { useRouter } from 'next/navigation'
import { authQueryKeys } from '../constants/query-keys'

export const LoginForm = () => {
  const queryClient = useQueryClient()

  const { replace } = useRouter()

  const mutation = useMutation({
    mutationFn: authenticate,
    onSuccess: async () => {
      await queryClient.fetchQuery({
        queryKey: authQueryKeys.session(),
        queryFn: getSession,
        staleTime: Infinity,
      })

      replace('/dashboard')
    },
  })

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    sileo.promise(mutation.mutateAsync(data), {
      loading: { title: 'Loading...' },
      success: { title: 'Logged in!' },
      error: { title: 'Invalid credentials' },
    })
  }

  return (
    <article className="bg-card text-card-foreground border-border desktop:w-1/4! 2k:w-1/6! w-full rounded-md border p-6 shadow-sm md:w-2/3 md:self-center lg:w-2/4 xl:w-1/3">
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
