import { useEffect, useState } from "react";
import React from "react";
import { HyperElements } from "@juspay-tech/react-hyper-js";
import CheckoutForm from "./CheckoutForm";
import { Link } from 'react-router-dom';

function Payment({ hyperPromise, clientSecret }) {

  console.log("===> HyperPromise", hyperPromise)
  console.log("===> clientSecret", clientSecret)

  return (
    <div className="mainConatiner">
      <Link to="/"><div>Go Back</div></Link>
      <div className="heading">
        <h2>Hyperswitch Unified Checkout</h2>
      </div>
      {clientSecret && hyperPromise && (
        <HyperElements
          hyper={hyperPromise}
          options={{
            clientSecret,
            appearance: {
              labels: "floating",
            },
          }}
        >
          <CheckoutForm />
        </HyperElements>
      )}
    </div>
  );
}

export default Payment;
