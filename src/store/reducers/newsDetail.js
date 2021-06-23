import Types from '../types/newsDetail';

const INITIAl_STATE={
    detailOfNews:[],
    loading:false,
}

export default function getNewsDetail(state=INITIAl_STATE,actions){
    const {type,payload}=actions;
    switch(type){
        case Types.GET_NEWS_DETAIL_SUCCESS:{
            return{
                ...state,
                detailOfNews:payload,
                loading:false,
            }
        };
        case Types.GET_NEWS_DETAIL_FAIL:{
            return{
                ...state,
                detailOfNews:[],
                loading:true,
            }
        };
        default:{
            return{
                ...state,
            }
        };
    }
}