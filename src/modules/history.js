import axios from "axios";
const { NEXT_PUBLIC_BASE_URL } = process.env

export const getAllhistories = (filter = "", page = "1", token) => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/transaction/history?filter=${filter}&page=${page}&limit=6`
  return axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
}

export const getHistoriesLimit = (token) => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/transaction/history?&page=1&limit=4`
  return axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
}