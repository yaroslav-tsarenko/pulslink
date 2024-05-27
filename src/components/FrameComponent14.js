import { useMemo } from "react";
import "./FrameComponent14.css";

const FrameComponent14 = ({
  className = "",
  haveYouAskedYourselfDoesH,
  weHaveTheAnswerHereWithAl,
  youNeedToAvoidAnySurprise,
  propAlignSelf,
  propDebugCommit,
  propWidth,
  propMinWidth,
  propAlignSelf1,
}) => {
  const frameDiv16Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      debugCommit: propDebugCommit,
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propDebugCommit, propWidth, propMinWidth]);

  const haveYouAskedContainerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div
      className={`have-you-asked-yourself-does-parent ${className}`}
      style={frameDiv16Style}
    >
      <p
        className="have-you-asked-container"
        style={haveYouAskedContainerStyle}
      >
        <span className="have-you-asked">{haveYouAskedYourselfDoesH}</span>
        <span className="we-have-the">{weHaveTheAnswerHereWithAl}</span>
        <span className="you-need-to">{youNeedToAvoidAnySurprise}</span>
      </p>
      <button className="button37">
        <a className="link-read24">Read more</a>
      </button>
    </div>
  );
};


export default FrameComponent14;
