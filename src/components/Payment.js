import "./Payment.css";

const Payment = ({ className = "" }) => {
  return (
    <section className={`payment ${className}`}>
      <div className="section3">
        <div className="mask">
          <img
            className="mask-group-icon"
            loading="lazy"
            alt=""
            src="/mask-group.svg"
          />
          <div className="path-wrapper">
            <img
              className="path-icon"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
        <img
          className="visa-iconsvg"
          loading="lazy"
          alt=""
          src="/visa-iconsvg@2x.png"
        />
        <img
          className="mastercard-iconsvg"
          loading="lazy"
          alt=""
          src="/mastercardiconsvg.svg"
        />
        <img
          className="googlepaysvg-icon"
          loading="lazy"
          alt=""
          src="/googlepaysvg.svg"
        />
        <img
          className="paypal-iconsvg"
          loading="lazy"
          alt=""
          src="/paypaliconsvg@2x.png"
        />
        <img
          className="apple-pay-iconsvg"
          loading="lazy"
          alt=""
          src="/applepayiconsvg.svg"
        />
      </div>
    </section>
  );
};

Payment.propTypes = {
  className: PropTypes.string,
};

export default Payment;
