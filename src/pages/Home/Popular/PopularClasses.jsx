import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SectionTitle from '../../../Routs/components/SectionTitle';
import PopularClassesCard from './PopularClassesCard';

const PopularClasses = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        axios.get('https://illusoria-academy-of-magic-server.vercel.app/popular/classes')
            .then(res => {
                setClasses(res.data)
            })
    }, [])

    // console.log(classes);
    return (
        <div className='my-20'>
            <SectionTitle title={"Popular Classes"}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    classes.map( item => <PopularClassesCard key={item._id} item={item}></PopularClassesCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;