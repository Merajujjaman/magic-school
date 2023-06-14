import React from 'react';
import Banner from './Banner/Banner';
import PopularClasses from './Popular/PopularClasses';
import PopularInstructors from './Popular/PopularInstructors';
import MagicSection from './MagicSection/MagicSection';
import IllusionSection from './IllusionSection/IllusionSection';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <div className='mx-2 md:mx-10'>
                <MagicSection></MagicSection>
                <PopularClasses></PopularClasses>
                <IllusionSection></IllusionSection>
                <PopularInstructors></PopularInstructors>
            </div>
        </>
    );
};

export default Home;