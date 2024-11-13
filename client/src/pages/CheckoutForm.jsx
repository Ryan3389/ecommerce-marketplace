import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

function CheckoutPage() {
    const checkoutPrice = JSON.parse(localStorage.getItem('Total Price'))
    console.log(checkoutPrice)
    const [clientSecret, setClientSecret] = useState('');
    const [totalPrice, setTotalPrice] = useState({
        price: checkoutPrice
    })
    useEffect(() => {
        // Fetch client secret from backend
        fetch('/api/create-payment-intent/payment', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(totalPrice)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setClientSecret(data.clientSecret)
            })
            // .then((data) => setClientSecret(data.clientSecret))
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
                return_url: 'http://localhost:3001/api/create-payment-intent/confirm'
            },
        });

        if (result.error) {
            console.log(result.error.message);
        } else {
            // Successful payment: User is redirected to return_url
        }

        window.location.assign('/confirm')
    }

    const PaymentForm = () => {
        const stripe = useStripe();
        const elements = useElements();

        return (
            <>
                <form onSubmit={() => handleFormSubmit(stripe, elements)}>
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