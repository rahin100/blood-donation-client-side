import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCollectAllBlog = () => {
    const axiosSecure = useAxiosSecure()
    const {data: allBlogs=[],refetch} = useQuery({
        queryKey:['allBlogs'],
        queryFn: async () => {
            const res = await axiosSecure("/dashboard/all-blogs")
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [allBlogs,refetch]
};

export default useCollectAllBlog;
