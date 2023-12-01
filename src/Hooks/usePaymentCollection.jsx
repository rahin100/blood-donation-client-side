import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios";


const usePaymentCollection = () => {
    const {user, loading} = useContext(AuthContext)
    const secureAxios = useSecureAxios()
    const {data: payment=[],refetch} = useQuery({
        queryKey:['payment',user?.email],
        enabled:!loading,
        queryFn: async () => {
            const res = await secureAxios(`/payment?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [payment,refetch]
};

export default usePaymentCollection;