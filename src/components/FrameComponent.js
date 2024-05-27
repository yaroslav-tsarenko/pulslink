import { Button } from "@mui/material";
import BenefitItems from "./BenefitItems";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`benefits-container-wrapper ${className}`}>
      <div className="benefits-container">
        <div className="benefits-content">
          <h1 className="enjoy-reliable-and-container">
            <span className="enjoy-reliable-and-container1">
              <p className="enjoy-reliable-and">
                Enjoy reliable and affordable internet in
              </p>
              <p className="your-trips-we">your trips. We get you covered.</p>
            </span>
          </h1>
        </div>
        <div className="app-usage">
          <div className="app-benefits">
            <div className="data-usage">
              <div className="unlimited-data-icon-container">
                <img
                  className="vectorsvg-icon13"
                  loading="lazy"
                  alt=""
                  src="/vectorsvg.svg"
                />
              </div>
              <div className="data-limit-parent">
                <div className="data-limit">
                  <b className="heading-36">Unlimited data</b>
                </div>
                <p className="enjoy-unlimited-data-container">
                  <span className="enjoy-unlimited-data-while-tra">
                    <span>
                      Enjoy unlimited data while traveling to numerous
                    </span>
                  </span>
                  <span className="destinations-worry-free-learn">
                    <span>{`destinations worry-free. `}</span>
                    <span className="learn-more">Learn more</span>
                  </span>
                </p>
              </div>
            </div>
            <BenefitItems
              edgesensorHighsvg="/edgesensor-highsvg@2x.png"
              heading3KeepUsingYourFavo="Keep using your favorite apps"
              getThatSafeRideHomeFindTh="Get that safe ride home, find that great"
              restaurantAndPinTheLocalA="restaurant, and pin the local attractions, all while"
              stayingConnectedWithYourL="staying connected with your loved ones."
            />
            <BenefitItems
              edgesensorHighsvg="/keepyourwhatsappnumbersvg.svg"
              heading3KeepUsingYourFavo="Keep your WhatsApp number"
              getThatSafeRideHomeFindTh="You can call and message all your contacts on"
              restaurantAndPinTheLocalA="WhatsApp, like you’re in the same country. Don’t"
              stayingConnectedWithYourL="lose touch with family and friends."
              propGap="20px"
              propWidth="304.4px"
              propAlignSelf="unset"
              propWidth1="294.1px"
              propHeight="36px"
              propWidth2="30px"
            />
          </div>
        </div>
        <div className="support-and-dual-sim">
          <BenefitItems
            edgesensorHighsvg="/forumsvg@2x.png"
            heading3KeepUsingYourFavo="24/7 Customer Support"
            getThatSafeRideHomeFindTh="In need of assistance? Our 24/7 chat support is"
            restaurantAndPinTheLocalA="just a message away to keep you connected and"
            stayingConnectedWithYourL="help you with everything you need."
            propGap="16px"
            propWidth="308.2px"
            propAlignSelf="stretch"
            propWidth1="unset"
            propHeight="40px"
            propWidth2="36px"
          />
          <div className="internet-speed">
            <div className="speed-icon-container">
              <img
                className="rocket-beneficiossvg-icon"
                alt=""
                src="/rocketbeneficiossvg-1.svg"
              />
            </div>
            <div className="benefit-content-parent">
              <div className="benefit-content">
                <h3 className="fast-and-reliable-container">
                  <p className="fast-and-reliable">
                    Fast and Reliable Internet
                  </p>
                  <p className="connection">Connection</p>
                </h3>
              </div>
              <p className="connect-to-the-container">
                <span className="connect-to-the">
                  Connect to the best networks at your destination
                </span>
                <span className="and-get-internet">
                  and get internet that’s both reliable and fast
                </span>
              </p>
            </div>
          </div>
          <BenefitItems
            edgesensorHighsvg="/digitalsimsvg-1.svg"
            heading3KeepUsingYourFavo="Enjoy dual SIMs"
            getThatSafeRideHomeFindTh="Enjoy the flexibility of our digital eSIM while"
            restaurantAndPinTheLocalA="keeping the option to use your original SIM as"
            stayingConnectedWithYourL="usual whenever you need it."
            propGap="16px"
            propWidth="290.9px"
            propAlignSelf="stretch"
            propWidth1="unset"
            propHeight="40px"
            propWidth2="36px"
          />
        </div>
        <div className="esim-button">
          <Button
            className="link41"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#292b2e",
              fontSize: "16",
              background: "#ffa51f",
              borderRadius: "12px",
              "&:hover": { background: "#ffa51f" },
              width: 392,
              height: 40,
            }}
          >
            I want my eSIM
          </Button>
        </div>
      </div>
    </section>
  );
};


export default FrameComponent;
