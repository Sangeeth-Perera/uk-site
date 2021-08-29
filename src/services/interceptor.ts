import axios from "axios";


export function setDefaultHeader(key:any, value:string){
  axios.defaults.headers.common[key] = `Bearer ${value}`;
  axios.interceptors.request.use(
    (request) => {
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

export default axios;