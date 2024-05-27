import { Button } from "@mui/material";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section className={`header-wrapper ${className}`}>
      <header className="header1">
        <div className="frame-parent14">
          <div className="frame-parent15">
            <div className="holafly-logosvg-container">
              <div className="holafly-logosvg3">
                <div className="image-8-layerstyle-parent1">
                  <img
                    className="image-8-layerstyle-icon3"
                    loading="lazy"
                    alt=""
                    src="/image-8-layerstyle.svg"
                  />
                  <div className="pulselink-container">
                    <img
                      className="pulselink-icon3"
                      loading="lazy"
                      alt=""
                      src="/pulselink.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <nav className="nav-list1">
              <a className="item-link44">Destinations</a>
              <a className="item-link45">About us</a>
              <a className="item-link46">FAQs</a>
              <a className="item-link47">Reviews</a>
              <a className="item-link48">Contact us</a>
            </nav>
          </div>
          <div className="link-frame">
            <Button
              className="link43"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#292b2e",
                fontSize: "14",
                background: "#fff",
                border: "#e4e6ea solid 1px",
                borderRadius: "12px",
                "&:hover": { background: "#fff" },
                height: 40,
              }}
            >
              Login
            </Button>
          </div>
          <div className="cart-wrapper">
            <div className="cart">
              <div className="button2">
                <img
                  className="languagesvg-icon1"
                  loading="lazy"
                  alt=""
                  src="/languagesvg.svg"
                />
                <a className="en-eur1">  EN - EUR (€)</a>
              </div>
              <div className="vertical-divider-container">
                <div className="vertical-divider4" />
              </div>
              <img
                className="button-icon3"
                loading="lazy"
                alt=""
                src="/button.svg"
              />
              <div className="button3">
                <img
                  className="carritooksvg-icon1"
                  loading="lazy"
                  alt=""
                  src="/carritooksvg.svg"
                />
                <div className="background49">
                  <a className="a">0</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};



export default FrameComponent8;
