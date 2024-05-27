import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import UserReviews from "../components/UserReviews";
import ESIMSetup from "../components/ESIMSetup";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FooterContainer from "../components/FooterContainer";
import "./PDP.css";

const PDP = () => {
  return (
    <div className="pdp">
      <main className="background">
        <FrameComponent6 />
        <FrameComponent5 />
        <FrameComponent4 />
        <FrameComponent3 />
        <UserReviews />
        <ESIMSetup />
        <FrameComponent2 />
        <FrameComponent1 />
        <FrameComponent />
      </main>
      <img className="image-icon" alt="" src="/image-5@2x.png" />
      <FooterContainer
        itemLinkBlogHref="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-20335"
        itemLinkBlogTarget="_blank"
        a28413d6761d624ff11223c3c="/6a28413d6761d624ff11223c3c1cfd0dpng@2x.png"
      />
    </div>
  );
};

export default PDP;
