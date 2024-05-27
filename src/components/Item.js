import { useMemo } from "react";
import "./Item.css";

const Item = ({
  className = "",
  esimStKittsAndNevis300x35,
  heading2StKittsAndNevis,
  prop,
  prop1,
  image,
  propHeight,
  propAlignSelf,
  propDebugCommit,
  propDisplay,
  propMinWidth,
  propHeight1,
  propGap,
  propMinWidth1,
  propMinWidth2,
}) => {
  const item13Style = useMemo(() => {
    return {
      height: propHeight,
      alignSelf: propAlignSelf,
      debugCommit: propDebugCommit,
    };
  }, [propHeight, propAlignSelf, propDebugCommit]);

  const heading219Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const frameDiv7Style = useMemo(() => {
    return {
      height: propHeight1,
      gap: propGap,
    };
  }, [propHeight1, propGap]);

  const div34Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div35Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`item70 ${className}`} style={item13Style}>
      <div className="esim-st-kitts-and-nevis-300x35-parent">
        <img
          className="esim-st-kitts-and-nevis-300x35-icon"
          alt=""
          src={esimStKittsAndNevis300x35}
        />
        <div className="heading-2-st-kitts-and-nevi-wrapper">
          <div className="heading-277" style={heading219Style}>
            {heading2StKittsAndNevis}
          </div>
        </div>
      </div>
      <div className="frame-parent98" style={frameDiv7Style}>
        <div className="frame-wrapper59">
          <div className="parent44">
            <div className="div245" style={div34Style}>
              {prop}
            </div>
            <div className="wrapper42">
              <div className="div246" style={div35Style}>
                {prop1}
              </div>
            </div>
            <div className="eur-wrapper35">
              <b className="eur47">EUR</b>
            </div>
          </div>
        </div>
        <img className="image-icon60" alt="" src={image} />
      </div>
    </div>
  );
};



export default Item;
