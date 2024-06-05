import { useEffect, useState } from "react";
import React from "react";
import { HyperElements, useHyper } from "@juspay-tech/react-hyper-js";
import CheckoutForm from "./CheckoutForm";

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
                console.log(dataArray);
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
                        {/* Payment form fields like CardElement */}
                    </HyperElements>
                    <button type="submit">Sign Up</button>
                </form>
            )}
        </div>
    );
}

export default SignUp;