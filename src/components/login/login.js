import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./login.css";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../features/userSlice";
import Background from "./Background";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [profilePic, setProfilePic] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  
  const [direct, setDirect] = React.useState(true);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const register = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Please enter the name");
    } 
      auth
      .createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
          userAuth.user
            .updateProfile({
              displayName: name,
              photoURL:profilePic,
            })
            .then(() => {
              dispatch(
                login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                  photoUrl: profilePic,
                })
              );
            });
        })
        .catch((error) => alert(error.message));
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email,password)
      .then((userAuth) => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
              })
            );
        
      })
      .catch((error) => alert(error.message));
  
};
  return (

    <div className="login__wrapper">
      <Background />
      {direct ? (
        <>
          <img
            className="register__navbar"
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
            alt=""
          />
          <form action="">
          <div className="login">
            <div className="login__inline">
              <h4>Sign in</h4>
              <h3>Keep up-to-date with your professional world</h3>

              <TextField
                // helperText="Please enter your name"
                className="login__textField"
                id="demo-helper-text-aligned"
                label="Email"
                style={{ marginBottom: "25px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                // helperText="Please enter your name"
                className="login__textField"
                id="demo-helper-text-aligned"
                label="Password"
                style={{ marginBottom: "40px" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
          
              <button className="login__button" type="submit" onClick={signIn}>
                <h2>Sign In</h2>
              </button>
            </div>
          </div>
          <div className="login__text">
            <h3 style={{ marginRight: "10px" }}>New to LinkedIn?</h3>
            <h3 onClick={() => setDirect(false)} style={{ color: "blue" }}>
              Join Now
            </h3>
          </div>
          </form>
         
        </>
      ) : (
        <>
          <img
            className="register__navbar"
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
            alt=""
          />
          <h1 className="register__navbarText">
            Make the most of your professional life
          </h1>
          <form action="">
            <div className="register">
              <div className="login__inline">
                <h3>Keep up-to-date with your professional world</h3>

                <TextField
                  helperText="Please enter your username"
                  className="login__textField"
                  id="demo-helper-text-aligned"
                  label="Username"
                  style={{ marginBottom: "15px" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <TextField
                  helperText="Please enter your profile image url (Optional)"
                  className="login__textField"
                  id="demo-helper-text-aligned"
                  label="Profile Picture Url"
                  style={{ marginBottom: "15px" }}
                  value={profilePic}
                  onChange={(e) => setProfilePic(e.target.value)}
                /> 
         

                <TextField
                  helperText="Please enter your email"
                  className="login__textField"
                  id="demo-helper-text-aligned"
                  label="Email"
                  style={{ marginBottom: "15px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                  helperText="Password(6 or more chracters)"
                  className="login__textField"
                  id="demo-helper-text-aligned"
                  label="Password"
                  style={{ marginBottom: "20px" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
                <button
                  onClick={register}
                  className="login__button"
                  type="submit"
                >
                  <h2>Join</h2>
                </button>
              </div>
            </div>
          </form>
        </>
        
      )}
   
    </div>
  );
}
