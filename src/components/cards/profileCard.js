import React from "react";

import "./profileCard.css";

import BookmarkIcon from '@mui/icons-material/Bookmark';

import { selectTheme } from "../../features/themeSlice";
import { useSelector } from "react-redux";
import userSlice, { selectUser } from "../../features/userSlice";

function ProfileCard() {
  const theme = useSelector(selectTheme);
  const user = useSelector(selectUser);
  
  return (
    <div  className={`profileCard ${theme==="light" && "--white"}  ${(theme==="dark") && "--dark"}`}>
      <div className="profileCard__profile">

        
            
     {user.photoUrl ? (
      <img
        className="profileCard__image"
        src={user.photoUrl}
        alt="" />
        ) : (
      <img
        className="profileCard__image"
        src="https://icon2.cleanpng.com/20180722/ybz/kisspng-user-profile-2018-in-sight-user-conference-expo-5b554c09380f76.0349129615323166812296.jpg"
        alt="" />
      )}
          
    
       
      </div>
      <div className="profileCard__info">
        <h3  className={` ${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--whiteText"}`}>{user.displayName}</h3>
        <h5  className={` ${theme==="light" && "--greyText"}  ${(theme==="dark") && "--whiteText"}`}>CEO at Allegori</h5>
      </div>
      <div className="profileCard__stats">
        <div className={` ${theme==="light" && "--hoverLight"}  ${(theme==="dark") && " --hoverDark"}`}>
          <h4 className={` ${theme==="light" && "--greyText"}  ${(theme==="dark") && "--whiteText"}`}>Who viewed your profile</h4>
          <span>10</span>
        </div>
        <div className={` ${theme==="light" && "--hoverLight"}  ${(theme==="dark") && " --hoverDark"}`}>
          <h4  className={` ${theme==="light" && "--greyText"}  ${(theme==="dark") && "--whiteText"}`}>Views of your post </h4>
          <span>114</span>
        </div>
      </div>
      <div className={` ${theme==="light" && "profileCard__premium --hoverLight"}  ${(theme==="dark") && "profileCard__premium --hoverDark"}`}>
          <h4  className={` ${theme==="light" && "--greyText "}  ${(theme==="dark") && "--lightGreyText "}`}>Access exclusive tools & insights</h4>
          <h5  className={` ${theme==="light" && "--greyText"}  ${(theme==="dark") && "--whiteText"}`}>🟨 Try Premium for Free</h5>
      </div>
      <div className={` ${theme==="light" && "profileCard__items --hoverLight"}  ${(theme==="dark") && "profileCard__items --hoverDark"}`}>
          <div  className={` ${theme==="light" && "--greyText"}  ${(theme==="dark") && "--whiteText"}`}>
            <span>< BookmarkIcon style={{height:'24px'}}/></span>
            <h4>My Items</h4>
          </div>
          
          
      </div>
    </div>
  );
}

export default ProfileCard;
