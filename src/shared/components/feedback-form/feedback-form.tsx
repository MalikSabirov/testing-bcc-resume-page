import { Button, Input, PhoneNumberInput } from "@shared/ui"
import { Formik, Form } from "formik"
import { FC } from "react"
import { getFeedBackFormSettings } from "./utils/get-feedback-form-settings"
import { Loader } from "@shared/ui/loader"
import { AddFeedback } from "@models/api/feedback/feedback-api"

type Props = {
  onClose: () => void
}

export const FeedbackForm: FC<Props> = ({ onClose }) => {
  const { initialValues, validationSchema, addFeedback } =
    getFeedBackFormSettings()

  const handleSubmit = async (values: AddFeedback) => {
    await addFeedback(values)
    onClose()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
    >
      {({ isValid, isSubmitting, dirty }) => (
        <>
          {isSubmitting && <Loader />}

          <Form className="space-y-5 md:space-y-7">
            <fieldset className="space-y-5 md:space-y-6">
              <Input name="name" placeholder="Имя" />
              <PhoneNumberInput name="phone" />
              <Input name="email" placeholder="Электронная почта" />
            </fieldset>

            <div className="grid grid-cols-2 gap-5">
              <Button onClick={onClose}>Отмена</Button>
              <Button
                disabled={!isValid || isSubmitting || !dirty}
                type="submit"
              >
                Отправить
              </Button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  )
}
