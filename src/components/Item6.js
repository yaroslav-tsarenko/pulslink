import { useMemo } from "react";
import "./Item6.css";

const Item6 = ({
  className = "",
  esiimIran300x365jpg,
  heading2Iran,
  prop,
  prop1,
  image,
  propWidth,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const item12Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const heading213Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div23Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div24Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`item64 ${className}`} style={item12Style}>
      <img
        className="esiim-iran-300x365jpg-icon"
        alt=""
        src={esiimIran300x365jpg}
      />
      <div className="heading-2-iran-wrapper">
        <div className="heading-271" style={heading213Style}>
          {heading2Iran}
        </div>
      </div>
      <div className="frame-parent92">
        <div className="frame-wrapper53">
          <div className="parent38">
            <div className="div233" style={div23Style}>
              {prop}
            </div>
            <div className="wrapper36">
              <div className="div234" style={div24Style}>
                {prop1}
              </div>
            </div>
            <div className="eur-wrapper29">
              <b className="eur41">EUR</b>
            </div>
          </div>
        </div>
        <img className="image-icon54" alt="" src={image} />
      </div>
    </div>
  );
};

Item6.propTypes = {
  className: PropTypes.string,
  esiimIran300x365jpg: PropTypes.string,
  heading2Iran: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  image: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Item6;
