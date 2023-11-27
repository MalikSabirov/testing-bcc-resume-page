import { PATHS_MAP } from "@shared/constants"
import { MainCard } from "@shared/ui"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router"

export const Page404 = () => {
  const [time, setTime] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    if (!time) {
      clearInterval(interval)
      navigate(PATHS_MAP.ROOT.get())
    }

    return () => clearInterval(interval)
  }, [time])

  return (
    <div className="mx-auto flex max-w-4xl flex-col">
      <MainCard
        title="Что-то пошло нет"
        description="Если вы первый раз по прямой ссылке зашли, т.к. GitHub Pages не дает
        полный контроль над сервером, приходится вот такими костылями
        обкладываеться"
      />

      <p className="mt-12 text-center text-xl">
        Через <span className="text-red-600">{time} секунд</span> будет
        перенаправление на главную
      </p>
    </div>
  )
}
