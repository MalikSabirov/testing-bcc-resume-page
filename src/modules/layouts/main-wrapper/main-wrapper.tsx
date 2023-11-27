import { FC, ReactNode } from "react"
import { ThemeProvider } from "@shared/context/theme-context"
import { Header } from "../header/header"
import { Footer } from "../footer/footer"

type Props = {
  children: ReactNode
}

export const MainWrapper: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col dark:bg-black dark:text-white">
        <Header />
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  )
}
