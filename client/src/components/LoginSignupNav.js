import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) =>({
    button: {
        color: "white",
        marginRight: theme.spacing(2),
        
    }
}))

export default function LoginSignupNav(){

    const classes = useStyles();
    const history = useHistory();

    function login(){
        history.push('/login')
    }

    function signup(){
        history.push('/')
    }

    return (
            <Box component="nav">
                <AppBar position="static" style={{background: "#457b9d"}}>
                    <Toolbar>
                        <i class="fab fa-connectdevelop fa-3x"></i>
                        <Typography class="navbar-font" variant="h1" style={{color: "white", marginLeft: "10px", flexGrow: 1}}>
                            Coder's Corner
                        </Typography>
                        <Button className={classes.button} onClick={login}>
                            Login
                        </Button>
                        <Button className={classes.button} onClick={signup}>
                            Signup
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
    )
}
