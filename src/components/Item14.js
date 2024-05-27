import { useMemo } from "react";
import "./Item14.css";

const Item14 = ({
  className = "",
  esimAzerbaijan300x365jpg,
  heading2Azerbaijan,
  prop,
  prop1,
  image,
  propWidth,
  propMinWidth,
  propDisplay,
  propMinWidth1,
  propMinWidth2,
}) => {
  const item6Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const heading26Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  const div11Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div12Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`item56 ${className}`} style={item6Style}>
      <img
        className="esim-azerbaijan-300x365jpg-icon"
        alt=""
        src={esimAzerbaijan300x365jpg}
      />
      <div className="heading-2-azerbaijan-wrapper">
        <div className="heading-264" style={heading26Style}>
          {heading2Azerbaijan}
        </div>
      </div>
      <div className="frame-parent78">
        <div className="frame-wrapper43">
          <div className="parent30">
            <div className="div217" style={div11Style}>
              {prop}
            </div>
            <div className="wrapper28">
              <div className="div218" style={div12Style}>
                {prop1}
              </div>
            </div>
            <div className="eur-wrapper24">
              <b className="eur33">EUR</b>
            </div>
          </div>
        </div>
        <img className="image-icon46" alt="" src={image} />
      </div>
    </div>
  );
};

Item14.propTypes = {
  className: PropTypes.string,
  esimAzerbaijan300x365jpg: PropTypes.string,
  heading2Azerbaijan: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  image: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Item14;
