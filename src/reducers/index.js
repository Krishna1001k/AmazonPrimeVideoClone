import { combineReducers } from "redux";
import tabHomeReducer from "../modules/Home/TabHome/reducer";
import tvShowsReducer from "../modules/Home/TVshow/reducer";

const rootReducer=combineReducers({
    
    tabHomeReducer,
    tvShowsReducer,
    
});

export default rootReducer;