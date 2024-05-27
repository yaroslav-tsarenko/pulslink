import { useMemo } from "react";
import "./Item17.css";

const Item17 = ({
  className = "",
  esimAntiguaAndBarbuda300x,
  heading2AntiguaAndBarbuda,
  prop,
  prop1,
  image,
  propWidth,
  propAlignSelf,
  propDebugCommit,
  propDisplay,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const item3Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
      debugCommit: propDebugCommit,
    };
  }, [propWidth, propAlignSelf, propDebugCommit]);

  const heading23Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const div5Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div6Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`item53 ${className}`} style={item3Style}>
      <img
        className="esim-antigua-and-barbuda-300x3-icon"
        alt=""
        src={esimAntiguaAndBarbuda300x}
      />
      <div className="frame-parent71">
        <div className="heading-2-antigua-and-barbud-wrapper">
          <div className="heading-261" style={heading23Style}>
            {heading2AntiguaAndBarbuda}
          </div>
        </div>
        <div className="frame-parent72">
          <div className="frame-wrapper39">
            <div className="parent27">
              <div className="div211" style={div5Style}>
                {prop}
              </div>
              <div className="wrapper25">
                <div className="div212" style={div6Style}>
                  {prop1}
                </div>
              </div>
              <div className="eur-wrapper22">
                <b className="eur30">EUR</b>
              </div>
            </div>
          </div>
          <img className="image-icon43" alt="" src={image} />
        </div>
      </div>
    </div>
  );
};

Item17.propTypes = {
  className: PropTypes.string,
  esimAntiguaAndBarbuda300x: PropTypes.string,
  heading2AntiguaAndBarbuda: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  image: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Item17;
