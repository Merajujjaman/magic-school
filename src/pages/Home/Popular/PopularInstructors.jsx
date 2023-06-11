import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Routs/components/SectionTitle';
import axios from 'axios';
import PopularInstructorsCard from './PopularInstructorsCard';
const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/popular/instructors')
        .then(res => {
            setInstructors(res.data)
        })
    },[ ])

    return (
        <div className='my-20'>
            <SectionTitle title={"Popular Instructors"}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                   instructors.map(instructor => <PopularInstructorsCard
                   key={instructor._id}
                   instructor={instructor}
                   ></PopularInstructorsCard>) 
                }
            </div>
        </div>
    );
};

export default PopularInstructors;