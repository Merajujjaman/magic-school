import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../Routs/components/SectionTitle';

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure()
    const {data:instructors=[], refetch} = useQuery({
        queryKey:['instrutors'],
        queryFn: async () => {
            const res = await axiosSecure.get('/student/instructor')
            return res.data
        }
    })
    // console.log(instructors);

    return (
        <div className='my-20 '>
            <SectionTitle title={"Our Honorable Instructors"}></SectionTitle>
            <div className="overflow-x-auto mx-2">
                <table className="table w-full md:w-2/4 mx-auto">
                    {/* head */}
                    <thead className=' bg-neutral' >
                        <tr className='text-white'>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            instructors.map((user, index) =>
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
                                    <td>
                                        {user?.email}
                                    </td>

                                </tr>)
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Instructors;