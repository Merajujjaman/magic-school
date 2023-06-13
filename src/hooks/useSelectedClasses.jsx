import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useSelectedClasses = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const {data:selectClasses=[], refetch} = useQuery({
        queryKey: ['selectClasses', user?.email ],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/setudent/selectedClasses?email=${user?.email}`)
            return res.data
        }
    })
    return [selectClasses, refetch]
    
};

export default useSelectedClasses;