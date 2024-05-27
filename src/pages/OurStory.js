import Header from "../components/Header";
import Background2 from "../components/Background2";
import Section1 from "../components/Section1";
import Section from "../components/Section";
import FrameComponent5 from "../components/FrameComponent5";
import Background1 from "../components/Background1";
import "./OurStory.css";

const OurStory = () => {
  return (
    <div className="ourstory">
      <Header />
      <Background2 />
      <Section1 />
      <Section />
      <FrameComponent5 />
      <Background1 />
      <div className="intercom-container">
        <div className="button-open-intercom-messeng">
          <img
            className="a28413d6761d624ff11223c3c1cfd0-icon"
            loading="lazy"
            alt=""
            src="/6a28413d6761d624ff11223c3c1cfd0dpng@2x.png"
          />
        </div>
      </div>
      <div className="image-container">
        <img className="image-icon1" alt="" src="/image2@2x.png" />
      </div>
    </div>
  );
};

export default OurStory;
