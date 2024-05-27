import { useMemo } from "react";
import "./Item3.css";

const Item3 = ({
  className = "",
  esimLaos300x365jpg,
  heading2Laos,
  prop,
  prop1,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const heading216Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div28Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div29Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`item67 ${className}`}>
      <img
        className="esim-laos-300x365jpg-icon"
        alt=""
        src={esimLaos300x365jpg}
      />
      <div className="heading-2-laos-wrapper">
        <div className="heading-274" style={heading216Style}>
          {heading2Laos}
        </div>
      </div>
      <div className="frame-parent95">
        <div className="frame-wrapper56">
          <div className="parent41">
            <div className="div239" style={div28Style}>
              {prop}
            </div>
            <div className="wrapper39">
              <div className="div240" style={div29Style}>
                {prop1}
              </div>
            </div>
            <div className="eur-wrapper32">
              <b className="eur44">EUR</b>
            </div>
          </div>
        </div>
        <img className="image-icon57" alt="" src="/image1.svg" />
      </div>
    </div>
  );
};

Item3.propTypes = {
  className: PropTypes.string,
  esimLaos300x365jpg: PropTypes.string,
  heading2Laos: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Item3;
