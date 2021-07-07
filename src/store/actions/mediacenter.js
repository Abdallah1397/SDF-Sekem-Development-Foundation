import Types from '../types/mediacenter';

export const getMediaCenterRequest=()=>({
    type:Types.GET_ALL_MEDIA_CENTER_REQUEST,
})

export const getMediaCenterSuccess=({data})=>({
    type:Types.GET_ALL_MEDIA_CENTER_SUCCESS,
    payload:data,
})

export const getMediaCenterFail=()=>({
    type:Types.GET_ALL_MEDIA_CENTER_FAIL,
})

export const setLoading=()=>({
    type:Types.SET_LOADING,
})
