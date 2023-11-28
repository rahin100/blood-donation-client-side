import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useDonationRequest = () => {
    const {user,loading} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {data: donationRequest=[],refetch} = useQuery({
        queryKey:['donationRequest',user],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure("/dashboard/donation-request")
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [donationRequest,refetch]
};

export default useDonationRequest;