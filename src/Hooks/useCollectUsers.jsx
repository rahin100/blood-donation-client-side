import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCollectUsers = () => {

    const axiosSecure = useAxiosSecure()
    const {data: allUsers=[],refetch} = useQuery({
        queryKey:['allUsers'],
        queryFn: async () => {
            const res = await axiosSecure("/users")
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [allUsers,refetch]
};

export default useCollectUsers;