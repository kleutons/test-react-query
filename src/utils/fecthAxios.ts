import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://api.github.com';

export function fecthAxios(url:string, options?: AxiosRequestConfig){
    const retorno = axios?.get(url, options)
    return retorno ;
}

export function setUrl(value:string){
    return `${BASE_URL}${value}`;
}