import "./TrustpilotReviews.css";

const TrustpilotReviews = ({ className = "" }) => {
  return (
    <div className={`trustpilot-reviews ${className}`}>
      <b className="heading-213">Trustpilot reviews</b>
      <div className="background54">
        <p className="dont-stress-about-container">
          <span>
            <span className="dont-stress-about1">
              DON’T stress about your phone service when you travel abroad! I
              used PulseLinkPlus to travel home to California this year. The
              instructions were super easy to
            </span>
            <span className="follow-and-i">
              follow and I had no problems with the service for the whole 20
              days that I used it. It was nice not to worry about how much my
              phone company was going
            </span>
            <span className="to-charge-me">
              to charge me for service abroad.
            </span>
          </span>
        </p>
        <div className="review-wrapper1">
          <div className="review-details2">
            <div className="reviewer-info">
              <div className="author-details3">
                <b className="heading-214">Karen Christensen</b>
                <div className="small-trustpilot">Trustpilot</div>
              </div>
            </div>
            <img
              className="background-icon5"
              alt=""
              src="/background-5@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="background55">
        <p className="excellent-service-and">
          Excellent service and when I needed help, the help was there.
        </p>
        <div className="background-parent2">
          <img className="background-icon6" alt="" src="/background-6@2x.png" />
          <div className="frame-wrapper10">
            <div className="heading-2-paul-elwood-parent">
              <b className="heading-215">Paul Elwood</b>
              <div className="small-trustpilot1">Trustpilot</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent18">
        <div className="background-parent3">
          <div className="background56">
            <p className="strong-amazing-container">
              <span className="amazing-service-100-recommend">
                <b className="amazing-service-100">{`Amazing service 100% recommended! `}</b>
                <span>Amazing service and works fine for me!</span>
              </span>
              <span className="recommended-at-all">
                <span>Recommended at all!</span>
              </span>
            </p>
            <div className="background-parent4">
              <img
                className="background-icon7"
                alt=""
                src="/background-7@2x.png"
              />
              <div className="frame-wrapper11">
                <div className="heading-2-dudac-parent">
                  <b className="heading-216">Dudac</b>
                  <div className="small-trustpilot2">Trustpilot</div>
                </div>
              </div>
            </div>
          </div>
          <div className="background-frame">
            <div className="background57">
              <p className="easy-to-fit-container">
                <span className="easy-to-fit-container1">
                  <span className="easy-to-fit">
                    Easy to fit on your mobile , worked perfect on my holidays
                    in
                  </span>
                  <span className="mexico">Mexico.</span>
                </span>
              </p>
              <div className="background-parent5">
                <img
                  className="background-icon8"
                  alt=""
                  src="/background-8@2x.png"
                />
                <div className="frame-wrapper12">
                  <div className="heading-2-alberto-carrasco-parent">
                    <b className="heading-217">Alberto Carrasco</b>
                    <div className="small-trustpilot3">Trustpilot</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background-parent6">
          <div className="background58">
            <p className="gb-for-our-container">
              <span className="gb-for-our-container1">
                <span className="gb-for-our">
                  6Gb for our almost 2-weeks trip to Turkey. We shared data and
                  both of us could enjoy
                </span>
                <span className="it-once-we">
                  it. Once we were back, still had some Mb available. 100%
                  recommended!
                </span>
              </span>
            </p>
            <div className="background-parent7">
              <img
                className="background-icon9"
                alt=""
                src="/background-9@2x.png"
              />
              <div className="frame-wrapper13">
                <div className="heading-2-jf-parent">
                  <b className="heading-218">JF</b>
                  <div className="small-trustpilot4">Trustpilot</div>
                </div>
              </div>
            </div>
          </div>
          <div className="background-wrapper1">
            <div className="background59">
              <b className="strong-great">Great service and customer support</b>
              <p className="great-service-and-container">
                <span className="great-service-and-container1">
                  <span className="great-service-and">
                    Great service and customer support! Fast delivery and high
                  </span>
                  <span className="speed-internet-i">
                    speed internet. I will for sure use their services again.
                  </span>
                </span>
              </p>
              <div className="background-parent8">
                <img
                  className="background-icon10"
                  alt=""
                  src="/background-10@2x.png"
                />
                <div className="frame-wrapper14">
                  <div className="heading-2-sigrid-de-los-sant-parent">
                    <b className="heading-219">Sigrid De los Santos</b>
                    <div className="small-trustpilot5">Trustpilot</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separator1" />
    </div>
  );
};

TrustpilotReviews.propTypes = {
  className: PropTypes.string,
};

export default TrustpilotReviews;
