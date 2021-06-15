import axios from 'axios';
export const getNews=()=> {
    return axios.get('http://10.0.30.166:8080/all-news');
}