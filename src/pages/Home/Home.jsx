import React from 'react';
import Banner from './Banner/Banner';
import PopularClasses from './Popular/PopularClasses';
import PopularInstructors from './Popular/PopularInstructors';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <div className='mx-2 md:mx-10'>
                <PopularClasses></PopularClasses>
                <PopularInstructors></PopularInstructors>
            </div>
        </>
    );
};

export default Home;