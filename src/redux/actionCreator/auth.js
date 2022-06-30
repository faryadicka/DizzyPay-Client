import { authLogin, authRegister } from "./actionStrings"

import { loginAxios, registerAxios } from "../../modules/auth"


export const registerAction = (body) => {
  return {
    type: authRegister,
    payload: registerAxios(body)
  }
}

export const loginAction = (body) => {
  return {
    type: authLogin,
    payload: loginAxios(body)
  }
}