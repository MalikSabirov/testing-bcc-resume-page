import ReactInputMask from "react-input-mask"
import { PrefilledNumber } from "./components/prefilled-number"
import { FieldConfig, useField } from "formik"
import { FC, InputHTMLAttributes } from "react"
import clsx from "clsx"

type Props = FieldConfig<string> &
  InputHTMLAttributes<HTMLInputElement> & {
    containerClassName?: string
  }

export const PhoneNumberInput: FC<Props> = ({
  containerClassName,
  className,
  ...props
}) => {
  const [field, meta] = useField(props)

  return (
    <div className={clsx("relative", containerClassName)}>
      {meta.touched && meta.error && (
        <label className="absolute right-0 top-0 -translate-y-full text-xs text-red-600">
          {meta.error}
        </label>
      )}

      <PrefilledNumber />
      <ReactInputMask
        id={props.id}
        className={clsx(
          "w-full rounded-md border border-gray-200 py-3 pl-11 pr-3 dark:bg-black dark:text-white",
          meta.touched && meta.error && "border-red-600",
          className,
        )}
        mask="(999) 999 99 99"
        placeholder="(___) ___ __ __"
        autoComplete="off"
        disabled={props.disabled}
        {...field}
      />
    </div>
  )
}
