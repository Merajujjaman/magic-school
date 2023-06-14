import React from 'react';

const EnrolledCard = ({ item }) => {
    
    console.log('inside card :', item.price);
    
    return (
        <div className="card w-96 bg-neutral text-neutral-content my-10 mx-2">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{item.sudentName}</h2>
                <h3 className='text-lg font-semibold text-primary mb-2'>Paid Amount: ${item.price}</h3>
                <h3 className='text-lg font-semibold underline'>Enrolled Classes:</h3>
                {
                    item.names.map((name, i) => <li key={i}> {name} </li> )
                }
                
                
            </div>
        </div>
    );
};

export default EnrolledCard;