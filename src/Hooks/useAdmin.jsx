import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useSecureAxios from "./useSecureAxios";


const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const secureAxios = useSecureAxios();

  const { data: isAdmin } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
      try {
        const res = await secureAxios.get(`/users/${user?.email}`);
        console.log('isAdmin response', res.data);
        return res.data.admin;
      } catch (error) {
        console.error("Error fetching isAdmin:", error);
        return false; // Return false if there's an error
      }
    }
  });

  return [isAdmin];
};

export default useAdmin;
