import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Allusers = () => {
    const [axiosSecure] = useAxiosSecure()

    const {data: users=[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    console.log(users);

    return (
        <div>
            <h1>all users</h1>
        </div>
    );
};

export default Allusers;