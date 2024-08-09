import { BASE_URL } from "./baseUrl";
import { CommonApi } from "./CommonApi";

export const register = async (body) => {
    return await CommonApi("POST", `${BASE_URL}/signup`, body)
}

export const login = async (body) => {
    return await CommonApi("POST", `${BASE_URL}/`, body)
}

export const addData = async (body, header) => {
    return await CommonApi("POST", `${BASE_URL}/add`, body, header)
}

export const getAllData = async () => {
    return await CommonApi("GET", `${BASE_URL}/getdata`)
}

export const deleteData = async (id) => {
    return await CommonApi("DELETE", `${BASE_URL}/delete/${id}`)
}

export const updateData = async(id,body)=>{
    return await CommonApi("PUT",`${BASE_URL}/edit/${id}`,body)
}