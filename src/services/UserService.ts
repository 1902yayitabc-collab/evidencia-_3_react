import axios from "axios"
import type { IUser } from "../interfaces/users/IUser"

const API_URL="http://localhost:3006/users"


export const getAllUsers = async() => {
    const response = await axios.
                            get(API_URL)
    const data = await response.data 
    return data                         
}

export const createUser = async(u: IUser) => {
    const response = await axios.post(API_URL, u)
    const data = await response.data
    return data
}