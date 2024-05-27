import { useMemo } from "react";
import "./Item8.css";

const Item8 = ({
  className = "",
  esimEurope300x365jpg,
  heading2Europe,
  prop,
  prop1,
  image,
  propMinWidth,
  propDisplay,
  propMinWidth1,
  propMinWidth2,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const heading211Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  const div19Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div20Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
      debugCommit: propDebugCommit,
    };
  }, [propMinWidth2, propDebugCommit]);

  const eUR1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={`item62 ${className}`}>
      <img
        className="esim-europe-300x365jpg-icon"
        alt=""
        src={esimEurope300x365jpg}
      />
      <div className="heading-2-europe-wrapper">
        <div className="heading-269" style={heading211Style}>
          {heading2Europe}
        </div>
      </div>
      <div className="frame-parent88">
        <div className="frame-wrapper49">
          <div className="parent36">
            <div className="div229" style={div19Style}>
              {prop}
            </div>
            <div className="frame-wrapper50">
              <div className="frame-parent89">
                <div className="wrapper34">
                  <div className="div230" style={div20Style}>
                    {prop1}
                  </div>
                </div>
                <b className="eur39" style={eUR1Style}>
                  EUR
                </b>
              </div>
            </div>
          </div>
        </div>
        <img className="image-icon52" alt="" src={image} />
      </div>
    </div>
  );
};

Item8.propTypes = {
  className: PropTypes.string,
  esimEurope300x365jpg: PropTypes.string,
  heading2Europe: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  image: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
};

export default Item8;
