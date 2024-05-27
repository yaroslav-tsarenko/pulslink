import { useMemo } from "react";
import "./BackgroundBorder.css";

const BackgroundBorder = ({
  className = "",
  visibilityOnsvg,
  isMyPhoneUnlockedAndAbleT,
  eSIMs,
  propBackgroundImage,
  propDisplay,
  propAlignSelf,
}) => {
  const backgroundBorder1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const isMyPhoneContainerStyle = useMemo(() => {
    return {
      display: propDisplay,
      alignSelf: propAlignSelf,
    };
  }, [propDisplay, propAlignSelf]);

  return (
    <div
      className={`backgroundborder11 ${className}`}
      style={backgroundBorder1Style}
    >
      <div className="visibility-onsvg-wrapper1">
        <img className="visibility-onsvg-icon3" alt="" src={visibilityOnsvg} />
      </div>
      <h3 className="is-my-phone-container" style={isMyPhoneContainerStyle}>
        <p className="is-my-phone">{isMyPhoneUnlockedAndAbleT}</p>
        <p className="esims">{eSIMs}</p>
      </h3>
    </div>
  );
};


export default BackgroundBorder;
