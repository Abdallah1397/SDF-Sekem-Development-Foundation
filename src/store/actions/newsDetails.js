import Types from '../types/newsDetail';

// declare a function to return action
export const getNewsDetailsRequest=(newsID)=>({
    type:Types.GET_NEWS_DETAIL_REQUEST,
    payload:newsID,
});

export const getNewsDetailsSuccess=(data)=>({
    type:Types.GET_NEWS_DETAIL_SUCCESS,
    payload:data,
});

export const getNewsDetailsFail=()=>({
    type:Types.GET_NEWS_DETAIL_FAIL,
})

export const setLoading=()=>({
    type:Types.SET_LOADING,
})


