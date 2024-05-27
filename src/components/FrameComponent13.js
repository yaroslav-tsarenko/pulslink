import { useMemo } from "react";
import "./FrameComponent13.css";

const FrameComponent13 = ({
  className = "",
  linkMobileInternetIndia76,
  howToGetMobileInternetInI,
  whatIsTheBestOption,
  byCarolinaS,
  learnAboutTheOptionsYouHa,
  indiaOneOfTheMostFascinat,
  countriesInThe,
  propMinWidth,
}) => {
  const byCarolinaSStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`link-mobile-internet-india-7-parent ${className}`}>
      <img
        className="link-mobile-internet-india-7"
        loading="lazy"
        alt=""
        src={linkMobileInternetIndia76}
      />
      <div className="frame-wrapper38">
        <div className="how-to-get-mobile-internet-in-parent">
          <h3 className="how-to-get-container1">
            <span className="how-to-get-container2">
              <p className="how-to-get2">{howToGetMobileInternetInI}</p>
              <p className="what-is-the1">{whatIsTheBestOption}</p>
            </span>
          </h3>
          <div className="by-carolina-s-parent">
            <div className="by-carolina-s1" style={byCarolinaSStyle}>
              {byCarolinaS}
            </div>
            <p className="learn-about-the-container">
              <span className="learn-about-the">
                {learnAboutTheOptionsYouHa}
              </span>
              <span className="india-one-of">{indiaOneOfTheMostFascinat}</span>
              <span className="countries-in-the">{countriesInThe}</span>
            </p>
          </div>
          <button className="button38">
            <a className="link-read25">Read more</a>
          </button>
        </div>
      </div>
    </div>
  );
};



export default FrameComponent13;
