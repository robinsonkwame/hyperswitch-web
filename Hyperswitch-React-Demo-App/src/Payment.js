import { useEffect, useState } from "react";
import React from "react";
import { HyperElements } from "@juspay-tech/react-hyper-js";
import CheckoutForm from "./CheckoutForm";
import { Header } from "./Header";
import { NavBarContent } from "./NavBarContent";
import "./css/NavBar.css";

function Payment() {
  const [hyperPromise, setHyperPromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const paymentFlow = ["OneTimePayment", "RecurringPayment", "ZeroAuth"]
  const [paymentView, setPaymentView] = useState(0)

  console.log(paymentView)

  useEffect(() => {
    Promise.all([
      fetch(`${endPoint}/config`),
      fetch(`${endPoint}/urls`),
      fetch(`${endPoint}/create-payment-intent`, {
        method: "POST",
        body: paymentFlow[paymentView]
      }),
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
              resolve(
                window.Hyper(publishableKey, {
                  customBackendUrl: serverUrl,
                })
              );
            })
          );
        };

        script.onerror = () => {
          setHyperPromise(
            new Promise((_, reject) => {
              reject("Script could not be loaded");
            })
          );
        };
      });
  }, []);

  return (
    <div className="mainConatiner">
      <div className="Navbar">
        <Header />
        <NavBarContent paymentView={paymentView} setPaymentView={setPaymentView} />
      </div>
      <main>
        <div className="container">
          {clientSecret && hyperPromise && (
            paymentView == 0 && (<HyperElements hyper={hyperPromise} options={{ clientSecret }}>
              <CheckoutForm />
            </HyperElements>)
          )}
        </div>
      </main>
    </div >
  );
}

export default Payment;
