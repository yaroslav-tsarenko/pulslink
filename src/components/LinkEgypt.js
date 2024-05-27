import { useMemo } from "react";
import "./LinkEgypt.css";

const LinkEgypt = ({
  className = "",
  egyptpng,
  egypt,
  from2700,
  propDisplay,
  propMinWidth,
  propMinWidth1,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const egyptStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const from2700Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      debugCommit: propDebugCommit,
    };
  }, [propMinWidth1, propDebugCommit]);

  const eURStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={`link-egypt ${className}`}>
      <div className="wrapper-egyptpng-wrapper">
        <div className="wrapper-egyptpng">
          <img className="egyptpng-icon" alt="" src={egyptpng} />
        </div>
      </div>
      <div className="esim-parent">
        <div className="esim2">eSIM</div>
        <h3 className="egypt" style={egyptStyle}>
          {egypt}
        </h3>
        <div className="pricing">
          <div className="cost">
            <div className="from-2700" style={from2700Style}>
              {from2700}
            </div>
            <div className="currency">
              <b className="eur1" style={eURStyle}>
                {" "}
                EUR
              </b>
            </div>
          </div>
          <div className="flag-icon">
            <img className="image-icon7" alt="" src="/image.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

LinkEgypt.propTypes = {
  className: PropTypes.string,
  egyptpng: PropTypes.string,
  egypt: PropTypes.string,
  from2700: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
};

export default LinkEgypt;
