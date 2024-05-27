import "./ESIMSetup.css";

const ESIMSetup = ({ className = "" }) => {
  return (
    <section className={`e-s-i-m-setup ${className}`}>
      <div className="travel-installation">
        <img
          className="qr-mailsvg-icon"
          loading="lazy"
          alt=""
          src="/qr-mailsvg.svg"
        />
        <div className="e-s-i-m-usage">
          <div className="delete-e-s-i-m">
            <div className="physical-s-i-m">
              <b className="heading-313">
                We will send you the eSIM to your e-mail
              </b>
              <p className="as-soon-as-container">
                <span className="as-soon-as">
                  As soon as you complete your purchase, you’ll receive the
                  instructions to install and activate your international travel
                </span>
                <span className="esim-and-get">
                  eSIM and get unlimited internet on your adventure!
                </span>
              </p>
            </div>
            <div className="internet-speed">
              <div className="best-option">
                <img className="desktopsvg-icon" alt="" src="/desktopsvg.svg" />
                <div className="activation-time">
                  <b className="installation-instructions-with">
                    Installation instructions with QR code
                  </b>
                </div>
              </div>
              <div className="best-option1">
                <img
                  className="cellphonesvg-icon"
                  alt=""
                  src="/cellphonesvg.svg"
                />
                <div className="manual-installation-instructio-wrapper">
                  <b className="manual-installation-instructio">
                    Manual installation instructions
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default ESIMSetup;
