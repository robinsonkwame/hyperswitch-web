import { useEffect, useState } from "react";
import React from "react";
import { HyperElements, useHyper, useElements } from "@juspay-tech/react-hyper-js";
import { PaymentElement } from "@juspay-tech/react-hyper-js";

function SignUp() {
    const [hyperPromise, setHyperPromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const [customer, setCustomer] = useState(null);
    const hyper = useHyper();
    const PAYMENT = 'payments'

    useEffect(() => {
        Promise.all([
            fetch(`${PAYMENT}/config`),
            fetch(`${PAYMENT}/urls`),
            fetch(`${PAYMENT}/create-payment-intent`),
        ])
            .then((responses) => {
                return Promise.all(responses.map((response) => response.json()));
            })
            .then((dataArray) => {
                const { publishableKey } = dataArray[0];
                const { serverUrl, clientUrl } = dataArray[1];
                const { clientSecret } = dataArray[2];
                setClientSecret(clientSecret);

                const script = document.createElement("script");
                script.src = `${clientUrl}/HyperLoader.js`;
                document.head.appendChild(script);
                script.onload = () => {
                    setHyperPromise(
                        new Promise((resolve, _) => {
                            resolve(window.Hyper(publishableKey, { customBackendUrl: serverUrl }));
                        })
                    );
                };
                script.onerror = () => {
                    setHyperPromise(new Promise((_, reject) => reject("Script could not be loaded")));
                };
            })
            .catch(error => {
                console.error("Failed to fetch configuration: ", error);
            });
    }, []);

    const handleSignUp = async (event) => {
        event.preventDefault();
        const elements = hyper.elements({ clientSecret });
        const cardElement = elements.create('card');
        const { setupIntent, error } = await hyper.confirmSetupIntent({
            elements,
            redirect: 'if_required',
        });

        if (error) {
            console.error("Error confirming setup intent:", error);
            return;
        }

        const customerResponse = await fetch('/create-customer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ setupIntentId: setupIntent.id }),
        });

        const customerData = await customerResponse.json();
        setCustomer(customerData);
    };

    return (
        <div className="mainContainer">
            <div className="heading">
                <h2>Sign Up and Save Payment Method</h2>
            </div>
            {hyperPromise && (
                <form onSubmit={handleSignUp}>
                    <HyperElements hyper={hyperPromise} options={{ clientSecret }}>
                        <div>
                            <input type="text" placeholder="Customer Name" name="customerName" required />
                            <input type="text" placeholder="Address" name="address" required />
                            <PaymentElement id="debit-card-element" options={{ style: { base: { iconColor: '#c4f0ff', color: '#fff' } } }} />
                        </div>
                    </HyperElements>
                    <button type="submit">Sign Up</button>
                </form>
            )}
        </div>
    );
}

export default SignUp;


import React, { useState, useEffect } from 'react';
import { useHyper, useElements, PaymentElement } from "@juspay-tech/react-hyper-js";

//
// New SignUp component
//
// function FrontendAPI() {
//     const hyper = useHyper();
//     const elements = useElements();
//     const [currentCard, setCurrentCard] = useState('creditCard'); // 'creditCard' or 'debitCard'
//     const [clientSecret, setClientSecret] = useState("");
//     const [customer, setCustomer] = useState(null);

//     useEffect(() => {
//         // Fetch client secret and other necessary details
//         fetch('/api/get-client-secret')
//             .then(response => response.json())
//             .then(data => {
//                 setClientSecret(data.clientSecret);
//                 // Initialize Hyper here if needed
//             });
//     }, []);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (!hyper || !elements) {
//             console.error("Hyper or elements not loaded");
//             return;
//         }

//         const { error, paymentIntent } = await hyper.confirmPayment({
//             elements,
//             confirmParams: {
//                 return_url: `${window.location.origin}/your-return-url`
//             }
//         });

//         if (error) {
//             console.error("Payment confirmation error:", error);
//             return;
//         }

//         // Assuming paymentIntent contains the necessary details
//         console.log("Payment Intent:", paymentIntent);

//         // Switch to the next card input after the first is successfully added
//         if (currentCard === 'creditCard') {
//             setCurrentCard('debitCard');
//         } else {
//             // Finalize the signup process
//             alert('Both cards added successfully!');
//             // Optionally, navigate to another page or update state
//         }
//     };

//     return (
//         <div>
//             <h1>Add Your Payment Methods</h1>
//             <form onSubmit={handleSubmit}>
//                 <PaymentElement />
//                 <button type="submit">
//                     {currentCard === 'creditCard' ? 'Add Credit Card' : 'Add Debit Card'}
//                 </button>
//             </form>
//             <button onClick={() => setCurrentCard(currentCard === 'creditCard' ? 'debitCard' : 'creditCard')}>
//                 Switch to {currentCard === 'creditCard' ? 'Debit Card' : 'Credit Card'}
//             </button>
//         </div>
//     );
// }

// export default FrontendAPI;