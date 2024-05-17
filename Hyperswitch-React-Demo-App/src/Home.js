import { useEffect, useState } from "react";
import React from "react";
import { HyperElements } from "@juspay-tech/react-hyper-js";
import CheckoutForm from "./CheckoutForm";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div>Home Page</div>

      <Link to="/payment"><button>Payment First Page</button></Link>
      <Link to="/new-payment"><button>Payment Second Page</button></Link>
    </div>
  );
}

export default Home;
