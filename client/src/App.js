import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Signup from "./components/Signup";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import HackHub from "./components/HackHub";
import Chat from "./components/Chat";
import Editor from "./components/Editor";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";

//Store User that is currently logged in
import UserContext from "./context/UserContext";

function App() {
  const [userData, setUserData] = useState({});

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path="/feed" component={Feed} />
          <Route path="/profile" component={Profile} />
          <Route path="/hackhub" component={HackHub} />
          <Route path="/chat" component={Chat} />
          <Route path="/editor" component={Editor} />
          <Route path="/login" component={Login} />
          <Route path="/userProfile" component={UserProfile} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
