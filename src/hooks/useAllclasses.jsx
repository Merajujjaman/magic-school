import  { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/AuthProvider';

const useAllclasses = () => {
    // const { loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {data: allClasses=[], refetch} = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get('/classes/admin')
            console.log("axion all class", res);
            return res.data
        }
    })
    
    return [allClasses, refetch]


};

export default useAllclasses;