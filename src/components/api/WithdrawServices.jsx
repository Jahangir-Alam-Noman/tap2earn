import axios from "axios";

const WithdrawServices = {};

WithdrawServices.history = async () => {
  let url = "/withdraw/history";
  const res = await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

WithdrawServices.limit = async () => {
  let url = "/withdraw/limit";
  const res = await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

export default WithdrawServices;
