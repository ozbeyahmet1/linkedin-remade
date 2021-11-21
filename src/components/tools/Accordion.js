import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StyledEngineProvider } from "@mui/material/styles";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import GroupIcon from "@mui/icons-material/Group";

import { selectTheme } from "../../features/themeSlice";
import { useSelector } from "react-redux";

import "../../Global.css";

export default function SimpleAccordion() {
  const theme = useSelector(selectTheme);
  return (
    <div >
      <StyledEngineProvider injectFirst>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={` ${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--whiteText "}`}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h4 className={`fontSize--12 lineHeight--36 ${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--whiteText "}`}>Recent</h4>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className={`display--flex alignCenter marginTop--5 ${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--whiteText "}`}>
                <GroupIcon className="height--20" />
                <h4 className="fontSize--12 lineHeigt--16 fontWeight-400 marginLeft--5">
                  React Developers
                </h4>
              </div>
              <div className={`display--flex alignCenter marginTop--5 ${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--whiteText "}`}>
                <GroupIcon className="height--20" />
                <h4 className="fontSize--12 lineHeight--16 fontWeight--400 marginLeft--5">
                  JS Developers
                </h4>
              </div>
              <div className={`display--flex alignCenter marginTop--5 ${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--whiteText "}`}>
                <GroupIcon className="height--20" />
                <h4 className="fontSize--12 lineHeight--16 fontWeight--400 marginLeft--5">
                  UI/UX
                </h4>
              </div>

              <div className={`display--flex alignCenter marginTop--5 ${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--whiteText "}`}>
                <GroupIcon className="height--20" />
                <h4 className="fontSize--12 lineHeight--16 fontWeight--400 marginLeft--5">
                  Cryptocurrency
                </h4>
              </div>

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={` ${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--whiteText "}`}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              <h4  className={`fontSize--12 lineHeight--36 ${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--whiteText "}`}>Groups</h4>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div  className={`display--flex alignCenter marginTop--5 ${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--whiteText "}`}>
                <GroupIcon className="height--20" />
                <h4 className="fontSize--12 lineHeight--16 fontWeight--400 marginLeft--5">
                  React Developers
                </h4>
              </div>
              <div  className={`display--flex alignCenter marginTop--5 ${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--whiteText "}`}>
                <GroupIcon className="height--20" />
                <h4 className="fontSize--12 lineHeight--16 fontWeight--400 marginLeft--5">
                  JS Developers
                </h4>
              </div>
              <div  className={`display--flex alignCenter marginTop--5 ${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--whiteText "}`}>
                <GroupIcon className="height--20" />
                <h4 className="fontSize--12 lineHeight--16 fontWeight--400 marginLeft--5">
                  UI/UX
                </h4>
              </div>
              <div  className={`display--flex alignCenter marginTop--5 ${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--whiteText "}`}>
                <GroupIcon className="height--20" />
                <h4 className="fontSize--12 lineHeight--16 fontWeight--400 marginLeft--5" >
                  Cryptocurrency
                </h4>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div className="margin--10 fontSize--12 lineHeight--12 color--blue cursor--pointer">
          <div className="marginBottom--10 display--flex alignItems--center justifyContent--space-between">
            <h4 className="fontWeight--400 lineHeight--20">Events</h4>
            <ControlPointIcon className='height--20' />
          </div>
          <div>Followed Hashtags</div>
        </div>
        <div  className={`padding--10 textAlign--center borderTop--gainsboro ${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--whiteText "}`}>
          Discover More
        </div>
      </StyledEngineProvider>
    </div>
  );
}
