import { FC } from "react"
import { EventInfo } from "./event-info"
import { BookedEvent } from "@modules/booking/shared/types/booked-event"

type Props = {
  event: BookedEvent | null
}

export const EventView: FC<Props> = ({ event }) => {
  return (
    <div className="mb-4 w-full shrink-0 grow md:mb-0 md:w-auto md:basis-80 md:pr-6">
      <h2 className="mb-2 text-center text-lg font-semibold md:text-left">
        Событие
      </h2>

      {event ? <EventInfo {...event} /> : <p>Не выбрана дата</p>}
    </div>
  )
}
