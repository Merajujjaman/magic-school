import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAllclasses from '../../../hooks/useAllclasses';
import Swal from 'sweetalert2';

const FeedbackModal = ({ isOpen, onClose, item }) => {
    const [axiosSecure] = useAxiosSecure()
    const [,refetch] = useAllclasses()
    const handleupdate = (e) => {
        e.preventDefault()
        const feedback = e.target.feedback.value;

        axiosSecure.patch(`/class/feedback/${item._id}`, {feedback})
        .then(res => {
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Feedback send...',
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch()
            }
        })
        
        
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-primary font-bold">Feedback</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-32" name='feedback' placeholder="write your feedback"></textarea>
                            
                        </div>
                        <button
                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
                            type='submit'
                        >
                            Update
                        </button>
                    </form>

                    <button onClick={onClose} className='btn btn-sm mt-2'>Cancel</button>

                </div>
            </div>
        </>
    );
};

export default FeedbackModal;