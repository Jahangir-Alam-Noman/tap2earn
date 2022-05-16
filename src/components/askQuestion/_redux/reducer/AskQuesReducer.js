import * as Types from "../types/Types";

const initialState = {
    isLoading: false,
    askQuesData: [],

}
function AskQuesReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_ASK_QUES_DATA:
            return {
                isLoading: action.payload.isLoading,
                askQuesData: action.payload.data,
            }
        default:
            break;
    }
    return state;
}
export default AskQuesReducer;