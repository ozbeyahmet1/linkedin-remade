import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../features/themeSlice";
import "./PagesCard.css";

function PagesCard() {
  const theme = useSelector(selectTheme);

  
  return (
    <div className={`pagesCard ${theme==="light" && "--white"}  ${(theme==="dark") && "--dark"}`}>
      <div className="pagesCard__block">
        <h3 className={` ${theme==="light" && "darkGreyText"}  ${(theme==="dark") && "--lightGreyText"}`} >My pages(2)</h3>
        <div className="pagesCard__page">
          <img
            className="pagesCard__image"
            src="https://media-exp1.licdn.com/dms/image/C4E0BAQE67Xf96rKi_A/company-logo_100_100/0/1605791447158?e=1642636800&v=beta&t=nGCTxAnzDwogE4K_QmgZg49Pjx8PuI6caXo3ZXKCv7I"
            alt=""
          />
          <div>
            <h4 className={` ${theme==="light" && "--blackText"}  ${(theme==="dark") && "--whiteText"}`}>Karpo</h4>
            <div className="pagesCard__text">
              <h3 className={` ${theme==="light" && "--blackText"}  ${(theme==="dark") && "--lightGreyText"}`}>Page Notifications</h3>
              <h4>15</h4>
            </div>
          </div>
        </div>

        <div className="pagesCard__page">
          <img
            className="pagesCard__image"
            src="https://dl.airtable.com/.attachments/78cc3ed734f065cb3928903f3c58420c/a1575859/react.png"
            alt=""
          />
          <div>
            <h4 className={` ${theme==="light" && "--blackText"}  ${(theme==="dark") && "--whiteText"}`}>Daily React Tips</h4>
            <div className="pagesCard__text">
              <h3 className={` ${theme==="light" && "--blackText"}  ${(theme==="dark") && "--lightGreyText"}`}>Page Notifications</h3>
              <h4>7</h4>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default PagesCard;
