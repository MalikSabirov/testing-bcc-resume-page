import * as Yup from "yup"
import { phoneNumberValidation } from "@shared/utils/validation-helpers"
import {
  AddFeedback,
  FeedbackAdded,
  feedbackApi,
} from "@models/api/feedback/feedback-api"
import { NETWORK_STATUSES } from "@models/api/network/network-errors"
import { ErrorResponse, SuccessResponse } from "@models/api/network/network"

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
