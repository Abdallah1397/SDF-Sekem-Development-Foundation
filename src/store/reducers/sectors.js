import Types from '../types/sector';

const INITIAL_STATE={
    sectors:{},
    loading:false,
}

export default function getSectors(state=INITIAL_STATE,action){
    const {type,payload}=action;
    switch(type){
        case Types.GET_ALL_SECTORS_SUCCESS:
           return{
               ...state,
               sectors:payload,
               loading:false,
           };
        case Types.GET_ALL_SECTORS_FAIL:
        return{
            ...state,
            sectors:{},
            loading:true,
        }
        default:
        return{
            ...state,
        }

        
    }
}