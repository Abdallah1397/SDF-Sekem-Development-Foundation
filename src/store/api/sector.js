import axios from 'axios';

export const getSectors=()=>{
    return axios.get("http://10.0.30.166:8080/all-sectors");
}

