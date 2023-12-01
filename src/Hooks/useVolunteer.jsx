import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useSecureAxios from "./useSecureAxios";
import { useQuery } from "@tanstack/react-query";

const useVolunteer = () => {
  const { user, loading } = useContext(AuthContext);
  const secureAxios = useSecureAxios();

  const { data: isVolunteer } = useQuery({
    queryKey: ["isVolunteer", user?.email],
    enabled: !loading,
    queryFn: async () => {
      try {
        const res = await secureAxios.get(`/users/volunteer/${user?.email}`);
        console.log("isVolunteer response", res.data);
        return res.data.volunteer;
      } catch (error) {
        console.error("Error fetching volunteer:", error);
        return false; // Return false if there's an error
      }
    },
  });

  return [isVolunteer,loading];
};

export default useVolunteer;
