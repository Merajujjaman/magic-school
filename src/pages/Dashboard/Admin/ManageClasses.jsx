import React, { useEffect } from 'react';

import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAllclasses from '../../../hooks/useAllclasses';

const ManageClasses = () => {
    // const [allClasses, react] = useAllclasses
    // console.log(allClasses);
    // const [axiosSecure] = useAxiosSecure()

    // const { data: allclass = [], refetch } = useQuery({
    //     queryKey: ['allclass'],

    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/classes/admin')
    //         console.log(res.data);
    //         return res.data
    //     }
    // })
    const [allClasses] = useAllclasses()
    console.log(allClasses);


    return (
        <div>
            <h1>Magage classes</h1>
        </div>
    );
};

export default ManageClasses;