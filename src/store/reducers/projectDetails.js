import Types from '../types/projectDetails';

const INITIAL_STATE={
    projectDetails:[],
    loading:false,
}
//  Sector Project Details

export default function getProjectDetails(state=INITIAL_STATE,action){
    const {type,payload}=action;
    switch(type){
        case Types.GET_PROJECT_DETAILS_SUCCESS:
        return{
            ...state,
            projectDetails:payload,
            loading:false,
        }
        case Types.GET_PROJECT_DETAILS_FAIL:
        return{
            ...state,
            projectDetails:[],
            loading:true,
        }
        default:
        return{
            ...state,
        }
    }
}