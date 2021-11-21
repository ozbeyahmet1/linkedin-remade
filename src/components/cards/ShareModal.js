
import React, { useEffect, useState } from "react";
import "./shareCard.css";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ArticleIcon from "@mui/icons-material/Article";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";
import PostCard from "./PostCard";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import CelebrationIcon from "@mui/icons-material/Celebration";
import PostAddIcon from "@mui/icons-material/PostAdd";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CommentIcon from "@mui/icons-material/Comment";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { selectTheme } from "../../features/themeSlice";
import { useSelector } from "react-redux";

const stylex = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 2,
  
    // p: 4,
  };
function ShareModal() {
  const user = useSelector(selectUser);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState([]);
    useEffect(() => {
      // takıng from database
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
  
    const sendPost = (e) => {
      e.preventDefault();
      //pushing to database
      db.collection("posts").add({
        name: user.displayName,
        description: "this is a test",
        message: input,
        photoUrl: "",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      handleClose();
      setInput("");
    };
  
    const theme = useSelector(selectTheme);
    return (
        <div>
        
          <Box sx={stylex} className={`${theme==="light" && "--white"}  ${(theme==="dark") && "--dark"}`}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ borderBottom: "1px solid gainsboro", padding: "10px" }}
              
            >
              <h2
                style={{
                  fontSize: "20px",
                  lineHeight: "28px",
                  fontWeight: 400,
                }}
              >
                Create Post
              </h2>
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, p: "10px" }}
              style={{ display: "flex" }}
            >
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQH-SIzG78y5fQ/profile-displayphoto-shrink_100_100/0/1553789944451?e=1640217600&v=beta&t=bVzsfwXun9J4A-lIigkJZavjzPIbJAZqwCB7-avNlpg"
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "1px solid gainsboro",
                  marginRight: "10px",
                }}
              />
              <h4
                style={{
                  border: "1px solid gainsboro",
                  lineHeight: "40px",
                  padding: "5px",
                  borderRadius: "25px",
                }}
              >
                Ahmet Özbey
              </h4>
            </Typography>
            <Typography>
              <form>
                <textarea
                  // className="shareCard__search"
                  className={`${theme==="light" && "--white --blackText"}  ${(theme==="dark") && "--dark --lightGreyText"}`}
                  type="text"
                  name=""
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={{
                    border: "none",
                    margin: "15px",
                    width: "96%",
                    height: "170px",
                    outline: "none",
                    resize: "none",
                    fontFamily: "inherit",
                    fontSize: "16px",
                    overflow: "auto",
                    overflowY: "hidden",
                  }}
                  placeholder="What do you want to talk about"
                ></textarea>

<textarea
                  // className="shareCard__search"
                  className={`${theme==="light" && "--white --blackText"}  ${(theme==="dark") && "--dark --lightGreyText"}`}
                  type="text"
                  name=""
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={{
                    border: "none",
                    margin: "15px",
                    width: "96%",
                    height: "170px",
                    outline: "none",
                    resize: "none",
                    fontFamily: "inherit",
                    fontSize: "16px",
                    overflow: "auto",
                    overflowY: "hidden",
                  }}
                  placeholder="What do you want to talk about"
                ></textarea>

                
                
                <button
                  style={{ display: "none" }}
                  onClick={sendPost}
                  type="submit"
                  
                >
                  Send
                </button>
              </form>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',}}>
                <div
                  style={{
                    marginLeft: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "60%",
                  }}
                >
                  <ImageIcon style={{cursor:'pointer'}} className={`${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--whiteText --hoverLightText"}`} />
                  <YouTubeIcon style={{cursor:'pointer'}} className={`${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--whiteText --hoverLightText"}`}/>
                  <WorkIcon style={{cursor:'pointer'}} className={`${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--whiteText --hoverLightText"}`} />
                  <CelebrationIcon style={{cursor:'pointer'}} className={`${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--whiteText --hoverLightText"}`} />
                  <EqualizerIcon style={{cursor:'pointer'}} className={`${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--whiteText --hoverLightText"}`}/>
                  <MoreHorizIcon style={{cursor:'pointer'}} className={`${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--whiteText --hoverLightText"}`}/>
                  <CommentIcon style={{cursor:'pointer'}} className={`${theme==="light" && "--darkGreyText"}  ${(theme==="dark") && "--whiteText --hoverLightText"}`}/>
                </div>
                <button style={{marginRight:'10px',border:'1px solid gainsboro',borderRadius:'20px',cursor:'pointer'}} type="" onClick={sendPost} className={`${theme==="light" && "--darkGreyText --lightGrey --hoverDark"}  ${(theme==="dark") && "--blackText --darkGrey --hoverLight"}`}><h2 style={{padding:'7.5px'}} > Post</h2></button>
              </div>
            </Typography>
          </Box>
      
        </div>
    )
}

export default ShareModal;

