import Background from "./Background";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <footer className={`frame-footer ${className}`}>
      <Background
        itemLinkBlogHref="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-20335"
        itemLinkBlogTarget="_blank"
        propPadding="0px 0px 6.2px"
        propTextDecoration="unset"
      />
      <div className="button-open-intercom-messeng2">
        <img
          className="a28413d6761d624ff11223c3c1cfd0-icon2"
          loading="lazy"
          alt=""
          src="/6a28413d6761d624ff11223c3c1cfd0dpng1@2x.png"
        />
      </div>
    </footer>
  );
};



export default FrameComponent6;
