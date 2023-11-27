import clsx from "clsx"
import { FC } from "react"
import { NavLink, NavLinkProps } from "react-router-dom"

type Props = NavLinkProps

export const StyledLink: FC<Props> = ({ className, ...props }) => {
  return (
    <NavLink
      className={clsx(
        "rounded border border-gray-200 px-4 py-2 text-base text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black md:text-xl",
      )}
      {...props}
    />
  )
}
