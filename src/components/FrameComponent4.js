import NoRoamingBenefit from "./NoRoamingBenefit";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`frame-section ${className}`}>
      <div className="benefit-row-parent">
        <div className="benefit-row">
          <div className="benefit-item">
            <img
              className="unlimited-smallsvg-icon"
              alt=""
              src="/unlimitedsmallsvg.svg"
            />
          </div>
          <div className="unlimited-data-content">
            <div className="heading-3-unlimited-data-wrapper">
              <h3 className="heading-32"> Multiple Device Support</h3>
            </div>
            <p className="manage-esims-for1">
              Manage eSIMs for all your connected devices, from smartphones and
              tablets to wearables and IoT gadgets, through the user-friendly
              PulseLinkPlus platform.
            </p>
          </div>
        </div>
        <NoRoamingBenefit
          noAdditionalChargessvg="/noadditionalchargessvg.svg"
          heading3NoRoamingCharges="Secure and Reliable"
          travelAndStayConnePulseLi="Travel and stay connePulseLinkPlus prioritizes security, providing a safe and reliable platform to manage your eSIMs. Leverage the benefits of eSIM technology with peace of mind.cted without"
          roamingOrSurpriseBills="roaming or surprise bills."
        />
        <div className="keep-sim-benefit">
          <div className="digital-simsvg-wrapper">
            <img
              className="digital-simsvg-icon"
              alt=""
              src="/digitalsimsvg.svg"
            />
          </div>
          <div className="keep-sim-content">
            <div className="heading-3-keep-your-physical-wrapper">
              <b className="heading-33">Simple Management</b>
            </div>
            <p className="pulselinkplus-simplifies-esim">
              PulseLinkPlus simplifies eSIM management for all your devices,
              eliminating the need for physical SIM cards.
            </p>
          </div>
        </div>
        <NoRoamingBenefit
          noAdditionalChargessvg="/rocketbeneficiossvg.svg"
          heading3NoRoamingCharges="Global Connectivity"
          travelAndStayConnePulseLi="Purchase  Enjoy seamless connectivity worldwide with PulseLinkPlus. Switch eSIM profiles on the go, ensuring you stay connected wherever you travel.and setup your eSIM in"
          roamingOrSurpriseBills="minutes."
          propWidth="208.1px"
          propAlignSelf="unset"
          propMargin="unset"
          propFlex="unset"
        />
      </div>
    </section>
  );
};



export default FrameComponent4;
