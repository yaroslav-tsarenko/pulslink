import { useMemo } from "react";
import "./NoRoamingBenefit.css";

const NoRoamingBenefit = ({
  className = "",
  noAdditionalChargessvg,
  heading3NoRoamingCharges,
  travelAndStayConnePulseLi,
  roamingOrSurpriseBills,
  propWidth,
  propAlignSelf,
  propMargin,
  propFlex,
}) => {
  const noRoamingBenefitStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const heading3Style = useMemo(() => {
    return {
      margin: propMargin,
      flex: propFlex,
    };
  }, [propMargin, propFlex]);

  return (
    <div
      className={`no-roaming-benefit ${className}`}
      style={noRoamingBenefitStyle}
    >
      <div className="no-additional-chargessvg-wrapper">
        <img
          className="no-additional-chargessvg-icon"
          alt=""
          src={noAdditionalChargessvg}
        />
      </div>
      <div className="no-roaming-content">
        <div
          className="heading-3-no-roaming-charges-wrapper"
          style={frameDivStyle}
        >
          <h3 className="heading-31" style={heading3Style}>
            {heading3NoRoamingCharges}
          </h3>
        </div>
        <p className="travel-and-stay-container">
          <span className="travel-and-stay">{travelAndStayConnePulseLi}</span>
          <span className="roaming-or-surprise">{roamingOrSurpriseBills}</span>
        </p>
      </div>
    </div>
  );
};

NoRoamingBenefit.propTypes = {
  className: PropTypes.string,
  noAdditionalChargessvg: PropTypes.string,
  heading3NoRoamingCharges: PropTypes.string,
  travelAndStayConnePulseLi: PropTypes.string,
  roamingOrSurpriseBills: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propMargin: PropTypes.any,
  propFlex: PropTypes.any,
};

export default NoRoamingBenefit;
