import { combineReducers } from "redux";
import AskQuesReducer from "../components/askQuestion/_redux/reducer/AskQuesReducer";
import OurPlanReducer from "../components/ourPlans/_redux/reducer/OurPlanReducer";
import MyTaskReducer from "../modules/userDashboard/components/myTask/_redux/reducer/MyTaskReducer";
import AuthReducer from '../components/Authentication/_redux/Reducer/AuthReducer'
import UserDataReducer from '../components/_redux/getUserData/Reducer/UserDataReducer'
import PackagePlanReducer from "../components/packagesPlan/_redux/Reducer/PackagePlanReducer";

// combine all of the reducers here
const rootReducer = combineReducers({
  // GlobalReducer: GlobalReducer,
  OurPlanReducer: OurPlanReducer,
  AskQuesReducer: AskQuesReducer,
  MyTaskReducer: MyTaskReducer,
  AuthReducer:AuthReducer,
  UserDataReducer:UserDataReducer,
  PackagePlanReducer:PackagePlanReducer,
 
});

export default rootReducer;