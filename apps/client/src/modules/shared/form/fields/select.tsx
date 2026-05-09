import type { FieldValues } from 'react-hook-form'
import type { SelectInputProps } from '../form.types'

export const Select = <TValues extends FieldValues>({
  field,
  register,
  control,
  isSubmitted,
}: SelectInputProps<TValues>) => {
  return <input type="text" />
}
