import { Button, Input } from "@shared/ui"
import { Modal } from "@shared/ui/modal"
import { format } from "date-fns"
import { Form, Formik } from "formik"
import { FC } from "react"
import * as Yup from "yup"

type Props = {
  selectedDate: Date
  onClose: () => void
  onSubmit: (value: string) => void
}

export const BookingFormModal: FC<Props> = ({
  selectedDate,
  onClose,
  onSubmit,
}) => {
  const formattedDate = format(selectedDate, "dd.MM.yyyy")

  const handleSubmit = ({ description }: AddBooking) => onSubmit(description)

  return (
    <Modal onClose={onClose} title="Заполните форму">
      <p className="mb-2">Выбранная дата: {formattedDate}</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, isSubmitting, dirty }) => (
          <>
            {/* {isSubmitting && <Loader />} */}

            <Form className="space-y-7">
              <Input name="description" placeholder="Описание" />

              <div className="grid grid-cols-2 gap-5">
                <Button onClick={onClose}>Отмена</Button>

                <Button
                  disabled={!isValid || isSubmitting || !dirty}
                  type="submit"
                >
                  Записаться
                </Button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </Modal>
  )
}

type AddBooking = {
  description: string
}

const initialValues: AddBooking = {
  description: "",
}

const validationSchema = Yup.object().shape({
  description: Yup.string().required("Обязательно"),
})
