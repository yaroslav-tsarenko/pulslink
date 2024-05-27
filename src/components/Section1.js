import "./Section1.css";

const Section1 = ({ className = "" }) => {
  return (
    <section className={`section4 ${className}`}>
      <div className="connecting-content-wrapper">
        <div className="connecting-content">
          <h3 className="heading-27">
            Connecting you with the world on every trip.
          </h3>
          <p className="during-a-trip-container">
            <span className="during-a-trip">
              During a trip to Thailand, Pedro and Lidia, the founders of
              PulseLinkPlus, experienced the frustration of not having an
              internet
            </span>
            <span className="connection-inspired-by">
              connection. Inspired by their own experiences, they came up with a
              simple but brilliant idea: why not allow travellers to buy data
            </span>
            <span className="plans-for-any">
              plans for any destination from their home country?
            </span>
          </p>
        </div>
      </div>
      <div className="container54">
        <div className="horizontal-divider1" />
      </div>
      <div className="story-content-parent">
        <div className="story-content">
          <div className="background-container">
            <div className="background42">
              <div className="border29">
                <div className="group">
                  <div className="div15">2017</div>
                  <div className="heading-310">Where it all started</div>
                  <p className="we-were-born-container">
                    <span className="we-were-born">
                      We were born in 2017 out of our own travel experiences. We
                      recognised the
                    </span>
                    <span className="critical-need-to">
                      critical need to stay connected while travelling, and set
                      out to provide solutions
                    </span>
                    <span className="for-travellers-around">
                      for travellers around the world.
                    </span>
                  </p>
                </div>
                <div className="background43" />
                <div className="backgroundborder-wrapper">
                  <div className="backgroundborder6" />
                </div>
              </div>
            </div>
          </div>
          <div className="previous1">
            <h2 className="h22">‹</h2>
          </div>
        </div>
        <div className="background44">
          <div className="border30">
            <div className="revolutionizing-placeholder">2018</div>
            <div className="heading-311">Revolutionizing the industry</div>
            <p className="we-had-the-container">
              <span className="we-had-the">
                We had the opportunity to join the Lanzadera Acceleration
                Programme. This gave
              </span>
              <span className="us-the-boost">
                us the boost we needed to make our project a success. In the
                summer of 2018,
              </span>
              <span className="we-launched-our">
                we launched our eSIM technology. We revolutionised the way
                people stay
              </span>
              <span className="connected-when-they">
                connected when they travel.
              </span>
            </p>
            <div className="background45" />
            <div className="revolutionizing-background-bor">
              <div className="backgroundborder7" />
            </div>
          </div>
        </div>
        <div className="background-parent1">
          <div className="background46">
            <div className="border31">
              <div className="global-content">
                <div className="div16">2019 – 2021</div>
                <div className="heading-312">Building a global team</div>
                <p className="we-ventured-into-container">
                  <span className="we-ventured-into">
                    We ventured into France and Germany and opened offices in
                    Valencia and
                  </span>
                  <span className="medellin-this-expansion">
                    Medellin. This expansion has strengthened our international
                    presence and our
                  </span>
                  <span className="ability-to-provide">
                    ability to provide exceptional customer service in every
                    country.
                  </span>
                </p>
              </div>
              <div className="background47" />
              <div className="global-background-border">
                <div className="backgroundborder8" />
              </div>
            </div>
          </div>
          <div className="next-wrapper">
            <div className="next1">
              <h2 className="h23">›</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Section1.propTypes = {
  className: PropTypes.string,
};

export default Section1;
