import { FC, ReactNode } from "react"
import { createPortal } from "react-dom"
import { ModalContainer } from "./modal-container"
import { ModalOverlay } from "./modal-overlay"

type Props = {
  containerClassName?: string
  children: ReactNode
  onOverlayClick?: (() => void) | null
}

export const ModalPortal: FC<Props> = ({
  containerClassName,
  onOverlayClick,
  children,
}) => {
  const handleOverlayClick = () => {
    if (!onOverlayClick) {
      return
    }

    onOverlayClick()
  }

  return createPortal(
    <ModalContainer className={containerClassName}>
      <ModalOverlay onClick={handleOverlayClick} />
      {children}
    </ModalContainer>,
    document.getElementById("modal-root") as HTMLDivElement,
  )
}
