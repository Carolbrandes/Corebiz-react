import axios from "axios";

const baseUrl = "https://corebiz-test.herokuapp.com/api/v1"

export const GET_PRODUCTS = async () => {
    const resp = await axios.get(`${baseUrl}/products`)
    return resp.data
}

export const POST_USER = async (usuario: object) => {
    const resp = await axios.post(`${baseUrl}/newsletter`, usuario)
    return resp.status
}