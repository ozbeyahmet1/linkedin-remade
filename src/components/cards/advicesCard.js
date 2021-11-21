import React from "react";

import "./advicesCard.css";

import InfoIcon from '@mui/icons-material/Info';

import { useDispatch, useSelector } from "react-redux";
import themeSlice,{ selectTheme } from "../../features/themeSlice";


function AdvicesCard() {
  const theme = useSelector(selectTheme);
  return (
    <div className={`advicesCard ${theme==="light" && "--white"}`}>
      <div className={`advicesCard__inline ${theme==="light" && "--white"}  ${(theme==="dark") && "--dark"}`}>
          <div className='advicesCard__feed'>
            < InfoIcon style={{cursor:'pointer'}}/>
          </div>
        
        <div className='advicesCard__block'>
          <img
          className='advicesCard__image'
            src="https://media-exp1.licdn.com/dms/image/C4E0BAQEooBvMO2kBVg/company-logo_200_200/0/1519880697944?e=1643241600&v=beta&t=BpOCS4gowO23Ars8a8QS5TeDOBajN1_zBmTc4tATGfQ"
            alt=""
          />
          <div>
            <h3 className={` ${theme==="light" && "--blackText"}  ${(theme==="dark") && "--whiteText"}`}>Stack Overflow</h3>
            <h4 className={` ${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--lightGreyText"}`}>Company</h4>
            <button className={` ${theme==="light" && "--light --hoverLight"}  ${(theme==="dark") && "--dark --hoverDark --lightGreyText"}`} type=""><h4>+ Follow</h4></button>
          </div>
        </div>
        <div className='advicesCard__block'>
          <img
          className='advicesCard__image'
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFlVu4Cum1nYQ/profile-displayphoto-shrink_400_400/0/1636398178357?e=1643241600&v=beta&t=nhSlfqd2qrrC8ngV3QlZfYzR3VYpTV02BQ18p-TMO5s"
            alt=""
          />
          <div>
            <h3 className={` ${theme==="light" && "--blackText"}  ${(theme==="dark") && "--whiteText"}`}>Jason F.</h3>
            <h4 className={` ${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--lightGreyText"}`}>Co-founder & CEO of Basecamp</h4>
            <button className={` ${theme==="light" && "--light --hoverLight"}  ${(theme==="dark") && "--dark --hoverDark --lightGreyText"}`} type=""><h4>+ Follow</h4></button>
          </div>
        </div>
        <div className='advicesCard__block'>
          <img
          className='advicesCard__image'
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHqRRhVsnaziA/profile-displayphoto-shrink_200_200/0/1626063510328?e=1640822400&v=beta&t=SPlRUkuuy3zegz9qrgmwKMiVTlU8AE95Xi9WmSPfaDw"
            alt=""
          />
          <div>
            <h3 className={` ${theme==="light" && "--blackText"}  ${(theme==="dark") && "--whiteText"}`}>Bill Gates</h3>
            <h4 className={` ${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--lightGreyText"}`}>Co-chair, Bill & Melinda Gates Foundation</h4>
            <button className={` ${theme==="light" && "--light --hoverLight"}  ${(theme==="dark") && "--dark --hoverDark --lightGreyText"}`} type=""><h4>+ Follow</h4></button>
          </div>
        </div>
        <h4 className={` ${theme==="light" && "--hoverLight"}  ${(theme==="dark") && "--hoverDark"}`} >View all recommendations</h4>
            
    
      </div>
    </div>
  );
}

export default AdvicesCard;
