import { useMemo } from "react";
import "./Item18.css";

const Item18 = ({
  className = "",
  esimPrepaidAndorra300x365,
  heading2Andorra,
  prop,
  prop1,
  image,
  propAlignSelf,
  propHeight,
  propDebugCommit,
  propHeight1,
  propMinWidth,
  propDisplay,
  propGap,
  propMinWidth1,
  propMinWidth2,
  propDebugCommit1,
  propDebugCommit2,
}) => {
  const item2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight,
      debugCommit: propDebugCommit,
    };
  }, [propAlignSelf, propHeight, propDebugCommit]);

  const frameDiv2Style = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const heading22Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  const frameDiv3Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const div3Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div4Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
      debugCommit: propDebugCommit1,
    };
  }, [propMinWidth2, propDebugCommit1]);

  const eURStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  return (
    <div className={`item52 ${className}`} style={item2Style}>
      <img
        className="esim-prepaid-andorra-300x365j-icon"
        alt=""
        src={esimPrepaidAndorra300x365}
      />
      <div className="frame-parent68" style={frameDiv2Style}>
        <div className="heading-2-andorra-wrapper">
          <div className="heading-260" style={heading22Style}>
            {heading2Andorra}
          </div>
        </div>
        <div className="frame-parent69" style={frameDiv3Style}>
          <div className="frame-wrapper37">
            <div className="parent26">
              <div className="div209" style={div3Style}>
                {prop}
              </div>
              <div className="frame-wrapper38">
                <div className="frame-parent70">
                  <div className="wrapper24">
                    <div className="div210" style={div4Style}>
                      {prop1}
                    </div>
                  </div>
                  <b className="eur29" style={eURStyle}>
                    EUR
                  </b>
                </div>
              </div>
            </div>
          </div>
          <img className="image-icon42" alt="" src={image} />
        </div>
      </div>
    </div>
  );
};

Item18.propTypes = {
  className: PropTypes.string,
  esimPrepaidAndorra300x365: PropTypes.string,
  heading2Andorra: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  image: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propHeight1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propGap: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propDebugCommit1: PropTypes.any,
  propDebugCommit2: PropTypes.any,
};

export default Item18;
