import { useMemo } from "react";
import "./Item7.css";

const Item7 = ({
  className = "",
  esimFiji300x365jpg,
  heading2Fiji,
  prop,
  prop1,
  image,
  propMinWidth,
  propMinWidth1,
  propDebugCommit,
  propDebugCommit1,
  propMinWidth2,
  propDebugCommit2,
  propDebugCommit3,
}) => {
  const heading212Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div21Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      debugCommit: propDebugCommit,
    };
  }, [propMinWidth1, propDebugCommit]);

  const frameDiv6Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const div22Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
      debugCommit: propDebugCommit2,
    };
  }, [propMinWidth2, propDebugCommit2]);

  const eUR2Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit3,
    };
  }, [propDebugCommit3]);

  return (
    <div className={`item63 ${className}`}>
      <img
        className="esim-fiji-300x365jpg-icon"
        alt=""
        src={esimFiji300x365jpg}
      />
      <div className="heading-2-fiji-wrapper">
        <div className="heading-270" style={heading212Style}>
          {heading2Fiji}
        </div>
      </div>
      <div className="frame-parent90">
        <div className="frame-wrapper51">
          <div className="parent37">
            <div className="div231" style={div21Style}>
              {prop}
            </div>
            <div className="frame-wrapper52">
              <div className="frame-parent91" style={frameDiv6Style}>
                <div className="wrapper35">
                  <div className="div232" style={div22Style}>
                    {prop1}
                  </div>
                </div>
                <b className="eur40" style={eUR2Style}>
                  EUR
                </b>
              </div>
            </div>
          </div>
        </div>
        <img className="image-icon53" alt="" src={image} />
      </div>
    </div>
  );
};

Item7.propTypes = {
  className: PropTypes.string,
  esimFiji300x365jpg: PropTypes.string,
  heading2Fiji: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  image: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propDebugCommit2: PropTypes.any,
  propDebugCommit3: PropTypes.any,
};

export default Item7;
