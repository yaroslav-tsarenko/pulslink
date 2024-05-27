import "./UserReviews.css";

const UserReviews = ({ className = "" }) => {
  return (
    <section className={`user-reviews ${className}`}>
      <div className="section2">
        <div className="e-s-i-m-question">
          <h1 className="heading-256">What you should know about eSIMs</h1>
        </div>
        <div className="plan-renewal">
          <div className="backgroundborder4">
            <img
              className="no-phone-number-localsvg-icon"
              loading="lazy"
              alt=""
              src="/nophonenumberlocalsvg.svg"
            />
            <div className="e-s-i-m-arrival">
              <h3 className="heading-310">No local phone number</h3>
              <p className="this-esim-only-container">
                <span className="this-esim-only">
                  This eSIM only includes data. It does not allow you
                </span>
                <span className="to-make-cell">
                  to make cell phone calls or send SMS messages.
                </span>
                <span className="you-can-still">
                  You can still use WhatsApp or Skype to call your
                </span>
                <span className="contacts">contacts.</span>
              </p>
            </div>
          </div>
          <div className="backgroundborder5">
            <img
              className="phone-magicsvg-icon"
              loading="lazy"
              alt=""
              src="/phonemagicsvg.svg"
            />
            <div className="frame-parent53">
              <div className="heading-3-your-phone-must-su-parent">
                <h3 className="heading-311">Your phone must support eSIM</h3>
                <p className="make-sure-your-container">
                  <span className="make-sure-your">
                    Make sure your phone is both unlocked and
                  </span>
                  <span className="compatible-with-esim1">
                    compatible with eSIM technology.
                  </span>
                </p>
              </div>
              <div className="link-parent">
                <div className="link12">
                  <b className="check-compatible-devices">
                    Check compatible devices
                  </b>
                </div>
                <img
                  className="full-arrowsvg-icon"
                  alt=""
                  src="/fullarrowsvg.svg"
                />
              </div>
            </div>
          </div>
          <div className="backgroundborder6">
            <img
              className="tethering-share-data-esim-hola-icon"
              loading="lazy"
              alt=""
              src="/tetheringsharedataesimholaflysvg.svg"
            />
            <div className="heading-3-no-data-sharing-parent">
              <h3 className="heading-312">No data sharing</h3>
              <p className="this-esim-does-container">
                <span className="this-esim-does">
                  This eSIM does not allow you to share data or use a
                </span>
                <span className="hotspot-with-other">
                  hotspot with other devices.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

UserReviews.propTypes = {
  className: PropTypes.string,
};

export default UserReviews;
