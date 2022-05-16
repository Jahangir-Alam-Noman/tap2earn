import * as Types from "../Types/Types";

const initialState = {
  isLoading: true,
  packagePlanData: [],
};



const PackagePlanReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_ALL_PACKAGE_PLAN:
            return {
                ...state,
                isLoading:action.payload.isLoading,
                packagePlanData : action.payload.data
            }
        default:
            return state
    }
}

export default PackagePlanReducer
