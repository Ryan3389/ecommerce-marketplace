import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

function CheckoutPage() {
    const cart = useSelector(state => state.cart.items)
    const checkoutPrice = JSON.parse(localStorage.getItem('Total Price'))

    const [totalPrice, setTotalPrice] = useState({
        price: checkoutPrice
    })

    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {

        fetch('/api/create-payment-intent/payment', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(totalPrice)
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
            })

            .catch((error) => console.error('Error fetching client secret:', error));
    }, []);

    const options = {
        clientSecret,
    };
    const handleFormSubmit = async (event, stripe, elements) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'https://ecommerce-marketplace-tqzf.onrender.com/confirm'
            },
        });

        if (result.error) {
            throw new Error(result.error.message)
        }




    }


    const PaymentForm = () => {
        const stripe = useStripe();
        const elements = useElements();

        return (
            <>
                <form onSubmit={(event) => handleFormSubmit(event, stripe, elements)}>
                    <PaymentElement />
                    <button disabled={!stripe}>Submit</button>
                </form>
            </>
        )

    }

    return (
        clientSecret && (
            <Elements stripe={stripePromise} options={options}>
                <PaymentForm />
            </Elements>
        )
    );
}

export default CheckoutPage