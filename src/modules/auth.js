import axios from "axios";
const { NEXT_PUBLIC_BASE_URL } = process.env

export const registerAxios = (body) => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/auth/register`
  return axios.post(URL, body)
}

export const forgotPassAxios = (body) => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/auth/forgot-password`
  return axios.post(URL, body)
}

export const resetPassAxios = (body) => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/auth/reset-password`
  return axios.patch(URL, body)
}

export const loginAxios = (body) => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/auth/login`
  return axios.post(URL, body)
}

export const logoutAxios = () => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/auth/logout`
  return axios.post(URL)
}

export const createPinAxios = (body, token, id) => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/user/pin/${id}`
  return axios.patch(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
}

export const getProfileByIdAxios = (id, token) => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/user/profile/${id}`
  return axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
}

export const getReceiverAxios = (search = "", sort = "", page = "1", token) => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/user?search=${search}&sort=${sort}&page=${page}`
  return axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
}

export const updateProfileAxios = (id, body, token) => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/user/image/${id}`
  return axios.patch(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
}

export const updatePhoneNumberAxios = (id, body, token) => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/user/profile/${id}`
  return axios.patch(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
}

export const updatePasswordAxios = (id, body, token) => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/user/password/${id}`
  return axios.patch(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
}

export const updateFullNameAxios = (id, body, token) => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/user/profile/${id}`
  return axios.patch(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
}