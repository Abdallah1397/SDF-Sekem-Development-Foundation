import Types from '../types/news';

export const getNewsRequest=()=>({
    type:Types.GET_NEWS_REQUEST,
})

export const getNewsSuccess=({data})=>({
    type:Types.GET_NEWS_SUCCESS,
    payload:data,
})

export const getNewsFail=()=>({
    type:Types.GET_NEWS_FAIL,
})

export const setLoading=()=>({
    type:Types.SET_LOADING,
})