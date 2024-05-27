import Border from "./Border";
import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ className = "" }) => {
  return (
    <section className={`section5 ${className}`}>
      <div className="heading-2-that-is-what-makes-wrapper">
        <h1 className="heading-28">That is what makes us unique</h1>
      </div>
      <div className="unique-content">
        <div className="paragraphbackgroundborder-wrapper">
          <div className="paragraphbackgroundborder">
            <h3 className="heading-314">We enjoy what we do</h3>
            <p className="our-passion-for-container">
              <span className="our-passion-for-container1">
                <span className="our-passion-for">
                  Our passion for providing peace of mind to travelers
                </span>
                <span className="around-the-world">
                  around the world drives everything we do. We love our
                </span>
                <span className="work-and-we">
                  work and we do it with pride.
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className="support-heading">
          <Border
            support24HoursEsimsvg="/support24hoursesimsvg.svg"
            heading3WeHelpYouWherever="We help you wherever you are"
            weBelieveThatProvidingExc="We believe that providing exceptional customer"
            serviceIsAsImportantAsOff="service is as important as offering quality products."
            ourSupportTeamIsAvailable="Our support team is available 24/7 so you can enjoy"
            yourTripWithoutStress="your trip without stress."
          />
          <Border
            support24HoursEsimsvg="/person-celebratesvg.svg"
            heading3WeHelpYouWherever="We give you peace of mind"
            weBelieveThatProvidingExc="Activation in just a few clicks, the best network in each"
            serviceIsAsImportantAsOff="country, unlimited data, management of your eSIM"
            ourSupportTeamIsAvailable="from the app… We do everything we can to make your"
            yourTripWithoutStress="internet connection easy and without surprises."
            propWidth="274.1px"
          />
        </div>
        <div className="planet-container">
          <div className="backgroundborder9">
            <img
              className="ecosvg-icon"
              loading="lazy"
              alt=""
              src="/ecosvg.svg"
            />
            <h3 className="heading-315">We care about our planet</h3>
            <div className="stain-container">
              <img
                className="stainsvg-icon"
                loading="lazy"
                alt=""
                src="/stainsvg.svg"
              />
              <p className="we-are-committed-container">
                <span className="we-are-committed">
                  We are committed to reducing our carbon footprint
                </span>
                <span className="and-implementing-sustainable">
                  and implementing sustainable practices in all areas of
                </span>
                <span className="our-business-the">
                  our business. The future must be preserved for future
                </span>
                <span className="generations">generations.</span>
              </p>
            </div>
            <a className="link-read">Read more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
