import { useMemo } from "react";
import "./Item15.css";

const Item15 = ({
  className = "",
  esimAustria300x365jpg,
  heading2Austria,
  prop,
  prop1,
  image,
  propWidth,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const item5Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const heading25Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div9Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div10Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`item55 ${className}`} style={item5Style}>
      <img
        className="esim-austria-300x365jpg-icon"
        alt=""
        src={esimAustria300x365jpg}
      />
      <div className="frame-parent75">
        <div className="heading-2-austria-wrapper">
          <div className="heading-263" style={heading25Style}>
            {heading2Austria}
          </div>
        </div>
        <div className="frame-parent76">
          <div className="frame-wrapper41">
            <div className="parent29">
              <div className="div215" style={div9Style}>
                {prop}
              </div>
              <div className="frame-wrapper42">
                <div className="frame-parent77">
                  <div className="wrapper27">
                    <div className="div216" style={div10Style}>
                      {prop1}
                    </div>
                  </div>
                  <b className="eur32">EUR</b>
                </div>
              </div>
            </div>
          </div>
          <img className="image-icon45" alt="" src={image} />
        </div>
      </div>
    </div>
  );
};

Item15.propTypes = {
  className: PropTypes.string,
  esimAustria300x365jpg: PropTypes.string,
  heading2Austria: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  image: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Item15;
