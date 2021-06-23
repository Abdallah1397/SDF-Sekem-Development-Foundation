import Types from '../types/projects';

const INITIAL_STATE={
    projects:[],
    loading:false,
}
//  Sector Projects

export default function getProjects(state=INITIAL_STATE,action){
    const {type,payload}=action;
    switch(type){
        case Types.GET_PROJECTS_SUCCESS:
        return{
            ...state,
            projects:payload,
            loading:false,
        }
        case Types.GET_PROJECTS_FAIL:
        return{
            ...state,
            projects:[],
            loading:true,
        }
        default:
        return{
            ...state,
        }
    }
}