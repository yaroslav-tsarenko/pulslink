import { useMemo } from "react";
import "./Item1.css";

const Item1 = ({
  className = "",
  esimPanama300x365jpg,
  heading2Panama,
  prop,
  prop1,
  image,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const heading218Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div32Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div33Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`item69 ${className}`}>
      <img
        className="esim-panama-300x365jpg-icon"
        alt=""
        src={esimPanama300x365jpg}
      />
      <div className="heading-2-panama-wrapper">
        <div className="heading-276" style={heading218Style}>
          {heading2Panama}
        </div>
      </div>
      <div className="frame-parent97">
        <div className="frame-wrapper58">
          <div className="parent43">
            <div className="div243" style={div32Style}>
              {prop}
            </div>
            <div className="wrapper41">
              <div className="div244" style={div33Style}>
                {prop1}
              </div>
            </div>
            <div className="eur-wrapper34">
              <b className="eur46">EUR</b>
            </div>
          </div>
        </div>
        <img className="image-icon59" alt="" src={image} />
      </div>
    </div>
  );
};



export default Item1;
