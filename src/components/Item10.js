import { useMemo } from "react";
import "./Item10.css";

const Item10 = ({
  className = "",
  esimBrunei300x365jpg,
  heading2Brunei,
  prop,
  prop1,
  propAlignSelf,
  propMinWidth,
  propDisplay,
  propMinWidth1,
}) => {
  const item10Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const heading29Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  const div16Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={`item60 ${className}`} style={item10Style}>
      <img
        className="esim-brunei-300x365jpg-icon"
        alt=""
        src={esimBrunei300x365jpg}
      />
      <div className="heading-2-brunei-wrapper">
        <div className="heading-267" style={heading29Style}>
          {heading2Brunei}
        </div>
      </div>
      <div className="frame-parent83">
        <div className="frame-wrapper46">
          <div className="frame-parent84">
            <div className="parent34">
              <div className="div225" style={div16Style}>
                {prop}
              </div>
              <div className="wrapper32">
                <div className="div226">{prop1}</div>
              </div>
            </div>
            <div className="eur-wrapper28">
              <b className="eur37">EUR</b>
            </div>
          </div>
        </div>
        <img className="image-icon50" alt="" src="/image.svg" />
      </div>
    </div>
  );
};

Item10.propTypes = {
  className: PropTypes.string,
  esimBrunei300x365jpg: PropTypes.string,
  heading2Brunei: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Item10;
