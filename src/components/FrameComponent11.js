import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./FrameComponent11.css";

const FrameComponent11 = ({ className = "" }) => {
  const [linkDateTimePickerValue, setLinkDateTimePickerValue] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <section className={`background-parent10 ${className}`}>
        <div className="background61">
          <div className="how-can-we-help-we-would-love-wrapper">
            <h1 className="how-can-we-container">
              <p className="how-can-we">How can we help?</p>
              <p className="we-would-love">We would love to hear from you</p>
            </h1>
          </div>
          <div className="our-team-is">
            Our team is here to assist you promptly through any of these
            channels.
          </div>
        </div>
        <div className="contact-options">
          <div className="backgroundshadow">
            <div className="link48">
              <img
                className="whatsappwebp-icon"
                loading="lazy"
                alt=""
                src="/whatsappwebp@2x.png"
              />
              <div className="heading-2-whatsapp-parent">
                <h3 className="heading-220">Whatsapp</h3>
                <div className="contact-subtitles">
                  <div className="availability">24/7 availability</div>
                  <img
                    className="arrow-eastwebp-icon"
                    loading="lazy"
                    alt=""
                    src="/arroweastwebp@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="link49">
              <DatePicker
                value={linkDateTimePickerValue}
                onChange={(newValue) => {
                  setLinkDateTimePickerValue(newValue);
                }}
                sx={{
                  fieldset: {
                    borderColor: "#ccd0d7",
                    borderTopWidth: 1,
                    borderRightWidth: 1,
                    borderBottomWidth: 1,
                    borderLeftWidth: 1,
                  },
                  "&:hover": {
                    fieldset: { borderColor: "#ccd0d7" },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ccd0d7",
                    },
                  },
                  "& input::placeholder": {
                    textColor: "#2065ce",
                    fontSize: 15.9,
                  },
                  input: {
                    color: "#2065ce",
                    fontSize: 15.9,
                    textAlign: "left",
                    fontWeight: "400",
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#fff",
                    height: 162.40000000000146,
                    gap: "8px",
                    flexDirection: { flexDirection: "row" },
                  },
                }}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: false,
                    error: false,
                    placeholder: "24/7 availability",
                  },
                  openPickerIcon: {
                    component: () => (
                      <img
                        width="42px"
                        height="42px"
                        src="/iconmessagewebp.png"
                      />
                    ),
                  },
                }}
                label="Chat"
              />
            </div>
          </div>
        </div>
      </section>
    </LocalizationProvider>
  );
};



export default FrameComponent11;
