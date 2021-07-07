import { call,put,takeLatest } from "@redux-saga/core/effects";
import * as api from '../api/mediacenter';
import * as actions from '../actions/mediacenter';
import Types from '../types/mediacenter';

function* getMediaCenter(){
    yield put(actions.setLoading(true));
    try{
        const result=yield call(api.getMediaCenter);
        yield put(actions.getMediaCenterSuccess(result.data));
        console.log(result,"mediaResult");
    }catch{
        yield put(actions.getMediaCenterFail());
    }
} 

export default function* getMediaCenterSaga(){
    yield takeLatest(Types.GET_ALL_MEDIA_CENTER_REQUEST,getMediaCenter);
}