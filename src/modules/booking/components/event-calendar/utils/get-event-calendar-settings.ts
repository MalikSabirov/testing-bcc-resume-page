import { BookedEvent } from "@modules/booking/shared/types/booked-event"
import clsx from "clsx"
import { format } from "date-fns"

const dayBasicClassName = "w-10 h-10 border-2 leading-[36px] m-1"

const today = new Date()

export const getEventCalendarSettings = (events: BookedEvent[]) => {
  const dayClassName = (date: Date) => {
    const formattedDate = format(date, "dd.MM.yyyy")
    const isBooked = events.some(
      (event) => format(event.date, "dd.MM.yyyy") === formattedDate,
    )

    return clsx(
      dayBasicClassName,
      isBooked ? "border-black rounded-[5px]" : "border-transparent",
    )
  }

  const weekDayClassName = () => "w-10 h-6 leading-6 m-1"

  return {
    today,
    weekDayClassName,
    dayClassName,
  }
}
