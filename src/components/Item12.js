import { useMemo } from "react";
import "./Item12.css";

const Item12 = ({
  className = "",
  esimBermuda300x365jpg,
  heading2Bermuda,
  prop,
  prop1,
  propDebugCommit,
  propAlignSelf,
  propDisplay,
  propMinWidth,
  propMinWidth1,
}) => {
  const item8Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
      alignSelf: propAlignSelf,
    };
  }, [propDebugCommit, propAlignSelf]);

  const heading28Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const div14Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={`item58 ${className}`} style={item8Style}>
      <img
        className="esim-bermuda-300x365jpg-icon"
        alt=""
        src={esimBermuda300x365jpg}
      />
      <div className="heading-2-bermuda-wrapper">
        <div className="heading-266" style={heading28Style}>
          {heading2Bermuda}
        </div>
      </div>
      <div className="item-inner">
        <div className="parent32">
          <div className="div221" style={div14Style}>
            {prop}
          </div>
          <div className="wrapper30">
            <div className="div222">{prop1}</div>
          </div>
          <div className="eur-wrapper26">
            <b className="eur35">EUR</b>
          </div>
        </div>
      </div>
      <img className="image-icon48" alt="" src="/image2.svg" />
    </div>
  );
};

Item12.propTypes = {
  className: PropTypes.string,
  esimBermuda300x365jpg: PropTypes.string,
  heading2Bermuda: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Item12;
