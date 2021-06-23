import Types from '../types/projectDetails';

export const getprojectDetailsRequest=(id)=>({
    type:Types.GET_PROJECT_DETAILS_REQUEST,
    payload:id,
});

export const getprojectDetailsSuccess=(data)=>({
    type:Types.GET_PROJECT_DETAILS_SUCCESS,
    payload:data,
});

export const getprojectDetailsFail=()=>({
    type:Types.GET_PROJECT_DETAILS_FAIL,
});

export const setLoading=()=>({
    type:Types.SET_LOADING,
});