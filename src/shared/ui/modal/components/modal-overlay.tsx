import { FC } from "react"

type Props = {
  onClick?: () => void
}

export const ModalOverlay: FC<Props> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute h-full w-full bg-black/50 backdrop-blur-sm dark:bg-white/10"
    />
  )
}
