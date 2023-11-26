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
        "rounded border border-gray-200 px-4 py-2 text-xl text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
