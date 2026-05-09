import { FieldValues } from 'react-hook-form'
import { FormInputProps } from './form.types'
import { TextField } from './fields/text-field'
import { Checkbox } from './fields/checkbox'
import { Select } from './fields/select'

export const FormInput = <TValue extends FieldValues>({
  field,
  register,
  isSubmitted,
  control,
}: FormInputProps<TValue>) => {
  switch (field.type) {
    case 'input':
      return (
        <TextField field={field} register={register} isSubmitted={isSubmitted} control={control} />
      )

    case 'checkbox':
      return <Checkbox field={field} register={register} />

    case 'select':
      return (
        <Select field={field} register={register} isSubmitted={isSubmitted} control={control} />
      )

    default:
      return null
  }
}
