import {fork} from 'redux-saga/effects';
import sagaSectors from './sectors';
import sagaNews from './news';
import sagaNewsDetail from './newsDetails';
import sagaSectorDetails from './sectorDetails';
import sagaProjects from './projects';
import sagaProjectDetails from './projectDetails';
import sagaMediaCenter from './mediacenter'

export default function* rootSaga(){
    yield fork(sagaSectors);
    yield fork(sagaNews);
    yield fork(sagaNewsDetail);
    yield fork(sagaSectorDetails);
    yield fork(sagaProjects);
    yield fork(sagaProjectDetails);
    yield fork(sagaMediaCenter);
    
}