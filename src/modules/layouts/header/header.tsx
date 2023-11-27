import { ThemeToggler } from "@shared/components/theme-toggler/theme-toggler"
import { PATHS_MAP } from "@shared/constants"
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-3 font-mono xl:px-8 xl:py-5">
      <NavLink to={PATHS_MAP.ROOT.get()} className="p-2 text-2xl">
        CV
      </NavLink>

      <ThemeToggler className="p-2" />
    </header>
  )
}
