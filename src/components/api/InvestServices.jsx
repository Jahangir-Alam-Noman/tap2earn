import axios from "axios";

const InvestServices = {};

InvestServices.list = async (params = null) => {
  let url = "/invest/list";
  const res = await axios
    .get(url, { params: params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

InvestServices.singleInvest = async (params) => {
  let url = `invest/details/${params}`;
  console.log(`url`, url);
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

InvestServices.store = async (data) => {
  let url = "/user-invest";
  const res = await axios
    .post(url, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return [];
    });
  return res;
};

InvestServices.history = async () => {
  let url = "/user-invest/list";
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

InvestServices.approved = async () => {
  let url = "user-invest/approve/list";
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

InvestServices.withDrawInvest = async (id) => {
  let url = `user-invest/withdraw/${id}`;
  const res = await axios
    .post(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

InvestServices.withDrawPackage = async (data) => {
  let url = `withdraw/store`;
  const res = await axios
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      // console.log("error :>> ", error.response.data);
      // response.status = 422;
      return error.response;
    });
  // console.log("resllll :>> ", res);
  return res;
};

// PackageServices.packageList = async (params = null) => {
//   let url = "/packages";
//   const res = axios
//     .get(url, { params: params })
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       return [];
//     });
//   return res;
// };
export default InvestServices;
