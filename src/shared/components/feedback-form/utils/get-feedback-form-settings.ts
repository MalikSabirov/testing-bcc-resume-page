import * as Yup from "yup"

import {
  AddFeedback,
  FeedbackAdded,
  feedbackApi,
} from "@models/api/feedback/feedback-api"
import {
  ErrorResponse,
  NETWORK_STATUSES,
  SuccessResponse,
} from "@models/api/network"
import { phoneNumberValidation } from "@shared/utils"

const initialValues: AddFeedback = {
  name: "",
  email: "",
  phone: "",
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Обязательно").min(2, "Минимум 2 символа"),
  email: Yup.string().required("Обязательно").email("Не тот формат почты"),
  phone: phoneNumberValidation,
})

export const getFeedBackFormSettings = () => {
  const addFeedback = async (values: AddFeedback) => {
    let result = await feedbackApi.add(values, true, 1500)

    if (result.status === NETWORK_STATUSES.SUCCESS) {
      result = result as SuccessResponse<FeedbackAdded>
      alert(result.data.message)

      return
    }

    result = result as ErrorResponse
    alert(result.message)
  }

  return {
    initialValues,
    validationSchema,
    addFeedback,
  }
}
