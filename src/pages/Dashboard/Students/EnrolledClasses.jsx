import React from 'react';
import SectionTitle from '../../../Routs/components/SectionTitle';
import usePaymentData from '../../../hooks/usePaymentData';
import EnrolledCard from './EnrolledCard';

const EnrolledClasses = () => {
    const [paymentData] =usePaymentData()
    console.log('payment data:', paymentData);
    return (
        <div>
            <SectionTitle title={"Your Enrolled Classes"}></SectionTitle>

            <div className='md:flex justify-center gap-10 '>
                {
                    paymentData.map(item => <EnrolledCard
                    key={item._id}
                    item={item}
                    ></EnrolledCard>)
                }
            </div>

        </div>
    );
};

export default EnrolledClasses;