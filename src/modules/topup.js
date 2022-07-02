import axios from "axios";
const HOST = `https://fazzpay.herokuapp.com`

export const postTopUpAxios = (body, token) => {
  const URL = `${HOST}/transaction/top-up`
  return axios.post(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
}