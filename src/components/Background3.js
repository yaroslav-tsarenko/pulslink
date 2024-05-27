import { useMemo } from "react";
import { Button } from "@mui/material";
import "./Background3.css";

const Background3 = ({
  className = "",
  checkTheCompatibilityOfYo,
  device,
  link,
  image,
  propWidth,
  propMinWidth,
  propFlex,
  propAlignSelf,
  propWidth1,
  propMinWidth1,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      flex: propFlex,
    };
  }, [propWidth, propMinWidth, propFlex]);

  const checkTheCompatibilityContainerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const linkStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDiv3Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={`background50 ${className}`}>
      <div
        className="check-the-compatibility-of-you-parent"
        style={frameDiv2Style}
      >
        <h2
          className="check-the-compatibility-container"
          style={checkTheCompatibilityContainerStyle}
        >
          <p className="check-the-compatibility">{checkTheCompatibilityOfYo}</p>
          <p className="device">{device}</p>
        </h2>
        <Button
          className="link44"
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
            width: 122.6,
            height: 44.4,
          }}
          style={linkStyle}
        >
          {link}
        </Button>
      </div>
      <div className="image-wrapper1" style={frameDiv3Style}>
        <img className="image-icon15" alt="" src={image} />
      </div>
    </div>
  );
};


export default Background3;
