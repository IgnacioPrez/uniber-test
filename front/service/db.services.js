import { baseURL } from "../utils/constants"

export const getRequest = async (endPoint,id) => {
    const res = await fetch(`${baseURL}/manage${endPoint}/${id}`)
    const data = await res.json()
    return data
}