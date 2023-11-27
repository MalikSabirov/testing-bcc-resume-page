import { Dispatch, FC, SetStateAction } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import ru from "date-fns/locale/ru"
import { BookingFormModal } from "../booking-form-modal/booking-form-modal"
import "./event-calendar.scss"
import { useDisclosure } from "@shared/utils"
import { BookedEvent } from "@modules/booking/shared/types/booked-event"
import { useBookingEvents } from "./utils/use-booking-events"
import { getEventCalendarSettings } from "./utils/get-event-calendar-settings"

type Props = {
  setSelectedEvent: Dispatch<SetStateAction<BookedEvent | null>>
}

export const EventCalendar: FC<Props> = ({ setSelectedEvent }) => {
  const { isOpen: isOpenFormModal, toggleDisclosure: toggleBookingModal } =
    useDisclosure()

  const {
    events,
    selectedDate,
    onDateChange,
    handleBookingSubmit,
    handleDateClick,
  } = useBookingEvents({ setSelectedEvent, toggleBookingModal })

  const { today, dayClassName, weekDayClassName } =
    getEventCalendarSettings(events)

  return (
    <>
      {isOpenFormModal && selectedDate && (
        <BookingFormModal
          selectedDate={selectedDate}
          onSubmit={handleBookingSubmit}
          onClose={toggleBookingModal}
        />
      )}

      <div className="calendar">
        <DatePicker
          weekDayClassName={weekDayClassName}
          locale={ru}
          onChange={onDateChange}
          onSelect={handleDateClick}
          dayClassName={dayClassName}
          minDate={today}
          inline
        />
      </div>
    </>
  )
}
