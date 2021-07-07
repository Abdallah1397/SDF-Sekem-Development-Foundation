import axios from "axios";

export const getMediaCenter=()=>{
    return axios.get('http://10.0.30.166:8080/media-centers');
}