import { Button } from "@shared/ui/button/button"
import { MainCard } from "@shared/ui/cards/main-card/main-card"
import { SocialNetworks } from "@shared/ui/social-networks"
import { BsCodeSlash } from "react-icons/bs"

export const IntroSection = () => {
  return (
    <section className="space-y-7 text-center">
      <MainCard
        icon={<BsCodeSlash className="h-32 w-32" />}
        title="Малик Сабиров"
        description="Frontend dev"
      />

      <SocialNetworks
        className="flex justify-center space-x-10"
        iconClassName="w-12 h-12 opacity-70 hover:opacity-100"
      />

      <Button>Обратная связь</Button>
    </section>
  )
}
