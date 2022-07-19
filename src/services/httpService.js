import axios from "axios";
import { toast } from "react-toastify";
//
//setToken(auth.getJWT());
//console.log(" http start---------------------------------");

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    //console.log("Interceptor called");
    console.log(error);
    toast.error("An unexpected error has occured");
    //toast("An unexpected error has occured");
  }

  return Promise.reject(error);
});

export function setToken(JWT) {
  axios.defaults.headers.common["x-auth-token"] = JWT;
  // console.log("===========================");
  // console.log(JWT);
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setToken,
};
