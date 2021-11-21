import React, { useEffect, useState } from "react";

import PostCard from "./PostCard";

import "./shareCard.css";
import "../../Theme.css"

import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ArticleIcon from "@mui/icons-material/Article";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import CelebrationIcon from "@mui/icons-material/Celebration";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CommentIcon from "@mui/icons-material/Comment";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { db } from "../../firebase";
import firebase from "firebase/compat/app";

import { selectTheme } from "../../features/themeSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
};

const textarea ={
  border: "none",
  margin: "15px",
  width: "96%",
  height: "100px",
  outline: "none",
  resize: "none",
  fontFamily: "inherit",
  fontSize: "16px",
  overflow: "auto",
  overflowY: "hidden",
  marginBottom:'50px'
}

const textareaImage ={
  border: "1px solid red",
  borderStyle:"dashed",
  marginBottom:'15px',
  marginLeft:'15px',
  width: "96%",
  height: "20px",
  outline: "none",
  resize: "none",
  fontFamily: "inherit",
  fontSize: "16px",
  overflow: "auto",
  overflowY: "hidden",
  padding:"10px",
  lineHeight:"6px",
}

const textareaVideo ={
  border: "1px solid blue",
  borderStyle:"dashed",
  marginBottom:'15px',
  marginLeft:'15px',
  width: "96%",
  height: "20px",
  outline: "none",
  resize: "none",
  fontFamily: "inherit",
  fontSize: "16px",
  overflow: "auto",
  overflowY: "hidden",
  padding:"10px",
  lineHeight:"6px",
}

