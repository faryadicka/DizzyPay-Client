import axios from "axios";
const { NEXT_PUBLIC_BASE_URL } = process.env


export const postTopUpAxios = (body, token) => {
  const URL = `${NEXT_PUBLIC_BASE_URL}/transaction/top-up`
  return axios.post(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
}