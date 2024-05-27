import { Button } from "@mui/material";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`background-wrapper ${className}`}>
      <div className="background38">
        <div className="container52">
          <img
            className="dotlottie-player-img-lotti"
            loading="lazy"
            alt=""
            src="/dotlottieplayer--img--lottie-animation--svg@2x.png"
          />
          <div className="connection-details-wrapper">
            <div className="connection-details">
              <div className="connection-description">
                <p className="get-online-right-container">
                  <span className="get-online-right">
                    Get online right after landing. Start using your data
                  </span>
                  <span className="plan-as-soon">
                    plan as soon as you arrive at your destination
                  </span>
                </p>
                <p className="your-phone-will-container">
                  <span className="your-phone-will-container1">
                    <span className="your-phone-will">
                      Your phone will automatically connect to the internet
                      network upon
                    </span>
                    <span className="arrival">arrival.</span>
                  </span>
                </p>
              </div>
              <Button
                className="link40"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#292b2e",
                  fontSize: "16",
                  background: "#ffa51f",
                  borderRadius: "12px",
                  "&:hover": { background: "#ffa51f" },
                  width: 240,
                  height: 46,
                }}
              >
                View all destinations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default FrameComponent1;
