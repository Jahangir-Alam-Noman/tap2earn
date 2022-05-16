import * as Types from "../types/Types";

const initialState = {
    isLoading: false,
    videoList: [],

}
function MyTaskReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_VIDEO_LIST:
            return {
                isLoading: action.payload.isLoading,
                videoList: action.payload.data,
            }
        default:
            break;
    }
    return state;
}
export default MyTaskReducer;