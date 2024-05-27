import { Button } from "@mui/material";
import "./TweetActionsContainer.css";

const TweetActionsContainer = ({ className = "", replyAction, link }) => {
  return (
    <div className={`tweet-actions-container ${className}`}>
      <div className="horizontalborder-group">
        <div className="horizontalborder6">
          <div className="svg-parent1">
            <img className="svg-icon11" loading="lazy" alt="" src="/svg.svg" />
            <div className="action-labels1">
              <div className="container56">
                <b className="reply-action">{replyAction}</b>
              </div>
            </div>
          </div>
          <div className="svg-parent2">
            <img className="svg-icon12" alt="" src="/svg-1.svg" />
            <div className="container-wrapper5">
              <div className="container57">
                <b className="reply4">Reply</b>
              </div>
            </div>
          </div>
          <div className="svg-parent3">
            <img className="svg-icon13" alt="" src="/svg-2.svg" />
            <div className="container-wrapper6">
              <div className="container58">
                <b className="copy-link4">Copy link</b>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="link46"
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#006fd6",
            fontSize: "14",
            borderColor: "#cfd9de",
            borderRadius: "9999px",
            "&:hover": { borderColor: "#cfd9de" },
            height: 32,
          }}
        >
          {link}
        </Button>
      </div>
    </div>
  );
};

TweetActionsContainer.propTypes = {
  className: PropTypes.string,
  replyAction: PropTypes.string,
  link: PropTypes.string,
};

export default TweetActionsContainer;
