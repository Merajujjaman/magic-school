import React from 'react';
import useAllclasses from '../../hooks/useAllclasses';
import SectionTitle from '../../Routs/components/SectionTitle';
import ClassCard from './ClassCard';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const Classes = () => {
    // const [allClasses] = useAllclasses()
    const [axiosSecure] = useAxiosSecure()
    const [isAdmin] = useAdmin()
    const[isInstructor] = useInstructor()
    const {data: classes=[], refetch} = useQuery({
        queryKey:['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/student/classes')
            return res.data
        }
    })

    // console.log(classes);

    return (
        <div className='my-20 mx-5 md:mx-10'>
            <SectionTitle title={"Select Your Classes"}></SectionTitle>
            {isAdmin && <h1 className='text-lg text-center font-semibold text-error mb-5'>You are an Admin. You can not enroll any class</h1>}
            {isInstructor && <h1 className='text-lg text-center font-semibold text-error mb-5'>You are an Instructor. You can not enroll any class</h1>}
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