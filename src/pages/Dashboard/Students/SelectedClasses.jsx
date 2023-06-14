import React from 'react';
import useSelectedClasses from '../../../hooks/useSelectedClasses';
import SectionTitle from '../../../Routs/components/SectionTitle';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const SelectedClasses = () => {
    const [selectClasses, refetch] = useSelectedClasses()
    const [axiosSecure] = useAxiosSecure()
    const total = selectClasses.reduce((sum, item) => item.price + sum, 0)
    // console.log(selectClasses);
    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/student/classes/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        refetch()
                    })

            }
        })
    }
    return (
        <div className='w-full p-4'>
            <SectionTitle title={"Complete Your Payment"}></SectionTitle>
            <div className='my-2 flex justify-between items-center'>
                <h1 className='text-xl font-semibold text-primary'>Total Classes: {selectClasses.length}</h1>
                <div className='flex gap-2'>
                    <h1 className='text-xl font-semibold text-primary'>Amount: ${total}</h1>
                    <Link to='/dashboard/payments'>
                        <button className='btn btn-success btn-sm'>pay now</button>
                    </Link>
                </div>
            </div>
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
                            <th>Price</th>
                            <th className='text-center'>Action</th>


                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            selectClasses.map((item, index) =>
                                <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className=" rounded-lg w-12 md:w-24">
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
                                        ${item?.price}
                                    </td>

                                    <td className='text-center' >
                                        <button onClick={() => handleDelete(item)} className='btn btn-sm btn-error'>Delete</button>
                                    </td>

                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;