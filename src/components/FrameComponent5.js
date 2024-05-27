import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`section-container ${className}`}>
      <div className="section6">
        <div className="join-content-container">
          <div className="join-content">
            <h1 className="heading-29">Join us in our mission</h1>
            <p className="be-part-of-container">
              <span className="be-part-of">
                Be part of something big! Together we can get travelers from all
                over
              </span>
              <span className="the-world-to">
                the world to enjoy the best connection.
              </span>
            </p>
            <div className="vacancies-container">
              <u className="check-out-our">{`Check out our vacancies `}</u>
              <div className="right-arrowsvg-wrapper">
                <img
                  className="right-arrowsvg-icon1"
                  loading="lazy"
                  alt=""
                  src="/rightarrowsvg1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="join-mission-desktop-finalweb-icon"
          loading="lazy"
          alt=""
          src="/joinmissiondesktopfinalwebp@2x.png"
        />
      </div>
    </section>
  );
};


export default FrameComponent5;
