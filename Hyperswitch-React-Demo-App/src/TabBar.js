import React from "react";
import "./css/Browser.css";

export const TabBar = () => {
  return (
    <div
      className={
        "Browser-TopBar" +
        (window.innerWidth < 1000 ? " Browser-TopBar--mobile" : "")
      }
    >
      {/* <div className="Browser-TopBarButtons">
        <div className="Browser-TopBarButton"></div>
        <div className="Browser-TopBarButton"></div>
        <div className="Browser-TopBarButton"></div>
      </div> */}
      <div
        className={
          "Browser-URLBar" +
          (window.innerWidth < 1000 ? " Browser-URLBar--mobile" : "")
        }
      >
        <ul className="Browser-URLBarList">
          <li className="Browser-URLInputListItem">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="InlineSVG Browser-URLBarIcon"
              focusable="false"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 3.5V2.5C1.5 1.11929 2.61929 0 4 0C5.38071 0 6.5 1.11929 6.5 2.5V3.5H6.75C7.02614 3.5 7.25 3.72386 7.25 4V7C7.25 7.55228 6.80228 8 6.25 8H1.75C1.19772 8 0.75 7.55228 0.75 7V4C0.75 3.72386 0.973858 3.5 1.25 3.5H1.5ZM4 4.75C3.72386 4.75 3.5 4.97386 3.5 5.25V6.25C3.5 6.52614 3.72386 6.75 4 6.75C4.27614 6.75 4.5 6.52614 4.5 6.25V5.25C4.5 4.97386 4.27614 4.75 4 4.75ZM5.5 3.5V2.5C5.5 1.67157 4.82843 1 4 1C3.17157 1 2.5 1.67157 2.5 2.5V3.5H5.5Z"
                fill="#6B7A94"
              ></path>
            </svg>
            <div className="Tooltip-Context Browser--URLTooltip">
              live.hyperswitch.io
            </div>
          </li>
          <li className="Browser-TopBarUrlChange">
            <div role="button" className="Browser-TopBarUrlChangeButton">
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="InlineSVG Browser-TopBarUrlChangeButtonIcon"
                focusable="false"
              >
                <path
                  d="M4.13042 2.09653V1.04953C4.81434 1.4475 5.2501 2.18288 5.2501 2.99733C5.2501 4.00297 4.5899 4.8769 3.6437 5.15713C3.4451 5.21595 3.33175 5.42476 3.39051 5.62353C3.44927 5.8223 3.6579 5.93576 3.8565 5.87695C5.11961 5.50287 6.0001 4.33731 6.0001 2.99733C6.0001 2.11861 5.61944 1.30875 4.99102 0.750667H5.47509C5.6822 0.750667 5.85009 0.582625 5.85009 0.375334C5.85009 0.168043 5.6822 0 5.47509 0H3.75542C3.65945 0 3.56348 0.0366442 3.49025 0.109933C3.41703 0.183221 3.38042 0.279277 3.38042 0.375334V2.09653C3.38042 2.30382 3.54831 2.47187 3.75542 2.47187C3.96253 2.47187 4.13042 2.30382 4.13042 2.09653Z"
                  fill="#6A7383"
                ></path>
                <path
                  d="M1.86968 3.90347V4.95047C1.18576 4.5525 0.75 3.81712 0.75 3.00267C0.75 1.99703 1.41019 1.1231 2.3564 0.84287C2.555 0.784055 2.66835 0.575239 2.60959 0.376467C2.55083 0.177695 2.3422 0.0642379 2.1436 0.123053C0.880489 0.497132 0 1.66269 0 3.00267C0 3.88139 0.380658 4.69125 1.00908 5.24933H0.525009C0.317902 5.24933 0.150009 5.41738 0.150009 5.62467C0.150009 5.83196 0.317902 6 0.525009 6H2.24468C2.34065 6 2.43662 5.96336 2.50984 5.89007C2.58307 5.81678 2.61968 5.72072 2.61968 5.62467V3.90347C2.61968 3.69618 2.45179 3.52813 2.24468 3.52813C2.03757 3.52813 1.86968 3.69618 1.86968 3.90347Z"
                  fill="#6A7383"
                ></path>
              </svg>
              <span className={window.innerWidth < 1000 ? "showOnWeb" : ""}>
                Use your own domain
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
