import {combineReducers} from "redux";
import  SectorsReducer from './sectors'



const rootReducer=combineReducers({
    sector:SectorsReducer,
});
export default rootReducer;