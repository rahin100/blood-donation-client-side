import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://blood-donation-server-side-three.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
