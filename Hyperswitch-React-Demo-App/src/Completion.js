import React from "react";
import success from "../public/assets/Successsuccess.svg";

function Completion(props) {

  const paymentFlow = new URLSearchParams(window.location.search).get(
    "paymentFlow"
  );

  return (
    <>
      <div className="ConfirmContainer">
        <div>
          <img src={success} width="150px" height="110px" />
        </div>
        <div className="ConfirmText">Thanks for your order!</div>
        <div className="ConfirmDes">
          Yayyy! You successfully made a payment with Hyperswitch. If its a real
          store, your items would have been on their way.
        </div>
        {paymentFlow !== "OneTimePayment" && <div className="ConfirmDes" style={{ maxWidth: "860px", color: "black", textAlign: "left" }}>
          <span style={{ color: "red" }}>Merchant note:</span> A recurring payment mandate is set up with the mandate_id. You can debit this cardholder periodically based on their service usage, top up their wallet automatically, or as per your business logic. The cardholder is not required for future payments on this mandate.
        </div>}
        <div>
          <a className="returnLink" href="/payment">
            Try hyperswitch Playground again
          </a>
        </div>
      </div>
    </>
  );
}

export default Completion;
