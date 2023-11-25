import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const MainWrapper: FC<Props> = ({ children }) => {
  return (
    <>
      <header>header</header>

      <main>{children}</main>
      <footer>footer</footer>
    </>
  )
}
