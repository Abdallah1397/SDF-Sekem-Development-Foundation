import Types from '../types/projects';

//  Sector Projects

export const getProjectsRequest=(id)=>({
    type:Types.GET_PROJECTS_REQUEST,
    payload:id,
});

export const getProjectsSuccess=(data)=>({
    type:Types.GET_PROJECTS_SUCCESS,
    payload:data,
});

export const getProjectsFail=()=>({
    type:Types.GET_PROJECTS_FAIL,
});

export const setLoading=()=>({
    type:Types.SET_LOADING,
});