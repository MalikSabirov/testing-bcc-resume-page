import { Home } from "@modules/home/home"
import { MainWrapper } from "@modules/layouts"
import { FC } from "react"
import { Route, Routes } from "react-router-dom"

const App: FC = () => {
  return (
    <MainWrapper>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<p>oops</p>} />
      </Routes>
    </MainWrapper>
  )
}

export default App
