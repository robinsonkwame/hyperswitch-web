import { useEffect, useState, useRef } from "react";
import React from "react";
import { HyperElements } from "@juspay-tech/react-hyper-js";
import CheckoutForm from "./CheckoutForm";
import { Header } from "./Header";
import { NavBarContent } from "./NavBarContent";
import { TabBar } from "./TabBar";
import "./css/NavBar.css";

function Home() {
  const paymentFlow = ["OneTimePayment", "RecurringPayment", "ZeroAuth"];
  const [paymentView, setPaymentView] = useState(0);
  const [loading, setLoading] = useState(0);
  const iframeRef = useRef(null);

  const generateRandomString = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  let customer_id = generateRandomString(10);

  useEffect(() => {
    const iframe = iframeRef.current;

    const handleURLChange = () => {
      console.log(iframe.contentWindow.location.href);

      setTimeout(() => {
        setLoading(1);
      }, 300);
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
        <NavBarContent
          paymentView={paymentView}
          setPaymentView={setPaymentView}
        />
      </div>
      <main>
        <div className="container">
          <div
            className={
              "Browser" +
              (loading == 2 ? " Browser-AnimateStep3--entered" : "") +
              (loading > 0 ? " Browser--desktop" : "")
            }
          >
            <div className="Browser-Wrapper">
              <TabBar />
              <iframe
                ref={iframeRef}
                src={`/payment?flow=${paymentFlow[paymentView]}&customer_id=${customer_id}`}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
