import React, { useEffect, useState } from "react";
import "./navbar.css";
import UnstyledInput from "./SearchBar";

import HomeIcon from "@mui/icons-material/Home";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import CustomizedBadges from "./Badge";
import DropdownMenus from "../tools/DropdownMenu";
import { useDispatch, useSelector } from "react-redux";


import {lighten,darken,selectTheme,
} from '../../features/themeSlice';

import { selectUser } from "../../features/userSlice";


// console.log(theme);
export default function Navbar() {

  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={`navbar ${theme==="light" && "navbar--white"}  ${(theme==="dark") && "navbar--dark"}`}>
      
      <div className=" navbar__container container">
        <div className="navbar__leftSide">
          <img
            className="navbar__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
            alt=""
          />

          {user.photoUrl ? (
            <img
            src={user.photoUrl}
            alt=""
            className='navbar__profileImage'
            />
          ) : (
            <img
            src="https://icon2.cleanpng.com/20180722/ybz/kisspng-user-profile-2018-in-sight-user-conference-expo-5b554c09380f76.0349129615323166812296.jpg"
            alt=""
           className='navbar__profileImage'
          />
          )}

          <UnstyledInput />
        </div>
      

        <div className="navbar__center">
          <div className={`${theme==="light" && "--darkGreyText --activeBlack --hoverLightText"}  ${(theme==="dark") && "--lightGreyText --activeWhite --hoverDarkText"}`}>
            <CustomizedBadges icon={<HomeIcon />} text="🔴" />
            <h4>Home</h4>
          </div>
          <div className={`${theme==="light" && "--darkGreyText --activeBlack --hoverLightText"}  ${(theme==="dark") && "--lightGreyText --activeWhite --hoverDarkText"}`}>
            <GroupAddIcon />
            <h4>My Network</h4>
          </div>
          <div className={`${theme==="light" && "--darkGreyText --activeBlack --hoverLightText"}  ${(theme==="dark") && "--lightGreyText --activeWhite --hoverDarkText"}`}>
            <WorkIcon />
            <h4>Jobs</h4>
          </div>
          <div className={`${theme==="light" && "--darkGreyText --activeBlack --hoverLightText"}  ${(theme==="dark") && "--lightGreyText --activeWhite --hoverDarkText"}`}>
            <MessageIcon />
            <h4>Messaging</h4>
          </div>
          <div className={`${theme==="light" && "--darkGreyText --activeBlack --hoverLightText"}  ${(theme==="dark") && "--lightGreyText --activeWhite --hoverDarkText"}`}>
            <CustomizedBadges
              icon={<NotificationsActiveIcon />}
              text="4"
              colors="error"
            />
            <h4>Notifications</h4>
          </div  >
 
          
            <DropdownMenus />
        
         
        </div>

        

        <div className="navbar__rightSide">
          <div className={`${theme==="light" && "--darkGreyText --activeBlack --hoverLightText"}  ${(theme==="dark") && "--lightGreyText --activeWhite --hoverDarkText"}`}>
            <AppsIcon />
            <h4>
              <ArrowDropDownIcon />
              Work
            </h4>
          </div>
          <h4> Try Premium for free</h4>
        </div>
      </div>
      <div className="navbar__toggles">

       <button className='button-74' type="" onClick={() => dispatch(lighten())}>Light</button>
       <button className='button-75' type="" onClick={() => dispatch(darken())}>Dark</button>
        {/* <div className="circle--gray" onClick={() => dispatch(lighten())}></div> */}
        
        {/* <div className="circle--purple" onClick={() => dispatch(darken())}></div> */}
        {/* <div className="circle--black"></div> */}
      </div>
    </div>
  );
}

