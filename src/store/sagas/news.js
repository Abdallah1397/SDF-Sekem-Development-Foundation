import {call,put,takeLatest} from 'redux-saga/effects';
import * as api from '../api/news';
import * as actions from '../actions/news';
import Types from '../types/news';

//  use Genrator Function to working with promise (wait to make request )
function* news(){
    yield put(actions.setLoading(true));
    try{
        // waiting the request and put the response in result 
        const result=yield call(api.getNews);
        // put the result in the actions payload
        yield put(actions.getNewsSuccess(result));
    }catch(error){
        yield put(actions.getNewsFail());
    }
}

export default function* newsSaga(){
    // take the request and work within news function
    yield takeLatest(Types.GET_NEWS_REQUEST,news);
}