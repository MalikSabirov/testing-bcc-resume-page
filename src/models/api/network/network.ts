import { NetworkStatusValues } from "./network-errors"

export type ErrorResponse = {
  status: NetworkStatusValues
  message: string
}

export type SuccessResponse<T> = {
  status: NetworkStatusValues
  data: T
}
