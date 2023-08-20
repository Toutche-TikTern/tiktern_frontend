// @ts-nocheck
import axios from 'axios';
import { getCookie } from 'cookies-next';

// without cookies unprotected requests
export const axiosClient = axios.create();

const token = getCookie('token');
// console.log('tokennnt', token);
// https://tiktern-server.onrender.com
// http://localhost:1999/api/v1

axiosClient.defaults.baseURL =
  'https://tiktern-backend.azurewebsites.net/api/v1';
axiosClient.defaults.withCredentials = true;
axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${token}`,
};

//All request will wait 4 seconds before timeout
axiosClient.defaults.timeout = 150000;

axiosClient.defaults.withCredentials = true;

// axios.interceptors.request.use(function (request) {
//     request.headers['Content-Type'] = 'multipart/form-data';
//     return request;
//   }, null, { synchronous: true });

// todo:: handle refresh token if access is expired!!

// axios.interceptors.response.use(function (response) {
//     //Dispatch any action on success
//     return response;
//   }, function (error) {
//       if(error.response.status === 401) {
//        //Add Logic to
//              //1. Redirect to login page or
//              //2. Request refresh token
//       }
//     return Promise.reject(error);
//   });

// todo: upload progress tracking
// const [progress, setProgress] = useState(0);

// //Logic to show upload progress

// const config = {
//    onUploadProgress: progressEvent => {
//      const percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
//      setProgress(percentCompleted);
//    }
//  };

// try {
//    const updatedData = axios.put('/upload/server', data, config);
//    return updatedData.response.data;
//  } cactch(error) {
//    //log error
//    }
// }
