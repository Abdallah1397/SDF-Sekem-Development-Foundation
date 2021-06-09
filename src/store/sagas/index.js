import {fork} from 'redux-saga/effects';
import sagaSectors from './sectors';

export default function* rootSaga(){
    yield fork(sagaSectors);
}