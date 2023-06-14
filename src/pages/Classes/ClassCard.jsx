import React, { useContext, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const ClassCard = ({item, refetch}) => {
    const [axiosSecure] = useAxiosSecure()
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const {user} = useContext(AuthContext)
    const [disabled, setDisabled] = useState(false)
    const {_id, classImage, className, instructorName, instructorEmail, price, availableSeats} = item;


    const handleAddtoCart = () => {
        const saveClass ={classId: _id, studentEmail: user?.email, classImage, className, instructorName, instructorEmail, price: parseFloat(price), availableSeats: parseInt(availableSeats)}
        axiosSecure.post('/student/selectClass', saveClass)
        .then(res => {
            if (res.data.insertedId) {
                setDisabled(true)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Go to to Dhashboard and enroll',
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch()
                
            }
        })
        
    }

    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl group">
                <figure><img src={item?.classImage} alt="photo not found" className=' object-cover max-h-72 w-full group-hover:scale-110 transition-all' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">
                        {item?.className}
                        <div className="badge badge-secondary">Available</div>
                    </h2>
                    <h3 className='font-semibold'>Instructor: {item?.instructorName}</h3>
                    <p>Available Seats: {item?.availableSeats}</p> 
                    <p>Price: ${item?.price}</p> 
                    <div className="card-actions justify-end">
                        <button disabled={disabled || item?.availableSeats == 0 || isAdmin || isInstructor} className='btn btn-primary btn-sm' onClick={handleAddtoCart} >Add to Dashboard <FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClassCard;