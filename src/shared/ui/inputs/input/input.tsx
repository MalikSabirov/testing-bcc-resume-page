import clsx from "clsx"
import { Field, FieldConfig, useField } from "formik"
import { FC, InputHTMLAttributes } from "react"

type Props = FieldConfig<string> &
  InputHTMLAttributes<HTMLInputElement> & {
    containerClassName?: string
  }

export const Input: FC<Props> = ({
  containerClassName,
  className,
  ...props
}) => {
  const [field, meta] = useField(props)

  return (
    <div className={clsx("relative", containerClassName)}>
      {meta.touched && meta.error && (
        <label className="absolute -top-5 right-0 text-red-600">
          {meta.error}
        </label>
      )}

      <Field
        className={clsx(
          "w-full rounded-md border border-gray-200 p-3 dark:bg-black dark:text-white",
          meta.touched && meta.error && "border-red-600",
          className,
        )}
        {...props}
        {...field}
      />
    </div>
  )
}
