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
    <div className={clsx("flex flex-col items-center space-y-5", className)}>
      {icon}
      <h1 className="text-3xl md:text-4xl xl:text-5xl">{title}</h1>
      <p className="text-xl md:text-2xl">{description}</p>
    </div>
  )
}
