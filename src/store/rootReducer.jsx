import { combineReducers } from "redux";
import CartSlice from "./adcart";

const rootReducer = combineReducers ( {

    cart : CartSlice.reducer,
    


} )
export default rootReducer