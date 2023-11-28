import { PATHS_MAP } from "@shared/constants"
import { MainCard, StyledLink } from "@shared/ui"
import { useLocation } from "react-router"

export const Page404 = () => {
  const { pathname } = useLocation()

  return (
    <div className="mx-auto flex max-w-4xl flex-col space-y-8">
      <MainCard
        title="404"
        description={`Страницы ${pathname} не существует`}
      />

      <StyledLink className="mt-4 self-center" to={PATHS_MAP.ROOT.get()}>
        Перейти на главную
      </StyledLink>
    </div>
  )
}
