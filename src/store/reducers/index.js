import {combineReducers} from "redux";
import  SectorsReducer from './sectors';
import NewsReducer from './news';
import NewsDetailsReducer from './newsDetail';
import sectorDetailsReducer from './sectorDetails';
import projectsReducer from './projects';
import projectDetailsReducer from "./projectDetails";


const rootReducer=combineReducers({
    sector:SectorsReducer,
    news:NewsReducer,
    newsDetail:NewsDetailsReducer,
    sectorDetails:sectorDetailsReducer,
    projects:projectsReducer,
    projectDetails:projectDetailsReducer,
});
export default rootReducer;