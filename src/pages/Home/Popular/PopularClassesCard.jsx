import React from 'react';

const PopularClassesCard = ({item}) => {
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={item.photoURL} alt="image not found" className='w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">
                        {item.className}
                        <div className="badge badge-secondary">Popular Classes</div>
                    </h2>
                    <h3 className='text-lg font-semibold'>Instructor: {item.instructorName}</h3>
                    <h3 className='text-lg font-semibold'>Total Students: {item.totalStudents}</h3>
                    <p>{item.details}</p>
                    
                </div>
            </div>
        </>
    );
};

export default PopularClassesCard;