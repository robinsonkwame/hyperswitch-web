import React from "react";
import logo from "../public/assets/hyperswitchLogo.svg";
import shirt from "../public/assets/shirt.png";
import cap from "../public/assets/cap.png";
import "./css/bootstrap.css";

function RecurringCart({ paymentFlow }) {
  return (
    <>
      <div className="App-Container is-noBackground flex-container justify-content-center">
        <div
          className="App-Overview"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
        >
          <header
            className="Header"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          >
            <div className="Header-content flex-container justify-content-space-between align-items-stretch">
              <div className="Header-business flex-item width-grow flex-container align-items-center">
                <a
                  className="Link Header-businessLink Link--primary"
                  aria-label="Back to Togethere"
                  title="Togethere"
                  target="_self"
                >
                  <div style={{ position: "relative" }}>
                    <div className="flex-container align-items-center">
                      <div
                        className="Header-backArrowContainer"
                        style={{ opacity: 1, transform: "none" }}
                      >
                        <svg
                          className="InlineSVG Icon Header-backArrow mr2 Icon--sm"
                          focusable="false"
                          width="12"
                          height="12"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.417 7H15a1 1 0 0 1 0 2H3.417l4.591 4.591a1 1 0 0 1-1.415 1.416l-6.3-6.3a1 1 0 0 1 0-1.414l6.3-6.3A1 1 0 0 1 8.008 2.41z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="Header-merchantLogoContainer"
                        style={{ transform: "none" }}
                      >
                        <div className="Header-merchantLogoWithLabel flex-item width-grow">
                          <div
                            className="Tooltip-Context "
                            style={{ padding: "0px" }}
                          >
                            <div className="HeaderImage HeaderImage--logo flex-item width-fixed flex-container justify-content-center align-items-center width-fixed">
                              <img
                                alt="Togethere logo"
                                src="https://stripe-camo.global.ssl.fastly.net/66d6efdd443300ee9095a3822fcc4ce54898875569d2e5840a2f2ae8fea98a02/68747470733a2f2f66696c65732e7374726970652e636f6d2f66696c65732f4d44423859574e6a64463878534559784d6e5a455656564e546e42575233466b66475a666447567a64463952546c4e30634856434d7a465a4e6e6c34576c46354e3142524e304d7951553030304d344f54304b466f"
                                className="HeaderImage-img"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <span className="Header-businessLink-label Header-businessLink-label--noPointerEvents Text Text-color--gray800 Text-fontSize--14 Text-fontWeight--500">
                            <div>Back</div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="TestModeBadge mx2 flex-item width-fixed">
                  <div className="Tag TestModeBadge-desktop Tag-orange">
                    <span className="Text Text-color--orange Text-fontSize--11 Text-fontWeight--700 Text-transform--uppercase">
                      Test Mode
                    </span>
                  </div>
                  <div className="Tag TestModeBadge-mobile Tag-orange">
                    <span className="Text Text-color--orange Text-fontSize--11 Text-fontWeight--700 Text-transform--uppercase">
                      Test
                    </span>
                  </div>
                </div>
              </div>
              <div className="Header-actions flex-item width-fixed">
                <button
                  className="Button Header-viewDetailsButton Button--link Button--sm"
                  type="button"
                >
                  <div className="flex-container justify-content-flex-end align-items-center">
                    <svg
                      className="InlineSVG Icon Button-Icon Button-Icon--right Icon--sm Icon--square"
                      focusable="false"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M10.193 3.97a.75.75 0 0 1 1.062 1.062L6.53 9.756a.75.75 0 0 1-1.06 0L.745 5.032A.75.75 0 0 1 1.807 3.97L6 8.163l4.193-4.193z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    <div
                      className="Header-detailsLabel"
                      style={{ position: "unset", opacity: 1, transform: "none" }}
                    >
                      <span className="Text Text-color--default Text-fontSize--13 Text-fontWeight--400 Text--truncate">
                        Details
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </header>
          <div
            className="OrderSummaryColumn"
            data-testid="order-summary-column"
          >
            <div data-testid="product-summary" className="ProductSummary">
              <div
                className="ProductSummary-productImageContainer"
                data-testid="product-summary-product-image"
              >
                <div
                  className="ProductImage-container"
                  data-testid="product-image"
                >
                  <img
                    src="https://stripe-camo.global.ssl.fastly.net/cb5e5595d1cfb7bb832134861cb477adc2dd0873513835f77d3cb86a485ac4a7/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878534559784d6e5a455656564e546e42575233466b66475a735833526c63335266595777315546526b516a6846536c5a33616c49316146686b596b5a6e64334e52303035736e36565a6c74"
                    alt=""
                    className="ProductImage-image"
                    fetchpriority="high"
                  />
                </div>
              </div>
              <div className="ProductSummary-info">
                <span
                  className="ProductSummary-name Text Text-color--gray500 Text-fontSize--16 Text-fontWeight--500"
                  data-testid="product-summary-name"
                >
                  Subscribe to Togethere Professional
                </span>
                <div className="ProductSummary-amountsContainer">
                  <div
                    className="ProductSummary-totalsRead"
                    style={{ opacity: 1 }}
                  >
                    <div
                      className="ProductSummary-totalAmountContainer"
                      style={{ opacity: 1 }}
                    >
                      <span
                        className="ProductSummary-totalAmount Text Text-color--default Text-fontWeight--600 Text--tabularNumbers"
                        id="ProductSummary-totalAmount"
                        data-testid="product-summary-total-amount"
                      >
                        <div className="ProductSummaryTotalAmount flex-container direction-row align-items-baseline wrap-wrap">
                          <div className="mr2 flex-item width-fixed">
                            <span>US$18.00</span>
                          </div>
                          <div className="flex-item width-fixed">
                            <span className="ProductSummaryTotalAmount-billingInterval Text Text-color--gray500 Text-fontSize--14">
                              <div style={{ display: paymentFlow == "ZeroAuth" ? "none" : " " }}>
                                per <br className="BillingIntervalBreak" />
                                month
                              </div>
                            </span>
                          </div>
                        </div>
                      </span>
                    </div>
                    <span
                      className="ProductSummary-description Text Text-color--gray500 Text-fontSize--14 Text-fontWeight--500"
                      id="ProductSummary-description"
                      data-testid="product-summary-description"
                    ></span>
                  </div>
                </div>
                <div
                  className="ProductSummary-buttonsContainer"
                  data-testid="product-summary-buttons"
                ></div>
              </div>
            </div>
            <section
              data-testid="order-details"
              className="OrderDetails App-Overview-OrderDetails my6"
            >
              <ul className="OrderDetails-items">
                <li
                  className="OrderDetails-item"
                  style={{ opacity: 1, transform: "scale(1)", height: "auto", marginBottom: "16px" }}
                >
                  <div className="LineItem flex-container align-items-flex-start">
                    <div
                      className="LineItem-imageContainer mr4 flex-item width-fixed"
                      data-testid="line-item-image"
                    >
                      <img
                        src="https://stripe-camo.global.ssl.fastly.net/cb5e5595d1cfb7bb832134861cb477adc2dd0873513835f77d3cb86a485ac4a7/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878534559784d6e5a455656564e546e42575233466b66475a735833526c63335266595777315546526b516a6846536c5a33616c49316146686b596b5a6e64334e52303035736e36565a6c74"
                        alt=""
                        className="LineItem-image"
                      />
                    </div>
                    <div className="flex-container justify-content-space-between align-items-baseline wrap-wrap width-grow">
                      <div
                        className="flex-column-break"
                      ></div>
                      <div
                        className="flex-column-break"
                      ></div>
                      <div
                        className="LineItem-productName flex-item width-auto"
                        data-testid="line-item-product-name"
                      >
                        <span className="Text Text-color--default Text-fontSize--14 Text-fontWeight--500">
                          <div className="ExpandableText false">
                            <div
                              data-testid=""
                              className="ExpandableText--truncated"
                              style={{ WebkitLineClamp: 2 }}
                            >
                              Togethere Professional
                            </div>
                          </div>
                        </span>
                      </div>
                      <div
                        className="flex-container wrap-wrap"
                        style={{ width: "100%", order: 3 }}
                      >
                        <div
                          className="LineItem-productDescription flex-item width-12"
                        >
                          <div className="Text Text-color--gray400 Text-fontSize--12 Text-fontWeight--400">
                            <div className="ExpandableText false">
                              <div
                                data-testid="line-item-product-description"
                                className="ExpandableText--truncated"
                                style={{ WebkitLineClamp: 2 }}
                              >
                                {paymentFlow == "ZeroAuth" ? "June'21 Usage 512GB" : "Togethere's premium plan to work better togethere"}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="LineItem-description flex-item width-grow"
                        >
                          <span style={{ display: paymentFlow == "ZeroAuth" ? "none" : " " }} className="Text Text-color--gray400 Text-fontSize--12 Text-fontWeight--400">
                            <div
                              className="AdjustableQuantitySelector-hitBox"
                              data-testid="line-item-adjustable-qty-hit-box"
                            >
                              <button
                                className="Button AdjustableQuantitySelector Button--link Button--md"
                                type="button"
                                data-testid="line-item-adjustable-qty"
                              >
                                <div className="flex-container justify-content-center align-items-center">
                                  <span className="Text Text-color--default Text-fontWeight--500 Text--truncate">
                                    <div className="flex-container justify-content-center align-items-center">
                                      <span className="Text Text-color--gray900 Text-fontSize--12 Text-fontWeight--500">
                                        Qty 1{" "}
                                      </span>
                                      <svg
                                        className="InlineSVG Icon AdjustableQuantitySelector-icon Icon--xs Icon--gray400"
                                        focusable="false"
                                        fill="gray400"
                                        color="gray400"
                                        viewBox="0 0 12 12"
                                      >
                                        <path
                                          d="M10.193 3.97a.75.75 0 0 1 1.062 1.062L6.53 9.756a.75.75 0 0 1-1.06 0L.745 5.032A.75.75 0 0 1 1.807 3.97L6 8.163l4.193-4.193z"
                                          fillRule="evenodd"
                                        ></path>
                                      </svg>
                                    </div>
                                  </span>
                                </div>
                              </button>
                            </div>
                            <span data-testid="line-item-description">
                              Billed monthly
                            </span>
                          </span>
                        </div>
                        <div
                          className="LineItem-amountDetail flex-item width-auto flex-item-align-right"
                          data-testid="line-item-amount-detail"
                        ></div>
                      </div>
                      <div
                        className="LineItem-tierBreakdown flex-item width-auto flex-item-align-left"
                      >
                        <div
                          className="flex-container"
                          data-testid="line-item-tiers"
                        ></div>
                      </div>
                      <div
                        className="ml2 flex-item width-fixed"
                        data-testid="line-item-total-amount"
                      >
                        <span className="Text Text-color--default Text-fontSize--14 Text-fontWeight--500 Text--tabularNumbers">
                          <span>US$18.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="OrderDetails-footer"></div>
            </section>
          </div>
        </div>
      </div>
      {/* <div className="cart">
        <div className="titleContainer">
          <div className="title">
            <img className="logoImg" src={logo} /> Hyperswitch Playground App
          </div>
          <div className="testMode">Test Mode</div>
        </div>
        <div className="ordersummary">Order Summary(2) </div>
        <div className="items">
          <div className="Item">
            <div className="ItemContainer">
              <div className="itemImg">
                <img src={shirt} />
              </div>
              <div className="itemDetails">
                <div className="name">HS Tshirt</div>
                <div className="props">
                  Size: <span className="value">37 &nbsp;&nbsp;&nbsp;</span>
                  Qty:<span className="value">1 </span>
                </div>
                <div className="props">
                  Color: <span className="value">Black</span>
                </div>
              </div>
            </div>
            <div> 100.00</div>
          </div>
          <div className="Item">
            <div className="ItemContainer">
              <div className="itemImg">
                <img src={cap} />
              </div>
              <div className="itemDetails">
                <div className="name">HS Cap</div>
                <div className="props">
                  Size: <span className="value">2 &nbsp;&nbsp;&nbsp;</span>
                  Qty:<span className="value">1 </span>
                </div>
                <div className="props">
                  Color: <span className="value">Black</span>
                </div>
              </div>
            </div>
            <div> 100.00</div>
          </div>
          <div className="ItemTotal">
            <div className="total">Total Amount</div>
            <div> 200.00</div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default RecurringCart;
