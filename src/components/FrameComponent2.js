import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`e-sim-container-wrapper ${className}`}>
      <div className="e-sim-container">
        <div className="e-sim-explanation">
          <div className="how-it-works">
            <div className="how-it-works-title">
              <h1 className="how-does-pulselinkpluss">
                How does PulseLinkPlus’s eSIM work?
              </h1>
            </div>
            <div className="compatibility-check">
              <img
                className="phone-and-cart-desktopsvg-icon"
                loading="lazy"
                alt=""
                src="/phoneandcartdesktopsvg.svg"
              />
              <div className="check-instructions">
                <div className="instruction-details">
                  <div className="check-that-your-device-is-esim-parent">
                    <p className="check-that-your-container">
                      <span className="check-that-your">
                        Check that your device is eSIM-compatible and
                      </span>
                      <span className="buy-your-data">buy your data plan.</span>
                    </p>
                    <p className="your-phone-must-container">
                      <span className="your-phone-must-container1">
                        <span className="your-phone-must">
                          Your phone must be compatible with eSIM. After
                          verifying, look for your
                        </span>
                        <span className="destination-and-buy">
                          destination and buy a data plan.
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="compatibility-link-container">
                    <div className="check-compatibility-link">
                      <div className="link39">
                        <u className="check-compatibility">
                          Check compatibility
                        </u>
                      </div>
                    </div>
                    <img
                      className="right-arrowsvg-icon"
                      loading="lazy"
                      alt=""
                      src="/rightarrowsvg.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="container51">
                <div className="vertical-divider2" />
                <div className="vertical-divider3" />
                <div className="background31">
                  <div className="background32" />
                </div>
                <div className="gradient-container">
                  <div className="background33">
                    <div className="background34" />
                    <div className="background35" />
                  </div>
                  <div className="background36">
                    <div className="background37" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-instructions">
          <div className="instruction-container">
            <div className="instruction-content">
              <h3 className="heading-34">
                Follow the installation instructions
              </h3>
              <p className="please-check-the-container">
                <span className="please-check-the">
                  Please check the instructions email we sent you
                </span>
                <span className="upon-purchasing-your">
                  upon purchasing your eSIM to complete the
                </span>
                <span className="installation-and-activation">
                  installation and activation process.
                </span>
              </p>
            </div>
          </div>
          <img
            className="traveler-desktopsvg-icon"
            loading="lazy"
            alt=""
            src="/phoneandcartdesktopsvg.svg"
          />
        </div>
      </div>
    </section>
  );
};


export default FrameComponent2;
