// // lib/axiosInstance.js

// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:5000', // Replace with your API base URL
// });

// // Request interceptor
// axiosInstance.interceptors.request.use(
// //   config => {
// //     // Add auth token or any other custom headers
// //     const token = localStorage.getItem('token');
// //     console("token",token)
// //     if (token) {
// //       config.headers.Authorization = `Bearer ${token}`;
// //     }
// //     return config;
// //   },
// //   error => {
// //     return Promise.reject(error);
// //   }
// );

// // Response interceptor
// axiosInstance.interceptors.response.use(
//   response => {
//     // Any status code within the range of 2xx cause this function to trigger
//     return response;
//   },
//   error => {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     if (error.response.status === 401) {
//       // Handle unauthorized access
     
//       console.error('Unauthorized access - redirecting to login');
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
