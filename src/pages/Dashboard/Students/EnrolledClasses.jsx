import React from 'react';
import SectionTitle from '../../../Routs/components/SectionTitle';
import usePaymentData from '../../../hooks/usePaymentData';

const EnrolledClasses = () => {
    const [paymentData] =usePaymentData()
    console.log('payment data:', paymentData);
    return (
        <div>
            <SectionTitle title={"Your Enrolled Classes"}></SectionTitle>
        </div>
    );
};

export default EnrolledClasses;