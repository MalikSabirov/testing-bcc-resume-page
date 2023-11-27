import { FC } from "react"
import { EventInfo } from "./event-info"
import { BookedEvent } from "@modules/booking/shared/types/booked-event"

type Props = {
  event: BookedEvent | null
}

export const EventView: FC<Props> = ({ event }) => {
  return (
    <div className="shrink-0 basis-80 pr-6">
      <h2 className="mb-2 text-lg font-semibold">Событие</h2>

      {event ? <EventInfo {...event} /> : <p>Не выбрана дата</p>}
    </div>
  )
}
