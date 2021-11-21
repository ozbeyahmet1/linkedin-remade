import * as React from "react";
import { styled, alpha } from "@mui/material/styles";

import './DropdownMenu.css';

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import userSlice, { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import { selectTheme } from "../../features/themeSlice";




const StyledMenu = styled((props) => (
  
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />

))(({ theme }) => ({
  "& .MuiPaper-root": {
    
    minWidth: 260,

    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {},
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function DropdownMenus() {
  const theme = useSelector(selectTheme);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const OpenMenu = (event) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const user = useSelector(selectUser);
  return (
    <div style={{ paddingBottom: "0px",borderRadius:'15px'}}   >
      <div
        className={`dropdown__iconBlock ${theme==="light" && "--darkGreyText --activeBlack --hoverLightText"}  ${(theme==="dark") && "--lightGreyText --activeWhite --hoverDarkText"}`}
        onClick={OpenMenu}
       
      >
        <AccountCircleIcon />
        <h4
          className='dropdown__iconText'
          id="demo-customized-button"
          aria-controls="demo-customized-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          endIcon={<KeyboardArrowDownIcon />}
        >
          Me
          <ArrowDropDownIcon />
        </h4>
      </div>

      <StyledMenu
      
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      
       
      >
        <MenuItem onClick={handleClose} disableRipple  className={`dropdown__menuItem ${theme==="light" && "--white"}  ${(theme==="dark") && "--dark"}`} >
          <div className='dropdown__profile' style={{paddingTop:'10px'}}>
                        
  
          {user.photoUrl ? (
            <img
            src={user.photoUrl}
            alt=""
            className='dropdown__profileImage'
            />
          ) : (
            <img
            src="https://icon2.cleanpng.com/20180722/ybz/kisspng-user-profile-2018-in-sight-user-conference-expo-5b554c09380f76.0349129615323166812296.jpg"
            alt=""
           className='dropdown__profileImage'
          />
          )}
           
            <div style={{ marginLeft: "5px" }}>
              <h2 className={`dropdown__userName ${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--lightGreyText"}`}>
                {user.displayName}
                
              </h2>
              <h3 className='dropdown__job'>
                CEO - Allegori
                
              </h3>
            </div>
          </div>
          <button type="" className={` dropdown__button ${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--darkGrey --hoverDark"}`}>View Profile</button>
        </MenuItem>
        
        <MenuItem onClick={handleClose} disableRipple  className={`dropdown__menuItem ${theme==="light" && "--white"}  ${(theme==="dark") && "--dark"}`}>
          <h2 className={`${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--lightGreyText"}`}>Account</h2>
          <h2 className={`${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--lightGreyText"}`}>Settings & Privacy</h2>
          <h2 className={`${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--lightGreyText"}`}>Help</h2>
          <h2 className={`${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--lightGreyText"}`}>Language</h2>
        </MenuItem>
        
        <MenuItem onClick={handleClose} disableRipple className={`dropdown__menuItem ${theme==="light" && "--white"}  ${(theme==="dark") && "--dark"}`}>
          <h2 className={`${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--lightGreyText"}`} >Manage</h2>
          <h2 className={`${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--lightGreyText"}`}>Post & Activity </h2>
          <h2 className={`${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--lightGreyText"}`}>Company : Karpo</h2>
          <h2 className={`${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--lightGreyText"}`}>Company : AR Flip</h2>
          <h2 className={`${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--lightGreyText"}`}>Job Posting Account</h2>
        </MenuItem>
       
        <MenuItem onClick={handleClose} disableRipple className={`dropdown__menuItem ${theme==="light" && "--white"}  ${(theme==="dark") && "--dark"}`} style={{display:'block',paddingLeft:'15px'}}>
          <h2  className={`${theme==="light" && "--darkGreyText "}  ${(theme==="dark") && "--lightGreyText"}`} onClick={() => auth.signOut()} >Sign Out</h2>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}


export default DropdownMenus;