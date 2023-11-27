import { Dispatch, SetStateAction } from "react"
import { BookedEvent } from "@modules/booking/shared/types/booked-event"
import { useState } from "react"
import { format } from "date-fns"

type Args = {
  setSelectedEvent: Dispatch<SetStateAction<BookedEvent | null>>
  toggleBookingModal: () => void
}

export const useBookingEvents = ({
  setSelectedEvent,
  toggleBookingModal,
}: Args) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [events, setEvents] = useState<BookedEvent[]>([])

  const handleDateClick = (date: Date) => {
    const formattedDate = format(date, "dd.MM.yyyy")

    setSelectedDate(date)

    const clickedEvent = events.find(
      (event) => format(event.date, "dd.MM.yyyy") === formattedDate,
    )

    setSelectedEvent(clickedEvent || null)

    if (clickedEvent) {
      return
    }

    toggleBookingModal()
  }

  const handleBookingSubmit = (bookingDescription: string) => {
    if (selectedDate) {
      const newEvent: BookedEvent = {
        date: selectedDate,
        description: bookingDescription,
      }
      setEvents((prevEvents) => [...prevEvents, newEvent])
      setSelectedDate(null)
      setSelectedEvent(newEvent)
      toggleBookingModal()
    }
  }

  const onDateChange = (date: Date) => setSelectedDate(date)

  return {
    events,
    selectedDate,
    setSelectedDate,
    onDateChange,
    handleDateClick,
    handleBookingSubmit,
  }
}
