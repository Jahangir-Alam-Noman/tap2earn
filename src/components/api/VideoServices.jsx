import axios from "axios";

const VideoServices = {};

VideoServices.count = async (id) => {
  let url = `/video/watched-count/${id}`;
  // axios.get('/sanctum/csrf-cookie').then(response => {
  const res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
  return res;
};

VideoServices.videoWatched = async (data) => {
  let url = "/video/watched";
  const res = await axios
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return res;
};
VideoServices.incomeVideo = async () => {
  let url = "report/income-statement";
  // axios.get('/sanctum/csrf-cookie').then(response => {
  const res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
  return res;
};

VideoServices.nonPackage = async (data) => {
  let url = "video/non-package/watched";
  const res = await axios
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

VideoServices.nonincome = async () => {
  let url = "video/non-package/watched-count";
  // axios.get('/sanctum/csrf-cookie').then(response => {
  const res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
  return res;
};

export default VideoServices;
