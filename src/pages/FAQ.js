import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import FrameComponent8 from "../components/FrameComponent8";
import BackgroundBorder1 from "../components/BackgroundBorder1";
import BackgroundBorder from "../components/BackgroundBorder";
import FrameComponent7 from "../components/FrameComponent7";
import Background3 from "../components/Background3";
import FrameComponent6 from "../components/FrameComponent6";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="faq">
      <main className="background1">
        <FrameComponent8 />
        <section className="background-inner">
          <div className="content-parent">
            <div className="content">
              <div className="section1">
                <div className="section-inner">
                  <div className="frame-parent">
                    <div className="esim-frequently-asked-question-wrapper">
                      <h1 className="esim-frequently-asked-container">
                        <p className="esim-frequently-asked">
                          eSIM Frequently Asked
                        </p>
                        <p className="questions">Questions</p>
                      </h1>
                    </div>
                    <p className="feel-free-to-container">
                      <span className="feel-free-to">
                        Feel free to ask! We might have the answer you are
                      </span>
                      <span className="looking-for">looking for</span>
                    </p>
                  </div>
                </div>
                <div className="search">
                  <div className="type-your-question-here-wrapper">
                    <div className="type-your-question">
                      Type your question here
                    </div>
                  </div>
                  <img
                    className="label-button"
                    loading="lazy"
                    alt=""
                    src="/label--button.svg"
                  />
                </div>
              </div>
            </div>
            <div className="question">
              <div className="backgroundborder">
                <div className="visibility-onsvg-wrapper">
                  <img
                    className="visibility-onsvg-icon"
                    loading="lazy"
                    alt=""
                    src="/visibility-onsvg@2x.png"
                  />
                </div>
                <h3 className="heading-3">When should I set up my eSIM?</h3>
              </div>
              <div className="backgroundborder1">
                <div className="visibility-onsvg-container">
                  <img
                    className="visibility-onsvg-icon1"
                    alt=""
                    src="/visibility-onsvg-1@2x.png"
                  />
                </div>
                <p className="what-happens-if-container">
                  <span className="what-happens-if">
                    What happens if I use up my data or
                  </span>
                  <span className="exhaust-the-days">
                    exhaust the days of validity?
                  </span>
                </p>
              </div>
              <BackgroundBorder1
                visibilityOnsvg="/visibility-onsvg-2@2x.png"
                canIUseMySIMCardAndPulseL="Can I use my SIM card and PulseLinkPlus eSIM"
                atTheSameTime="at the same time?"
              />
              <BackgroundBorder
                visibilityOnsvg="/visibility-onsvg@2x.png"
                isMyPhoneUnlockedAndAbleT="Is my phone “unlocked” and able to use"
                eSIMs="eSIMs?"
              />
              <BackgroundBorder1
                visibilityOnsvg="/visibility-onsvg-1@2x.png"
                canIUseMySIMCardAndPulseL="What should I do if I’ve deleted or lost"
                atTheSameTime="the QR code for my eSIM?"
                propBackgroundImage="url('/backgroundborder1@3x.png')"
                propPadding="0px 1px"
                propWidth="381.4px"
                propHeight="unset"
              />
              <BackgroundBorder
                visibilityOnsvg="/visibility-onsvg-2@2x.png"
                isMyPhoneUnlockedAndAbleT="My QR code isn’t working. What should I"
                eSIMs="do?"
                propBackgroundImage="url('/backgroundborder2@3x.png')"
                propDisplay="unset"
                propAlignSelf="stretch"
              />
            </div>
            <form className="other-questions">
              <div className="heading-2-other-questions-wrapper">
                <b className="heading-2">Other questions</b>
              </div>
              <div className="links-wrapper">
                <div className="links">
                  <Button
                    className="item-link"
                    startIcon={
                      <img
                        width="12px"
                        height="12px"
                        src="/faqcheckiconsvg.svg"
                      />
                    }
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "17.4",
                      background: "#000",
                      border: "#e4e6ea solid 1px",
                      borderRadius: "20px",
                      "&:hover": { background: "#000" },
                      width: 73.3,
                      height: 38.7,
                    }}
                  >
                    All
                  </Button>
                  <div className="item-link1">
                    <div className="choosing-and-buying">
                      Choosing and buying an eSIM
                    </div>
                  </div>
                  <div className="item-link2">
                    <div className="setting-up-your">Setting up your eSIM</div>
                  </div>
                  <div className="item-link3">
                    <div className="compatibility">Compatibility</div>
                  </div>
                  <div className="item-link4">
                    <div className="glossary">Glossary</div>
                  </div>
                  <div className="item-link5">
                    <div className="using-an-esim">Using an eSIM</div>
                  </div>
                  <div className="item-link6">
                    <div className="troubleshooting">Troubleshooting</div>
                  </div>
                </div>
              </div>
              <div className="physical-store">
                <div className="section-link-heading-3">
                  <div className="is-there-a">
                    Is there a physical store for PulseLinkPlus?
                  </div>
                  <div className="store-icons">
                    <img
                      className="vectorsvg-icon"
                      alt=""
                      src="/vectorsvg1@2x.png"
                    />
                  </div>
                </div>
                <div className="section-link-heading-31">
                  <div className="is-the-samsung">
                    Is the Samsung Galaxy S21 eSIM compatible?
                  </div>
                  <div className="vectorsvg-wrapper">
                    <img
                      className="vectorsvg-icon1"
                      alt=""
                      src="/vectorsvg1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="install">
                <div className="section-link-heading-3-parent">
                  <div className="section-link-heading-32">
                    <div className="how-to-install">
                      How to install and activate an eSIM on an iPhone?
                    </div>
                    <div className="vectorsvg-container">
                      <img
                        className="vectorsvg-icon2"
                        alt=""
                        src="/vectorsvg-2@2x.png"
                      />
                    </div>
                  </div>
                  <div className="section-link-heading-33">
                    <div className="why-am-i">
                      Why am I receiving text messages on my eSIM?
                    </div>
                    <div className="vectorsvg-frame">
                      <img
                        className="vectorsvg-icon3"
                        alt=""
                        src="/vectorsvg-2@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="section-link-heading-3-group">
                  <div className="section-link-heading-34">
                    <div className="is-the-motorola">
                      Is the Motorola Edge eSIM compatible?
                    </div>
                    <div className="frame-div">
                      <img
                        className="vectorsvg-icon4"
                        alt=""
                        src="/vectorsvg-4@2x.png"
                      />
                    </div>
                  </div>
                  <div className="section-link-heading-35">
                    <div className="is-the-samsung1">
                      Is the Samsung Galaxy S10 eSIM compatible?
                    </div>
                    <div className="vectorsvg-wrapper1">
                      <img
                        className="vectorsvg-icon5"
                        alt=""
                        src="/vectorsvg-4@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <FrameComponent7
                  howToInstallAndActivateAn="How to install and activate an eSIM on the Huawei?"
                  vectorsvg="/vectorsvg-6@2x.png"
                  sectionLinkHeaPlaceholder="Is the Huawei P30 eSIM compatible?"
                />
                <div className="section-link-heading-3-container">
                  <div className="section-link-heading-36">
                    <p className="how-to-install1">
                      How to install and activate an eSIM on the Google Pixel?
                    </p>
                    <div className="vectorsvg-wrapper2">
                      <img
                        className="vectorsvg-icon6"
                        alt=""
                        src="/vectorsvg-8@2x.png"
                      />
                    </div>
                  </div>
                  <div className="section-link-heading-37">
                    <div className="is-the-huawei">
                      Is the Huawei P20 eSIM compatible?
                    </div>
                    <div className="vectorsvg-wrapper3">
                      <img
                        className="vectorsvg-icon7"
                        alt=""
                        src="/vectorsvg-8@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <FrameComponent7
                  howToInstallAndActivateAn="How do you delete an eSIM from an iPhone?"
                  vectorsvg="/vectorsvg-10@2x.png"
                  sectionLinkHeaPlaceholder="What is an international data plan?"
                />
                <FrameComponent7
                  howToInstallAndActivateAn="What is iSIM and how does it work?"
                  vectorsvg="/vectorsvg-12@2x.png"
                  sectionLinkHeaPlaceholder="Is the Google Pixel 3 eSIM compatible?"
                />
                <div className="section-link-heading-3-parent1">
                  <div className="section-link-heading-38">
                    <div className="what-is-euicc">
                      What is eUICC and how does it work?
                    </div>
                    <div className="vectorsvg-wrapper4">
                      <img
                        className="vectorsvg-icon8"
                        alt=""
                        src="/vectorsvg-14@2x.png"
                      />
                    </div>
                  </div>
                  <div className="section-link-heading-39">
                    <div className="is-the-motorola1">
                      Is the Motorola One Vision eSIM compatible?
                    </div>
                    <div className="vectorsvg-wrapper5">
                      <img
                        className="vectorsvg-icon9"
                        alt=""
                        src="/vectorsvg-14@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="section-link-heading-3-parent2">
                  <TextField
                    className="section-link-heading-310"
                    placeholder="Is the Samsung Galaxy S20 FE eSIM compatible?"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="6.3px"
                          height="10px"
                          src="/vectorsvg-16.png"
                        />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#e4e6ea" },
                      "& .MuiInputBase-root": {
                        height: "70.7px",
                        paddingRight: "38.89999999999418px",
                        borderRadius: "16px",
                      },
                      "& .MuiInputBase-input": { color: "#292b2e" },
                    }}
                  />
                  <TextField
                    className="section-link-heading-311"
                    placeholder="Is the iPhone 8 eSIM compatible?"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="6.3px"
                          height="10px"
                          src="/vectorsvg-17.png"
                        />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#e4e6ea" },
                      "& .MuiInputBase-root": {
                        height: "70.7px",
                        paddingRight: "38.89999999999418px",
                        borderRadius: "16px",
                      },
                      "& .MuiInputBase-input": { color: "#292b2e" },
                    }}
                  />
                </div>
                <div className="section-link-heading-3-parent3">
                  <TextField
                    className="section-link-heading-312"
                    placeholder="Is the Google Pixel 5 eSIM compatible?"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="6.3px"
                          height="10px"
                          src="/vectorsvg-18.png"
                        />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#e4e6ea" },
                      "& .MuiInputBase-root": {
                        height: "70.7px",
                        paddingRight: "38.89999999999418px",
                        borderRadius: "16px",
                      },
                      "& .MuiInputBase-input": { color: "#292b2e" },
                    }}
                  />
                  <TextField
                    className="section-link-heading-313"
                    placeholder="Is the iPhone 7 eSIM compatible?"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="6.3px"
                          height="10px"
                          src="/vectorsvg-19.png"
                        />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#e4e6ea" },
                      "& .MuiInputBase-root": {
                        height: "70.7px",
                        paddingRight: "38.89999999999418px",
                        borderRadius: "16px",
                      },
                      "& .MuiInputBase-input": { color: "#292b2e" },
                    }}
                  />
                </div>
                <div className="section-link-heading-3-parent4">
                  <TextField
                    className="section-link-heading-314"
                    placeholder="Is the iPhone X eSIM compatible?"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="6.3px"
                          height="10px"
                          src="/vectorsvg-20.png"
                        />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#e4e6ea" },
                      "& .MuiInputBase-root": {
                        height: "70.7px",
                        paddingRight: "38.89999999999418px",
                        borderRadius: "16px",
                      },
                      "& .MuiInputBase-input": { color: "#292b2e" },
                    }}
                  />
                  <div className="section-link-heading-315">
                    <div className="how-does-dual">How does dual SIM work?</div>
                    <div className="vectorsvg-wrapper6">
                      <img
                        className="vectorsvg-icon10"
                        alt=""
                        src="/vectorsvg-21@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="section-link-heading-3-parent5">
                  <div className="section-link-heading-316">
                    <a
                      className="when-should-i"
                      href="https://www.figma.com/design/ip86oytaYFIGUJ7UG9Uw1P?node-id=1-21154"
                      target="_blank"
                    >
                      When should I set up my eSIM?
                    </a>
                    <div className="vectorsvg-wrapper7">
                      <img
                        className="vectorsvg-icon11"
                        alt=""
                        src="/vectorsvg-22@2x.png"
                      />
                    </div>
                  </div>
                  <div className="section-link-heading-317">
                    <div className="how-can-i">
                      How can I check how much data I’ve used?
                    </div>
                    <div className="vectorsvg-wrapper8">
                      <img
                        className="vectorsvg-icon12"
                        alt=""
                        src="/vectorsvg-22@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="frame-group">
              <div className="pagination-wrapper">
                <div className="pagination">
                  <div className="frame-container">
                    <div className="page-wrapper">
                      <div className="page">Page</div>
                    </div>
                    <div className="backgroundborder2">
                      <div className="div">1</div>
                    </div>
                  </div>
                  <div className="link1">
                    <div className="separator">2</div>
                  </div>
                  <div className="link2">
                    <div className="div1">3</div>
                  </div>
                </div>
              </div>
              <div className="compatibility1">
                <Background3
                  checkTheCompatibilityOfYo="Check the compatibility of your"
                  device="device"
                  link="Verify here"
                  image="/image3@2x.png"
                />
                <Background3
                  checkTheCompatibilityOfYo="Learn how to install and activate your"
                  device="eSIM"
                  link="View instructions"
                  image="/image-1@2x.png"
                  propWidth="unset"
                  propMinWidth="309px"
                  propFlex="1"
                  propAlignSelf="unset"
                  propWidth1="165.9px"
                  propMinWidth1="unset"
                />
              </div>
            </div>
            <div className="background2">
              <h1 className="ready-to-take-container">
                <span className="ready-to-take-container1">
                  <p className="ready-to-take">
                    Ready to take off? Don't hesitate any
                  </p>
                  <p className="longer-purchase-your">
                    longer, purchase your eSIM
                  </p>
                </span>
              </h1>
              <Button
                className="link3"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#292b2e",
                  fontSize: "16",
                  background: "#ffa51f",
                  border: "#ffa51f solid 1px",
                  borderRadius: "12px",
                  "&:hover": { background: "#ffa51f" },
                  width: 110.9,
                  height: 42,
                }}
              >
                Buy eSIM
              </Button>
              <div className="travel-guysvg" />
              <div className="image-wrapper">
                <img className="image-icon2" alt="" src="/image-2@2x.png" />
              </div>
            </div>
          </div>
        </section>
        <FrameComponent6 />
      </main>
      <img className="image-icon3" alt="" src="/image-13@2x.png" />
    </div>
  );
};

export default FAQ;
