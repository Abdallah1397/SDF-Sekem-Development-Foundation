import Types from '../types/mediacenter';

const INITAIL_STATE={
    media:[],
    loading:false,
}

export default function(state=INITAIL_STATE,actions){
    const {type,payload}=actions;
    switch(type){
        case Types.GET_ALL_MEDIA_CENTER_SUCCESS:
        return{
            ...state,
            media:payload,
            loading:false,
        }
        case Types.GET_ALL_MEDIA_CENTER_FAIL:
        return{
            ...state,
            media:[],
            loading:true,
        }
        default:
        return{
            ...state,
        }
    }
}