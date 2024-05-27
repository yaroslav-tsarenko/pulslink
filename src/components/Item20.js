import { useMemo } from "react";
import "./Item20.css";

const Item20 = ({
  className = "",
  esimAlbania300x365jpg,
  heading2Albania,
  prop,
  prop1,
  image,
  propHeight,
  propAlignSelf,
  propHeight1,
  propMinWidth,
  propDisplay,
  propGap,
  propMinWidth1,
}) => {
  const itemStyle = useMemo(() => {
    return {
      height: propHeight,
      alignSelf: propAlignSelf,
    };
  }, [propHeight, propAlignSelf]);

  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const heading2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  const frameDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={`item50 ${className}`} style={itemStyle}>
      <img
        className="esim-albania-300x365jpg-icon"
        alt=""
        src={esimAlbania300x365jpg}
      />
      <div className="frame-parent65" style={frameDivStyle}>
        <div className="heading-2-albania-wrapper">
          <div className="heading-258" style={heading2Style}>
            {heading2Albania}
          </div>
        </div>
        <div className="frame-parent66" style={frameDiv1Style}>
          <div className="frame-wrapper35">
            <div className="parent24">
              <div className="div205" style={divStyle}>
                {prop}
              </div>
              <div className="wrapper22">
                <div className="div206">{prop1}</div>
              </div>
              <div className="eur-wrapper20">
                <b className="eur27">EUR</b>
              </div>
            </div>
          </div>
          <img className="image-icon40" alt="" src={image} />
        </div>
      </div>
    </div>
  );
};

Item20.propTypes = {
  className: PropTypes.string,
  esimAlbania300x365jpg: PropTypes.string,
  heading2Albania: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  image: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propHeight1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propGap: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Item20;
