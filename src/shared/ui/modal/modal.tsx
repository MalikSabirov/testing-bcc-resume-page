import { WithChildren } from "@shared/types/general"
import { FC, useEffect } from "react"
import { ModalCard, ModalPortal, ModalTitle } from "./components"
import { useScrollLock } from "@shared/utils"
import { useTheme } from "@shared/context/theme-context"
import clsx from "clsx"

type Props = WithChildren & {
  title?: string
  containerClassName?: string
  cardClassName?: string
  maxWidth?: string
  onOverlayClick?: () => void
  onClose: () => void
}

export const Modal: FC<Props> = ({
  title,
  containerClassName,
  onOverlayClick,
  onClose,
  maxWidth,
  cardClassName,
  children,
}) => {
  const { theme } = useTheme()

  useScrollLock()

  useEffect(() => {
    const onKeyPressed = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") onClose()
    }

    window.addEventListener("keyup", onKeyPressed)

    return () => {
      window.removeEventListener("keyup", onKeyPressed)
    }
  }, [])

  return (
    <ModalPortal
      containerClassName={clsx(containerClassName, theme)}
      onOverlayClick={onOverlayClick}
    >
      <ModalCard className={cardClassName} maxWidth={maxWidth}>
        {title && <ModalTitle>{title}</ModalTitle>}

        {children}
      </ModalCard>
    </ModalPortal>
  )
}
