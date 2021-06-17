import {combineReducers} from "redux";
import  SectorsReducer from './sectors';
import NewsReducer from './news';
import NewsDetailsReducer from './newsDetail';



const rootReducer=combineReducers({
    sector:SectorsReducer,
    news:NewsReducer,
    newsDetail:NewsDetailsReducer,
});
export default rootReducer;