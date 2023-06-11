import React from 'react';
import Banner from './Banner/Banner';
import PopularClasses from './Popular/PopularClasses';
import PopularInstructors from './Popular/PopularInstructors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;