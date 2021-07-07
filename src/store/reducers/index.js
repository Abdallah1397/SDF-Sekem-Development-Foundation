import {combineReducers} from "redux";
import  SectorsReducer from './sectors';
import NewsReducer from './news';
import NewsDetailsReducer from './newsDetail';
import sectorDetailsReducer from './sectorDetails';
import projectsReducer from './projects';
import projectDetailsReducer from "./projectDetails";
import mediaCenterReducer from './mediacenter';


const rootReducer=combineReducers({
    sector:SectorsReducer,
    news:NewsReducer,
    newsDetail:NewsDetailsReducer,
    sectorDetails:sectorDetailsReducer,
    projects:projectsReducer,
    projectDetails:projectDetailsReducer,
    mediaCenter:mediaCenterReducer,
});
export default rootReducer;