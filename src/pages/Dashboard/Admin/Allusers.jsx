import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../Routs/components/SectionTitle';
import Swal from 'sweetalert2';

const Allusers = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    
    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            // console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${user.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeInstructor =(user) => {
        axiosSecure.patch(`/users/instructor/${user._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${user.name} is an Instructor now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className='w-full'>

            <SectionTitle title={"Manage Users"}></SectionTitle>
            <div className="overflow-x-auto mx-2">
                <table className="table w-full md:w-3/4 mx-auto">
                    {/* head */}
                    <thead className=' bg-neutral' >
                        <tr className='text-white'>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th className='text-center'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user?.photo} alt="user's image" />
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        {user?.name}
                                    </td>

                                    <td >
                                        {user.role === 'admin' && 'Admin'}
                                        {user.role === 'instructor' && 'Instructor'}
                                        {user?.role !== 'instructor' && user?.role !== 'admin' && 'Student'}
                                    </td>

                                    <td className='text-center'>
                                        <button disabled={user?.role === 'instructor'} onClick={() => handleMakeInstructor(user)} className="btn btn-info btn-sm border-0 text-white mr-2">Make Instructor</button>
                                        <button disabled={user?.role === 'admin'} onClick={() => handleMakeAdmin (user)} className="btn btn-error btn-sm border-0 text-white">Make Admin</button>
                                    </td>

                                </tr>)
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Allusers;