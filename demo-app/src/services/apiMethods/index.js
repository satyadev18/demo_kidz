import axios from "axios";

const BASEURL = process.env.REACT_APP_BASE_URL;

export const getApiUrl = (url) => `${BASEURL}${url}`;
export const post = (url, payload) =>
  axios.post(getApiUrl(url), payload).catch((error) => {
    return error.response;
  });
