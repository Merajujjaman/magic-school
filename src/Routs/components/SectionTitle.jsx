import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div className='my-5'>
            <p className='text-center italic text-primary'>Illusoria Academy of Magic</p>
            <h1 className='text-center text-lg md:text-3xl font-bold'>{title}</h1>
            <hr className='border-2 w-1/4 mx-auto ' />
        </div>
    );
};

export default SectionTitle;