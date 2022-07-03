import axios from "axios";
const HOST = `https://fazzpay.herokuapp.com`

export const getTransferDataAxios = (body, token) => {
  const URL = `${HOST}/transaction/transfer`
  return axios.post(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
}

export const checkPinAxios = (pin, token) => {
  const URL = `${HOST}/user/pin?pin=${pin}`
  return axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
}