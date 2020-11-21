import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Login from "./components/Login";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Resources from "./components/Resources";
import Chat from "./components/Chat";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
    <CssBaseline />
    <Navbar />
    <Route exact path="/" component={Login}/>
    <Route exact path="/feed" component={Feed}/>
    <Route exact path="/profile" component={Profile}/>
    <Route exact path="/resources" component={Resources}/>
    <Route exact path="/chat" component={Chat}/>
    <Route exact path="/editor" component={Editor}/>
    </div>
  );
}

export default App;
