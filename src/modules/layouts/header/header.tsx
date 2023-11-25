import { ThemeToggler } from "@shared/components/theme-toggler/theme-toggler"
import { PATHS_MAP } from "@shared/constants"
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-5 font-mono">
      <NavLink to={PATHS_MAP.ROOT.get()} className="text-xl">
        CV
      </NavLink>

      <ThemeToggler />
    </header>
  )
}
