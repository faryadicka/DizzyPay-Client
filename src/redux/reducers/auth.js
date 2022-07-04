import { authRegister, PENDING, FULFILLED, REJECTED, authLogin, topUp, getProfile, setNominal, setNotes, getReceiverInfo, getTransferData, authLogout } from "../actionCreator/actionStrings"

const initialState = {
  dataId: "",
  isLoggedin: false,
  isLoading: false,
  err: null,
  errMsg: "",
  successMsg: "",
  dataLogin: null,
  dataTopUp: null,
  dataInfo: null,
  nominal: 0,
  notes: "",
  receiverInfo: null,
  transferData: null,
  errNetWork: ""
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
      return { ...state, successMsg: "", errNetWork: action.payload.message, errMsg: action.payload.response.data.msg, isLoggedin: false, isLoading: false, err: action.payload }

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

    case getReceiverInfo + PENDING:
      return { ...state, isLoggedin: false, isLoading: true }
    case getReceiverInfo + FULFILLED:
      return { ...state, successMsg: action.payload.data.msg, errMsg: "", receiverInfo: action.payload.data, isLoggedin: true, isLoading: false, err: null }
    case getReceiverInfo + REJECTED:
      return { ...state, successMsg: "", errMsg: action.payload.response.data.msg, isLoggedin: false, isLoading: false, err: action.payload }

    case getTransferData + PENDING:
      return { ...state, isLoggedin: false, isLoading: true }
    case getTransferData + FULFILLED:
      return { ...state, successMsg: action.payload.data.msg, errMsg: "", transferData: action.payload.data, isLoggedin: true, isLoading: false, err: null }
    case getTransferData + REJECTED:
      return { ...state, successMsg: "", errMsg: action.payload.response.data.msg, isLoggedin: false, isLoading: false, err: action.payload }

    case setNominal:
      return { ...state, nominal: action.payload.nominal }
    case setNotes:
      return { ...state, notes: action.payload.notes }

    case authLogout:
      const { remove } = action.payload
      state.dataLogin = remove
      return { ...state }
    default:
      return state
  }
}

export default authReducer