import { useEffect, useState } from "react";
import React from "react";
import { HyperElements } from "@juspay-tech/react-hyper-js";
import CheckoutForm from "./CheckoutForm";

function Payment() {
  const [hyperPromise, setHyperPromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [flow, setFlow] = useState("");
  const [amount, setAmount] = useState(4000);

  useEffect(() => {
    var requestBody = {
      amount: amount,
      order_details: [
        {
          product_name: "Apple iphone 15",
          quantity: 1,
          amount: amount,
        },
      ],
      currency: "USD",
      confirm: false,
      capture_method: "automatic",
      authentication_type: "three_ds",
      customer_id: "hyperswitch_sdk_demo_id",
      email: "hyperswitch_sdk_demo_id@gmail.com",
      description: "Hello this is description",
      // allowed_payment_method_types:["sofort"],
      shipping: {
        address: {
          state: "zsaasdas",
          city: "Banglore",
          country: "US",
          line1: "sdsdfsdf",
          line2: "hsgdbhd",
          line3: "alsksoe",
          zip: "571201",
          first_name: "Bopanna",
          last_name: "MJ",
        },
        phone: {
          number: "123456789",
          country_code: "+1",
        },
      },
      connector_metadata: {
        noon: {
          order_category: "applepay",
        },
      },
      metadata: {
        udf1: "value1",
        new_customer: "true",
        login_date: "2019-09-10T10:11:12Z",
      },
      billing: {
        address: {
          line1: "1467",
          line2: "Harrison Street",
          line3: "Harrison Street",
          city: "San Fransico",
          state: "California",
          zip: "94122",
          country: "US",
          first_name: "joseph",
          last_name: "Doe",
        },
        phone: {
          number: "8056594427",
          country_code: "+91",
        },
      },
    };

    if (flow === "zero_auth") {
      requestBody.payment_type = "setup_mandate";
      requestBody.setup_future_usage = "off_session";
      requestBody.mandate_data = {
        customer_acceptance: {
          acceptance_type: "offline",
          accepted_at: "1963-05-03T04:07:52.723Z",
          online: {
            ip_address: "in sit",
            user_agent: "amet irure esse",
          },
        },
        mandate_type: {
          multi_use: {
            amount: 5647,
            currency: "USD",
          },
        },
      };
    } else if (flow === "recuring_mandate") {
      requestBody.off_session = true;
      requestBody.mandate_id = "man_nAGGhXOAK2mQHtP1ELdB";
      requestBody.confirm = true;
    } else if (flow === "mandate") {
      requestBody.setup_future_usage = "off_session";
      requestBody.mandate_data = {
        customer_acceptance: {
          acceptance_type: "offline",
          accepted_at: "1963-05-03T04:07:52.723Z",
          online: {
            ip_address: "in sit",
            user_agent: "amet irure esse",
          },
        },
        mandate_type: {
          multi_use: {
            amount: 5647,
            currency: "USD",
          },
        },
      };
    }
    if (flow !== "") {
      Promise.all([
        fetch(`${endPoint}/config`),
        fetch(`${endPoint}/urls`),
        fetch(`${endPoint}/create-payment-intent`, {
          method: "POST", // Assuming you're making a POST request
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody), // Convert the body to JSON format
        }),
      ])
        .then((responses) => {
          return Promise.all(responses.map((response) => response.json()));
        })
        .then((dataArray) => {
          const { publishableKey } = dataArray[0];
          const { serverUrl, clientUrl } = dataArray[1];
          const { clientSecret, paymentIntent } = dataArray[2];
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
    }
  }, [flow, amount]);

  let buttons = (
    <div className="flowbuttons">
      <button
        id="non_cta"
        onClick={() => {
          setAmount(0);
          setFlow("zero_auth");
        }}
      >
        <div id="button-text">{"Zero Auth Flow"}</div>
        <div id="button-text">&#8594;</div>
      </button>
      <button
        id="non_cta"
        onClick={() => {
          setFlow("Checkout");
        }}
      >
        <div id="button-text">{"Checkout Flow"}</div>
        <div id="button-text">&#8594;</div>
      </button>
      <button
        id="non_cta"
        onClick={() => {
          setFlow("mandate");
        }}
      >
        <div id="button-text">{"Mandate Flow"}</div>
        <div id="button-text">&#8594;</div>
      </button>
      <button
        id="non_cta"
        onClick={() => {
          setFlow("recuring_mandate");
          s;
        }}
      >
        <div id="button-text">{"Recuring Mandates"}</div>
        <div id="button-text">&#8594;</div>
      </button>
    </div>
  );

  return (
    <div className="mainConatiner">
      <div className="heading">
        {flow && (
          <>
            <div className="backArrow">
              <button
                style={{
                  background: "transparent",
                  color: "#006df9",
                  fontSize: "x-large",
                }}
                onClick={() => window.location.reload()}
              >
                &#10229;
              </button>
            </div>
            <h2 className="hyperswitch_heading">
              Hyperswitch Unified Checkout
            </h2>
          </>
        )}
        {!flow && <h2>Select Payment flow</h2>}
      </div>
      <div>{!flow && buttons}</div>
      {clientSecret && hyperPromise && flow && (
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
