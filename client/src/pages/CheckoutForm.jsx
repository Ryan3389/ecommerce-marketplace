
//WORKING STRIPE CODE
import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

function CheckoutPage() {
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        // Fetch client secret from backend
        fetch('/api/create-payment-intent/payment', {
            method: 'POST', // Send a POST request
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret))
            .catch((error) => console.error('Error fetching client secret:', error));
    }, []);

    const options = {
        clientSecret,
    };
    const handleFormSubmit = async (stripe, elements) => {
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
            console.log(result.error.message); // Logs any errors if payment confirmation fails
        } else {
            // Successful payment: User is redirected to return_url
        }
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

// import { useStripe, useElements, PaymentElement, Elements } from '@stripe/react-stripe-js';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';
// import { useEffect, useState } from 'react';

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

// const CheckoutForm = () => {
//     const location = useLocation();
//     const navigate = useNavigate()
//     const checkoutPrice = location.state?.checkoutPrice || 0;
//     const amountInCents = Math.round(checkoutPrice * 100);
//     const stripe = useStripe();
//     const elements = useElements();

//     const [clientSecret, setClientSecret] = useState('');

//     useEffect(() => {
//         // Fetch client secret when component mounts
//         fetch('/api/create-payment-intent/payment', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ amount: amountInCents }),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 setClientSecret(data.clientSecret)
//                 navigate('/checkout', { state: { clientSecret: data.clientSecret } });
//             })
//             // .then((data) => setClientSecret(data.clientSecret))
//             .catch((error) => console.error('Error fetching client secret:', error));
//     }, [amountInCents, navigate]);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             return;
//         }

//         const result = await stripe.confirmPayment({
//             elements,
//             confirmParams: {
//                 return_url: 'http://localhost:3001/api/create-payment-intent/confirm',
//             },
//         });

//         if (result.error) {
//             console.log(result.error.message);
//         } else {
//             // Handle successful payment here
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <PaymentElement />
//             <button disabled={!stripe}>Submit</button>
//         </form>
//     );
// };

// export default CheckoutForm;

