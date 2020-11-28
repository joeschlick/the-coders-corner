import React, { useState } from 'react'
import API from "../utils/API";
import { 
    Input, 
    Avatar, 
    Button, 
    CssBaseline, 
    TextField, 
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Container 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default function Login() {
    const [formObject, setFormObject] = useState([]);

    function loadUsers(){
        API.getUsers()
            .then((res) => {
                // getUsers(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleInputChange(e){
        const { name, value } = e.target;
        setFormObject({ ...formObject, [name]: value });
    }

    function handleFormSubmit(e){
        e.preventDefault();
        if(formObject.password && formObject.email){
            API.getUsers()
            .then((res) => {
                // getUsers(res.data);
                console.log(res.data);
                let allUsers = res.data;
                let userID = allUsers.filter(user => {
                    if (user.email === formObject.email && user.password === formObject.password) {
                        return user
                    }
                })
                console.log(userID)
            })
            .catch((err) => {
                console.log(err);
            })
            // API.getUser({
            //     email: formObject.email,
            //     password: formObject.password
            // })
            // .then((res) => {
            //     loadUsers();
            // })
            // .catch((err) => console.log(err));
            // console.log(formObject);
        }
    }

    //Copyright at bottom of page
    function Copyright() {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Typography variant="span" color="inherit">
              Coders Corner
            </Typography>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

      //Styling
      const useStyles = makeStyles((theme) => ({
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: "#457b9d",
        },
        form: {
          width: '60%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
          background: "#457b9d",
          color: "white"
        },
      }));

      const classes = useStyles();

    return (
        <Container>
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleInputChange}
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="password"
                        id="password"
                        auto-complete="current-password"
                        onChange={handleInputChange}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <Button
                        fullWidth
                        className={classes.submit}
                        variant="contained" 
                        disabled={!(formObject.email && formObject.password)} 
                        onClick={handleFormSubmit}
                    >
                        Log In
                    </Button>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    )
}
