import Types from '../types/sectorsDetail';
const INITIAL_STATE={
    sectorDetails:[],
    loading:false,
};


export default function getSectorDetails(state=INITIAL_STATE,action){
    const {payload,type}=action;
    switch(type){
        case Types.GET_SECTOR_DETAIL_SUCCESS:
        return{
            ...state,
            sectorDetails:payload,
            loading:false,
        }
        case Types.GET_SECTOR_DETAIL_FAIL:
        return{
            ...state,
            sectorDetails:[],
            loading:true,
        }
        default:
        return{
            ...state,
        }
    }
}
