import React from "react";

export const Header = () => {
    return <header>
        <a href="https://hyperswitch.io">
            <img class="logoImg" width="28px" src="http://localhost:9060//public/assets/hyperswitchLogo.svg" />
        </a>
        <div className="Navbar-Links">
            <a href="https://app.hyperswitch.io" className="ExternalLink"><
                span className="ExternalLink-Text">Create account</span>
            </a>
            <div className="Navbar-Spacer"></div>
            <a href="https://hyperswitch.io/docs" className="ExternalLink">
                <span className="ExternalLink-Text">Explore the docs</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="#6C8EEF" xmlns="http://www.w3.org/2000/svg" className="InlineSVG ExternalLink-Icon" focusable="false" color="#6C8EEF"><path fillRule="evenodd" clipRule="evenodd" d="M9.43738 5.25002L5.99389 1.80654C5.70073 1.51338 5.70073 1.03806 5.99389 0.744898C6.28706 0.451733 6.76237 0.451733 7.05553 0.744898L11.7803 5.4697C12.0732 5.76259 12.0732 6.23746 11.7803 6.53035L7.05553 11.2552C6.76237 11.5483 6.28706 11.5483 5.99389 11.2552C5.70073 10.962 5.70073 10.4867 5.99389 10.1935L9.43738 6.75003H0.75C0.335786 6.75003 0 6.41424 0 6.00002C0 5.58581 0.335786 5.25002 0.75 5.25002H9.43738Z" fill="currentColor"></path></svg>
            </a>
        </div>
    </header>
}
