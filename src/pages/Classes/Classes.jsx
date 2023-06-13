import React from 'react';
import useAllclasses from '../../hooks/useAllclasses';
import SectionTitle from '../../Routs/components/SectionTitle';
import ClassCard from './ClassCard';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Classes = () => {
    // const [allClasses] = useAllclasses()
    const [axiosSecure] = useAxiosSecure()
    const {data: classes=[], refetch} = useQuery({
        queryKey:['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/student/classes')
            return res.data
        }
    })

    // console.log(classes);

    return (
        <div>
            <SectionTitle title={"Select Your Classes"}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    classes.map(item => <ClassCard
                    key={item._id}
                    item={item}
                    refetch={refetch}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;