import axios from 'axios';

export const getNewsDetails=({id})=>{
    return axios.get(`http://10.0.30.166:8080/sector/:${id}`);
}