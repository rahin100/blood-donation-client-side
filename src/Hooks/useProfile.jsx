import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useProfile = () => {
    const {user, loading} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {refetch, data: profile=[]} = useQuery({
        queryKey: ['profile', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/users?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })
    return [profile,refetch]
};

export default useProfile;