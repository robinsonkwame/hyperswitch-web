import React from "react";

export const SaveCardView = ({ cardNum, expMonth, expYr, onClick, selectedCard }) => {
    return (
        <button
            className="PickerItem  flex flex-row items-stretch"
            type="button"
            onClick={() => onClick()}
            style={{ background: 'transparent', borderTop: 'none', borderRight: 'none', borderBottom: '1px solid rgb(230, 230, 230)', borderLeft: 'none', color: 'rgb(109, 110, 120)', cursor: 'pointer', minWidth: '150px', padding: '1rem 0px', width: '100%', borderRadius: '0px', boxShadow: 'none' }}
        >
            <div style={{ width: '100%' }}>
                <div style={{ width: '100%', }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                        <div
                            style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", columnGap: '11px' }}
                        >
                            <div>
                                <div className="savedcardinactive flex self-center">
                                    <input className="Radio" readOnly="" type="radio" checked={selectedCard} />
                                </div>
                            </div>
                            <div style={{ width: '24px', fill: 'gray' }} className="PickerItemIcon  mx-3 flex  items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="p-Icon p-Icon--card Icon p-Icon--md p-TabIcon TabIcon p-TabIcon--selected TabIcon--selected" role="presentation" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M0 4a2 2 0 012-2h12a2 2 0 012 2H0zm0 2v6a2 2 0 002 2h12a2 2 0 002-2V6H0zm3 5a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1z" /></svg>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "gray" }}  >
                                <div className="tracking-widest"><b>****</b></div>
                                <div><b>{cardNum}</b></div>
                            </div>
                        </div>
                        <div
                            className="flex flex-row items-center justify-end gap-3 -mt-1"
                            style={{ fontSize: "14px", opacity: 0.5 }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "gray" }}>{expMonth} / {expYr}</div>
                        </div>
                    </div>

                </div>
            </div>
        </button>
    );
};
