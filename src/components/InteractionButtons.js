import { Button } from "@mui/material";
import "./InteractionButtons.css";

const InteractionButtons = ({ className = "", link }) => {
  return (
    <div className={`interaction-buttons ${className}`}>
      <div className="interaction-bar">
        <div className="horizontalborder7">
          <div className="icon-set">
            <img
              className="svg-icon14"
              alt=""
              src="/link--like-this-post--svg.svg"
            />
            <div className="button-labels">
              <div className="container59">
                <b className="b1">2</b>
              </div>
            </div>
          </div>
          <div className="icon-set1">
            <img className="svg-icon15" alt="" src="/svg-6.svg" />
            <div className="container-wrapper7">
              <div className="container60">
                <b className="reply5">Reply</b>
              </div>
            </div>
          </div>
          <div className="icon-set2">
            <img className="svg-icon16" alt="" src="/svg-7.svg" />
            <div className="container-wrapper8">
              <div className="container61">
                <b className="copy-link5">Copy link</b>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="link47"
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#006fd6",
            fontSize: "13",
            borderColor: "#cfd9de",
            borderRadius: "9999px",
            "&:hover": { borderColor: "#cfd9de" },
            height: 30,
          }}
        >
          {link}
        </Button>
      </div>
    </div>
  );
};

export default InteractionButtons;
