import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MobileLeftMenuSlider from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import {Home, ExitToApp, Forum, DynamicFeed, AccountCircle, Code, Group, LockOpen} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    sliderMenu:{
        background: "#457b9d",
        width: "200px",
        color: "white",
        height: "100%"
    }
}))

const menuItems = [
    {
        listIcon: <AccountCircle />,
        listText: "Profile",
        listPath: "/profile"
    },
    {
        listIcon: <Group />,
        listText: "HackHub",
        listPath: "/hackhub"
    },
    {
        listIcon: <DynamicFeed />,
        listText: "Feed",
        listPath: "/feed"
    },
    {
        listIcon: <Forum />,
        listText: "Chat",
        listPath: "/chat"
    },
    {
        listIcon: <Code />,
        listText: "Editor",
        listPath: "/editor"
    },
    {
        listIcon: <ExitToApp />,
        listText: "Sign Up",
        listPath: "/"
    },
    {
        listIcon: <LockOpen />,
        listText: "Logout",
        listPath: "/login"
    }
]

export default function Navbar() {
    const classes = useStyles()
    const [state, setState] = useState({
        left: false
    });
    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open})
    };
    const sideList = slider => {
        return(
        <Box className={classes.sliderMenu} component="div" onClick={toggleSlider(slider, false)}>
                <Divider />
                <List >
                    {menuItems.map((items, key) => (
                    <ListItem button key={key} component={Link} to={items.listPath}> 
                        <ListItemIcon style={{color: "white"}}>
                            {items.listIcon}
                        </ListItemIcon>
                        <ListItemText primary={items.listText}/>
                    </ListItem>
                    ))}
                </List>
            </Box>
        );
    }
    return (
        <div>
            <Box component="nav">
                <AppBar position="static" style={{background: "#457b9d"}}>
                    <Toolbar>
                    <IconButton onClick={toggleSlider("left", true)}>
                            <MenuIcon style={{ color: "white" }}/>
                        </IconButton>
                        <i class="fab fa-connectdevelop fa-3x"></i>
                        <Typography class="navbar-title" variant="h1" style={{color: "white", marginLeft: "10px"}}>
                            Coder's Corner
                        </Typography>
                        <MobileLeftMenuSlider
                            anchor="left" 
                            open={state.left} 
                            onClose={toggleSlider("left", false)}
                        >
                            {sideList("left")}</MobileLeftMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}
