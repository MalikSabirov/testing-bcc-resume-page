import { useState } from "react"
import { BookedEvent } from "./shared/types/booked-event"
import { ContentWrapper } from "@modules/layouts"
import { EventCalendar, EventView } from "./components"

export const Booking = () => {
  const [selectedEvent, setSelectedEvent] = useState<BookedEvent | null>(null)

  return (
    <ContentWrapper>
      <h1 className="mb-10 text-center text-2xl md:text-4xl">Выберите дату</h1>

      <div className="mx-auto mb-4 flex max-w-4xl flex-col items-center md:flex-row md:items-stretch md:justify-between">
        <EventView event={selectedEvent} />
        <EventCalendar setSelectedEvent={setSelectedEvent} />
      </div>
    </ContentWrapper>
  )
}
