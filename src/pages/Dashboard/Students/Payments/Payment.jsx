import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useSelectedClasses from '../../../../hooks/useSelectedClasses';
import SectionTitle from '../../../../Routs/components/SectionTitle';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
    const [selectClasses] = useSelectedClasses()
    const total = selectClasses.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(total.toFixed(2))

    return (
        <div className='w-full mx-5'>
            <SectionTitle title={"Complete Your Payment"}></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckoutForm selectClasses={selectClasses} price={price}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;