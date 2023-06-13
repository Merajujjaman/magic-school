import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const UpdateModal = ({ isOpen, onClose, item, refetch }) => {
    const [axiosSecure] = useAxiosSecure()

    const handleupdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const className = form.className.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;
        const updateClass = {className, availableSeats: parseInt(availableSeats), price: parseFloat(price)}

        axiosSecure.put(`/instructor/classes/${item?._id}`, updateClass)
        .then(res => {
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Update Successfull',
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch()
            }
        })
        onClose()
    }

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-70 z-40"></div>
            )}
            <div
                className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="bg-white w-2/3 md:w-1/4 mx-auto p-4 rounded shadow-xl transition-transform duration-1000 transform">

                    <form onSubmit={handleupdate}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-primary">Class Name</span>
                            </label>
                            <input type="text" defaultValue={item?.className} name='className' className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-primary">Available Seats</span>
                            </label>
                            <input type="number" defaultValue={item.availableSeats} name='availableSeats' className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-primary">Price</span>
                            </label>
                            <input type="number" defaultValue={item?.price} name='price' className="input input-bordered w-full max-w-xs" />
                        </div>
                        <button
                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
                            type='submit'
                        >
                            Update
                        </button>
                    </form>


                </div>
            </div>
        </>
    );
};

export default UpdateModal;