import "./FrameComponent10.css";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <div className={`heading-2-facebook-reviews-parent ${className}`}>
      <h2 className="heading-210">Facebook reviews</h2>
      <div className="background52">
        <p className="great-first-experience">
          Great first experience, no doubts I’ll use it in my further trips! 
        </p>
        <div className="review-containers">
          <img className="background-icon3" alt="" src="/background-3@2x.png" />
          <div className="review-content-wrapper">
            <div className="review-info">
              <b className="heading-211">Hristiana Unaerugnu</b>
              <a className="small-facebook">Facebook</a>
            </div>
          </div>
        </div>
      </div>
      <div className="background53">
        <p className="nice-service-i">{`Nice service! I usually travel outside, it’s easy to use, very helpful & great service! Much recommend PulseLinkPlus!`}</p>
        <div className="background-inner2">
          <div className="review-wrapper-parent">
            <div className="review-wrapper">
              <div className="review-details1">
                <b className="heading-212">Abhishek Jain</b>
                <a className="small-facebook1">Facebook</a>
              </div>
            </div>
            <img
              className="background-icon4"
              alt=""
              src="/background-4@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default FrameComponent10;
