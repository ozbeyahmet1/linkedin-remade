import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Body from "./components/body/body";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { selectTheme } from "./features/themeSlice";
import BottomNavbar from "./components/cards/bottomNavbar";
// import Message from "./components/cards/message";

function App() {
  //Selecting userfrom userSlice
  const theme = useSelector(selectTheme);
  const user=useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      }
      else {
        dispatch(logout())
      }
    });
  }, [dispatch])


  return (
    <Router>
        {!user ? (
       <Login />
       ) : (
        <Switch>
            <Route exact path="/">
              <div className={`App ${theme==="light" && "--lightBackground"}  ${(theme==="dark") && "--darkBackground"}`}>
                <Navbar />
                <Body/>
                <BottomNavbar />
              </div>
            </Route>
        
        </Switch>
      )} 

    </Router>
  );
}

export default App;
