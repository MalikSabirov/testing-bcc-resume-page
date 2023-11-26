import { Button, Input, PhoneNumberInput } from "@shared/ui"
import { Formik, Form } from "formik"
import { FC } from "react"

type Props = {
  onClose: () => void
}

export const FeedbackForm: FC<Props> = ({ onClose }) => {
  return (
    <Formik initialValues={{ name: "" }} onSubmit={() => console.log()}>
      {({ isValid }) => (
        <Form className="space-y-7">
          <fieldset className="space-y-5">
            <Input name="name" placeholder="Имя" />
            <PhoneNumberInput name="phone" />
            <Input name="email" placeholder="Электронная почта" />
          </fieldset>

          <div className="grid grid-cols-2 gap-5">
            <Button onClick={onClose}>Отмена</Button>
            <Button disabled={!isValid} type="submit">
              Отправить
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
