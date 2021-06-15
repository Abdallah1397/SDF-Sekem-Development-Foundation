import Types from '../types/news';

// declare an global State
const INITIAL_STATE={
    news:[],
    loading:false
};


// declare Reducers 
export default function getNews(state=INITIAL_STATE,action){
    const {type,payload}=action;
    switch(type){
        case Types.GET_NEWS_SUCCESS:
        return{
            ...state,
            news:payload.data,
            loading:false,
        };
        case Types.GET_NEWS_FAIL:
        return{
            ...state,
            news:{},
            loading:true,
        };
        default:
        return{
            ...state,
        }

    }
}