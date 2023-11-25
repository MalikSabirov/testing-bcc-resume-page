import clsx from "clsx"
import { FC, ReactNode } from "react"

type Props = {
  icon?: ReactNode
  title: string
  description: string
  className?: string
}

export const MainCard: FC<Props> = ({
  icon,
  title,
  description,
  className,
}) => {
  return (
    <div className={clsx("space-y-5 flex flex-col items-center", className)}>
      {icon}
      <h1 className="text-5xl">{title}</h1>
      <p className="text-2xl">{description}</p>
    </div>
  )
}
