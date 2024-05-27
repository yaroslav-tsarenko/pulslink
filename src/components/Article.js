import { useMemo } from "react";
import "./Article.css";

const Article = ({
  className = "",
  linkBestEsimSaintPetersbu,
  bestESIMForSaintPetersbur,
  oneToBuy,
  weComparedTheBestESIMOffe,
  flexiroamAndHolaflyToStay,
  mobileInYourTravelToSaint,
  propWidth,
  propAlignSelf,
}) => {
  const frameDiv6Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div className={`article1 ${className}`}>
      <img
        className="link-best-esim-saint-petersb"
        loading="lazy"
        alt=""
        src={linkBestEsimSaintPetersbu}
      />
      <div className="article-inner" style={frameDiv6Style}>
        <div className="frame-parent65">
          <div className="frame-parent66">
            <div className="frame-parent67">
              <div className="c2fac105bb224b98509031dcfbec7e-wrapper">
                <img
                  className="c2fac105bb224b98509031dcfbec7e-icon"
                  alt=""
                  src="/23c2fac105bb224b98509031dcfbec7e@2x.png"
                />
              </div>
              <div className="frame-parent68">
                <div className="leoneska-ruiz-wrapper">
                  <div className="leoneska-ruiz">Leoneska Ruiz</div>
                </div>
                <img className="image-icon5" alt="" src="/image-1@2x.png" />
              </div>
            </div>
            <div className="best-esim-for-saint-petersburg-parent">
              <div className="best-esim-for-container">
                <p className="best-esim-for">{bestESIMForSaintPetersbur}</p>
                <p className="one-to-buy">{oneToBuy}</p>
              </div>
              <p className="we-compared-the-container">
                <span className="we-compared-the">
                  {weComparedTheBestESIMOffe}
                </span>
                <span className="flexiroam-and-holafly">
                  {flexiroamAndHolaflyToStay}
                </span>
                <span className="mobile-in-your">
                  {mobileInYourTravelToSaint}
                </span>
              </p>
            </div>
          </div>
          <div className="footer-november-2023-wrapper">
            <div className="footer-november">November 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Article;
