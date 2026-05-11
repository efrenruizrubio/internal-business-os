import type { FieldValues } from 'react-hook-form'
import type { CheckboxInputProps } from '../form.types'

export const Checkbox = <TValues extends FieldValues>({
  field: { name, text },
  register,
}: CheckboxInputProps<TValues>) => {
  return (
    <label className="text-muted-foreground flex items-center gap-2 text-sm leading-5">
      <input
        className="border-border accent-primary size-4 rounded-[4px]"
        {...register(name)}
        type="checkbox"
      />
      <span>{text}</span>
    </label>
  )
}
