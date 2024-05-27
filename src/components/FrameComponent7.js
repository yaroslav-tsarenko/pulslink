import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./FrameComponent7.css";

const FrameComponent7 = ({
  className = "",
  howToInstallAndActivateAn,
  vectorsvg,
  sectionLinkHeaPlaceholder,
}) => {
  return (
    <div className={`section-link-heading-3-parent6 ${className}`}>
      <div className="section-link-heading-318">
        <div className="how-to-install2">{howToInstallAndActivateAn}</div>
        <div className="vectorsvg-wrapper9">
          <img className="vectorsvg-icon14" alt="" src={vectorsvg} />
        </div>
      </div>
      <TextField
        className="section-link-heading-319"
        placeholder={sectionLinkHeaPlaceholder}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <img width="6.3px" height="10px" src="/vectorsvg-7.png" />
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
  );
};

export default FrameComponent7;
