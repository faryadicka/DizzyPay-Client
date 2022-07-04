import axios from "axios";
const HOST = `https://fazzpay.herokuapp.com`
const { NEXT_PUBLIC_BASE_URL } = process.env


export const getTransferDataAxios = (body, token) => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/transaction/transfer`
  return axios.post(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
}

export const checkPinAxios = (pin, token) => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/user/pin?pin=${pin}`
  return axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
}

export const updatePinAxios = (id, body, token) => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/user/pin/${id}`
  return axios.patch(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
}