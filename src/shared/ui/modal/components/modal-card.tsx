import { WithChildren } from "@shared/types/general"
import clsx from "clsx"
import { FC } from "react"

type Props = WithChildren & {
  maxWidth?: string
  className?: string
}

export const ModalCard: FC<Props> = ({
  children,
  className,
  maxWidth = "500px",
}) => {
  return (
    <div
      style={{
        maxWidth,
      }}
      className={clsx(
        "relative z-10 w-full rounded-lg bg-white p-8 text-black shadow-md dark:bg-black dark:text-white",
        className,
      )}
    >
      {children}
    </div>
  )
}
