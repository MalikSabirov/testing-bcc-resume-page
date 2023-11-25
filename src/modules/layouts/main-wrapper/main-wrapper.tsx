import { FC, ReactNode } from "react"
import { Header } from "../header/header"

type Props = {
  children: ReactNode
}

export const MainWrapper: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
      <footer>footer</footer>
    </>
  )
}
