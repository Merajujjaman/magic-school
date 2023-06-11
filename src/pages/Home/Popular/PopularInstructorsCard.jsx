import React from 'react';

const PopularInstructorsCard = ({instructor}) => {

    return (
        <>
            <div className="card w-full bg-neutral shadow-xl text-white">
                <figure><img className='rounded-full mt-5' src={instructor.photoURL} alt="instructor's image" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">Name: {instructor.instructorName}</h2>
                    <h2 className="text-lg font-semibold">Students: {instructor.numberOfStudents}</h2>
                    <p>About: {instructor.bio}</p>
                    
                </div>
            </div>
        </>
    );
};

export default PopularInstructorsCard;