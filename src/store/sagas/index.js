import {fork} from 'redux-saga/effects';
import sagaSectors from './sectors';
import sagaNews from './news';

export default function* rootSaga(){
    yield fork(sagaSectors);
    yield fork(sagaNews);
}