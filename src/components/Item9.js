import { useMemo } from "react";
import "./Item9.css";

const Item9 = ({
  className = "",
  esimBulgaria300x365jpg,
  heading2Bulgaria,
  prop,
  prop1,
  propAlignSelf,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const item11Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const heading210Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div17Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div18Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`item61 ${className}`} style={item11Style}>
      <img
        className="esim-bulgaria-300x365jpg-icon"
        alt=""
        src={esimBulgaria300x365jpg}
      />
      <div className="frame-parent85">
        <div className="heading-2-bulgaria-wrapper">
          <div className="heading-268" style={heading210Style}>
            {heading2Bulgaria}
          </div>
        </div>
        <div className="frame-parent86">
          <div className="frame-wrapper47">
            <div className="parent35">
              <div className="div227" style={div17Style}>
                {prop}
              </div>
              <div className="frame-wrapper48">
                <div className="frame-parent87">
                  <div className="wrapper33">
                    <div className="div228" style={div18Style}>
                      {prop1}
                    </div>
                  </div>
                  <b className="eur38">EUR</b>
                </div>
              </div>
            </div>
          </div>
          <img className="image-icon51" alt="" src="/image.svg" />
        </div>
      </div>
    </div>
  );
};

Item9.propTypes = {
  className: PropTypes.string,
  esimBulgaria300x365jpg: PropTypes.string,
  heading2Bulgaria: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Item9;
