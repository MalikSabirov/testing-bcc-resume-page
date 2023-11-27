import { useState } from "react"
import { BookedEvent } from "./shared/types/booked-event"
import { ContentWrapper } from "@modules/layouts"
import { EventCalendar, EventView } from "./components"

export const Booking = () => {
  const [selectedEvent, setSelectedEvent] = useState<BookedEvent | null>(null)

  return (
    <ContentWrapper>
      <h1 className="mb-10 text-center text-4xl">Выберите дату</h1>

      <div className="mb-4 flex flex-wrap">
        <EventView event={selectedEvent} />
        <EventCalendar setSelectedEvent={setSelectedEvent} />
      </div>
    </ContentWrapper>
  )
}
