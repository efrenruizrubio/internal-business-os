'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { FieldValues, Resolver } from 'react-hook-form'
import { FormProps } from './form.types'
import { FormInput } from './form-input'

export const Form = <TValues extends FieldValues>({
  schema,
  fields,
  onSubmit,
  submitText = 'Submit',
}: FormProps<TValues>) => {
  const resolver = zodResolver(schema) as Resolver<TValues>

  const {
    control,
    formState: { isSubmitted },
    register,

    handleSubmit,
  } = useForm<TValues>({
    resolver,
    shouldFocusError: false,
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <FormInput<TValues>
          control={control}
          key={field.name}
          field={field}
          register={register}
          isSubmitted={isSubmitted}
        />
      ))}

      <button className="btn btn-primary min-h-13 gap-2 rounded-sm text-base" type="submit">
        <span>{submitText}</span>
        <svg
          aria-hidden="true"
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12h14m-6-6 6 6-6 6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>
    </form>
  )
}
