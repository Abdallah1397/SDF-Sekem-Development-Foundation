import axios from "axios"

//  to Get the Projects of Sectors
export const getProjects=(projectID)=>{
    return axios.get(`http://10.0.30.166:8080/projects-programs/${projectID}`);
}