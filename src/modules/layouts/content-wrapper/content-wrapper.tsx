import { WithChildren } from "@shared/types/general"
import clsx from "clsx"
import { FC } from "react"

type Props = WithChildren & {
  className?: string
}

export const ContentWrapper: FC<Props> = ({ className, children }) => {
  return (
    <div
      className={clsx("mx-auto w-full max-w-6xl px-5 xl:px-8", className)}
      children={children}
    />
  )
}
