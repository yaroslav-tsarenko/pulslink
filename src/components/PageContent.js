import "./PageContent.css";

const PageContent = ({ className = "" }) => {
  return (
    <div className={`page-content ${className}`}>
      <header className="header5">
        <div className="logo-container-group">
          <div className="logo-container1">
            <div className="holafly-logosvg-frame">
              <div className="holafly-logosvg7">
                <div className="image-8-layerstyle-parent3">
                  <img
                    className="image-8-layerstyle-icon7"
                    loading="lazy"
                    alt=""
                    src="/image-8-layerstyle.svg"
                  />
                  <div className="logo-pulse">
                    <img
                      className="pulselink-icon7"
                      loading="lazy"
                      alt=""
                      src="/pulselink.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <nav className="nav-list5">
              <a className="item-link75">Destinations</a>
              <a className="item-link76">About us</a>
              <a className="item-link77">FAQs</a>
              <a className="item-link78">Reviews</a>
              <a className="item-link79">Contact us</a>
            </nav>
          </div>
          <div className="link-wrapper2">
            <button className="link18">
              <a className="login5">Login</a>
            </button>
          </div>
          <div className="cart-language">
            <div className="cart-language-wrapper">
              <div className="button11">
                <img
                  className="languagesvg-icon5"
                  loading="lazy"
                  alt=""
                  src="/languagesvg.svg"
                />
                <a className="en-eur5">  EN - EUR (€)</a>
              </div>
              <div className="vertical-divider-wrapper1">
                <div className="vertical-divider7" />
              </div>
              <img
                className="button-icon6"
                loading="lazy"
                alt=""
                src="/button.svg"
              />
              <div className="button12">
                <img
                  className="carritooksvg-icon5"
                  loading="lazy"
                  alt=""
                  src="/carritooksvg.svg"
                />
                <div className="background24">
                  <a className="cart-placeholder">0</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="section3">
        <div className="image1" />
        <div className="title-wrapper">
          <h1 className="refund-policy">Refund Policy</h1>
        </div>
        <p className="change-of-plans-container">
          <span className="change-of-plans-container1">
            <span className="change-of-plans">
              Change of plans? No problem at all! Purchase your Holafly eSIM
              with
            </span>
            <span className="added-peace-of">
              added peace of mind. You have up to 6 months to request a refund.
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

PageContent.propTypes = {
  className: PropTypes.string,
};

export default PageContent;
