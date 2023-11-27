import { PATHS_MAP } from "@shared/constants"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router"

export const Page404 = () => {
  const [time, setTime] = useState(3)
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
    <div>
      <h1>Что-то пошло нет</h1>
      <p>
        Если вы первый раз по прямой ссылке зашли, т.к. GitHub Pages не дает
        полный контроль над сервером, приходится вот такими костылями
        обкладываеться
      </p>

      <p>Через {time} секунд будет перенаправление на главную</p>
    </div>
  )
}
