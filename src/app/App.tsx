import { Booking } from "@modules/booking"
import { Home } from "@modules/home"
import { MainWrapper } from "@modules/layouts"
import { PATHS_MAP } from "@shared/constants"
import { FC } from "react"
import { Route, Routes } from "react-router-dom"

const App: FC = () => {
  return (
    <MainWrapper>
      <Routes>
        <Route index element={<Home />} />
        <Route path={PATHS_MAP.BOOKING.get()} element={<Booking />} />
        <Route path="*" element={<p>oops</p>} />
      </Routes>
    </MainWrapper>
  )
}

export default App
