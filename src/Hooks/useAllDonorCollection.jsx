import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAllDonorCollection = () => {
    const {loading} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {data: allDonor=[],refetch} = useQuery({
        queryKey:['allDonor'],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure("/dashboard/donation-request")
            // console.log('res from axios', res)
            return res.data;
        },
    })
    return [allDonor,refetch]
    
};

export default useAllDonorCollection;