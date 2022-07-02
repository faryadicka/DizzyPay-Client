import { authLogin, authRegister, topUp, getProfile } from "./actionStrings"

import { loginAxios, registerAxios, getProfileByIdAxios } from "../../modules/auth"
import { postTopUpAxios } from "../../modules/topup"


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

export const topUpAction = (body, token) => {
  return {
    type: topUp,
    payload: postTopUpAxios(body, token)
  }
}

export const getProfileAction = (id, token) => {
  return {
    type: getProfile,
    payload: getProfileByIdAxios(id, token)
  }
}