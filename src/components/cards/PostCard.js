import React, { useEffect, useState } from "react";

import "./PostCard.css";

import { FaHandshake } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

import { selectTheme } from "../../features/themeSlice";
import { useDispatch, useSelector } from "react-redux";

import ReactPlayer from 'react-player';

import { selectUser } from "../../features/userSlice";


function PostCard({ name, description, message, imageUrl, times ,videoUrl ,photoUrl}) {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const instant = Date.now();

  const [border, setBorder] = useState(false);
  const [trailerUrl,setTrailerUrl]=useState("");

  const showBorder = () => {
    if (`${instant}-${times}` < 10) {
      setBorder(true);
    } else {
      setBorder(false);
    }
  };

  function secondsToHms(value) {
    const sec = parseInt(value, 10); 
    let hours = Math.floor(sec / 3600); 
    let minutes = Math.floor((sec - hours * 3600) / 60); 
    let seconds = sec - hours * 3600 - minutes * 60;
    if (hours < 10) {      hours =  + hours;    }
    if (minutes < 10) {      minutes = '0' + minutes;    }
    if (seconds < 10) {      seconds = '0' + seconds;    }
    if (hours == 0) {
      return +minutes +"m" ; // Return in MM:SS format
    } else {
      return hours + "h"; // Return in HH:MM:SS format
    }
  }

  const user = useSelector(selectUser);

  return (
    <div
      className={`postCard ${
        (`${instant}` - ` ${times}`) / 1000 < 10 && "post__new"
      }  ${theme === "light" && "--white"}  ${theme === "dark" && "--dark"}`}
    >
      <div className="postCard__info">
        {photoUrl ?
          (<img
          className="postCard__profileImage"
          src={photoUrl}
          alt=""
        />) :
        (<img
          className="postCard__profileImage"
          src="https://icon2.cleanpng.com/20180722/ybz/kisspng-user-profile-2018-in-sight-user-conference-expo-5b554c09380f76.0349129615323166812296.jpg"
          alt=""
        />)
        }
        
        <div className="postcard__infoText">
          <h2
            className={` ${theme === "light" && "--blackText"} ${
              theme === "dark" && " --whiteText"
            }`}
            onClick={() => showBorder()}
          >
            {name}
          </h2>
          <h3
            className={` ${theme === "light" && "--blackText"} ${
              theme === "dark" && " --whiteText"
            }`}
          >
            315.527 followers
          </h3>
          <h3
            className={` ${theme === "light" && "--blackText"} ${
              theme === "dark" && " --whiteText"
            }`}
          >
            {secondsToHms((`${instant}` - ` ${times}`) / 1000)}
          </h3>
        </div>
      </div>
      <div
        className={`postCard__post ${theme === "light" && "--blackText"} ${
          theme === "dark" && " --whiteText"
        }`}
      >
        {message}
    
      </div>

      {(imageUrl&&(imageUrl!= "")) &&  
          <img
          className="postCard__image"
          src={imageUrl}
          alt=""
        />
      }
      
      {(videoUrl&&(videoUrl!= "")) &&  
        <ReactPlayer url={videoUrl} width="100%" height="300px" />
       } 

      <div className="postCard__emoji">
        <FaHandshake className="postCard__icons--small postCard__icons--small--blue" />
        <AiFillLike className="postCard__icons--small postCard__icons--small--green" />
        <AiFillHeart className="postCard__icons--small postCard__icons--small--red" />
      </div>
      <div className="postCard__icons">
        <div
          className={`postCard__button ${
            theme === "light" && "--darkGreyText --hoverLight"
          }  ${theme === "dark" && "--lightGreyText --hoverDarkGrey"}`}
        >
          <ThumbUpIcon />
          <h4>Like</h4>
        </div>
        <div
          className={`postCard__button ${
            theme === "light" && "--darkGreyText --hoverLight"
          }  ${theme === "dark" && "--lightGreyText --hoverDarkGrey"}`}
        >
          <CommentIcon />
          <h4>Comment</h4>
        </div>
        <div
          className={`postCard__button ${
            theme === "light" && "--darkGreyText --hoverLight"
          }  ${theme === "dark" && "--lightGreyText --hoverDarkGrey"}`}
        >
          <ShareIcon />
          <h4>Share</h4>
        </div>
        <div
          className={`postCard__button ${
            theme === "light" && "--darkGreyText --hoverLight"
          }  ${theme === "dark" && "--lightGreyText --hoverDarkGrey"}`}
        >
          <SendIcon />
          <h4>Send</h4>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
