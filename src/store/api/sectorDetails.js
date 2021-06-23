import axios from 'axios';
export const getSectorDetails =(sectorID)=>{
    return axios.get(`http://10.0.30.166:8080/sector/${sectorID}`);
}