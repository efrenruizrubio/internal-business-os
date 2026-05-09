import { useFormState, type FieldValues } from 'react-hook-form'
import { TextInputProps } from '../form.types'
import { Icons, ICONS } from '../../icons'

export const TextField = <TValues extends FieldValues>({
  field: { name, htmlType, icon, label, placeholder, validations, props = {} },
  register,
  isSubmitted,
  control,
}: TextInputProps<TValues>) => {
  const { errors } = useFormState({ control })

  const error = errors[name]
  const errorMessage = error?.message?.toString()
  const hasError = Boolean(error) && isSubmitted

  return (
    <div className="field">
      {label && (
        <label className="text-base leading-6 font-semibold" htmlFor={name}>
          {label}
        </label>
      )}

      <div>
        <div className={`relative mb-1 ${hasError ? 'animate-shake animate-duration-300' : ''}`}>
          {icon && (
            <div className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 z-10 size-5 -translate-y-1/2">
              {ICONS[icon]}
            </div>
          )}

          <input
            {...props}
            id={name}
            className={`input rounded-sm pr-9 pl-10 text-base ${hasError ? 'border-destructive' : ''}`}
            placeholder={placeholder}
            type={htmlType}
            {...register(name, validations)}
          />
        </div>

        <div className="text-destructive flex min-h-5.75 items-center gap-1">
          <div className="size-4">
            <div className={hasError ? 'block' : 'hidden'}>{ICONS[Icons.Alert]}</div>
          </div>

          <small>{hasError && errorMessage}</small>
        </div>
      </div>
    </div>
  )
}
