import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAllclasses from '../../../hooks/useAllclasses';
import SectionTitle from '../../../Routs/components/SectionTitle';
import Swal from 'sweetalert2';
import FeedbackModal from './FeedbackModal';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const [allClasses, refetch] = useAllclasses()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleApprove = (item) => {
        axiosSecure.patch(`/class/approve/${item._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDeny = (item) => {
        axiosSecure.patch(`/class/deny/${item._id}`)
        .then(res => {
            if (res.data.modifiedCount > 0) {
                refetch()
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: `Send a feedback for deny`,
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        })
    }


    return (
        <div className='w-full'>
            <SectionTitle title={"Manage Classes"}></SectionTitle>

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
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Enrolled</th>
                            <th>Status</th>
                            <th className='text-center'>Action</th>


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
                                            <div className=" rounded-lg w-12">
                                                <img src={item?.classImage} alt="class image" />
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        {item?.className}
                                    </td>
                                    <td>
                                        {item?.instructorName}
                                    </td>
                                    <td>
                                        {item?.instructorEmail}
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
                                    <td className={`${item?.status === 'approve' && 'text-primary font-bold' || item?.status === 'deny' && 'text-error font-bold'}`} >
                                        {item?.status}
                                    </td>

                                    <td className='text-center' >
                                        <button disabled={item?.status !== 'pending'} onClick={() => handleApprove(item)} className='btn btn-primary btn-xs  mr-2'> Approve </button>
                                        <button disabled={item?.status !== 'pending'} onClick={() => handleDeny(item)} className='btn btn-error btn-xs mr-2'>Deny</button>
                                        <button className='btn btn-info btn-xs  mr-2' onClick={openModal} >Feedback</button>
                                    </td>

                                    <FeedbackModal item={item} isOpen={isModalOpen} onClose={closeModal} ></FeedbackModal>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default ManageClasses;