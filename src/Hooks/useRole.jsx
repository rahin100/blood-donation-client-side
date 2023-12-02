import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useRole = () => {
  const axiosSecure = useAxiosSecure()
  const { user, loading } = useContext(AuthContext)
  const { data: role, isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await axiosSecure(`/users?email=${user?.email}`),
    queryKey: ['role'],
  })

  return [role, isLoading]
}

export default useRole;