import { Header } from "../header/header"
import { ThemeProvider } from "@shared/context/theme-context"

import { FC, ReactNode } from "react"
type Props = {
  children: ReactNode
}

export const MainWrapper: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <main className="dark:bg-black dark:text-white">
        <Header />
        {children}
        <footer>footer</footer>
      </main>
    </ThemeProvider>
  )
}
