import { useMemo } from "react";
import "./Background.css";

const Background = ({
  className = "",
  itemLinkBlogHref,
  itemLinkBlogTarget,
  propPadding,
  propTextDecoration,
}) => {
  const brandNameStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const itemLinkStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <footer className={`background40 ${className}`}>
      <div className="footer">
        <div className="footer-container">
          <div className="container53">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="holafly-logosvg1">
                  <div className="image-8-layerstyle-group">
                    <img
                      className="image-8-layerstyle-icon1"
                      alt=""
                      src="/image-8-layerstyle-1.svg"
                    />
                    <div className="brand-name" style={brandNameStyle}>
                      <img
                        className="pulselink-icon1"
                        alt=""
                        src="/pulselink-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="footer-social">
                  <div className="social-links">
                    <div className="social-icons">
                      <img
                        className="link-facebooksvg"
                        loading="lazy"
                        alt=""
                        src="/link--facebooksvg.svg"
                      />
                    </div>
                    <img
                      className="link-instagramsvg"
                      loading="lazy"
                      alt=""
                      src="/link--instagramsvg.svg"
                    />
                    <div className="platform-icon">
                      <img
                        className="link-youtubesvg"
                        loading="lazy"
                        alt=""
                        src="/link--youtubesvg.svg"
                      />
                    </div>
                    <div className="social-icons1">
                      <img
                        className="link-linkedinsvg"
                        loading="lazy"
                        alt=""
                        src="/link--linkedinsvg.svg"
                      />
                    </div>
                    <div className="platform-icon1">
                      <img
                        className="link-twittersvg"
                        loading="lazy"
                        alt=""
                        src="/link--twittersvg.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-navigation">
              <div className="nav">
                <div className="top-destinations">Top destinations</div>
                <div className="list">
                  <div className="item-link12">Europe</div>
                  <a
                    className="item-link13"
                    href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-5178"
                    target="_blank"
                  >
                    USA
                  </a>
                  <div className="item-link14">Japan</div>
                  <div className="item-link15">Turkey</div>
                  <a className="item-link16" style={itemLinkStyle}>
                    Spain
                  </a>
                  <div className="item-link17">France</div>
                </div>
              </div>
              <div className="nav1">
                <div className="legal">Legal</div>
                <div className="list1">
                  <a className="item-link18">Terms and Conditions</a>
                  <a className="item-link19">Privacy Policy</a>
                  <a
                    className="item-link20"
                    href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-17636"
                    target="_blank"
                  >
                    Cookies Policy
                  </a>
                  <a
                    className="item-link21"
                    href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-15881"
                    target="_blank"
                  >
                    Refund Policy
                  </a>
                  <a
                    className="item-link22"
                    href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-18245"
                    target="_blank"
                  >
                    Website Terms of Use
                  </a>
                </div>
              </div>
              <div className="nav2">
                <div className="interest">Interest</div>
                <div className="list2">
                  <a
                    className="item-link23"
                    href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-18642"
                    target="_blank"
                  >
                    What is an eSIM
                  </a>
                  <a
                    className="item-link24"
                    href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-12422"
                    target="_blank"
                  >
                    eSIM compatible devices
                  </a>
                  <a
                    className="item-link25"
                    href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-19648"
                    target="_blank"
                  >
                    How to install and activate your eSIM
                  </a>
                  <a
                    className="item-link26"
                    href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-2146"
                    target="_blank"
                  >
                    FAQs
                  </a>
                  <a className="item-link27">Blog</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="horizontalborder4">
          <div className="made-with-wrapper">
            <div className="made-with">{`Made with `}</div>
          </div>
          <img
            className="lovesvg-icon"
            loading="lazy"
            alt=""
            src="/lovesvg.svg"
          />
          <div className="by-people-who-love-to-travel-wrapper">
            <div className="by-people-who"> by people who love to travel.</div>
          </div>
          <div className="pulselinkplus-2024">PulseLinkPlus 2024 ®</div>
        </div>
      </div>
    </footer>
  );
};


export default Background;
