import React, { useState } from "react";

const ZeroAuthView = ({ children }) => {
    const [showSdk, setShowSdk] = useState(false);
    return (
        <>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    setShowSdk((prev) => !prev);
                }}
            >
                Add Payment Method
            </button>
            <div style={{ display: showSdk ? " " : "none" }}>
                {children}
            </div>
        </>
    );
};

export default ZeroAuthView;
