import {fork} from 'redux-saga/effects';
import sagaSectors from './sectors';
import sagaNews from './news';
import sagaNewsDetail from './newsDetails';

export default function* rootSaga(){
    yield fork(sagaSectors);
    yield fork(sagaNews);
    yield fork(sagaNewsDetail);
}