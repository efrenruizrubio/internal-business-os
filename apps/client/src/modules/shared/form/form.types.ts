import type {
  FieldValues,
  Path,
  RegisterOptions,
  Control,
  SubmitHandler,
  UseFormRegister,
} from 'react-hook-form'
import type { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import type { z } from 'zod'
import { Icons } from '../icons'

type FieldType = 'input' | 'checkbox' | 'select'

type BaseField<TValues extends FieldValues> = {
  name: Path<TValues>
  label?: string
  placeholder?: string
  icon?: Icons
  validations?: RegisterOptions<TValues, Path<TValues>>
}

export type InputField<TValues extends FieldValues> = BaseField<TValues> & {
  type: 'input'
  htmlType?: HTMLInputTypeAttribute
  props?: InputHTMLAttributes<HTMLInputElement>
}

export type CheckboxField<TValues extends FieldValues> = Omit<
  BaseField<TValues>,
  'icon' | 'label' | 'placeholder' | 'validations'
> & {
  type: 'checkbox'
  text: string
}

export type SelectField<TValues extends FieldValues> = BaseField<TValues> & {
  type: 'select'
  options: {
    label: string
    value: string
  }[]
}

export type Field<TValues extends FieldValues> =
  | InputField<TValues>
  | CheckboxField<TValues>
  | SelectField<TValues>

export type FormProps<TValues extends FieldValues> = {
  schema: z.ZodType<TValues, TValues>
  fields: Field<TValues>[]
  onSubmit: SubmitHandler<TValues>
  submitText?: string
}

export type FormInputProps<TValues extends FieldValues> = {
  field: Field<TValues>
  register: UseFormRegister<TValues>
  isSubmitted: boolean
  control: Control<TValues>
}

export type FieldInputProps<TValues extends FieldValues, TType extends FieldType> = Omit<
  FormInputProps<TValues>,
  'field'
> & {
  field: Omit<Extract<Field<TValues>, { type: TType }>, 'type'>
}

export type TextInputProps<TValues extends FieldValues> = FieldInputProps<TValues, 'input'>

export type CheckboxInputProps<TValues extends FieldValues> = Omit<
  FieldInputProps<TValues, 'checkbox'>,
  'control' | 'isSubmitted'
>

export type SelectInputProps<TValues extends FieldValues> = FieldInputProps<TValues, 'select'>
