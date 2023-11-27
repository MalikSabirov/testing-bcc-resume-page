import { useTheme } from "@shared/context/theme-context"
import { FC } from "react"
import { BiSun } from "react-icons/bi"
import { BsFillMoonStarsFill } from "react-icons/bs"

type Props = {
  className?: string
}

export const ThemeToggler: FC<Props> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button className={className} onClick={toggleTheme}>
      {theme === "light" ? (
        <BsFillMoonStarsFill className="h-5 w-5" />
      ) : (
        <BiSun className="h-5 w-5" />
      )}
    </button>
  )
}
