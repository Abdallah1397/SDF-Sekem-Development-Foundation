import axios from 'axios';

export const getNewsDetails=async (id)=>{
    return await axios.get(`http://10.0.30.166:8080/news/${id}`);
}