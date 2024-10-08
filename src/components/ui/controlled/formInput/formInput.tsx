import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/components'

/**
 * @param {import('react-hook-form').Control<TFieldValues>} control - The control object from react-hook-form used to manage the form state.
 */
export type FormInputProps<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> &
  /**
   * @param {Omit<InputProps, 'onBlur' | 'onChange' | 'value'>} [restInputProps] - Additional props passed to the Input component.
   */
  Omit<InputProps, 'onBlur' | 'onChange' | 'value'>

/**
 * FormInput component that integrates with react-hook-form to manage form state.
 * It wraps the Input component and connects it to the react-hook-form's control object.
 *
 * @example
 * function MyForm() {
 *   const { control } = useForm();
 *
 *   return (
 *     <form>
 *       <FormInput
 *         name="username"
 *         control={control}
 *         label="Username"
 *         defaultValue=""
 *       />
 *     </form>
 *   )
 * }
 */

export const FormInput = <TFieldValues extends FieldValues>({
  control,
  defaultValue,
  label,
  name,
  ...restInputProps
}: FormInputProps<TFieldValues>) => {
  const {
    field: { onBlur, onChange, value = defaultValue ?? '' },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return (
    <Input
      {...restInputProps}
      defaultValue={defaultValue}
      errorMessage={error?.message}
      label={label}
      onBlur={onBlur}
      onValueChange={onChange}
      value={value}
    />
  )
}
