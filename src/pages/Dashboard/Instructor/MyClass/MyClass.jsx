import React, { useContext, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Providers/AuthProvider';
import SectionTitle from '../../../../Routs/components/SectionTitle';
import UpdateModal from './UpdateModal';

const MyClass = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const { data: allClasses = [], refetch } = useQuery({
        queryKey: ['allClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/instructor/classes/${user?.email}`)
            return res.data
        }

    })
    // console.log(allClasses);
    return (
        <>
            <div className='w-full mx-2'>
                <SectionTitle title={"My Classes"}></SectionTitle>

                <div className="overflow-x-auto mx-2">
                    <table className="table w-full mx-auto">
                        {/* head */}
                        <thead className=' bg-neutral' >
                            <tr className='text-white'>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Seats</th>
                                <th>Price</th>
                                <th>Enrolled</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th>Feedback</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                allClasses.map((item, index) =>
                                    <tr key={item._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="avatar">
                                                <div className=" rounded-lg w-12 md:w-28">
                                                    <img src={item?.classImage} alt="class image" />
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            {item?.className}
                                        </td>
                                        <td>
                                            {item?.availableSeats}
                                        </td>
                                        <td>
                                           ${item?.price}
                                        </td>

                                        <td >
                                            {item?.enrolled}
                                        </td>
                                        <td >
                                            {item?.status}
                                        </td>

                                        <td >
                                            <button onClick={openModal} className='btn btn-info btn-sm'>update</button>
                                        </td>
                                        <td >
                                            {item?.feedback ? item?.feedback : 'no feedback yeat'}
                                        </td>
                                        <UpdateModal refetch={refetch} item={item} isOpen={isModalOpen} onClose={closeModal} ></UpdateModal>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            
        </>
    );
};

export default MyClass;