import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Header from "../components/Header";
import FrameComponent11 from "../components/FrameComponent11";
import Background from "../components/Background";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <main className="background26">
        <Header />
        <FrameComponent11 />
        <section className="form-container-wrapper">
          <div className="form-container">
            <div className="form-content">
              <div className="frame-parent9">
                <div className="horizontal-divider-wrapper">
                  <div className="horizontal-divider" />
                </div>
                <form className="input-fields">
                  <div className="pulse-link-contact">
                    <div className="pulse-link-info">
                      <h1 className="want-to-get">
                        Want to get in touch with PulseLinkPlus?
                      </h1>
                      <div className="affiliate-info">
                        <p className="if-youre-an-container">
                          <span className="if-youre-an">{`If you’re an affiliate, email us at `}</span>
                          <b className="creatorspulselinkpluscom">
                            creators@pulselinkplus.com
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="corporate-info">
                    <div className="corporate-email-info">
                      <div className="for-corporate-matters-container">
                        <span className="for-corporate-matters">{`For corporate matters (B2B), email us at `}</span>
                        <b className="businesspulselinkpluscom">
                          business@pulselinkplus.com
                        </b>
                      </div>
                      <div className="or-fill-out-the-following-form-wrapper">
                        <div className="or-fill-out">
                          Or fill out the following form
                        </div>
                      </div>
                    </div>
                  </div>
                  <TextField
                    className="input"
                    placeholder="Full name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#e4e6ea" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#fff",
                        borderRadius: "12px",
                        fontSize: "15.6px",
                      },
                      "& .MuiInputBase-input": { color: "#757575" },
                    }}
                  />
                  <div className="email-inputs-parent">
                    <div className="email-inputs">
                      <img
                        className="imagebackgroundshadow-icon"
                        loading="lazy"
                        alt=""
                        src="/imagebackgroundshadow@2x.png"
                      />
                      <div className="border10" />
                      <div className="input1">
                        <div className="div12">+1</div>
                      </div>
                    </div>
                    <TextField
                      className="input2"
                      placeholder="Email address"
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "#e4e6ea" },
                        "& .MuiInputBase-root": {
                          height: "50px",
                          backgroundColor: "#fff",
                          borderRadius: "12px",
                          fontSize: "15.8px",
                        },
                        "& .MuiInputBase-input": { color: "#757575" },
                      }}
                    />
                  </div>
                  <img className="label-icon" alt="" src="/label@2x.png" />
                  <div className="textarea" />
                  <div className="terms-checkbox">
                    <div className="checkbox-content">
                      <input className="frame-input" type="checkbox" />
                      <div className="i-accept-the-container">
                        <span className="i-accept-the">{`I accept the `}</span>
                        <b className="terms-and-conditions">
                          terms and conditions
                        </b>
                        <span className="and-the">{` and the `}</span>
                        <b className="treatment-of-data">
                          treatment of data use
                        </b>
                        <span className="span5">{`. `}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="input3"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#56575a",
                      fontSize: "16",
                      background: "#e4e6ea",
                      border: "#e4e6ea solid 2px",
                      borderRadius: "12px",
                      "&:hover": { background: "#e4e6ea" },
                      height: 50,
                    }}
                  >
                    Send
                  </Button>
                </form>
              </div>
            </div>
            <div className="background-group">
              <div className="background27">
                <h1 className="do-you-have-container">
                  <p className="do-you-have">Do you have more</p>
                  <p className="questions1">questions?</p>
                </h1>
                <p className="write-to-our-container">
                  <span className="write-to-our-container1">
                    <span className="write-to-our-email-and-you-wil">
                      <span>Write to our email and you will</span>
                    </span>
                    <span className="receive-a-response-as-soon-as">
                      <span>receive a response as soon as</span>
                    </span>
                    <span className="possible-helppulselinkplusc">
                      <span>{`possible. `}</span>
                      <span className="helppulselinkpluscom">
                        help@pulselinkplus.com
                      </span>
                    </span>
                  </span>
                </p>
                <img
                  className="pngwing-2-icon"
                  loading="lazy"
                  alt=""
                  src="/pngwing-21@2x.png"
                />
              </div>
              <div className="background28">
                <h1 className="check-out-the-container">
                  <span className="check-out-the-container1">
                    <p className="check-out-the">
                      Check out the frequently asked questions
                    </p>
                    <p className="about-our-services">about our services.</p>
                  </span>
                </h1>
                <Button
                  className="link35"
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#292b2e",
                    fontSize: "16",
                    background: "#fff",
                    border: "#e4e6ea solid 1px",
                    borderRadius: "12px",
                    "&:hover": { background: "#fff" },
                    width: 120.5,
                    height: 44.4,
                  }}
                >
                  View FAQs
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Background
          itemLinkBlogHref="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-20335"
          itemLinkBlogTarget="_blank"
          propPadding="0px 0px 6.3px"
          propTextDecoration="unset"
        />
        <div className="button-open-intercom-messeng1">
          <img
            className="a28413d6761d624ff11223c3c1cfd0-icon1"
            alt=""
            src="/6a28413d6761d624ff11223c3c1cfd0dpng@2x.png"
          />
        </div>
      </main>
      <img className="image-icon5" alt="" src="/image-13@2x.png" />
    </div>
  );
};

export default Contact;
