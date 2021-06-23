import { call,put,takeLatest } from "redux-saga/effects";
import * as api from '../api/sectorDetails';
import * as actions from '../actions/sectorDetails';
import Types from '../types/sectorsDetail';

function* sectorDetails({payload}){
    yield put(actions.setLoading(true));
    try{
        const result=yield call(api.getSectorDetails,payload);
        yield put(actions.getSectorDetailsSuccess(result.data.data));
    }catch(error){
        yield put(actions.getSectorDetailsFsil());
    }
}

export default function* sectorDetailsSaga(){
   yield takeLatest(Types.GET_SECTOR_DETAIL_REQUEST,sectorDetails);
}

