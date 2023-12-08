import React from "react";
import success from "../public/assets/Successsuccess.svg";

function Completion(props) {

  const paymentFlow = new URLSearchParams(window.location.search).get(
    "paymentFlow"
  );

  const customer_id = new URLSearchParams(window.location.search).get(
    "customer_id"
  )

  const status = new URLSearchParams(window.location.search).get(
    "status"
  )

  function handlePaymentStatus(status) {
    switch (status) {
      case "succeeded":
        return "Yayyy! You successfully made a payment with Hyperswitch. If its a real store, your items would have been on their way.";
      case "processing":
        return "Your payment is processing.";
      case "requires_payment_method":
        return "Your payment was not successful, please try again.";
      case "requires_capture":
        return "Payment processing! Requires manual capture";
      case "requires_customer_action":
        return "Customer needs to take action to confirm this payment";
      case "failed":
        return "Payment Failed!";
      default:
        return `Something went wrong. (Status: ${status})`;
    }
  }

  return (
    <>
      <div className="ConfirmContainer">
        <div>
          <img src={success} width="150px" height="110px" />
        </div>
        <div className="ConfirmText">Thanks for your order!</div>
        <div className="ConfirmDes">
          {handlePaymentStatus(status)}
        </div>
        {paymentFlow !== "OneTimePayment" && <div className="ConfirmDes" style={{ maxWidth: "860px", color: "black", textAlign: "left" }}>
          <span style={{ color: "red" }}>Merchant note:</span> A recurring payment mandate is set up with the mandate_id. You can debit this cardholder periodically based on their service usage, top up their wallet automatically, or as per your business logic. The cardholder is not required for future payments on this mandate.
        </div>}
        <div>
          <a className="returnLink" href={`/payment?flow=${paymentFlow}&customer_id=${customer_id}`}>
            Try hyperswitch Playground again
          </a>
        </div>
      </div>
    </>
  );
}

export default Completion;
