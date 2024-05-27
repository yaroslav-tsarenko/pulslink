import { Button } from "@mui/material";
import "./Travel.css";

const Travel = ({ className = "" }) => {
  return (
    <section className={`travel ${className}`}>
      <div className="travel-content">
        <div className="background39">
          <h3 className="travel-the-world">
            Ditch the Drama, Embrace the eSIM: PulseLinkPlus
          </h3>
          <div className="fumbling">
            <div className="fumbling-content">
              <p className="gone-are-the-container">
                <span>
                  <span className="gone-are-the">
                    Gone are the days of fumbling with tiny SIM cards and
                    worrying about lost connections while traveling.
                    PulseLinkPlus revolutionizes mobile connectivity, offering a
                    sleek and effortless way to manage eSIMs for all your
                    devices.
                  </span>
                  <span className="blank-line">&nbsp;</span>
                </span>
              </p>
              <div className="benefits">
                <div className="benefit-list">
                  <button className="backgroundborder3">
                    <img className="image-icon10" alt="" src="/image-9.svg" />
                    <div className="benefit-headings1">
                      <div className="heading-37">Zero plastic</div>
                    </div>
                  </button>
                  <button className="backgroundborder4">
                    <img className="image-icon11" alt="" src="/image-10.svg" />
                    <div className="heading-3-zero-hassle-wrapper">
                      <div className="heading-38">Zero hassle</div>
                    </div>
                  </button>
                  <button className="backgroundborder5">
                    <img className="image-icon12" alt="" src="/image-11.svg" />
                    <div className="heading-3-zero-transport-wrapper">
                      <div className="heading-39">Zero transport</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buy-esim-button">
          <Button
            className="link42"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#292b2e",
              fontSize: "16",
              background: "#ffa51f",
              borderRadius: "12px",
              "&:hover": { background: "#ffa51f" },
              width: 392,
              height: 40,
            }}
          >
            Buy your eSIM
          </Button>
        </div>
      </div>
    </section>
  );
};

Travel.propTypes = {
  className: PropTypes.string,
};

export default Travel;
