import Types from '../types/sectorsDetail';

export const getSectorDetailsRequest=(sectorID)=>({
    type:Types.GET_SECTOR_DETAIL_REQUEST,
    payload:sectorID,

});

export const getSectorDetailsSuccess=(data)=>({
    type:Types.GET_SECTOR_DETAIL_SUCCESS,
    payload:data,
});

export const getSectorDetailsFsil=()=>({
    type:Types.GET_SECTOR_DETAIL_FAIL,
});

export const setLoading=()=>({
    type:Types.SET_LOADING,
});
