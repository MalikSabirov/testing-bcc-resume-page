import { ErrorResponse, SuccessResponse } from "../network/network"
import { NETWORK_STATUSES } from "../network/network-errors"

export type FeedbackAdded = {
  message: string
}

export type AddFeedback = {
  name: string
  email: string
  phone: string
}

const mockSuccessResponse: SuccessResponse<FeedbackAdded> = {
  status: NETWORK_STATUSES.SUCCESS,
  data: {
    message: "Ваша заявка принята, свяжусь с вами в ближайшее время",
  },
}

const mockErrorResponse: ErrorResponse = {
  status: NETWORK_STATUSES.ERROR001,
  message: "Что-то пошло не так",
}

export const feedbackApi = {
  add: (
    data: AddFeedback,
    shouldSucceed: boolean,
    timeout: number,
  ): Promise<SuccessResponse<FeedbackAdded> | ErrorResponse> => {
    return new Promise((resolve, reject) => {
      console.log("Данные, которые отправляются: ", data)

      setTimeout(() => {
        if (shouldSucceed) {
          resolve(mockSuccessResponse)
        } else {
          reject(mockErrorResponse)
        }
      }, timeout)
    })
  },
}
