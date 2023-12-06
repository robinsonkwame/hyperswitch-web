import React from "react";
import "./css/BussinessModelButton.css";

export const NavBarContent = ({ paymentView, setPaymentView }) => {
    return <div className="Navbar-Content">
        <div className="Navbar-ColumnLeft">
            <div className="Navbar-Title">
                <h1>Hyperswitch Store</h1>
                <div className="Navbar-Subheading">
                    <div className="Breadcrumb Breadcrumb--noLink">
                        <span className="Breadcrumb-Link">Choose your use case</span>
                        {/* <span className="Breadcrumb-Step">1 of 3</span> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="Navbar-ColumnRight">
            <div className="Navbar-StepOne">
                <button onClick={() => setPaymentView(0)} className={`BusinessModelButton` + (paymentView == 0 ? " BusinessModelButton--selected" : '')}>
                    <div className="BusinessModelButton-IconWrapper">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="InlineSVG"
                            focusable="false"
                        >
                            <path
                                d="M15.8483 4.25237C16.0006 4.16185 16.1314 4.04072 16.235 3.89831L10.263 0.348411C9.48143 -0.116137 8.51857 -0.116137 7.73705 0.348411L1.76498 3.89831C1.86857 4.04072 1.99937 4.16185 2.15166 4.25237L8.37575 7.95209C8.76361 8.18264 9.23639 8.18264 9.62425 7.95209L15.8483 4.25237Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M17.75 6.30029C17.75 6.18462 17.7425 6.07005 17.728 5.9572C17.5441 6.12327 17.3428 6.27237 17.1257 6.40138L10.9017 10.1011C9.72648 10.7996 8.27352 10.7996 7.09834 10.1011L0.87425 6.40138C0.657214 6.27237 0.455914 6.12327 0.272035 5.9572C0.257462 6.07005 0.25 6.18462 0.25 6.30029V13.6997C0.25 14.6288 0.731435 15.4873 1.51295 15.9519L7.73705 19.6516C8.51856 20.1161 9.48143 20.1161 10.263 19.6516L16.487 15.9519C17.2686 15.4873 17.75 14.6288 17.75 13.6997V6.30029Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                    <div className="BusinessModelButton-TextWrapper">
                        <h3>One-time payment</h3>
                        <p>Digital or physical goods and services</p>
                    </div>
                </button>
                <button onClick={() => setPaymentView(1)} className={`BusinessModelButton` + (paymentView == 1 ? " BusinessModelButton--selected" : '')}>
                    <div className="BusinessModelButton-IconWrapper">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="InlineSVG"
                            focusable="false"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.5 0H17.5C18.8807 0 20 1.11929 20 2.5V17.5C20 18.8807 18.8807 20 17.5 20H2.5C1.11929 20 0 18.8807 0 17.5V2.5C0 1.11929 1.11929 0 2.5 0ZM14.4634 5.625H15.3125C15.8303 5.625 16.25 5.20527 16.25 4.6875C16.25 4.16973 15.8303 3.75 15.3125 3.75H10.9375C10.4197 3.75 10 4.16973 10 4.6875V7.8125C10 8.33027 10.4197 8.75 10.9375 8.75C11.4553 8.75 11.875 8.33027 11.875 7.8125V6.04602C13.3531 6.74818 14.375 8.25475 14.375 10C14.375 11.4867 13.6334 12.8002 12.5 13.5908V15.7299C14.7074 14.7655 16.25 12.5629 16.25 10C16.25 8.29659 15.5686 6.75234 14.4634 5.625ZM5.5366 14.4799H4.6875C4.16973 14.4799 3.75 14.8997 3.75 15.4174C3.75 15.9352 4.16973 16.3549 4.6875 16.3549H9.0625C9.58027 16.3549 10 15.9352 10 15.4174V12.2924C10 11.7747 9.58027 11.3549 9.0625 11.3549C8.54473 11.3549 8.125 11.7747 8.125 12.2924V14.0589C6.64691 13.3568 5.625 11.8502 5.625 10.1049C5.625 8.61823 6.36657 7.30472 7.5 6.51413V4.375C5.29262 5.33945 3.75 7.54205 3.75 10.1049C3.75 11.8084 4.43145 13.3526 5.5366 14.4799Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                    <div className="BusinessModelButton-TextWrapper">
                        <h3>Recurring payments</h3>
                        <p>Subscription or SaaS businesses</p>
                    </div>
                </button>
                <button onClick={() => setPaymentView(2)} className={`BusinessModelButton` + (paymentView == 2 ? " BusinessModelButton--selected" : '')}>
                    <div className="BusinessModelButton-IconWrapper">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="InlineSVG"
                            focusable="false"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.5 0H17.5C18.8807 0 20 1.11929 20 2.5V17.5C20 18.8807 18.8807 20 17.5 20H2.5C1.11929 20 0 18.8807 0 17.5V2.5C0 1.11929 1.11929 0 2.5 0ZM14.4634 5.625H15.3125C15.8303 5.625 16.25 5.20527 16.25 4.6875C16.25 4.16973 15.8303 3.75 15.3125 3.75H10.9375C10.4197 3.75 10 4.16973 10 4.6875V7.8125C10 8.33027 10.4197 8.75 10.9375 8.75C11.4553 8.75 11.875 8.33027 11.875 7.8125V6.04602C13.3531 6.74818 14.375 8.25475 14.375 10C14.375 11.4867 13.6334 12.8002 12.5 13.5908V15.7299C14.7074 14.7655 16.25 12.5629 16.25 10C16.25 8.29659 15.5686 6.75234 14.4634 5.625ZM5.5366 14.4799H4.6875C4.16973 14.4799 3.75 14.8997 3.75 15.4174C3.75 15.9352 4.16973 16.3549 4.6875 16.3549H9.0625C9.58027 16.3549 10 15.9352 10 15.4174V12.2924C10 11.7747 9.58027 11.3549 9.0625 11.3549C8.54473 11.3549 8.125 11.7747 8.125 12.2924V14.0589C6.64691 13.3568 5.625 11.8502 5.625 10.1049C5.625 8.61823 6.36657 7.30472 7.5 6.51413V4.375C5.29262 5.33945 3.75 7.54205 3.75 10.1049C3.75 11.8084 4.43145 13.3526 5.5366 14.4799Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                    <div className="BusinessModelButton-TextWrapper">
                        <h3>Recurring payments</h3>
                        <p>Zero Auth Flow
                            <br /><span style={{ color: "white" }}>.</span>
                        </p>
                    </div>
                </button>
            </div>
        </div>
    </div>
};
