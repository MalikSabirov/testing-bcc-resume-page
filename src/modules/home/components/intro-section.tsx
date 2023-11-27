import { PATHS_MAP } from "@shared/constants"
import { FeedbackModal } from "@shared/modals"
import { StyledLink } from "@shared/ui"
import { Button } from "@shared/ui/button/button"
import { MainCard } from "@shared/ui/cards/main-card/main-card"
import { SocialNetworks } from "@shared/ui/social-networks"
import { useDisclosure } from "@shared/utils"
import { BsCodeSlash } from "react-icons/bs"

export const IntroSection = () => {
  const {
    isOpen: isOpenFeedbackModal,
    openDisclosure: openFeedbackModal,
    closeDisclosure: closeFeedbackModal,
  } = useDisclosure()

  return (
    <>
      {isOpenFeedbackModal && <FeedbackModal onClose={closeFeedbackModal} />}

      <section className="flex flex-col items-center space-y-7">
        <MainCard
          icon={<BsCodeSlash className="h-32 w-32" />}
          title=""
          description="Frontend dev"
        />

        <SocialNetworks
          className="flex justify-center space-x-10"
          iconClassName="w-12 h-12 opacity-70 hover:opacity-100"
        />

        <Button onClick={openFeedbackModal}>Обратная связь</Button>

        <StyledLink to={PATHS_MAP.BOOKING.get()}>Записаться</StyledLink>
      </section>
    </>
  )
}
