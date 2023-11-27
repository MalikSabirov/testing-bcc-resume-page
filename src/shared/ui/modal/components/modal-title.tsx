import { WithChildren } from "@shared/types/general"
import clsx from "clsx"
import { FC } from "react"

type Props = WithChildren & {
  className?: string
}

export const ModalTitle: FC<Props> = ({ className, children }) => {
  return (
    <h3
      className={clsx(
        "text-center text-2xl md:text-3xl",
        className ?? "mb-5 md:mb-7",
      )}
    >
      {children}
    </h3>
  )
}
