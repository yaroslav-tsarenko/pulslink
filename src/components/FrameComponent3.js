import { Button } from "@mui/material";
import LinkUSA from "./LinkUSA";
import LinkEgypt from "./LinkEgypt";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`destinations-content-wrapper ${className}`}>
      <div className="destinations-content">
        <div className="destinations-content-inner">
          <div className="destinations-title-parent">
            <div className="destinations-title">
              <div className="destinations-heading">
                <h1 className="heading-25">
                  SIMply Say Goodbye! PulseLinkPlus - Your eSIM Superhero
                </h1>
                <div className="destinations-description">
                  <div className="choose-your-destination">
                    Choose your destination first, then a data plan according to
                    your needs.
                  </div>
                </div>
              </div>
            </div>
            <div className="destination-links">
              <LinkUSA
                unitedStatespng="/unitedstatespng@2x.png"
                uSA="USA"
                from600="From €6,00"
              />
              <LinkUSA
                unitedStatespng="/europepng@2x.png"
                uSA="Europe"
                from600="From €6,00"
                propMinWidth="71.2px"
                propMargin="unset"
                propMinWidth1="105.8px"
              />
              <LinkUSA
                unitedStatespng="/mexicopng@2x.png"
                uSA="Mexico"
                from600="From €19,00"
                propMinWidth="72.9px"
                propMargin="0"
                propMinWidth1="113px"
              />
              <div className="link-japan">
                <img className="image-icon8" alt="" src="/image.svg" />
                <div className="esim3">eSIM</div>
                <div className="wrapper-japanpng-parent">
                  <div className="wrapper-japanpng">
                    <img
                      className="japanpng-icon"
                      alt=""
                      src="/japanpng@2x.png"
                    />
                  </div>
                  <div className="frame-wrapper6">
                    <div className="japan-parent">
                      <div className="japan">Japan</div>
                      <div className="from-600-parent">
                        <div className="from-6001">From €6,00</div>
                        <div className="eur-wrapper">
                          <b className="eur2"> EUR</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <LinkUSA
                unitedStatespng="/turkeypng@2x.png"
                uSA="Turkey"
                from600="From €6,00"
                propMinWidth="67.3px"
                propMargin="0"
                propMinWidth1="105.8px"
              />
              <LinkEgypt
                egyptpng="/egyptpng@2x.png"
                egypt="Egypt"
                from2700="From €27,00"
              />
              <div className="link-thailand">
                <div className="wrapper-thailandpng-wrapper">
                  <div className="wrapper-thailandpng">
                    <img
                      className="thailandpng-icon"
                      alt=""
                      src="/thailandpng@2x.png"
                    />
                  </div>
                </div>
                <div className="esim-group">
                  <div className="esim4">eSIM</div>
                  <div className="thailand">Thailand</div>
                  <div className="frame-parent11">
                    <div className="from-600-group">
                      <div className="from-6002">From €6,00</div>
                      <div className="eur-container">
                        <b className="eur3"> EUR</b>
                      </div>
                    </div>
                    <div className="image-frame">
                      <img className="image-icon9" alt="" src="/image.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <LinkEgypt
                egyptpng="/unitedkingdompng@2x.png"
                egypt="United Kingdom"
                from2700="From €6,00"
                propDisplay="unset"
                propMinWidth="unset"
                propMinWidth1="105.8px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
              <LinkEgypt
                egyptpng="/switzerlandpng@2x.png"
                egypt="Switzerland"
                from2700="From €6,00"
                propDisplay="inline-block"
                propMinWidth="116.3px"
                propMinWidth1="105.8px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
            </div>
            <div className="destinations-button">
              <Button
                className="link37"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#292b2e",
                  fontSize: "16",
                  background: "#ffa51f",
                  borderRadius: "12px",
                  "&:hover": { background: "#ffa51f" },
                  width: 368.6,
                  height: 40,
                }}
              >
                View all destinations
              </Button>
            </div>
          </div>
        </div>
        <div className="section-figure">
          <img
            className="pngwing-2-icon1"
            loading="lazy"
            alt=""
            src="/pngwing-2@2x.png"
          />
          <h3 className="heading-4">Unleash the Power of eSIM</h3>
          <div className="plan-change-caption">
            <div className="figcaption">
              <Button
                className="link38"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#292b2e",
                  borderRadius: "12px",
                  "&:hover": { background: "#292b2e" },
                  width: 280,
                  height: 42.4,
                }}
              >
                Learn More
              </Button>
            </div>
            <p className="purchase-your-pulselinkplus">{`Tired of juggling multiple SIM cards and dealing with the hassle of switching them between devices? PulseLinkPlus is your game-changer. Our user-friendly platform empowers you to manage eSIMs for all your connected devices with ease. `}</p>
          </div>
        </div>
      </div>
    </section>
  );
};



export default FrameComponent3;
