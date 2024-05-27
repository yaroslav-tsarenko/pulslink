import { useMemo } from "react";
import "./Border.css";

const Border = ({
  className = "",
  support24HoursEsimsvg,
  heading3WeHelpYouWherever,
  weBelieveThatProvidingExc,
  serviceIsAsImportantAsOff,
  ourSupportTeamIsAvailable,
  yourTripWithoutStress,
  propWidth,
}) => {
  const heading31Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`border32 ${className}`}>
      <img
        className="support-24-hours-esimsvg-icon"
        loading="lazy"
        alt=""
        src={support24HoursEsimsvg}
      />
      <h3 className="heading-313" style={heading31Style}>
        {heading3WeHelpYouWherever}
      </h3>
      <p className="we-believe-that-container">
        <span className="we-believe-that">{weBelieveThatProvidingExc}</span>
        <span className="service-is-as">{serviceIsAsImportantAsOff}</span>
        <span className="our-support-team">{ourSupportTeamIsAvailable}</span>
        <span className="your-trip-without">{yourTripWithoutStress}</span>
      </p>
    </div>
  );
};


export default Border;
