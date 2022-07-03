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
  return axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
}

export const getReceiverAxios = (search = "", sort = "", page = "", token) => {
  const URL = `${HOST}/user?search=${search}&sort=${sort}&page=${page}`
  return axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
}

export const updateProfileAxios = (id, body, token) => {
  const URL = `${HOST}/user/image/${id}`
  return axios.patch(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
}