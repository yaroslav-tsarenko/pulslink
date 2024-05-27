import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import "./Dataplans.css";

const Dataplans = () => {
  return (
    <div className="dataplans">
      <main className="background2">
        <FrameComponent11 />
        <section className="background-child">
          <FrameComponent10 />
        </section>
        <div className="heading-2">Plans that may interest you</div>
        <div className="link">
          <div className="overlaybordershadow">
            <img className="container-icon" alt="" src="/container-2@2x.png" />
            <div className="background3" />
            <div className="gradient" />
          </div>
          <b className="belarus-15">Belarus - 15 days 6 GB</b>
          <div className="from">From</div>
          <div className="div">€0,00</div>
          <b className="eur">EUR</b>
          <div className="svg-parent">
            <img className="svg-icon" alt="" src="/svg.svg" />
            <img className="svg-icon1" alt="" src="/svg-1.svg" />
          </div>
        </div>
        <div className="link1">
          <div className="overlaybordershadow1">
            <img className="container-icon1" alt="" src="/container-3@2x.png" />
            <div className="background4" />
            <div className="gradient1" />
          </div>
          <b className="mexico">Mexico</b>
          <div className="from1">From</div>
          <div className="div1">€19,00</div>
          <b className="eur1">EUR</b>
          <div className="svg-group">
            <img className="svg-icon2" alt="" src="/svg.svg" />
            <img className="svg-icon3" alt="" src="/svg-1.svg" />
          </div>
        </div>
        <FrameComponent9 />
        <FrameComponent8 />
      </main>
      <header className="header">
        <img
          className="link-holafly-logosvg"
          alt=""
          src="/link--holaflylogosvg.svg"
        />
        <a
          className="item-link4"
          href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-27453"
          target="_blank"
        >
          Destinations
        </a>
        <a
          className="item-link5"
          href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-1646"
          target="_blank"
        >
          About us
        </a>
        <a
          className="item-link6"
          href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-2146"
          target="_blank"
        >
          FAQs
        </a>
        <a
          className="item-link7"
          href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-3137"
          target="_blank"
        >
          Reviews
        </a>
        <a
          className="item-link8"
          href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-4819"
          target="_blank"
        >
          Contact us
        </a>
        <div className="link2">
          <div className="login">Login</div>
        </div>
        <div className="button6">
          <img className="languagesvg-icon" alt="" src="/languagesvg.svg" />
          <div className="en-eur">  EN - EUR (€)</div>
        </div>
        <div className="vertical-divider" />
        <img className="button-icon" alt="" src="/button.svg" />
        <div className="button7">
          <div className="carritooksvg-parent">
            <img className="carritooksvg-icon" alt="" src="/carritooksvg.svg" />
            <div className="background5">
              <div className="div2">0</div>
            </div>
          </div>
        </div>
        <div className="background6">
          <img
            className="whatsapp-headersvg-icon"
            alt=""
            src="/whatsapp-headersvg.svg"
          />
          <div className="whatsapp-247-1-container">
            <span className="whatsapp-247-1-container1">
              <span>{`WhatsApp 24/7: `}</span>
              <span className="span">+1 (661) 384-8482</span>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Dataplans;
