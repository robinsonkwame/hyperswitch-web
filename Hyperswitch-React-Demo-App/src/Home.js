import { useEffect, useState, useRef } from "react";
import React from "react";
import { HyperElements } from "@juspay-tech/react-hyper-js";
import CheckoutForm from "./CheckoutForm";
import { Header } from "./Header";
import { NavBarContent } from "./NavBarContent";
import { TabBar } from "./TabBar";
import "./css/NavBar.css";

function Home() {
  const [hyperPromise, setHyperPromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const paymentFlow = ["OneTimePayment", "RecurringPayment", "ZeroAuth"]
  const [paymentView, setPaymentView] = useState(0)
  const [loading, setLoading] = useState(0);
  const [isSuccess, setSucces] = useState(null);
  const iframeRef = useRef(null);

  console.log(paymentView)

  useEffect(() => {
    // Promise.all([
    //   fetch(`${endPoint}/config`),
    //   fetch(`${endPoint}/urls`),
    //   fetch(`${endPoint}/create-payment-intent`, {
    //     method: "POST",
    //     body: paymentFlow[paymentView]
    //   }),
    // ])
    //   .then((responses) => {
    //     return Promise.all(responses.map((response) => response.json()));
    //   })
    //   .then((dataArray) => {
    //     const { publishableKey } = dataArray[0];
    //     const { serverUrl, clientUrl } = dataArray[1];
    //     const { clientSecret } = dataArray[2];
    //     setClientSecret(clientSecret);
    //     const script = document.createElement("script");
    //     script.src = `${clientUrl}/HyperLoader.js`;
    //     document.head.appendChild(script);
    //     script.onload = () => {
    //       setHyperPromise(
    //         new Promise((resolve, _) => {
    //           resolve(
    //             window.Hyper(publishableKey, {
    //               customBackendUrl: serverUrl,
    //             })
    //           );
    //         })
    //       );
    //     };

    //     script.onerror = () => {
    //       setHyperPromise(
    //         new Promise((_, reject) => {
    //           reject("Script could not be loaded");
    //         })
    //       );
    //     };
    //   });

    const iframe = iframeRef.current;

    const handleURLChange = () => {
      console.log('URL changed:', iframe.contentWindow.location.href);
      // Perform actions based on the URL change

      // const clientSecret = new URLSearchParams(iframe.contentWindow.location.href).get(
      //   "payment_intent_client_secret"
      // );
      // if (!clientSecret) {
      //   setSucces(false)
      //   return;
      // }

      setTimeout(() => {
        setLoading(1)
      }, 300)
    };

    if (iframe) {
      iframe.onload = handleURLChange; // Listen for URL changes when the iframe loads
    }

    return () => {
      if (iframe) {
        iframe.onload = null; // Clean up the event listener when component unmounts
      }
    };
  }, []);

  return (
    <div className="mainConatiner">
      <div className="Navbar">
        <Header />
        <NavBarContent paymentView={paymentView} setPaymentView={setPaymentView} />
      </div>
      <main>
        <div className="container">
          <div className={"Browser" + (loading == 2 ? " Browser-AnimateStep3--entered" : "") + (loading > 0 ? " Browser--desktop" : "")}>
            <div className="Browser-Wrapper">
              <TabBar />
              <iframe ref={iframeRef} src={`/payment?flow=${paymentFlow[paymentView]}`} />
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}

export default Home;
