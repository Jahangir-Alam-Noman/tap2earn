import * as Types from "../types/Types";

const initialState = {
    isLoading: false,
    ourPlanData: [],

}
function OurPlanReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_OUR_PLAN_DATA:
            return {
                isLoading: action.payload.isLoading,
                ourPlanData: action.payload.data,
            }
        default:
            break;
    }
    return state;
}
export default OurPlanReducer;