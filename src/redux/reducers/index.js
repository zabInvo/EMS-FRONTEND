import { combineReducers } from "redux";
import loginReducer from "./admin/loginReducer";
const reducer = combineReducers({
  adminlogin: loginReducer,
});

export default reducer;
