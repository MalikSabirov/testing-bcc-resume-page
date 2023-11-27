import { PATHS_MAP } from "@shared/constants"
import { FeedbackModal } from "@shared/modals"
import { Button, MainCard, SocialNetworks, StyledLink } from "@shared/ui"
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

      <section className="flex flex-col items-center space-y-5 md:space-y-7">
        <MainCard
          icon={
            <BsCodeSlash className="h-16 w-16 md:h-28 md:w-28 xl:h-32 xl:w-32" />
          }
          title="Малик Сабиров"
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
