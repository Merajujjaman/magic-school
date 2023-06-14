import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const usePaymentData = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {data:paymentData=[], refetch} = useQuery({
        queryKey: ['paymentData', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const res = await axiosSecure.get(`/payments?email=${user?.email}`)
            return res.data
        }
    })
    return [paymentData, refetch]
};

export default usePaymentData;