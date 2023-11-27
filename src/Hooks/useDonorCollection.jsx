import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useDonorCollection = () => {
    const {user, loading} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {data: donor=[],refetch} = useQuery({
        queryKey:['donor',user?.email],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure(`dashboard/donation-request?requesterEmail=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })
    return [donor,refetch]
};

export default useDonorCollection;