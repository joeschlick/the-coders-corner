import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Signup from "./components/Signup";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import HackHub from "./components/HackHub";
import Chat from "./components/Chat";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Signup/>
        </Route>
        <Route exact path="/feed">
          <Feed/>
        </Route>
        <Route exact path="/profile"> 
          <Profile/>
        </Route>
        <Route exact path="/hackhub">
          <HackHub/>
        </Route>
        <Route exact path="/chat">
          <Chat/>
        </Route>
        <Route exact path="/editor">
          <Editor/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
