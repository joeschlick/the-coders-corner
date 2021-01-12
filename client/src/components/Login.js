import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import API from "../utils/API";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  Paper,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useHistory } from "react-router-dom";

//Login - Signup Navbar
import LoginSignupNav from "./LoginSignupNav";
import Auth from "../Auth";

export default function Login() {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const [userObject, setUserObject] = useState([]);
  const [formObject, setFormObject] = useState([]);

  function loadUsers() {
    API.getUsers()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (formObject.password && formObject.email) {
      API.loginUser({
        password: formObject.password,
        email: formObject.email,
      })
        .then((res) => {
          console.log(res);
          // save the token
          Auth.authenticateUser(res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          history.push("/profile");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //Copyright at bottom of page
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Typography variant="span" color="inherit">
          Coders Corner
        </Typography>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  //Styling
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "auto",
      backgroundColor: "#edf6f9",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: "#db7500",
    },
    form: {
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      background: "#457b9d",
      color: "white",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <LoginSignupNav />
      <CssBaseline />
      <Grid
        style={{ marginTop: "60px" }}
        alignItems="center"
        justify="center"
        container
      >
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper} elevation={8}>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography class="coders-font" component="h1" variant="h5">
                Login
              </Typography>
              <Grid container item xs={10} sm={6} md={4}>
                <form className={classes.form} noValidate>
                  <TextField
                    variant="filled"
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
                    variant="filled"
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
              </Grid>
            </div>
            <Box mt={8}>
              <Copyright />
            </Box>
            <br></br>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
