import "./HeroContent.css";

const HeroContent = ({ className = "" }) => {
  return (
    <section className={`hero-content ${className}`}>
      <div className="section2">
        <img
          className="pngwing-1-icon"
          loading="lazy"
          alt=""
          src="/pngwing-1@2x.png"
        />
        <div className="background30">
          <div className="review-heading">4.6</div>
          <div className="review-subheading">
            <div className="div13">/5</div>
          </div>
          <div className="star-trustpilotsvg-wrapper">
            <img
              className="star-trustpilotsvg-icon"
              alt=""
              src="/startrustpilotsvg.svg"
            />
          </div>
          <div className="trustpilot-source-wrapper">
            <div className="trustpilot-source">
              <div className="based-on-37000-container">
                <p className="based-on-37000">Based on 37000+  </p>
                <p className="customer-reviews-on">customer reviews on</p>
              </div>
              <u className="trustpilot">Trustpilot</u>
            </div>
          </div>
        </div>
        <div className="e-sim-content-wrapper">
          <div className="e-sim-content">
            <div className="heading-1">International eSIM</div>
            <h1 className="manage-esims-for">
              Manage eSIMs for any device with PulseLinkPlus
            </h1>
            <p className="with-pulselinkpluss-esim">
              PulseLinkPlus is a revolutionary eSIM website that allows you to
              easily manage your eSIMs for all your connected devices.
            </p>
            <div className="form">
              <div className="location-input-wrapper">
                <div className="location-input">
                  <div className="locationsvg-parent">
                    <img
                      className="locationsvg-icon"
                      alt=""
                      src="/locationsvg.svg"
                    />
                    <div className="vertical-divider1" />
                  </div>
                  <input
                    className="location-placeholder"
                    placeholder="Where do you need internet?"
                    type="text"
                  />
                </div>
              </div>
              <div className="button-search">
                <img
                  className="searchpng-icon"
                  alt=""
                  src="/searchpng@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default HeroContent;