function ShareCard() {
  const [open, setOpen] = React.useState(false);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState([]);
  const [picUrl , setPicUrl] = useState([]);
  const [vidUrl , setVidUrl] = useState([]);
  const [showPhotoArea ,setPhotoArea] =useState(false);
  const [showVideoArea,setVideoArea] = useState(false);
  const[profileImage,setProfileImage] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const user = useSelector(selectUser);

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

  //Pushing Data to database
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      photoUrl:user.photoUrl || "",
      message: input,
      imageUrl: picUrl,
      videoUrl: vidUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    handleClose();
    setInput("");
    setPicUrl("");
    setVidUrl("");
  };

  const theme = useSelector(selectTheme);
 
  return (
    <div>
      <div className={`shareCard ${(theme==="light") && "--white"} ${(theme==="dark") && "--dark"}`}>
        <div className="shareCard__inline">
          <div className="shareCard__up">
            {user.photoUrl ? (
              <img
              className="shareCard__image"
              src={user.photoUrl}
              alt=""
              />
            ) : (
              <img
              className="shareCard__image"
              src="https://icon2.cleanpng.com/20180722/ybz/kisspng-user-profile-2018-in-sight-user-conference-expo-5b554c09380f76.0349129615323166812296.jpg"
              alt=""
              />
            )}
            

            <div onClick={handleOpen} className={` ${theme==="light" && "--blackText shareCard__search --hoverLight"}  ${(theme==="dark") && "--whiteText --hoverDark shareCard__search"}`}><h2 className="shareCard__imageText">Share Something</h2></div>
          </div>
          <div className="shareCard__bottom">

            <div className={` ${(theme==="light") && "--hoverLight"} ${(theme==="dark") && "--whiteText --hoverDark"}`}>
              <PhotoSizeSelectActualIcon className="marginRight--10 icon--blue"/>  
              <span  className={` ${(theme==="light") && "--darkGreyText"} ${(theme==="dark") && "--whiteText"}`} >Photo</span>
            </div>

            <div className={` ${(theme==="light") && "--hoverLight"} ${(theme==="dark") && "--whiteText --hoverDark"}`}>
              <YouTubeIcon className="marginRight--10 icon--green" />
              <span>Video</span>
            </div>

            <div className={` ${(theme==="light") && "--hoverLight"} ${(theme==="dark") && "--whiteText --hoverDark"}`}>
              <DateRangeIcon className="marginRight--10 icon--orange" />
              <span>Event</span>
            </div>

            <div className={` ${(theme==="light") && "--hoverLight"} ${(theme==="dark") && "--whiteText --hoverDark"}`}>
              <ArticleIcon className="marginRight--10 icon--pink" />
              <span>Article</span>
            </div>

          </div>
        </div>
      </div>
      <div>
        {posts.map(
          ({
            id,
            data: { name, description, message, imageUrl, timestamp,videoUrl ,photoUrl},
          }) => (
            <PostCard
              key={id}
              name={name}
              description={description}
              message={message}
              imageUrl={imageUrl}
              videoUrl ={videoUrl}
              times={Number(timestamp && timestamp.toDate().getTime())}
              photoUrl={photoUrl}
            />
          )
        )}
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
         
        >
          <Box sx={style} className={`${theme==="light" && "--white"}  ${(theme==="dark") && "--dark"}`}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="borderBottom--gainsboro padding--10"  
            >
              <h2 className="fontSize--20 lineHeight--28 fontWeight--400" className={`${theme==="light" && "--white --blackText"}  ${(theme==="dark") && "--dark --lightGreyText"}`}>
                Create Post
              </h2>
            </Typography>

            <Typography
              id="modal-modal-description"
              className="display--flex padding--10 marginTop--10"
            >
             
                  {user.photoUrl ? (
              <img
              src={user.photoUrl}
              alt=""
              className="shareCard__photo"
            />
            ) : (
              <img
                src="https://icon2.cleanpng.com/20180722/ybz/kisspng-user-profile-2018-in-sight-user-conference-expo-5b554c09380f76.0349129615323166812296.jpg"
                alt=""
                className="shareCard__photo"
              />
            )}
              <h4 className="shareCard__text" >
                {user.displayName}
              </h4>
            </Typography>
            <Typography>
              <form>
                <textarea
                  className={`${theme==="light" && "--white --blackText"}  ${(theme==="dark") && "--dark --lightGreyText"}`}
                  type="text"
                  name=""
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={textarea}
                  placeholder="What do you want to talk about">  
                </textarea>

                { showPhotoArea && 
                <textarea
                  className={`${theme==="light" && "--white --blackText"}  ${(theme==="dark") && "--dark --lightGreyText"}`}
                  type="text"
                  name=""
                  value={picUrl}
                  onChange={(e) => setPicUrl(e.target.value)}
                  style={textareaImage}
                  placeholder="Please enter the photo Url">  
                  </textarea>
                }

                { showVideoArea && 
                <textarea
                  type="text"
                  name=""
                  value={vidUrl}
                  onChange={(e) => setVidUrl(e.target.value)}
                  style={textareaVideo}
                  placeholder="Please enter the video Url">  
                </textarea>
                }
                
                <button
                  style={{ display: "none" }}
                  onClick={sendPost}
                  type="submit"  
                >
                  Send
                </button>
              </form>
              <div className="shareCard__iconArea" >
                <div className="shareCard__icons" >
                  <ImageIcon  className={`cursor--pointer ${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--whiteText --hoverLightText"}`} onClick={() => setPhotoArea(true) ||setVideoArea(false)}  />
                  <YouTubeIcon  className={` cursor--pointer ${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--whiteText --hoverLightText"}`}  onClick={() => setVideoArea(true)||setPhotoArea(false) }/>
                  <WorkIcon  className={`cursor--pointer ${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--whiteText --hoverLightText"}`} />
                  <CelebrationIcon  className={`cursor--pointer ${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--whiteText --hoverLightText"}`} />
                  <EqualizerIcon className={`cursor--pointer ${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--whiteText --hoverLightText"}`}/>
                  <MoreHorizIcon  className={`cursor--pointer ${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--whiteText --hoverLightText"}`}/>
                  <CommentIcon  className={`cursor--pointer ${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--whiteText --hoverLightText"}`}/>
                </div>
                <button  onClick={sendPost} className={`shareCard__button ${theme==="light" && "--darkGreyText --lightGrey --hoverDark"}  ${(theme==="dark") && "--blackText --darkGrey --hoverLight"}`}><h2 className="padding--10" > Post</h2></button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default ShareCard;
