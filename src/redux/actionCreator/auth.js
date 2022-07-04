import { authLogin, authRegister, topUp, getProfile, setNominal, setNotes, getReceiverInfo, getTransferData, authLogout } from "./actionStrings"

import { loginAxios, registerAxios, getProfileByIdAxios } from "../../modules/auth"
import { postTopUpAxios } from "../../modules/topup"
import { getTransferDataAxios } from "../../modules/transfer"


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

export const getReceiverAction = (id, token) => {
  return {
    type: getReceiverInfo,
    payload: getProfileByIdAxios(id, token)
  }
}

export const setNominalAction = (nominal) => {
  return {
    type: setNominal,
    payload: {
      nominal
    }
  }
}

export const setNotesAction = (notes) => {
  return {
    type: setNotes,
    payload: {
      notes
    }
  }
}

export const getTransferDataAction = (body, token) => {
  return {
    type: getTransferData,
    payload: getTransferDataAxios(body, token)
  }
}

export const logoutAction = (remove) => {
  return {
    type: authLogout,
    payload: {
      remove
    }
  }
}