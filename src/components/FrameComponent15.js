import { useMemo } from "react";
import "./FrameComponent15.css";

const FrameComponent15 = ({
  className = "",
  linkUseCellPhoneTurkey768,
  useCellPhoneInTurkeyHowTo,
  it,
  planningOnTravelingToTurk,
  yourCellPhoneThereHereWeH,
  informationYouNeedTo,
  linkBestPocketWifiUk768x3,
  bestPocketWifiForTheUKHow,
  muchDoesItCost,
  ifYouAreTravelingAnyTimeS,
  wantToTakeAPocketWiFiUKWi,
  learnEverythingRelatedTo,
  propAlignSelf,
  propFlex,
  propWidth,
  propAlignSelf1,
}) => {
  const frameDiv13Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const frameDiv14Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const useCellPhoneContainerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv15Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div className={`frame-parent77 ${className}`}>
      <div className="link-use-cell-phone-turkey-7-parent">
        <img
          className="link-use-cell-phone-turkey-7"
          loading="lazy"
          alt=""
          src={linkUseCellPhoneTurkey768}
        />
        <div className="frame-wrapper36" style={frameDiv13Style}>
          <div
            className="use-cell-phone-in-turkey-how-parent"
            style={frameDiv14Style}
          >
            <h3
              className="use-cell-phone-container1"
              style={useCellPhoneContainerStyle}
            >
              <span className="use-cell-phone-container2">
                <p className="use-cell-phone1">{useCellPhoneInTurkeyHowTo}</p>
                <p className="it1">{it}</p>
              </span>
            </h3>
            <div className="by-julio-osuna-parent2" style={frameDiv15Style}>
              <div className="by-julio-osuna6">By Julio Osuna</div>
              <p className="planning-on-traveling-container">
                <span className="planning-on-traveling">
                  {planningOnTravelingToTurk}
                </span>
                <span className="your-cell-phone">
                  {yourCellPhoneThereHereWeH}
                </span>
                <span className="information-you-need">
                  {informationYouNeedTo}
                </span>
              </p>
            </div>
            <button className="button35">
              <a className="link-read22">Read more</a>
            </button>
          </div>
        </div>
      </div>
      <div className="link-best-pocket-wifi-uk-768-parent">
        <img
          className="link-best-pocket-wifi-uk-768"
          loading="lazy"
          alt=""
          src={linkBestPocketWifiUk768x3}
        />
        <div className="frame-wrapper37">
          <div className="best-pocket-wifi-for-the-uk-h-parent">
            <h3 className="best-pocket-wifi-container1">
              <p className="best-pocket-wifi1">{bestPocketWifiForTheUKHow}</p>
              <p className="much-does-it1">{muchDoesItCost}</p>
            </h3>
            <div className="by-julio-osuna-parent3">
              <div className="by-julio-osuna7">By Julio Osuna</div>
              <p className="if-you-are-container1">
                <span className="if-you-are1">{ifYouAreTravelingAnyTimeS}</span>
                <span className="want-to-take">
                  {wantToTakeAPocketWiFiUKWi}
                </span>
                <span className="learn-everything-related">
                  {learnEverythingRelatedTo}
                </span>
              </p>
            </div>
            <button className="button36">
              <a className="link-read23">Read more</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default FrameComponent15;
