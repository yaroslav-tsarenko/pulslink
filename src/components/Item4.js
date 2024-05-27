import { useMemo } from "react";
import "./Item4.css";

const Item4 = ({
  className = "",
  esimKazakhstan300x365jpg,
  heading2Kazakhstan,
  prop,
  prop1,
  propMinWidth,
  propMinWidth1,
}) => {
  const heading215Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div27Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={`item66 ${className}`}>
      <img
        className="esim-kazakhstan-300x365jpg-icon"
        alt=""
        src={esimKazakhstan300x365jpg}
      />
      <div className="heading-2-kazakhstan-wrapper">
        <div className="heading-273" style={heading215Style}>
          {heading2Kazakhstan}
        </div>
      </div>
      <div className="frame-parent94">
        <div className="frame-wrapper55">
          <div className="parent40">
            <div className="div237" style={div27Style}>
              {prop}
            </div>
            <div className="wrapper38">
              <div className="div238">{prop1}</div>
            </div>
            <div className="eur-wrapper31">
              <b className="eur43">EUR</b>
            </div>
          </div>
        </div>
        <img className="image-icon56" alt="" src="/image.svg" />
      </div>
    </div>
  );
};

Item4.propTypes = {
  className: PropTypes.string,
  esimKazakhstan300x365jpg: PropTypes.string,
  heading2Kazakhstan: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Item4;
