import { useMemo } from "react";
import "./BenefitItems.css";

const BenefitItems = ({
  className = "",
  edgesensorHighsvg,
  heading3KeepUsingYourFavo,
  getThatSafeRideHomeFindTh,
  restaurantAndPinTheLocalA,
  stayingConnectedWithYourL,
  propGap,
  propWidth,
  propAlignSelf,
  propWidth1,
  propHeight,
  propWidth2,
}) => {
  const benefitItemsStyle = useMemo(() => {
    return {
      gap: propGap,
      width: propWidth,
    };
  }, [propGap, propWidth]);

  const benefitIconsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1,
    };
  }, [propAlignSelf, propWidth1]);

  const edgesensorHighsvgIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth2,
    };
  }, [propHeight, propWidth2]);

  return (
    <div className={`benefit-items ${className}`} style={benefitItemsStyle}>
      <div className="benefit-icons" style={benefitIconsStyle}>
        <img
          className="edgesensor-highsvg-icon"
          loading="lazy"
          alt=""
          src={edgesensorHighsvg}
          style={edgesensorHighsvgIconStyle}
        />
      </div>
      <div className="benefit-headings">
        <div className="benefit-titles">
          <h3 className="heading-35">{heading3KeepUsingYourFavo}</h3>
        </div>
        <p className="get-that-safe-container">
          <span className="get-that-safe">{getThatSafeRideHomeFindTh}</span>
          <span className="restaurant-and-pin">
            {restaurantAndPinTheLocalA}
          </span>
          <span className="staying-connected-with">
            {stayingConnectedWithYourL}
          </span>
        </p>
      </div>
    </div>
  );
};


export default BenefitItems;
