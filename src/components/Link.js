import "./Link.css";

const Link = ({ className = "", container }) => {
  return (
    <div className={`link15 ${className}`}>
      <div className="overlaybordershadow1">
        <img className="container-icon2" alt="" src={container} />
        <div className="background19" />
        <div className="gradient11" />
      </div>
      <a
        className="usa2"
        href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-5178"
        target="_blank"
      >
        USA
      </a>
      <div className="from1">From</div>
      <div className="div248">€6,00</div>
      <b className="eur49">EUR</b>
      <img className="svg-icon10" alt="" src="/svg1.svg" />
      <img className="svg-icon11" alt="" src="/svg2.svg" />
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
};

export default Link;
