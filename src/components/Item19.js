import { useMemo } from "react";
import "./Item19.css";

const Item19 = ({
  className = "",
  esimAlgeria300x365jpg,
  heading2Algeria,
  prop,
  prop1,
  image,
  propAlignSelf,
  propDebugCommit,
  propWidth,
  propMinWidth,
  propDisplay,
  propMinWidth1,
  propMinWidth2,
}) => {
  const item1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      debugCommit: propDebugCommit,
      width: propWidth,
    };
  }, [propAlignSelf, propDebugCommit, propWidth]);

  const heading21Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  const div1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div2Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`item51 ${className}`} style={item1Style}>
      <img
        className="esim-algeria-300x365jpg-icon"
        alt=""
        src={esimAlgeria300x365jpg}
      />
      <div className="heading-2-algeria-wrapper">
        <div className="heading-259" style={heading21Style}>
          {heading2Algeria}
        </div>
      </div>
      <div className="frame-parent67">
        <div className="frame-wrapper36">
          <div className="parent25">
            <div className="div207" style={div1Style}>
              {prop}
            </div>
            <div className="wrapper23">
              <div className="div208" style={div2Style}>
                {prop1}
              </div>
            </div>
            <div className="eur-wrapper21">
              <b className="eur28">EUR</b>
            </div>
          </div>
        </div>
        <img className="image-icon41" alt="" src={image} />
      </div>
    </div>
  );
};

Item19.propTypes = {
  className: PropTypes.string,
  esimAlgeria300x365jpg: PropTypes.string,
  heading2Algeria: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  image: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Item19;
