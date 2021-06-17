import {call,put,takeLatest} from 'redux-saga/effects';
import * as api from '../api/newsDetails';
import * as actions from '../actions/newsDetails';
import Types from '../types/newsDetail';

function* getNewsDetail({payload}){
    yield put(actions.setLoading(true));
    try{
        const result=yield call(api.getNewsDetails,payload);
        console.log(payload,"payload");
        console.log(result.data,"result");
        yield put(actions.getNewsDetailsSuccess(result.data.data));
    }
    catch{
        yield put(actions.getNewsDetailsFail());
    }
   
} 

export default function* getNewDetailsSaga(){
    yield takeLatest(Types.GET_NEWS_DETAIL_REQUEST,getNewsDetail);
}
