import { Button } from "@mui/material";
import Header from "../components/Header";
import HeroContent from "../components/HeroContent";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Testimonial from "../components/Testimonial";
import Payment from "../components/Payment";
import Travel from "../components/Travel";
import Questions from "../components/Questions";
import FooterContainer from "../components/FooterContainer";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <main className="background">
        <HeroContent />
        <FrameComponent4 />
        <FrameComponent3 />
        <FrameComponent2 />
        <FrameComponent1 />
        <FrameComponent />
        <Testimonial />
        <Payment />
        <Travel />
        <Questions />
        <section className="section-wrapper">
          <div className="section">
            <img
              className="banner-appsvg-fill-icon"
              alt=""
              src="/bannerappsvg-fill.svg"
            />
            <h1 className="manage-esims-like-container">
              <span className="manage-esims-like-container1">
                <p className="manage-esims-like">
                  Manage eSIMs Like a Boss. Start Your Free PulseLinkPlus Trial
                  Now!
                </p>
              </span>
            </h1>
            <Button
              className="link"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#292b2e",
                borderRadius: "12px",
                "&:hover": { background: "#292b2e" },
                width: 280,
                height: 42.4,
              }}
            >
              Get Started
            </Button>
            <img className="image-icon" alt="" src="/image-12@2x.png" />
          </div>
        </section>
        <FooterContainer />
      </main>
    </div>
  );
};

export default Homepage;
