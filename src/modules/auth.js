import axios from "axios";
const { HOST } = process.env

export const registerAxios = (body) => {
  const URL = `https://fazzpay.herokuapp.com/auth/register`
  return axios.post(URL, body)
}