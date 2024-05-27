import { useMemo } from "react";
import "./FrameComponent16.css";

const FrameComponent16 = ({
  className = "",
  linkBestPocketWifiSwitzer,
  linkBestPocketWifiForSwit,
  wantToKnowMoreAboutPocket,
  switzerlandWhereToRentThe,
  alternativesThereAreForTh,
  propPadding,
  propMinWidth,
  propWidth,
  propFlex,
  propDisplay,
}) => {
  const frameDiv11Style = useMemo(() => {
    return {
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propPadding, propMinWidth]);

  const frameDiv12Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const linkBestStyle = useMemo(() => {
    return {
      flex: propFlex,
      display: propDisplay,
    };
  }, [propFlex, propDisplay]);

  return (
    <div
      className={`link-best-pocket-wifi-switze-parent ${className}`}
      style={frameDiv11Style}
    >
      <img
        className="link-best-pocket-wifi-switze"
        loading="lazy"
        alt=""
        src={linkBestPocketWifiSwitzer}
      />
      <div
        className="link-best-pocket-wifi-for-sw-wrapper"
        style={frameDiv12Style}
      >
        <h3 className="link-best" style={linkBestStyle}>
          {linkBestPocketWifiForSwit}
        </h3>
      </div>
      <div className="by-julio-osuna-frame">
        <div className="by-julio-osuna5">By Julio Osuna</div>
      </div>
      <div className="frame-wrapper35">
        <div className="want-to-know-more-about-pocket-group">
          <p className="want-to-know-container1">
            <span className="want-to-know1">{wantToKnowMoreAboutPocket}</span>
            <span className="switzerland-where-to">
              {switzerlandWhereToRentThe}
            </span>
            <span className="alternatives-there-are">
              {alternativesThereAreForTh}
            </span>
          </p>
          <button className="button34">
            <a className="link-read21">Read more</a>
          </button>
        </div>
      </div>
    </div>
  );
};


export default FrameComponent16;
