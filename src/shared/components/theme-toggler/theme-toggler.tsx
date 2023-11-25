import { useTheme } from "@shared/context/theme-context"
import { BiSun } from "react-icons/bi"
import { BsFillMoonStarsFill } from "react-icons/bs"

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <BsFillMoonStarsFill className="h-5 w-5" />
      ) : (
        <BiSun className="h-5 w-5" />
      )}
    </button>
  )
}
