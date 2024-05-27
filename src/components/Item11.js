import { useMemo } from "react";
import "./Item11.css";

const Item11 = ({
  className = "",
  esimInternetBosniaAndHerz,
  bosniaAnd,
  herzegovina,
  prop,
  prop1,
  propDebugCommit,
  propMinWidth,
}) => {
  const item9Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const div15Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`item59 ${className}`} style={item9Style}>
      <img
        className="esim-internet-bosnia-and-herze-icon"
        alt=""
        src={esimInternetBosniaAndHerz}
      />
      <div className="frame-parent81">
        <div className="bosnia-and-herzegovina-wrapper">
          <div className="bosnia-and-herzegovina-container">
            <p className="bosnia-and">{bosniaAnd}</p>
            <p className="herzegovina">{herzegovina}</p>
          </div>
        </div>
        <div className="frame-parent82">
          <div className="frame-wrapper45">
            <div className="parent33">
              <div className="div223" style={div15Style}>
                {prop}
              </div>
              <div className="wrapper31">
                <div className="div224">{prop1}</div>
              </div>
              <div className="eur-wrapper27">
                <b className="eur36">EUR</b>
              </div>
            </div>
          </div>
          <img className="image-icon49" alt="" src="/image2.svg" />
        </div>
      </div>
    </div>
  );
};

Item11.propTypes = {
  className: PropTypes.string,
  esimInternetBosniaAndHerz: PropTypes.string,
  bosniaAnd: PropTypes.string,
  herzegovina: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Item11;
