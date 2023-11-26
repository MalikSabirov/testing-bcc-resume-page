import clsx from "clsx"
import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
}

export const ModalContainer: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex h-full w-full items-center justify-center",
        className,
      )}
    >
      {children}
    </div>
  )
}
