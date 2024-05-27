import { Button } from "@mui/material";
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  return (
    <header className={`header2 ${className}`}>
      <div className="frame-parent16">
        <div className="frame-parent17">
          <div className="holafly-logosvg-frame">
            <div className="holafly-logosvg4">
              <div className="image-8-layerstyle-parent2">
                <img
                  className="image-8-layerstyle-icon4"
                  loading="lazy"
                  alt=""
                  src="/image-8-layerstyle.svg"
                />
                <div className="pulselink-frame">
                  <img
                    className="pulselink-icon4"
                    loading="lazy"
                    alt=""
                    src="/pulselink.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <nav className="nav-list2">
            <a className="item-link49">Destinations</a>
            <a className="item-link50">About us</a>
            <a className="item-link51">FAQs</a>
            <a className="item-link52">Reviews</a>
            <a className="item-link53">Contact us</a>
          </nav>
        </div>
        <div className="link-wrapper1">
          <Button
            className="link45"
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
        <div className="frame-wrapper9">
          <div className="button-group">
            <div className="button4">
              <img
                className="languagesvg-icon2"
                alt=""
                src="/languagesvg.svg"
              />
              <a className="en-eur2">  EN - EUR (€)</a>
            </div>
            <div className="vertical-divider-frame">
              <div className="vertical-divider5" />
            </div>
            <img
              className="button-icon4"
              loading="lazy"
              alt=""
              src="/button.svg"
            />
            <div className="button5">
              <img
                className="carritooksvg-icon2"
                alt=""
                src="/carritooksvg.svg"
              />
              <div className="background51">
                <a className="cart-fill">0</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header1;
