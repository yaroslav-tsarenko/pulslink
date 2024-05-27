import "./Header2.css";

const Header2 = ({ className = "" }) => {
  return (
    <div className={`header3 ${className}`}>
      <div className="header-buttons">
        <div className="holafly-logosvg6">
          <div className="pulselink-group">
            <img className="pulselink-icon6" alt="" src="/pulselink.svg" />
            <img
              className="image-8-layerstyle-icon6"
              alt=""
              src="/image-8-layerstyle.svg"
            />
          </div>
        </div>
        <div className="nav-list3">
          <a
            className="item-link65"
            href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-2"
            target="_blank"
          >
            Destinations
          </a>
          <a
            className="item-link66"
            href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-1646"
            target="_blank"
          >
            About us
          </a>
          <a
            className="item-link67"
            href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-2146"
            target="_blank"
          >
            FAQs
          </a>
          <a
            className="item-link68"
            href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-3137"
            target="_blank"
          >
            Reviews
          </a>
          <a
            className="item-link69"
            href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-4819"
            target="_blank"
          >
            Contact us
          </a>
        </div>
        <div className="link16">
          <div className="login3">Login</div>
        </div>
        <div className="button7">
          <img className="languagesvg-icon3" alt="" src="/languagesvg.svg" />
          <div className="en-eur3">  EN - EUR (€)</div>
        </div>
        <div className="vertical-divider5" />
        <img className="button-icon4" alt="" src="/button.svg" />
        <div className="button8">
          <img className="carritooksvg-icon3" alt="" src="/carritooksvg.svg" />
          <div className="background21">
            <div className="cart-button-color">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Header2;
