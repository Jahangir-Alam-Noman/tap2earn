import axios from 'axios';
import Axios from 'axios';

import * as Types from "../types/Types";
let baseURL = process.env.REACT_APP_API_URL;



export const getOurPlansData = () => (dispatch) => {
    const responseData = {
        isLoading: false,
        status: true,
        data: []
    }
    dispatch({type: Types.GET_OUR_PLAN_DATA, payload: responseData});

    let axiosConfig = {
        headers: {
          Accept: "application/json",
        },
      };

    axios.get(`${baseURL}/packages`, axiosConfig)
    .then((res)=>{
        responseData.isLoading = false;
        responseData.data = res.data.data;

        dispatch({
            type:Types.GET_OUR_PLAN_DATA,
            payload:responseData
        });
    })
    .catch((err)=>{
        responseData.isLoading= false;
        responseData.data = [];

        dispatch({
            type:Types.GET_OUR_PLAN_DATA,
            payload:responseData
        })
    })
}