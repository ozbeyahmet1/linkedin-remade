import React, { useEffect, useState } from "react";

import "./bottomNavbar.css";

import CustomizedBadges from "../navbar/Badge";

import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import WorkIcon from "@mui/icons-material/Work";
import VideocamIcon from "@mui/icons-material/Videocam";
import CelebrationIcon from "@mui/icons-material/Celebration";
import PostAddIcon from "@mui/icons-material/PostAdd";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ImageIcon from "@mui/icons-material/Image";
import ClearIcon from "@mui/icons-material/Clear";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LogoutIcon from '@mui/icons-material/Logout';


import { selectTheme } from "../../features/themeSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

import firebase from "firebase/compat/app";
import { auth, db } from "../../firebase";

import PostCard from "./PostCard";


const textarea ={
  border: "none",
  margin: "15px",
  width: "80%",
  height: "100px",
  outline: "none",
  resize: "none",
  fontFamily: "inherit",
  fontSize: "16px",
  overflow: "auto",
  overflowY: "hidden",
  marginBottom: "50px",
}

const textareaImage= {
  border: "1px solid red",
  borderStyle: "dashed",
  marginBottom: "15px",
  marginLeft: "15px",
  width: "96%",
  height: "16px",
  outline: "none",
  resize: "none",
  fontFamily: "inherit",
  fontSize: "16px",
  overflow: "auto",
  overflowY: "hidden",
  cursor:"pointer",
}

const textareaVideo ={
  border: "1px solid blue",
  borderStyle: "dashed",
  marginBottom: "15px",
  marginLeft: "15px",
  width: "96%",
  height: "16px",
  outline: "none",
  resize: "none",
  fontFamily: "inherit",
  fontSize: "16px",
  overflow: "auto",
  overflowY: "hidden",
  cursor:"pointer"
}


function BottomNavbar() {
  const [show, handleShow] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState([]);
  const [picUrl, setpicUrl] = useState([]);
  const [vidUrls, setvidUrls] = useState([]);
  const [showPhotoArea, setPhotoArea] = useState(false);
  const [showVideoArea, setVideoArea] = useState(false);

  const theme = useSelector(selectTheme);
  const user = useSelector(selectUser);

  window.onscroll = function (e) {
    if (this.oldScroll > this.scrollY) {
      handleShow(false);
    } else {
      handleShow(true);
    }
    this.oldScroll = this.scrollY;
  };

 // Getting Data From Database
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  //Pushing Data to Database
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl:user.photoUrl || "",
      imageUrl: picUrl,
      videoUrl: vidUrls,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setShowMessage(false);
    setInput("");
    setpicUrl("");
    setvidUrls("");
  };


  return (
    <div className="bottomNavbar" >
      {showMessage && (
        <>
          <div className='bottomNavbar__body'>
            <div className="shareDropdown__navbar">
              <ClearIcon onClick={() => setShowMessage(false)} className="shareDropdown__clearIcon" />
            </div>
            <div className="shareDropdown__profile">
                    
                {user.photoUrl ? (
                  <img
                  src={user.photoUrl}
                  alt=""
                  className="shareDropdown__image"
                  />
                ) : (
                  <img
                  src="https://icon2.cleanpng.com/20180722/ybz/kisspng-user-profile-2018-in-sight-user-conference-expo-5b554c09380f76.0349129615323166812296.jpg"
                  alt=""
                  className="shareDropdown__image"
                />
                )}
              <h4><PersonIcon />{user.displayName}</h4>
            </div>
            <div style={{display:'none'}}>
              {posts.map(
                ({
                  id,
                  data: { name, description, message,imageUrl, photoUrl, timestamp, videoUrl },
              }) => (
            <PostCard
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
              imageUrl={imageUrl}
              videoUrl={videoUrl}
              times={Number(timestamp && timestamp.toDate().getTime())}
            />
            )
          )}
          </div>
            <div>
              <form>
                <textarea
                  className={`shareDropdown_textarea ${theme === "light" && "--white --blackText"}  ${
                    theme === "dark" && "--dark --lightGreyText"
                  }`}
                  type="text"
                  name=""
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={textarea}
                  placeholder="What do you want to talk about"
                ></textarea>

                {showPhotoArea && (
                  <textarea
                    type="text"
                    name=""
                    value={picUrl}
                    onChange={(e) => setpicUrl(e.target.value)}
                    style={textareaImage}
                    placeholder="Please enter the photo Url"
                  ></textarea>
                )}

                {showVideoArea && (
                  <textarea
                    type="text"
                    name=""
                    value={vidUrls}
                    onChange={(e) => setvidUrls(e.target.value)}
                    style={textareaVideo}
                    placeholder="Please enter the video Url"
                  ></textarea>
                )}

                <button
                  className="shareDropdown__button"
                  onClick={sendPost}
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="shareDropdown__tags">
              <div onClick={() => setPhotoArea(true) || setVideoArea(false)}>
                <ImageIcon /> <h4>Add a Photo</h4>
              </div>
              <div onClick={() => setVideoArea(true) || setPhotoArea(false)}>
                <VideocamIcon /> <h4>Add a Video</h4>
              </div>
              <div>
                <CelebrationIcon /> <h4>Celebrate an Occasion</h4>
              </div>
              <div>
                <PostAddIcon /> <h4>Add a Document</h4>
              </div>
              <div>
                <WorkIcon /> <h4>Add a Job</h4>
              </div>
              <div>
                <AccountBoxIcon /> <h4>Find an Expert</h4>
              </div>
              <div>
                <EqualizerIcon /> <h4>Add a Poll</h4>
              </div>
            </div>
          </div>
        </>
      )}
  
      <div
        className={`bottomNavbar__navbar ${
          !show ? "bottomNavbar__navbar--close" : "bottomNavbar__navbar--open"
        } ${
          theme === "light" && "--darkGreyText  --hoverLightText navbar--white"
        }  ${
          theme === "dark" && "--lightGreyText  --hoverDarkText navbar--dark"
        }`}
      >
        <div
          className={`${
            theme === "light" && "--darkGreyText --activeBlack --hoverLightText"
          }  ${
            theme === "dark" && "--lightGreyText --activeWhite --hoverDarkText"
          }`}
        >
          <CustomizedBadges icon={<HomeIcon />} text="🔴" />
        </div>
        <div
          className={`${
            theme === "light" && "--darkGreyText --activeBlack --hoverLightText"
          }  ${
            theme === "dark" && "--lightGreyText --activeWhite --hoverDarkText"
          }`}
        >
          <GroupAddIcon />
        </div>
        <div
          className={`${
            theme === "light" && "--darkGreyText --activeBlack --hoverLightText"
          }  ${
            theme === "dark" && "--lightGreyText --activeWhite --hoverDarkText"
          }`}
        >
          <AddBoxIcon onClick={() => setShowMessage(true)} />
        </div>
        <div
          className={`${
            theme === "light" && "--darkGreyText --activeBlack --hoverLightText"
          }  ${
            theme === "dark" && "--lightGreyText --activeWhite --hoverDarkText"
          }`}
        >
          <WorkIcon />
        </div>

        <div
          className={`${
            theme === "light" && "--darkGreyText --activeBlack --hoverLightText"
          }  ${
            theme === "dark" && "--lightGreyText --activeWhite --hoverDarkText"
          }`}
        >
          <LogoutIcon onClick={() => auth.signOut()}/>
        </div>
      </div>
    </div>
  );
}

export default BottomNavbar;
