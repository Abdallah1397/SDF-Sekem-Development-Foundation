import {combineReducers} from "redux";
import  SectorsReducer from './sectors';
import NewsReducer from './news';



const rootReducer=combineReducers({
    sector:SectorsReducer,
    news:NewsReducer,
});
export default rootReducer;