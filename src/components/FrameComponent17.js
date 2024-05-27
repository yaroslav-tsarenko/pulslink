import { useMemo } from "react";
import "./FrameComponent17.css";

const FrameComponent17 = ({
  className = "",
  linkUbigiEsimReview768x39,
  ubigiESIMReviewDoesItWork,
  well,
  byJulioOsuna,
  readOurUbigiESIMReviewAnd,
  companyOffersWithTheirDat,
  serviceRefundPoliciesAnd,
  propWidth,
  propFlex,
  propMinWidth,
  propWidth1,
  propAlignSelf,
  propFlex1,
  propDisplay,
  propAlignSelf1,
  propAlignSelf2,
  propMinWidth1,
}) => {
  const frameDiv7Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  const frameDiv8Style = useMemo(() => {
    return {
      width: propWidth1,
      alignSelf: propAlignSelf,
    };
  }, [propWidth1, propAlignSelf]);

  const frameDiv9Style = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const ubigiESIMReviewContainerStyle = useMemo(() => {
    return {
      display: propDisplay,
      alignSelf: propAlignSelf1,
    };
  }, [propDisplay, propAlignSelf1]);

  const frameDiv10Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
    };
  }, [propAlignSelf2]);

  const byJulioOsunaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`link-ubigi-esim-review-768x3-parent ${className}`}
      style={frameDiv7Style}
    >
      <img
        className="link-ubigi-esim-review-768x3"
        loading="lazy"
        alt=""
        src={linkUbigiEsimReview768x39}
      />
      <div className="frame-wrapper34" style={frameDiv8Style}>
        <div
          className="ubigi-esim-review-does-it-wor-parent"
          style={frameDiv9Style}
        >
          <h3
            className="ubigi-esim-review-container1"
            style={ubigiESIMReviewContainerStyle}
          >
            <p className="ubigi-esim-review1">{ubigiESIMReviewDoesItWork}</p>
            <p className="well1">{well}</p>
          </h3>
          <div className="by-julio-osuna-parent1" style={frameDiv10Style}>
            <div className="by-julio-osuna4" style={byJulioOsunaStyle}>
              {byJulioOsuna}
            </div>
            <p className="read-our-ubigi-container2">
              <span className="read-our-ubigi1">
                {readOurUbigiESIMReviewAnd}
              </span>
              <span className="company-offers-with1">
                {companyOffersWithTheirDat}
              </span>
              <span className="service-refund-policies1">
                {serviceRefundPoliciesAnd}
              </span>
            </p>
          </div>
          <button className="button33">
            <a className="link-read20">Read more</a>
          </button>
        </div>
      </div>
    </div>
  );
};



export default FrameComponent17;
