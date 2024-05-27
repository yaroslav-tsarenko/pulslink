import { useMemo } from "react";
import "./LinkUSA.css";

const LinkUSA = ({
  className = "",
  unitedStatespng,
  uSA,
  from600,
  propMinWidth,
  propMargin,
  propMinWidth1,
}) => {
  const uSAStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      margin: propMargin,
    };
  }, [propMinWidth, propMargin]);

  const from600Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={`link-usa ${className}`}>
      <img className="image-icon6" alt="" src="/image.svg" />
      <div className="esim1">eSIM</div>
      <div className="country">
        <div className="wrapper-united-statespng">
          <img className="united-statespng-icon" alt="" src={unitedStatespng} />
        </div>
        <div className="destination-card">
          <div className="information">
            <div className="usa1" style={uSAStyle}>
              {uSA}
            </div>
            <div className="pricing-details">
              <div className="from-600" style={from600Style}>
                {from600}
              </div>
              <div className="price-symbol">
                <b className="eur"> EUR</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LinkUSA.propTypes = {
  className: PropTypes.string,
  unitedStatespng: PropTypes.string,
  uSA: PropTypes.string,
  from600: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMargin: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default LinkUSA;
