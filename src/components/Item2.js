import { useMemo } from "react";
import "./Item2.css";

const Item2 = ({
  className = "",
  eSIMPalestine300x365jpg,
  heading2Palestine,
  prop,
  prop1,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const heading217Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div30Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div31Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`item68 ${className}`}>
      <div className="esim-palestine-300x365jpg-parent">
        <img
          className="esim-palestine-300x365jpg-icon"
          alt=""
          src={eSIMPalestine300x365jpg}
        />
        <div className="heading-2-palestine-wrapper">
          <div className="heading-275" style={heading217Style}>
            {heading2Palestine}
          </div>
        </div>
      </div>
      <div className="frame-parent96">
        <div className="frame-wrapper57">
          <div className="parent42">
            <div className="div241" style={div30Style}>
              {prop}
            </div>
            <div className="wrapper40">
              <div className="div242" style={div31Style}>
                {prop1}
              </div>
            </div>
            <div className="eur-wrapper33">
              <b className="eur45">EUR</b>
            </div>
          </div>
        </div>
        <img className="image-icon58" alt="" src="/image.svg" />
      </div>
    </div>
  );
};

Item2.propTypes = {
  className: PropTypes.string,
  eSIMPalestine300x365jpg: PropTypes.string,
  heading2Palestine: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Item2;
