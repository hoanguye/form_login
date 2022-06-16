import axios from "axios";
import {IRegisterParams} from 'models/auth'
import {URL_BASE }  from './constants'

const api = axios.create({
    baseURL: URL_BASE
})

export const getCountry = async () => {
    const res = await api.get('location');
    return res.data;
}
export const getCity = async (id: number) => {
    const res = await api.get(`location?pid=${id}`);
    return res.data;
}

export const onRegister = async (params: IRegisterParams) => {
    const res = await api.post('auth/register', params);
    return res.data;
}


export const getInfo = async (page:number) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=${page}&_end=${page + 10}`);
    return res.data;
}
