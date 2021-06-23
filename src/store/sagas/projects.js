import {call,put,takeLatest} from 'redux-saga/effects';
import * as api from '../api/projects';
import * as actions from '../actions/projects';
import Types from '../types/projects';

//  Sector Projects
function* getProjects({payload}){
    try{
        const result=yield call(api.getProjects,payload);
        console.log(result,"result")
        yield put(actions.getProjectsSuccess(result.data.data));
    }catch{
        yield put(actions.getProjectsFail());
    }
}

export default function* projectsSaga(){
    yield takeLatest(Types.GET_PROJECTS_REQUEST,getProjects);
}