import Types from "../types/sector";

export const getSectorsRequest = () => ({
  type: Types.GET_ALL_SECTORS_REQUEST,
});

export const getSectorsSuccess = ({ data }) => ({
  type: Types.GET_ALL_SECTORS_SUCCESS,
  payload: { data },
});

export const getSectorsFail = () => ({
  type: Types.GET_ALL_SECTORS_FAIL,
});

export const setLoading = () => ({
  type: Types.SET_LOADING,
});
