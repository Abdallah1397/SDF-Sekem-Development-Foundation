import {call,put,takeLatest} from 'redux-saga/effects';
import * as api from '../api/projectDetails';
import * as actions from '../actions/projectDetails';
import Types from '../types/projectDetails';

//  Sector Projects
function* getProjectDetail({payload}){
    try{
        const result=yield call(api.getProjectDetails,payload);
        console.log(result,"result")
        yield put(actions.getprojectDetailsSuccess(result.data.data));
    }catch{
        yield put(actions.getprojectDetailsFail());
    }
}

export default function* projectsSaga(){
    yield takeLatest(Types.GET_PROJECT_DETAILS_REQUEST,getProjectDetail);
}