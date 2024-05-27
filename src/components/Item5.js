import { useMemo } from "react";
import "./Item5.css";

const Item5 = ({
  className = "",
  esimJamaica1300x365jpg,
  heading2Jamaica,
  prop,
  prop1,
  image,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const heading214Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div25Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div26Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`item65 ${className}`}>
      <img
        className="esim-jamaica-1-300x365jpg-icon"
        alt=""
        src={esimJamaica1300x365jpg}
      />
      <div className="heading-2-jamaica-wrapper">
        <div className="heading-272" style={heading214Style}>
          {heading2Jamaica}
        </div>
      </div>
      <div className="frame-parent93">
        <div className="frame-wrapper54">
          <div className="parent39">
            <div className="div235" style={div25Style}>
              {prop}
            </div>
            <div className="wrapper37">
              <div className="div236" style={div26Style}>
                {prop1}
              </div>
            </div>
            <div className="eur-wrapper30">
              <b className="eur42">EUR</b>
            </div>
          </div>
        </div>
        <img className="image-icon55" alt="" src={image} />
      </div>
    </div>
  );
};

Item5.propTypes = {
  className: PropTypes.string,
  esimJamaica1300x365jpg: PropTypes.string,
  heading2Jamaica: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  image: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Item5;
