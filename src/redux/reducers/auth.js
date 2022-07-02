import { authRegister, PENDING, FULFILLED, REJECTED, authLogin, topUp, getProfile } from "../actionCreator/actionStrings"

const initialState = {
  dataId: "",
  isLoggedin: false,
  isLoading: false,
  err: null,
  errMsg: "",
  successMsg: "",
  dataLogin: {},
  dataTopUp: {},
  dataInfo: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authRegister + PENDING:
      return { ...state, isLoggedin: false, isLoading: true }
    case authRegister + FULFILLED:
      return { ...state, successMsg: action.payload.data.msg, errMsg: "", dataId: action.payload.data.data.id, isLoggedin: true, isLoading: false, err: null }
    case authRegister + REJECTED:
      return { ...state, successMsg: "", errMsg: action.payload.response.data.msg, isLoggedin: false, isLoading: false, err: action.payload, dataId: "" }

    case authLogin + PENDING:
      return { ...state, isLoggedin: false, isLoading: true }
    case authLogin + FULFILLED:
      return { ...state, successMsg: action.payload.data.msg, errMsg: "", dataLogin: action.payload.data.data, isLoggedin: true, isLoading: false, err: null }
    case authLogin + REJECTED:
      return { ...state, successMsg: "", errMsg: action.payload.response.data.msg, isLoggedin: false, isLoading: false, err: action.payload }

    case topUp + PENDING:
      return { ...state, isLoggedin: false, isLoading: true }
    case topUp + FULFILLED:
      return { ...state, successMsg: action.payload.data.msg, errMsg: "", dataTopUp: action.payload.data, isLoggedin: true, isLoading: false, err: null }
    case topUp + REJECTED:
      return { ...state, successMsg: "", errMsg: action.payload.response.data.msg, isLoggedin: false, isLoading: false, err: action.payload }

    case getProfile + PENDING:
      return { ...state, isLoggedin: false, isLoading: true }
    case getProfile + FULFILLED:
      return { ...state, successMsg: action.payload.data.msg, errMsg: "", dataInfo: action.payload.data, isLoggedin: true, isLoading: false, err: null }
    case getProfile + REJECTED:
      return { ...state, successMsg: "", errMsg: action.payload.response.data.msg, isLoggedin: false, isLoading: false, err: action.payload }

    default:
      return state
  }
}

export default authReducer