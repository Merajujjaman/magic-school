import React, { useContext } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Providers/AuthProvider';

const MyClass = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {} = useQuery({
            queryKey: ['allClasses', user?.email ],
            enabled: !loading,
            queryFn: async () => {
                
            }
            
    })
    return (
        <div>
            <h1>my all classes</h1>
        </div>
    );
};

export default MyClass;