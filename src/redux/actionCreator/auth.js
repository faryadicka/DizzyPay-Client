import { authRegister } from "./actionStrings"

import { registerAxios } from "../../modules/auth"


export const registerAction = (body) => {
  return {
    type: authRegister,
    payload: registerAxios(body)
  }
}