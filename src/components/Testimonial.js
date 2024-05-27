import "./Testimonial.css";

const Testimonial = ({ className = "" }) => {
  return (
    <section className={`testimonial ${className}`}>
      <div className="testimonial-content">
        <div className="frame-parent12">
          <div className="pulselinkplus-is-the-most-reco-wrapper">
            <h1 className="pulselinkplus-is-the-container">
              <span className="pulselinkplus-is-the-container1">
                <p className="pulselinkplus-is-the">
                  PulseLinkPlus is the most recommended
                </p>
                <p className="international-esim-check">
                  International eSIM: check yourself.
                </p>
              </span>
            </h1>
          </div>
          <div className="quote-parent">
            <div className="quote">
              <img
                className="quote-symbolsvg-icon"
                alt=""
                src="/quotesymbolsvg.svg"
              />
              <p className="dont-stress-about">
                {" "}
                I travel constantly for work and used to struggle with managing
                different SIM cards for each country. With PulseLinkPlus, I can
                download eSIM profiles for all my destinations in advance and
                switch between them effortlessly. It's saved me so much time and
                frustration. Plus, the platform is super user-friendly - even a
                tech dummy like me can handle it!
              </p>
              <div className="author">
                <div className="author-info1">
                  <div className="karen-christensen">Karen Christensen</div>
                  <div className="verification">
                    <img
                      className="verifiedsvg-icon"
                      alt=""
                      src="/verifiedsvg.svg"
                    />
                    <div className="verified-buyer">Verified buyer</div>
                  </div>
                </div>
                <div className="testimonial-navigation">
                  <div className="navigation">
                    <div className="previous">
                      <h2 className="h2">‹</h2>
                    </div>
                    <div className="next">
                      <h2 className="h21">›</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="peoplewebp-icon"
              loading="lazy"
              alt=""
              src="/peoplewebp@2x.png"
            />
          </div>
        </div>
        <div className="review">
          <div className="review-content1">
            <div className="review-details-parent">
              <div className="review-details">
                <div className="stars">
                  <div className="div14">4.6</div>
                  <div className="rating">
                    <div className="based">/5</div>
                  </div>
                  <div className="star-icon">
                    <img
                      className="star-trustpilotsvg-icon1"
                      alt=""
                      src="/startrustpilotsvg.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="trust-pilot-info">
                <p className="based-on-37000-container1">
                  <span className="based-on-370001">Based on 37000+  </span>
                  <span className="customer-reviews-on1">{`customer reviews on `}</span>
                </p>
                <div className="platform">
                  <u className="trustpilot1">Trustpilot</u>
                </div>
              </div>
            </div>
            <div className="traveler-count">
              <div className="m-parent">
                <div className="m">+1M</div>
                <div className="traveler-info">
                  <div className="travelers-who-trust-container">
                    <p className="travelers-who">Travelers who</p>
                    <p className="trust-us-worldwide">trust us worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = {
  className: PropTypes.string,
};

export default Testimonial;
