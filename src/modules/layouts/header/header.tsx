import { PATHS_MAP } from "@/lib/constants/paths-map"
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-5 font-mono">
      <NavLink to={PATHS_MAP.ROOT.get()} className="text-xl">
        CV
      </NavLink>

      <button>Theme switcher</button>
    </header>
  )
}
