import { useMemo } from "react";
import "./Item16.css";

const Item16 = ({
  className = "",
  esimAustralia300x365jpg,
  heading2Australia,
  prop,
  prop1,
  image,
  propHeight,
  propWidth,
  propAlignSelf,
  propHeight1,
  propMinWidth,
  propGap,
  propMinWidth1,
  propMinWidth2,
}) => {
  const item4Style = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propHeight, propWidth, propAlignSelf]);

  const frameDiv4Style = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const heading24Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv5Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const div7Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div8Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`item54 ${className}`} style={item4Style}>
      <img
        className="esim-australia-300x365jpg-icon"
        alt=""
        src={esimAustralia300x365jpg}
      />
      <div className="frame-parent73" style={frameDiv4Style}>
        <div className="heading-2-australia-wrapper">
          <div className="heading-262" style={heading24Style}>
            {heading2Australia}
          </div>
        </div>
        <div className="frame-parent74" style={frameDiv5Style}>
          <div className="frame-wrapper40">
            <div className="parent28">
              <div className="div213" style={div7Style}>
                {prop}
              </div>
              <div className="wrapper26">
                <div className="div214" style={div8Style}>
                  {prop1}
                </div>
              </div>
              <div className="eur-wrapper23">
                <b className="eur31">EUR</b>
              </div>
            </div>
          </div>
          <img className="image-icon44" alt="" src={image} />
        </div>
      </div>
    </div>
  );
};

Item16.propTypes = {
  className: PropTypes.string,
  esimAustralia300x365jpg: PropTypes.string,
  heading2Australia: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  image: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propHeight1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propGap: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Item16;
