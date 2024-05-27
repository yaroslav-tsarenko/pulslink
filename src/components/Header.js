import { Button } from "@mui/material";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="group-div">
        <div className="frame-parent10">
          <div className="holafly-logosvg-wrapper">
            <div className="holafly-logosvg">
              <div className="image-8-layerstyle-parent">
                <img
                  className="image-8-layerstyle-icon"
                  alt=""
                  src="/image-8-layerstyle.svg"
                />
                <div className="pulselink-wrapper">
                  <img className="pulselink-icon" alt="" src="/pulselink.svg" />
                </div>
              </div>
            </div>
          </div>
          <nav className="nav-list">
            <a className="item-link7">Destinations</a>
            <a className="item-link8">About us</a>
            <a className="item-link9">FAQs</a>
            <a className="item-link10">Reviews</a>
            <a className="item-link11">Contact us</a>
          </nav>
        </div>
        <div className="link-container">
          <Button
            className="link36"
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
        <div className="frame-wrapper5">
          <div className="button-parent">
            <div className="button">
              <img className="languagesvg-icon" alt="" src="/languagesvg.svg" />
              <a className="en-eur">  EN - EUR (€)</a>
            </div>
            <div className="vertical-divider-wrapper">
              <div className="vertical-divider" />
            </div>
            <img className="button-icon" alt="" src="/button.svg" />
            <div className="button1">
              <img
                className="carritooksvg-icon"
                alt=""
                src="/carritooksvg.svg"
              />
              <div className="background29">
                <a className="cart-background-layer">0</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};



export default Header;
