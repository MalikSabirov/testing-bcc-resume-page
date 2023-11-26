import * as Yup from "yup"
import { clearLoginMask } from "./formatters"

export const phoneNumberValidation = Yup.string()
  .required("Обязательно")
  .transform((value) => clearLoginMask(value))
  .length(10, "Неверный формат")
