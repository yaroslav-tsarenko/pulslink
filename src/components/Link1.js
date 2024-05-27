import "./Link1.css";

const Link1 = ({ className = "", container }) => {
  return (
    <div className={`link14 ${className}`}>
      <div className="overlaybordershadow">
        <img className="container-icon1" alt="" src={container} />
        <div className="background18" />
        <div className="gradient10" />
      </div>
      <b className="europe">Europe</b>
      <div className="from">From</div>
      <div className="div247">€6,00</div>
      <b className="eur48">EUR</b>
      <img className="svg-icon8" alt="" src="/svg1.svg" />
      <img className="svg-icon9" alt="" src="/svg2.svg" />
    </div>
  );
};

Link1.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
};

export default Link1;
