import clsx from "clsx"
import { ComponentPropsWithoutRef, FC, ReactNode } from "react"

type Props = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode
}

export const Button: FC<Props> = ({ type, children, className, ...props }) => {
  return (
    <button
      type={type ?? "button"}
      className={clsx(
        "rounded border border-gray-200 px-4 py-2 text-xl text-black",
        "hover:bg-black hover:text-white disabled:bg-gray-100 disabled:text-gray-200",
        "dark:text-white dark:hover:bg-white dark:hover:text-black dark:disabled:border-gray-500 dark:disabled:bg-black dark:disabled:text-gray-500",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
