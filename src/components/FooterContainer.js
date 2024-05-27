import Background from "./Background";
import PropTypes from "prop-types";
import "./FooterContainer.css";

const FooterContainer = ({ className = "" }) => {
  return (
    <section className={`footer-container1 ${className}`}>
      <Background />
      <img className="image-icon13" alt="" src="/image-13@2x.png" />
    </section>
  );
};


export default FooterContainer;
