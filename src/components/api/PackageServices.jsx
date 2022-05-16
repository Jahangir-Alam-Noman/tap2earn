import axios from "axios";
const PackageServices = {};

PackageServices.packageList = async (params = null) => {
  let url = "/packages";
  const res = axios
    .get(url, { params: params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return [];
    });
  return res;
};
//
PackageServices.singlePackage = async (params) => {
  let url = `package/details/${params}`;
  console.log();
  const res = axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

PackageServices.store = async (data) => {
  let url = "/user-package";
  const res = await axios
    .post(url, data)
    .then((response) => {
      console.log(`response`, response);
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return res;
};

PackageServices.history = async () => {
  let url = "/user-package/history";
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

export default PackageServices;
