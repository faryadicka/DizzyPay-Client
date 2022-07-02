import axios from "axios";
const HOST = `https://fazzpay.herokuapp.com`

export const registerAxios = (body) => {
  const URL = `${HOST}/auth/register`
  return axios.post(URL, body)
}

export const loginAxios = (body) => {
  const URL = `${HOST}/auth/login`
  return axios.post(URL, body)
}

export const createPinAxios = (body, token, id) => {
  const URL = `${HOST}/user/pin/${id}`
  return axios.patch(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
}

export const getProfileByIdAxios = (id, token) => {
  const URL = `${HOST}/user/profile/${id}`
  axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
}