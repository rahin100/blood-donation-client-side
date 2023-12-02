import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const secureAxios = axios.create({
  baseURL: "https://blood-donation-server-side-three.vercel.app"
});

const useSecureAxios = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  secureAxios.interceptors.request.use(
    async function (config) {
      try {
        const token = localStorage.getItem('access-token');
        console.log('stopped by interceptors', token);
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  secureAxios.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      try {
        const status = error.response.status;
        console.log('error in the interceptor', status);
        if (status === 401 || status === 403) {
          await logOut();
          navigate('login');
        }
        return Promise.reject(error);
      } catch (error) {
        return Promise.reject(error);
      }
    }
  );

  return secureAxios;
};

export default useSecureAxios;
