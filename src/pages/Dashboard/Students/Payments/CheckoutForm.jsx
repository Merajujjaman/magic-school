import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { toast } from 'react-hot-toast';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import useSelectedClasses from '../../../../hooks/useSelectedClasses';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ price }) => {
    const [selectClasses] = useSelectedClasses()
    const { user } = useContext(AuthContext)
    const stripe = useStripe()
    const elements = useElements()
    const navigate = useNavigate()
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
                .catch(error => {
                    console.log(error);
                    toast.error(error.message)
                })
        }
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log(error);
            toast.error(error.message)
        }

        // else{
        //     console.log('payment method:', paymentMethod);

        // }
        setProcessing(true)

        const { paymentIntent, err } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'Unknown',
                        email: user?.email || 'anonymus'
                    },
                },
            },
        );
        if (err) {
            console.log(err);
            toast.error(err.message)
        }
        setProcessing(false)
        // console.log(paymentIntent);
        if (paymentIntent.status === 'succeeded') {
            const transectionId = paymentIntent?.id

            const paymentDetails = {
                sudentName: user?.displayName,
                studentEmail: user?.email,
                names: selectClasses.map(item => item.className),
                cartsId: selectClasses.map(item => item._id),
                classesId: selectClasses.map(item => item.classId),
                date: new Date(),
                price,
                transectionId
            }

            axiosSecure.post('/payments', paymentDetails)
                .then(res => {
                    // console.log(res.data.);
                    if (res.data.insertedResult.insertedId || res.data.deletedResult.deletedCount >0) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your payment is successfull',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/')
                    }

                })
                .then(error => {
                    console.log(error);
                })
        }


    }
    return (
        <form className='w-4/5 md:1/2 mx-auto' onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            }
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-success btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;