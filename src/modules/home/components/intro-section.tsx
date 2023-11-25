import { MainCard } from "@shared/ui/cards/main-card/main-card"
import { SocialNetworks } from "@shared/ui/social-networks"
import { BsCodeSlash } from "react-icons/bs"

export const IntroSection = () => {
  return (
    <section className="space-y-7">
      <MainCard
        icon={<BsCodeSlash className="w-32 h-32" />}
        title="Малик Сабиров"
        description="Frontend dev"
      />

      <SocialNetworks
        className="flex justify-center space-x-10"
        iconClassName="w-12 h-12 opacity-70 hover:opacity-100"
      />
    </section>
  )
}
