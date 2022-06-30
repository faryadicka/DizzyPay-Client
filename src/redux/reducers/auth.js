import { authRegister } from "../actionCreator/actionStrings"

const initialState = {
  dataId: ""
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authRegister:
      const { id } = action.payload.data.data
      console.log(id)
      return { ...state, dataId: "" }
    default:
      return state
  }
}

export default authReducer