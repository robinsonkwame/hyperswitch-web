import React, { useEffect, useState } from "react";
import { SaveCardView } from "./SaveCardView";

const ZeroAuthView = ({ children, isProcessing, showSdk, setShowSdk, customer_id }) => {
    const [cardData, setCardData] = useState([]);
    const [processing, setProcessing] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        {
            !isProcessing ? fetch(`${endPoint}/get-mandate-data`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ customer_id: customer_id })
            })
                .then((data) => {
                    return data.json();
                })
                .then((res) => {
                    console.log(res);
                    setCardData((_) => res.data);
                }) : null
        }
    }, [isProcessing]);
    return (
        <div> {cardData.length != 0 && !showSdk ? <>
            <div style={{ display: "flex", flexDirection: "column", border: "solid", paddingRight: 15, paddingLeft: 15, marginBottom: 20, borderWidth: 1, borderColor: "lightgray", borderRadius: 5 }}>
                {cardData.map((value, index) => {
                    return (
                        <SaveCardView selectedCard={selectedCard && selectedCard.mandate_id == value.mandate_id} onClick={() => setSelectedCard(value)} cardNum={value.card.last4_digits} expMonth={value.card.card_exp_month} expYr={value.card.card_exp_year} />

                    );
                })}
            </div>
            <button
                disabled={selectedCard == null || processing}
                style={{ marginBottom: 20 }}
                onClick={(e) => {

                    e.preventDefault();
                    setProcessing(_ => true)
                    console.log("selectedCard", selectedCard)
                    selectedCard.customer_id = customer_id
                    fetch(`${endPoint}/confirm-mandate`, {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(selectedCard)
                    })
                        .then((data) => {
                            return data.json();
                        })
                        .then((res) => {
                            console.log(res);
                            window.location.href = `${window.location.origin}/completion?payment_intent_client_secret=${res.status}&paymentFlow=ZeroAuth`;
                            setProcessing(_ => false)

                        })

                }}
            >
                {processing ? "Processing..." : "Pay Now"}
            </button>
        </> : null}
            {cardData.length == 0 ? <button
                onClick={(e) => {
                    e.preventDefault();
                    setShowSdk((prev) => !prev);
                }}
                style={{ marginBottom: 20 }}
            >
                Add Payment Method
            </button> : <></>}
            <div style={{ display: showSdk ? " " : "none" }}>{children}</div>
        </div>
    );
};

export default ZeroAuthView;
