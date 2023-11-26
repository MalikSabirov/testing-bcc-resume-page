import { FeedbackForm } from "@shared/components"
import { Modal } from "@shared/ui/modal"
import { FC } from "react"

type Props = {
  onClose: () => void
}

export const FeedbackModal: FC<Props> = ({ onClose }) => {
  return (
    <Modal title="Свяжусь в ближайшее время" onClose={onClose}>
      <FeedbackForm onClose={onClose} />
    </Modal>
  )
}
