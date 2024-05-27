import { useMemo } from "react";
import "./BackgroundBorder1.css";

const BackgroundBorder1 = ({
  className = "",
  visibilityOnsvg,
  canIUseMySIMCardAndPulseL,
  atTheSameTime,
  propBackgroundImage,
  propPadding,
  propWidth,
  propHeight,
}) => {
  const backgroundBorderStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const canIUseContainerStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div
      className={`backgroundborder10 ${className}`}
      style={backgroundBorderStyle}
    >
      <div className="visibility-onsvg-frame" style={frameDiv1Style}>
        <img className="visibility-onsvg-icon2" alt="" src={visibilityOnsvg} />
      </div>
      <p className="can-i-use-container" style={canIUseContainerStyle}>
        <span className="can-i-use-container1">
          <span className="can-i-use1">{canIUseMySIMCardAndPulseL}</span>
          <span className="at-the-same">{atTheSameTime}</span>
        </span>
      </p>
    </div>
  );
};



export default BackgroundBorder1;
