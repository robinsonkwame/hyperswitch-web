import React from "react";
import logo from "../public/assets/hyperswitchLogo.svg";
import shirt from "../public/assets/shirt.png";
import cap from "../public/assets/cap.png";
import "./css/bootstrap.css";

function Cart() {
  return (
    <>
      <div className="App-Container is-noBackground flex-container justify-content-center">
        <div className="App-Overview" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
          <header className="Header" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
            <div className="Header-content flex-container justify-content-space-between align-items-stretch">
              <div className="Header-business flex-item width-grow flex-container align-items-center">
                <a
                  className="Link Header-businessLink Link--primary"
                  aria-label="Back to Powdur"
                  title="Powdur"
                  target="_self"
                >
                  <div style={{ position: 'relative' }}>
                    <div className="flex-container align-items-center">
                      <div
                        className="Header-backArrowContainer"
                        style={{ opacity: 1, transform: 'none' }}
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
                          <div className="Tooltip-Context " style={{ padding: "0px" }}>
                            <div className="HeaderImage HeaderImage--icon flex-item width-fixed flex-container justify-content-center align-items-center width-fixed">
                              <img
                                className="HeaderImage-imageIcon"
                                alt="Powdur icon"
                                src="https://stripe-camo.global.ssl.fastly.net/63f4ec8cbe3d41be42a10161d3a86d3a3bda2d541052dc077e4d5e164c3386e1/68747470733a2f2f66696c65732e7374726970652e636f6d2f66696c65732f4d44423859574e6a64463878534559775a317044536c4978626d7470597a4a5866475a666447567a6446394263456c304f453952576e5a7652454a555330566f4d47564d62464e34546b38303063713345486f6c71"
                              />
                            </div>
                          </div>
                          <span className="Header-businessLink-label Header-businessLink-label--noPointerEvents Text Text-color--gray800 Text-fontSize--14 Text-fontWeight--500">
                            Back
                          </span>
                          <h1 className="Header-businessLink-name Text Text-color--gray800 Text-fontSize--14 Text-fontWeight--500 Text--truncate">
                            Powdur
                          </h1>
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
          <div className="OrderSummaryColumn" data-testid="order-summary-column">
            <div
              data-testid="product-summary"
              className="ProductSummary is-clickable"
            >
              <div
                className="ProductSummary-productImageContainer is-clickable"
                data-testid="product-summary-product-image"
              >
                <div className="ProductImage-container" data-testid="product-image">
                  <img
                    src="https://stripe-camo.global.ssl.fastly.net/c25a949b6f1ffabee9af1a5696d7f152325bdce2d1b926456d42994c3d91ad78/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f666c5f746573745f67625631776635726a4c64725a635858647032346d643649"
                    alt="The Pure Set"
                    className="ProductImage-image"
                    fetchpriority="high"
                  />
                </div>
              </div>
              <div className="ProductSummary-info is-clickable">
                <span
                  className="ProductSummary-name Text Text-color--gray500 Text-fontSize--16 Text-fontWeight--500"
                  data-testid="product-summary-name"
                >
                  Pay Powdur
                </span>
                <div className="ProductSummary-amountsContainer">
                  <div className="ProductSummary-totalsRead" style={{ opacity: 1 }}>
                    <div
                      className="ProductSummary-totalAmountContainer is-clickable"
                      style={{ opacity: 1 }}
                    >
                      <span
                        className="ProductSummary-totalAmount Text Text-color--default Text-fontWeight--600 Text--tabularNumbers"
                        id="ProductSummary-totalAmount"
                        data-testid="product-summary-total-amount"
                      >
                        <span>US$129.00</span>
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
                  style={{ opacity: 1, transform: 'scale(1)', height: 'auto', marginBottom: '16px' }}
                >
                  <div className="LineItem flex-container align-items-flex-start">
                    <div
                      className="LineItem-imageContainer mr4 flex-item width-fixed"
                      data-testid="line-item-image"
                    >
                      <img
                        src="https://stripe-camo.global.ssl.fastly.net/c25a949b6f1ffabee9af1a5696d7f152325bdce2d1b926456d42994c3d91ad78/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f666c5f746573745f67625631776635726a4c64725a635858647032346d643649"
                        alt=""
                        className="LineItem-image"
                      />
                    </div>
                    <div className="flex-container justify-content-space-between align-items-baseline wrap-wrap width-grow">
                      <div className="flex-column-break"></div>
                      <div className="flex-column-break"></div>
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
                              The Pure Set
                            </div>
                          </div>
                        </span>
                      </div>
                      <div
                        className="flex-container wrap-wrap"
                        style={{ width: "100%" }}
                      >
                        <div
                          className="LineItem-description flex-item width-grow"
                        >
                          <span className="Text Text-color--gray400 Text-fontSize--12 Text-fontWeight--400">
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
                          <span>US$65.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="OrderDetails-item"
                  style={{ opacity: 1, transform: 'scale(1)', height: 'auto', marginBottom: '16px' }}
                >
                  <div className="LineItem flex-container align-items-flex-start">
                    <div
                      className="LineItem-imageContainer mr4 flex-item width-fixed"
                      data-testid="line-item-image"
                    >
                      <img
                        src="https://stripe-camo.global.ssl.fastly.net/d4d32b3216cdb09a5749e32214a8f37dbe0785affd4234c80471cebd74e8c076/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878534559775a317044536c4978626d7470597a4a5866475a735833526c63335266596b746c4e6d5a3565564e71526d777a526e6856656e49785a455645534570543030334a377239327551"
                        alt=""
                        className="LineItem-image"
                      />
                    </div>
                    <div className="flex-container justify-content-space-between align-items-baseline wrap-wrap width-grow">
                      <div className="flex-column-break" ></div>
                      <div className="flex-column-break"></div>
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
                              Pure glow cream
                            </div>
                          </div>
                        </span>
                      </div>
                      <div
                        className="flex-container wrap-wrap"
                        style={{ width: "100%", order: 3 }}
                      >
                        <div
                          className="LineItem-description flex-item width-grow"
                        >
                          <span className="Text Text-color--gray400 Text-fontSize--12 Text-fontWeight--400">
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
                                        Qty 2{" "}
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
                          </span>
                        </div>
                        <div
                          className="LineItem-amountDetail flex-item width-auto flex-item-align-right"
                          data-testid="line-item-amount-detail"
                        >
                          <span className="Text Text-color--gray400 Text-fontSize--12 Text-fontWeight--400">
                            <span>US$32.00</span> each
                          </span>
                        </div>
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
                          <span>US$64.00</span>
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

export default Cart;
