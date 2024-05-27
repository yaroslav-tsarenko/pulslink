import { useMemo } from "react";
import "./Item13.css";

const Item13 = ({
  className = "",
  esimBangladesh300x365jpg,
  heading2Bangladesh,
  prop,
  prop1,
  propWidth,
  propMinWidth,
  propMinWidth1,
}) => {
  const item7Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const heading27Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div13Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={`item57 ${className}`} style={item7Style}>
      <img
        className="esim-bangladesh-300x365jpg-icon"
        alt=""
        src={esimBangladesh300x365jpg}
      />
      <div className="frame-parent79">
        <div className="heading-2-bangladesh-wrapper">
          <div className="heading-265" style={heading27Style}>
            {heading2Bangladesh}
          </div>
        </div>
        <div className="frame-parent80">
          <div className="frame-wrapper44">
            <div className="parent31">
              <div className="div219" style={div13Style}>
                {prop}
              </div>
              <div className="wrapper29">
                <div className="div220">{prop1}</div>
              </div>
              <div className="eur-wrapper25">
                <b className="eur34">EUR</b>
              </div>
            </div>
          </div>
          <img className="image-icon47" alt="" src="/image.svg" />
        </div>
      </div>
    </div>
  );
};

Item13.propTypes = {
  className: PropTypes.string,
  esimBangladesh300x365jpg: PropTypes.string,
  heading2Bangladesh: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Item13;
