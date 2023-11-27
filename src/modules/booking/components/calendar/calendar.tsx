import { useState } from "react"
import { registerLocale } from "react-datepicker"
import ru from "date-fns/locale/ru"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

registerLocale("ru", ru)

interface Event {
  date: Date
  description: string
}

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [events, setEvents] = useState<Event[]>([])
  const [bookingDescription, setBookingDescription] = useState<string>("")

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
    setBookingDescription("")
  }

  const handleBookingSubmit = () => {
    if (selectedDate && bookingDescription) {
      const newEvent: Event = {
        date: selectedDate,
        description: bookingDescription,
      }
      setEvents((prevEvents) => [...prevEvents, newEvent])
      setSelectedDate(null)
      setBookingDescription("")
    }
  }

  const dayClassName = (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0]
    const isBooked = events.some(
      (event) => event.date.toISOString().split("T")[0] === formattedDate,
    )

    return isBooked ? "booked-day bg-red-600" : ""
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 flex flex-col items-center">
        <DatePicker
          locale="ru"
          selected={selectedDate}
          onChange={(date: Date) => setSelectedDate(date)}
          onSelect={handleDateClick}
          inline
          dayClassName={dayClassName}
        />
        <div className="ml-4">
          <h2 className="mb-2 text-lg font-semibold">Booking:</h2>
          {selectedDate && (
            <div>
              <p className="mb-2">
                Selected Date: {selectedDate.toISOString().split("T")[0]}
              </p>
              <textarea
                className="mb-2 resize-none border p-2"
                placeholder="Enter booking description"
                value={bookingDescription}
                onChange={(e) => setBookingDescription(e.target.value)}
              />
              <button
                className="rounded bg-blue-500 px-4 py-2 text-white"
                onClick={handleBookingSubmit}
              >
                Book Event
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4">
        <h2 className="mb-2 text-lg font-semibold">Events:</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index} className="mb-2">
              <strong>{event.date.toISOString().split("T")[0]}:</strong>{" "}
              {event.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
