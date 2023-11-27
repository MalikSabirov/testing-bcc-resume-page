import { format } from "date-fns"
import { FC } from "react"

type Props = {
  date: Date
  description: string
}

export const EventInfo: FC<Props> = ({ date, description }) => {
  const formattedDate = format(date, "dd.MM.yyyy")

  return (
    <dl className="mt-4">
      <dt>Дата</dt>
      <dd>{formattedDate}</dd>

      <dt>Описание</dt>
      <dd>{description}</dd>
    </dl>
  )
}
