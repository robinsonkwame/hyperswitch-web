import "./App.css";
import Payment from "./Payment";
import Completion from "./Completion";
import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {

  const [hyperPromise, setHyperPromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    Promise.all([
      fetch(`${endPoint}/config`),
      fetch(`${endPoint}/urls`),
      fetch(`${endPoint}/create-payment-intent`),
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
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/payment" element={<Payment clientSecret={clientSecret} hyperPromise={hyperPromise} />} />
          <Route path="/" element={<Home />} />
          <Route path="/new-payment" element={<Payment clientSecret={clientSecret} hyperPromise={hyperPromise} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
