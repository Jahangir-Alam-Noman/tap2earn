import axios from "axios";
import * as Types from "../Types/Types";
let baseURL = process.env.REACT_APP_API_URL;

export const getAllPackagePlan = () => (dispatch) => {
  const responseData = {
    isLoading: true,
    data: [],
  };

  dispatch({
    type: Types.GET_ALL_PACKAGE_PLAN,
    payload: responseData,
  });

  let axiosConfig = {
    headers: {
      Accept: "application/json",
    },
  };

  axios.get(`${baseURL}/packages`, axiosConfig)
    .then((res) => {
      responseData.isLoading = false;
      responseData.data = res.data.data;

      dispatch({
        type: Types.GET_ALL_PACKAGE_PLAN,
        payload: responseData,
      });
    })
    .catch((err) => {
      responseData.isLoading = false;
      responseData.data = [];
      dispatch({
        type: Types.GET_ALL_PACKAGE_PLAN,
        payload: responseData,
      });
    });
};
